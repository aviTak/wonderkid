import DesignerBar from '../components/DesignerBar/DesignerBar'
import Login from '../components/Login/Login'
import styles from '../styles/Login.module.css'
import Head from 'next/head'

export default function RegisterPartner(){
    return(
        <>
            <Head>
                <title>Partner Login</title>
            </Head>
            <div className={styles.container}>
                <DesignerBar />
                <Login type="Partner" />
            </div>
        </>
    )
}