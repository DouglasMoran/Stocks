import { Text, View, ActivityIndicator } from 'react-native';

import { useSelector } from 'react-redux';

import { MainState } from '@store/index';

import { useTheme } from 'react-native-paper';

import { resize } from '@utils/scales';

import { styles } from './styles';

type ListEmptyPlaceholderProps = {
  title: string;
  text: string;
};

const ListEmptyPlaceholder = ({
  title,
  text,
}: ListEmptyPlaceholderProps): JSX.Element => {
  const isLoading = useSelector(
    (state: MainState) => state.app.isLoadingStockSymbols,
  );
  const theme = useTheme();
  return (
    <View style={styles(theme).placeholder}>
      <Text style={styles(theme).title}>{title}</Text>
      <Text style={styles(theme).disclaimer}>{text}</Text>
      {isLoading !== 'succeeded' && (
        <View style={styles(theme).loading}>
          <ActivityIndicator
            size={resize(32)}
            color={styles(theme).colorLoading}
          />
        </View>
      )}
    </View>
  );
};

export default ListEmptyPlaceholder;
