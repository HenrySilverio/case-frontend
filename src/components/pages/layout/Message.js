import { useEffect, useState } from 'react'
import './message.css'
import bus from '../../../utils/bus'

function Message() {
    const [visibility, setVisibility] = useState(false)
    const [type, setType] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        bus.addListener('flash', ({ message, type }) => {

            setVisibility(true)
            setMessage(message)
            setType(type)

            setTimeout(() => {
                setVisibility(false)
            }, 4000)
        })

    }, [])

    return (
        visibility && (
            <div className={`message ${type}`} >{message}</div>
        )
    )
}

export default Message