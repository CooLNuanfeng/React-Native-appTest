'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio
} = React;

var App = React.createClass({
    render : function(){
        return (
            <View style={styles.container}>
                <View style={{borderWidth:1,borderColor:'red',height:40,marginBottom:20}}></View>
                <View style={{borderWidth:1/PixelRatio.get(),borderColor:'red',height:40}}></View>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 25
    }
})
module.exports = App;
