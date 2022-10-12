import Button from '../../common/Button/Button'
import s from './GameBuy.module.css'

const GameBuy = ({ game }) => {
    return (
        <div className={s.gameBuy}>
            <span className={s.gameBuyPrice}>{game.price} $</span> 
            <Button
                type='primary' 
                onClick={() => null}
            >
                В Корзину
            </Button>
        </div>
    )
}

export default GameBuy
