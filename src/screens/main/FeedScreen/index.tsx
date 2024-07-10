import { Platform, StyleSheet, Text } from 'react-native';

import { useSelector } from 'react-redux';

import StockSymbolsList from '@components/organisms/StockSymbolsList';

import Container from '@components/atoms/Container';

import useStocks from '@hooks/useStocks';

import { MainState } from '@store/index';

import { resize } from '@utils/scales';

import { useTheme } from 'react-native-paper';

const FeedScreen = () => {
  const theme = useTheme();

  const stockSymbols = useSelector(
    (state: MainState) => state.app.stockSymbols,
  );

  useStocks();

  return (
    <Container containerStyle={styles(theme).container}>
      <Text style={styles(theme).title}>Stock symbols</Text>
      <StockSymbolsList type='secondary' data={stockSymbols} />
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
  });

export default FeedScreen;
