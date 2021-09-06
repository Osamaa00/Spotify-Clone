
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {

    const hash = getTokenFromUrl();

    // clear the access token for security purposes after we ve got it
    window.location.hash = "";

    const _token = hash.access_token;

    if ( _token ) {
      setToken(_token);
    }
  }, [])

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

// 480eead1c18344f794de27ca22ff0ab5

export default App;
