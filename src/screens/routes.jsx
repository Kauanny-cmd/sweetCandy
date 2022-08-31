import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import Registers from "./Register";
import Home from "./Home";
import Product from"./Product/index";
import Product1 from"./Product/creme";
import Product2 from"./Product/trufa";
import Bag from './Bag'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Routes = () => {
    return (
        
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Registers} />
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Product" component={Product}/>
                <Stack.Screen name="Product1" component={Product1}/>
                <Stack.Screen name="Product2" component={Product2}/>
                <Stack.Screen name="Bag" component={Bag}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;