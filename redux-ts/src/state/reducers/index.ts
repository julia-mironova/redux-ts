import { combineReducers } from "redux";
import reducer from "./repoReducer";

const reducers = combineReducers({
	repositories: reducer,
});

export default reducers;
