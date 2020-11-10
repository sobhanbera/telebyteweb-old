import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainApp from "./components/MainApp";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<MainApp />
			</div>
		</BrowserRouter>
	);
}

export default App;
