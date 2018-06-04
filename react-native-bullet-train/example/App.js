/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Button,
    Text,
    View
} from 'react-native';
import featureFlagger from "./bullet-train";

export default class App extends Component<Props> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoading: true,
            logs: []
        };
    }

    componentWillMount() {
        const {handleFlags, handleFlagsError} = this;
        featureFlagger.init({
            environmentID: 'hdhfMFceDY7rchkeGZrEsf',
            onChange: handleFlags,
            onError: handleFlagsError,
            defaultFlags: {
                default_feature: true,
                font_size: 12,
            }
        });
        featureFlagger.startListening(2000)

    }

    logout = () => {
        featureFlagger.logout();
        this.forceUpdate();
    };

    login = () => {
        featureFlagger.identify("bullet_train_sample_user");
        this.forceUpdate();
    };

    render() {

        const fontSize = parseInt(featureFlagger.getValue("font_size"));
        const {isLoading, logs} = this.state;
        return isLoading ? <Text>Loading</Text> : (
            <View>
                <Text style={{fontSize}}>
                    {JSON.stringify(featureFlagger.flags)}
                </Text>
                <Text style={styles.title}>
                    Events
                </Text>
                {featureFlagger.identity ? (
                    <Button title={"logout"} onPress={this.logout}/>
                ) : <Button title={"login as sample user"} onPress={this.login}/>}
                {logs.map(({timestamp, data, params, oldData},i) => (
                    <Text key={i}>
                        {timestamp}: {data} {params} {oldData}
                    </Text>
                ))}
            </View>
        );
    }

    handleFlags = (oldFlags, params) => {
        this.setState({
            ...params,
            isLoading: false,
            logs: [{
                timestamp: new Date().toDateString(),
                params: JSON.stringify(params),
                oldData: JSON.stringify(oldFlags),
                data: JSON.stringify(featureFlagger.getAllFlags())
            }].concat(this.state.logs)
        });
    };
    handleFlagsError = (data) => {

    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
