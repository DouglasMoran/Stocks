import { useState, forwardRef } from 'react';

import { View, Text, TextInput, TextInputProps } from 'react-native';

import { TouchableRipple, useTheme } from 'react-native-paper';

import styles from './styles';
import { boolean } from 'yup';

type PasswordInputProps = {
  label: string;
  value: string;
  isRequired?: boolean;
  haveError?: boolean;
  error?: string;
} & TextInputProps;

const PasswordInput = forwardRef<TextInput, PasswordInputProps>(
  ({ label, isRequired = true, haveError, error, ...props }, ref) => {
    const theme = useTheme();

    const [hidePassword, setHidePassword] = useState<boolean>(true);

    const isDirty = props.value.length > 0;

    const toggleVisibility = () => setHidePassword(!hidePassword);

    return (
      <View style={styles(theme).container}>
        <View style={styles(theme).inputContainer}>
          <Text style={styles(theme).inputLabel}>{label}</Text>
          <View>
            <TextInput
              {...props}
              textContentType='password'
              autoComplete='password'
              autoCapitalize='none'
              secureTextEntry={hidePassword}
              autoCorrect={false}
              placeholder='**************'
              placeholderTextColor={theme.colors.secondary}
              style={[
                styles(theme).input,
                haveError && styles(theme).inputError,
              ]}
              ref={ref}
            />
            {isDirty && (
              <TouchableRipple
                style={styles(theme).clear}
                onPress={toggleVisibility}
              >
                <Text style={styles(theme).highlightedText}>
                  {hidePassword ? 'Show' : 'Hide'}
                </Text>
              </TouchableRipple>
            )}
          </View>
        </View>
        {haveError && (
          <Text style={styles(theme).error}>{error?.toString()}</Text>
        )}
      </View>
    );
  },
);

export default PasswordInput;
