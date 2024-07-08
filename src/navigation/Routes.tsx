import { NavigationContainer } from '@react-navigation/native';

import AuthRoute from '@navigation/AuthRoute';
import AppRoute from '@navigation/AppRoute';

import useAuth from '@hooks/useAuth';

const Routes = () => {
  const { isSignin } = useAuth();

  return (
    <NavigationContainer>
      {isSignin ? <AppRoute /> : <AuthRoute />}
    </NavigationContainer>
  );
};

export default Routes;
