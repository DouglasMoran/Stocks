import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '@screens/auth/LoginScreen';

const AuthStack = createNativeStackNavigator();

const AuthRoute = () => {
  return (
    <AuthStack.Navigator
      initialRouteName='LoginScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name='LoginScreen' component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthRoute;
