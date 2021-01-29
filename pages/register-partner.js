import DesignerBar from '../components/DesignerBar/DesignerBar'
import Register from '../components/Register/Register'
import styles from '../styles/Login.module.css'
import Head from 'next/head'

export default function RegisterPartner(){
    return(
        <>
            <Head>
                <title>Partner Register</title>
            </Head>
            <div className={styles.container}>
                <DesignerBar />
                <Register type="Partner" />
            </div>
        </>
    )
}