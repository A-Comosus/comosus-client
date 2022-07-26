import React, { useMemo } from 'react';
import * as _ from 'lodash';
import { useFindLinksOfUserByUserIdQuery } from '@generated/graphql.queries';
import { useUser, useApiClient } from '@common/contexts';

import { Spinner, VStack } from '@chakra-ui/react';
import EditableLink from './EditableLink/EditableLink';
import LinkEditorMenu from './LinkEditor.Menu';

export default function LinkEditor() {
  const {
    user: { id: userId },
  } = useUser();
  const { gqlClient } = useApiClient();
  const enabled = useMemo(() => {
    return !_.isNil(userId);
  }, [userId]);
  const { data: links, isLoading: isLoadingLinks } =
    useFindLinksOfUserByUserIdQuery(
      gqlClient,
      { payload: { userId } },
      {
        enabled,
        select: (data) => data.findLinksOfUserByUserId,
      },
    );

  return (
    <VStack minW="515px" align="stretch">
      <LinkEditorMenu />

      <VStack gap={5} align="stretch" overflow="scroll">
        {isLoadingLinks ? (
          <Spinner />
        ) : _.isNil(links) ? (
          <>Create your first</>
        ) : (
          links.map((link, index) => <EditableLink key={index} link={link} />)
        )}
      </VStack>
    </VStack>
  );
}
