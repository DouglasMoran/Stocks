import { View, Text, StyleSheet } from 'react-native';

import { useTheme } from 'react-native-paper';

import { resize } from '@utils/scales';

const PowerBy = () => {
  const theme = useTheme();

  return (
    <View style={styles(theme).byContainer}>
      <Text style={styles(theme).byText}>
        Powered by{' '}
        <Text style={styles(theme).highlightedByText}>@DouglasMoran</Text>
      </Text>
    </View>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    byText: {
      color: theme.colors.generalBlack,
      fontFamily: theme.fonts.secondaryLight,
    },
    highlightedByText: {
      fontFamily: theme.fonts.secondaryMedium,
      fontSize: resize(14),
    },
    byContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: theme.spacing.xxlarge,
    },
  });

export default PowerBy;
