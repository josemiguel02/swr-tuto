import { useState } from 'react';
import { useUsersCase } from './useCases/users.case';
import { Users } from './components/Users';
import { AnotherComponent } from './components/AnotherComponent';

const App = () => {
  const [showUsers, setShowUsers] = useState(true);
  const { refetch } = useUsersCase();

  return (
    <div>
      <h1>Swr Tuto</h1>

      <button onClick={() => setShowUsers(prev => !prev)}>
        Show users
      </button>

      <button onClick={refetch} style={{ marginLeft: '12px' }}>
        Refetch users
      </button>

      <AnotherComponent />

      {showUsers && <Users />}
    </div>
  );
};

export default App;
