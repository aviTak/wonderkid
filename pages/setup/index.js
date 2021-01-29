import Navbar from '../../components/Navbar/Navbar'
import Setup from '../../components/Setup/Setup'
import styles from '../../styles/Login.module.css'
import Head from 'next/head'

export default function Settings(){
    return(
        <>
            <Head>
                <title>Setup</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <Setup />
            </div>
        </>
    )
}