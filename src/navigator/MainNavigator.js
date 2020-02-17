import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {
  FirstScreen,
  LoginScreen,
  RegisterScreen,
  HomeScreen,
  AboutUsScreen,
  NotificationsScreen,
  ContactUsScreen,
  MyProfileScreen,
  EditProfileScreen,
  PetsListScreen,
  NotificationDetailScreen,
  MeasureConfigScreen,
} from './../screens';
import {Dimensions} from 'react-native';

const MainNavigator = createStackNavigator(
  {
    FirstScreen: {screen: FirstScreen, navigationOptions: {headerShown: false}},
    LoginScreen: {screen: LoginScreen, navigationOptions: {headerShown: false}},
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: {headerShown: false},
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {headerShown: false},
    },
    AboutUsScreen: {
      screen: AboutUsScreen,
      navigationOptions: {headerShown: false},
    },
    NotificationsScreen: {
      screen: NotificationsScreen,
      navigationOptions: {headerShown: false},
    },
    ContactUsScreen: {
      screen: ContactUsScreen,
      navigationOptions: {headerShown: false},
    },
    MyProfileScreen: {
      screen: MyProfileScreen,
      navigationOptions: {headerShown: false},
    },
    EditProfileScreen: {
      screen: EditProfileScreen,
      navigationOptions: {headerShown: false},
    },
    PetsListScreen: {
      screen: PetsListScreen,
      navigationOptions: {headerShown: false},
    },
    NotificationDetailScreen: {
      screen: NotificationDetailScreen,
      navigationOptions: {headerShown: false},
    },
    MeasureConfigScreen: {
      screen: MeasureConfigScreen,
      navigationOptions: {headerShown: false},
    },
  },
  {
    initialRouteName: 'MeasureConfigScreen',
    drawerPosition: 'left',
    drawerType: 'back',
    drawerWidth: function() {
      const {width} = Dimensions.get('window');
      return width;
    },
  },
);

export default MainNavigator;
