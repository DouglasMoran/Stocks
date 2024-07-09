import { StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';

import { useSelector } from 'react-redux';

import LabelTextButton from '@components/molecules/LabelTextButton';
import StockSymbolItem from '@components/molecules/StockSymbolItem';
import Card from '@components/atoms/Card';

import { resize } from '@utils/scales';

import { useTheme } from 'react-native-paper';
import { MainState } from '@store/index';

const PopularStockCard = (): JSX.Element => {
  const theme = useTheme();

  const popularStocks = useSelector(
    (state: MainState) => state.app.popularStockSymbols,
  );

  const renderPopularStockItem = ({
    item: symbol,
  }: ListRenderItemInfo<IStockSymbol>): JSX.Element => (
    <StockSymbolItem {...symbol} />
  );

  return (
    <Card contentStyles={styles(theme).card}>
      <LabelTextButton
        label='🔥 Follow popular'
        labelButton='Stocks'
        onPress={() => {}}
      />
      <FlatList
        data={popularStocks}
        renderItem={renderPopularStockItem}
        contentContainerStyle={styles(theme).list}
      />
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
    list: {
      gap: theme.spacing.small,
    },
  });

export default PopularStockCard;
