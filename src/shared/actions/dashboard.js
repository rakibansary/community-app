import _ from 'lodash';
import { createActions } from 'redux-actions';
import { getService } from '../services/dashboard';

const service = getService();

function fetchChallenges(query) {
  return service.getChallenges(query);
}

export default createActions({
  DASHBOARD: {
    FETCH_CHALLENGES_INIT: _.noop,
    FETCH_CHALLENGES_DONE: fetchChallenges,
  },
});
