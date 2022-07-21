import React from 'react';
import { useTranslation } from 'react-i18next';
import { useApiClient } from '@common/contexts';
import { useDeleteLinkByIdMutation } from '@generated/graphql.queries';

import { LinkQueries } from '@src/constants';
import { Button, Text } from '@src/common/components';
import { VStack, HStack } from '@chakra-ui/react';
import { BiChevronUp } from 'react-icons/bi';
import { motion } from 'framer-motion';

type EditableLinkDeleteProps = {
  cycleShowDelete: () => void;
  id: string;
};

export default function EditableLinkDelete({
  id,
  cycleShowDelete,
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
            flex={1}
            py={1}
            size="sm"
            borderRadius="10px"
            background="#DADEE0"
            onClick={() => cycleShowDelete()}
          >
            <Text color="black">{t('link.editor.toggle.cancel')}</Text>
          </Button>
          <Button
            flex={1}
            py={1}
            size="sm"
            isLoading={isDeleting}
            borderRadius="10px"
            background="#3B3C46"
            onClick={handleDelete}
          >
            <Text>{t('link.editor.toggle.delete')}</Text>
          </Button>
        </HStack>
      </VStack>
    </motion.div>
  );
}
