import { useState } from 'react';

import {
  FlatList,
  ListRenderItemInfo,
  Platform,
  RefreshControl,
  Text,
  View,
} from 'react-native';

import { Divider, useTheme } from 'react-native-paper';
import { useDebouncedCallback } from 'use-debounce';
import { useSelector } from 'react-redux';

import ListEmptyPlaceholder from '@components/organisms/ListEmptyPlaceholder';

import PopularStockCard from '@components/templates/PopularStockCard';

import TradeItem from '@components/molecules/TradeItem';

import Container from '@components/atoms/Container';

import useWebSocketService from '@hooks/useWebSocketService';

import { MainState } from '@store/index';

import { resize } from '@utils/scales';

import { styles } from './styles';

const WatchlistScreen = () => {
  const theme = useTheme();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const webSocketServiceRef = useSelector(
    (state: MainState) => state.app.webSocketServiceRef,
  );
  const watchTrades = useSelector((state: MainState) => state.app.watchTrades);
  const previousPrices = useSelector(
    (state: MainState) => state.app.previousPrices,
  );

  useWebSocketService();

  const debounced = useDebouncedCallback(
    () => {
      webSocketServiceRef.reconnect();
      setIsRefreshing(false);
    },
    3000,
    {
      trailing: true,
    },
  );

  const onRefresh = () => {
    setIsRefreshing(true);
    debounced();
  };

  const renderTradeItem = ({
    item,
  }: ListRenderItemInfo<IDatumTrade>): JSX.Element => (
    <TradeItem key={item.s} previousPrice={previousPrices[item.s]} {...item} />
  );

  return (
    <Container containerStyle={styles(theme).container}>
      <Text style={styles(theme).title}>My favorite watchlist</Text>
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? resize(48) : resize(32),
        }}
      >
        <FlatList
          data={watchTrades}
          renderItem={renderTradeItem}
          ItemSeparatorComponent={() => <Divider style={styles(theme).div} />}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <ListEmptyPlaceholder
              title='Stock not watching yet. Stay up to date now! 🧐'
              text='📝 Wait 30s for watching your watchlist updated'
            />
          }
        />
      </View>
      <PopularStockCard />
    </Container>
  );
};

export default WatchlistScreen;
