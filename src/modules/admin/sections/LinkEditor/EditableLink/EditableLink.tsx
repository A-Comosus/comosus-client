import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useApiClient } from '@common/contexts';
import { useUpdateLinkMutation } from '@generated/graphql.queries';
import { useForm } from 'react-hook-form';
import { useToggle } from '@src/utils/hooks';

import { HStack, VStack, Image, IconButton } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { LinkQueries } from '@src/constants';
import { DraggableProvided } from 'react-beautiful-dnd';
import EditableLinkInput from './EditableLink.Input';
import EditableLinkDelete from './EditableLink.Delete';
import EditableLinkSwitch from './EditableLink.Switch';
import { Icon } from '@src/common/components';

type EditableLinkProps = {
  link: {
    id: string;
    isVisible: boolean;
    title?: string | null;
    url?: string | null;
  };
  draggableProps: {
    provided: DraggableProvided;
  };
};

export default function EditableLink({
  link,
  draggableProps: { provided },
}: EditableLinkProps) {
  const { id, isVisible, title, url } = link;
  const [showDelete, toggleShowDelete] = useToggle();
  useEffect(() => {
    reset({
      isVisible,
      title: title ?? '',
      url: url ?? '',
    });
  }, [link]);

  const formValues = {
    inputs: [
      {
        name: 'title',
        placeholder: 'Title',
      },
      {
        name: 'url',
        placeholder: 'Url',
      },
    ],
    defaultValues: {
      isVisible: isVisible,
      title: title ?? '',
      url: url ?? '',
    },
    schema: yup
      .object({
        title: yup.string(),
        url: yup.string().url('This must be url').required('This is required'),
      })
      .required(),
  };

  const { control, handleSubmit, reset } = useForm({
    defaultValues: formValues.defaultValues,
    resolver: yupResolver(formValues.schema),
  });

  const { gqlClient, queryClient } = useApiClient();
  const { mutate: updateLink } = useUpdateLinkMutation(gqlClient, {
    onSettled: (data) => {
      if (data) {
        queryClient.invalidateQueries(LinkQueries.FindAllOfAnUser);
        queryClient.invalidateQueries(LinkQueries.FindByUsername);
      }
    },
  });

  const onSubmit = (data: EditableLinkFormType) => {
    updateLink({
      payload: {
        id,
        ...data,
      },
    });
  };
  return (
    <VStack align="stretch" spacing="2rem">
      <HStack
        align="stretch"
        spacing="2rem"
        borderRadius="1rem"
        p="2rem 1.6rem"
        bg="#272429"
        fontSize="1.6rem"
        {...provided.draggableProps}
        ref={provided.innerRef}
      >
        <HStack align="stretch" {...provided.dragHandleProps}>
          <Image
            src="/assets/icons/drag-handle.svg"
            alt="drag-handle"
            pr={4}
            borderRight="1px solid #ADB2C6"
          />
        </HStack>

        <HStack flex={1} justify="space-between" align="center" gap={5}>
          <VStack flex={1} align="stretch">
            {formValues.inputs.map(({ name, placeholder }, index) => (
              <EditableLinkInput
                key={index}
                name={name as keyof EditableLinkFormType}
                control={control}
                placeholder={placeholder}
                onBlur={handleSubmit(onSubmit)}
              />
            ))}
          </VStack>

          <VStack justify="space-between">
            <EditableLinkSwitch
              name="isVisible"
              control={control}
              onChange={handleSubmit(onSubmit)}
            />
            <IconButton
              onClick={() => toggleShowDelete()}
              icon={<Icon variant="delete" />}
              aria-label="delete link"
              fontSize="1.6rem"
              bg="none"
            />
          </VStack>
        </HStack>
      </HStack>
      <EditableLinkDelete
        id={id}
        showDelete={showDelete}
        toggleShowDelete={toggleShowDelete}
      />
    </VStack>
  );
}
