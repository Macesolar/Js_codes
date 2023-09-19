import React from 'react'
import './style.scss'

function Load() {


    return (
        <div>
                <div class="overlay">
                <div class="overlayDoor"></div>
                <div class="overlayContent">
                    <div class="loader">
                    <div class="inner"></div>
                    </div>
                    <div class="skip">LOADING</div>
                </div>
                </div>
        </div>
    )
}

export default Load