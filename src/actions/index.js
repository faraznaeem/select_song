// We are using a named export in this file like the one below, 
// and the reason for that is so we can export multiple things from this file.
// Otherwise we would have to create multiple files
// this also means that we need to import the component 
// with curly braces like this { selectedSong }

export const selectSong = song => {
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};

