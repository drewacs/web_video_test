import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//import View from 'react-native-web/dist/exports/View'
import Text from 'react-native-web/dist/exports/Text'

import { StyleSheet, View } from 'react-native';


import VideoPlayer from 'react-videoplayer'
import 'react-videoplayer/lib/index.css'

import YouTube from 'react-youtube';

import { Player } from 'video-react';

import "../node_modules/video-react/dist/video-react.css";



import ReactPlayer from 'react-player'



class App extends Component {

  constructor(props) {
        super(props);

        this.state = {
            videoSrc : 'https://www.w3schools.com/html/mov_bbb.mp4',

        };

    }




  render() {

    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 1,
          disablekb: 0,
          showinfo: 0,
        }
      };

    //const DividerHorizontal = () => <View style={styles.horizontalDivider} />;
    const DividerVertical = () => <View style={styles.verticalDivider} />;

    const styles = StyleSheet.create({
      horizontalDivider: {
        width: '0.6rem'
      },
      verticalDivider: {
        height: '1.3125rem'
      }
    });

    return (

      <View>
        <Text>Different React Video Tests!</Text>
        <DividerVertical/>
        <Text>React-videoplayer : https://www.w3schools.com/html/mov_bbb.mp4</Text>
        <Text>https://www.npmjs.com/package/react-videoplayer</Text>
        <View style={{
          margin:10,
          borderWidth: 0.3,
          width: 810,
          padding: 5,
          borderRadius: 5
        }}>
          <VideoPlayer
            videoSrc={this.state.videoSrc}
            autoPlay={true}
          />
        </View>



        <DividerVertical/>
        <Text>Video-React: src: https://media.w3.org/2010/05/sintel/trailer_hd.mp4</Text>
        <Text>https://video-react.js.org</Text>
        <View style={{
          margin:10,
          borderWidth: 0.3,
          width: 650,
          padding: 5,
          borderRadius: 5
        }}>
          <Player
            playsInline
            poster="../assets/poster.png"
            src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
          />
        </View>


        <DividerVertical/>
        <Text>React-Youtube: [ID: "2g811Eo7K8U"]</Text>
        <Text>https://www.npmjs.com/package/react-youtube</Text>
        <View style={{
          margin:10,
          //backgroundColor: '#cecece',
          borderWidth: 0.3,
          width: 650,
          padding: 5,
          borderRadius: 5
        }}>
        <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
          onReady={this._onReady}
        />

        </View>


        <DividerVertical/>
        <Text>React-Player: https://www.youtube.com/watch?v=ysz5S6PUM-U</Text>
        <Text>https://www.npmjs.com/package/react-player</Text>
        <View style={{
          margin:10,
          borderWidth: 0.3,
          width: 650,
          padding: 5,
          borderRadius: 5
        }}>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          playing={false} />
        </View>

        <DividerVertical/>
        <Text>React-Player: https://www.twitch.tv/videos/257757406</Text>
        <Text>https://www.npmjs.com/package/react-player</Text>
        <View style={{
          margin:10,
          borderWidth: 0.3,
          width: 650,
          padding: 5,
          borderRadius: 5
        }}>
        <ReactPlayer
          url='https://www.twitch.tv/videos/257757406'
          playing={false} />
        </View>



        <DividerVertical/>
        <Text>React-Player: https://vimeo.com/90509568</Text>
        <Text>https://www.npmjs.com/package/react-player</Text>
        <View style={{
          margin:10,
          borderWidth: 0.3,
          width: 650,
          padding: 5,
          borderRadius: 5
        }}>
        <ReactPlayer
          url='https://vimeo.com/90509568'
          playing={false} />
        </View>

      </View>
    );
  }


  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default App;

/*




<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
  </header>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</div>
*/
