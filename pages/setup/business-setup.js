import Navbar from '../../components/Navbar/Navbar'
import BusinessSetup from '../../components/BusinessSetup/BusinessSetup'
import styles from '../../styles/Login.module.css'
import Head from 'next/head'

export default function Business(){
    return(
        <>
            <Head>
                <title>Account Settings</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <BusinessSetup />
            </div>
        </>
    )
}