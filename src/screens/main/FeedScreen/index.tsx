import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from 'react-native-paper';

import Container from '@components/atoms/Container';

import useStocks from '@hooks/useStocks';

import { resize } from '@utils/scales';
import PopularStockCard from '@components/templates/PopularStockCard';

const FeedScreen = () => {
  const theme = useTheme();

  useStocks();

  return (
    <Container containerStyle={styles(theme).container}>
      <Text style={styles(theme).title}>My favorite watchlist</Text>
      <View style={{ flex: 1 }}>
        <Text>Test</Text>
      </View>
      <PopularStockCard />
    </Container>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      paddingTop: theme.spacing.xxxlarge,
    },
    title: {
      fontFamily: theme.fonts.primary,
      color: theme.colors.primaryBase,
      fontSize: resize(24),
    },
  });

export default FeedScreen;
