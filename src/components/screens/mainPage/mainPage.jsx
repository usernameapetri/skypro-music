import '../../../App.css';
import NavMenu from './NavMenu/NavMenu.jsx';
import TrackList from './TrackList/Tracklist.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import AudioPlayer from './AudioPlayer/AudioPlayer.jsx';

function MainPage() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu></NavMenu>
          <TrackList></TrackList>
          <Sidebar></Sidebar>
        </main>
        <AudioPlayer></AudioPlayer>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default MainPage;
