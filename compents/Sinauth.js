'use strict';
var React = require('react-native');
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} = React;

var appKey = '4263807830';
var callback = 'http://127.0.0.1:3000';
var url = 'https://api.weibo.com/oauth2/authorize?client_id=' + appKey + '&redirect_uri=' + callback;

var Sinauth = React.createClass({
    getInitialState : function(){
        return {
            code : null
        }
    },
    render : function(){
        return (
            <View style={styles.container}>
                {
                    !this.state.code ?
                    <WebView style={styles.container} url={url}
                        style={{width:width,height: height}}
                        onNavigationStateChange={this.navChange} />
                    : <Text>{this.state.code}</Text>
                }
            </View>
        )
    },
    navChange : function(state){
        console.log(state);
        var _that = this;
        if(state.url.indexOf(callback + "/?code=")>-1){
            var code = state.url.split('?code=')[1];
            _that.setState({
                code : code
            })
        }
    }
});

var styles = StyleSheet.create({
    container : {
        flex : 1
    }
});

module.exports = Sinauth;
