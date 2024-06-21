import { useState } from 'react';
import { icons } from '../../../services/utils/icons';

function FormPasswords({
  setCurrentPassword,
  setNewPassword,
  setConfirmPassword,
  confirmPasswordIsValid,
}) {
  const [currentInputType, setCurrentInputType] = useState('password');
  const [newInputType, setNewInputType] = useState('password');

  const [confirmInputType, setConfirmInputType] = useState('password');
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
  return (
    <div className="flex border-b border-gray-200 pb-4 lg:pb-0">
      <div className="basis-full lg:basis-1/2">
        <div className="relative">
          <input
            type={currentInputType}
            placeholder="Current Password"
            className="border-2 border-gray-300 rounded-md py-2.5 w-full outline-none pl-2 pr-6"
            onChange={(event) => setCurrentPassword(event.target.value)}
          />
          <span
            className="absolute right-3 top-4 cursor-pointer"
            onClick={() => showPasswordHandler('current')}
          >
            {icons.eye()}
          </span>
        </div>
        <div className="relative mt-4">
          <input
            type={newInputType}
            placeholder="New Password"
            className="border-2 border-gray-300 rounded-md py-2.5 w-full outline-none pl-2 pr-6"
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <span
            className="absolute right-3 top-4 cursor-pointer"
            onClick={() => showPasswordHandler('new')}
          >
            {icons.eye()}
          </span>
        </div>
        <div className="relative mt-4">
          <input
            type={confirmInputType}
            placeholder="Confirm New Password"
            className="border-2 border-gray-300 rounded-md py-2.5 w-full outline-none pl-2 pr-6"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <span
            className="absolute right-3 top-4 cursor-pointer"
            onClick={() => showPasswordHandler('confirm')}
          >
            {icons.eye()}
          </span>
          {!confirmPasswordIsValid && (
            <p className="text-red-600 font-semibold text-sm mt-1"></p>
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
  );
}

export default FormPasswords;
