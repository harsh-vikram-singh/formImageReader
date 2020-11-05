import React from 'react';

const ImageUpload = (props) => {

  return (
    <form enctype="multipart/form-data">
      <label for="img">Please upload your driver's license: </label><br></br><br />
      <input type="file" id="image" name="image" accept="image/*" onChange={
        e => props.handleSubmit(e)
      }/>
    </form>
  )
}

export default ImageUpload;