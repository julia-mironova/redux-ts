import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
	const [term, setTerm] = useState("");
	const { searchRepos } = useActions();
	const { data, error, loading } = useTypedSelector(
		(state) => state.repositories
	);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		searchRepos(term);
		//console.log("i am onsubmit ");
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={term} onChange={(e) => setTerm(e.target.value)} />
				<button>Search</button>
			</form>
			{error && <h4>{error}</h4>}
			{loading && <h4>loading...</h4>}
			{!error && !loading && data}
		</div>
	);
};
export default RepositoriesList;
