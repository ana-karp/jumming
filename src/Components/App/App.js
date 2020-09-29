import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

const tracks = [{
  name: 'Tiny Dancer',
  artist: 'Elton John',
  album: 'Madman Across The Water',
  id: 1
}, {
  name: 'Tiny Dancer',
  artist: 'Elton John',
  album: 'Madman Across The Snow',
  id: 2
}, {
  name: 'Dancer',
  artist: 'The White Raven',
  album: 'Madman Across The Water',
  id: 3
}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: tracks
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
