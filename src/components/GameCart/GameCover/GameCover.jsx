import s from './GameCover.module.css'

const GameCover = ({ image = '' }) => {
    return (
        <div className={s.gameCover} style={{ backgroundImage: `url(${image})` }}></div>
    )
}

export default GameCover
