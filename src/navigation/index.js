import React, {useState} from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Divider, Image, Input, HStack, Text, Pressable } from 'native-base';

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen';
import AccountScreen from '../screens/AccountScreen';
import MyTheme from '../Theme';

import albumData from "../json/albums.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      {/* <MyDrawer /> */}
      <MyTabs/>
    </NavigationContainer>
  );
}

const CustomDrawerContent = (props) => {
  const { colors } = useTheme();

  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <Image
        h={10}
        // w={48}
        source={require("../images/img_avatar.png")}
        alt='albumImage'
      />
      <DrawerItemList {...props} />
      <Divider my="2"/>
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        drawerActiveBackgroundColor: colors.primary100,
        drawerActiveTintColor: colors.primary700,
        drawerInactiveTintColor: colors.light500,
        drawerStyle: { width: 250 },
        drawerLabelStyle: { fontSize: 18, fontWeight: '400' },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          headerShown: false,
          drawerLabel: "Account",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          drawerLabel: "Settings",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const MyTabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Stack2" 
        component={HomeStack} 
        options={{
          headerShown: false,
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Stack3" 
        component={HomeStack} 
        options={{
          headerShown: false,
          title: "My books",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const SettingsStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              // onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "Display",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>
  );
}

const HomeStack = ({ navigation }) => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
      setToggle(!toggle);
  };

  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          title: "",
          headerShadowVisible:false,
          headerTitleStyle: {
            elevation: 0,
            backgroundColor:"#fff",
            shadowOpacity: 0,
            shadowOffset:0,
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={28}
              // onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={28}
              // style={{ marginRight: 8 }}
            />
          )
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: "",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShadowVisible:false,
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() =>navigation.goBack(null)}
              style={{ marginLeft: 8 }}
            />
          ),
          headerRight: () => (
            <Pressable onPress={() => toggleFunction()}>
            {toggle ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={26} />:
                      <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={26} />}
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const AccountStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Account",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              // onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;