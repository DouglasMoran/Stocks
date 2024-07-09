import { StyleSheet, Text, View } from 'react-native';

import Button from '@components/atoms/Button';

import { resize } from '@utils/scales';

import { useTheme } from 'react-native-paper';

const StockSymbolItem = ({
  symbol,
  description,
}: IStockSymbol): JSX.Element => {
  const theme = useTheme();

  return (
    <View style={styles(theme).itemContainer}>
      <View style={styles(theme).itemLeftContainer}>
        <Text style={styles(theme).symbol}>{symbol}</Text>
        <Text style={styles(theme).symbolDescription}>{description}</Text>
      </View>
      <View style={styles(theme).itemRightContainer}>
        <Button label='Add' type='outline' onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      flex: 1,
    },
    itemLeftContainer: {
      flex: 1,
    },
    itemRightContainer: {},
    symbol: {
      fontFamily: theme.fonts.secondaryMedium,
      color: theme.colors.generalBlack,
      fontSize: resize(18),
    },
    symbolDescription: {
      fontFamily: theme.fonts.secondaryLight,
      color: theme.colors.generalBlack,
      fontSize: resize(14),
    },
  });

export default StockSymbolItem;
