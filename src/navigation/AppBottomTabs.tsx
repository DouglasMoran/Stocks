import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import AccountScreen from '@screens/main/AccountScreen';
import AlertsScreen from '@screens/main/AlertsScreen';
import SearchScreen from '@screens/main/SearchScreen';
import FeedScreen from '@screens/main/FeedScreen';

import ShapeIcon from '@assets/icons/ic_shape_solid.svg';
import TrendIcon from '@assets/icons/ic_arrow_trend_up_solid.svg';
import SearchIcon from '@assets/icons/ic_search_solid.svg';
import AccountIcon from '@assets/icons/ic_user_solid.svg';

const AppBottomTab = createMaterialBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <AppBottomTab.Navigator initialRouteName='FeedScreen'>
      <AppBottomTab.Screen
        name='FeedScreen'
        component={FeedScreen}
        options={{
          title: 'Feed',
          tabBarIcon: ({ focused, color }) =>
            focused ? <ShapeIcon /> : <Icon name='shape' />,
        }}
      />
      <AppBottomTab.Screen
        name='AlertsScreen'
        component={AlertsScreen}
        options={{
          title: 'Alerts',
          tabBarIcon: ({ focused, color }) =>
            focused ? <TrendIcon /> : <Icon name='trend' />,
        }}
      />
      <AppBottomTab.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused, color }) =>
            focused ? <SearchIcon /> : <Icon name='search' />,
        }}
      />
      <AppBottomTab.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ focused, color }) =>
            focused ? <AccountIcon /> : <Icon name='user' />,
        }}
      />
    </AppBottomTab.Navigator>
  );
};

export default AppBottomTabs;
