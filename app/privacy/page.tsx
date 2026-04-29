import { SubpageNavbar } from '@/components/SubpageNavbar';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Qunigma',
  description: 'Qunigma Privacy Policy — how we collect, use, and protect your personal data in compliance with GDPR.',
};

export default function PrivacyPage() {
  return (
    <>
      <SubpageNavbar />
      <main className="flex flex-col w-full bg-[#F6F2EA] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 pt-[140px] pb-24">
          <h1 className="text-[36px] md:text-[48px] font-bold text-gray-900 mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-gray-500 text-[14px] mb-12">Last updated: April 2026</p>

          <div className="prose prose-gray max-w-none space-y-10 text-[16px] text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">1. Data Controller</h2>
              <p>
                The data controller for personal data collected through this website is Qunigma. Contact: <a href="mailto:privacy@qunigma.ai" className="text-purple-600 hover:underline">privacy@qunigma.ai</a>.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">2. What Data We Collect</h2>
              <p>We may collect the following categories of personal data:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Contact data</strong>: name, email address, company name — when you submit a contact form or request an analysis.</li>
                <li><strong>Usage data</strong>: IP address, browser type, pages visited, time spent — collected automatically via analytics tools.</li>
                <li><strong>Communication data</strong>: content of messages you send us via email or forms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">3. Legal Basis for Processing</h2>
              <p>We process your personal data on the following legal bases under GDPR:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Consent</strong> (Art. 6(1)(a)) — when you submit a form and explicitly agree to being contacted.</li>
                <li><strong>Legitimate interests</strong> (Art. 6(1)(f)) — for analytics and improving our services.</li>
                <li><strong>Contract performance</strong> (Art. 6(1)(b)) — when processing is necessary to fulfil a contractual obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">4. How We Use Your Data</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding to enquiries and delivering requested analyses</li>
                <li>Sending relevant information about our services (with your consent)</li>
                <li>Improving website performance and user experience</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">5. Data Storage and Transfers</h2>
              <p>
                Qunigma operates with EU-sovereign infrastructure. Your data is stored within the European Union and is not transferred to third countries. We do not use services subject to the US CLOUD Act for data storage or processing.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">6. Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary for the purposes described in this policy, or as required by applicable law. Contact form data is retained for a maximum of 24 months unless you request earlier deletion.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">7. Your Rights</h2>
              <p>Under GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Right of access</strong> — request a copy of the data we hold about you</li>
                <li><strong>Right to rectification</strong> — correct inaccurate or incomplete data</li>
                <li><strong>Right to erasure</strong> — request deletion of your personal data</li>
                <li><strong>Right to restriction</strong> — limit how we process your data</li>
                <li><strong>Right to data portability</strong> — receive your data in a structured, machine-readable format</li>
                <li><strong>Right to object</strong> — object to processing based on legitimate interests</li>
                <li><strong>Right to withdraw consent</strong> — at any time, without affecting prior processing</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:privacy@qunigma.ai" className="text-purple-600 hover:underline">privacy@qunigma.ai</a>.</p>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">8. Cookies and Analytics</h2>
              <p>
                This website may use cookies and analytics tools to understand how visitors interact with our content. We use this information solely to improve the website. You may disable cookies through your browser settings at any time.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">9. Third-Party Services</h2>
              <p>
                We do not sell your data to third parties. We may share data with trusted service providers acting as data processors, strictly for the purposes described in this policy and under GDPR-compliant agreements.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-bold text-gray-900 mb-3">10. Contact and Complaints</h2>
              <p>
                For any privacy-related questions, contact our Data Protection Officer at <a href="mailto:privacy@qunigma.ai" className="text-purple-600 hover:underline">privacy@qunigma.ai</a>.
              </p>
              <p className="mt-3">
                You also have the right to lodge a complaint with your national supervisory authority. In Poland: <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">UODO (uodo.gov.pl)</a>.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
