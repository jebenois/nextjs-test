import React from 'react'
import { connect } from 'react-redux'
import Head from 'next/head';

import Page from '../components/Page'

class Index extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <title>JEB test</title>
        </Head>
        <div onClick={() => { console.log('onClick test') }}>OOO</div>
        <Page title='Index Page' linkTo='/other' {...this.props} />
      </div>
    )
  }
}

Index.getInitialProps = async ({ req, store }) => {
  const isServer = !!req;
  if (isServer) {
    // Requiring here to avoid contentful lib to be added to the bundle
    // Cf package.json, browser field
    const { fetchContenfulData } = require('../actions/homepage');
    return await store.dispatch(fetchContenfulData());
  }
};

export default connect()(Index)
