import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/home-page/home-page.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInRegisterPage from "./pages/sign-in-register/sign-in-register.component";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
			this.setState({ currentUser: user })
		);
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signIn" component={SignInRegisterPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
