import { useState } from 'react';

import { Text, TextInput, View } from 'react-native';

import { TouchableRipple, useTheme } from 'react-native-paper';

import styles from './styles';

const InputText = ({
  placeholder,
  label,
  type,
  isClearable = false,
  ...configInput
}: InpuTextProps) => {
  const theme = useTheme();

  return (
    <View style={styles(theme).inputContainer}>
      <Text style={styles(theme).inputLabel}>{label}</Text>
      <View>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={theme.colors.secondary}
          keyboardType={type}
          style={styles(theme).input}
          {...configInput}
        />
        {configInput.value.length > 0 && (
          <TouchableRipple
            style={styles(theme).clear}
            onPress={configInput.onClean}
          >
            <Text style={styles(theme).highlightedText}>Clear</Text>
          </TouchableRipple>
        )}
      </View>
    </View>
  );
};

export default InputText;
