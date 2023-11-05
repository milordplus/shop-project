function Card(props) {
    const {quantity = 0} = props;
    return <div className="cart teal lighten-1 white-text">
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
}

export {Card}