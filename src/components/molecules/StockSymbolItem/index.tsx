import { Text, View } from 'react-native';

import Button from '@components/atoms/Button';

import { useTheme } from 'react-native-paper';

import { styles } from './styles';

interface StockSymbolItemProps extends IStockSymbol {
  onPress: () => void;
}

const StockSymbolItem = ({
  symbol,
  description,
  isWatched,
  onPress,
}: StockSymbolItemProps): JSX.Element => {
  const theme = useTheme();

  return (
    <View style={styles(theme).contentContainer}>
      <View style={styles(theme).container}>
        <Text style={styles(theme).symbol}>{symbol}</Text>
        <Text style={styles(theme).description}>{description}</Text>
      </View>
      <View>
        <Button
          label='Add'
          type={isWatched ? 'solid' : 'outline'}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default StockSymbolItem;
