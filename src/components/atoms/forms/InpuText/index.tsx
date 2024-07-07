import { useState } from 'react';

import { Text, TextInput, View } from 'react-native';

import { TouchableRipple, useTheme } from 'react-native-paper';

import styles from './styles';

const InputText = ({ placeholder, label }: InpuTextProps) => {
  const theme = useTheme();

  const [inputValue, setInputValue] = useState<string>('');

  const clearInputValue = () => setInputValue('');

  return (
    <View style={styles(theme).inputContainer}>
      <Text style={styles(theme).inputLabel}>{label}</Text>
      <View>
        <TextInput
          keyboardType='email-address'
          autoCapitalize='none'
          value={inputValue}
          placeholder={placeholder}
          onChangeText={setInputValue}
          placeholderTextColor={theme.colors.secondary}
          style={styles(theme).input}
        />
        {inputValue.length > 0 && (
          <TouchableRipple
            style={styles(theme).clear}
            onPress={clearInputValue}
          >
            <Text style={styles(theme).highlightedText}>Clear</Text>
          </TouchableRipple>
        )}
      </View>
    </View>
  );
};

export default InputText;
