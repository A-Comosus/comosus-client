import React from 'react';
import { useCreateNewLinkMutation } from '@generated/graphql.queries';
import { useApiClient, useUser } from '@common/contexts';
import { LinkQueries } from '@src/constants';

import { HStack } from '@chakra-ui/react';
import { Button } from '@common/components';
import { useTranslation } from 'react-i18next';

type LinkEditorMenuProps = {
  isReordering: boolean;
};
export default function LinkEditorMenu({ isReordering }: LinkEditorMenuProps) {
  const { t } = useTranslation('admin');

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
      <Button
        onClick={handleAddNewLink}
        isLoading={isAddingNewLink || isReordering}
      >
        {t('link.editor.menu.add-new-link')}
      </Button>
      <Button isDisabled isLoading={isReordering}>
        {t('link.editor.menu.explore')}
      </Button>
    </HStack>
  );
}
