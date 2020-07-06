import React from 'react'

import Frame, { FrameType } from '../components/molecules/Frame'
import ResumeTemplate from '../components/templates/ResumeTemplate'
import Helmet from 'react-helmet'
import Footer from '../components/organisms/Footer'

const Resume = () => {
  return (
    <Frame type={FrameType.Content}>
      <Helmet>
        <title>{'Resume'}</title>
      </Helmet>
      <Frame type={FrameType.Container}>
        <ResumeTemplate />
      </Frame>
      <Footer />
    </Frame>
  )
}

export default Resume
