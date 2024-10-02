import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Terms() {
  return (
    <>
      <Navbar/>

      {/* Terms & Conditions */}
    <div>
        <h1 className="text-5xl font-bold text-[#2E4057] p-16 pb-8 text-center">Terms & Conditions</h1>
     </div>

     <div className="max-w-xl mx-auto py-4 flex flex-col gap-6">
        <p>Welcome to Cube! These Terms and Conditions govern your access to and use of our electronic voting platform. By using our platform, you agree to comply with these terms and conditions in their entirety. If you do not agree with any part of these terms, please do not use our platform.</p>

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Registration & Account Security</h2>
        <ul className="list-disc space-y-3">
            <li>
                You may be required to register an account to access certain features of our platform. When registering, you agree to provide accurate, current, and complete information about yourself.
            </li>
            <li>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
            </li>
            <li>
                We reserve the right to suspend or terminate your account at any time if we believe that you have violated these Terms and Conditions or engaged in fraudulent, abusive, or illegal activities.
            </li>
        </ul>

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Use Of The Platform</h2>
        <ul className="list-disc space-y-3">
            <li>
                Our platform is intended for lawful purposes only. You agree not to use our platform for any illegal, unauthorized, or prohibited activities.
            </li>
            <li>
                You agree to abide by all applicable laws and regulations when using our platform, including but not limited to laws governing elections, voting rights, and data protection.
            </li>
            <li>
                You acknowledge that electronic voting may have limitations and risks, and you use our platform at your own risk. We are not responsible for any errors, omissions, or inaccuracies in the voting process.
            </li>
        </ul>

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Intellectual Property</h2>
        <ul className="list-disc space-y-3">
            <li>
                All content and materials available on our platform, including but not limited to text, graphics, logos, images, and software, are the property of [E-Voting Platform Name] or its licensors and are protected by intellectual property laws.
            </li>
            <li>
                You are granted a limited, non-exclusive, non-transferable license to access and use our platform and its content for personal, non-commercial purposes only. Any unauthorized use, reproduction, or distribution of our content is strictly prohibited.
            </li>
        </ul>

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">User Content</h2>
        <ul className="list-disc space-y-3">
            <li>
                You may have the opportunity to submit or upload content to our platform, such as comments, feedback, or voting choices. By submitting content, you grant us a non-exclusive, royalty-free, worldwide, perpetual license to use, reproduce, modify, adapt, publish, and distribute your content in any form and for any purpose.
            </li>
            <li>
                You agree not to submit any content that is unlawful, defamatory, libelous, obscene, or otherwise objectionable. We reserve the right to remove or edit any user content that violates these Terms and Conditions.
            </li>
        </ul>

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Limitations Of Liability</h2>
        <p>
            In no event shall Cube, its affiliates, directors, officers, employees, agents, or licensors be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of our platform.
        </p>

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Indemnification</h2>
        <p>
            You agree to indemnify and hold harmless [E-Voting Platform Name], its affiliates, directors, officers, employees, agents, and licensors from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way related to your use of our platform or violation of these Terms and Conditions.
        </p>

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Governing Laws</h2>
        <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
        </p>

        <h2 className="text-[#2E4057] text-xl font-bold underline underline-offset-4">Changes to Terms and Conditions</h2>
        <p>
            We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting the updated Terms and Conditions on our platform. It is your responsibility to review these Terms and Conditions periodically for changes.
        </p>

    </div>

      <Footer/>
    </>
  )
}

export default Terms
