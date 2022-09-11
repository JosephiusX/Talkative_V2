import React from 'react';

const EditTopicPage = (props) => {
  console.log(props);
  return (
    <div>
      Editing the Topic with id of {props.match.params.id}
    </div>
  );
};

export default EditTopicPage;
