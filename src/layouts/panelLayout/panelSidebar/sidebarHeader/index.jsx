import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserPhoto } from '../../../../features/auth/authSlice';
import { icons } from '../../../../services/utils/icons';

function SidebarHeader() {
  const { idToken, userPhoto } = useSelector((state) => state.auth);
  const [image, setImage] = useState(userPhoto);
  const dispatch = useDispatch();

  let defaultPhoto = './images/panel/blue-avatar.png';

  useEffect(() => {
    async function getUserData() {
      const { data } = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDoO53wWZ6YAcN8zZ4aQ_dh0LmRj6IDAoc',
        JSON.stringify({ idToken }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const { photoUrl } = data.users[0];
      dispatch(setUserPhoto(photoUrl));
    }

    getUserData();
  }, []);

  return (
    <div className="flex  justify-between items-center py-3  mx-auto md:w-full pl-4 lg:pl-6  font-lobster">
      <Link to="/" className="font-bold text-2xl ">
        <span>Foodieland.</span>
      </Link>
      <span className="hidden md:block">{icons.radioButtonChecked()}</span>
      <div className="flex items-center  md:hidden ">
        <span>{icons.notificationBell()}</span>
        <div className="ml-4 relative ">
          <img
            src={`${image ? image : defaultPhoto}`}
            alt="avatar"
            className="w-10 h-10 rounded-3xl"
          />
          <span className="bg-green-500 rounded-3xl absolute bottom-0 right-0 w-[12px] h-[12px] border-2 border-white"></span>
        </div>
      </div>
    </div>
  );
}

export default SidebarHeader;
