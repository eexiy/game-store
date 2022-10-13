import { useDispatch } from 'react-redux'
import GameCover from '../GameCart/GameCover/GameCover'
import s from './OrderItem.module.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { deleteItemFromCart } from '../../redux/cart/reducer'

const OrderItem = ({game}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }
    return (
        <div className={s.orderItem}>
            <div className={s.orderItemCover}>
                <GameCover image={game.image} />
            </div>
            <div className={s.orderItemTitle}>
                <span>{game.title}</span>
            </div>
            <div className={s.orderItemPrice}>
                <span>{game.price}$</span>
                <AiOutlineCloseCircle 
                size={20}
                className={s.cartItemDeleteIcon}
                onClick={handleClick}/>
            </div>
        </div>
    )
}

export default OrderItem;