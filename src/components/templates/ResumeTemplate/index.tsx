import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import dayjs from 'dayjs'
import { MdMailOutline } from 'react-icons/md'

import Layout, { Direction, VerticalAlign, Wrap } from '../../molecules/Layout'
import Image from '../../atoms/Image'
import P from '../../atoms/P'
import { FaBloggerB, FaGithub } from 'react-icons/fa'
import A from '../../atoms/A'
import Card, { CardType } from '../../molecules/Card'
import ListGroup, { ListType } from '../../atoms/ListGroup'
import Timeline from '../../organisms/Timeline'
import TimeComment from '../../organisms/TimeComment'
import IconLabel from '../../organisms/IconLabel'

import { lang, framework, library, protocol, project, site } from './icons'

interface IProps {
  className?: string
}

const getArmyDiffDay = () => {
  const today = dayjs().locale('Asia/Seoul')
  const diffTime = today.diff('2021-09-26', 'day')
  return diffTime * -1
}

const Resume: React.FC<IProps> = ({ className }) => {
  const github = classNames(styles['social-icon'], styles['social-github'])
  const blog = classNames(styles['social-icon'], styles['social-blog'])
  const classProps = classNames(className, styles['default'])

  const armyDiff = getArmyDiffDay()

  return (
    <Layout className={classProps} direction={Direction.Column}>
      <Layout className={styles['profile']} direction={Direction.Row}>
        <Image
          className={styles['profile-image']}
          src={'https://avatars3.githubusercontent.com/u/11822155?s=460&u=1baad602f7e934445410c001377b900a67271b22&v=4'}
        />
        <Layout className={styles['profile-info']} direction={Direction.Column}>
          <span className={styles['profile-name']}>{'김동영'}</span>
          <Layout direction={Direction.Row} verticalAlign={VerticalAlign.Center}>
            <MdMailOutline className={styles['icon']} />
            <P className={styles['description']}>{'mkachi@naver.com'}</P>
          </Layout>
          <Layout className={styles['social-links']} direction={Direction.Row} verticalAlign={VerticalAlign.Center}>
            <A to={'https://github.com/mkachi'}>
              <FaGithub className={github} />
            </A>
            <A to={'https://mkachi.blog.me'}>
              <FaBloggerB className={blog} />
            </A>
          </Layout>
        </Layout>
      </Layout>
      <Layout direction={Direction.Column}>
        <h2>{'학력 및 경력'}</h2>
        <Card type={CardType.Resume}>
          <table className={styles['resume-table']}>
            <thead>
              <tr>
                <th className={styles['table-side-header']} />
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles['resume-table-padding']}>{'18.11 ~ 재직중'}</td>
                <td className={styles['resume-table-padding']}>{'에이씨케이'}</td>
              </tr>
              <tr>
                <td className={styles['resume-table-padding']}>{'17.03 ~ 휴학중'}</td>
                <td className={styles['resume-table-padding']}>{'성공회대학교 컴퓨터공학과'}</td>
              </tr>
              <tr>
                <td>{'14.03 ~ 17.02'}</td>
                <td>{'한국게임과학고등학교 컴퓨터게임개발과 프로그래밍 전공'}</td>
              </tr>
            </tbody>
          </table>
        </Card>

        <h2>{'역량'}</h2>
        <Card type={CardType.Resume}>
          <section className={styles['resume-section']}>
            <h3>{'소스 코드의 형상 관리를 중요하게 생각합니다'}</h3>
            <ListGroup type={ListType.Symbol}>
              <li>{'GitLab을 구축하여 기존 프로젝트들과 신규 프로젝트에 형상 관리 도입'}</li>
              <li>{'회사 작업 특성에 맞는 Branching 관리 전략 구축'}</li>
              <li>{'사내 Workflow 구축 및 문서화'}</li>
            </ListGroup>
          </section>

          <section className={styles['resume-section']}>
            <h3>{'나 혼자 성장하는 것이 아닌 팀과의 성장을 중요하게 생각합니다'}</h3>
            <ListGroup type={ListType.Symbol}>
              <li>{'Git을 모르는 개발자들을 위한 사내 교육'}</li>
              <li>{'ReactJS 사내 스터디 운영'}</li>
            </ListGroup>
          </section>

          <section className={styles['resume-section']}>
            <h3>{'다른 사람의 코드를 빠르게 읽고 활용할 수 있습니다'}</h3>
            <ListGroup type={ListType.Symbol}>
              <li>{'고신대학교복음병원 인터페이스 유지 보수 및 신규 개발'}</li>
              <li>{'C19Korea (COVID-19 검사 자동 판정 솔루션) 개발 지원'}</li>
            </ListGroup>
          </section>

          <section>
            <h3>{'필요한 기능을 직접 구현할 수 있습니다'}</h3>
            <ListGroup type={ListType.Symbol}>
              <li>{'수원삼성전기부속의원, 서초삼성부속의원 Code128 형식의 바코드 생성 모듈 개발'}</li>
              <li>{'사내 WPF / MVVM Pattern Library 개발'}</li>
              <li>{'회사 License 모듈 개발'}</li>
              <li>{'NihonkoDen Patient Monitor 정보 수집 솔루션 개발'}</li>
              <li>{'한양대학교서울병원 인터페이스 RESTful API 통신 모듈 개발'}</li>
            </ListGroup>
          </section>
        </Card>

        <h2>{'프로젝트 및 활동'}</h2>
        <Timeline>
          <TimeComment
            timestamp={'2020.06 ~ 진행중'}
            position={'Sub Programmer'}
            icon={site.hanyang}
            title={'한양대학교서울병원, 한양대학교구리병원 인터페이스 개발 지원'}
          >
            <Layout direction={Direction.Row} wrap={Wrap.Wrap}>
              <IconLabel icon={lang.csharp} text={'C#'} />
              <IconLabel icon={lang.vbnet} text={'VB.NET'} />
              <IconLabel icon={protocol.astm} text={'ASTM'} />
              <IconLabel icon={protocol.hl7} text={'HL7'} />
            </Layout>
          </TimeComment>

          <TimeComment
            timestamp={'2020.04 ~ 2020.04'}
            position={'디자인 개발 지원'}
            icon={project.covid}
            title={'COVID-19 검사 자동 판정 솔루션 개발 지원'}
          >
            <Layout className={styles['icons']} direction={Direction.Row} wrap={Wrap.Wrap}>
              <IconLabel icon={framework.react} text={'React'} />
              <IconLabel icon={library.redux} text={'Redux'} />
              <IconLabel icon={lang.typescript} text={'Typescript'} />
              <IconLabel icon={framework.devextreme} text={'DevExtreme'} />
              <IconLabel icon={library.tailwind} text={'Tailwind'} />
            </Layout>
          </TimeComment>

          <TimeComment
            timestamp={'2019.12 ~ 2020.03'}
            position={'Main Programmer'}
            icon={project.barcode}
            title={'서초삼성부속의원, 수원삼성전기부속의원 바코드 프린트 인터페이스 개발'}
          >
            <Layout direction={Direction.Row} wrap={Wrap.Wrap}>
              <IconLabel icon={lang.csharp} text={'C#'} />
              <IconLabel icon={framework.wpf} text={'WPF'} />
              <IconLabel icon={framework.devextreme} text={'DevExpress'} />
            </Layout>
          </TimeComment>

          <TimeComment
            timestamp={'2019.10 ~ 2019.12'}
            position={'Main Programmer'}
            icon={site.nihonkoden}
            title={'NihonkoDen Patient Monitor 정보 수집 솔루션 개발'}
          >
            <Layout direction={Direction.Row} wrap={Wrap.Wrap}>
              <IconLabel icon={lang.csharp} text={'C#'} />
              <IconLabel icon={protocol.udp} text={'UDP'} />
            </Layout>
          </TimeComment>

          <TimeComment
            timestamp={'2018.11 ~ 진행중'}
            position={'Maintenance'}
            icon={site.kosin}
            title={'고신대학교복음병원 인터페이스 유지 보수 및 신규 개발'}
          >
            <Layout direction={Direction.Row} wrap={Wrap.Wrap}>
              <IconLabel icon={lang.csharp} text={'C#'} />
              <IconLabel icon={lang.vbnet} text={'VB.NET'} />
              <IconLabel icon={protocol.astm} text={'ASTM'} />
              <IconLabel icon={protocol.hl7} text={'HL7'} />
            </Layout>
          </TimeComment>

          <TimeComment timestamp={'2018.11.27'} icon={site.army} title={'현역 산업기능요원 편입'}>
            <P>{`남은 근무 일수 : ${armyDiff}`}</P>
          </TimeComment>
          <TimeComment timestamp={'2018.11.20'} icon={site.ack} position={'업무혁신팀'} title={'에이씨케이 입사'} />

          <TimeComment
            timestamp={'2018.07 ~ 2018.09'}
            icon={project.ggs}
            position={'Main Programmer'}
            title={'할만한 클릭 미연시'}
          >
            <Layout direction={Direction.Row} wrap={Wrap.Wrap}>
              <A to={'https://youtu.be/RyYPtO4Y_Us'}>
                <IconLabel icon={site.youtube} text={'Play 영상'} />
              </A>
              <IconLabel icon={lang.csharp} text={'C#'} />
              <IconLabel icon={framework.unity} text={'Unity'} />
            </Layout>
          </TimeComment>

          <TimeComment
            timestamp={'2017.08 ~ 2017.12'}
            position={'Main Programmer'}
            icon={site.swm}
            title={'소프트웨어 마에스트로 8기 수료'}
          />

          <TimeComment timestamp={'2017.03 ~ 휴학'} position={'컴퓨터공학과 17기'} icon={site.skhu} title={'성공회대학교 입학'} />

          <TimeComment
            timestamp={'2016.07 ~ 2016.08'}
            icon={project.murevo}
            position={'UI Programmer'}
            title={'MuRevo'}
          >
            <Layout direction={Direction.Row} wrap={Wrap.Wrap}>
              <A to={'https://youtu.be/mC42LI4iLUo'}>
                <IconLabel icon={site.youtube} text={'Play 영상'} />
              </A>
              <IconLabel icon={lang.csharp} text={'C#'} />
              <IconLabel icon={framework.unity} text={'Unity'} />
            </Layout>
          </TimeComment>
        </Timeline>
      </Layout>
    </Layout>
  )
}

export default Resume
