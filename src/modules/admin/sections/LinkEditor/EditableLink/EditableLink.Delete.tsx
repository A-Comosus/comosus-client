import React from 'react';

import { Button, Text } from '@src/common/components';
import { VStack, HStack } from '@chakra-ui/react';
import { BiChevronUp } from 'react-icons/bi';

type EditableLinkDeleteProps = {
  handleDelete: () => void;
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function EditableLinkDelete({
  handleDelete,
  setShowDelete,
}: EditableLinkDeleteProps) {
  return (
    <VStack borderRadius={4} p={[5, 10, 4, 4]} bg="white" align="stretch">
      <HStack justify="center">
        <BiChevronUp />
      </HStack>
      <Text mt="0" alignSelf="center">
        Delete this forever?
      </Text>
      <HStack gap={5} px={10}>
        <Button
          flex={1}
          py={1}
          size="sm"
          borderRadius="10px"
          background="#DADEE0"
          onClick={() => setShowDelete(false)}
        >
          <Text color="black">Cancel</Text>
        </Button>
        <Button
          flex={1}
          py={1}
          size="sm"
          borderRadius="10px"
          background="#3B3C46"
          onClick={handleDelete}
        >
          <Text>Delete</Text>
        </Button>
      </HStack>
    </VStack>
  );
}
