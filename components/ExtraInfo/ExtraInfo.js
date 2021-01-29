import styles from './ExtraInfo.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function ExtraInfo(){

    const [info, setInfo] = useState('');
    const [tools, setTools] = useState('');
    const [help, setHelp] = useState('');
    const [hear, setHear] = useState('');

    const router = useRouter()

    const handleSubmit = e => {
        e.preventDefault()

        /* Mutations */
        /* Promise then */

        router.push('/dashboard')
    }


    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>
                Tell us a bit more about yourself!
            </h1>

            <p className={styles.normal}>
                This will help us understand you, and thus serve you better!
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.login}>
                    Introduction
                </h2>

                <label className={styles.label} htmlFor="class">Tell us a bit more about the classes you take.</label>
                <input value={info} onChange={e => setInfo(e.target.value)} required className={styles.text} type="text" id="class" name="class" placeholder="Type here" />

                <label className={styles.label} htmlFor="tools">What tools are you currently using to manage your classes?</label>
                <input value={tools} onChange={e => setTools(e.target.value)} required className={styles.text} type="text" id="tools" name="tools" placeholder="Type here" />

                <label className={styles.label} htmlFor="help">What is the biggest pain point you need help with?</label>
                <input value={help} onChange={e => setHelp(e.target.value)} required className={styles.text} type="text" id="help" name="help" placeholder="Type here" />

                <label className={styles.label} htmlFor="hear">How did you hear about us?</label>
                <select value={hear} onChange={e => setHear(e.target.value)} className={styles.text} required name="hear" id="hear">
                    <option value="friend">Friend</option>
                    <option value="google">Google Ads</option>
                    <option value="social">Social Media</option>
                    <option value="partner">Our Partners</option>
                    <option value="other">Other</option>
                </select>

                <input type="submit" value="Go to my dashboard" className={styles.button}></input>
            </form>

            <p className={styles.first_time}>
                <Link href='/dasboard'>
                    <a className={`${styles.link} ${styles.extra_link}`}>
                        Skip
                    </a>
                </Link>
            </p>

        </main>
    )
}