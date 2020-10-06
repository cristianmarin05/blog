import React from 'react';
import {Link} from 'react-router-dom';

import './NotFound.scss'

export default function NotFound(){

    return(
        <div className="not-found">
            <h1>Not found</h1>
            <div>
                <Link to="/">Volver al inicio</Link>
            </div>
        </div>
    )
}