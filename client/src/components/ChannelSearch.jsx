import React, {useState, userEffect} from 'react';
import { getChannel, useChatContext } from 'stream-chat-react';

import {SearchIcon} from '../assets';

const ChannelSearch = () => {
    
    // userState() initial values
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    // Params : text we are search for
    // An async function as it has to wait untill the channels are fetched
    const getChannels = async () => {
        
        try {
            // To get the actuall channels
            // TODO: fetch channels
            
        } catch (error) {
            // If not go to error
            // If we have an error, reset the search.
            setQuery('');            
        }

    }
    const onSearch = (event) => {

         // Have to do this everytime I have a input / buttons. 
        //  Because the default browser config is to reload the page upon submit.
        event.preventDefault();
        setLoading(true);

        // What exactly are we searching for
        // In react whenever a input is given we get that data in event.target.value
        setQuery(event.target.value);
        getChannels(event.target.value);

    }

  return (
    <div className="channel-search__container">
        <div className="channel-search__input__wrapper">
            <div className="channel-search__input__icon">
                <SearchIcon />
            </div>
            <input 
                className="channel-search__input__text" 
                placeholder="Search" 
                type="text" 
                value={query} 
                onChange={onSearch}
            />
        </div>
    </div>
  )
}

export default ChannelSearch;