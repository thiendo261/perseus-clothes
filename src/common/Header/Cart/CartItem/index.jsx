import React from 'react';
import PropTypes from 'prop-types';

import './CartItem.scss';

const CartItem = ({ product }) => {
	return (
		<div className="item">
			<div
				className="image"
				style={{ backgroundImage: `url(${product.image})` }}
			></div>
			<div className="details">
				<div className="name">{product.name}</div>
				<div className="price">${product.price}</div>
				<div className="quantity">x{product.quantity}</div>
			</div>
		</div>
	);
};

CartItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		quantity: PropTypes.number.isRequired,
	}),
};

export default CartItem;