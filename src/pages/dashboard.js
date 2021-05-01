import React from 'react';

const Dashboard = (props) => {
  const { history } = props;
  return(
    <div>
      <button onClick={() => history.push('/dashboard/contact')}>CONTACT</button>
      <button onClick={() => history.push('/dashboard/blog')}>BLOG</button>
    </div>

  )
}

export default Dashboard;