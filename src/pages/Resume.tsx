import React from 'react'
import Frame, { FrameType } from '../components/molecules/Frame'
import Footer from '../components/organisms/Footer'
import Helmet from 'react-helmet'
import TopButton from '../components/organisms/TopButton'

const Resume = () => {
  return (
    <Frame type={FrameType.Content}>
      <Helmet>
        <title>{'Resume'}</title>
      </Helmet>
      <Frame type={FrameType.Container}>{/* content */}</Frame>
      <Footer />
      <TopButton />
    </Frame>
  )
}

export default Resume
