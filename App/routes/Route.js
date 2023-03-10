import { Provider } from "react-redux";
import { store } from "../redux/store";
import { NavigationContainer as Navigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Service } from "../screens/Service";
import { Contact } from "../screens/Contact";


const Tab = createBottomTabNavigator();

export const Nav = () => {
  return (
    <Provider store={store}>
      <Navigation>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
              flex: 1,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 15,
            },
            tabBarActiveTintColor: "#000",
            tabBarIcon: () => null,
          }}
        >
          <Tab.Screen name="Task" component={Home} />
          <Tab.Screen name="Service" component={Service} />
          <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
      </Navigation>
    </Provider>
  );
};
