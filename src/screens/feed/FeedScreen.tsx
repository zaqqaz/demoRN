import React from "react";
import { Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";

export interface FeedScreenProps {
    navigation: NavigationScreenProp<any>;
}

export class FeedScreen extends React.PureComponent<FeedScreenProps> {
    public render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Feed Screen</Text>
            </View>
        );
    }
}
