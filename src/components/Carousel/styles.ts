import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  image: {
    aspectRatio: 1,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',

    position: 'absolute',
    bottom: 0,

    width: '100%',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 3,
    margin: 10,
  },
});
