import React from 'react'
import {css, jsx} from '@emotion/react'

const Arrow = ({direction, handleClick}) => {

    console.log('di', direction);
    //  transform: translateX(${direction === 'left' ? '-2' : '2'}px);
//${direction === 'right' ? `right: 25px` : `left: 25px`}
    return (
        <div>
            <div className="arrowLine"
            style={direction === 'left' ? {left: '0'} : {right: '0'}}
            />
            <div className="arrow"
                 onClick={handleClick}
                 style={direction === 'right' ? {right: '25px', transform: 'translateX(2)'} : {
                     left: '25px',
                     transform: 'translateX(-2)'
                 }}
            >
                {direction === 'right' ?
                    <img src='/img/right-arrow.svg'
                         alt="right"/> : <img src='/img/left-arrow.svg' alt="left"/>}
            </div>
        </div>)
}

export default Arrow;