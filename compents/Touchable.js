var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    TouchableHighlight,
    TouchableOpacity
} = React;

var Touchable = React.createClass({
    show : function(text){
        alert(text)
    },
    render : function(){
        return (
            <View style={styles.flex}>
                <View>
                    <TouchableHighlight
                        style={styles.block}
                        onPress={this.show.bind(this,'React Native入门与实践')}
                        underlayColor='#E1f6FF'>
                        <Text style={styles.item}>React Native 入门与实践</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.block}
                        onPress={this.show.bind(this,'图灵出版社')}
                        underlayColor='#E1f6FF'>
                        <Text style={styles.item}>图灵出版社</Text>
                    </TouchableHighlight>
                    <TouchableOpacity
                        style={styles.block}
                        onPress={this.show.bind(this,'React Native入门与实践')}
                        underlayColor='#E1f6FF'>
                        <Text style={styles.item}>React Native 入门与实践</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.block}
                        onPress={this.show.bind(this,'图灵出版社')}
                        underlayColor='#E1f6FF'>
                        <Text style={styles.item}>图灵出版社</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
})

var styles = StyleSheet.create({
    flex: {
        flex : 1,
        marginTop : 25
    },
    block : {
        flex : 1,
        height : 40,
        backgroundColor : '#f4f4f4',
        marginLeft : 5,
        marginRight : 5,
        borderRadius : 10,
        marginBottom : 5
    },
    item : {
        fontSize : 18,
        lineHeight : 30,
        marginLeft : 5,
        color : '#434343',
        textAlign : 'center',
    }
});

module.exports = Touchable;
