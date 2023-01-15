import React from 'react'

import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

import './App.css';


const apiKey = 'v6d82jj3upf5';

//STEP:  Creating a Stream object
const client = StreamChat.getInstance(apiKey);

const authToken = false;

const App = () => {

  if(!authToken){
    return <Auth />
  }

  return (
    <div className="app__wrapper">

      {/* Rendering the CHAT application */}
        <Chat client={client} theme="team light">

          {/* All the below mentioned are components that are created separately*/}
            <ChannelListContainer

            />

            <ChannelContainer

            />
        </Chat>
    </div>
  );
}

export default App;