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
  DrawerContentScreen,
  MeasureStartScreen,
  MeasureDescriptionScreen,
  MeasureStepsScreen,
  MeasureEndScreen,
} from './../screens';
import {Dimensions} from 'react-native';

const drawerNavigator = createDrawerNavigator(
  {
    PetsListScreen: {
      screen: PetsListScreen,
      navigationOptions: {headerShown: false},
    },
    MeasureConfigScreen: {
      screen: MeasureConfigScreen,
      navigationOptions: {headerShown: false},
    },
    MeasureStartScreen: {
      screen: MeasureStartScreen,
      navigationOptions: {headerShown: false},
    },
    MeasureDescriptionScreen: {
      screen: MeasureDescriptionScreen,
      navigationOptions: {headerShown: false},
    },
    MeasureStepsScreen: {
      screen: MeasureStepsScreen,
      navigationOptions: {headerShown: false},
    },
    MeasureEndScreen: {
      screen: MeasureEndScreen,
      navigationOptions: {headerShown: false},
    },
  },
  {
    initialRouteName: 'PetsListScreen',
    drawerPosition: 'left',
    drawerWidth: function() {
      const {width} = Dimensions.get('window');
      return width;
    },
    contentOptions: {
      activeTintColor: 'orange',
    },
    contentComponent: DrawerContentScreen,
  },
);
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
    NotificationDetailScreen: {
      screen: NotificationDetailScreen,
      navigationOptions: {headerShown: false},
    },
    DrawerNavigatorScreen: {
      screen: drawerNavigator,
      navigationOptions: {headerShown: false},
    },
  },
  {
    initialRouteName: 'FirstScreen',
    drawerPosition: 'left',
    drawerType: 'back',
    drawerWidth: function() {
      const {width} = Dimensions.get('window');
      return width;
    },
  },
);

export default MainNavigator;
