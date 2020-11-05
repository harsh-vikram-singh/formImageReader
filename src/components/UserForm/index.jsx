import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const UserForm = (props) => {

  return (
    <div>
      <TextField id="name" label="Name" variant="outlined" value={props.name} onChange={(e) => {props.handleFormChange({
        id: e.target.id,
        value: e.target.value
      })}}/><br/><br/>
      <TextField id="dateOfBirth" label="Date of Birth" variant="outlined" value={props.dateOfBirth} onChange={(e) => {props.handleFormChange({
        id: e.target.id,
        value: e.target.value
      })}}/><br/><br/>
      <TextField id="licenseNo" label="License Number" variant="outlined" value={props.licenseNo} onChange={(e) => {props.handleFormChange({
        id: e.target.id,
        value: e.target.value
      })}}/><br/><br/>
      <TextField id="issueDate" label="License issue date" variant="outlined" value={props.issueDate} onChange={(e) => {props.handleFormChange({
        id: e.target.id,
        value: e.target.value
      })}}/><br/><br/>
      <TextField id="expirationDate" label="License expiration date" variant="outlined" value={props.expirationDate} onChange={(e) => {props.handleFormChange({
        id: e.target.id,
        value: e.target.value
      })}}/><br/><br/>

    </div>
  )
};

export default UserForm;