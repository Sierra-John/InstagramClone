import {
  View,
  Image,
  useWindowDimensions,
  FlatList,
  ViewToken,
  ViewabilityConfig,
} from 'react-native';
import {useState, useRef} from 'react';
import DoublePressable from '../DoublePressable';
import styles from './styles';
import colors from '../../theme/colors';

interface ICarousel {
  images: string[];
  onDoublePress: () => void;
}

const Carousel = ({images, onDoublePress}: ICarousel) => {
  const {width} = useWindowDimensions();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{uri: item}} style={[styles.image, {width}]} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
      <View style={styles.dots}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  activeImageIndex === index ? colors.primary : colors.white,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
