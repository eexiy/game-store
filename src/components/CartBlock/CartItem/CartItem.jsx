import { useDispatch } from 'react-redux'
import s from './CartItem.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { deleteItemFromCart } from '../../../redux/cart/reducer'


const CartItem = ({ title, price, id }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteItemFromCart(id))
    }
    return (
        <div className={s.cartItem}>
            <h3>{title}</h3>
            <div className={s.cartItemPrice}>
                <span>{price}$</span>
                <span> <AiOutlineCloseCircle
                    size={16}
                    className={s.cartItemDeleteIcon}
                    onClick={handleClick} /></span>
            </div>
        </div>
    )
}

export default CartItem