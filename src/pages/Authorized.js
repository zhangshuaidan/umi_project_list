import React from 'react';
import RenderAuthorized from '@/component/Authorized';
import { getAuthority } from '@/utils/authority';
import Redirect from 'umi/redirect';

const Authority = getAuthority();
const Authorized = RenderAuthorized(Authority);
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1)
    reject()
  }, 3000)
}).catch(e => {
  console.log('e', e)
})
export default ({ children }) => {
  console.log('aaa',children)
  //children.props.route.authority
  return (
    <Authorized authority={children.props.route.authority} noMatch={<Redirect to="/exception/403" />}>
      {children}
    </Authorized>
  );
}
