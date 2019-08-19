import React from 'react'
import NavLink from 'umi/navlink';
import withBreadcrumbs, {
  BreadcrumbsRoute,
  BreadcrumbsProps,
  InjectedProps
} from 'react-router-breadcrumbs-hoc';


// 更多配置请移步 https://github.com/icd2k3/react-router-breadcrumbs-hoc
const routes:BreadcrumbsRoute[]  = [
  { path: '/', breadcrumb: '首页' },
  { path: '/list', breadcrumb: '列表' },
];

const Breadcrumbs:React.FC = ({ breadcrumbs }:any)=>(
  <div>
   {breadcrumbs.map(({breadcrumb,match}:BreadcrumbsProps, index:number) => (
      <span key={match.url}>
      <NavLink to={match.url}>{breadcrumb}</NavLink>
      {index < breadcrumbs.length - 1 && <i> / </i>}
    </span>

    ))}
  </div>
)

export default  withBreadcrumbs(routes)(Breadcrumbs);



