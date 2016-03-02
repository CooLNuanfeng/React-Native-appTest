'use strict';
var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    AppStateIOS,
    StatusBarIOS,
    NetInfo
} = React;


// 监听 app 的运行状态和情况
console.log(AppStateIOS.currentState);
AppStateIOS.addEventListener('change',function(){
    console.log(AppStateIOS.currentState);
    console.log('change');
});
AppStateIOS.addEventListener('memoryWarning',function(){
    console.log('warning');
});


//设置状态栏
// StatusBarIOS.setStyle('light-content');
StatusBarIOS.setStyle('default');
StatusBarIOS.setNetworkActivityIndicatorVisible(true);

NetInfo.fetch().done(function(res){
    console.log(res,'netWork fetch');
});
NetInfo.isConnected.fetch().done(function(res){
    console.log(res,'netWork connect');
});
NetInfo.addEventListener('change',function(res){
    console.log(res,'netWork change');
})

var App = React.createClass({
    render : function(){
        return (
            <View style={styles.container}>
                <Text>监听APP的运行状态</Text>
            </View>
        )
    }
});


var styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 25,
        //backgroundColor : '#1FB9FF'
    }
});

module.exports = App;
