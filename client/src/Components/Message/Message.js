import './Message.css'

import React from 'react';

export const Message = ({prop}) => {
    return (
        <div className='message'>{prop.msg}</div>
    )
}