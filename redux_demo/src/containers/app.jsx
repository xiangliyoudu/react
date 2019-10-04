import React from 'react';
import { connect } from 'react-redux'

import { add, minus, addAsync } from '../redux/actions'
import Counter from '../components/counter'

export default connect(
    state => ({ count: state }),
    { add, minus, addAsync }
)(Counter)