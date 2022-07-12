import type { NextPage, NextPageContext } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage<{ manual_sig_handle: string; pid: number; }> = (props) => {
  return (
    <div className={styles.container}>
      <h1>Shutdown Info</h1>
      <table>
        <tbody>
          <tr>
            <td><span className="label">NEXT_MANUAL_SIG_HANDLE:</span></td>
            <td>{props.manual_sig_handle}</td>
          </tr>
          <tr>
            <td><span className="label">PID:</span></td>
            <td>{props.pid}</td>
          </tr>
        </tbody>
      </table>
      <h2>Command</h2>
        <p>
          kill -s SIGTERM {props.pid}
        </p>
    </div>
  )
}

export default Home

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      manual_sig_handle: process.env.NEXT_MANUAL_SIG_HANDLE,
      pid: process.pid
    }
  }
}