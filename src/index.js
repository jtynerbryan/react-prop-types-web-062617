import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
 
class Order extends React.Component {
 
  render() {
    return //order
    	



  }
}
 
Order.defaultProps = {
  cone: true,
  size: 'regular'
};
 
Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
  }).isRequired
};

