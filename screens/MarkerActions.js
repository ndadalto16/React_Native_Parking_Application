import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { MARKER_CREATE } from './types';

export const markerCreate = ({ price, location, latitude, longitude }) => {
  const { currentUser } = firebase.auth();

return(dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}userId/employees`)
    .push ({ price, location, longitude, latitude });
  //  .then(() => {
    //dispatch({ type: MARKER_CREATE}) ;
    //Actions.pop({ type: 'reset' })
  //});
};
};
