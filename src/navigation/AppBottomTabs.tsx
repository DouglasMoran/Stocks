import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import AccountScreen from '@screens/main/AccountScreen';
import AlertsScreen from '@screens/main/AlertsScreen';
import SearchScreen from '@screens/main/SearchScreen';
import FeedScreen from '@screens/main/FeedScreen';

const AppBottomTab = createMaterialBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <AppBottomTab.Navigator initialRouteName='FeedScreen'>
      <AppBottomTab.Screen
        name='FeedScreen'
        component={FeedScreen}
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <Icon name='home' color={color} />,
        }}
      />
      <AppBottomTab.Screen
        name='AlertsScreen'
        component={AlertsScreen}
        options={{
          title: 'Alerts',
          tabBarIcon: ({ color }) => <Icon name='bell' color={color} />,
        }}
      />
      <AppBottomTab.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <Icon name='search' color={color} />,
        }}
      />
      <AppBottomTab.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <Icon name='user' color={color} />,
        }}
      />
    </AppBottomTab.Navigator>
  );
};

export default AppBottomTabs;
