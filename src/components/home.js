import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import MoviesComponent from '../screens/MoviesComponent';
import SearchComponent from '../screens/SearchComponent';
import TvComponent from '../screens/TVComponent';

const Tab = createMaterialTopTabNavigator();

const home = ({navigation}) => {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="Movies"
                    children={() => <MoviesComponent navigation={navigation} />}
                />
                <Tab.Screen name="Search"
                    children={() => <SearchComponent navigation={navigation} />}
                />
                <Tab.Screen name="TV"
                    children={() => <TvComponent navigation={navigation} />}
                />
            </Tab.Navigator>
        </>
    );
};

export default home;