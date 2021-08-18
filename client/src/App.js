import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home-page/home-page.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInRegisterPage from "./pages/sign-in-register/sign-in-register.component";
import CheckOutPage from "./pages/checkout/checkout.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import { GlobalStyle } from "./global.styles";
// import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

// const HomePage = lazy(() =>
// 	import("./pages/home-page/home-page.component.jsx")
// );
// const ShopPage = lazy(() => import("./pages/shop/shop.component"));
// const Header = lazy(() => import("./components/header/header.component"));
// const CheckOutPage = lazy(() => import("./pages/checkout/checkout.component"));
// const SignInRegisterPage = lazy(() =>
// 	import("./pages/sign-in-register/sign-in-register.component")
// );

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => checkUserSession(), [checkUserSession]);
	return (
		<div>
			<GlobalStyle />
			<Header />
			<ErrorBoundary>
				{/* <Suspense fallback={<Spinner />}> */}
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckOutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInRegisterPage />
							)
						}
					/>
				</Switch>
				{/* </Suspense> */}
			</ErrorBoundary>
		</div>
	);
};

// 'mapStateToProps' intercepts the state, pulls out the user object and returns the current user object
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
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

// pkill -f node
