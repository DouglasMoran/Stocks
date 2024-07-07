import { StyleSheet } from 'react-native';

import { resize } from '@utils/scales';

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      gap: resize(12),
      paddingTop: theme.spacing.xxxlarge,
    },
    header: {
      marginBottom: theme.spacing.large,
    },
    formContainer: {
      marginBottom: theme.spacing.xsmall,
      gap: theme.spacing.small,
    },
    title: {
      color: theme.colors.primaryBase,
      fontFamily: theme.fonts.primary,
      fontSize: resize(24),
    },
    subtitle: {
      color: theme.colors.primaryDarkest,
      fontFamily: theme.fonts.primaryBold,
      fontSize: resize(18),
    },
    paragraph: {
      color: theme.colors.generalBlack,
      fontFamily: theme.fonts.secondaryLight,
      fontSize: resize(16),
    },
    highlightedText: {
      color: theme.colors.primaryDarkest,
      fontFamily: theme.fonts.secondaryMedium,
    },
    dividerContainer: {
      padding: 8,
      alignItems: 'center',
      flexDirection: 'row',
    },
    dividerText: {
      fontFamily: theme.fonts.secondaryLight,
      color: theme.colors.generalBlack,
      marginHorizontal: theme.spacing.xxsmall,
      fontSize: resize(16),
    },
    divider: {
      flex: 1,
    },
  });

export default styles;
