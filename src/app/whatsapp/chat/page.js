"use client";
import ChatUi from "@/components/chat-ui";
import UserCard from "@/components/user-card";
import React, { useState } from "react";

const Page = () => {
  const [currentUserDetails, setCurrentUserDetails] = useState(null);

  const userdetails = [
    {
      userId: "1",
      username: "JohnDoe",
      profilePicture: "https://example.com/profile1.jpg",
      status: "online",
      lastSeen: "2024-10-27T10:00:00Z", // ISO 8601 format
    },
    {
      userId: "2",
      username: "JaneSmith",
      profilePicture: "https://example.com/profile2.jpg",
      status: "offline",
      lastSeen: "2024-10-26T18:30:00Z",
    },
    {
      userId: "3",
      username: "PeterJones",
      profilePicture: "https://example.com/profile3.jpg",
      status: "online",
      lastSeen: "2024-10-27T10:15:00Z",
    },
    {
      userId: "4",
      username: "AliceJohnson",
      profilePicture: "https://example.com/profile4.jpg",
      status: "away", // Added "away" status
      lastSeen: "2024-10-27T09:45:00Z",
    },
    {
      userId: "5",
      username: "BobWilliams",
      profilePicture: "https://example.com/profile5.jpg",
      status: "offline",
      lastSeen: "2024-10-25T12:00:00Z",
    },
  ];

  return (
    <div className="grid col-span-12">
      <div className="col-span-3">
        {userdetails.map((item) => {
          return (
            <UserCard
              item={item}
              key={item.userId}
              setCurrentUserDetails={setCurrentUserDetails}
              currentUserDetails={currentUserDetails}
            />
          );
        })}
      </div>
      <div className="col-span-9">
        <ChatUi currentUserDetails={currentUserDetails} />
      </div>
    </div>
  );
};
export default Page;
