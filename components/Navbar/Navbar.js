import styles from './Navbar.module.css'
import {useEffect} from 'react';

var open = false;
const close = '<svg width="1.8rem" style="fill: white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.05 11H5.91l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 13h14.14a1 1 0 0 0 .95-.95V12a1 1 0 0 0-.95-1z"/><rect x="3" y="17" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="5" width="18" height="2" rx=".95" ry=".95"/></g></g></svg>';

export default function Navbar(){

    useEffect(() => {
        try{
            document.getElementById('close').innerHTML = close;
        } catch(e){}
    })

    const show = () => {
        try{
            let element = document.getElementById('container');
            if(open){
                element.style.transform = 'translateX(-100%)';
                open = false;
            } else {
                element.style.transform = 'translateX(-0)';
                open = true;
            }
        } catch(e){}
    }

    return (
        <nav className={styles.container} id="container">
            <div className={styles.button} onClick={show}>
                <div className={styles.sign} id="close"></div>
            </div>
        </nav>
    )
}