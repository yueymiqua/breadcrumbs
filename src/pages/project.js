import React from 'react';

const Project = (props) => {
  const { history } = props;
  return (
    <div>
      <button onClick={() => history.push('/pierreyue/project/mysupersecretproject')}>Super Secret Project</button>
      <div>This is the Project page</div>
    </div>
  )
}

export default Project;