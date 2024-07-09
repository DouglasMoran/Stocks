import { Text, View } from 'react-native';

import Button from '@components/atoms/Button';

import { useTheme } from 'react-native-paper';

import { styles } from './styles';
import { useAppDispatch } from '@store/index';
import { watchStockSymbol } from '@store/slices/app/appSlice';

const StockSymbolItem = ({
  symbol,
  description,
  isWatched,
}: IStockSymbol): JSX.Element => {
  const theme = useTheme();

  const dispatch = useAppDispatch();

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
          onPress={() =>
            dispatch(watchStockSymbol({ type: 'popular', symbol }))
          }
        />
      </View>
    </View>
  );
};

export default StockSymbolItem;
