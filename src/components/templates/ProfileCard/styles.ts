import { StyleSheet } from 'react-native';

import { resize } from '@utils/scales';

export const styles = (theme: any) =>
  StyleSheet.create({
    content: {
      flex: 1,
      marginTop: resize(32),
      marginBottom: resize(64),
      justifyContent: 'center',
      alignItems: 'center',
      elevation: resize(2),
      zIndex: resize(2),
      paddingTop: resize(32),
    },
    profileContainer: {
      alignItems: 'center',
    },
    footerCard: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    picture: {
      width: resize(100),
      height: resize(100),
      borderRadius: resize(100),
      borderColor: theme.colors.secondaryBase,
      borderWidth: resize(2),
    },
    givenName: {
      fontSize: resize(20),
      fontFamily: theme.fonts.secondaryBold,
      color: theme.colors.generalBlack,
    },
    familyName: {
      fontSize: resize(20),
      fontFamily: theme.fonts.secondaryLight,
      color: theme.colors.black,
    },
    displayNameContainer: {
      flexDirection: 'row',
      gap: theme.spacing.xxsmall,
      marginTop: theme.spacing.medium,
    },
    nickname: {
      fontSize: resize(14),
      fontFamily: theme.fonts.primary,
      color: theme.colors.primaryBase,
    },
    updatedAt: {
      fontSize: resize(12),
      fontFamily: theme.fonts.primaryLight,
      color: theme.colors.generalBlack,
    },
    email: {
      fontSize: resize(13),
      fontFamily: theme.fonts.primaryLight,
      color: theme.colors.black,
    },
  });
