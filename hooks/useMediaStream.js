import { useState, useEffect, useRef } from 'react'

const useMediaSteam = () => {
    const [state, setState] = useState(null)
    const isStreamSet = useRef(false)

    useEffect(() => {
        if (isStreamSet.current) return;
        isStreamSet.current = true;
        (async function initStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true
                })
                console.log('setting stream')
                setState(stream)
            } catch (e) {
                console.log('error in media navigator', e)
            }
        })()
    }, [])

    return {
        stream: state
    }
}

export default useMediaSteam;