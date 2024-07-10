import { resize } from '@utils/scales';
import { Platform, StyleSheet } from 'react-native';

export const styles = (theme: any) =>
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
    placeholder: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flex: 1,
      alignSelf: 'center',
      marginTop: '15%',
    },
    titlePlaceholder: {
      color: theme.colors.generalBlack,
      fontSize: resize(14),
      fontFamily: theme.fonts.secondaryLight,
      textAlign: 'center',
    },
    disclaimerPlaceholder: {
      color: theme.colors.generalBlack,
      fontSize: resize(14),
      fontFamily: theme.fonts.primaryMedium,
      textAlign: 'center',
    },
  });
