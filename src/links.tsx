import {
  Link
} from 'react-router-dom';
import React from 'react';

const Links = () => (
  <ul>
    <li>
      <Link to='/'>{'Home'}</Link>
    </li>
    <li>
      <Link to='/anonymous'>{'Anonymous'}</Link>
    </li>
    <li>
      <Link to='/restricted-a'>{'Restricted A'}</Link>
    </li>
    <li>
      <Link to='/restricted-b'>{'Restricted B'}</Link>
    </li>
  </ul>
);

export default Links;
