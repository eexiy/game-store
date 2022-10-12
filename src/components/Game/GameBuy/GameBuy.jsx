import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../../redux/cart/reducer'
import Button from '../../common/Button/Button'
import s from './GameBuy.module.css'

const GameBuy = ({ game }) => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === game.id)

    const handleClick = (e) => {
        e.stopPropagation();
        isItemInCart
            ? dispatch(deleteItemFromCart(game.id))
            : dispatch(setItemInCart(game))
    }

    return (
        <div className={s.gameBuy}>
            <span className={s.gameBuyPrice}>{game.price} $</span>
            <Button
                type={isItemInCart ? 'secondary' : 'primary'}
                onClick={handleClick}
            >
                {isItemInCart ? 'Убрать из корзины' : 'В Корзину'}
            </Button>
        </div>
    )
}

export default GameBuy
