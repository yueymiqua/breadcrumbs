import React from 'react';

const Home = (props) => {
  const { history } = props;
  return(
    <div>
      <button onClick={() => history.push('/pierreyue')}>Pierre Yue</button>
      <button onClick={() => history.push('/about')}>About</button>
      <button onClick={() => history.push('/dashboard')}>Dashboard</button>
    </div>

  )
}

export default Home;