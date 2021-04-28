import React from 'react';
import { Link } from 'gatsby';




export default function Nav() {
    return <div>
        <ul>
            <li>
                <Link to='/about/'>About</Link>
            </li>
            <li>
                <Link to='/index/'>Index</Link>
            </li>
            <li>
                <Link to='/sale/'>Sale</Link>
            </li>
        </ul>
    </div>
}