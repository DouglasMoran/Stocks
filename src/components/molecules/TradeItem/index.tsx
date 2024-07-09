import { Text, View } from 'react-native';

import { useTheme } from 'react-native-paper';

import { styles } from './styles';

interface TradeItemProps extends IDatumTrade {
  previousPrice: number;
}

const TradeItem = ({
  p: lastPrice,
  s: symbol,
  v: volume,
  previousPrice,
}: TradeItemProps): JSX.Element => {
  const theme = useTheme();

  const absoluteChange = lastPrice - previousPrice;
  const percentageChange = (absoluteChange / previousPrice) * 100;
  const isPositive = percentageChange >= 0;

  return (
    <View style={styles(theme).mainContainer}>
      <View
        style={[
          styles(theme).contentContainer,
          styles(theme).container,
          styles(theme).innerContainer,
        ]}
      >
        <View style={styles(theme).container}>
          <View style={[styles(theme).row, styles(theme).leftContainer]}>
            <Text style={styles(theme).symbol}>{symbol ?? '--'}</Text>
            <Text style={styles(theme).coin}>/USD</Text>
          </View>

          <Text style={styles(theme).volume}>Volume {volume ?? '0.00'}M</Text>
        </View>

        <View style={styles(theme).rightContainer}>
          <Text style={styles(theme).lastPrice}>{lastPrice ?? '0.00'}</Text>
          <Text style={styles(theme).value}>${lastPrice ?? '0.00'}</Text>
        </View>
      </View>

      <View
        style={[
          styles(theme).chipContainer,
          isPositive && styles(theme).chipGreen,
        ]}
      >
        <Text style={styles(theme).valuePercentage}>
          {isPositive ? '+' : '-'}
          {percentageChange ? percentageChange : '0.00'}%
        </Text>
      </View>
    </View>
  );
};

export default TradeItem;
