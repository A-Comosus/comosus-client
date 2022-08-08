import { useApiClient } from '@src/common/contexts';
import { useAuth } from '@src/stores';
import { useDeleteAccountMutation } from '@generated/graphql.queries';
import { useRouter } from 'next/router';
import { GlobalRoute } from '@src/constants';
import { useToast } from '@chakra-ui/react';

export function useDeleteAccountAPI() {
  const { gqlClient } = useApiClient();
  const { id } = useAuth();
  const router = useRouter();

  const toast = useToast();
  const {
    mutate,
    error,
    isLoading: isDeleting,
  } = useDeleteAccountMutation(gqlClient, {
    onSettled: (data, error) => {
      if (error) {
        toast({
          status: 'error',
          title: 'Oooops 😥',
          description:
            'Something went wrong when deleting your account [should maybe have error code here or something]',
          variant: 'subtle',
        });
      }

      if (data) {
        toast({ status: 'success', title: 'Goodby 🥲', variant: 'subtle' });
        router.push(GlobalRoute.Root);
      }
    },
  });

  const deleteAccount = () => mutate({ id: id as string });
  return { deleteAccount, error, isDeleting };
}
