import { Platform, StyleSheet } from 'react-native';

import { resize } from '@utils/scales';

export const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      paddingTop: Platform.OS === 'ios' ? resize(70) : theme.spacing.xxlarge,
      paddingBottom: resize(32),
    },
    title: {
      fontSize: resize(24),
      fontFamily: theme.fonts.primary,
      color: theme.colors.primaryBase,
    },

    footer: {
      justifyContent: 'center',
      paddingHorizontal: theme.spacing.xxlarge,
    },
    button: theme.colors.alertBase,
  });
