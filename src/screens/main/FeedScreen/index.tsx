import { Text } from 'react-native';

import useWebSocketService from '@hooks/useWebSocketService';
import useStocks from '@hooks/useStocks';

const FeedScreen = () => {
  useWebSocketService();
  useStocks();
  return <Text>Buidling FeedScreen...!!</Text>;
};

export default FeedScreen;
