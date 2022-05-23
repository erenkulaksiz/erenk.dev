
// Next
import Head from 'next/head';
import Link from 'next/link';

const Privacy = (props) => {
    return (
        <main className="flex flex-col dark:text-white text-black relative overflow-hidden"  >
            <Head>
                <title>privacy policy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <p><span>We receive from your device and store on our servers the following data:</span></p>
            <ul>
                <li><span>Token that allows you to send you notifications.</span></li>
                <li><span>Language</span></li>
                <li><span>Time Zone</span></li>
                <li><span>A country</span></li>
            </ul>
            <p><span>What data can be obtained:</span></p>
            <ul>
                <li><span>Time intervals</span></li>
                <li><span>Name</span></li>
            </ul>

            <h3><span>How data is used</span></h3>
            <p><span>These data are necessary for the stable and correct operation of the application. And also for analytics and improvement of our application.</span></p>
            <h3><span>Data transfer to third parties.</span></h3>
            <p><span>User data is private and not transferred to third parties.</span></p>
            <h3><span>Legality of data collection</span></h3>
            <p><span>The user of the application confirms that any data related to the phone number used in the Application belongs to the user legally. The user guarantees that the data processing does not violate the rights of third parties and any use of the Application is carried out with the consent of the user and on his direct instructions.</span></p>
            <h3><span>The amount of data processed.</span></h3>
            <p><span>The user has read the functionality of the application and agrees to the processing of data to the extent to which they are used in the Application</span></p>
            <h3><span>Success Rate</span></h3>
            <p><span>The application has 99% success rate. This is the highest rate among all similar apps.</span></p>
            <h3><span>Shelf life</span></h3>
            <p><span>We delete activity data older than 10 days. You can download reports.</span></p>
            <h3><span>Consent to the processing of your data</span></h3>
            <p><span>By accepting these rules you confirm your acceptance of the Rules and give the unconditional right to the Application to use Your data for processing purposes, as well as the right to request and process data from other services.</span></p>
            <p><span>Unsubscribing means that your consent is revoked, which obliges the Application to delete your data.</span></p>
            <p><span><em>* This app is not associated with or affiliated with any app. You will not receive any access permission.</em></span></p>
            <p><span><strong>Last updated: 01 Apr. 2021</strong></span></p>
        </main >
    )
}

export default Privacy;