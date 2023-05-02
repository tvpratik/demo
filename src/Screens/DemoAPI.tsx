/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../Redux/Actions/actions';
import {View, Text} from 'react-native';

class DemoAPI extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    // this.props.onFetchData();
    console.log("props ===",this.props.fetchData);
  }

  render() {
    return (
      <View>
        <Text>Fetching the data from the backend</Text>
        {this.props.error && <Text>{this.props.error}</Text>}

        {this.props.data && (
          <Text>
            id: {this.props.data.id}
            title: {this.props.data.title}
          </Text>
        )}
      </View>
    );
  }
}

const mapStatetoProps = (state: any) => {
  return {num: state.num, data: state.data, error: state.error};
};

const mapDispatchprops = (dispatch: any) => {
  return {onFetchData: () => dispatch(fetchData())};
};

export default connect(mapStatetoProps, mapDispatchprops)(DemoAPI);
