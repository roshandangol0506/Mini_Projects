import React from 'react'

const ChatUi = ({currentUserDetails}) => {
  return (
    <div><div>
      </div>
      {JSON.stringify(currentUserDetails)}
      {currentUserDetails?.username}
      {currentUserDetails?.lastSeen}
      </div>
  )
}

export default ChatUi
