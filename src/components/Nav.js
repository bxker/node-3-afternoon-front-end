import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'


export default function Nav() {
        return(
            <>
                <header>
                    <h1>Cool Store</h1>
                    <nav>
                        <ul>
                            <Link to="/"><li>Home</li></Link> 
                            <Link to="/products"><li>Products</li></Link>
                            <Link to="/admin"><li>Admin</li></Link> 
                        </ul>
                    </nav>
                </header>
            </>
        )
}