import React from 'react';

const Mysupersecretproject = (props) => {
  const { history } = props;
  return (
    <div>
      <button onClick={() => history.push('/pierreyue/project/mysupersecretproject/mysupersecretfile')}>Super Secret File</button>
      <div>This page contains my Super Secret Project</div>
    </div>
  )
}

export default Mysupersecretproject;