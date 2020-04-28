import React from 'react';
import Profile from '../pages/profile';
import Navigator from '../routes/homeStack';
import Navigator1 from '../routes/mapStack';
import Navigator2 from '../routes/inputStack';
import {
  StyleSheet,
  View,
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from'react-native-vector-icons/MaterialCommunityIcons';


class HomeScreen extends React.Component {
  render() {
      return(
          <View style={styles.container}>
            <Navigator />
          </View>
      )
  }
}

class MapScreen extends React.Component {
  render() {
      return(
          <View style={styles.container}>
            <Navigator1 />
          </View>
      )
  }
}

class InputScreen extends React.Component {
  render() {
      return(
          <View style={styles.container}>
            <Navigator2 />
          </View>
      )
  }
}

class ProfileScreen extends React.Component {
  render() {
      return(
          <View style={styles.container}>
            <Profile />
          </View>
      )
  }
}


export default function MyTab() {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
    activeColor="#FFFFFF"
    inactiveColor="#F6EEEC"
        barStyle={{ backgroundColor: '#fe612c' }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={20} />
          ),
        }}
        />
      <Tab.Screen 
        name="Map" 
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="map-marked-alt" color={color} size={20} />
          ),
        }}
        />
      <Tab.Screen 
        name="Input" 
        component={InputScreen} 
        options={{
          tabBarLabel: 'Input',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="folder-plus" color={color} size={25} />
          ),
        }}
        />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={25} />
          ),
        }}
        />
    </Tab.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
});
