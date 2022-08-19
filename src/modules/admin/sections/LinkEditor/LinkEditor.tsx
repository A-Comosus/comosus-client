import React, { useMemo, useState } from 'react';
import * as _ from 'lodash';
import {
  useFindLinksOfUserByUserIdQuery,
  useReorderLinksOfUserMutation,
} from '@generated/graphql.queries';
import { useUser, useApiClient } from '@common/contexts';

import { Spinner, VStack } from '@chakra-ui/react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import EditableLink from './EditableLink/EditableLink';
import LinkEditorMenu from './LinkEditor.Menu';
import { LinkQueries } from '@src/constants';

export default function LinkEditor() {
  const {
    user: { id: userId },
  } = useUser();
  const { gqlClient, queryClient } = useApiClient();
  const enabled = useMemo(() => {
    return !_.isNil(userId);
  }, [userId]);
  const [links, setLinks] = useState<EditableLink[]>([]);
  const { isLoading: isLoadingLinks } = useFindLinksOfUserByUserIdQuery(
    gqlClient,
    { payload: { userId } },
    {
      enabled,
      onSettled: (data) => data && setLinks(data.findLinksOfUserByUserId),
    },
  );

  const { mutate: reorderLinks, isLoading: isReordering } =
    useReorderLinksOfUserMutation(gqlClient, {
      onSettled: (data) => {
        if (data) {
          queryClient.invalidateQueries(LinkQueries.FindByUsername);
        }
      },
    });

  const onDragEnd = ({ source, destination }: DropResult) => {
    // dropped outside the list
    if (!destination) return;

    const orderedLinks = reorder(links, source.index, destination.index);
    setLinks(orderedLinks);
    reorderLinks({
      payload: { userId, order: orderedLinks.map((link) => link.id) },
    });
  };
  return (
    <VStack align="stretch" spacing="2rem">
      <LinkEditorMenu isReordering={isReordering} />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="linklist">
          {(provided) => (
            <VStack
              flex={1}
              align="stretch"
              spacing="0"
              gap="2rem"
              overflowY="auto"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {isLoadingLinks ? (
                <Spinner />
              ) : _.isNil(links) ? (
                <>Create your first</>
              ) : (
                links.map((link, index) => (
                  <Draggable key={link.id} draggableId={link.id} index={index}>
                    {(provided) => (
                      <EditableLink link={link} draggableProps={{ provided }} />
                    )}
                  </Draggable>
                ))
              )}
              {provided.placeholder}
            </VStack>
          )}
        </Droppable>
      </DragDropContext>
    </VStack>
  );
}

const reorder = (
  list: EditableLink[],
  startIndex: number,
  endIndex: number,
): EditableLink[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
