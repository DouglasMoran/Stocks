import { StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import StockSymbolsList from '@components/organisms/StockSymbolsList';
import LabelTextButton from '@components/molecules/LabelTextButton';
import Card from '@components/atoms/Card';

import { MainState } from '@store/index';

import { resize } from '@utils/scales';

import { useTheme } from 'react-native-paper';

const PopularStockCard = (): JSX.Element => {
  const theme = useTheme();

  const popularStocks = useSelector(
    (state: MainState) => state.app.popularStockSymbols,
  );

  return (
    <Card contentStyles={styles(theme).card}>
      <LabelTextButton
        label='🔥 Follow popular'
        labelButton='Stocks'
        onPress={() => {}}
      />
      <StockSymbolsList type='primary' data={popularStocks} />
    </Card>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    card: {
      marginBottom: theme.spacing.xlarge,
      gap: theme.spacing.medium,
      elevation: resize(4),
      zIndex: resize(4),
      flex: 1,
    },
  });

export default PopularStockCard;
