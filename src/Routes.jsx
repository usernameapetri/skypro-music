import MainPage from './views/main/Main';
import NotFound from './views/not-found/NotFound';
import { Routes, Route } from 'react-router-dom';
import Login from './views/login/Login';
import Reg from './views/reg/Reg';
import MyTracks from './views/My-Tracks/MyTracks';
import DaceHits from './views/100-dance-hits/DaceHits';
import IndieCharge from './views/Indie-charge/IndieCharge';
import PlayOfTheDay from './views/Playlist-of-the-day/PlayOfTheDay';
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Reg />} />
        <Route path="/my_tracklist" element={<MyTracks />} />
        <Route path="/dace_hits" element={<DaceHits />} />
        <Route path="/indie_charge" element={<IndieCharge />} />
        <Route path="/play_of_the_day" element={<PlayOfTheDay />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
