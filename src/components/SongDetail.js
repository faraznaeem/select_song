import React from "react";
import { connect } from "react-redux";

const SongDetail = ({song}) => {
  if (!song) {
    return <div>Select a song</div>
  }
  return (
    <div>
      <div className="ui card">
        <div className="content">
          <div className="center aligned header">Details for</div>
          <div className="center aligned description">
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
          </div>
        </div>
        <div className="extra content"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);
