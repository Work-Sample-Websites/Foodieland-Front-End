import React from 'react';
import { icons } from '../../../services/utils/icons';

function InstagramCard({ imageUrl, caption, date }) {
  const instagramLike = icons.instagramLike();
  const instagramComment = icons.instagramComment();
  const instagramShare = icons.instagramShare();
  const instagramSave = icons.instagramSave();
  const instagramMore = icons.instagramMore();
  return (
    <div className="bg-white basis-[48%]  lg:basis-[22%]  pb-8  rounded-md relative">
      <div className="flex justify-between items-center py-1 px-2">
        <div className="flex ">
          <div>
            <img src="./images/instagram-img.png" alt="instagram-profile" />
          </div>
          <div className="flex flex-col ml-2">
            <span className=" font-semibold text-3xs sm:text-2xs">
              Foodieland
            </span>
            <span className="text-3xs">tokyo,japan</span>
          </div>
        </div>
        <div>
          <span>{instagramMore}</span>
        </div>
      </div>
      <div>
        <img src={`${imageUrl}`} alt="instagram-food" className="w-full" />
      </div>
      <div className="flex items-center py-2 px-2 relative">
        <a href="" className="mr-2">
          <span>{instagramLike}</span>
        </a>
        <a href="" className="mr-2">
          <span>{instagramComment}</span>
        </a>
        <a href="" className="mr-2">
          <span>{instagramShare}</span>
        </a>
        <a href="" className="absolute right-2">
          <span>{instagramSave}</span>
        </a>
      </div>
      <div className="text-2xs sm:text-xs px-2">
        <span className="font-semibold">Foodieland:</span>
        <span>{caption}</span>
      </div>
      <div className="text-secondary text-2xs absolute p-2 bottom-1 ">
        <span>{date}</span>
      </div>
    </div>
  );
}

export default InstagramCard;
