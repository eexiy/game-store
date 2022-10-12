import GameBuy from './GameBuy/GameBuy'
import s from './GameCard.module.css'
import GameCover from './GameCover/GameCover'
import GameGenre from './GameGenre/GameGenre'

const GameCard = ({ game, ...props }) => {
    return (
        <div className={s.gameItem}>
            <GameCover image={game.image}/>
            <div className={s.gameItemDetails}>
                <span className={s.gameItemTitle}>
                    {game.title}
                </span>
                <div className={s.gameItemGenre}>
                    {
                        game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)
                    }
                </div>
                <div className={s.gameItemBuy}>
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>
    )
}

export default GameCard
