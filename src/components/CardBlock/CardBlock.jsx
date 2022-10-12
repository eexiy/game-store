import s from './CardBlock.module.css'
import {BsCartPlus} from 'react-icons/bs'

const CardBlock = (props) => {
    return (
        <div className={s.cardBlock}>
            <BsCartPlus size={25} className={s.cardBlockIcon}/>
            <span className={s.cardBlockPrice}>125$</span>
        </div>
    )
}

export default CardBlock
