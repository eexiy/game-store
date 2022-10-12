import './Button.css'
import classNames from 'classnames'

const Button = ({ onClick, type, children, size = 's' }) => {

    const btnClasses = classNames({
        btn: true,
        btnSecondary: type === 'secondary',
        btnPrimary: type === 'primary',
        btnSmall: size === 's',
        btnMedium: size === 'm'
    })

    return (
            <button onClick={onClick} className={btnClasses}>
                {children}
            </button>

    )
}

export default Button;