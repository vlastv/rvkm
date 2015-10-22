import { createAction } from 'redux-actions';
import { User } from 'services';

export const start = createAction('GROUPS_START');
export const error = createAction('GROUPS_ERROR');
export const success = createAction('GROUPS_SUCCESS', (items = {}) => items);

const playlist = require('./playlist.js');

export function load(group) {
  return (dispatch) => {
    dispatch(playlist.start());

    User.getGroupAudio(group.id).then((items) => {
      dispatch(success(items));
      dispatch(playlist.load(items[group.id]));
    }, () => dispatch(playlist.error()));
  };
}

export function fetch(userID) {
  return (dispatch) => {
    dispatch(start());

    User.getGroups(userID).then((items) => dispatch(success(items)), () => dispatch(error()));
  };
}