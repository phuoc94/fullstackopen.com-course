import React from 'react'

const Notification = ({ emessage }) => {
    //console.log("1", emessage)


    if (emessage === null || emessage === '') {
        return null
    } else {
        const message = emessage[0]
        const type = emessage[1]
        if (type === 'error') {
            return (
                <div className="error">
                    {message}
                </div>
            )
        } else if (type === 'success') {
            return (
                <div className="success">
                    {message}
                </div>
            )
        } else {
            return (
                <div>
                    {message}
                </div>
            )
        }
    }


}

export default Notification