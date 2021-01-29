import styles from './BusinessSetup.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const web = '<svg height="2.2rem" x="0px" y="0px" viewBox="0 0 491.52 491.52" style="enable-background:new 0 0 491.52 491.52;" xml:space="preserve"><g><g>		<polygon points="183.855,68.79 169.27,118.43 161.315,93.18 141.785,93.18 133.835,118.43 119.25,68.79 99.6,74.57 123.67,156.49 			143.26,156.68 151.55,130.35 159.845,156.68 179.435,156.49 203.505,74.57"/></g></g><g><g>		<polygon points="298.545,68.79 283.955,118.43 76.005,93.18 256.475,93.18 248.525,118.43 233.935,68.79 214.285,74.57 238.36,156.49 257.95,156.68 266.24,130.35 274.53,156.68 294.12,156.49 318.195,74.57"/>	</g></g><g>	<g>		<polygon points="413.23,68.79 398.645,118.43 390.695,93.18 371.165,93.18 363.21,118.43 348.625,68.79 328.975,74.57 			353.045,156.49 372.635,156.68 380.93,130.35 389.22,156.68 408.81,156.49 432.88,74.57 	"/>	</g></g><g>	<g>		<path d="M491.52,30.72H40.96v89.086C14.217,156.578,0,200.018,0,245.76c0,56.73,21.895,110.2,61.63,150.52			c40.7,41.61,95.185,64.52,153.41,64.52c58.225,0,112.71-22.91,153.385-64.49c39.76-40.35,61.655-93.82,61.655-150.55			c0-17.359-2.146-34.511-6.23-51.2h67.67V30.72z M40.96,159.031v35.529h58.021c-1.786,13.389-2.844,27.089-3.2,40.96H20.886			C22.271,208.614,29.064,182.749,40.96,159.031z M20.974,256h74.879c0.812,32.407,5.357,62.733,13.022,89.597			c-14.02,8.014-27.129,17.739-39.237,28.945C40.257,341.563,23.266,300.167,20.974,256z M84.004,389.117			c9.739-8.951,20.211-16.791,31.323-23.478c9.644,26.264,22.482,48.142,37.522,64.379			C127.497,421.474,104.162,407.642,84.004,389.117z M204.8,439.205c-28.946-6.164-54.591-38.093-70.783-83.479			c22.054-10.145,45.947-16.019,70.783-17.301V439.205z M204.8,317.944c-26.957,1.259-52.95,7.349-76.997,18.056			c-6.658-24.26-10.674-51.436-11.475-80H204.8V317.944z M204.8,235.52h-88.539c0.376-13.903,1.522-27.603,3.412-40.96H204.8V235.52			z M225.28,439.205V338.424c24.836,1.282,48.729,7.156,70.783,17.301C279.871,401.112,254.226,433.041,225.28,439.205z			 M313.752,256c-0.801,28.564-4.817,55.74-11.475,80c-24.047-10.706-50.039-16.797-76.997-18.056V256H313.752z M225.28,235.52			v-40.96h85.129c1.89,13.356,3.036,27.054,3.411,40.96H225.28z M277.229,430.019c15.041-16.237,27.88-38.116,37.524-64.381			c11.114,6.688,21.586,14.53,31.326,23.481C325.927,407.642,302.589,421.474,277.229,430.019z M360.443,374.543			c-12.109-11.207-25.217-20.931-39.238-28.946c7.665-26.864,12.21-57.191,13.022-89.597h74.879C406.814,300.156,389.828,341.545,360.443,374.543z M334.299,235.52c-0.355-13.874-1.413-27.573-3.199-40.96h71.536			c3.641,13.349,5.854,27.053,6.578,40.96H334.299z M471.04,174.08H61.44V51.2h409.6V174.08z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
const face = '<svg height="2.2rem" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M222.892,388h51.491c4.418,0,8-3.582,8-8V264.093h26.751c4.101,0,7.538-3.101,7.958-7.18l4.51-43.772c0.232-2.252-0.501-4.498-2.019-6.179c-1.517-1.682-3.675-2.641-5.939-2.641h-31.261v-17.73c0-3.662,1.159-3.936,2.928-3.936h27.682c4.418,0,8-3.582,8-8v-42.5c0-4.406-3.562-7.982-7.968-8L274.848,124c-26.752,0-41.029,11.77-48.295,21.643c-10.146,13.787-11.661,29.941-11.661,38.343v20.334h-16.489c-4.418,0-8,3.582-8,8v43.772c0,4.418,3.582,8,8,8h16.489V380C214.892,384.418,218.473,388,222.892,388z M206.402,248.093v-27.772h16.489c4.418,0,8-3.582,8-8v-28.334c0-5.185,0.833-18.376,8.547-28.86c7.386-10.037,19.3-15.126,35.376-15.126l30.177,0.122v26.533h-19.682c-9.421,0-18.928,6.164-18.928,19.936v25.73c0,4.418,3.582,8,8,8h30.395l-2.862,27.772h-27.533c-4.418,0-8,3.582-8,8V372h-35.491V256.093c0-4.418-3.582-8-8-8H206.402z"/><path d="M437.022,74.984C388.67,26.63,324.381,0,256,0C187.624,0,123.338,26.63,74.984,74.984S0,187.624,0,256c0,68.388,26.63,132.678,74.984,181.028C123.335,485.375,187.621,512,256,512c68.385,0,132.673-26.625,181.021-74.972C485.372,388.679,512,324.389,512,256C512,187.622,485.372,123.336,437.022,74.984z M425.708,425.714C380.381,471.039,320.111,496,256,496c-64.106,0-124.374-24.961-169.703-70.286C40.965,380.386,16,320.113,16,256c0-64.102,24.965-124.37,70.297-169.702C131.63,40.965,191.898,16,256,16c64.108,0,124.378,24.965,169.708,70.297C471.037,131.628,496,191.896,496,256C496,320.115,471.037,380.387,425.708,425.714z"/><path d="M430.038,114.969c-2.784-3.432-7.821-3.957-11.253-1.172c-3.431,2.784-3.956,7.822-1.172,11.252C447.526,161.919,464,208.425,464,256c0,55.567-21.635,107.803-60.919,147.086C363.797,442.367,311.563,464,256,464c-51.26,0-100.505-18.807-138.663-52.956c-3.292-2.946-8.35-2.666-11.296,0.626c-2.946,3.292-2.666,8.35,0.626,11.296C147.763,459.745,200.797,480,256,480c59.837,0,116.089-23.297,158.394-65.601C456.701,372.094,480,315.84,480,256C480,204.766,462.256,154.681,430.038,114.969z"/><path d="M48,256c0-114.691,93.309-208,208-208c51.26,0,100.504,18.808,138.662,52.959c3.293,2.948,8.351,2.666,11.296-0.625c2.947-3.292,2.667-8.35-0.625-11.296C364.237,52.256,311.203,32,256,32c-59.829,0-116.079,23.301-158.389,65.611C55.301,139.92,32,196.171,32,256c0,51.24,17.744,101.328,49.963,141.038c1.581,1.949,3.889,2.96,6.217,2.96c1.771,0,3.553-0.585,5.036-1.788c3.431-2.784,3.956-7.822,1.172-11.253C64.474,350.088,48,303.58,48,256z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
const insta = '<svg height="2.2rem" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M437.022,74.984C388.67,26.63,324.381,0,256,0C187.624,0,123.338,26.63,74.984,74.984S0,187.624,0,256c0,68.388,26.63,132.678,74.984,181.028C123.335,485.375,187.621,512,256,512c68.385,0,132.673-26.625,181.021-74.972C485.372,388.679,512,324.389,512,256C512,187.622,485.372,123.336,437.022,74.984z M425.708,425.714C380.381,471.039,320.111,496,256,496c-64.106,0-124.374-24.961-169.703-70.286C40.965,380.386,16,320.113,16,256c0-64.102,24.965-124.37,70.297-169.702C131.63,40.965,191.898,16,256,16c64.108,0,124.378,24.965,169.708,70.297C471.037,131.628,496,191.896,496,256C496,320.115,471.037,380.387,425.708,425.714z"/><path d="M430.038,114.969c-2.784-3.432-7.821-3.956-11.253-1.172c-3.431,2.784-3.956,7.822-1.172,11.252C447.526,161.919,464,208.425,464,256c0,55.567-21.635,107.803-60.919,147.085C363.797,442.367,311.563,464,256,464c-51.26,0-100.505-18.807-138.663-52.956c-3.292-2.946-8.35-2.666-11.296,0.626c-2.946,3.292-2.666,8.35,0.626,11.296C147.763,459.745,200.797,480,256,480c59.837,0,116.089-23.297,158.394-65.601C456.701,372.094,480,315.84,480,256C480,204.766,462.256,154.681,430.038,114.969z"/><path d="M48,256c0-114.691,93.309-208,208-208c51.26,0,100.504,18.808,138.662,52.959c3.293,2.948,8.351,2.666,11.296-0.625c2.947-3.292,2.667-8.35-0.625-11.296C364.237,52.256,311.203,32,256,32c-59.829,0-116.079,23.301-158.389,65.611C55.301,139.92,32,196.171,32,256c0,51.24,17.744,101.328,49.963,141.038c1.581,1.949,3.889,2.96,6.217,2.96c1.771,0,3.553-0.585,5.036-1.788c3.431-2.784,3.956-7.822,1.172-11.253C64.474,350.088,48,303.58,48,256z"/><path d="M168,127.654c-22.056,0-40,17.944-40,40v176c0,22.056,17.944,40,40,40h176c22.056,0,40-17.944,40-40v-176c0-22.056-17.944-40-40-40H168z M344,367.654H168c-13.234,0-24-10.766-24-24v-120h47.528c-4.808,9.647-7.528,20.509-7.528,32c0,39.701,32.299,72,72,72s72-32.299,72-72c0-11.491-2.72-22.353-7.528-32H368v120C368,356.888,357.234,367.654,344,367.654z M312,255.654c0,30.878-25.122,56-56,56s-56-25.122-56-56s25.122-56,56-56S312,224.776,312,255.654z M368,167.654v40h-58.392c-13.192-14.718-32.333-24-53.608-24s-40.416,9.282-53.608,24H144v-40c0-10.429,6.689-19.322,16-22.624v46.624c0,4.418,3.582,8,8,8s8-3.582,8-8v-48h8v48c0,4.418,3.582,8,8,8s8-3.582,8-8v-48h144C357.234,143.654,368,154.42,368,167.654z"/><path d="M256,215.654c-4.418,0-8,3.582-8,8s3.582,8,8,8c13.234,0,24,10.766,24,24c0,4.418,3.582,8,8,8s8-3.582,8-8C296,233.598,278.056,215.654,256,215.654z"/><path d="M312,159.654v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-32c0-4.418-3.582-8-8-8h-32C315.582,151.654,312,155.236,312,159.654z M328,167.654h16v16h-16V167.654z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
const you = '<svg height="2.2rem" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M437.022,74.984C388.67,26.63,324.381,0,256,0C187.624,0,123.338,26.63,74.984,74.984S0,187.624,0,256c0,68.388,26.63,132.678,74.984,181.028C123.335,485.375,187.621,512,256,512c68.385,0,132.673-26.625,181.021-74.972C485.372,388.679,512,324.389,512,256C512,187.623,485.372,123.336,437.022,74.984z M425.708,425.714C380.381,471.039,320.111,496,256,496c-64.106,0-124.374-24.961-169.703-70.286C40.965,380.386,16,320.113,16,256c0-64.102,24.965-124.37,70.297-169.703C131.63,40.965,191.898,16,256,16c64.108,0,124.378,24.965,169.708,70.297C471.037,131.628,496,191.896,496,256C496,320.115,471.037,380.387,425.708,425.714z"/><path d="M430.038,114.969c-2.784-3.432-7.821-3.957-11.253-1.172c-3.431,2.784-3.956,7.822-1.172,11.252C447.526,161.919,464,208.426,464,256c0,55.567-21.635,107.803-60.919,147.085C363.797,442.367,311.563,464,256,464c-51.26,0-100.505-18.807-138.663-52.956c-3.292-2.946-8.35-2.666-11.296,0.626s-2.666,8.35,0.626,11.296C147.763,459.745,200.797,480,256,480c59.837,0,116.089-23.297,158.394-65.601C456.701,372.095,480,315.84,480,256C480,204.767,462.256,154.681,430.038,114.969z"/><path d="M48,256c0-114.691,93.309-208,208-208c51.26,0,100.504,18.808,138.662,52.959c3.293,2.948,8.351,2.666,11.296-0.625c2.947-3.292,2.667-8.35-0.625-11.296C364.237,52.256,311.203,32,256,32c-59.829,0-116.08,23.301-158.389,65.611C55.301,139.921,32,196.171,32,256c0,51.239,17.744,101.328,49.963,141.038c1.581,1.949,3.889,2.96,6.217,2.96c1.771,0,3.553-0.585,5.036-1.788c3.431-2.784,3.956-7.822,1.172-11.253C64.474,350.088,48,303.58,48,256z"/><path d="M393.81,199.21c-0.297-2.237-3.165-22.123-12.481-32.244c-11.127-12.384-23.789-13.666-29.877-14.283c-0.531-0.054-1.019-0.103-1.458-0.156c-0.12-0.015-0.239-0.027-0.359-0.036c-36.754-2.849-92.235-2.882-92.792-2.882h-0.124c-0.556,0-56.038,0.033-92.784,2.882c-0.12,0.009-0.24,0.021-0.359,0.036c-0.438,0.054-0.926,0.103-1.458,0.156c-6.086,0.616-18.742,1.897-29.876,14.282c-9.308,10.117-12.184,30.004-12.481,32.242c-0.006,0.044-0.011,0.089-0.017,0.133c-0.11,0.947-2.689,23.462-2.689,46.399v21.314c0,22.953,2.579,45.46,2.689,46.407c0.005,0.043,0.011,0.087,0.016,0.131c0.297,2.237,3.166,22.118,12.486,32.224c10.304,11.453,23.351,13.129,30.365,14.031c1.235,0.159,2.302,0.296,3.029,0.441c0.248,0.049,0.498,0.087,0.75,0.113c21.2,2.171,87.505,2.839,90.409,2.867c0.557-0.001,56.085-0.132,92.828-2.947c0.136-0.01,0.271-0.024,0.405-0.042c0.452-0.058,0.957-0.109,1.507-0.167c6.074-0.635,18.705-1.955,29.789-14.292c9.309-10.104,12.184-29.979,12.481-32.216c0.006-0.044,0.011-0.089,0.017-0.134c0.11-0.947,2.688-23.461,2.689-46.406v-21.315c0-22.945-2.579-45.459-2.689-46.407C393.821,199.297,393.815,199.254,393.81,199.21z M380.514,267.063c0,21.399-2.42,43.136-2.575,44.499c-0.602,4.445-3.392,18.033-8.397,23.436c-0.03,0.032-0.06,0.065-0.089,0.098c-6.977,7.786-14.56,8.578-19.578,9.103c-0.6,0.063-1.155,0.122-1.661,0.184c-36.146,2.754-90.895,2.884-91.352,2.886c-0.678-0.007-67.638-0.68-88.505-2.75c-1.154-0.212-2.398-0.372-3.707-0.541c-5.992-0.77-14.199-1.825-20.538-8.893c-0.03-0.033-0.06-0.066-0.09-0.099c-4.448-4.797-7.503-16.895-8.394-23.436c-0.158-1.395-2.575-23.106-2.575-44.496V245.74c0-21.4,2.422-43.145,2.575-44.493c0.602-4.449,3.394-18.048,8.401-23.464c0.027-0.03,0.055-0.06,0.082-0.09c7.008-7.814,14.596-8.582,19.617-9.091c0.58-0.059,1.118-0.114,1.61-0.172c36.127-2.788,90.83-2.821,91.379-2.821h0.124c0.549,0,55.252,0.033,91.387,2.821c0.491,0.058,1.03,0.113,1.61,0.172c5.023,0.508,12.614,1.277,19.614,9.088c0.029,0.032,0.058,0.063,0.086,0.095c4.45,4.808,7.506,16.91,8.4,23.466c0.158,1.393,2.575,23.113,2.575,44.496L380.514,267.063z"/><path d="M310.355,249.579l-82.356-49.415c-2.472-1.482-5.549-1.521-8.058-0.102c-2.508,1.42-4.059,4.079-4.059,6.961v98.829c0,2.882,1.55,5.542,4.059,6.961c1.224,0.693,2.583,1.039,3.941,1.039c1.426,0,2.851-0.381,4.116-1.14l82.356-49.415c2.409-1.446,3.884-4.05,3.884-6.86S312.765,251.024,310.355,249.579z M231.883,291.724v-70.57l58.808,35.285L231.883,291.724z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';

export default function BusinessSetup(){

    const [email, setEmail] = useState('');
    const [business, setBusiness] = useState('');
    const [bio, setBio] = useState('');
    const [permalink, setPermalink] = useState('');
    const [category, setCategory] = useState('');
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [alternateEmail, setAlternateEmail] = useState('');
    const [time, setTime] = useState('');
    const [currency, setCurrency] = useState('');
    const [profile, setProfile] = useState('');
    const [cover, setCover] = useState('');
    const [website, setWebsite] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [youtube, setYoutube] = useState('');

    useEffect(() => {
        try{
            document.getElementById('web').innerHTML = web;
            document.getElementById('facebook').innerHTML = face;
            document.getElementById('instagram').innerHTML = insta;
            document.getElementById('youtube').innerHTML = you;
        } catch(e) {}
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <main className={styles.container}>
            
            <h1 className={styles.heading}>
                Business Setup
            </h1>

            <hr className={styles.line} />

            <Link href='/setup'>
                <a className={styles.tertiary}>
                    Back to Setup
                </a>
            </Link>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={`${styles.boxing} ${styles.clearfix}`}>
                    <section className={`${styles.frame} ${styles.frame_1}`}>
                        <h2 className={styles.sub}>
                            Basic Info
                        </h2>

                        <p className={styles.para}>
                            Your business name, bio and business type are displayed across many areas including on your online booking profile, sales invoices and messages to clients.
                        </p>                
                        
                    </section>

                    <section className={`${styles.box} ${styles.box_1}`}>

                        <label className={styles.label} htmlFor="business">Business name</label>                        
                        <input value={business} onChange={e => setBusiness(e.target.value)} required className={styles.text} type="text" id="business" name="business" placeholder="Business name" />
                        
                        <label className={styles.label} htmlFor="email">Email address</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} required className={styles.text} type="email" id="email" name="email" placeholder="Email address" />

                        <label className={styles.label} htmlFor="bio">Short bio</label>
                        <input value={bio} onChange={e => setBio(e.target.value)} className={styles.text} type="text" id="bio" name="bio" placeholder="Write a short bio" />

                        <label className={styles.label} htmlFor="permalink">Class link</label>
                        <input value={permalink} onChange={e => setPermalink(e.target.value)} required className={styles.text} type="text" id="permalink" name="permalink" placeholder="Unique URL identifier for your class" />

                        <label className={styles.label} htmlFor="category">Type of business</label>
                        <select value={category} onChange={e => setCategory(e.target.value)} className={styles.text} required name="category" id="category">
                            <option value="dance">Dance School</option>
                            <option value="tution">Tution Centre</option>
                            <option value="music">Music Studio</option>
                            <option value="art">Art Studio</option>
                            <option value="yoga">Yoga/Fitness</option>
                        </select>
                    </section>

                    <section className={`${styles.frame} ${styles.frame_2}`}>
                        <h2 className={styles.sub}>
                            Contact Details
                        </h2>

                        <p className={styles.para}>
                            Add your company email and phone number for sharing with clients.
                        </p>                
                        
                    </section>

                    <section className={`${styles.box} ${styles.box_2}`}>
                        <label className={styles.label} htmlFor="phone">Phone no.</label>

                        <select value={code} onChange={e => setCode(e.target.value)} required className={`${styles.text} ${styles.texto_1}`} type="text" id="code" name="code">
                       
                        <option data-countrycode="DZ" value="213">Algeria (+213)</option>
                            <option data-countrycode="AD" value="376">Andorra (+376)</option>
                            <option data-countrycode="AO" value="244">Angola (+244)</option>
                            <option data-countrycode="AI" value="1264">Anguilla (+1264)</option>
                            <option data-countrycode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                            <option data-countrycode="AR" value="54">Argentina (+54)</option>
                            <option data-countrycode="AM" value="374">Armenia (+374)</option>
                            <option data-countrycode="AW" value="297">Aruba (+297)</option>
                            <option data-countrycode="AU" value="61">Australia (+61)</option>
                            <option data-countrycode="AT" value="43">Austria (+43)</option>
                            <option data-countrycode="AZ" value="994">Azerbaijan (+994)</option>
                            <option data-countrycode="BS" value="1242">Bahamas (+1242)</option>
                            <option data-countrycode="BH" value="973">Bahrain (+973)</option>
                            <option data-countrycode="BD" value="880">Bangladesh (+880)</option>
                            <option data-countrycode="BB" value="1246">Barbados (+1246)</option>
                            <option data-countrycode="BY" value="375">Belarus (+375)</option>
                            <option data-countrycode="BE" value="32">Belgium (+32)</option>
                            <option data-countrycode="BZ" value="501">Belize (+501)</option>
                            <option data-countrycode="BJ" value="229">Benin (+229)</option>
                            <option data-countrycode="BM" value="1441">Bermuda (+1441)</option>
                            <option data-countrycode="BT" value="975">Bhutan (+975)</option>
                            <option data-countrycode="BO" value="591">Bolivia (+591)</option>
                            <option data-countrycode="BA" value="387">Bosnia Herzegovina (+387)</option>
                            <option data-countrycode="BW" value="267">Botswana (+267)</option>
                            <option data-countrycode="BR" value="55">Brazil (+55)</option>
                            <option data-countrycode="BN" value="673">Brunei (+673)</option>
                            <option data-countrycode="BG" value="359">Bulgaria (+359)</option>
                            <option data-countrycode="BF" value="226">Burkina Faso (+226)</option>
                            <option data-countrycode="BI" value="257">Burundi (+257)</option>
                            <option data-countrycode="KH" value="855">Cambodia (+855)</option>
                            <option data-countrycode="CM" value="237">Cameroon (+237)</option>
                            <option data-countrycode="CA" value="1">Canada (+1)</option>
                            <option data-countrycode="CV" value="238">Cape Verde Islands (+238)</option>
                            <option data-countrycode="KY" value="1345">Cayman Islands (+1345)</option>
                            <option data-countrycode="CF" value="236">Central African Republic (+236)</option>
                            <option data-countrycode="CL" value="56">Chile (+56)</option>
                            <option data-countrycode="CN" value="86">China (+86)</option>
                            <option data-countrycode="CO" value="57">Colombia (+57)</option>
                            <option data-countrycode="KM" value="269">Comoros (+269)</option>
                            <option data-countrycode="CG" value="242">Congo (+242)</option>
                            <option data-countrycode="CK" value="682">Cook Islands (+682)</option>
                            <option data-countrycode="CR" value="506">Costa Rica (+506)</option>
                            <option data-countrycode="HR" value="385">Croatia (+385)</option>
                            <option data-countrycode="CU" value="53">Cuba (+53)</option>
                            <option data-countrycode="CY" value="90392">Cyprus North (+90392)</option>
                            <option data-countrycode="CY" value="357">Cyprus South (+357)</option>
                            <option data-countrycode="CZ" value="42">Czech Republic (+42)</option>
                            <option data-countrycode="DK" value="45">Denmark (+45)</option>
                            <option data-countrycode="DJ" value="253">Djibouti (+253)</option>
                            <option data-countrycode="DM" value="1809">Dominica (+1809)</option>
                            <option data-countrycode="DO" value="1809">Dominican Republic (+1809)</option>
                            <option data-countrycode="EC" value="593">Ecuador (+593)</option>
                            <option data-countrycode="EG" value="20">Egypt (+20)</option>
                            <option data-countrycode="SV" value="503">El Salvador (+503)</option>
                            <option data-countrycode="GQ" value="240">Equatorial Guinea (+240)</option>
                            <option data-countrycode="ER" value="291">Eritrea (+291)</option>
                            <option data-countrycode="EE" value="372">Estonia (+372)</option>
                            <option data-countrycode="ET" value="251">Ethiopia (+251)</option>
                            <option data-countrycode="FK" value="500">Falkland Islands (+500)</option>
                            <option data-countrycode="FO" value="298">Faroe Islands (+298)</option>
                            <option data-countrycode="FJ" value="679">Fiji (+679)</option>
                            <option data-countrycode="FI" value="358">Finland (+358)</option>
                            <option data-countrycode="FR" value="33">France (+33)</option>
                            <option data-countrycode="GF" value="594">French Guiana (+594)</option>
                            <option data-countrycode="PF" value="689">French Polynesia (+689)</option>
                            <option data-countrycode="GA" value="241">Gabon (+241)</option>
                            <option data-countrycode="GM" value="220">Gambia (+220)</option>
                            <option data-countrycode="GE" value="7880">Georgia (+7880)</option>
                            <option data-countrycode="DE" value="49">Germany (+49)</option>
                            <option data-countrycode="GH" value="233">Ghana (+233)</option>
                            <option data-countrycode="GI" value="350">Gibraltar (+350)</option>
                            <option data-countrycode="GR" value="30">Greece (+30)</option>
                            <option data-countrycode="GL" value="299">Greenland (+299)</option>
                            <option data-countrycode="GD" value="1473">Grenada (+1473)</option>
                            <option data-countrycode="GP" value="590">Guadeloupe (+590)</option>
                            <option data-countrycode="GU" value="671">Guam (+671)</option>
                            <option data-countrycode="GT" value="502">Guatemala (+502)</option>
                            <option data-countrycode="GN" value="224">Guinea (+224)</option>
                            <option data-countrycode="GW" value="245">Guinea - Bissau (+245)</option>
                            <option data-countrycode="GY" value="592">Guyana (+592)</option>
                            <option data-countrycode="HT" value="509">Haiti (+509)</option>
                            <option data-countrycode="HN" value="504">Honduras (+504)</option>
                            <option data-countrycode="HK" value="852">Hong Kong (+852)</option>
                            <option data-countrycode="HU" value="36">Hungary (+36)</option>
                            <option data-countrycode="IS" value="354">Iceland (+354)</option>
                            <option data-countrycode="IN" value="91">India (+91)</option>
                            <option data-countrycode="ID" value="62">Indonesia (+62)</option>
                            <option data-countrycode="IR" value="98">Iran (+98)</option>
                            <option data-countrycode="IQ" value="964">Iraq (+964)</option>
                            <option data-countrycode="IE" value="353">Ireland (+353)</option>
                            <option data-countrycode="IL" value="972">Israel (+972)</option>
                            <option data-countrycode="IT" value="39">Italy (+39)</option>
                            <option data-countrycode="JM" value="1876">Jamaica (+1876)</option>
                            <option data-countrycode="JP" value="81">Japan (+81)</option>
                            <option data-countrycode="JO" value="962">Jordan (+962)</option>
                            <option data-countrycode="KZ" value="7">Kazakhstan (+7)</option>
                            <option data-countrycode="KE" value="254">Kenya (+254)</option>
                            <option data-countrycode="KI" value="686">Kiribati (+686)</option>
                            <option data-countrycode="KP" value="850">Korea North (+850)</option>
                            <option data-countrycode="KR" value="82">Korea South (+82)</option>
                            <option data-countrycode="KW" value="965">Kuwait (+965)</option>
                            <option data-countrycode="KG" value="996">Kyrgyzstan (+996)</option>
                            <option data-countrycode="LA" value="856">Laos (+856)</option>
                            <option data-countrycode="LV" value="371">Latvia (+371)</option>
                            <option data-countrycode="LB" value="961">Lebanon (+961)</option>
                            <option data-countrycode="LS" value="266">Lesotho (+266)</option>
                            <option data-countrycode="LR" value="231">Liberia (+231)</option>
                            <option data-countrycode="LY" value="218">Libya (+218)</option>
                            <option data-countrycode="LI" value="417">Liechtenstein (+417)</option>
                            <option data-countrycode="LT" value="370">Lithuania (+370)</option>
                            <option data-countrycode="LU" value="352">Luxembourg (+352)</option>
                            <option data-countrycode="MO" value="853">Macao (+853)</option>
                            <option data-countrycode="MK" value="389">Macedonia (+389)</option>
                            <option data-countrycode="MG" value="261">Madagascar (+261)</option>
                            <option data-countrycode="MW" value="265">Malawi (+265)</option>
                            <option data-countrycode="MY" value="60">Malaysia (+60)</option>
                            <option data-countrycode="MV" value="960">Maldives (+960)</option>
                            <option data-countrycode="ML" value="223">Mali (+223)</option>
                            <option data-countrycode="MT" value="356">Malta (+356)</option>
                            <option data-countrycode="MH" value="692">Marshall Islands (+692)</option>
                            <option data-countrycode="MQ" value="596">Martinique (+596)</option>
                            <option data-countrycode="MR" value="222">Mauritania (+222)</option>
                            <option data-countrycode="YT" value="269">Mayotte (+269)</option>
                            <option data-countrycode="MX" value="52">Mexico (+52)</option>
                            <option data-countrycode="FM" value="691">Micronesia (+691)</option>
                            <option data-countrycode="MD" value="373">Moldova (+373)</option>
                            <option data-countrycode="MC" value="377">Monaco (+377)</option>
                            <option data-countrycode="MN" value="976">Mongolia (+976)</option>
                            <option data-countrycode="MS" value="1664">Montserrat (+1664)</option>
                            <option data-countrycode="MA" value="212">Morocco (+212)</option>
                            <option data-countrycode="MZ" value="258">Mozambique (+258)</option>
                            <option data-countrycode="MN" value="95">Myanmar (+95)</option>
                            <option data-countrycode="NA" value="264">Namibia (+264)</option>
                            <option data-countrycode="NR" value="674">Nauru (+674)</option>
                            <option data-countrycode="NP" value="977">Nepal (+977)</option>
                            <option data-countrycode="NL" value="31">Netherlands (+31)</option>
                            <option data-countrycode="NC" value="687">New Caledonia (+687)</option>
                            <option data-countrycode="NZ" value="64">New Zealand (+64)</option>
                            <option data-countrycode="NI" value="505">Nicaragua (+505)</option>
                            <option data-countrycode="NE" value="227">Niger (+227)</option>
                            <option data-countrycode="NG" value="234">Nigeria (+234)</option>
                            <option data-countrycode="NU" value="683">Niue (+683)</option>
                            <option data-countrycode="NF" value="672">Norfolk Islands (+672)</option>
                            <option data-countrycode="NP" value="670">Northern Marianas (+670)</option>
                            <option data-countrycode="NO" value="47">Norway (+47)</option>
                            <option data-countrycode="OM" value="968">Oman (+968)</option>
                            <option data-countrycode="PW" value="680">Palau (+680)</option>
                            <option data-countrycode="PA" value="507">Panama (+507)</option>
                            <option data-countrycode="PG" value="675">Papua New Guinea (+675)</option>
                            <option data-countrycode="PY" value="595">Paraguay (+595)</option>
                            <option data-countrycode="PE" value="51">Peru (+51)</option>
                            <option data-countrycode="PH" value="63">Philippines (+63)</option>
                            <option data-countrycode="PL" value="48">Poland (+48)</option>
                            <option data-countrycode="PT" value="351">Portugal (+351)</option>
                            <option data-countrycode="PR" value="1787">Puerto Rico (+1787)</option>
                            <option data-countrycode="QA" value="974">Qatar (+974)</option>
                            <option data-countrycode="RE" value="262">Reunion (+262)</option>
                            <option data-countrycode="RO" value="40">Romania (+40)</option>
                            <option data-countrycode="RU" value="7">Russia (+7)</option>
                            <option data-countrycode="RW" value="250">Rwanda (+250)</option>
                            <option data-countrycode="SM" value="378">San Marino (+378)</option>
                            <option data-countrycode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
                            <option data-countrycode="SA" value="966">Saudi Arabia (+966)</option>
                            <option data-countrycode="SN" value="221">Senegal (+221)</option>
                            <option data-countrycode="CS" value="381">Serbia (+381)</option>
                            <option data-countrycode="SC" value="248">Seychelles (+248)</option>
                            <option data-countrycode="SL" value="232">Sierra Leone (+232)</option>
                            <option data-countrycode="SG" value="65">Singapore (+65)</option>
                            <option data-countrycode="SK" value="421">Slovak Republic (+421)</option>
                            <option data-countrycode="SI" value="386">Slovenia (+386)</option>
                            <option data-countrycode="SB" value="677">Solomon Islands (+677)</option>
                            <option data-countrycode="SO" value="252">Somalia (+252)</option>
                            <option data-countrycode="ZA" value="27">South Africa (+27)</option>
                            <option data-countrycode="ES" value="34">Spain (+34)</option>
                            <option data-countrycode="LK" value="94">Sri Lanka (+94)</option>
                            <option data-countrycode="SH" value="290">St. Helena (+290)</option>
                            <option data-countrycode="KN" value="1869">St. Kitts (+1869)</option>
                            <option data-countrycode="SC" value="1758">St. Lucia (+1758)</option>
                            <option data-countrycode="SD" value="249">Sudan (+249)</option>
                            <option data-countrycode="SR" value="597">Suriname (+597)</option>
                            <option data-countrycode="SZ" value="268">Swaziland (+268)</option>
                            <option data-countrycode="SE" value="46">Sweden (+46)</option>
                            <option data-countrycode="CH" value="41">Switzerland (+41)</option>
                            <option data-countrycode="SI" value="963">Syria (+963)</option>
                            <option data-countrycode="TW" value="886">Taiwan (+886)</option>
                            <option data-countrycode="TJ" value="7">Tajikstan (+7)</option>
                            <option data-countrycode="TH" value="66">Thailand (+66)</option>
                            <option data-countrycode="TG" value="228">Togo (+228)</option>
                            <option data-countrycode="TO" value="676">Tonga (+676)</option>
                            <option data-countrycode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
                            <option data-countrycode="TN" value="216">Tunisia (+216)</option>
                            <option data-countrycode="TR" value="90">Turkey (+90)</option>
                            <option data-countrycode="TM" value="7">Turkmenistan (+7)</option>
                            <option data-countrycode="TM" value="993">Turkmenistan (+993)</option>
                            <option data-countrycode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                            <option data-countrycode="TV" value="688">Tuvalu (+688)</option>
                            <option data-countrycode="UG" value="256">Uganda (+256)</option>
                            <option data-countrycode="GB" value="44">UK (+44)</option>
                            <option data-countrycode="UA" value="380">Ukraine (+380)</option>
                            <option data-countrycode="AE" value="971">United Arab Emirates (+971)</option>
                            <option data-countrycode="UY" value="598">Uruguay (+598)</option>
                            <option data-countrycode="US" value="1">USA (+1)</option>
                            <option data-countrycode="UZ" value="7">Uzbekistan (+7)</option>
                            <option data-countrycode="VU" value="678">Vanuatu (+678)</option>
                            <option data-countrycode="VA" value="379">Vatican City (+379)</option>
                            <option data-countrycode="VE" value="58">Venezuela (+58)</option>
                            <option data-countrycode="VN" value="84">Vietnam (+84)</option>
                            <option data-countrycode="VG" value="84">Virgin Islands - British (+1284)</option>
                            <option data-countrycode="VI" value="84">Virgin Islands - US (+1340)</option>
                            <option data-countrycode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                            <option data-countrycode="YE" value="969">Yemen (North)(+969)</option>
                            <option data-countrycode="YE" value="967">Yemen (South)(+967)</option>
                            <option data-countrycode="ZM" value="260">Zambia (+260)</option>
                            <option data-countrycode="ZW" value="263">Zimbabwe (+263)</option>

                        </select>

                        <input value={phone} onChange={e => setPhone(e.target.value)} required className={`${styles.text} ${styles.texto_2}`} type="tel" id="phone" name="phone" placeholder="Phone no." />

                        <label className={styles.label} htmlFor="alternate">Alternate email address</label>
                        <input value={alternateEmail} onChange={e => setAlternateEmail(e.target.value)} className={styles.text} type="email" id="alternate" name="alternate" placeholder="Alternate email address" />

                    </section>

                    <section className={`${styles.frame} ${styles.frame_3}`}>
                        <h2 className={styles.sub}>
                            Time and Currency Settings
                        </h2>

                        <p className={styles.para}>
                            Choose the time zone and currency which suit your business.
                        </p>                
                        
                    </section>

                    <section className={`${styles.box} ${styles.box_3}`}>
                        
                        <label className={styles.label} htmlFor="time">Time zone</label>
                        <select value={time} onChange={e => setTime(e.target.value)} className={styles.text} required name="time" id="time">

                            <option value="Pacific/Niue">(GMT -11:00) Niue</option>

                            <option value="Pacific/Midway">(GMT -11:00) Midway</option>

                            <option value="Pacific/Rarotonga">(GMT -10:00) Rarotonga</option>

                            <option value="Pacific/Tahiti">(GMT -10:00) Tahiti</option>

                            <option value="America/Adak">(GMT -10:00) Adak</option>

                            <option value="Pacific/Honolulu">(GMT -10:00) Honolulu</option>

                            <option value="Pacific/Marquesas">(GMT -09:30) Marquesas</option>

                            <option value="Pacific/Gambier">(GMT -09:00) Gambier</option>

                            <option value="America/Anchorage">(GMT -09:00) Anchorage</option>

                            <option value="America/Juneau">(GMT -09:00) Juneau</option>

                            <option value="America/Sitka">(GMT -09:00) Sitka</option>

                            <option value="America/Metlakatla">(GMT -09:00) Metlakatla</option>

                            <option value="America/Yakutat">(GMT -09:00) Yakutat</option>

                            <option value="America/Nome">(GMT -09:00) Nome</option>

                            <option value="America/Vancouver">(GMT -08:00) Vancouver</option>
                            
                            <option value="America/Whitehorse">(GMT -08:00) Whitehorse</option>
                            
                            <option value="America/Dawson">(GMT -08:00) Dawson</option>
                            
                            <option value="America/Tijuana">(GMT -08:00) Tijuana</option>
                            
                            <option value="Pacific/Pitcairn">(GMT -08:00) Pitcairn</option>
                            
                            <option value="America/Los_Angeles">(GMT -08:00) Los Angeles</option>
                            
                            <option value="America/Edmonton">(GMT -07:00) Edmonton</option>
                            
                            <option value="America/Cambridge_Bay">(GMT -07:00) Cambridge Bay</option>
                            
                            <option value="America/Yellowknife">(GMT -07:00) Yellowknife</option>
                            
                            <option value="America/Inuvik">(GMT -07:00) Inuvik</option>
                            
                            <option value="America/Creston">(GMT -07:00) Creston</option>

                            <option value="America/Dawson_Creek">(GMT -07:00) Dawson Creek</option>
                            
                            <option value="America/Fort_Nelson">(GMT -07:00) Fort Nelson</option>
                            
                            <option value="America/Mazatlan">(GMT -07:00) Mazatlan</option>
                            
                            <option value="America/Chihuahua">(GMT -07:00) Chihuahua</option>
                            
                            <option value="America/Ojinaga">(GMT -07:00) Ojinaga</option>
                            
                            <option value="America/Hermosillo">(GMT -07:00) Hermosillo</option>
                            
                            <option value="America/Bahia_Banderas">(GMT -07:00) Bahia Banderas</option>
                            
                            <option value="America/Denver">(GMT -07:00) Denver</option>
                            
                            <option value="America/Boise">(GMT -07:00) Boise</option>
                            
                            <option value="America/Phoenix">(GMT -07:00) Phoenix</option>
                            
                            <option value="America/Belize">(GMT -06:00) Belize</option>
                            
                            <option value="America/Winnipeg">(GMT -06:00) Winnipeg</option>
                            
                            <option value="America/Rainy_River">(GMT -06:00) Rainy River</option>
                            
                            <option value="America/Resolute">(GMT -06:00) Resolute</option>
                            
                            <option value="America/Rankin_Inlet">(GMT -06:00) Rankin Inlet</option>
                            
                            <option value="America/Regina">(GMT -06:00) Regina</option>
                            
                            <option value="America/Swift_Current">(GMT -06:00) Swift Current</option>
                            
                            <option value="Pacific/Easter">(GMT -06:00) Easter</option>
                            
                            <option value="America/Costa_Rica">(GMT -06:00) Costa Rica</option>
                            
                            <option value="Pacific/Galapagos">(GMT -06:00) Galapagos</option>
                            
                            <option value="America/Guatemala">(GMT -06:00) Guatemala</option>
                            
                            <option value="America/Tegucigalpa">(GMT -06:00) Tegucigalpa</option>
                            
                            <option value="America/Mexico_City">(GMT -06:00) Mexico City</option>
                            
                            <option value="America/Merida">(GMT -06:00) Merida</option>
                            
                            <option value="America/Monterrey">(GMT -06:00) Monterrey</option>
                            
                            <option value="America/Matamoros">(GMT -06:00) Matamoros</option>
                            
                            <option value="America/Managua">(GMT -06:00) Managua</option>
                            
                            <option value="America/El_Salvador">(GMT -06:00) El Salvador</option>
                            
                            <option value="America/Chicago">(GMT -06:00) Chicago</option>
                            
                            <option value="America/Indiana/Tell_City">(GMT -06:00) Tell City, Indiana</option>
                            
                            <option value="America/Indiana/Knox">(GMT -06:00) Knox, Indiana</option>
                            
                            <option value="America/Menominee">(GMT -06:00) Menominee</option>
                            
                            <option value="America/North_Dakota/Center">(GMT -06:00) Center, North Dakota</option>
                            
                            <option value="America/North_Dakota/New_Salem">(GMT -06:00) New Salem, North Dakota</option>
                            
                            <option value="America/North_Dakota/Beulah">(GMT -06:00) Beulah, North Dakota</option>
                            
                            <option value="America/Eirunepe">(GMT -05:00) Eirunepe</option>
                            
                            <option value="America/Rio_Branco">(GMT -05:00) Rio Branco</option>
                            
                            <option value="America/Nassau">(GMT -05:00) Nassau</option>
                            
                            <option value="America/Toronto">(GMT -05:00) Toronto</option>
                            
                            <option value="America/Nipigon">(GMT -05:00) Nipigon</option>
                            
                            <option value="America/Thunder_Bay">(GMT -05:00) Thunder Bay</option>
                            
                            <option value="America/Iqaluit">(GMT -05:00) Iqaluit</option>
                            
                            <option value="America/Pangnirtung">(GMT -05:00) Pangnirtung</option>
                            
                            <option value="America/Atikokan">(GMT -05:00) Atikokan</option>
                            
                            <option value="America/Bogota">(GMT -05:00) Bogota</option>
                            
                            <option value="America/Havana">(GMT -05:00) Havana</option>
                            
                            <option value="America/Guayaquil">(GMT -05:00) Guayaquil</option>
                            
                            <option value="America/Port-au-Prince">(GMT -05:00) Port-au-Prince</option>
                            
                            <option value="America/Jamaica">(GMT -05:00) Jamaica</option>
                            
                            <option value="America/Cayman">(GMT -05:00) Cayman</option>
                            
                            <option value="America/Cancun">(GMT -05:00) Cancun</option>
                            
                            <option value="America/Panama">(GMT -05:00) Panama</option>
                            
                            <option value="America/Lima">(GMT -05:00) Lima</option>
                            
                            <option value="America/Grand_Turk">(GMT -05:00) Grand Turk</option>
                            
                            <option value="America/New_York">(GMT -05:00) New York</option>
                            
                            <option value="America/Detroit">(GMT -05:00) Detroit</option>
                            
                            <option value="America/Kentucky/Louisville">(GMT -05:00) Louisville, Kentucky</option>
                            
                            <option value="America/Kentucky/Monticello">(GMT -05:00) Monticello, Kentucky</option>
                            
                            <option value="America/Indiana/Indianapolis">(GMT -05:00) Indianapolis, Indiana</option>
                            
                            <option value="America/Indiana/Vincennes">(GMT -05:00) Vincennes, Indiana</option>
                            
                            <option value="America/Indiana/Winamac">(GMT -05:00) Winamac, Indiana</option>
                            
                            <option value="America/Indiana/Marengo">(GMT -05:00) Marengo, Indiana</option>
                            
                            <option value="America/Indiana/Petersburg">(GMT -05:00) Petersburg, Indiana</option>
                            
                            <option value="America/Indiana/Vevay">(GMT -05:00) Vevay, Indiana</option>
                            
                            <option value="America/Antigua">(GMT -04:00) Antigua</option>
                            
                            <option value="America/Anguilla">(GMT -04:00) Anguilla</option>
                            
                            <option value="America/Aruba">(GMT -04:00) Aruba</option>
                            
                            <option value="America/Barbados">(GMT -04:00) Barbados</option>
                            
                            <option value="America/St_Barthelemy">(GMT -04:00) St Barthelemy</option>
                            
                            <option value="Atlantic/Bermuda">(GMT -04:00) Bermuda</option>
                            
                            <option value="America/La_Paz">(GMT -04:00) La Paz</option>
                            
                            <option value="America/Kralendijk">(GMT -04:00) Kralendijk</option>
                            
                            <option value="America/Campo_Grande">(GMT -04:00) Campo Grande</option>
                            
                            <option value="America/Cuiaba">(GMT -04:00) Cuiaba</option>
                            
                            <option value="America/Porto_Velho">(GMT -04:00) Porto Velho</option>
                            
                            <option value="America/Boa_Vista">(GMT -04:00) Boa Vista</option>
                            
                            <option value="America/Manaus">(GMT -04:00) Manaus</option>
                            
                            <option value="America/Halifax">(GMT -04:00) Halifax</option>
                            
                            <option value="America/Glace_Bay">(GMT -04:00) Glace Bay</option>
                            
                            <option value="America/Moncton">(GMT -04:00) Moncton</option>
                            
                            <option value="America/Goose_Bay">(GMT -04:00) Goose Bay</option>
                            
                            <option value="America/Blanc-Sablon">(GMT -04:00) Blanc-Sablon</option>
                            
                            <option value="America/Santiago">(GMT -04:00) Santiago</option>
                            
                            <option value="America/Curacao">(GMT -04:00) Curacao</option>
                            
                            <option value="America/Dominica">(GMT -04:00) Dominica</option>
                            
                            <option value="America/Santo_Domingo">(GMT -04:00) Santo Domingo</option>
                            
                            <option value="America/Grenada">(GMT -04:00) Grenada</option>
                            
                            <option value="America/Thule">(GMT -04:00) Thule</option>
                            
                            <option value="America/Guadeloupe">(GMT -04:00) Guadeloupe</option>
                            
                            <option value="America/Guyana">(GMT -04:00) Guyana</option>
                            
                            <option value="America/St_Kitts">(GMT -04:00) St Kitts</option>
                            
                            <option value="America/St_Lucia">(GMT -04:00) St Lucia</option>
                            
                            <option value="America/Marigot">(GMT -04:00) Marigot</option>
                            
                            <option value="America/Martinique">(GMT -04:00) Martinique</option>
                            
                            <option value="America/Montserrat">(GMT -04:00) Montserrat</option>
                            
                            <option value="America/Puerto_Rico">(GMT -04:00) Puerto Rico</option>
                            
                            <option value="America/Asuncion">(GMT -04:00) Asuncion</option>
                            
                            <option value="America/Lower_Princes">(GMT -04:00) Lower Princes</option>
                            
                            <option value="America/Port_of_Spain">(GMT -04:00) Port of Spain</option>
                            
                            <option value="America/St_Vincent">(GMT -04:00) St Vincent</option>
                            
                            <option value="America/Caracas">(GMT -04:00) Caracas</option>
                            
                            <option value="America/Tortola">(GMT -04:00) Tortola</option>
                            
                            <option value="America/St_Thomas">(GMT -04:00) St Thomas</option>                            
                            
                            <option value="America/St_Johns">(GMT -03:30) St Johns</option>
                            
                            <option value="Antarctica/Palmer">(GMT -03:00) Palmer</option>
                            
                            <option value="Antarctica/Rothera">(GMT -03:00) Rothera</option>
                            
                            <option value="America/Argentina/Buenos_Aires">(GMT -03:00) Buenos Aires, Argentina</option>
                            
                            <option value="America/Argentina/Cordoba">(GMT -03:00) Cordoba, Argentina</option>
                            
                            <option value="America/Argentina/Salta">(GMT -03:00) Salta, Argentina</option>
                            
                            <option value="America/Argentina/Jujuy">(GMT -03:00) Jujuy, Argentina</option>
                            
                            <option value="America/Argentina/Tucuman">(GMT -03:00) Tucuman, Argentina</option>                            
                            
                            <option value="America/Argentina/Catamarca">(GMT -03:00) Catamarca, Argentina</option>
                            
                            <option value="America/Argentina/La_Rioja">(GMT -03:00) La Rioja, Argentina</option>
                            
                            <option value="America/Argentina/San_Juan">(GMT -03:00) San Juan, Argentina</option>
                            
                            <option value="America/Argentina/Mendoza">(GMT -03:00) Mendoza, Argentina</option>
                            
                            <option value="America/Argentina/San_Luis">(GMT -03:00) San Luis, Argentina</option>
                            
                            <option value="America/Argentina/Rio_Gallegos">(GMT -03:00) Rio Gallegos, Argentina</option>
                            
                            <option value="America/Argentina/Ushuaia">(GMT -03:00) Ushuaia, Argentina</option>
                            
                            <option value="America/Belem">(GMT -03:00) Belem</option>
                            
                            <option value="America/Fortaleza">(GMT -03:00) Fortaleza</option>
                            
                            <option value="America/Recife">(GMT -03:00) Recife</option>
                            
                            <option value="America/Araguaina">(GMT -03:00) Araguaina</option>
                            
                            <option value="America/Maceio">(GMT -03:00) Maceio</option>
                            
                            <option value="America/Bahia">(GMT -03:00) Bahia</option>
                            
                            <option value="America/Sao_Paulo">(GMT -03:00) Sao Paulo</option>
                            
                            <option value="America/Santarem">(GMT -03:00) Santarem</option>
                            
                            <option value="America/Punta_Arenas">(GMT -03:00) Punta Arenas</option>
                            
                            <option value="Atlantic/Stanley">(GMT -03:00) Stanley</option>
                            
                            <option value="America/Cayenne">(GMT -03:00) Cayenne</option>
                            
                            <option value="America/Godthab">(GMT -03:00) Godthab</option>
                            
                            <option value="America/Miquelon">(GMT -03:00) Miquelon</option>
                            
                            <option value="America/Paramaribo">(GMT -03:00) Paramaribo</option>
                            
                            <option value="America/Montevideo">(GMT -03:00) Montevideo</option>
                            
                            <option value="America/Noronha">(GMT -02:00) Noronha</option>
                            
                            <option value="Atlantic/South_Georgia">(GMT -02:00) South Georgia</option>                            
                        
                            <option value="Atlantic/Cape_Verde">(GMT -01:00) Cape Verde</option>

                            <option value="America/Scoresbysund">(GMT -01:00) Scoresbysund</option>

                            <option value="Atlantic/Azores">(GMT -01:00) Azores</option>

                            <option value="Antarctica/Troll">(GMT +00:00) Troll</option>

                            <option value="Africa/Ouagadougou">(GMT +00:00) Ouagadougou</option>

                            <option value="Africa/Abidjan">(GMT +00:00) Abidjan</option>

                            <option value="Africa/El_Aaiun">(GMT +00:00) El Aaiun</option>

                            <option value="Atlantic/Canary">(GMT +00:00) Canary</option>

                            <option value="Atlantic/Faroe">(GMT +00:00) Faroe</option>

                            <option value="Europe/London">(GMT +00:00) London</option>

                            <option value="Europe/Guernsey">(GMT +00:00) Guernsey</option>

                            <option value="Africa/Accra">(GMT +00:00) Accra</option>

                            <option value="America/Danmarkshavn">(GMT +00:00) Danmarkshavn</option>

                            <option value="Africa/Banjul">(GMT +00:00) Banjul</option>

                            <option value="Africa/Conakry">(GMT +00:00) Conakry</option>

                            <option value="Africa/Bissau">(GMT +00:00) Bissau</option>

                            <option value="Europe/Dublin">(GMT +00:00) Dublin</option>

                            <option value="Europe/Isle_of_Man">(GMT +00:00) Isle of Man</option>

                            <option value="Atlantic/Reykjavik">(GMT +00:00) Reykjavik</option>

                            <option value="Europe/Jersey">(GMT +00:00) Jersey</option>

                            <option value="Africa/Monrovia">(GMT +00:00) Monrovia</option>

                            <option value="Africa/Casablanca">(GMT +00:00) Casablanca</option>

                            <option value="Africa/Bamako">(GMT +00:00) Bamako</option>

                            <option value="Africa/Nouakchott">(GMT +00:00) Nouakchott</option>

                            <option value="Europe/Lisbon">(GMT +00:00) Lisbon</option>

                            <option value="Atlantic/Madeira">(GMT +00:00) Madeira</option>

                            <option value="Atlantic/St_Helena">(GMT +00:00) St Helena</option>

                            <option value="Africa/Freetown">(GMT +00:00) Freetown</option>

                            <option value="Africa/Dakar">(GMT +00:00) Dakar</option>

                            <option value="Africa/Sao_Tome">(GMT +00:00) Sao Tome</option>

                            <option value="Africa/Lome">(GMT +00:00) Lome</option>

                            <option value="Europe/Andorra">(GMT +01:00) Andorra</option>

                            <option value="Europe/Tirane">(GMT +01:00) Tirane</option>

                            <option value="Africa/Luanda">(GMT +01:00) Luanda</option>

                            <option value="Europe/Vienna">(GMT +01:00) Vienna</option>

                            <option value="Europe/Sarajevo">(GMT +01:00) Sarajevo</option>

                            <option value="Europe/Brussels">(GMT +01:00) Brussels</option>

                            <option value="Africa/Porto-Novo">(GMT +01:00) Porto-Novo</option>

                            <option value="Africa/Kinshasa">(GMT +01:00) Kinshasa</option>

                            <option value="Africa/Bangui">(GMT +01:00) Bangui</option>

                            <option value="Africa/Brazzaville">(GMT +01:00) Brazzaville</option>

                            <option value="Europe/Zurich">(GMT +01:00) Zurich</option>

                            <option value="Africa/Douala">(GMT +01:00) Douala</option>

                            <option value="Europe/Prague">(GMT +01:00) Prague</option>

                            <option value="Europe/Berlin">(GMT +01:00) Berlin</option>

                            <option value="Europe/Busingen">(GMT +01:00) Busingen</option>

                            <option value="Europe/Copenhagen">(GMT +01:00) Copenhagen</option>

                            <option value="Africa/Algiers">(GMT +01:00) Algiers</option>

                            <option value="Europe/Madrid">(GMT +01:00) Madrid</option>

                            <option value="Africa/Ceuta">(GMT +01:00) Ceuta</option>

                            <option value="Europe/Paris">(GMT +01:00) Paris</option>

                            <option value="Africa/Libreville">(GMT +01:00) Libreville</option>

                            <option value="Europe/Gibraltar">(GMT +01:00) Gibraltar</option>

                            <option value="Africa/Malabo">(GMT +01:00) Malabo</option>

                            <option value="Europe/Zagreb">(GMT +01:00) Zagreb</option>

                            <option value="Europe/Budapest">(GMT +01:00) Budapest</option>

                            <option value="Europe/Rome">(GMT +01:00) Rome</option>

                            <option value="Europe/Vaduz">(GMT +01:00) Vaduz</option>

                            <option value="Europe/Luxembourg">(GMT +01:00) Luxembourg</option>

                            <option value="Europe/Monaco">(GMT +01:00) Monaco</option>

                            <option value="Europe/Podgorica">(GMT +01:00) Podgorica</option>

                            <option value="Europe/Skopje">(GMT +01:00) Skopje</option>

                            <option value="Europe/Malta">(GMT +01:00) Malta</option>

                            <option value="Africa/Niamey">(GMT +01:00) Niamey</option>

                            <option value="Africa/Lagos">(GMT +01:00) Lagos</option>

                            <option value="Europe/Amsterdam">(GMT +01:00) Amsterdam</option>

                            <option value="Europe/Oslo">(GMT +01:00) Oslo</option>

                            <option value="Europe/Warsaw">(GMT +01:00) Warsaw</option>

                            <option value="Europe/Belgrade">(GMT +01:00) Belgrade</option>

                            <option value="Europe/Stockholm">(GMT +01:00) Stockholm</option>

                            <option value="Europe/Ljubljana">(GMT +01:00) Ljubljana</option>

                            <option value="Arctic/Longyearbyen">(GMT +01:00) Longyearbyen</option>

                            <option value="Europe/Bratislava">(GMT +01:00) Bratislava</option>

                            <option value="Europe/San_Marino">(GMT +01:00) San Marino</option>

                            <option value="Africa/Ndjamena">(GMT +01:00) Ndjamena</option>

                            <option value="Africa/Tunis">(GMT +01:00) Tunis</option>

                            <option value="Europe/Vatican">(GMT +01:00) Vatican</option>

                            <option value="Europe/Mariehamn">(GMT +02:00) Mariehamn</option>

                            <option value="Europe/Sofia">(GMT +02:00) Sofia</option>

                            <option value="Africa/Bujumbura">(GMT +02:00) Bujumbura</option>

                            <option value="Africa/Gaborone">(GMT +02:00) Gaborone</option>

                            <option value="Africa/Lubumbashi">(GMT +02:00) Lubumbashi</option>

                            <option value="Asia/Nicosia">(GMT +02:00) Nicosia</option>

                            <option value="Asia/Famagusta">(GMT +02:00) Famagusta</option>

                            <option value="Europe/Tallinn">(GMT +02:00) Tallinn</option>

                            <option value="Africa/Cairo">(GMT +02:00) Cairo</option>

                            <option value="Europe/Helsinki">(GMT +02:00) Helsinki</option>

                            <option value="Europe/Athens">(GMT +02:00) Athens</option>

                            <option value="Asia/Jerusalem">(GMT +02:00) Jerusalem</option>

                            <option value="Asia/Amman">(GMT +02:00) Amman</option>

                            <option value="Asia/Beirut">(GMT +02:00) Beirut</option>

                            <option value="Africa/Maseru">(GMT +02:00) Maseru</option>

                            <option value="Europe/Vilnius">(GMT +02:00) Vilnius</option>

                            <option value="Europe/Riga">(GMT +02:00) Riga</option>

                            <option value="Africa/Tripoli">(GMT +02:00) Tripoli</option>

                            <option value="Europe/Chisinau">(GMT +02:00) Chisinau</option>

                            <option value="Africa/Blantyre">(GMT +02:00) Blantyre</option>

                            <option value="Africa/Maputo">(GMT +02:00) Maputo</option>

                            <option value="Africa/Windhoek">(GMT +02:00) Windhoek</option>

                            <option value="Asia/Gaza">(GMT +02:00) Gaza</option>

                            <option value="Asia/Hebron">(GMT +02:00) Hebron</option>

                            <option value="Europe/Bucharest">(GMT +02:00) Bucharest</option>

                            <option value="Europe/Kaliningrad">(GMT +02:00) Kaliningrad</option>

                            <option value="Africa/Kigali">(GMT +02:00) Kigali</option>

                            <option value="Africa/Khartoum">(GMT +02:00) Khartoum</option>

                            <option value="Asia/Damascus">(GMT +02:00) Damascus</option>

                            <option value="Africa/Mbabane">(GMT +02:00) Mbabane</option>

                            <option value="Europe/Kiev">(GMT +02:00) Kiev</option>

                            <option value="Europe/Uzhgorod">(GMT +02:00) Uzhgorod</option>

                            <option value="Europe/Zaporozhye">(GMT +02:00) Zaporozhye</option>

                            <option value="Africa/Johannesburg">(GMT +02:00) Johannesburg</option>

                            <option value="Africa/Lusaka">(GMT +02:00) Lusaka</option>

                            <option value="Africa/Harare">(GMT +02:00) Harare</option>

                            <option value="Antarctica/Syowa">(GMT +03:00) Syowa</option>

                            <option value="Asia/Bahrain">(GMT +03:00) Bahrain</option>

                            <option value="Europe/Minsk">(GMT +03:00) Minsk</option>

                            <option value="Africa/Djibouti">(GMT +03:00) Djibouti</option>

                            <option value="Africa/Asmara">(GMT +03:00) Asmara</option>

                            <option value="Africa/Addis_Ababa">(GMT +03:00) Addis Ababa</option>

                            <option value="Asia/Baghdad">(GMT +03:00) Baghdad</option>

                            <option value="Africa/Nairobi">(GMT +03:00) Nairobi</option>

                            <option value="Indian/Comoro">(GMT +03:00) Comoro</option>

                            <option value="Asia/Kuwait">(GMT +03:00) Kuwait</option>

                            <option value="Indian/Antananarivo">(GMT +03:00) Antananarivo</option>

                            <option value="Asia/Qatar">(GMT +03:00) Qatar</option>

                            <option value="Europe/Moscow">(GMT +03:00) Moscow</option>

                            <option value="Europe/Simferopol">(GMT +03:00) Simferopol</option>

                            <option value="Europe/Volgograd">(GMT +03:00) Volgograd</option>

                            <option value="Europe/Kirov">(GMT +03:00) Kirov</option>

                            <option value="Asia/Riyadh">(GMT +03:00) Riyadh</option>

                            <option value="Africa/Mogadishu">(GMT +03:00) Mogadishu</option>

                            <option value="Africa/Juba">(GMT +03:00) Juba</option>

                            <option value="Europe/Istanbul">(GMT +03:00) Istanbul</option>

                            <option value="Africa/Dar_es_Salaam">(GMT +03:00) Dar es Salaam</option>

                            <option value="Africa/Kampala">(GMT +03:00) Kampala</option>

                            <option value="Asia/Aden">(GMT +03:00) Aden</option>

                            <option value="Indian/Mayotte">(GMT +03:00) Mayotte</option>

                            <option value="Asia/Tehran">(GMT +03:30) Tehran</option>

                            <option value="Asia/Dubai">(GMT +04:00) Dubai</option>

                            <option value="Asia/Yerevan">(GMT +04:00) Yerevan</option>

                            <option value="Asia/Baku">(GMT +04:00) Baku</option>

                            <option value="Asia/Tbilisi">(GMT +04:00) Tbilisi</option>

                            <option value="Indian/Mauritius">(GMT +04:00) Mauritius</option>

                            <option value="Asia/Muscat">(GMT +04:00) Muscat</option>

                            <option value="Indian/Reunion">(GMT +04:00) Reunion</option>

                            <option value="Europe/Astrakhan">(GMT +04:00) Astrakhan</option>

                            <option value="Europe/Saratov">(GMT +04:00) Saratov</option>

                            <option value="Europe/Ulyanovsk">(GMT +04:00) Ulyanovsk</option>

                            <option value="Europe/Samara">(GMT +04:00) Samara</option>

                            <option value="Indian/Mahe">(GMT +04:00) Mahe</option>

                            <option value="Asia/Kabul">(GMT +04:30) Kabul</option>

                            <option value="Antarctica/Mawson">(GMT +05:00) Mawson</option>

                            <option value="Asia/Aqtobe">(GMT +05:00) Aqtobe</option>

                            <option value="Asia/Aqtau">(GMT +05:00) Aqtau</option>

                            <option value="Asia/Atyrau">(GMT +05:00) Atyrau</option>

                            <option value="Asia/Oral">(GMT +05:00) Oral</option>

                            <option value="Indian/Maldives">(GMT +05:00) Maldives</option>

                            <option value="Asia/Karachi">(GMT +05:00) Karachi</option>

                            <option value="Asia/Yekaterinburg">(GMT +05:00) Yekaterinburg</option>

                            <option value="Indian/Kerguelen">(GMT +05:00) Kerguelen</option>

                            <option value="Asia/Dushanbe">(GMT +05:00) Dushanbe</option>

                            <option value="Asia/Ashgabat">(GMT +05:00) Ashgabat</option>

                            <option value="Asia/Samarkand">(GMT +05:00) Samarkand</option>

                            <option value="Asia/Tashkent">(GMT +05:00) Tashkent</option>

                            <option value="Asia/Kolkata">(GMT +05:30) Kolkata</option>

                            <option value="Asia/Colombo">(GMT +05:30) Colombo</option>

                            <option value="Asia/Kathmandu">(GMT +05:45) Kathmandu</option>

                            <option value="Antarctica/Vostok">(GMT +06:00) Vostok</option>

                            <option value="Asia/Dhaka">(GMT +06:00) Dhaka</option>

                            <option value="Asia/Thimphu">(GMT +06:00) Thimphu</option>

                            <option value="Asia/Urumqi">(GMT +06:00) Urumqi</option>

                            <option value="Indian/Chagos">(GMT +06:00) Chagos</option>

                            <option value="Asia/Bishkek">(GMT +06:00) Bishkek</option>

                            <option value="Asia/Almaty">(GMT +06:00) Almaty</option>

                            <option value="Asia/Qyzylorda">(GMT +06:00) Qyzylorda</option>

                            <option value="Asia/Omsk">(GMT +06:00) Omsk</option>

                            <option value="Indian/Cocos">(GMT +06:30) Cocos</option>

                            <option value="Asia/Yangon">(GMT +06:30) Yangon</option>

                            <option value="Antarctica/Davis">(GMT +07:00) Davis</option>

                            <option value="Indian/Christmas">(GMT +07:00) Christmas</option>

                            <option value="Asia/Jakarta">(GMT +07:00) Jakarta</option>

                            <option value="Asia/Pontianak">(GMT +07:00) Pontianak</option>

                            <option value="Asia/Phnom_Penh">(GMT +07:00) Phnom Penh</option>

                            <option value="Asia/Vientiane">(GMT +07:00) Vientiane</option>

                            <option value="Asia/Hovd">(GMT +07:00) Hovd</option>

                            <option value="Asia/Novosibirsk">(GMT +07:00) Novosibirsk</option>

                            <option value="Asia/Barnaul">(GMT +07:00) Barnaul</option>

                            <option value="Asia/Tomsk">(GMT +07:00) Tomsk</option>

                            <option value="Asia/Novokuznetsk">(GMT +07:00) Novokuznetsk</option>

                            <option value="Asia/Krasnoyarsk">(GMT +07:00) Krasnoyarsk</option>

                            <option value="Asia/Bangkok">(GMT +07:00) Bangkok</option>

                            <option value="Asia/Ho_Chi_Minh">(GMT +07:00) Ho Chi Minh</option>

                            <option value="Australia/Perth">(GMT +08:00) Perth</option>

                            <option value="Asia/Brunei">(GMT +08:00) Brunei</option>

                            <option value="Asia/Shanghai">(GMT +08:00) Shanghai</option>

                            <option value="Asia/Hong_Kong">(GMT +08:00) Hong Kong</option>

                            <option value="Asia/Makassar">(GMT +08:00) Makassar</option>

                            <option value="Asia/Ulaanbaatar">(GMT +08:00) Ulaanbaatar</option>

                            <option value="Asia/Choibalsan">(GMT +08:00) Choibalsan</option>

                            <option value="Asia/Macau">(GMT +08:00) Macau</option>

                            <option value="Asia/Kuala_Lumpur">(GMT +08:00) Kuala Lumpur</option>

                            <option value="Asia/Kuching">(GMT +08:00) Kuching</option>

                            <option value="Asia/Manila">(GMT +08:00) Manila</option>

                            <option value="Asia/Irkutsk">(GMT +08:00) Irkutsk</option>

                            <option value="Asia/Singapore">(GMT +08:00) Singapore</option>

                            <option value="Asia/Taipei">(GMT +08:00) Taipei</option>

                            <option value="Asia/Pyongyang">(GMT +08:30) Pyongyang</option>

                            <option value="Australia/Eucla">(GMT +08:45) Eucla</option>

                            <option value="Asia/Jayapura">(GMT +09:00) Jayapura</option>

                            <option value="Asia/Tokyo">(GMT +09:00) Tokyo</option>

                            <option value="Asia/Seoul">(GMT +09:00) Seoul</option>

                            <option value="Pacific/Palau">(GMT +09:00) Palau</option>

                            <option value="Asia/Chita">(GMT +09:00) Chita</option>

                            <option value="Asia/Yakutsk">(GMT +09:00) Yakutsk</option>

                            <option value="Asia/Khandyga">(GMT +09:00) Khandyga</option>

                            <option value="Asia/Dili">(GMT +09:00) Dili</option>

                            <option value="Australia/Broken_Hill">(GMT +09:30) Broken Hill</option>

                            <option value="Australia/Adelaide">(GMT +09:30) Adelaide</option>

                            <option value="Australia/Darwin">(GMT +09:30) Darwin</option>

                            <option value="Antarctica/DumontDUrville">(GMT +10:00) Dumont D'Urville</option>

                            <option value="Australia/Hobart">(GMT +10:00) Hobart</option>

                            <option value="Australia/Currie">(GMT +10:00) Currie</option>

                            <option value="Australia/Melbourne">(GMT +10:00) Melbourne</option>

                            <option value="Australia/Sydney">(GMT +10:00) Sydney</option>

                            <option value="Australia/Brisbane">(GMT +10:00) Brisbane</option>

                            <option value="Australia/Lindeman">(GMT +10:00) Lindeman</option>

                            <option value="Pacific/Chuuk">(GMT +10:00) Chuuk</option>

                            <option value="Pacific/Guam">(GMT +10:00) Guam</option>

                            <option value="Pacific/Saipan">(GMT +10:00) Saipan</option>

                            <option value="Pacific/Port_Moresby">(GMT +10:00) Port Moresby</option>

                            <option value="Asia/Vladivostok">(GMT +10:00) Vladivostok</option>

                            <option value="Asia/Ust-Nera">(GMT +10:00) Ust-Nera</option>

                            <option value="Australia/Lord_Howe">(GMT +10:30) Lord Howe</option>

                            <option value="Antarctica/Casey">(GMT +11:00) Casey</option>

                            <option value="Antarctica/Macquarie">(GMT +11:00) Macquarie</option>

                            <option value="Pacific/Pohnpei">(GMT +11:00) Pohnpei</option>

                            <option value="Pacific/Kosrae">(GMT +11:00) Kosrae</option>

                            <option value="Pacific/Noumea">(GMT +11:00) Noumea</option>

                            <option value="Pacific/Norfolk">(GMT +11:00) Norfolk</option>

                            <option value="Pacific/Bougainville">(GMT +11:00) Bougainville</option>

                            <option value="Asia/Magadan">(GMT +11:00) Magadan</option>

                            <option value="Asia/Sakhalin">(GMT +11:00) Sakhalin</option>

                            <option value="Asia/Srednekolymsk">(GMT +11:00) Srednekolymsk</option>

                            <option value="Pacific/Guadalcanal">(GMT +11:00) Guadalcanal</option>

                            <option value="Pacific/Efate">(GMT +11:00) Efate</option>

                            <option value="Antarctica/McMurdo">(GMT +12:00) McMurdo</option>

                            <option value="Pacific/Fiji">(GMT +12:00) Fiji</option>

                            <option value="Pacific/Tarawa">(GMT +12:00) Tarawa</option>

                            <option value="Pacific/Majuro">(GMT +12:00) Majuro</option>

                            <option value="Pacific/Kwajalein">(GMT +12:00) Kwajalein</option>

                            <option value="Pacific/Nauru">(GMT +12:00) Nauru</option>

                            <option value="Pacific/Auckland">(GMT +12:00) Auckland</option>

                            <option value="Asia/Kamchatka">(GMT +12:00) Kamchatka</option>

                            <option value="Asia/Anadyr">(GMT +12:00) Anadyr</option>

                            <option value="Pacific/Funafuti">(GMT +12:00) Funafuti</option>

                            <option value="Pacific/Wake">(GMT +12:00) Wake</option>

                            <option value="Pacific/Wallis">(GMT +12:00) Wallis</option>

                            <option value="Pacific/Chatham">(GMT +12:45) Chatham</option>

                            <option value="Pacific/Enderbury">(GMT +13:00) Enderbury</option>

                            <option value="Pacific/Fakaofo">(GMT +13:00) Fakaofo</option>

                            <option value="Pacific/Tongatapu">(GMT +13:00) Tongatapu</option>

                            <option value="Pacific/Apia">(GMT +13:00) Apia</option>

                            <option value="Pacific/Kiritimati">(GMT +14:00) Kiritimati</option>
                            
                        </select>

                        <label className={styles.label} htmlFor="currency">Currency</label>
                        <select value={currency} onChange={e => setCurrency(e.target.value)} className={styles.text} required name="currency" id="currency">
                        
                            <option value="USD">United States Dollars</option>
                            <option value="EUR">Euro</option>
                            <option value="GBP">United Kingdom Pounds</option>
                            <option value="DZD">Algeria Dinars</option>
                            <option value="ARP">Argentina Pesos</option>
                            <option value="AUD">Australia Dollars</option>
                            <option value="ATS">Austria Schillings</option>
                            <option value="BSD">Bahamas Dollars</option>
                            <option value="BBD">Barbados Dollars</option>
                            <option value="BEF">Belgium Francs</option>
                            <option value="BMD">Bermuda Dollars</option>
                            <option value="BRR">Brazil Real</option>
                            <option value="BGL">Bulgaria Lev</option>
                            <option value="CAD">Canada Dollars</option>
                            <option value="CLP">Chile Pesos</option>
                            <option value="CNY">China Yuan Renmimbi</option>
                            <option value="CYP">Cyprus Pounds</option>
                            <option value="CSK">Czech Republic Koruna</option>
                            <option value="DKK">Denmark Kroner</option>
                            <option value="NLG">Dutch Guilders</option>
                            <option value="XCD">Eastern Caribbean Dollars</option>
                            <option value="EGP">Egypt Pounds</option>
                            <option value="FJD">Fiji Dollars</option>
                            <option value="FIM">Finland Markka</option>
                            <option value="FRF">France Francs</option>
                            <option value="DEM">Germany Deutsche Marks</option>
                            <option value="XAU">Gold Ounces</option>
                            <option value="GRD">Greece Drachmas</option>
                            <option value="HKD">Hong Kong Dollars</option>
                            <option value="HUF">Hungary Forint</option>
                            <option value="ISK">Iceland Krona</option>
                            <option value="INR">India Rupees</option>
                            <option value="IDR">Indonesia Rupiah</option>
                            <option value="IEP">Ireland Punt</option>
                            <option value="ILS">Israel New Shekels</option>
                            <option value="ITL">Italy Lira</option>
                            <option value="JMD">Jamaica Dollars</option>
                            <option value="JPY">Japan Yen</option>
                            <option value="JOD">Jordan Dinar</option>
                            <option value="KRW">Korea (South) Won</option>
                            <option value="LBP">Lebanon Pounds</option>
                            <option value="LUF">Luxembourg Francs</option>
                            <option value="MYR">Malaysia Ringgit</option>
                            <option value="MXP">Mexico Pesos</option>
                            <option value="NLG">Netherlands Guilders</option>
                            <option value="NZD">New Zealand Dollars</option>
                            <option value="NOK">Norway Kroner</option>
                            <option value="PKR">Pakistan Rupees</option>
                            <option value="XPD">Palladium Ounces</option>
                            <option value="PHP">Philippines Pesos</option>
                            <option value="XPT">Platinum Ounces</option>
                            <option value="PLZ">Poland Zloty</option>
                            <option value="PTE">Portugal Escudo</option>
                            <option value="ROL">Romania Leu</option>
                            <option value="RUR">Russia Rubles</option>
                            <option value="SAR">Saudi Arabia Riyal</option>
                            <option value="XAG">Silver Ounces</option>
                            <option value="SGD">Singapore Dollars</option>
                            <option value="SKK">Slovakia Koruna</option>
                            <option value="ZAR">South Africa Rand</option>
                            <option value="KRW">South Korea Won</option>
                            <option value="ESP">Spain Pesetas</option>
                            <option value="XDR">Special Drawing Right (IMF)</option>
                            <option value="SDD">Sudan Dinar</option>
                            <option value="SEK">Sweden Krona</option>
                            <option value="CHF">Switzerland Francs</option>
                            <option value="TWD">Taiwan Dollars</option>
                            <option value="THB">Thailand Baht</option>
                            <option value="TTD">Trinidad and Tobago Dollars</option>
                            <option value="TRL">Turkey Lira</option>
                            <option value="VEB">Venezuela Bolivar</option>
                            <option value="ZMK">Zambia Kwacha</option>
                            <option value="EUR">Euro</option>
                            <option value="XCD">Eastern Caribbean Dollars</option>
                            <option value="XDR">Special Drawing Right (IMF)</option>
                            <option value="XAG">Silver Ounces</option>
                            <option value="XAU">Gold Ounces</option>
                            <option value="XPD">Palladium Ounces</option>
                            <option value="XPT">Platinum Ounces</option>

                        </select>
                    </section>

                    <section className={`${styles.frame} ${styles.frame_4}`}>
                        <h2 className={styles.sub}>
                            Image
                        </h2>

                        <p className={styles.para}>
                            Add a logo and cover image to be displayed on your webpage.
                        </p>                
                        
                    </section>

                    <section className={`${styles.box} ${styles.box_4}`}>
                        
                        <label className={styles.label} htmlFor="profile">Profile photo</label>
                        <input value={profile} onChange={e => setProfile(e.target.value)} className={styles.text} type="file" id="profile" name="profile" placeholder="Upload" />

                        <label className={styles.label} htmlFor="profile">Add a cover photo</label>
                        <input value={cover} onChange={e => setCover(e.target.value)} className={styles.text} type="file" id="profile" name="cover" placeholder="Upload" />

                    </section>

                    <section className={`${styles.frame} ${styles.frame_5}`}>
                        <h2 className={styles.sub}>
                            Online Links
                        </h2>

                        <p className={styles.para}>
                            Add your company website and social media links for sharing with clients.
                        </p>                
                        
                    </section>

                    <section className={`${styles.box} ${styles.box_5}`}>
                        <label className={styles.label} htmlFor="web">Website</label>
                        <div className={styles.icon} id="web"></div>
                        <input value={website} onChange={e => setWebsite(e.target.value)} className={`${styles.text} ${styles.texty}`} type="url" id="website" name="website" placeholder="www.yoursite.com" />
                        
                        <label className={styles.label} htmlFor="facebook">Facebook</label>
                        <div className={styles.icon} id="facebook"></div>
                        <input value={facebook} onChange={e => setFacebook(e.target.value)} className={`${styles.text} ${styles.texty}`} type="url" id="facebook" name="facebook" placeholder="www.facebook.com/yoursite" />

                        <label className={styles.label} htmlFor="instagram">Instagram</label>
                        <div className={styles.icon} id="instagram"></div>
                        <input value={instagram} onChange={e => setInstagram(e.target.value)} className={`${styles.text} ${styles.texty}`} type="url" id="instagram" name="instagram" placeholder="www.instagram.com/yoursite" />

                        <label className={styles.label} htmlFor="youtube">YouTube</label>
                        <div className={styles.icon} id="youtube"></div>
                        <input value={youtube} onChange={e => setYoutube(e.target.value)} className={`${styles.text} ${styles.texty}`} type="url" id="youtube" name="youtube" placeholder="www.youtube.com/yoursite" />

                    </section>

                    <section className={`${styles.frame} ${styles.frame_6}`}>
                        <h2 className={styles.sub}>
                            Account Status
                        </h2>

                        <p className={styles.para}>
                            Check the plan that you are on and online booking status
                        </p>                
                        
                    </section>

                    <section className={`${styles.box} ${styles.box_6}`}>
                        <p className={styles.label}>Your account is currently under a free plan.</p>
                        <div className={`${styles.text} ${styles.delete}`}>Delete account</div>
                    </section>
                </div>
                <input type="submit" value="Save" className={styles.button}></input>
            </form>

           
        </main>
    )
}