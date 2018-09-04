import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import issues from "./filterIssues";
//import comments from "./comments";
//import repoOwner, { repoName } from "./repoOwner";

const rootReducer = combineReducers({issues, routing: routerReducer});

export default rootReducer;