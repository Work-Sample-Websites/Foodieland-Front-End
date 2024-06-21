import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserPassword } from '../../features/auth/authSlice';
import { icons } from '../../services/utils/icons';
import SaveButtons from '../settingsAccountForm/saveButtons';
import TwoFactorAuth from './twoFactorAuth';

function SettingsSecurity() {
  const { idToken, userPassword } = useSelector((state) => state.auth);
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentPasswordIsValid, setCurrentPasswordIsValid] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordTouched, setNewPasswordTouched] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const [currentInputType, setCurrentInputType] = useState('password');
  const [newInputType, setNewInputType] = useState('password');
  const [confirmInputType, setConfirmInputType] = useState('password');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  let confirmPasswordIsValid = newPassword === confirmPassword;

  let newPasswordError = ['password should contain at least'];
  let newPasswordIsValid = true;

  if (!/[a-zA-Z0-9]{6,}/.test(newPassword)) {
    newPasswordError.push(' 6 characters');
    newPasswordIsValid = false;
  }
  if (!/(?=.*[A-Z])/.test(newPassword)) {
    newPasswordError.push(' one uppercase');
    newPasswordIsValid = false;
  }
  if (!/(?=.*\d)/.test(newPassword)) {
    newPasswordError.push(' one digit');
    newPasswordIsValid = false;
  }

  function showPasswordHandler(type) {
    if (type === 'current') {
      setCurrentInputType(
        currentInputType === 'password' ? 'text' : 'password',
      );
    }
    if (type === 'new') {
      setNewInputType(newInputType === 'password' ? 'text' : 'password');
    }
    if (type === 'confirm') {
      setConfirmInputType(
        confirmInputType === 'password' ? 'text' : 'password',
      );
    }
  }
  async function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    if (!newPasswordIsValid && !confirmPasswordIsValid) {
      return;
    }
    if (currentPassword != userPassword) {
      setCurrentPasswordIsValid(false);
    }
    const resetInputs = () => {
      setConfirmPasswordTouched(false);
      setNewPasswordTouched(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    };
    try {
      const { data } = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDoO53wWZ6YAcN8zZ4aQ_dh0LmRj6IDAoc',
        JSON.stringify({ idToken, password: newPassword }),
      );
      dispatch(setUserPassword({ userPassword: newPassword }));
      setIsLoading(false);
      resetInputs();
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <section className="font-inter p-6 mt-4 ">
      <form onSubmit={submitHandler}>
        <div className="flex border-b border-gray-200 pb-4 lg:pb-0">
          <div className="basis-full lg:basis-1/2">
            <div className="relative">
              <input
                type={currentInputType}
                placeholder="Current Password"
                className="border-2 border-gray-300 rounded-md py-2.5 w-full outline-none pl-2 pr-6"
                onChange={(event) => setCurrentPassword(event.target.value)}
                value={currentPassword}
              />
              <span
                className="absolute right-3 top-4 cursor-pointer"
                onClick={() => showPasswordHandler('current')}
              >
                {icons.eye()}
              </span>
              {!currentPasswordIsValid && (
                <p className="text-red-600 font-semibold text-sm mt-1">
                  your password is not correct
                </p>
              )}
            </div>
            <div className="relative mt-4">
              <input
                type={newInputType}
                placeholder="New Password"
                className="border-2 border-gray-300 rounded-md py-2.5 w-full outline-none pl-2 pr-6"
                onChange={(event) => setNewPassword(event.target.value)}
                onBlur={() => setNewPasswordTouched(true)}
                value={newPassword}
              />
              <span
                className="absolute right-3 top-4 cursor-pointer"
                onClick={() => showPasswordHandler('new')}
              >
                {icons.eye()}
              </span>
              {!newPasswordIsValid && newPasswordTouched && (
                <p className="text-red-600 font-semibold text-sm mt-1">
                  {newPasswordError.join(' ')}
                </p>
              )}
            </div>
            <div className="relative mt-4">
              <input
                type={confirmInputType}
                placeholder="Confirm New Password"
                className="border-2 border-gray-300 rounded-md py-2.5 w-full outline-none pl-2 pr-6"
                onChange={(event) => setConfirmPassword(event.target.value)}
                value={confirmPassword}
                onBlur={() => setConfirmPasswordTouched(true)}
              />
              <span
                className="absolute right-3 top-4 cursor-pointer"
                onClick={() => showPasswordHandler('confirm')}
              >
                {icons.eye()}
              </span>
              {!confirmPasswordIsValid && confirmPasswordTouched && (
                <p className="text-red-600 font-semibold text-sm mt-1">
                  your password must match
                </p>
              )}
            </div>
          </div>
          <div className="hidden lg:block lg:basis-1/2">
            <img
              src="./images/panel/pose_m1.png"
              alt="pose"
              className="mx-auto w-[140px]"
            />
          </div>
        </div>
        <TwoFactorAuth />
        <SaveButtons isLoading={isLoading} />
      </form>
    </section>
  );
}

export default SettingsSecurity;
