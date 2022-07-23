import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useApiClient } from '@common/contexts';
import { useUpdateLinkMutation } from '@generated/graphql.queries';
import { useForm } from 'react-hook-form';
import { useToggle } from '@src/utils/hooks';


import { HStack, VStack, Image, IconButton } from '@chakra-ui/react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { yupResolver } from '@hookform/resolvers/yup';
import { LinkQueries } from '@src/constants';
import { DraggableProvided } from 'react-beautiful-dnd';
import EditableLinkInput from './EditableLink.Input';
import EditableLinkButton from './EditableLink.Button';
import EditableLinkDelete from './EditableLink.Delete';
import EditableLinkSwitch from './EditableLink.Switch';

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
    <VStack align="stretch">
      <HStack
        align="stretch"
        gap={5}
        borderRadius={4}
        p={[5, 10, 4, 4]}
        bg="white"
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

        <HStack flex={1} justify="space-between" align="stretch" gap={5}>
          <VStack flex={1} align="stretch">
            <VStack align="stretch">
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

            <HStack gap={2}>
              <EditableLinkButton />
              <EditableLinkButton />
              <EditableLinkButton />
              <EditableLinkButton />
            </HStack>
          </VStack>

          <VStack justify="space-between">
            <EditableLinkSwitch
              name="isVisible"
              control={control}
              onChange={handleSubmit(onSubmit)}
            />
            <IconButton
              onClick={() => toggleShowDelete()}
              icon={<RiDeleteBin5Line />}
              aria-label="delete link"
              maxH={5}
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
