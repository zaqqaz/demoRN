import React from "react";
import { createStackNavigator } from "react-navigation";
import { FeedScreen } from "demoRn/src/screens/feed/FeedScreen";
import { MediaSelectorScreen } from "demoRn/src/screens/mediaSelector/MediaSelectorScreen";
import { ProfileScreen } from "demoRn/src/screens/profile/ProfileScreen";
import { Routes } from "demoRn/src/screens/routes";

const RootStack = createStackNavigator(
    {
        [Routes.Feed]: {
            screen: FeedScreen,
        },
    },
    {
        initialRouteName: Routes.Feed,
        // headerMode: 'none',
        // cardStyle: { backgroundColor: "#fff" },
        // mode: "modal",

    },
);

export class Navigator extends React.Component {
    public render() {
        return <RootStack/>;
    }
}
