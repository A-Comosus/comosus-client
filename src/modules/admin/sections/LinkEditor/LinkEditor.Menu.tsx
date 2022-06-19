import React from 'react';
import { useCreateNewLinkMutation } from '@generated/graphql.queries';
import { useApiClient, useUser } from '@common/contexts';
import { LinkQueries } from '@src/constants';

import { HStack } from '@chakra-ui/react';
import { Button } from '@common/components';

export default function LinkEditorMenu() {
  const {
    user: { id: userId },
  } = useUser();
  const { gqlClient, queryClient } = useApiClient();
  const { mutate: addNewLink, isLoading: isAddingNewLink } =
    useCreateNewLinkMutation(gqlClient, {
      onSettled: (data, error) => {
        if (error) {
          // TODO: Handle error creating new link
        } else {
          queryClient.invalidateQueries(LinkQueries.FindAllOfAnUser);
        }
      },
    });
  const handleAddNewLink = () => addNewLink({ payload: { userId } });

  return (
    <HStack justify="space-around" pt={20} px={6} gap={5}>
      <Button flex={1} onClick={handleAddNewLink} isLoading={isAddingNewLink}>
        Add New Link
      </Button>
      <Button isDisabled flex={1}>
        Explore
      </Button>
    </HStack>
  );
}
