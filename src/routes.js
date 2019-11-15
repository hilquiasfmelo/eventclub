import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Casual from "./pages/Casual";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      Dashboard,
      Casual
    },
    {
      // initialRouteName: "Dashboard",
      headerLayoutPreset: "center",
      mode: "modal",
      defaultNavigationOptions: {
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#000"
        }
      }
    }
  )
);

export default Routes;
