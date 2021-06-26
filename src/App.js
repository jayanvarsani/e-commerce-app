import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/home-page/home-page.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInRegisterPage from "./pages/sign-in-register/sign-in-register.component";
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";

import "./App.css";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
	unsubscribeFromAuth = null;
	componentDidMount() {
		console.log(connect(null, mapDispatchToProps));
		console.log(connect(null, mapDispatchToProps)(App));
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signIn" component={SignInRegisterPage} />
				</Switch>
			</div>
		);
	}
}

// 'mapDispatchToProps' returns object containing the props
// props contains setCurrentUser function which dispatches the action object
// action object dispatched/fired to all reducers in order to update master state
// 'dispatch' parameter provides the function which is invoked dispatch() later, to act as setState()
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// null represents function 'mapStateToProps' as connect looks for parameters 'mapStateToProps' & 'mapDispatchToProps'
// null because we don't need a function to map state to props because no props are used in App
// App is top level & isn't passed anything so we dont need a function to convert state to feed as props to App

// 'mapDispatchToProps' function forwards all the dispatch props to the component
// so we use our custom setCurrentUser function in our component via a prop which does the dispatch within
export default connect(null, mapDispatchToProps)(App);

// mapDispatchToProps:
// by default, components receive 'dispatch' function as a prop by default
// used when we want to explicitly dispatch in the component by directly invoking dispatch() where needed
// mapDispatchToProps allows us to create functions, that dispatch for us, & provide them to the component
// so we do not need to directly call dispatch() but through the alias of a function accessed via a prop
// if you provide a 'mapDispatchToProps', connected component no longer recieves 'dispatch' as a prop
// it knows to instead pass 'mapDispatchToProps' as this will contain our custom functions perform the dispatch
