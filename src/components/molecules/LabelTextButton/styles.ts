import { StyleSheet } from 'react-native';

import { resize } from '@utils/scales';

export const styles = (theme: any) =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleCard: {
      fontFamily: theme.fonts.secondaryLight,
      color: theme.colors.generalBlack,
      fontSize: resize(16),
    },
    textButotn: {
      fontFamily: theme.fonts.primary,
      color: theme.colors.primaryBase,
      textDecorationLine: 'underline',
      textDecorationColor: theme.colors.primary,
    },
    addButtonContainer: {
      paddingHorizontal: -1,
      paddingVertical: -1,
      height: 'auto',
    },
    contentContainerButton: {
      paddingHorizontal: -1,
      paddingVertical: -1,
      marginTop: resize(6),
      marginStart: theme.spacing.xxsmall,
    },
  });
