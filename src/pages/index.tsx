import Head from 'next/head'

import { Profile } from '../component/Profile'
import styles from '../styles/pages/home.module.css'
import { GetServerSideProps } from 'next'
import { ChallengeProvider } from '../contexts/ChalendsContext'
import { CountDownProvider } from '../contexts/CountDownContext'
import { CompletedChallenges } from '../component/CompletedChallenges'
import { CountDown } from '../component/CountDown'
import { ChalendBox } from '../component/ChalengeBox'
import ExperienceBar from '../component/ExperienceBar'


interface IChallengeProps {
  level: number
  currentExperience: number
  chelledsCompleted: number
}
 function Home({ level, currentExperience, chelledsCompleted }: IChallengeProps) {

  return (
    <ChallengeProvider
      level={level}
      currentExperience={currentExperience}
      chelledsCompleted={chelledsCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Home</title>
        </Head>
        <ExperienceBar></ExperienceBar>
        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChalendBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengeProvider>
  )
}


export default Home

export const getServerSideProps: GetServerSideProps = async (contexts) => {

  const { level, currentExperience, chelledsCompleted } = contexts.req.cookies


  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      chelledsCompleted: Number(chelledsCompleted)
    }
  }

}