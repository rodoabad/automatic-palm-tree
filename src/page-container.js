import {main, navigation, pageContainer} from './page-container.scss';
import {AnonymousRoute} from './anonymous-route';
import {HomeRoute} from './home-route';
import {Navigation} from './navigation';
import React from 'react';
import {RestrictedRouteA} from './restricted-route-a';
import {RestrictedRouteB} from './restricted-route-b';

export const PageContainer = () => (
  <section className={pageContainer}>
    <Navigation className={navigation}/>
    <HomeRoute className={main} />
    <AnonymousRoute className={main}/>
    <RestrictedRouteA className={main}/>
    <RestrictedRouteB className={main}/>
  </section>
);
