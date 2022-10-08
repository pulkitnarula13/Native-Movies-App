import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import MoviesComponent from '../screens/MoviesComponent';
import SearchComponent from '../screens/SearchComponent';
import TvComponent from '../screens/TVComponent';

const Tab = createMaterialTopTabNavigator();

const home = () => {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="Movies" component={MoviesComponent} />
                <Tab.Screen name="Search" component={SearchComponent} />
                <Tab.Screen name="TV" component={TvComponent} />
            </Tab.Navigator>
        </>
    );
};

export default home;