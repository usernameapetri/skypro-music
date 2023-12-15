import AppRoutes from './Routes';

import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import { AuthorizationContext } from './Context/user';

function App() {
  return (
    <>
      <AuthorizationContext>
        <AppRoutes />
      </AuthorizationContext>
      <AudioPlayer />
    </>
  );
}

export default App;
