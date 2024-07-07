import { StyleSheet } from 'react-native';

import { resize } from '@utils/scales';

const styles = (theme: any) =>
  StyleSheet.create({
    outerButtonContainer: {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.spacing.small,
      overflow: 'hidden',
    },
    button: {
      paddingHorizontal: theme.spacing.medium,
      paddingVertical: theme.spacing.xsmall,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      height: resize(48),
    },
    touchable: {
      flex: 1,
      borderRadius: theme.spacing.small,
    },
    buttonText: {
      fontFamily: theme.fonts.primaryMedium,
      fontSize: resize(14),
    },
    iconContainer: {
      position: 'absolute',
      start: theme.spacing.medium,
    },
  });

export default styles;
