import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import StockSymbolsList from '@components/organisms/StockSymbolsList';
import LabelTextButton from '@components/molecules/LabelTextButton';
import Card from '@components/atoms/Card';

import { MainState } from '@store/index';

import { resize } from '@utils/scales';

import { useTheme } from 'react-native-paper';

const PopularStockCard = (): JSX.Element => {
  const theme = useTheme();

  const navigation = useNavigation<any>();

  const stockSymbols = useSelector(
    (state: MainState) => state.app.stockSymbols,
  );

  const stockSymbolsSuggestions = stockSymbols.slice(0, 5);

  return (
    <Card contentStyles={styles(theme).card}>
      <LabelTextButton
        label='🔥 Follow popular'
        labelButton='Stocks'
        onPress={() => navigation.navigate('FeedScreen')}
      />
      <StockSymbolsList type='secondary' data={stockSymbolsSuggestions} />
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
