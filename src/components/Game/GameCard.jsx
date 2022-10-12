import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import GameBuy from './GameBuy/GameBuy'
import s from './GameCard.module.css'
import GameCover from './GameCover/GameCover'
import GameGenre from './GameGenre/GameGenre'
import { setCurrentGame } from '../../redux/games/reducer'

const GameCard = ({ game }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setCurrentGame(game))
        navigate(`/app/${game.title}`)
    }

    return (
        <div className={s.gameItem} onClick={handleClick}>
            <GameCover image={game.image} />
            <div className={s.gameItemDetails}>
                <span className={s.gameItemTitle}>
                    {game.title}
                </span>
                <div className={s.gameItemGenre}>
                    {
                        game.genres.map(genre => <GameGenre genre={genre} key={genre} />)
                    }
                </div>
                <div className={s.gameItemBuy}>
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    )
}

export default GameCard
