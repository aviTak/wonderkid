import DesignerBar from '../components/DesignerBar/DesignerBar'
import Login from '../components/Login/Login'
import styles from '../styles/Login.module.css'
import Head from 'next/head'

export default function LoginBooker(){
    return(
        <>
            <Head>
                <title>Booker Login</title>
            </Head>
            <div className={styles.container}>
                <DesignerBar />
                <Login type="Booker" />
            </div>
        </>
    )
}