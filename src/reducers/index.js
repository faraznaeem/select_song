import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05", rating: 'shit' },
    { title: "Macarena", duration: "2:30", rating: 'good' },
    { title: "All Star", duration: "3:15", rating: 'okay' },
    { title: "I want it that way", duration: "1:45", rating: 'shit' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})