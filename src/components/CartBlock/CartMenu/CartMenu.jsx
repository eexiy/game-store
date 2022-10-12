import Button from '../../common/Button/Button'
import { calcTotalPrice } from '../../Utils/Utils'
import CartItem from '../CartItem/CartItem'
import s from './CartMenu.module.css'

const CartMenu = ({ items, onClick }) => {
    return (
        <div className={s.cartMenu}>
            <div className={s.cartMenuGame}>
                {
                    items.length > 0
                        ? items.map(game => <CartItem
                            key={game.id}
                            price={game.price}
                            title={game.title}
                            id={game.id} />)
                        : 'Корзина пусто'
                }
            </div>
            {
                items.length > 0
                    ? <div className={s.cartMenuArrange}>
                        <div className={s.cartMenuTotalPrice}>
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)}$</span>
                        </div>
                        <Button type='primary' size='m' onClick={onClick}>
                            Оформить заказ
                        </Button>
                    </div>
                    : null
            }
        </div>
    )
}

export default CartMenu
