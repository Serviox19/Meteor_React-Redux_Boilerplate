import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DataList extends Component {

  componentWillMount() {
    this.props.dataFetch();
  }

  renderData() {
    console.log(this.props.data);
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

export default connect(mapStateToProps)(DataList);
