'use strict';
//目标组建模型
// <MenuList data={data} nSelected={1} tabSelected={0} click={this.onPress}/>

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} = React;

var prefixType = '_type_';
var prefixStyle = '_style_';
var defaultBackgroundColor = {backgroundColor : '#FFF'};

var MenuList = React.createClass({
    getInitialState : function(){

        var data = this.props.data;
        var nSelected = this.props.nSelected;
        var tabSelected = this.props.tabSelected;
        var obj = {};
        var kIndex = 0;
        for(var k in data){
            var childData = data[k];
            var cIndex = 0;
            for(var c in childData){
                var type = prefixType + k + '_' + c;
                var style = prefixStyle + k + '_' + c;
                obj[type] = false;
                obj[style] = {}
                if(nSelected == cIndex && tabSelected == kIndex){
                    obj[type] = true;
                    obj[style] = defaultBackgroundColor;
                }
                cIndex++;
            }
            kIndex++;
        }

        obj.tabSelected = tabSelected;
        obj.nSelected = nSelected;
        console.log(obj,'init');
        return  obj;
    },
    render : function(){
        var header = this.renderHeader();
        var left = this.renderLeft();
        var right = this.renderRight();

        return (
            <View style={styles.container}>
                <View style={[styles.row,styles.header]}>
                    {header}
                </View>
                <View style={[styles.row,styles.flex_1]}>
                    <ScrollView style={[styles.flex_1,styles.left_pannel]}>
                        {left}
                    </ScrollView>
                    <ScrollView style={[styles.flex_1,styles.right_pannel]}>
                        {right}
                    </ScrollView>
                </View>
            </View>
        );
    },
    renderHeader : function(){
        var data = this.props.data;
        var tabSelected = this.state.tabSelected;
        var header = [];
        var tabIndex = 0;
        for(var i in data){
            var tabStyle = null;
            if(tabIndex == tabSelected){
                tabStyle = [styles.header_text,styles.active_blue];
            }else{
                tabStyle = [styles.header_text];
            }
            header.push(
                <TouchableOpacity style={[styles.flex_1,styles.center]}
                    onPress={this.headerPress.bind(this,i)}>
                    <Text style={tabStyle}>{i}</Text>
                </TouchableOpacity>
            )
            tabIndex++;
        }
        return header;
    },
    headerPress : function(title) {
        var data = this.props.data;
        var index = 0;
        for(var i in data){
            if(i == title){
                this.setState({
                    tabSelected : index
                });
                var obj = {};
                var n = 0;
                for(var k in data[i]){
                    if(n!==0){
                        obj[prefixType + i +'_'+k] = false;
                        obj[prefixStyle+i+'_'+k] = {};
                    }else{
                        obj[prefixType + i +'_'+k] = true;
                        obj[prefixStyle+i+'_'+k] = defaultBackgroundColor;
                    }
                    n++;
                }
                this.setState(obj);
                //console.log(this.state,'this.state');
            }
            index++;
        }
    },
    renderLeft : function(){
        var data = this.props.data;
        var tabSelected = this.state.tabSelected;
        var leftPannel = [];
        var index = 0;
        for(var i in data){
            if(index === tabSelected){
                for(var k in data[i]){
                    var style = this.state[prefixStyle+i+'_'+k];
                    leftPannel.push(
                        <Text onPress={this.leftPress.bind(this,i,k)}
                            style={[styles.left_row,style]}>{k}</Text>
                    )
                }
                break;
            }
            index++;
        }
        return leftPannel
    },
    leftPress : function(tabIndex,nIndex){
        var obj = {};
        // 初始化
        for(var k in this.state){
            if(k.indexOf(prefixType) > -1){
                var obj = {};
                obj[k] = false;
                this.setState(obj);
            }
            if(k.indexOf(prefixStyle) > -1){
                var obj = {};
                obj[k] = {};
                this.setState(obj);
            }
        }
        // 将选择的添加颜色和状态
        obj[prefixType+tabIndex+'_'+nIndex] = true;
        obj[prefixStyle+tabIndex+'_'+nIndex] = defaultBackgroundColor;
        this.setState(obj);
    },
    renderRight : function(){
        var data = this.props.data;
        var tabSelected = this.state.tabSelected;
        var nSelected = this.state.nSelected;
        var index = 0;
        var rightPannel = [];
        for(var i in data){
            if(tabSelected === index){
                for(var k in data[i]){
                    if(this.state[prefixType+i+'_'+k]){
                        for(var j in data[i][k]){
                            rightPannel.push(
                                <Text onPress={this.props.click.bind(this,data[i][k][j])}
                                    style={styles.left_row}>{data[i][k][j]}</Text>
                            )
                        }
                        break;
                    }
                }
            }
            index++;
        }
        return rightPannel;
    }
});



var styles = StyleSheet.create({
    container : {
        paddingTop : 30,
        flex : 1,
        borderTopWidth : 1,
        borderBottomWidth : 1,
        borderColor : '#ddd'
    },
    row : {
        flexDirection : 'row'
    },
    flex_1 : {
        flex : 1
    },
    header : {
        height : 40,
        borderBottomWidth : 1,
        borderColor : '#dfdfdf',
        backgroundColor : '#f5f5f5'
    },
    header_text : {
        color : '#7b7b7b',
        fontSize : 15
    },
    center : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    left_pannel : {
        backgroundColor : '#f2f2f2'
    },
    left_row : {
        paddingLeft : 10,
        height : 40,
        lineHeight : 26,
        fontSize : 14,
        color : '#7c7c7c'
    },
    right_pannel : {
        marginLeft : 10
    },
    active_blue : {
        color : '#00B7eb'
    },
    active_fff : {
        backgroundColor : '#fff'
    }
});

module.exports = MenuList;
