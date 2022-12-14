import { NavLink } from 'react-router-dom'
import CartBlock from '../CartBlock/CartBlock'
import s from './Header.module.css'

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.wrapper}>
                    <div>
                        <NavLink to="/" className={s.header__wrapperTitle}>Game Store</NavLink>
                    </div>
                    <div className={`${s.wrapper}`}>
                        <CartBlock />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header
