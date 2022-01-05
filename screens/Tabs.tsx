import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StorybookUIRoot from '../storybook';
import Home from './Home';
import HomeIcon from '../icons/Home';
import StorybookIcon from '../icons/Storybook';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
      }}
    />
    {__DEV__ && (
      <Tab.Screen
        name="Storybook"
        component={StorybookUIRoot}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <StorybookIcon color={color} size={size} />
          ),
        }}
      />
    )}
  </Tab.Navigator>
);

export default Tabs;
