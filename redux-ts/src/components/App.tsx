import React from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";
import "./App.css";

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<h2>Search for packages</h2>
				<RepositoriesList />
			</div>
		</Provider>
	);
};

export default App;
