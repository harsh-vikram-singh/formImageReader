import React from 'react';
import './style.css';
import ImageUpload from '../ImageUpload';
import axios from 'axios';

const App = () => {
  const [image, setImage] = React.useState(() => '');
  const [detectedTextStatus, setDetectedTextStatus] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});

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
          setUserInfo(response.data)
          console.log(response.data);
        })
        .catch(err => console.log('following error white trying to post: ', err));
    }
  }, [image]);

  const handleSubmit = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  let component;
  if (detectedTextStatus === false) {
    component = <ImageUpload handleSubmit={handleSubmit} />
  } else if (detectedTextStatus === true) {
    component = <div>Success</div>
  }

  return (
    <>
    {component}
    </>
  )
}

export default App;