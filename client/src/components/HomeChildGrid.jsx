import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getChildren } from '../store/actions';

import ChildGridItem from '../components/ChildGridItem';

class HomeChildGrid extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        insuranceCard: PropTypes.string,
        birthCertificateExpires: PropTypes.string,
        specialNeeds: PropTypes.string,
        representative: PropTypes.string,
        contactInfo: PropTypes.string
      })
    ).isRequired,
    getChildren: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getChildren();
  }

  render() {
    return (
      <div className='childrenGrid'>
        {this.props.children.map(child => (
          <ChildGridItem
            key={child.id}
            child={child}
            changePage={this.props.changePage}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    children: state.childReducer.children
  };
};

export default connect(
  mapStateToProps,
  {
    getChildren
  }
)(HomeChildGrid);
