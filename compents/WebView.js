'use strict';
var React = require('react-native');
var Dimensions = require('Dimensions');
var Sinauth = require('./Sinauth');

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var {
    StyleSheet,
    Text,
    View,
    WebView,
    TabBarIOS,
    ScrollView
} = React;

var WebViewApp = React.createClass({
    getInitialState: function(){
      return {
        tab: 'blog'
      };
    },
    select: function(tabName){
      this.setState({
        tab: tabName
      });
    },
    render : function(){
        return(
            <TabBarIOS style={styles.flex}>
              <TabBarIOS.Item
                  title="博客"
                  icon={require("image!message")}
                  onPress={this.select.bind(this,'blog')}
                  selected={this.state.tab==='blog'}
                  >
                  <WebView
                      injectedJavaScript="alert('欢迎使用 React Native')"
                      bounces={false}
                      url="http://weibo.com/vczero"
                      style={{width:width,height: height}}
                      startInLoadingState = {true}
                      automaticallyAdjustContentInsets={true} />
              </TabBarIOS.Item>
              <TabBarIOS.Item
                  title="图片"
                  icon={require("image!star")}
                  onPress={this.select.bind(this,'img')}
                  selected={this.state.tab==='img'}
                  >
                  <ScrollView>
                      <Sinauth />
                  </ScrollView>
              </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
})

var styles = StyleSheet.create({
    flex : {
        flex : 1
    },
    container : {
        flex : 1
    }
});

module.exports = WebViewApp;
