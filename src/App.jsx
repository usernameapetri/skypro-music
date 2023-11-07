import axios from 'axios';
import { useState, useEffect } from 'react';
import AppRoutes from './Routes';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';

function App() {
  const [trackList, setTrackList] = useState([]);
  const [isLoadingPage, setisLoadingPage] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isFetchError, setFetchError] = useState(null);
  const getTrackData = () => {
    axios
      .get('https://skypro-music-api.skyeng.tech/catalog/track/all/')
      .then((response) => {
        setTrackList(response.data);
      })
      .catch((error) => {
        setFetchError(error.message);
      })
      .finally(() => {
        setisLoadingPage(false);
      });
  };

  useEffect(() => {
    getTrackData();
  }, []);

  return (
    <>
      <AppRoutes
        selectedTrack={selectedTrack}
        setSelectedTracks={setSelectedTrack}
        fetchError={isFetchError}
        trackData={trackList}
        loadingPage={isLoadingPage}
      />
      {selectedTrack && (
        <AudioPlayer
          selectedTrack={selectedTrack}
          loadingPage={isLoadingPage}
        />
      )}
    </>
  );
}

export default App;
