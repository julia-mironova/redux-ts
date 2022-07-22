import { ActionType } from "../action-types/index";
import { Action } from "../actions/index";
interface RepoState {
	loading: boolean;
	error: string | null;
	data: string[];
}

const reducer = (state: RepoState, action: Action): RepoState => {
	switch (action.type) {
		case ActionType.SEARCH_REPOS:
			return { loading: true, error: null, data: [] };
		case ActionType.SEARCH_REPOS_SUCCESS:
			return { loading: false, error: null, data: action.payload };
		case ActionType.SEARCH_REPOS_ERRORS:
			return { loading: false, error: action.payload, data: [] };
		default:
			return state;
	}
};
export default reducer;
