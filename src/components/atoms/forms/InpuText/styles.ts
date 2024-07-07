import { StyleSheet } from 'react-native';

const styles = (theme: any) =>
  StyleSheet.create({
    highlightedText: {
      fontFamily: theme.fonts.secondaryMedium,
      color: theme.colors.primaryDarkest,
    },
    input: {
      backgroundColor: theme.colors.primaryLightest,
      paddingStart: theme.spacing.xsmall,
      borderRadius: theme.spacing.xsmall,
      color: theme.colors.primaryDarkest,
      overflow: 'hidden',
    },
    clear: {
      justifyContent: 'center',
      textAlign: 'center',
      position: 'absolute',
      overflow: 'hidden',
      height: '100%',
      end: '0%',
      borderBottomEndRadius: theme.spacing.xsmall,
      borderTopEndRadius: theme.spacing.xsmall,
      paddingHorizontal: theme.spacing.medium,
    },
    inputLabel: {
      fontFamily: theme.fonts.secondary,
      color: theme.colors.grayBase,
    },
    inputContainer: {
      gap: theme.spacing.xsmall,
    },
  });

export default styles;
