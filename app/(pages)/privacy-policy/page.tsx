import Link from 'next/link'
import React from 'react'

export default function PrivacyPage() {
  return (
    <div className='py-10 px-4 md:px-10 space-y-4'>
      {/* HEADER */}
      <h2 className='font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand'>
        PRIVACY POLICY
      </h2>
      <p className='font-semibold text-sm md:text-base'>
        Last Updated: October 10, 2025
      </p>

      {/* OVERVIEW */}
      <h4 className='text-lg md:text-xl lg:text-2xl font-black text-brand'>OVERVIEW</h4>
      <p className='font-semibold text-sm md:text-base'>
        This Privacy Policy (“Policy”) explains how HYP3 Labs, LLC, operating as HYP3, and our affiliates (“HYP3,” “we,” “our,” or “us”) collect, use, and share your personal information when you visit our website HYP3.gg or use any of our related products and services (collectively, the “Services”).
      </p>
      <p className='font-semibold text-sm md:text-base'>
        This Policy does not cover personal information we collect from employees or job applicants. By using our Services, you agree to this Policy and to our Terms of Service.
      </p>

      <div className='h-0.5 w-full bg-brand' />

      {/* TABLE OF CONTENTS */}
      <h4 className='text-lg md:text-xl lg:text-2xl font-black'>TABLE OF CONTENTS</h4>
      <ul className='space-y-1'>
        {[
          { title: "What Information We Collect", id: "information-we-collect" },
          { title: "How We Use Your Information", id: "how-we-use-information" },
          { title: "How We Share Information", id: "how-we-share-information" },
          { title: "Cookies & Tracking Technologies", id: "cookies-tracking-technologies" },
          { title: "Third-Party Links", id: "third-party-links" },
          { title: "User-Generated Content", id: "user-generated-content" },
          { title: "Your Choices & Rights", id: "your-choices-rights" },
          { title: "Children’s Privacy", id: "childrens-privacy" },
          { title: "Data Security", id: "data-security" },
          { title: "Policy Updates", id: "policy-updates" },
          { title: "Contact Information", id: "contact-information" },
        ].map((item, i) => (
          <li key={i} className='flex items-center gap-1 font-semibold text-brand'>
            <p>{i + 1}.</p>
            <Link
              href={`#${item.id}`}
              className='text-sm md:text-base block underline underline-offset-4 scroll-smooth hover:opacity-80'
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className='h-0.5 w-full bg-brand' />

      {/* 1. INFORMATION WE COLLECT */}
      <section id='information-we-collect'>
        <h4 className='text-lg md:text-xl lg:text-2xl font-black text-brand'>
          1. INFORMATION WE COLLECT
        </h4>

        <h5 className='text-base md:text-lg lg:text-xl font-extrabold'>
          Information You Provide Directly
        </h5>
        <p className='font-semibold text-sm md:text-base'>
          Depending on how you interact with HYP3, we may collect:
        </p>
        <ul className='list-inside list-disc ml-4'>
          {[
            'Identifiers & Contact Details: Your name, email address, phone number, and shipping address.',
            'Account Information: Username, password, profile image, and other details you use to create or access your account.',
            'Purchase & Transaction Data: Order history, items purchased, and usage activity within our Services.',
            'Messages & Submissions: Any content you send us, including chat messages, customer support requests, photos, videos, or feedback.',
            'Audio & Call Data: If you call our support team, your conversation may be recorded for training or security purposes.',
            'Preferences: Game or collection preferences, wishlist items, and communication settings.',
            'Surveys & Reviews: Information you share in online forms, surveys, or public reviews.',
          ].map((item, i) => (
            <li key={i} className='font-semibold text-sm md:text-base'>{item}</li>
          ))}
        </ul>

        <h5 className='text-base md:text-lg lg:text-xl font-extrabold'>
          Information Collected Automatically
        </h5>
        <p className='font-semibold text-sm md:text-base'>
          When you visit our site or use our Services, we may automatically collect:
        </p>
        <ul className='list-inside list-disc ml-4'>
          {[
            'Device & Technical Data: IP address, browser type, operating system, device model, and unique identifiers.',
            'Usage Data: Pages viewed, time on site, clicks, referring URLs, and other browsing patterns. This data is gathered using cookies, analytics tools, and similar technologies (see “Cookies & Tracking” below).',
          ].map((item, i) => (
            <li key={i} className='font-semibold text-sm md:text-base'>{item}</li>
          ))}
        </ul>

        <h5 className='text-base md:text-lg lg:text-xl font-extrabold'>
          Information from Other Sources
        </h5>
        <p className='font-semibold text-sm md:text-base'>
          We may receive personal information about you from:
        </p>
        <ul className='list-inside list-disc ml-4'>
          {[
            'Our affiliates or business partners',
            'Payment processors and service providers',
            'Marketing and analytics vendors',
            'Public sources, such as social media profiles or government records',
          ].map((item, i) => (
            <li key={i} className='font-semibold text-sm md:text-base'>{item}</li>
          ))}
        </ul>
      </section>

      <div className='h-0.5 w-full bg-brand' />

      {/* 2. HOW WE USE INFORMATION */}
      <section id='how-we-use-information'>
        <h4 className='text-lg md:text-xl lg:text-2xl font-black text-brand'>
          2. HOW WE USE INFORMATION
        </h4>
        <p className='font-semibold text-sm md:text-base'>
          We use the information we collect for purposes such as:
        </p>
        <ul className='list-inside list-disc ml-4'>
          {[
            'Operating Our Business: Managing, maintaining, and improving our Services.',
            'Order Fulfillment: Processing payments, shipments, and customer requests.',
            'Customer Support: Responding to your inquiries and providing technical or product assistance.',
            'Product Improvement: Analyzing how users engage with our Services to enhance features and usability.',
            'Marketing & Promotions: Sending updates, offers, and personalized recommendations you might find interesting.',
            'Fraud Prevention & Security: Detecting, preventing, and addressing potential security or fraudulent activity.',
            'Legal & Compliance: Meeting legal obligations, enforcing policies, and responding to lawful requests.',
            'Research & Analytics: Understanding trends and preferences to improve HYP3’s offerings.',
            'Other Uses: Any purpose you authorize or that we disclose at the time of collection.',
          ].map((item, i) => (
            <li key={i} className='font-semibold text-sm md:text-base'>{item}</li>
          ))}
        </ul>
      </section>

      <div className='h-0.5 w-full bg-brand' />

      {/* 3. HOW WE SHARE INFORMATION */}
      <section id='how-we-share-information'>
        <h4 className='text-lg md:text-xl lg:text-2xl font-black text-brand'>
          3. HOW WE SHARE INFORMATION
        </h4>
        <p className='font-semibold text-sm md:text-base'>
          We may share personal information as follows:
        </p>
        <ul className='list-inside list-disc ml-4'>
          {[
            'Service Providers: With vendors who help us operate HYP3 (hosting, payments, analytics, customer support).',
            'Marketing Partners: With advertising or promotional partners to deliver relevant campaigns or offers.',
            'Business Transfers: If we’re involved in a merger, sale, or restructuring, your data may be transferred as part of that transaction.',
            'Legal Compliance: When required by law, subpoena, or court order, or to protect the rights and safety of HYP3, our users, or others.',
            'Security & Fraud Prevention: To detect or prevent illegal or unauthorized activity.',
            'Aggregated or De-identified Data: We may share non-identifiable data for analytics, research, or marketing purposes.',
            'With Your Consent: When you direct us to share information or give explicit permission.',
          ].map((item, i) => (
            <li key={i} className='font-semibold text-sm md:text-base'>{item}</li>
          ))}
        </ul>
      </section>

      <div className='h-0.5 w-full bg-brand' />

      {/* 4. COOKIES */}
      <section id='cookies-tracking-technologies'>
        <h4 className='text-lg md:text-xl lg:text-2xl font-black text-brand'>
          4. COOKIES & TRACKING TECHNOLOGIES
        </h4>
        <p className='font-semibold text-sm md:text-base'>
          We and our partners use cookies, pixels, tags, and similar tools to gather data on how users interact with HYP3.gg. These technologies help us:
        </p>
        <ul className='list-inside list-disc ml-4'>
          {[
            'Analyze performance and traffic patterns',
            'Personalize your experience',
            'Deliver relevant ads and promotions',
            'Improve functionality and security',
          ].map((item, i) => (
            <li key={i} className='font-semibold text-sm md:text-base'>{item}</li>
          ))}
        </ul>
        <p className='font-semibold text-sm md:text-base'>
          Analytics Tools: We use services such as Google Analytics, Mixpanel, and Meta Pixel to measure usage and performance. You can learn more about how Google uses your data at{' '}
          <Link href='https://www.google.com/policies/privacy/partners/' className='text-brand underline underline-offset-2'>
            https://www.google.com/policies/privacy/partners/
          </Link>.
        </p>
        <p className='font-semibold text-sm md:text-base'>
          Payments: We process payments via Stripe, which may collect device and transaction data for fraud detection and service improvement. Read Stripe’s Privacy Policy at{' '}
          <Link href='https://stripe.com/privacy' className='text-brand underline underline-offset-2'>
            https://stripe.com/privacy
          </Link>.
        </p>
        <p className='font-semibold text-sm md:text-base'>
          Do Not Track: Our site currently does not respond to browser-based “Do Not Track” signals.
        </p>
      </section>

      <div className='h-0.5 w-full bg-brand' />

      {/* 5. THIRD-PARTY LINKS */}
      <section id='third-party-links'>
        <h4 className='text-lg md:text-xl lg:text-2xl font-black text-brand'>5. THIRD-PARTY LINKS</h4>
        <p className='font-semibold text-sm md:text-base'>
          HYP3.gg may include links to other websites or services. We are not responsible for the privacy practices or content of these third parties. Please review their respective privacy policies.
        </p>
      </section>

      <div className='h-0.5 w-full bg-brand' />

      {/* 6. USER-GENERATED CONTENT */}
      <section id='user-generated-content'>
        <h4 className='text-lg md:text-xl lg:text-2xl font-black text-brand'>6. USER-GENERATED CONTENT</h4>
        <p className='font-semibold text-sm md:text-base'>
          Our Services may allow you to post comments, photos, reviews, or other materials. Any information you share publicly can be viewed and shared by others. Please avoid posting personal or sensitive data.
        </p>
      </section>

      <div className='h-0.5 w-full bg-brand' />

      {/* 7. YOUR CHOICES & RIGHTS */}
      <section id='your-choices-rights'>
        <h4 className='text-lg md:text-xl lg:text-2xl font-black text-brand'>7. YOUR CHOICES & RIGHTS</h4>
        <p className='font-semibold text-sm md:text-base'>You have several ways to manage your privacy:</p>
        <ul className='list-inside list-disc ml-4'>
          {[
            'Cookies: Adjust your browser settings to block or delete cookies.',
            'Marketing Emails: Unsubscribe from promotional emails by clicking the “unsubscribe” link or replying “STOP” to text messages.',
            'Account Information: Access or update your account details anytime by logging in or contacting support.',
          ].map((item, i) => (
            <li key={i} className='font-semibold text-sm md:text-base'>{item}</li>
          ))}
          <li className='font-semibold text-sm md:text-base'>
            Ad Preferences: In the U.S., opt out of targeted advertising via{' '}
            <Link className='text-brand underline underline-offset-2' href='https://www.aboutads.info/choices'>
              aboutads.info/choices
            </Link>.
          </li>
        </ul>
      </section>

      <div className='h-0.5 w-full bg-brand' />

      {/* 8. CHILDREN’S PRIVACY */}
      <section id='childrens-privacy'>
        <h4 className='text-lg md:text-xl lg:text-2xl font-black text-brand'>8. CHILDREN’S PRIVACY</h4>
        <p className='font-semibold text-sm md:text-base'>
          Our Services are intended for users 13 years or older. We do not knowingly collect personal data from children. If you believe a child has provided us their information, please contact us so we can delete it.
        </p>
      </section>

      <div className='h-0.5 w-full bg-brand' />

      {/* 9. DATA SECURITY */}
      <section id='data-security'>
        <h4 className='text-lg md:text-xl lg:text-2xl font-black text-brand'>9. DATA SECURITY</h4>
        <p className='font-semibold text-sm md:text-base'>
          We maintain safeguards to help protect your personal information. However, no online system is completely secure, and we cannot guarantee absolute protection against unauthorized access or misuse.
        </p>
      </section>

      <div className='h-0.5 w-full bg-brand' />

      {/* 10. UPDATES TO POLICY */}
      <section id='policy-updates'>
        <h4 className='text-lg md:text-xl lg:text-2xl font-black text-brand'>10. UPDATES TO POLICY</h4>
        <p className='font-semibold text-sm md:text-base'>
          We may revise this Policy periodically. When we make updates, we will post the new version on this page and update the “Last Updated” date. We encourage you to check this page regularly for the latest version.
        </p>
      </section>

      <div className='h-0.5 w-full bg-brand' />

      {/* 11. CONTACT INFORMATION */}
      <section id='contact-information'>
        <h4 className='text-lg md:text-xl lg:text-2xl font-black text-brand'>11. CONTACT US</h4>
        <p className='font-semibold text-sm md:text-base'>
          If you have questions or concerns about this Privacy Policy, please contact us at:{' '}
          <Link className='text-brand underline underline-offset-2' href='mailto:support@hyp3.gg'>
            support@hyp3.gg
          </Link>
        </p>
      </section>
    </div>
  )
}
