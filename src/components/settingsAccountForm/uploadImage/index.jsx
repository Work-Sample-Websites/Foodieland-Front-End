import axios from 'axios';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserPhoto } from '../../../features/auth/authSlice';
// import { storage } from '../../../services/firebase';
import { icons } from '../../../services/utils/icons';
import './upload-img.css';

function UploadImage() {
  const userPhoto = useSelector((state) => state.auth.userPhoto);

  const [image, setImage] = useState(userPhoto);
  const dispatch = useDispatch();

  const idToken = useSelector((state) => state.auth.idToken);
  const uploadImageInputRef = useRef();

  let defaultPhoto = './images/panel/blue-avatar.png';
  const uploadImageHandler = async (event) => {
    // const photo = event.target.files[0];
    // const posterRef = ref(storage, `user/${photo.name + uuidv4()}`);
    // const res = await uploadBytes(posterRef, photo);
    // const url = await getDownloadURL(res.ref);
    // setImage(url);
  };

  const uploadNewPhoto = async () => {
    const user = { idToken, displayName: '', photoUrl: image };
    const { data } = await axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDoO53wWZ6YAcN8zZ4aQ_dh0LmRj6IDAoc',
      JSON.stringify(user),
    );
    setImage(data.photoUrl);
    dispatch(setUserPhoto(data.photoUrl));
  };

  return (
    <div className="flex gap-6 mt-4 ">
      <div className="relative">
        <img
          src={`${image ? image : defaultPhoto}`}
          alt="avatar"
          className=" rounded-[50%] cursor-pointer h-36 w-36 object-cover"
          onClick={() => uploadImageInputRef.current.click()}
        />
        <div
          className="absolute bottom-6 right-4 bg-white rounded-[50%] cursor-pointer"
          onClick={() => uploadImageInputRef.current.click()}
        >
          <span className=" z-10 upload-img-plus">{icons.plus()}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <div className=" flex flex-col md:flex-row gap-4">
          <input
            type="file"
            className="hidden"
            onChange={uploadImageHandler}
            ref={uploadImageInputRef}
          />
          <button
            className="bg-mainBlue rounded-md text-white hover:bg-darkerBlue transition-all py-2 px-4 text-sm font-medium cursor-pointer"
            onClick={uploadNewPhoto}
            type="button"
          >
            {' '}
            UPLOAD NEW PHOTO
          </button>
          <button className="bg-white rounded-md text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition-all py-2 px-5  text-sm font-medium cursor-pointer">
            {' '}
            RESET
          </button>
        </div>
        <div>
          <span className="text-secondary text-2xs sm:text-xs">
            Allowed JPG, GIF or PNG. Max size of 800K
          </span>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
