import { React } from "react";
import NavigationLinks from "./components/NavigationLinks";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./index.css";
import "./App.css";
import Header from "./components/Header";

function App() {
	return (
		<>
			<NavigationLinks />
			<Header />
		</>
	);
}

export default App;
