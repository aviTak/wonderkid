import styles from './Register.module.css'
import SignupComplete from '../SignupComplete/SignupComplete'
import Link from 'next/link';
import {useEffect, useState} from 'react';

// const eye = '<svg width="2.4rem" x="0px" y="0px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612; fill: #65b1ec;" xml:space="preserve"><g><g><path d="M609.608,315.426c3.19-5.874,3.19-12.979,0-18.853c-58.464-107.643-172.5-180.72-303.607-180.72S60.857,188.931,2.393,296.573c-3.19,5.874-3.19,12.979,0,18.853C60.858,423.069,174.892,496.147,306,496.147S551.143,423.069,609.608,315.426z M306,451.855c-80.554,0-145.855-65.302-145.855-145.855S225.446,160.144,306,160.144			S451.856,225.446,451.856,306S386.554,451.855,306,451.855z"/><path d="M306,231.67c-6.136,0-12.095,0.749-17.798,2.15c5.841,6.76,9.383,15.563,9.383,25.198c0,21.3-17.267,38.568-38.568,38.568c-9.635,0-18.438-3.541-25.198-9.383c-1.401,5.703-2.15,11.662-2.15,17.798c0,41.052,33.279,74.33,74.33,74.33			s74.33-33.279,74.33-74.33S347.052,231.67,306,231.67z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
const google = '<svg height="1.6rem" height="24px" viewBox="0 0 24 24"><defs><clipPath id="clip-path"><path id="a" d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z" fill="none"/></clipPath></defs><rect id="view-box" width="24" height="24" fill="none"/><g id="Logo" transform="translate(3 3)"><g id="Clipped"><path id="a-5" data-name="a" ="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z" fill="none"/><g id="Clipped-2" data-name="Clipped" clip-path="url(#clip-path)"><path id="Path" d="M0,10.636V0L7.116,5.318Z" transform="translate(-0.837 3.682)" fill="#fbbc05"/></g></g><g id="Clipped-3" data-name="Clipped"><path id="a-6" data-name="a" d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z" fill="none"/><g id="Clipped-4" data-name="Clipped" clip-path="url(#clip-path)"><path id="Path-2" data-name="Path" d="M0,4.5,7.116,9.818l2.93-2.5,10.047-1.6V0H0Z" transform="translate(-0.837 -0.818)" fill="#ea4335"/></g></g><g id="Clipped-5" data-name="Clipped"><path id="a-7" data-name="a" d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z" fill="none"/><g id="Clipped-6" data-name="Clipped" clip-path="url(#clip-path)"><path id="Path-3" data-name="Path" d="M0,15.136,12.558,5.727l3.307.409L20.093,0V19.636H0Z" transform="translate(-0.837 -0.818)" fill="#34a853"/></g></g><g id="Clipped-7" data-name="Clipped"><path id="a-8" data-name="a" d="M17.791,7.364H9.209v3.477h4.94c-.46,2.209-2.386,3.477-4.94,3.477A5.37,5.37,0,0,1,3.767,9,5.442,5.442,0,0,1,12.6,4.868L15.279,2.25A9.29,9.29,0,0,0,9.209,0,9.08,9.08,0,0,0,0,9a9.08,9.08,0,0,0,9.209,9A8.586,8.586,0,0,0,18,9,7.306,7.306,0,0,0,17.791,7.364Z" fill="none"/><g id="Clipped-8" data-name="Clipped" clip-path="url(#clip-path)"><path id="Path-4" data-name="Path" d="M14.651,15.136,1.674,5.318,0,4.091,14.651,0Z" transform="translate(4.605 3.682)" fill="#4285f4"/></g></g></g></svg>'

export default function Register({type}){

    const [complete, setComplete] = useState(false);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');

    useEffect(() => {
        try{
            document.getElementById('photo').innerHTML = google;
        } catch(e){}
    }, [])

    const submit = e => {
        e.preventDefault();
        setComplete(true);
    }

    if(complete){
        return(
            <SignupComplete type={type} />
        )
    } else {

        return (
            <main className={styles.container}>
                <h1 className={styles.heading}>
                    We're {' '}
                    <span className={styles.underline}>so glad</span> {' '}
                    that you are joining us!
                </h1>

                <form className={styles.form} onSubmit={submit}>
                    <h2 className={styles.login}>
                        Create a free {' '} {type==='Booker'? "Booker's" : "Partner's"} {' '} account
                    </h2>

                    <label className={`${styles.label} ${styles.new_label1}`} htmlFor="name">Name</label>
                    
                    <label className={`${styles.label} ${styles.new_label2}`} htmlFor="surname">Last name</label>

                    <input value={firstName} onChange={e => setFirstName(e.target.value)} required className={`${styles.text} ${styles.new_text1}`} type="text" id="name" name="name" placeholder="First name" />

                    <label className={`${styles.label} ${styles.hide}`} htmlFor="surname">Last name</label>

                    <input value={lastName} onChange={e => setLastName(e.target.value)} required className={`${styles.text} ${styles.new_text2}`} type="text" id="surname" name="surname" placeholder="Last name" />

                    <label className={styles.label} htmlFor="email">Email address</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} required className={styles.text} type="email" id="email" name="email" placeholder="Email address" />

                    <label className={styles.label} htmlFor="password">Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} required className={styles.text} type="password" id="password" name="password" placeholder="Password" />

                    <label className={styles.label} htmlFor="phone">Phone number (optional)</label>
                    
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

                    <input required type="checkbox" name="agree" id="agree"></input>
                    {' '}
                    <label className={`${styles.label} ${styles.check_label}`} htmlFor="agree">I agree to the privacy policy, website terms and conditions and partner terms.</label>

                    <Link href="/forgot-password">
                        <a className={`${styles.link} ${styles.new_link}`}>
                            Forgot password?
                        </a>
                    </Link>

                    <input type="submit" value="Sign up" className={styles.button}></input>
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
                    Sign up using Google
                </a>

                <p className={styles.first_time}>
                    Already have an account? {' '}
                    <Link href={type==='Booker'? '/login-booker' : '/login-partner'}>
                        <a className={`${styles.link} ${styles.extra_link}`}>
                            Login
                        </a>
                    </Link>
                </p>

                <p className={styles.partner}>
                    {type==='Booker'? 'Are you one of our amazing partners?' : 'Are you one of our super cool bookers?'}
                    <br/>
                    <Link href={type==='Booker'? '/register-partner' : '/register-booker'}>
                        <a className={`${styles.link} ${styles.extra_link} ${styles.special_link}`}>
                            Click here to sign up then!
                        </a>
                    </Link>
                </p>
            </main>
        )
    }
}