import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useApiClient } from '@common/contexts';
import {
  useDeleteLinkByIdMutation,
  useUpdateLinkMutation,
} from '@generated/graphql.queries';

import { HStack, VStack, Image, IconButton } from '@chakra-ui/react';
import { RiDeleteBin5Line } from 'react-icons/ri';

import EditableLinkInput from './EditableLink.Input';
import EditableLinkButton from './EditableLink.Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LinkQueries } from '@src/constants';
import EditableLinkSwitch from './EditableLink.Switch';

type EditableLinkProps = {
  link: {
    id: string;
    isVisible: boolean;
    title?: string | null;
    url?: string | null;
  };
};

export default function EditableLink({ link }: EditableLinkProps) {
  const { id, isVisible, title, url } = link;

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

  const { mutate: deleteLink, isLoading: isDeleting } =
    useDeleteLinkByIdMutation(gqlClient, {
      onSettled: (data, error) => {
        if (error) {
          // TODO: handle deletion error
        } else {
          queryClient.invalidateQueries(LinkQueries.FindAllOfAnUser);
        }
      },
    });

  const handleDelete = () => deleteLink({ payload: { id } });

  return (
    <HStack
      align="stretch"
      gap={5}
      borderRadius={4}
      p={[5, 10, 4, 4]}
      bg="white"
    >
      <Image
        src="/assets/icons/drag-handle.svg"
        alt="drag-handle"
        pr={4}
        borderRight="1px solid #ADB2C6"
      />

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
            onClick={handleDelete}
            isLoading={isDeleting}
            icon={<RiDeleteBin5Line />}
            aria-label="delete link"
            maxH={5}
            bg="none"
          />
        </VStack>
      </HStack>
    </HStack>
  );
}
