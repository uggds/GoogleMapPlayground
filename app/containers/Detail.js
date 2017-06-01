import React, {Component} from 'react';
import { connect } from 'react-redux';
import Detail from '../components/Detail'

const mapStateToProps = state => ({
  shop: state.shopReducer.shop,
});

export default connect(mapStateToProps)(Detail);
