import useSWR from 'swr';
import { ApiKeys } from '../enums/apiKeys.enum';
import { User } from '../interfaces/user.interface';

export const AnotherComponent = () => {
  const { data } = useSWR<User[]>(ApiKeys.UserKey);

  return (
    <div>
      <h2>AnotherComponent</h2>

      {data && <span>First user: {data[0]?.name}</span>}
    </div>
  );
};
