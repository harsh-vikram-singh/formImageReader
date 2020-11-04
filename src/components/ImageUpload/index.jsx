import React from 'react';

const ImageUpload = (props) => {

  return (
    <form>
      <label for="img">Select image:</label>
      <input type="file" id="img" name="img" accept="image/*" />
      <input type="submit"></input>
    </form>
  )
}

export default ImageUpload;