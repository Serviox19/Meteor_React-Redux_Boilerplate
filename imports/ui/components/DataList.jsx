import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DataList extends Component {

  componentWillMount() {
    this.props.dataFetch();
  }

  renderData() {
    console.log(this.props.data);
    return this.props.data.map(user => {
      return (
        <div key={user.id} style={{ marginBottom: '1em' }}>
          <span>{user.name}</span><br />
          <span>{user.email}</span><br/>
          <span>{user.phone}</span>
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        <h4>Data List</h4>
        {this.renderData()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.data };
}

export default connect(mapStateToProps, actions)(DataList);
