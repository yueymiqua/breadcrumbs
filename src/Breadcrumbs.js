import React from 'react';
import {
  Breadcrumbs as MUIBreadcrumbs,
  Typography, 
  Link
 } from '@material-ui/core';
import { withRouter } from 'react-router';

const Breadcrumbs = (props) => {
  const { history, location : { pathname } } = props;
  const pathnames = pathname.split('/').filter(x => x); //x => x will filter out the empty string as it is considered "undefined" during a filter
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      { pathnames.length > 0
        ? <Link onClick={() => history.push('/')}>Home</Link>
        : <Typography>Home</Typography>
      }
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast
            ? (<Typography key={name}> {name} </Typography>)
            : (<Link key={name} onClick={() => history.push(routeTo)}>{name}</Link>)
      })}
    </MUIBreadcrumbs>
  );
}

export default withRouter(Breadcrumbs);