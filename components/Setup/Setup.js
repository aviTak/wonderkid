import styles from './Setup.module.css';
import Link from 'next/link';

export default function Setup(){
    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>
                Settings
            </h1>

            <hr className={styles.line} />

            <div className={`${styles.boxing} ${styles.clearfix}`}>
                <section className={`${styles.box} ${styles.box_1}`}>
                    <h2 className={styles.sub}>
                        General
                    </h2>

                    
                    <Link href='/setup/business-setup'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Business Setup
                            </h3>

                            <p className={styles.para}>
                                Manage basic business details like name, time zone.
                            </p>

                            <hr className={styles.liny} />
                        </a>
                    </Link>
                   
                    <Link href='/setup/location'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Location
                            </h3>

                            <p className={styles.para}>
                                Manage multiple outlets for your business.
                            </p>

                        </a>
                    </Link>
                    
                </section>

                <section className={`${styles.box} ${styles.box_2}`}>
                    <h2 className={styles.sub}>
                        Payments
                    </h2>

                    
                    <Link href='/setup/payment-methods'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Payment Methods
                            </h3>

                            <p className={styles.para}>
                                Setup different payment options for customers to make onling booking.
                            </p>

                            <hr className={styles.liny} />
                        </a>
                    </Link>
                   
                    <Link href='/setup/taxes'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Taxes
                            </h3>

                            <p className={styles.para}>
                                Manage tax rates that apply to items sold at checkout.
                            </p>

                            <hr className={styles.liny} />
                        </a>
                    </Link>

                    <Link href='/setup/invoice-template'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Invoice Template
                            </h3>

                            <p className={styles.para}>
                                Configure details displayed on invoices issued to your clients.
                            </p>

                        </a>
                    </Link>
                </section>

                <section className={`${styles.box} ${styles.box_3}`}>
                    <h2 className={styles.sub}>
                        Team
                    </h2>

                    
                    <Link href='/setup/team-schedule'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Team Schedule
                            </h3>

                            <p className={styles.para}>
                                Build a systematic work schedule for your team.
                            </p>

                            <hr className={styles.liny} />
                        </a>
                    </Link>
                   
                    <Link href='/setup/closed-dates'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Closed Dates
                            </h3>

                            <p className={styles.para}>
                                Set the dates on your calendar when you are closed.
                            </p>

                            <hr className={styles.liny} />
                        </a>
                    </Link>

                    <Link href='/setup/members'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Members
                            </h3>

                            <p className={styles.para}>
                                Add or remove members to your team.
                            </p>

                            <hr className={styles.liny} />
                        </a>
                    </Link>

                    <Link href='/setup/permissions'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Permissions
                            </h3>

                            <p className={styles.para}>
                                Manage permissions and restrictions to any member of your team.
                            </p>

                        </a>
                    </Link>

                </section>

                <section className={`${styles.box} ${styles.box_4}`}>
                    <h2 className={styles.sub}>
                        Communication
                    </h2>

                    
                    <Link href='/setup/notifications'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Notifications
                            </h3>

                            <p className={styles.para}>
                                Manage updates for staff and consumers.
                            </p>

                            <hr className={styles.liny} />
                        </a>
                    </Link>
                   
                    <Link href='/setup/booking-form'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Booking Form
                            </h3>

                            <p className={styles.para}>
                                Manage the customer details required for each booking.
                            </p>

                            <hr className={styles.liny} />
                        </a>
                    </Link>

                    <Link href='/setup/cancellation-policy'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Cancellation Policy
                            </h3>

                            <p className={styles.para}>
                                State the cancellation policy and the terms and conditions.
                            </p>

                            <hr className={styles.liny} />
                        </a>
                    </Link>

                    <Link href='/setup/cancellation-reasons'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Cancellation Reasons
                            </h3>

                            <p className={styles.para}>
                                Ask why customer cancelled a scheduled class.
                            </p>

                            <hr className={styles.liny} />
                        </a>
                    </Link>

                    <Link href='/setup/manage-cancellations'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Manage Cancellations
                            </h3>

                            <p className={styles.para}>
                                Set up guideline for cancellation. Ask customer why they cancelled.
                            </p>

                        </a>
                    </Link>

                </section>

                <section className={`${styles.box} ${styles.box_5}`}>
                    <h2 className={styles.sub}>
                        User Profile
                    </h2>

                    
                    <Link href='/setup/personal-deatails'>
                        <a className={styles.link}>
                            <h3 className={styles.tertiary}>
                                Personal Details
                            </h3>

                            <p className={styles.para}>
                                Provide your personal details or change your password.
                            </p>

                        </a>
                    </Link>
                    
                </section>
            </div>

           
        </main>
    )
}