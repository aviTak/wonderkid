import DesignerBar from '../../components/DesignerBar/DesignerBar'
import BusinessInfo from '../../components/BusinessInfo/BusinessInfo'
import styles from '../../styles/Login.module.css'
import Head from 'next/head'

export default function Business(){
    return(
        <>
            <Head>
                <title>Business Info</title>
            </Head>
            <div className={styles.container}>
                <DesignerBar />
                <BusinessInfo />
            </div>
        </>
    )
}