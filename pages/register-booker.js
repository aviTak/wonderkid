import DesignerBar from '../components/DesignerBar/DesignerBar'
import Register from '../components/Register/Register'
import styles from '../styles/Login.module.css'
import Head from 'next/head'

export default function RegisterBooker(){
    return(
        <>
            <Head>
                <title>Booker Register</title>
            </Head>
            <div className={styles.container}>
                <DesignerBar />
                <Register type="Booker" />
            </div>
        </>
    )
}