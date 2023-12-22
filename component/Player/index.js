import ReactPlayer from 'react-player'

const Player = (props) => {
    const {playerId, url, muted, playing} = props

    return (
        <div>
            <ReactPlayer key={playerId} url={url} muted={muted} playing={playing}></ReactPlayer>
        </div>
    )

}

export default Player;