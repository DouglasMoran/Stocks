import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppBottomTabs from '@navigation/AppBottomTabs';

const AppStack = createNativeStackNavigator();

const AppRoute = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name='AppBottomTabs' component={AppBottomTabs} />
    </AppStack.Navigator>
  );
};

export default AppRoute;
