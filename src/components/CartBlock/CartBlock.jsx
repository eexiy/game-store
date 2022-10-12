import s from './CartBlock.module.css'
import { useSelector } from 'react-redux'
import { BsCartPlus } from 'react-icons/bs'
import { calcTotalPrice } from '../Utils/Utils'
import CartMenu from './CartMenu/CartMenu'
import { useCallback, useState } from 'react'
import ItemsInCart from './ItemsInCart/ItemsInCart'
import { useNavigate } from 'react-router-dom'

const CartBlock = (props) => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false)
        navigate('/order')
    }, [navigate])

    return (
        <div className={s.cardBlock}>
            <ItemsInCart quantity={items.length}/>
            <BsCartPlus
                size={25}
                className={s.cardBlockIcon}
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {
                totalPrice
                    ? <span className={s.cardBlockPrice}>{totalPrice}$</span>
                    : null
            }
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
        </div>
    )
}

export default CartBlock
