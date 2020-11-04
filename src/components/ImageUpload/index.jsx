import React from 'react';

const ImageUpload = (props) => {

  return (
    <form enctype="multipart/form-data">
      <label for="img">Select image:</label>
      <input type="file" id="image" name="image" accept="image/*" onChange={
        e => props.handleSubmit(e)
      }/>
      <input type="submit"></input>
    </form>
  )
}

export default ImageUpload;