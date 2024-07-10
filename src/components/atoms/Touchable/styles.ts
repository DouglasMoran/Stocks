import { StyleSheet } from 'react-native';

export const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      borderRadius: theme.spacing.small,
      overflow: 'hidden',
    },
    touchable: {
      flex: 1,
      borderRadius: theme.spacing.small,
    },
  });
