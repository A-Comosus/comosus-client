import { useUpdateAvatarUrlMutation } from '@generated/graphql.queries';
import { useApiClient } from '@src/common/contexts';
import { UserQuery } from '@src/constants';

export function useUpdateAvatarApi() {
  const { gqlClient, queryClient } = useApiClient();

  const {
    mutate: updateAvatar,
    error,
    isLoading: isUpdating,
  } = useUpdateAvatarUrlMutation(gqlClient, {
    onSettled: () => {
      queryClient.invalidateQueries(UserQuery.FindById);
    },
  });

  return { updateAvatar, error, isUpdating };
}
