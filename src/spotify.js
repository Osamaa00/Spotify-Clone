// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// send the user to spotify
export const authEndpoint = "https://accounts.spotify.com/authorize";

// after authorized send it back to our app
const redirectUri = "http://localhost:3000/";

const clientId = "480eead1c18344f794de27ca22ff0ab5";

// include scopes to grant access to user's spotify stuff
// only to listen and view not to edit or delete anything
// correct permissions to do stuff

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// getting the access token
// reduce func takes two params an initial and and an item to iterate
// and at end we give an empty obj meaning at start what initial should start with

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        // #accessToken=mytoken&name=osama
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

// the url which user will go to along with all the url params (data)
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
