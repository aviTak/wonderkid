import styles from './BusinessInfo.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react';

const name = 'John';

export default function BusinessInfo(){

    const [business, setBusiness] = useState('');
    const [category, setCategory] = useState('');

    const router = useRouter()

    const handleSubmit = e => {
        e.preventDefault()

        /* Mutations */
        /* Promise then */

        router.push('/info/extra')
    }


    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>
                Welcome, {name}!
            </h1>

            <p className={styles.normal}>
                We need a bit more information before we go into creating your classes!
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.login}>
                    Business information
                </h2>

                <label className={styles.label} htmlFor="name">Name of your business</label>
                <input value={business} onChange={e => setBusiness(e.target.value)} required className={styles.text} type="text" id="name" name="name" placeholder="Business name" />

                <label className={styles.label} htmlFor="business">Type of business</label>
                <select value={category} onChange={e => setCategory(e.target.value)} className={styles.text} required name="business" id="business">
                    <option value="dance">Dance School</option>
                    <option value="tution">Tution Centre</option>
                    <option value="music">Music Studio</option>
                    <option value="art">Art Studio</option>
                    <option value="yoga">Yoga/Fitness</option>
                </select>

                <input type="submit" value="Next step" className={styles.button}></input>
            </form>

        </main>
    )
}