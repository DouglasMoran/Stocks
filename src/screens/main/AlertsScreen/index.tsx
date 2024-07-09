import {
  FlatList,
  ListRenderItemInfo,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useSelector } from 'react-redux';

import PopularStockCard from '@components/templates/PopularStockCard';

import TradeItem from '@components/molecules/TradeItem';

import Container from '@components/atoms/Container';

import useWebSocketService from '@hooks/useWebSocketService';

import { MainState } from '@store/index';

import { resize } from '@utils/scales';

import { Divider, useTheme } from 'react-native-paper';

const AlertsScreen = () => {
  const theme = useTheme();

  const watchTrades = useSelector((state: MainState) => state.app.watchTrades);
  const previousPrices = useSelector(
    (state: MainState) => state.app.previousPrices,
  );

  useWebSocketService();

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
        />
      </View>
      <PopularStockCard />
    </Container>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      paddingTop: Platform.OS === 'ios' ? resize(70) : theme.spacing.xxlarge,
    },
    title: {
      fontFamily: theme.fonts.primary,
      color: theme.colors.primaryBase,
      fontSize: resize(24),
    },
    div: { marginVertical: theme.spacing.medium },
  });

export default AlertsScreen;
