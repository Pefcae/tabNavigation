import { NavigationContainer } from '@react-navigation/native';

import TabsNavigator from './tabs'; //hay que importarlo

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabsNavigator /> 
    </NavigationContainer>
  );
};

export default AppNavigator;
 //se reemplaza el ShopNavigator