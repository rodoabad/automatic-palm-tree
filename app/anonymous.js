import React from 'react';
import ManInTheMirror from 'man-in-the-mirror';
import {anonymous} from './anonymous.scss';

const Anonymous = () => (
    <div className={anonymous}>
        <div>{'Anonymous user.'}</div>
        <ManInTheMirror/>
    </div>
);

export default Anonymous;
