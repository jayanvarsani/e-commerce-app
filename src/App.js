import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/home-page/home-page.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInRegisterPage from "./pages/sign-in-register/sign-in-register.component";
import { connect } from "react-redux";

import "./App.css";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckOutPage from "./pages/checkout/checkout.component";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors.js";
import { checkUserSession } from "./redux/user/user.actions";

class App extends React.Component {
	unsubscribeFromAuth = null;
	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
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
					<Route exact path="/checkout" component={CheckOutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInRegisterPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

// 'mapStateToProps' intercepts the state, pulls out the user object and returns the current user object
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	collectionsArray: selectCollectionsForPreview,
});

// 'mapDispatchToProps' returns object containing the props
// props contains setCurrentUser function which dispatches the action object
// action object dispatched/fired to all reducers in order to update master state
// 'dispatch' parameter provides the function which is invoked dispatch() later, to act as setState()
const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// mapDispatchToProps:
// by default, components receive 'dispatch' function as a prop by default
// used when we want to explicitly dispatch in the component by directly invoking dispatch() where needed
// mapDispatchToProps allows us to create functions, that dispatch for us, & provide them to the component
// so we do not need to directly call dispatch() but through the alias of a function accessed via a prop
// if you provide a 'mapDispatchToProps', connected component no longer recieves 'dispatch' as a prop
// it knows to instead pass 'mapDispatchToProps' as this will contain our custom functions perform the dispatch
