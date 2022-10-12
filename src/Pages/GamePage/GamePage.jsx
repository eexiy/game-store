import { useSelector } from 'react-redux'
import GameBuy from '../../components/Game/GameBuy/GameBuy'
import GameCover from '../../components/Game/GameCover/GameCover'
import GameGenre from '../../components/Game/GameGenre/GameGenre'
import s from './GamePage.module.css'

const GamePage = (props) => {

    const game = useSelector(state => state.game.currentGame)
    console.log(game);
    if (!game) return null

    return (
        <div className={s.gamePage}>
            <h1 className={s.gamePageTitle}>{game.title}</h1>
            <div className={s.gamePageContent}>
                <div className={s.gamePageLeft}>
                    <iframe
                        width='90%'
                        height='400px'
                        src={game.video}
                        frameBorder='0'
                        title='YouTube Video Player'></iframe>
                </div>
                <div className={s.gamePageRight}>
                    <GameCover image={game.image} />
                    <p>{game.description}</p>
                    <p className={s.secondaryText}>Популярные метки этого продукта:</p>
                    {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}
                    <div className={s.gamePageBuyGame}>
                        <GameBuy game={game} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage
