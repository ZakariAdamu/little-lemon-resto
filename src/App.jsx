import { useState } from "react";
import NavigationLinks from "./components/NavigationLinks";
// import "./index.css";
import './styles.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<NavigationLinks />
		</>
	);
}

export default App;
