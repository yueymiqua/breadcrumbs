import React from 'react';

const Pierreyue = (props) => {
  const { history } = props;
  return (
    <div>
      <button onClick={() => history.push('/pierreyue/project')}>Project</button>
      <button onClick={() => history.push('/pierreyue/filebtxt')}>FileBtxt</button>
      <div>Welcome to Pierre's Page!</div>
    </div>
  )
}

export default Pierreyue;