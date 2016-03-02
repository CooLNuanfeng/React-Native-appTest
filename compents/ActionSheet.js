'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ActionSheetIOS
} = React;

var ActionSheetApp = React.createClass({
    render : function(){
        return (
            <View style={styles.container}>
                <Text style={styles.item} onPress={this.tip}>
                    Show ActionSheetIOS width Options
                </Text>
                <Text style={styles.item} onPress={this.share}>
                    Show ShareActionSheetIOS width Options
                </Text>
            </View>
        )
    },
    tip : function(){
        ActionSheetIOS.showActionSheetWithOptions({
            options : [
                '拨打电话',
                '发送短信',
                '发送邮件',
                '取消'
            ],
            cancleButtonIndex : 3,
            destructiveButtonIndex : 0
        },function(index){
            alert(index)
        })
    },
    share : function(){
        ActionSheetIOS.showShareActionSheetWithOptions({
            url : 'http://code.facebook.com'
        },function(err){
            alert(err);
        },function(res){
            alert(res)
        })
    }
});

var styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 25
    },
    item : {
        marginTop :10,
        marginLeft : 5,
        marginRight : 5,
        height : 30,
        borderWidth : 1,
        padding : 6,
        borderColor : '#ddd'
    }
});

module.exports = ActionSheetApp;
