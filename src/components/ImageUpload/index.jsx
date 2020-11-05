import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const ImageUpload = (props) => {

  return (
    <form enctype="multipart/form-data">
      <span>Upload the Driver's License</span>
      <Fab style={{marginLeft: '10'}}color="primary" aria-label="add">
        <label for="image"> <AddIcon /> </label></Fab><br></br><br />
      <input style={{display: 'none'}}type="file" id="image" name="image" accept="image/*" onChange={
        e => props.handleSubmit(e)}>
      </input>
      {/* <Fab color="primary" aria-label="add">
      </Fab> */}
    </form>
  )
}

export default ImageUpload;