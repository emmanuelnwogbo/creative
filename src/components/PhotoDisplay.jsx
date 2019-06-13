import React from 'react';

const PhotoDisplay = ({ src }) => {
  return (
    <figure key={src}>
      <img src={`${src}`}/>
    </figure>
  )
}

export default PhotoDisplay;