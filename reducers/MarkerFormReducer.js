import {
  MARKER_CREATE,
} from '../screens/MarkerActions';

const INITIAL_STATE = {
  price: '',
  location: '',
  latitude: '',
  longitude: ''
};

export default ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
