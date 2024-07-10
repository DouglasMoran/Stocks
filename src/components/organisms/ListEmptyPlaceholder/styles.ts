import { StyleSheet } from 'react-native';

import { resize } from '@utils/scales';

export const styles = (theme: any) =>
  StyleSheet.create({
    placeholder: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      alignSelf: 'center',
      marginTop: '15%',
      flex: 1,
    },
    title: {
      color: theme.colors.generalBlack,
      fontSize: resize(14),
      fontFamily: theme.fonts.secondaryLight,
      textAlign: 'center',
    },
    disclaimer: {
      color: theme.colors.generalBlack,
      fontSize: resize(14),
      fontFamily: theme.fonts.primaryMedium,
      textAlign: 'center',
    },
    loading: {
      flexDirection: 'row',
      marginTop: theme.spacing.xlarge,
      flex: 1,
    },
    colorLoading: theme.colors.generalBlack,
  });
