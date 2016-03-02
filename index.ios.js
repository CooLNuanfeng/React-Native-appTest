/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var Touchable = require('./compents/Touchable');
var TextInputApp = require('./compents/TextInput');
var MyImageApp = require('./compents/Image');
var TabBarAPP = require('./compents/TabBarIOS');
var WebViewApp = require('./compents/WebView');
var AppShop = require('./compents/Shopping');

var imgArr = [
  'http://vczero.github.io/ctrip/hua2.png',
  'http://vczero.github.io/ctrip/nian2.png',
  'http://facebook.github.io/react/img/logo_og.png'
];

var {
    AppRegistry,
    ScrollView,
    View,
    Text,
    ListView
} = React;

var AppTestOne = React.createClass({
    render : function(){
        return (
            <ScrollView>
                <TextInputApp />
                <Touchable />
                <MyImageApp imgs={imgArr}/>
            </ScrollView>
        )
    }
})

var AppTestTwo = React.createClass({
    render : function(){
        return (
            <TabBarAPP />
        )
    }
})

var AppTestThree = React.createClass({
    render : function(){
        return (
            <View style={{marginTop:20,flex:1}}>
                <WebViewApp />
            </View>
        )
    }
})

// 购物实例
var AppShopCompent = React.createClass({
    render : function(){
        return (
            <AppShop />
        )
    }
})

//ActionSheetIOS
var ActionApp = require('./compents/ActionSheet');
var ActionSheetApp = React.createClass({
    render : function(){
        return (
            <ActionApp />
        )
    }
})


//PixelRadtio
var PixelApp = require('./compents/PiexRatio');
var PixelRadtioApp = React.createClass({
    render : function(){
        return (
            <PixelApp />
        )
    }
})

//AppStateIOS
//var AppStateIOSApp = require('./compents/AppStateIOS');
var AppState = React.createClass({
    render : function(){
        return (
            <AppStateIOSApp />
        )
    }
});

// CameraRoll
var CameraApp = require('./compents/CameraRoll');
var AppCamera = React.createClass({
    render : function(){
        return (
            <CameraApp />
        )
    }
});

//Geolocation
var GeolocationApp = require('./compents/Geolocation');
var AppGeolocationModel = React.createClass({
    render : function(){
        return(
            <GeolocationApp />
        )
    }
})

//network ajax request
var AppRequest = require('./compents/Request');
var RequestModel = React.createClass({
    render : function(){
        return(
            <AppRequest />
        )
    }
});

// demo setInterval setTimeout requestAnimationFrame 等
var AppDemo = require('./compents/DemoLoading');
var AppDemoModel = React.createClass({
    render : function(){
        return (
            <AppDemo />
        )
    }
})

// MenuList
var MenuList = require('./compents/MenuList');
var data = {
    'Language' : {
        "All" : ["All"],
        "Web Front End" : ["HTML","CSS","Javascript"],
        "Server" : ["Node.js","PHP","Python","Ruby"],
    },
    "Tool" : {
        "All" : ["All"],
        "Apple" : ["Xcode"],
        "Other" : ["Sublime Text","Atom","WebStrom"]
    }
}
var AppMenuModel = React.createClass({
    render : function(){
        return (
            <MenuList data={data} nSelected={1} tabSelected={0} click={this.onPress}/>
        )
    },
    onPress : function(val){
        alert(val);
    }
})


// calendar
var Calendar = require('./compents/Calendar');
var AppCalendarModel = React.createClass({
    render : function(){
        var holiday = {
          '2016-10-1': '国庆节',
          '2016-9-10': '教师节',
          '2016-1-1': '元旦节',
          '2016-11-11': '双十一'
        };
        var check = {
          '2016-10-1': 'checked',
          '2016-9-1': 'checked',
          '2016-7-10': 'checked',
          '2016-9-10': 'checked',
          '2016-11-11':'checked'
        };
        var headerStyle ={
          backgroundColor: '#3C9BFD',
          color:'#fff',
          fontSize: 15,
          fontWeight: 'bold'
        };
        return (
          <View style={{flex:1,paddingTop:30}}>
            <Calendar
              startTime={new Date(2016,7,25)}
              touchEvent={this.press}
              headerStyle={headerStyle}
              holiday={holiday}
              check={check}
              num={6}
              />
          </View>
        );
    },
    press : function(str){
        alert(str)
    }
});

//ListView

var App = require('./compents/ListView');
// var App = React.createClass({
//     getInitialState : function(){
//         var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         return {
//             dataSource: ds.cloneWithRows(['row 1', 'row 2', 'end']),
//         };
//     },
//     render : function(){
//         return (
//             <ListView
//                  dataSource={this.state.dataSource}
//                  renderRow={(rowData) => <Text style={{height:40,lineHeight:28}}>{rowData}</Text>}
//             />
//         )
//     }
// })

AppRegistry.registerComponent('appTest', ()=> App);
