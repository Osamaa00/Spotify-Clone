
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

// super spotify obj for interaction btw our app and spotify
const spotify = new SpotifyWebApi();

function App() {

  // const [token, setToken] = useState(null);

  // dispatch is a gun to shoot at the data layer to update it 
  // get anything from it
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {

    const hash = getTokenFromUrl();

    // clear the access token for security purposes after we ve got it
    window.location.hash = "";

    const _token = hash.access_token;

    if ( _token ) {
      // setToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      // giving the access token to spotify to talk
      spotify.setAccessToken(_token);

      // getting the user profile
      spotify.getMe().then(user => {
        
        dispatch({
          type: 'SET_USER',
          user,
        })
      });
    }
  }, []);

  console.log(user);

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
