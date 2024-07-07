import { NavigationContainer } from '@react-navigation/native';

import AuthRoute from '@navigation/AuthRoute';
import AppRoute from '@navigation/AppRoute';

const Routes = () => {
  const isSignin = false;

  return (
    <NavigationContainer>
      {isSignin ? <AppRoute /> : <AuthRoute />}
    </NavigationContainer>
  );
};

export default Routes;
