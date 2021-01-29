import DesignerBar from '../../components/DesignerBar/DesignerBar'
import ExtraInfo from '../../components/ExtraInfo/ExtraInfo'
import styles from '../../styles/Login.module.css'
import Head from 'next/head'

export default function Extra(){
    return(
        <>
            <Head>
                <title>Extra Info</title>
            </Head>
            <div className={styles.container}>
                <DesignerBar />
                <ExtraInfo />
            </div>
        </>
    )
}