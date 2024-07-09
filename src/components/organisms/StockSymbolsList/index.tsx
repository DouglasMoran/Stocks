import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';

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
    <FlatList
      data={data}
      renderItem={renderPopularStockItem}
      contentContainerStyle={styles(theme).list}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    list: {
      gap: theme.spacing.medium,
    },
  });

export default StockSymbolsList;
