import React from 'react'
import { connect } from 'react-redux'

import Page from '../components/Page'

class Other extends React.Component {
  static getInitialProps({ store }) {
    return {};
  }

  render () {
    return (
      <Page title='Index Page' linkTo='/' {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.other
  };
};

export default connect(mapStateToProps)(Other)
