import { createStore, compose } from "redux";
import rootReducer from '../reducers/root';

const defaultState = {
    // searchTerm: '',
    // issueStateFilterBy: 'open',
    // sortBy: 'created_at|desc',
    issues: [],
    // repoOwner: '',
    // repoName: '',
    comments: {"somekey":"somevalue", "anotherKey":"anotherValue"}
  };

const store = createStore(rootReducer, defaultState);

export default store;