import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PrivacyPage() {
  return (
    <>
      <Navbar/>

      {/* Privacy Policy  */}
     <div>
        <h1 className="text-5xl font-bold text-[#2E4057] p-16 pb-8 text-center">Privacy Policy</h1>
     </div>

     <div className="max-w-xl mx-auto py-4 flex flex-col gap-6">
        <p>At Cube, we recognize the importance of privacy and are dedicated to safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide when using our electronic voting platform.</p>

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Information We Collect</h2>
        <ul className="list-disc space-y-3">
            <li>
                Personal Information: When you register an account with us, we may collect personal details such as your name, email address, and contact information. This information is necessary for account creation and authentication purposes.
            </li>
            <li>
                Voting Data: During the electronic voting process, we collect and store data related to your votes. This includes information about the elections or polls you participate in and your voting choices.
            </li>
            <li>
                Device Information: We automatically collect certain information about the devices you use to access our platform. This may include your IP address, browser type, operating system, and device identifiers. We use this information to enhance the security of our platform and improve user experience.
            </li>
        </ul>

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">How We Use Your Information</h2>
        <ul className="list-disc space-y-3">
            <li>
                Facilitating Voting: Your information is essential for facilitating the electronic voting process. We use it to verify your identity, ensure the accuracy of voting results, and maintain the integrity of the platform.
            </li>
            <li>
                Communication: We may use your contact information to send you important updates, notifications, and announcements regarding your account or upcoming elections. These communications are necessary for providing you with a seamless voting experience.
            </li>
            <li>
                Improvement of Services: We analyze the information we collect to understand user behavior and preferences. This analysis helps us enhance the functionality and usability of our platform, ensuring that we meet the evolving needs of our users.
            </li>
        </ul>

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Information Sharing</h2>
        <ul className="list-disc space-y-3">
            <li>Third-party Service Providers: We may share your information with trusted third-party service providers who assist us in operating our platform, processing payments, conducting audits, or performing other essential functions. These service providers are contractually obligated to adhere to strict confidentiality and data protection standards.</li>
            <li>
                Legal Requirements: In certain circumstances, we may disclose your information if required to do so by law or in response to valid legal requests, such as court orders or subpoenas.
            </li>
        </ul>


        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Data Security</h2>
        <p>We employ industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, firewalls, access controls, and regular security audits. However, it's important to note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

        

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Data Retention</h2>
        <p>
            We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. If you wish to delete your account and associated data, you can do so by contacting us directly.
        </p>        

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Your Rights</h2>
        <ul className="list-disc space-y-3">
            <li>
                Access and Control: You have the right to access, update, or delete your personal information at any time. You can manage your account settings or exercise your data rights by contacting our support team.
            </li>
            <li>
                Opt-Out: If you no longer wish to receive promotional emails or marketing communications from us, you can opt-out by following the instructions provided in the emails or contacting us directly.
            </li>
        </ul>

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Children's Policy</h2>
        <p>
            Our platform is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately so that we can take appropriate action.
        </p>

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Changes to This Privacy Policy</h2>
        <p>
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
        </p>
     </div>

      <Footer/>
    </>
  )
}

export default PrivacyPage
