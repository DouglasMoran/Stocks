import { StyleSheet } from 'react-native';

import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';

import StockSymbolPressableItem from '@components/molecules/StockSymbolPressableItem';
import StockSymbolItem from '@components/molecules/StockSymbolItem';

import { useTheme } from 'react-native-paper';

type StockSymbolsListProps = {
  data: IStockSymbol[];
  type: StockSymbolItemType;
};

const StockSymbolsList = ({
  data,
  type,
}: StockSymbolsListProps): JSX.Element => {
  const theme = useTheme();

  const renderPopularStockItem = ({
    item: symbol,
  }: ListRenderItemInfo<IStockSymbol>): JSX.Element => (
    <>
      {type === 'primary' && <StockSymbolPressableItem {...symbol} />}
      {type === 'secondary' && <StockSymbolItem {...symbol} />}
    </>
  );

  return (
    <FlashList
      data={data}
      renderItem={renderPopularStockItem}
      style={styles(theme).list}
      estimatedItemSize={300}
    />
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    list: {
      gap: theme.spacing.small,
    },
  });

export default StockSymbolsList;
