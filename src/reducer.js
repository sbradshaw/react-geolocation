export default function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    case "SIGNOUT_USER":
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false
      };
    case "IS_LOGGED_IN":
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case "CREATE_DRAFT":
      return {
        ...state,
        draft: {
          latitude: 0,
          longitude: 0
        }
      };
    case "UPDATE_DRAFT_LOCATION":
      return {
        ...state,
        draft: action.payload
      };
    default:
      return state;
  }
}
