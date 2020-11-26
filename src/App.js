import "./App.css";
import { HashRouter } from "react-router-dom";
import MainApp from "./components/MainApp";

function App() {
	return (
		<HashRouter>
			<div className='App'>
				<MainApp />
			</div>
		</HashRouter>
	);
}

export default App;
