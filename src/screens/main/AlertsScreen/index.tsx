import { StyleSheet, Text } from 'react-native';

import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import { useSelector } from 'react-redux';

import TradeItem from '@components/molecules/TradeItem';

import Container from '@components/atoms/Container';

import { MainState } from '@store/index';

import { resize } from '@utils/scales';

import { Divider, useTheme } from 'react-native-paper';

const AlertsScreen = () => {
  const theme = useTheme();

  const watchTrades = useSelector((state: MainState) => state.app.watchTrades);
  const previousPrices = useSelector(
    (state: MainState) => state.app.previousPrices,
  );

  const renderTradeItem = ({
    item,
  }: ListRenderItemInfo<IDatumTrade>): JSX.Element => (
    <TradeItem previousPrice={previousPrices[item.s]} {...item} />
  );

  return (
    <Container>
      <Text style={styles(theme).title}>Watch trades list</Text>
      <FlashList
        data={watchTrades}
        renderItem={renderTradeItem}
        ItemSeparatorComponent={() => <Divider style={styles(theme).div} />}
        estimatedItemSize={200}
      />
    </Container>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    title: {
      fontFamily: theme.fonts.primary,
      color: theme.colors.primaryBase,
      fontSize: resize(24),
    },
    div: { marginVertical: theme.spacing.medium },
  });

export default AlertsScreen;
