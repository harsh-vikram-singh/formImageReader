import React from 'react';
import './style.css';
import ImageUpload from '../ImageUpload';
import UserForm from '../UserForm';
import axios from 'axios';
import SearchAppBar from '../AppBar';

const App = () => {
  const [image, setImage] = React.useState(() => '');
  const [detectedTextStatus, setDetectedTextStatus] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});
  const [name, setName] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = React.useState('');
  const [licenseNo, setLicenseNo] = React.useState('');
  const [issueDate, setIssueDate] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');

  React.useEffect(() => {
    if (image !== '') {
      let formData = new FormData();
      // console.log('image: ', image);
      formData.append('image', image, image.name);
      // console.log(formData);
      axios({
        method: 'post',
        url: '/image_upload',
        data: formData
      })
        .then(response => {
          setUserInfo(response.data);
          setName(response.data.name);
          setDateOfBirth(response.data.dateOfBirth);
          setLicenseNo(response.data.licenseNo);
          setIssueDate(response.data.issueDate);
          setExpirationDate(response.data.expireDate);
          setDetectedTextStatus(true);
          console.log(response.data);
        })
        .catch(err => console.log('following error white trying to post: ', err));
    }
  }, [image]);

  const handleSubmit = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  const handleFormChange = (data) => {
    if (data.id==='name') {
      setName(data.value);
    } else if (data.id === 'dateOfBirth') {
      setDateOfBirth(data.value);
    } else if (data.id === 'licenseNo') {
      setLicenseNo(data.value);
    } else if (data.id === 'issueDate') {
      setIssueDate(data.value);
    } else if (data.id === 'expirationDate') {
      setExpirationDate(data.value)
    }
  }

  // let component;
  // if (detectedTextStatus === false) {
  //   component = <ImageUpload handleSubmit={handleSubmit} />
  // } else if (detectedTextStatus === true) {
  //   component = <div>Success</div>
  // }

  return (
    <div id="page">
      <SearchAppBar />
      <div id="container">
        <ImageUpload handleSubmit={handleSubmit} />
        <UserForm
          handleFormChange={handleFormChange}
          name={name}
          dateOfBirth={dateOfBirth}
          licenseNo={licenseNo}
          issueDate={issueDate}
          expirationDate={expirationDate}
          />
      </div>
    </div>
  )
}

export default App;