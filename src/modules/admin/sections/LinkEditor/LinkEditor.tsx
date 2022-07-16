import React, { useEffect, useMemo, useState } from 'react';
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
          // eslint-disable-next-line no-console
          console.log('Fetched', data.reorderLinksOfUser);
          queryClient.invalidateQueries(LinkQueries.FindByUsername);
        }
      },
    });

  const onDragEnd = ({ source, destination }: DropResult) => {
    // dropped outside the list
    if (!destination) return;

    const orderedLinks = reorder(links, source.index, destination.index);
    // eslint-disable-next-line no-console
    console.log(
      'Ordered',
      orderedLinks.map((link) => link.id),
    );

    setLinks(orderedLinks);
    reorderLinks({
      payload: { userId, order: orderedLinks.map((link) => link.id) },
    });
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(links);
  }, [links]);

  return (
    <VStack flex={2} borderRight="1px solid #E7E8EE">
      <VStack minW="600px" align="stretch">
        <LinkEditorMenu isReordering={isReordering} />

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="linklist">
            {(provided) => (
              <VStack
                gap={5}
                align="stretch"
                overflowY="auto"
                __css={{
                  '&::-webkit-scrollbar': { width: '3px' },
                  '&::-webkit-scrollbar-thumb': {
                    background: '#ADB2C6',
                  },
                }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {isLoadingLinks ? (
                  <Spinner />
                ) : _.isNil(links) ? (
                  <>Create your first</>
                ) : (
                  links.map((link, index) => (
                    <Draggable
                      key={link.id}
                      draggableId={link.id}
                      index={index}
                    >
                      {(provided) => (
                        <EditableLink
                          link={link}
                          draggableProps={{ provided }}
                        />
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
