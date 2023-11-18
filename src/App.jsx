import AppRoutes from './Routes';

import { Context } from './Context/track';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import { AuthorizationContext } from './Context/user';

function App() {
  return (
    <Context>
      <AuthorizationContext>
        <AppRoutes />
      </AuthorizationContext>
      <AudioPlayer />
    </Context>
  );
}

export default App;
