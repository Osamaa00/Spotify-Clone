// create the initial state
export const initialState = {
  user: null,
  playlists: [],
  item: null,
  playing: false,
  top_artists: null,
  discover_weekly: null,
};

// creating the reducer
// reducer takes a state and an action
// action is how we manipulate what the data layer looks like
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    // we want to push a user to the data layer
    // we dispatch an action
    // action has a type e.g. 'SET_USER' and a payload
    // the primary job of a reducer to listens to actions
    // when receive an action of 'SET_USER' then do this:
    // keep whatever is in our state and set the user in the data layer to what we got in the payload
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
    
      case 'SET_PLAYING':
        return {
          ...state,
          playing: action.playing
        }
      
      case 'SET_SPOTIFY':
        return {
          ...state,
          spotify: action.spotify
        }

      case 'SET_TOP_ARTISTS':
        return {
          ...state,
          top_artists: action.top_artists,
        }

      case 'SET_ITEM':
        return {
          ...state,
          item: action.item,
        }
    // if nothing happens then just return state
    // means if an action is dispatched which cant be listened
    default:
      return state;
  }
};

export default reducer;
