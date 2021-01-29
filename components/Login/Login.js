import styles from './Login.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// const eye = '<svg width="2.4rem" x="0px" y="0px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612; fill: #65b1ec;" xml:space="preserve"><g><g><path d="M609.608,315.426c3.19-5.874,3.19-12.979,0-18.853c-58.464-107.643-172.5-180.72-303.607-180.72S60.857,188.931,2.393,296.573c-3.19,5.874-3.19,12.979,0,18.853C60.858,423.069,174.892,496.147,306,496.147S551.143,423.069,609.608,315.426z M306,451.855c-80.554,0-145.855-65.302-145.855-145.855S225.446,160.144,306,160.144			S451.856,225.446,451.856,306S386.554,451.855,306,451.855z"/><path d="M306,231.67c-6.136,0-12.095,0.749-17.798,2.15c5.841,6.76,9.383,15.563,9.383,25.198c0,21.3-17.267,38.568-38.568,38.568c-9.635,0-18.438-3.541-25.198-9.383c-1.401,5.703-2.15,11.662-2.15,17.798c0,41.052,33.279,74.33,74.33,74.33			s74.33-33.279,74.33-74.33S347.052,231.67,306,231.67z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
const google = '<svg height="1.6rem" height="24px" viewBox="0 0 24 24"><defs><clipPath id="clip-path"><path id="a" d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z" fill="none"/></clipPath></defs><rect id="view-box" width="24" height="24" fill="none"/><g id="Logo" transform="translate(3 3)"><g id="Clipped"><path id="a-5" data-name="a" ="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z" fill="none"/><g id="Clipped-2" data-name="Clipped" clip-path="url(#clip-path)"><path id="Path" d="M0,10.636V0L7.116,5.318Z" transform="translate(-0.837 3.682)" fill="#fbbc05"/></g></g><g id="Clipped-3" data-name="Clipped"><path id="a-6" data-name="a" d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z" fill="none"/><g id="Clipped-4" data-name="Clipped" clip-path="url(#clip-path)"><path id="Path-2" data-name="Path" d="M0,4.5,7.116,9.818l2.93-2.5,10.047-1.6V0H0Z" transform="translate(-0.837 -0.818)" fill="#ea4335"/></g></g><g id="Clipped-5" data-name="Clipped"><path id="a-7" data-name="a" d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z" fill="none"/><g id="Clipped-6" data-name="Clipped" clip-path="url(#clip-path)"><path id="Path-3" data-name="Path" d="M0,15.136,12.558,5.727l3.307.409L20.093,0V19.636H0Z" transform="translate(-0.837 -0.818)" fill="#34a853"/></g></g><g id="Clipped-7" data-name="Clipped"><path id="a-8" data-name="a" d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z" fill="none"/><g id="Clipped-8" data-name="Clipped" clip-path="url(#clip-path)"><path id="Path-4" data-name="Path" d="M14.651,15.136,1.674,5.318,0,4.091,14.651,0Z" transform="translate(4.605 3.682)" fill="#4285f4"/></g></g></g></svg>'

export default function Login({type}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.getElementById('photo').innerHTML = google;
    }, [])

    const submit = e => {
        e.preventDefault();
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>
                We're {' '}
                <span className={styles.underline}>so happy</span> {' '}
                to see you again!
            </h1>

            <form className={styles.form} onSubmit={submit}>
                <h2 className={styles.login}>
                    Login
                </h2>

                <label className={styles.label} htmlFor="email">Email address</label>
                <input value={email} onChange={e => setEmail(e.target.value)} required className={styles.text} type="email" id="email" name="email" placeholder="Email address" />

                <label className={styles.label} htmlFor="password">Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} required className={styles.text} type="password" id="password" name="password" placeholder="Password" />

                <Link href="/forgot-password">
                    <a className={styles.link}>
                        Forgot password?
                    </a>
                </Link>

                <input type="submit" value="Log in" className={styles.button}></input>
            </form>

            <div className={styles.line}>
                or
            </div>

            <a 
                href="#"  
                className={styles.google}
                rel="noopener noreferrer"
            >
                <span id="photo" className={styles.round}></span>
                Login using Google
            </a>

            <p className={styles.first_time}>
                First time here? {' '}
                <Link href={type==='Booker'? '/register-booker' : '/register-partner'}>
                    <a className={`${styles.link} ${styles.extra_link}`}>
                        Sign up
                    </a>
                </Link>
            </p>

            <p className={styles.partner}>
                {type==='Booker'? 'Are you one of our amazing partners?' : 'Are you one of our super cool bookers?'}
                <br/>
                <Link href={type==='Booker'? '/login-partner' : '/login-booker'}>
                    <a className={`${styles.link} ${styles.extra_link} ${styles.special_link}`}>
                        Click here to login then!
                    </a>
                </Link>
            </p>
        </main>
    )
}