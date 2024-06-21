import React from 'react';

function LoginLayout() {
  return (
    <div>
      <img className="absolute bottom-0" src="./login/Mask.png" alt="" />
      <img
        className="absolute w-[70px] bottom-[9%] right-[7%] hidden sm:block"
        src="./login/blue-tree.png"
        alt=""
      />
      <div>
        <img
          className="absolute w-[50px] left-[7%] bottom-[9%] hidden sm:block"
          src="./login/blue-small-tree.png"
          alt=""
        />
        <img
          className="absolute w-[30px] left-[12%] bottom-[9%] hidden sm:block"
          src="./login/blue-small-tree.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default LoginLayout;
