import s from './GameGenre.module.css'

const GameGenre = ({ genre }) => {
    return (
        <span className={s.gameGenre}>
            {genre}
        </span>
    )
}

export default GameGenre
