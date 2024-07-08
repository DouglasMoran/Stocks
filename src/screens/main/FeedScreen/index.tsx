import useStocks from '@hooks/useStocks';
import { Text } from 'react-native';

const FeedScreen = () => {
  useStocks();
  return <Text>Buidling FeedScreen...!!</Text>;
};

export default FeedScreen;
