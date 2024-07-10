import { Image, Text, View } from 'react-native';

import { User } from 'react-native-auth0';

import Card from '@components/atoms/Card';

import { useTheme } from 'react-native-paper';

import { styles } from './styles';

type ProfileCardProps = {
  user: User;
};

const ProfileCard = ({
  user: { givenName, familyName, email, picture, nickname, updatedAt },
}: ProfileCardProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Card contentStyles={styles(theme).content}>
      <View style={styles(theme).profileContainer}>
        {picture && (
          <Image source={{ uri: picture }} style={styles(theme).picture} />
        )}
        <View style={styles(theme).displayNameContainer}>
          <Text style={styles(theme).givenName}>{givenName}</Text>
          <Text style={styles(theme).familyName}>{familyName}</Text>
        </View>
        <Text style={styles(theme).email}>{email}</Text>
      </View>
      <View style={styles(theme).footerCard}>
        <Text style={styles(theme).nickname}>@{nickname}</Text>
        <Text style={styles(theme).updatedAt}>{updatedAt}</Text>
      </View>
    </Card>
  );
};

export default ProfileCard;
