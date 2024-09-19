import React from 'react'
import './NewLetters.css'

const NewLetters = () => {
    return (
        <div className='new-letters'>
            <h1>Get Exclusive Offers On Your Emails</h1>
            <p>Subscribe to our newletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewLetters