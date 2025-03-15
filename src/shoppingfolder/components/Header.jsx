
import React from 'react';

const Header = () => {
    return (
        <div className='hederSection'>

            <div className='left'>
                    <div className='title'>
                    <h1 >Shopping Cart</h1>
                    </div>
                    
            </div>
            <div className='center'>
                <ul>
                    <li>Woman</li>
                    <li>Men</li>
                    <li>Children</li>
                    <li>Beauty</li>
                </ul>
            </div>
            <div className='search'>
                <input type='text' placeholder='Search Products'/>
                {/* <button>Search</button> */}
            </div>
            <div className='right'>

                <div className='cart'>Signin / SignUp</div>
                <div className='cart'>Cart</div>
            </div>
                
        </div>
    )
}

export default Header;