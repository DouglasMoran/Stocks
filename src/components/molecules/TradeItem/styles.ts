import { StyleSheet } from 'react-native';

import { resize } from '@utils/scales';

export const styles = (theme: any) =>
  StyleSheet.create({
    mainContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    contentContainer: {
      flexDirection: 'row',
      flex: 1,
    },
    row: {
      flexDirection: 'row',
    },
    container: {
      justifyContent: 'space-between',
    },
    leftContainer: {
      alignItems: 'flex-end',
    },
    rightContainer: {
      alignItems: 'flex-end',
    },
    innerContainer: {
      flex: 1,
    },
    chipContainer: {
      backgroundColor: theme.colors.alertBase,
      alignSelf: 'center',
      borderRadius: resize(8),
      marginStart: theme.spacing.medium,
      paddingVertical: resize(8),
      paddingHorizontal: resize(10),
    },
    symbol: {
      fontFamily: theme.fonts.secondary,
      color: theme.colors.generalBlack,
      fontSize: resize(16),
    },
    coin: {
      fontFamily: theme.fonts.secondary,
      color: theme.colors.grayDark,
      fontSize: resize(14),
    },
    volume: {
      fontFamily: theme.fonts.secondary,
      color: theme.colors.grayDark,
      fontSize: resize(16),
    },
    lastPrice: {
      fontFamily: theme.fonts.secondary,
      color: theme.colors.generalBlack,
      fontSize: resize(18),
    },
    value: {
      fontFamily: theme.fonts.secondary,
      color: theme.colors.grayDark,
      fontSize: resize(14),
    },
    valuePercentage: {
      fontFamily: theme.fonts.secondary,
      color: theme.colors.generalWhite,
      fontSize: resize(16),
    },
    chipGreen: {
      backgroundColor: theme.colors.successBase,
    },
  });
