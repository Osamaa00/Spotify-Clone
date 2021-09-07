// create the initial state
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: 'BQBmAVD7fKIIydhicBxAjpGvSKFT8_9arLR9X0TTbSvZkcYE-MWUQQbUHDgBa7H8t8CmMHObT6YpwH8D0NOSL1b9EKBTrjqFk7ogBl63lfyuoxxLK0alBiiYdeyxhNBAc1f2PcbxKMnHMnrnpjAEV7KRoBSjzJFhA_L2aGzL365L7eWC',
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

    // if nothing happens then just return state
    // means if an action is dispatched which cant be listened
    default:
      return state;
  }
};

export default reducer;
