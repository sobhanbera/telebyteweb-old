import "./App.css";
import { BrowserRouter as RoutingRouter } from "react-router-dom";
import MainApp from "./components/MainApp";

function App() {
	return (
		<RoutingRouter>
			<div className='App'>
				<MainApp />
			</div>
		</RoutingRouter>
	);
}

export default App;
