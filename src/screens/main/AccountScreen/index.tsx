import { Text, View } from 'react-native';

import ProfileCard from '@components/templates/ProfileCard';

import Container from '@components/atoms/Container';
import Button from '@components/atoms/Button';

import useAuth from '@hooks/useAuth';

import { useTheme } from 'react-native-paper';

import { styles } from './styles';

const AccountScreen = () => {
  const theme = useTheme();

  const { user, onSignout } = useAuth();

  return (
    <Container containerStyle={styles(theme).container}>
      <Text style={styles(theme).title}>Account Screen</Text>
      <ProfileCard user={user ?? {}} />
      <View style={styles(theme).footer}>
        <Button
          label='Sign out'
          type='solid'
          color={styles(theme).button}
          onPress={onSignout}
        />
      </View>
    </Container>
  );
};

export default AccountScreen;
