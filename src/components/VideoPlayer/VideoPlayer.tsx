import {View, Pressable} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IVideoPlayer {
  uri: string;
}

const VideoPlayer = ({uri}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);

  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={muted}
      />

      <Pressable
        onPress={() => setMuted(existingValue => !existingValue)}
        style={styles.muteButton}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color="white"
        />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;
