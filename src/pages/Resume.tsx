import React from 'react'

import Frame, { FrameType } from '../components/molecules/Frame'
import ResumeTemplate from '../components/templates/ResumeTemplate'
import Helmet from 'react-helmet'

const Resume = () => {
  return (
    <Frame type={FrameType.Content}>
      <Helmet>
        <title>{'Resume'}</title>
      </Helmet>
      <Frame type={FrameType.Container}>
        <ResumeTemplate />
      </Frame>
    </Frame>
  )
}

export default Resume
