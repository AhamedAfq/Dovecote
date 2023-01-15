import React from 'react'
import { Avatar,useChatContext } from 'stream-chat-react';

const TeamChannelPreview = ({channel, type}) => {
  const{channel: activeChannel, client} = useChatContext;

  // Functional Component. Preveiw for channel with multiple users 
  const ChannelPreview = () => (
    <p className="channel-preview__item">
      # {channel?.data?.name || channel?.data?.id}
    </p>
  );

  // Each user is gonna have a specific ID and based on teh we are gona show some data. Just like json(key-value)
  const DirectPreview = () => {
    // Filter getting all the users in the chat other than myself
    const members = Object.values(channel.state.members).filter(({user}) => user.id !== client.userID);
    return (
      <div className="channel-preview__item single">
        <Avatar>
          image = {members[0]?.user.image}
          name = {members[0]?.user?.fullName}
          size = {24}
        </Avatar>
        <p>{members[0]?.user?.fullName}</p>
      </div>
    )
  }

  return (

    // This div will have different className depending on whether the current class name is selected or not
    <div className={

      channel?.id === activeChannel?.id 
      ? 'channel-preview__wrapper__selected'
      : 'channel-preview__wrapper'
    }
      onClick ={()=>{
        console.log(channel);
      }}
    >
      {type === "team" ? <ChannelPreview/> : <DirectPreview/>}
    </div>
  )
}

export default TeamChannelPreview;