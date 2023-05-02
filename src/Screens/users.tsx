/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../Redux/Actions/usersActions';
import { View ,Text} from 'react-native';

class users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const {users} = this.props.users;
    console.log(users);

    return (
      <View>
        {users.map(u => (
          <React.Fragment key={u.id}>
            <Text>{u.name}</Text>
          </React.Fragment>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => ({users: state.users});

export default connect(mapStateToProps, {getUsers})(users);
