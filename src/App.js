import './App.css';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import configureStore, { history } from "./redux/store";
import Routes from "./routes";
const store = configureStore();

const App = () => {
  return (
	    <Provider store={store}>
	      	<ConnectedRouter history={history}>
		        <Switch>
		        	<Route path="/">
			            <Routes />
			        </Route>
		        </Switch>
		    </ConnectedRouter>
		</Provider>
    );
}

export default App;
