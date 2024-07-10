import { useState } from 'react';

import { Text, TextInput, View } from 'react-native';

import { TouchableRipple, useTheme } from 'react-native-paper';

import styles from './styles';

const InputText = ({
  placeholder,
  label,
  type,
  isClearable = false,
  isRequired = true,
  haveError,
  error,
  ...configInput
}: InpuTextProps) => {
  const theme = useTheme();

  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).inputContainer}>
        <Text style={styles(theme).inputLabel}>
          {label} {isRequired && '*'}
        </Text>
        <View>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={theme.colors.secondary}
            keyboardType={type}
            style={[styles(theme).input, haveError && styles(theme).inputError]}
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
      {haveError && (
        <Text style={styles(theme).error}>{error?.toString()}</Text>
      )}
    </View>
  );
};

export default InputText;
