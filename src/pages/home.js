import React from 'react';

const Home = (props) => {
  const { history } = props;
  return(
    <div>
      <button onClick={() => history.push('/about')}>ABOUT</button>
      <button onClick={() => history.push('/dashboard')}>DASHBOARD</button>
    </div>

  )
}

export default Home;