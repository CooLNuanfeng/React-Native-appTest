'use strict';

var React = require('react-native');

var {
    Image,
    ListView,
    StyleSheet,
    View,
    Text,
    CameraRoll,
    ScrollView
} = React;

var fetchParams = {
    first  : 4,
    groupTypes : 'All',
    assetType : 'Photos'
};

var imgURL = 'http://vczero.github.io/lvtu/img/';

var App = React.createClass({
    getInitialState : function(){
        return {
            photos : null
        }
    },
    render : function(){
        var photos = this.state.photos || [];
        var photosView = [];
        for(var i=0; i<4; i+=2){
            photosView.push(
                <View style={styles.row}>
                    <View style={styles.flex_1}>
                        <Image resizeMode="stretch" style={[styles.imgHeight,styles.m5]}
                            source={{uri:photos[i]}}/>
                    </View>
                    <View style={styles.flex_1}>
                        <Image resizeMode="stretch" style={[styles.imgHeight,styles.m5]}
                            source={{uri:photos[parseInt(i)+1]}}/>
                    </View>
                </View>
            )
        }

        return(
            <ScrollView>
                <View style={styles.row}>
                    <View style={styles.flex_1}>
                        <Image resizeMode='contain' style={[styles.imgHeight,styles.m5]}
                            source={{uri:imgURL+'city.jpg'}}/>
                    </View>
                    <View style={styles.flex_1}>
                        <Image resizeMode='contain' style={[styles.imgHeight,styles.m5]}
                            source={{uri:imgURL+'3.jpeg'}}/>
                    </View>
                </View>
                <View>
                    <Text onPress={this.saveImg.bind(this,'city.jpg','3.jpeg')} style={styles.saveImg}>
                        保存图片到相册
                    </Text>
                </View>
                <View style={{marginTop:20}}>
                    {photosView}
                </View>
            </ScrollView>
        )
    },
    componentDidMount : function(){
        var _this = this;

        CameraRoll.getPhotos(fetchParams,function(data){
            console.log(data);
            var edges = data.edges;
            var photos = [];
            for(var i in edges){
                photos.push(edges[i].node.image.uri);
            }
            _this.setState({
                photos : photos
            })
        },function(){
            alert('获取照片失败');
        })
    },
    saveImg : function(img1,img2){
        var _this = this;
        CameraRoll.saveImageWithTag(imgURL + img1,function(url){
            if(url){
                var photos = _this.state.photos;
                photos.unshift(url);
                _this.setState({
                    photos : photos
                });
                CameraRoll.saveImageWithTag(imgURL + img2,function(url){
                    photos.unshift(url);
                    _this.setState({
                        photos : photos
                    });
                    alert('图片保存成功');
                },function(){
                    alert('图片保存失败');
                });
            }
        },function(){
            alert('图片保存失败');
        })
    }
});

var styles = StyleSheet.create({
    flex_1 : {
        flex : 1
    },
    m5 : {
        marginLeft : 5,
        marginRight : 5,
        borderWidth : 1,
        borderColor : '#ddd'
    },
    rows : {
        flexDirection : 'row'
    },
    imgHeight : {
        height : 120
    },
    saveImg : {
        flex : 1,
        height : 30,
        textAlign : 'center',
        marginTop : 20,
        backgroundColor : '#3bc1ff',
        color : '#fff',
        lineHeight : 20,
        borderRadius : 5,
        marginLeft : 5,
        marginRight : 5,
        fontWeight : 'bold'
    }
})


module.exports = App;
