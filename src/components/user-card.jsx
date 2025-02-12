import Image from 'next/image';
import React from 'react';

const UserCard = ({ item, setCurrentUserDetails, currentUserDetails }) => {
  return (
    <div
      onClick={() => setCurrentUserDetails(item)}
      className={
        currentUserDetails?.userId === item.userId
          ? 'bg-red-100 flex gap-4 m-2 p-2' 
          : 'flex gap-4 m-2 p-2' 
      }
    >
      <div className="relative">
        <Image
        src={item?.profilePicture}
        width={60}
        height={60}
        alt="pp"
        className='rounded-full relative'/>
        {item?.status === 'online' && (
          <div className="bg-green-400 h-3 w-3 rounded-full absolute right-1 bottom-0"></div>
        )}
      </div>
      <div>{item?.username}</div>
    </div>
  );
};

export default UserCard;