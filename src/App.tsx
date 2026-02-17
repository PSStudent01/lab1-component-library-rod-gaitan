import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';

function App() {

  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarUrl: 'https://example.com/avatar.jpg'
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Component Library</h1>

      <AlertBox type="success" message="AlertBox component works!" />

      <div className="mt-4">
        <AlertBox
          type="error"
          message="Error alert with close button"
          onClose={() => alert('Closed!')}
        />
      </div>

      {/* After creating 'UserProfileCard' component and importing it here, I must use it as follows: */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">UserProfileCard</h2>
        <div className="max-w-md">
          <UserProfileCard
            user={user}
            showEmail={true}
            showRole={true}
            onEdit={(userId) => alert(`Editing user ${userId}`)}
          >
            <div className="text-sm text-gray-500">
              Last login: 2 hours ago
            </div>
          </UserProfileCard>
        </div>
      </div>
    </div>
  );
}

export default App;




/*
function App() {
  return (
    <div className="p-8 bg-blue-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Tailwind is working!
      </h1>
    </div>
  );
}

export default App;
*/


/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

