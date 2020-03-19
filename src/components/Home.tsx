import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';
import {bindActionCreators} from 'redux';


type HomeState = {
    todo: {
      name: String,
      body: String,
    }
}

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Actual text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state: HomeState) => ({
  todo: state.todo,
});

const ActionCreators = Object.assign({}, addTodo);

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: bindActionCreators(addTodo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
