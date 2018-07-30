import {AppRegistry} from "react-native";
import {name as appName} from "./app.json";
import { DemoRnApp } from "./src/App";

AppRegistry.registerComponent(appName, () => DemoRnApp);
