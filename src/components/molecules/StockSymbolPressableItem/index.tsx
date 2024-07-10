import { Text, View } from 'react-native';

import { useTheme } from 'react-native-paper';

import Touchable from '@components/atoms/Touchable';

import { styles } from './styles';

const StockSymbolPressableItem = ({
  symbol,
  description,
  currency,
  type,
  figi,
  mic,
  displaySymbol,
}: IStockSymbol): JSX.Element => {
  const theme = useTheme();

  return (
    <Touchable touchableStyle={styles(theme).touchable} onPress={() => {}}>
      <View style={styles(theme).contentContainer}>
        <View style={styles(theme).container}>
          <Text style={styles(theme).symbol}>{symbol}</Text>
          <Text style={styles(theme).description}>{description}</Text>
        </View>
        <View style={[styles(theme).container, styles(theme).leftContainer]}>
          <Text style={styles(theme).symbol}>{mic}</Text>
          <Text style={styles(theme).description}>{figi}</Text>
        </View>
      </View>
    </Touchable>
  );
};

export default StockSymbolPressableItem;
