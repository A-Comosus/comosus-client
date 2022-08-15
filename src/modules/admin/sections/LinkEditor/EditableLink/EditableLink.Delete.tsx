import React from 'react';
import { useTranslation } from 'react-i18next';
import { useApiClient } from '@common/contexts';
import { useDeleteLinkByIdMutation } from '@generated/graphql.queries';

import { LinkQueries } from '@src/constants';
import { Button, Icon, Text } from '@src/common/components';
import { VStack, HStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

type EditableLinkDeleteProps = {
  toggleShowDelete: () => void;
  showDelete: boolean;
  id: string;
};

export default function EditableLinkDelete({
  id,
  showDelete,
  toggleShowDelete,
}: EditableLinkDeleteProps) {
  const { t } = useTranslation('admin');
  const { gqlClient, queryClient } = useApiClient();
  const { mutate: deleteLink, isLoading: isDeleting } =
    useDeleteLinkByIdMutation(gqlClient, {
      onSettled: (data, error) => {
        if (error) {
          // TODO: handle deletion error
        } else {
          queryClient.invalidateQueries(LinkQueries.FindAllOfAnUser);
          queryClient.invalidateQueries(LinkQueries.FindByUsername);
        }
      },
    });

  const handleDelete = () => deleteLink({ payload: { id } });
  return (
    <AnimatePresence>
      {showDelete ? (
        <VStack
          as={motion.div}
          overflow="hidden"
          align="center"
          spacing="2rem"
          borderRadius="1rem"
          p="1rem 1.6rem"
          bg="#272429"
          fontSize="1.6rem"
          initial={{ maxHeight: 0 }}
          animate={{
            maxHeight: '100%',
            transition: { duration: 0.4 },
            transitionTimingFunction: 'ease-in-out',
          }}
          exit={{
            maxHeight: 0,
            transition: { duration: 0.4 },
            transitionTimingFunction: 'ease-in-out',
          }}
        >
          <VStack>
            <Icon variant="arrow-up" />
            <Text alignSelf="center">{t('link.editor.toggle.prompt')}</Text>
          </VStack>
          <HStack gap={5} px={10}>
            <Button
              onClick={() => toggleShowDelete()}
              variant="primary"
              size="sm"
            >
              {t('link.editor.toggle.cancel')}
            </Button>
            <Button
              variant="accent"
              onClick={handleDelete}
              isLoading={isDeleting}
              size="sm"
            >
              {t('link.editor.toggle.delete')}
            </Button>
          </HStack>
        </VStack>
      ) : null}
    </AnimatePresence>
  );
}
