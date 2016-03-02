'use strict';
var React = require('react-native');

var {
    Text,
    View,
    StyleSheet
} = React;

var TimerMixin = require('react-timer-mixin');

var App = React.createClass({
    mixins : [TimerMixin],
    getInitialState : function(){
        return {
            width : 10
        }
    },
    render : function(){
        var css = [];
        css.push(styles.progress);
        if(this.state.width){
            css.push({width:this.state.width,marginTop:50});
            console.log(css);
        }
        return (
            <View>
                <View style={css}></View>
            </View>
        )
    },
    componentDidMount : function(){
        var _that = this;
        function doAnimated(){
            _that.setState({
                width : _that.state.width + 10
            });
            if(_that.state.width < 350){
                requestAnimationFrame(doAnimated);
            }
        }
        requestAnimationFrame(doAnimated);
    }
});

var styles = StyleSheet.create({
    progress : {
        height : 10,
        width : 10,
        marginLeft : 10,
        marginTop : 10,
        backgroundColor : '#3e72dd'
    }
});

module.exports = App;
