import {Link} from 'react-router-dom';
import React from 'react';
import {links} from './links.scss';

const linksList = [
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'Anonymous',
    url: '/anonymous'
  },
  {
    label: 'Restricted A',
    url: '/restricted-a'
  },
  {
    label: 'Restricted B',
    url: '/restricted-b'
  },
  {
    label: 'Charts',
    url: '/charts'
  }
];

const Links = () => (
  <ul
    className={links}
    data-test='links'
  >
    {linksList.map((link) => (
      <li key={link.url}>
        <Link to={link.url}>{link.label}</Link>
      </li>
    ))}
  </ul>
);

export default Links;
