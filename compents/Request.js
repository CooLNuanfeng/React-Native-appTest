'use strict';
var React = require('react-native');

var {
    Text,
    View,
    StyleSheet
} = React;

var App = React.createClass({
    render : function(){
        return(
            <View>
                <Text style={styles.btn} onPress={this.ajax}>XMLHttpRequest(ajax)请求</Text>
                <Text style={styles.btn} onPress={this.fetchRequest}>fetch请求</Text>
            </View>
        )
    },
    ajax : function(){
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function(){
            if(xmlHttp.readyState == 4){
                if(xmlHttp.status==200){
                    console.log('ajax-success',xmlHttp.responseText);
                }else{
                    console.log('fail');
                }
            }else{
                console.log('error');
            }
        }

        xmlHttp.open('GET','http://www.baidu.com');
        xmlHttp.send();
    },
    fetchRequest : function(){
        fetch('http://www.baidu.com')
        .then(function(data){
            console.log('fetch-success data: ',data);
            return data.text()
        }).then(function(responseText){
            console.log('fetch-success res: ',responseText);
        }).catch(function(err){
            console.log(err);
        })
    }
});

var styles = StyleSheet.create({
    btn : {
        height : 40,
        marginTop : 25,
        marginLeft : 10,
        marginRight : 10,
        marginBottom : 5,
        textAlign : 'center',
        lineHeight : 30,
        color  : '#fff',
        fontSize : 20,
        backgroundColor : '#ff6600'
    }
})

module.exports = App;
