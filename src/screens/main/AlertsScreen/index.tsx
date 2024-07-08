import { StyleSheet, Text, View } from 'react-native';

import { FlashList } from '@shopify/flash-list';
import { useSelector } from 'react-redux';

import Container from '@components/atoms/Container';

import { MainState } from '@store/index';

import { resize } from '@utils/scales';

import { useTheme } from 'react-native-paper';

const AlertsScreen = () => {
  const theme = useTheme();

  const watchTrades = useSelector((state: MainState) => state.app.watchTrades);

  return (
    <Container>
      <Text style={styles(theme).title}>Watch trades list</Text>
      <FlashList
        data={watchTrades}
        renderItem={({ item, index: im }) => (
          <View key={im}>
            <Text style={styles(theme).item}>{item.type}</Text>
            {item.data.map((d: IDatumTrade, index) => {
              return (
                <View key={index}>
                  <Text style={styles(theme).value}>{d.s}</Text>
                  <Text style={styles(theme).value}>{d.v}</Text>
                </View>
              );
            })}
          </View>
        )}
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
    item: {
      fontFamily: theme.fonts.secondary,
      color: theme.colors.secondaryBase,
      fontSize: resize(20),
    },
    value: {
      fontFamily: theme.fonts.secondaryLight,
      color: theme.colors.generalBlack,
      fontSize: resize(16),
    },
  });

export default AlertsScreen;
