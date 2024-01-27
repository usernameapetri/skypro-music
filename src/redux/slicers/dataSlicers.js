import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteTracks: [],
  tracksData: [],
  selectedTrack: {},
  plaing: false,
  shuffled: false,
  isLoading: true,
  fetchError: null,
};

export const counterSlice = createSlice({
  name: 'musicData',
  initialState,
  reducers: {
    setShuffled: (state, action) => {
      state.shuffled = action.payload;
    },

    nextTrack: (state) => {
      const filteredTracks = state.tracksData.filter((e) => {
        return e.track_file === state.selectedTrack.track_file;
      });

      if (filteredTracks.length > 0) {
        const index = state.tracksData.findIndex((e) => {
          return e.track_file === filteredTracks[0].track_file;
        });

        let newIndex = (index + 1) % state.tracksData.length;
        const shuffledIndex = Math.floor(
          Math.random() * state.tracksData.length,
        );

        state.selectedTrack =
          state.tracksData[state.shuffled ? shuffledIndex : newIndex];
      }
    },
    prevTrack: (state) => {
      const filteredTracks = state.tracksData.filter((e) => {
        return e.track_file === state.selectedTrack.track_file;
      });

      if (filteredTracks.length > 0) {
        const index = state.tracksData.findIndex((e) => {
          return e.track_file === filteredTracks[0].track_file;
        });

        if (index === 0) {
          return;
        }

        let newIndex = (index - 1) % state.tracksData.length;
        const shuffledIndex = Math.floor(
          Math.random() * state.tracksData.length,
        );
        state.selectedTrack =
          state.tracksData[state.shuffled ? shuffledIndex : newIndex];
      }
    },

    play: (state) => {
      state.plaing = true;
    },
    pause: (state) => {
      state.plaing = false;
    },
    setTracksData: (state, action) => {
      state.tracksData = action.payload;
    },
    setCurrentTrack: (state, action) => {
      state.selectedTrack = action.payload;
    },
    setIsLoadingPage: (state, action) => {
      state.isLoading = action.payload;
    },
    setFetchError: (state, action) => {
      state.fetchError = action.payload;
    },
  },
});

export const {
  setShuffled,
  prevTrack,
  nextTrack,
  play,
  pause,
  setTracksData,
  setCurrentTrack,
  setIsLoadingPage,
  setFetchError,
} = counterSlice.actions;

export const selectPlaing = (state) => state.musicData.plaing;
export const selectTrackData = (state) => state.musicData.tracksData;
export const selectCurrentTrack = (state) => state.musicData.selectedTrack;
export const selectIsLoading = (state) => state.musicData.isLoading;
export const selectFetchError = (state) => state.musicData.fetchError;

export default counterSlice.reducer;
