import {StackActions, NavigationActions} from 'react-navigation';
let navigation = null;

export function navigateWithNavigation(screen, isDrawer = false, param = {}) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [
      isDrawer === true
        ? NavigationActions.navigate({
            routeName: 'DrawerNavigatorScreen',
            params: {...param, page: screen},
          })
        : NavigationActions.navigate({routeName: screen, params: param}),
    ],
  });
  navigation.dispatch(resetAction);
}

export function setNavigation(_navigation) {
  navigation = _navigation;
}
