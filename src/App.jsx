import './App.css';
import NavMenu from './components/screens/NavMenu/NavMenu';
import Sidebar from './components/screens/Sidebar/Sidebar';
import TrackList from './components/screens/TrackList/Tracklist';
import AudioPlayer from './components/screens/AudioPlayer/AudioPlayer';
function App() {
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

export default App;
