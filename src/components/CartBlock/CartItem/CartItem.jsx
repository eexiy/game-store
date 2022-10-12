import s from './CartItem.module.css'

const CartItem = ({ title, price, id }) => {
    return (
        <div className={s.cartItem}>
            <h3>{title}</h3>
            <div className={s.cartItemPrice}>
                <span>{price}$</span>
            </div>
        </div>
    )
}

export default CartItem