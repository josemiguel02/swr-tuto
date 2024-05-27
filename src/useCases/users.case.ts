import useSWR from 'swr';
import { fetchUsers } from '../services/user.service';
import { ApiKeys } from '../enums/apiKeys.enum';

export const useUsersCase = () => {
  const { data, isLoading, error, mutate } = useSWR(
    ApiKeys.UserKey,
    fetchUsers
  );

  return {
    users: data,
    isLoading,
    error,
    mutate,
    refetch: () => mutate(undefined, { revalidate: true }),
  };
};
