'use strict';

var React = require('react-native');

var {
    Text,
    View,
    ListView,
    StyleSheet,
    TouchableHighlight
} = React;

var ListModel = React.createClass({
    getInitialState : function(){
        var ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 != r2
        });
        return {
          ds:[
              {AwayTeam: "TeamA", HomeTeam: "TeamB", Selection: "AwayTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "HomeTeam"},
              {AwayTeam: "TeamC", HomeTeam: "TeamD", Selection: "end"},
          ],
          dataSource:ds,
        }
    },
    componentDidMount : function(){
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(this.state.ds),
        })

    },
    pressRow : function(rowData){
        var newDs = [];
        newDs = this.state.ds;
        console.log(rowData,newDs,'click');
        newDs[0].Selection = newDs[0] == "AwayTeam" ? "HomeTeam" : "AwayTeam";
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newDs)
        })

    },

    renderRow : function(rowData){
        //console.log(rowData);
        return (
          <TouchableHighlight
            onPress={()=> this.pressRow(rowData)}
            underlayColor = '#ddd'>
            <View style ={styles.row}>
              <Text style={{fontSize:18}}>{rowData.AwayTeam} @ {rowData.HomeTeam} </Text>
              <View style={{flex:1}}>
                <Text style={styles.selectionText}>{rowData[rowData.Selection]}</Text>
              </View>
            </View>
          </TouchableHighlight>

        )
    },
    addList : function(res){
        console.log(res,'add');
    },
    render : function(){
        return (
          <ListView
            dataSource = {this.state.dataSource}
            renderRow = {this.renderRow}
            onEndReached = {this.addList}
            onEndReachedThreshold = {40} />
        );
      }
})

var styles = StyleSheet.create({
  row:{
    flex:1,
    flexDirection:'row',
    padding:18,
    borderBottomWidth: 1,
    borderColor: '#d7d7d7',
  },
  selectionText:{
    fontSize:15,
    paddingTop:3,
    color:'#b5b5b5',
    textAlign:'right'
  },
});


module.exports = ListModel;
