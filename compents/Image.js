'use strict';

var React = require('react-native');

var {
    Image,
    StyleSheet,
    Text,
    AppRegistry,
    View,
    TouchableOpacity
} = React;


var defaultImg = 'http://facebook.github.io/react/img/logo_og.png';

var MyImageApp = React.createClass({
    getInitialState : function(){
        var imgs = this.props.imgs;
        return {
            imgs : imgs,
            count : 0
        }
    },
    goNext : function(){
        var count = this.state.count;
        count++;
        if(count<this.props.imgs.length){
            this.setState({
                count : count
            })
        }
    },
    goPreview : function(){
        var count = this.state.count;
        count--;
        if(count >=0){
            this.setState({
                count : count
            })
        }
    },
    render : function(){
        return (
            <View style={styles.flex}>
                <View style={styles.image}>
                    <Image style={styles.img}
                        source={{uri:this.state.imgs[this.state.count]}}
                        onLoad={()=>console.log('加载成功')}
                        onLoadEnd={()=>console.log('加载完成，不管成功还是失败')}
                        onLoadStart={()=>console.log('开始加载图片。。。。')}
                        onProgress={(e)=>console.log(e,'加载过程中')}
                        resizeMode="contain" />
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={this.goPreview}>
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goNext}>
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    flex : {
        flex : 1,
        alignItems : 'center'
    },
    image : {
        borderWidth : 1,
        width : 300,
        height : 200,
        borderRadius : 5,
        borderColor : '#ccc',
        justifyContent : 'center',
        alignItems : 'center'
    },
    img : {
        height : 150,
        width : 200
    },
    btns : {
        flexDirection : 'row',
        justifyContent : 'center',
        marginTop : 20
    },
    btn : {
        width : 60,
        height : 30,
        borderColor : '#0089FF',
        borderWidth : 1,
        justifyContent : "center",
        alignItems : 'center',
        borderRadius : 3,
        marginRight : 20
    }

})


module.exports = MyImageApp;
