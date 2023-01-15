import React from 'react'
import Cookies from 'universal-cookie';

import { ChannelList, useCharContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

import HospitalIcon from '../assets/dove.png';
import LogoutIcon from '../assets/logout.png';

const SideBar = () => (
  <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={HospitalIcon} alt="Hospital" width="30"/>
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
          <img src={LogoutIcon} alt="Logout" width="30"/>
        </div>
      </div>
  </div>
)

const CompanyHeader = () => (
   <div className="channel-list__header">
      <p className="channel-list__header__text">Dovecote</p>
   </div>
)

const ChannelListContainer = () => {
  return (
    <>
      <SideBar/>
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList

          filters={{}}
          channelRenderFilterFn={() => {}}
          
          //TODO: Render a custom list using a callback function
          List={(listProps) => (

            //Custom component will get all the props that the channel list usually get using streams.
            <TeamChannelList
              {...listProps}
              type = "team"
            />
          )}
          Preview = {(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="team"
            />
          )}
        />
        <ChannelList 
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type = "messaging"
            />
          )}
          Preview = {(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="messaging"
            />
          )}
        />
      </div>
    </>
  )
}

export default ChannelListContainer;