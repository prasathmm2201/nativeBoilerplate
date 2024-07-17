import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {accessRoutes} from '../router';
import {CustomHeader, CustomTabBar} from '../component';
import {tabNavOptions} from '../utils';

const Tab = createBottomTabNavigator();

export const RootNavigate = () => {
  const routers = accessRoutes.user;
  const options = tabNavOptions;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTabBar {...props} />}>
      {routers.map((tab, index) => {
        return (
          <Tab.Screen
            key={index}
            options={{
              tabBarLabel: tab.name,
              tabBarIcon: ({focused}) => tab.icon({focused}),
              header: () => <CustomHeader title={tab.name} />,
              ...options,
            }}
            name={tab.name}
            component={tab.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};
