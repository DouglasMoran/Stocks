import { StyleSheet } from 'react-native';

import { resize } from '@utils/scales';

export const styles = (theme: any) =>
  StyleSheet.create({
    contentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
    },
    container: {
      flex: 1,
    },
    symbol: {
      fontFamily: theme.fonts.secondaryMedium,
      color: theme.colors.generalBlack,
      fontSize: resize(18),
    },
    description: {
      fontFamily: theme.fonts.secondaryLight,
      color: theme.colors.generalBlack,
      fontSize: resize(14),
    },
    leftContainer: {
      alignItems: 'flex-end',
    },
    touchable: {
      borderRadius: resize(-1),
    },
  });
