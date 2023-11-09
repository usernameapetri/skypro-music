import { useState, useEffect } from 'react';
import AppRoutes from './Routes';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import { getTrackData } from './api/api';

function App() {
  const [trackList, setTrackList] = useState([]);
  const [isLoadingPage, setisLoadingPage] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isFetchError, setFetchError] = useState(null);

  useEffect(() => {
    setisLoadingPage(true);
    getTrackData()
      .then((response) => {
        setTrackList(response.data);
        setFetchError(null);
      })
      .catch((error) => {
        setFetchError(error.message);
      })
      .finally(() => {
        setisLoadingPage(false);
      });
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
