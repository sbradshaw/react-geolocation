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
        currentPin: null,
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
    case "DELETE_DRAFT":
      return {
        ...state,
        draft: null
      };
    case "GET_PINS":
      return {
        ...state,
        pins: action.payload
      };
    case "CREATE_PIN":
      const newPin = action.payload;
      const previousPins = state.pins.filter(pin => pin._id !== newPin._id);
      return {
        ...state,
        pins: [...previousPins, newPin]
      };
    case "SET_PIN":
      return {
        ...state,
        currentPin: action.payload,
        draft: null
      };
    default:
      return state;
  }
}
