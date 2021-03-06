export const addItemToCart = (cartItems, itemToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === itemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === itemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeCartProduct = (cartItems, itemToRemove) =>
	cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);

export const removeItem = (cartItems, itemToRemove) =>
	cartItems.map((cartItem) =>
		cartItem.id === itemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
