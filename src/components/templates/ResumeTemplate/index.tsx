import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import { MdMailOutline } from 'react-icons/md'

import Layout, { Direction, VerticalAlign } from '../../molecules/Layout'
import Image from '../../atoms/Image'
import P from '../../atoms/P'
import { FaBloggerB, FaGithub } from 'react-icons/fa'
import A from '../../atoms/A'

interface IProps {
  className?: string
}

const Resume: React.FC<IProps> = ({ className }) => {
  const github = classNames(styles['social-icon'], styles['social-github'])
  const blog = classNames(styles['social-icon'], styles['social-blog'])
  const classProps = classNames(className, styles['default'])

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
        <article className={styles['resume-card']}>
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
                <td className={styles['resume-table-padding']}>{'17.03 ~ 휴학'}</td>
                <td className={styles['resume-table-padding']}>{'성공회대학교 컴퓨터공학과'}</td>
              </tr>
              <tr>
                <td>{'14.03 ~ 17.02'}</td>
                <td>{'한국게임과학고등학교 컴퓨터게임개발과 프로그래밍 전공'}</td>
              </tr>
            </tbody>
          </table>
        </article>

        <h2>{'역량'}</h2>
        <article className={styles['resume-card']}>
          <section className={styles['resume-section']}>
            <h3>{'소스 코드의 형상 관리를 중요하게 생각합니다'}</h3>
            <ul>
              <li>{'GitLab을 구축하여 기존 프로젝트들과 신규 프로젝트에 형상 관리 도입'}</li>
              <li>{'회사 작업 특성에 맞는 Branching 관리 전략 구축'}</li>
              <li>{'사내 Workflow 구축 및 문서화'}</li>
            </ul>
          </section>

          <section className={styles['resume-section']}>
            <h3>{'나 혼자 성장하는 것이 아닌 팀과의 성장을 중요하게 생각합니다'}</h3>
            <ul>
              <li>{'Git을 모르는 개발자들을 위한 사내 교육'}</li>
              <li>{'ReactJS 사내 스터디 운영'}</li>
            </ul>
          </section>

          <section className={styles['resume-section']}>
            <h3>{'다른 사람의 코드를 빠르게 읽고 활용할 수 있습니다'}</h3>
            <ul>
              <li>{'고신대학교복음병원 인터페이스 유지 보수 및 신규 개발'}</li>
              <li>{'C19Korea (COVID-19 검사 자동 판정 솔루션) 개발 지원'}</li>
            </ul>
          </section>

          <section>
            <h3>{'필요한 기능을 직접 구현할 수 있습니다'}</h3>
            <ul>
              <li>{'수원삼성전기부속의원, 서초삼성부속의원 Code128 형식의 바코드 생성 모듈 개발'}</li>
              <li>{'사내 WPF / MVVM Pattern Library 개발'}</li>
              <li>{'회사 License 모듈 개발'}</li>
              <li>{'NihonkoDen Patient Monitor 정보 수집 솔루션 개발'}</li>
              <li>{'한양대학교서울병원 인터페이스 RESTful API 통신 모듈 개발'}</li>
            </ul>
          </section>
        </article>

        <h2>{'프로젝트 및 활동'}</h2>
        <article className={styles['resume-card']}>
          <table className={styles['resume-table']}>
            <thead>
              <tr>
                <th className={styles['table-side-header']} />
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles['resume-table-padding']}>{'20.06 ~ 진행중'}</td>
                <td className={styles['resume-table-padding']}>{'한양대학교서울병원 인터페이스 개발 지원'}</td>
              </tr>
              <tr>
                <td className={styles['resume-table-padding']}>{'20.04'}</td>
                <td className={styles['resume-table-padding']}>{'COVID-19 검사 자동 판정 솔루션 개발 지원'}</td>
              </tr>
              <tr>
                <td className={styles['resume-table-padding']}>{'19.03'}</td>
                <td className={styles['resume-table-padding']}>{'수원삼성전기부속의원 바코드 프린트 인터페이스 개발'}</td>
              </tr>
              <tr>
                <td className={styles['resume-table-padding']}>{'19.10 ~ 19.12'}</td>
                <td className={styles['resume-table-padding']}>{'NihonkoDen Patient Monitor 정보 수집 솔루션 개발'}</td>
              </tr>
              <tr>
                <td>{'18.11 ~ 진행중'}</td>
                <td>{'고신대학교복음병원 인터페이스 유지 보수 및 신규 개발'}</td>
              </tr>
            </tbody>
          </table>
        </article>
      </Layout>
    </Layout>
  )
}

export default Resume
