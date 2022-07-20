interface RepoState {
	loading: boolean;
	error: string | null;
	data: string[];
}

interface searchRepoAction {
	type: ActionType.SEARCH_REPOS;
}

interface searchRepoSuccessAction {
	type: ActionType.SEARCH_REPOS_SUCCESS;
	payload: string[];
}

interface searchRepoSuccessError {
	type: ActionType.SEARCH_REPOS_ERRORS;
	payload: string;
}

type Action =
	| searchRepoAction
	| searchRepoSuccessAction
	| searchRepoSuccessError;

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
