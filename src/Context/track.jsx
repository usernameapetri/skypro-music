import React, { useState, createContext } from 'react';

export const TrackContext = createContext();

export const Context = (props) => {
  const [trackList, setTrackList] = useState([]);
  const [isLoadingPage, setisLoadingPage] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isFetchError, setFetchError] = useState(null);

  const value = {
    trackList,
    setTrackList,
    isLoadingPage,
    setisLoadingPage,
    selectedTrack,
    setSelectedTrack,
    isFetchError,
    setFetchError,
  };

  return (
    <TrackContext.Provider value={value}>
      {props.children}
    </TrackContext.Provider>
  );
};
