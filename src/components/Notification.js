import React from "react";


const Notification = (props) => {
    return (
        <div className={`notification-container ${props.ShowNotification ? 'show' : ''}`}>
            <p>You have already entered this letter</p>
        </div>
    )
}

export default Notification;