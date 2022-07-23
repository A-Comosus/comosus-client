import React from 'react';
import { useTranslation } from 'react-i18next';
import { useApiClient } from '@common/contexts';
import { useDeleteLinkByIdMutation } from '@generated/graphql.queries';

import { LinkQueries } from '@src/constants';
import { Button, Text } from '@src/common/components';
import { VStack, HStack } from '@chakra-ui/react';
import { BiChevronUp } from 'react-icons/bi';
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
        <motion.div
          initial={{ maxHeight: 0 }}
          animate={{
            maxHeight: 600,
            transition: { duration: 1 },
            transitionTimingFunction: 'ease-in-out',
          }}
          exit={{
            maxHeight: 0,
            transition: { duration: 1 },
            transitionTimingFunction: 'ease-in-out',
          }}
        >
          <VStack borderRadius={4} p={[5, 10, 4, 4]} bg="white" align="stretch">
            <HStack justify="center">
              <BiChevronUp />
            </HStack>
            <Text alignSelf="center">{t('link.editor.toggle.prompt')}</Text>
            <HStack gap={5} px={10}>
              <Button
                variantType="secondary"
                flex={1}
                py={1}
                color="#000"
                onClick={() => toggleShowDelete()}
              >
                {t('link.editor.toggle.cancel')}
              </Button>
              <Button
                variantType="secondary"
                flex={1}
                py={1}
                isLoading={isDeleting}
                color="#fff"
                bg="#55698C"
                onClick={handleDelete}
              >
                {t('link.editor.toggle.delete')}
              </Button>
            </HStack>
          </VStack>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
