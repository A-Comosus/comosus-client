import React, { useEffect } from 'react';
import { useApiClient } from '@common/contexts';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useUpdateProfileMutation } from '@generated/graphql.queries';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LinkQueries } from '@src/constants';
import { VStack } from '@chakra-ui/react';
import EditableProfileAvatar from './EditableProfile.Avatar';
import EditableProfileInput from './EditableProfile.Input';
import { Textarea } from '@src/common/components';

type EditableProfileProps = {
  profile: {
    id: string;
    displayName?: string | null;
    bio?: string | null;
  };
};

export default function EditableProfile({ profile }: EditableProfileProps) {
  const { t } = useTranslation('admin');
  const { id, displayName, bio } = profile;
  useEffect(() => {
    reset({
      displayName: displayName ?? '',
      bio: bio ?? '',
    });
  }, [profile]);

  const formValues = {
    defaultValues: {
      displayName: displayName ?? '',
      bio: bio ?? '',
    },
    schema: yup
      .object({
        profileTitle: yup.string(),
        bio: yup.string(),
      })
      .required(),
  };

  const { control, handleSubmit, reset } = useForm({
    defaultValues: formValues.defaultValues,
    resolver: yupResolver(formValues.schema),
  });

  const { gqlClient, queryClient } = useApiClient();
  const { mutate: updateProfile } = useUpdateProfileMutation(gqlClient, {
    onSettled: (data) => {
      if (data) {
        queryClient.invalidateQueries(LinkQueries.FindByUsername);
      }
    },
  });

  const onSubmit = (data: EditableProfileFormType) => {
    updateProfile({
      payload: {
        id,
        ...data,
      },
    });
  };
  return (
    <VStack
      align="stretch"
      gap="1.6rem"
      borderRadius="15px"
      px="2.2rem"
      py="1.6rem"
      minWidth="670px"
      backgroundColor="#FFFFFF"
    >
      <EditableProfileAvatar />
      <EditableProfileInput
        name="displayName"
        label={t('appearance.profile.profile-title')}
        placeholder={t('appearance.profile.profile-title')}
        control={control}
        onBlur={handleSubmit(onSubmit)}
      />
      <Textarea
        name="bio"
        control={control}
        onBlur={handleSubmit(onSubmit)}
        maxLength={100}
        label={t('appearance.profile.bio')}
        placeholder={t('appearance.profile.bio-placeholder')}
      />
    </VStack>
  );
}
