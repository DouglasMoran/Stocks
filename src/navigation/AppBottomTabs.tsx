import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import AccountScreen from '@screens/main/AccountScreen';
import WatchlistScreen from '@screens/main/WatchlistScreen';
import FeedScreen from '@screens/main/FeedScreen';
// Icons state focused
import ShapeIcon from '@assets/icons/ic_shape_solid.svg';
import TrendIcon from '@assets/icons/ic_arrow_trend_up_solid.svg';
import AccountIcon from '@assets/icons/ic_user_solid.svg';
// Icons state unfocused
import ShapeDisabledIcon from '@assets/icons/ic_shapes_disabled.svg';
import TrendDisabledIcon from '@assets/icons/ic_trend_up_disabled.svg';
import AccountDisabledIcon from '@assets/icons/ic_user_disabled.svg';

const AppBottomTab = createMaterialBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <AppBottomTab.Navigator initialRouteName='FeedScreen'>
      <AppBottomTab.Screen
        name='FeedScreen'
        component={FeedScreen}
        options={{
          title: 'Feed',
          tabBarIcon: ({ focused }) =>
            focused ? <ShapeIcon /> : <ShapeDisabledIcon />,
        }}
      />
      <AppBottomTab.Screen
        name='WatchlistScreen'
        component={WatchlistScreen}
        options={{
          title: 'Watchlist',
          tabBarIcon: ({ focused }) =>
            focused ? <TrendIcon /> : <TrendDisabledIcon />,
        }}
      />
      <AppBottomTab.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) =>
            focused ? <AccountIcon /> : <AccountDisabledIcon />,
        }}
      />
    </AppBottomTab.Navigator>
  );
};

export default AppBottomTabs;
