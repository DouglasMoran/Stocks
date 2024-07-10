import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';

import ListEmptyPlaceholder from '@components/organisms/ListEmptyPlaceholder';

import StockSymbolPressableItem from '@components/molecules/StockSymbolPressableItem';
import StockSymbolItem from '@components/molecules/StockSymbolItem';

import { watchStockSymbol } from '@store/slices/app/appSlice';
import { useAppDispatch } from '@store/index';

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

  const dispatch = useAppDispatch();

  const renderPopularStockItem = ({
    item,
  }: ListRenderItemInfo<IStockSymbol>): JSX.Element => (
    <>
      {type === 'primary' && <StockSymbolPressableItem {...item} />}
      {type === 'secondary' && (
        <StockSymbolItem
          {...item}
          onPress={() => dispatch(watchStockSymbol(item.symbol))}
        />
      )}
    </>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderPopularStockItem}
      contentContainerStyle={styles(theme).list}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <ListEmptyPlaceholder
          title='Stock symbols not loaded yet! 😥'
          text='Here will be found the stock symbols list'
        />
      }
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
