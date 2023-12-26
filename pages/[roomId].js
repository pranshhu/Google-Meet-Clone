import { useSocket } from "@/context/socket"
import useMediaSteam from "@/hooks/useMediaStream";
import usePeer from "@/hooks/usePeer"
import { useEffect } from "react"
import Player from "@/component/Player";

const Room = () => {
    const socket = useSocket();
    const { peer, myId } = usePeer();
    const {stream} = useMediaSteam()


    return (
        <div>
            <Player url={stream} muted playing playerId={myId} />
        </div>
    )
};

export default Room;