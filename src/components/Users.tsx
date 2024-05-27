import { useUsersCase } from '../useCases/users.case';

export const Users = () => {
  const { users, isLoading, error } = useUsersCase();

  if (error) return <span>Error to get users</span>;
  if (isLoading || !users) return <span>Loading...</span>;

  return (
    <div>
      <h2>Users:</h2>

      <div className="list">
        {users.map(user => (
          <div key={user.id}>
            <img src={user.avatar} alt={user.name} width={60} />{' '}
            <span className="text-truncate">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
