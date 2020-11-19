import React from 'react';
import './Header.scss';

const Header = ({user}) =>{
    return(
        <header>
            <h1>Travel Chat</h1>

            {
                user ? 
                <div>
                    <p>{user.displayName}</p>
                    <img src={user.photoURL} alt={user.displayName}/>
                </div>
                : 
                null
            }
            
        </header>
    )
}

export default Header;