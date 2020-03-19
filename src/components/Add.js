import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo} from '../actions/index';
import Home from './Home';

class Add extends Component {
  render() {
    return (
      <View>
        <Text> add text</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo,
});

const ActionCreators = Object.assign({}, addTodo);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Add);

export default Home;
