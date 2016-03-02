'use strict';
var React = require('react-native');
var {
    StyleSheet,
    Text,
    View
} = React;

var Geolocation = require('Geolocation');

var App = React.createClass({
    render : function(){
        return (
            <View>
                <Text onPress={this.vibration} style={styles.btn}>获取地理位置</Text>
            </View>
        )
    },
    vibration  : function(){
        Geolocation.getCurrentPosition(function(data){
            alret(JSON.stringify(data));
        },function(){
            alert('获取地理位置失败');
        })
    }
});

var styles = StyleSheet.create({
    btn : {
        marginTop : 50,
        marginLeft : 10,
        marginRight : 10,
        height : 35,
        backgroundColor : '#3bc1ff',
        color : '#fff',
        lineHeight : 24,
        fontWeight : 'bold',
        textAlign : 'center'
    }
});

module.exports = App;
