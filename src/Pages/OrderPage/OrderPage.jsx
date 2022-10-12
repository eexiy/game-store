import { useSelector } from 'react-redux'
import OrderItem from '../../components/OrderItem/OrderItem'
import { calcTotalPrice } from '../../components/Utils/Utils'
import s from './OrderPage.module.css'

const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)

    if (!items.length) return <h1>Ваша корзина пуста</h1>

    return (
        <div className={s.orderPage}>
            <div className={s.orderPageLeft}>
                {items.map(game => <OrderItem key={game.id} game={game} />)}
            </div>
            <div className={s.orderPageRight}>
                <div className={s.orderPageTotalPrice}>
                    <span>
                        {items.length} товаров на сумму {calcTotalPrice(items)}$
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OrderPage;