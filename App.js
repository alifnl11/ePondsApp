import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './pages/home'
import LoginScreen from './pages/login'
import LoadingScreen from './pages/loading'
import InputScreen from './pages/input'
import EditTambak from './pages/edittambak'
import ProfileScreen from './pages/profile'
import InputTambak  from './pages/inputtambak'
import InputPekerja from './pages/inputpekerja'
import InputSuccsess from './pages/inputsuccsess'
import InputAncu from './pages/inputancu'
import DetailTambak from './pages/detailtambak'
import DaftarTambak from './pages/daftartambak'
import DaftarPekerja from './pages/daftarpekerja'
import DetailPekerja from './pages/detailpekerja'
import DetailAncu from './pages/detailancu'
import Input from './pages/input'
import LoginPekerja from './pekerja/loginpekerja'
import ChooseSign from './pages/chooseSign'
import LoadingPekerja from './pekerja/loadingpekerja'
import Register from './pages/register'
import HomePekerja from './pekerja/homepekerja'
import ProfilePekerja from './pekerja/profilepekerja'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {decode, encode} from 'base-64'
import Detail from './pages/detailpekerja';
import EditAncu from './pages/editancu';
if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

const HomeNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  DetailAncu : {
    screen: DetailAncu,
    navigationOptions: {
      headerShown: false,
    },
  },
  EditAncu : {
    screen: EditAncu,
    navigationOptions: {
      headerShown: false,
    },
  },
  InputSuccsess : {
    screen: InputSuccsess,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const DashboardNavigator = createStackNavigator({
  Input: {
    screen : InputScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  InputTambak : {
    screen : InputTambak,
    navigationOptions: {
      headerShown: false,
    },
  },
  InputPekerja : {
    screen: InputPekerja,
    navigationOptions: {
      headerShown: false,
    },
  },
  DaftarTambak : {
    screen : DaftarTambak,
    navigationOptions: {
      headerShown: false,
    },
  },
  DaftarPekerja : {
    screen : DaftarPekerja,
    navigationOptions: {
      headerShown: false,
    },
  },
  DetailPekerja : {
    screen : DetailPekerja,
    navigationOptions: {
      headerShown: false,
    },
  },
  DetailTambak : {
    screen: DetailTambak,
    navigationOptions: {
      headerShown: false,
    },
  },
  DetailAncu : {
    screen: DetailAncu,
    navigationOptions: {
      headerShown: false,
    },
  },
  EditTambak: {
    screen: EditTambak,
    navigationOptions: {
      headerShown: false,
    },
  },
  InputSuccsess : {
    screen: InputSuccsess,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const AppContainer = createBottomTabNavigator(
      {
        Home: {
          screen: HomeNavigator,
          navigationOptions: {
            tabBarIcon: ({tintColor}) => <FontAwesome5 name="home" size={24} color={tintColor}/>,
            navigationOptions : {
              title: 'ePonds',
              headerStyle: {
                backgroundColor: '#fe612c',
              },
              headerTitleAlign: "center",
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf: "center",
                fontSize: 25
              },
            },
          }
        },
        // Map: {
        //   screen: MapScreen,
        //   navigationOptions: {
        //     tabBarIcon: ({tintColor}) => <FontAwesome5 name="map-marked-alt" size={24} color={tintColor}/>,
        //     navigationOptions : {
        //       title: 'ePonds',
        //       headerStyle: {
        //         backgroundColor: '#fe612c',
        //       },
        //       headerTitleAlign: "center",
        //       headerTintColor: '#fff',
        //       headerTitleStyle: {
        //         fontWeight: 'bold',
        //         alignSelf: "center",
        //         fontSize: 25
        //       },
        //     },
        //   }
        // },
        Dashboard: {
          screen: DashboardNavigator,
          navigationOptions: {
            tabBarIcon: ({tintColor}) =>  <MaterialCommunityIcons name="folder-plus" size={24} color={tintColor}/>,
            navigationOptions : {
              title: 'ePonds',
              headerStyle: {
                backgroundColor: '#fe612c',
              },
              headerTitleAlign: "center",
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf: "center",
                fontSize: 25
              },
            },
          }
        },
        Profile: {
          screen: ProfileScreen,
          navigationOptions: {
            tabBarIcon: ({tintColor}) => <FontAwesome5 name="user-tie" size={24} color={tintColor}/>,
          },
        },
      },
      {
        tabBarOptions: {
          activeBackgroundColor: '#fe612c',
          inactiveBackgroundColor: '#fe612c',
          inactiveTintColor: "#F5F5F5",
          activeTintColor:'#FFFFFF',
          showLabel: false,
        }
      }
);

const HomePekerjaNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomePekerja,
    navigationOptions: {
      headerShown: false,
    },
  },
  DetailAncu : {
    screen: DetailAncu,
    navigationOptions: {
      headerShown: false,
    },
  },
  EditAncu : {
    screen: EditAncu,
    navigationOptions: {
      headerShown: false,
    },
  },
  InputSuccsess : {
    screen: InputSuccsess,
    navigationOptions: {
      headerShown: false,
    },
  },
})

const AppPekerja = createBottomTabNavigator(
  {
    Home: {
      screen: HomePekerjaNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <FontAwesome5 name="home" size={24} color={tintColor}/>,
        navigationOptions : {
          title: 'ePonds',
          headerStyle: {
            backgroundColor: '#fe612c',
          },
          headerTitleAlign: "center",
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: "center",
            fontSize: 25
          },
        },
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <FontAwesome5 name="user-tie" size={24} color={tintColor}/>,
      },
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#fe612c',
      inactiveBackgroundColor: '#fe612c',
      inactiveTintColor: "#F5F5F5",
      activeTintColor:'#FFFFFF',
      showLabel: false,
    }
  }
);

const AuthStack = createStackNavigator({
    chooseSignIn : ChooseSign, 
    Login : LoginScreen,
    LoginPekerja : LoginPekerja,
    Registrasi :  {
    screen: Register,
    navigationOptions: {
      headerShown: false,
      },
    },
});

export default createAppContainer(
    createSwitchNavigator(
      {
        Loading: LoadingScreen,
        App: AppContainer,
        AppPekerja: AppPekerja,
        Auth: AuthStack,
        LoadingPekerja: LoadingPekerja,
      },
      {
        initialRouteName: "Loading"
      }
    )    
);
