import React from 'react';
import {
  ActiveHomeIcon,
  HomeIcon,
  SearchIcon,
  ActiveIcon,
  ProfileIcon,
} from '../assets';
import {Actions, Chat, Home, Profile} from '../screen';

export const UserRoutes = [
  {
    name: 'Home',
    component: Home,
    icon: ({focused}: {focused: boolean}) =>
      !focused ? <ActiveHomeIcon /> : <HomeIcon />,
  },
  {
    name: 'Actions',
    component: Actions,
    icon: ({focused}: {focused: boolean}) => (
      <SearchIcon color={focused ? '#436bef' : '#98a0ac'} />
    ),
  },
  {
    name: 'Chat',
    component: Chat,
    icon: ({focused}: {focused: boolean}) => (
      <ActiveIcon color={focused ? '#436bef' : '#98a0ac'} />
    ),
  },
  {
    name: 'Profile',
    component: Profile,
    icon: ({focused}: {focused: boolean}) => (
      <ProfileIcon color={focused ? '#436bef' : '#98a0ac'} />
    ),
  },
];

export const accessRoutes = {
  user: UserRoutes,
};
