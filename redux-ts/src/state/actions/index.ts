import { ActionType } from "../action-types/index";
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

export type Action =
	| searchRepoAction
	| searchRepoSuccessAction
	| searchRepoSuccessError;
