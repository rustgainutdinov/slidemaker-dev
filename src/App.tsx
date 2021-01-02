import {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {rootReducer} from "./store/Reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {Editor} from "./components/Editor";

export const store = createStore(rootReducer, composeWithDevTools());

export class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Editor/>
			</Provider>
		);
	}
}
