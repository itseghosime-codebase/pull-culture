import Link from "next/link"
import React from "react"

export default function PrivacyPage() {
  return (
    <div className="py-10 px-4 md:px-10 space-y-4">
      {/* HEADER */}
      <h2 className="font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand">
        PRIVACY POLICY
      </h2>
      <p className="font-semibold text-sm md:text-base">
        Last Updated: October 10, 2025
      </p>

      {/* OVERVIEW */}
      <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
        OVERVIEW
      </h4>
      <p className="font-semibold text-sm md:text-base">
        This Privacy Policy (“Policy”) explains how HYP3 Labs, LLC, operating as
        HYP3, and our affiliates (“HYP3,” “we,” “our,” or “us”) collect, use,
        and share your personal information when you visit our website HYP3.gg
        or use any of our related products and services (collectively, the
        “Services”).
      </p>
      <p className="font-semibold text-sm md:text-base">
        This Policy does not cover personal information we collect from
        employees or job applicants. By using our Services, you agree to this
        Policy and to our Terms of Service.
      </p>

      <div className="h-0.5 w-full bg-brand" />

      {/* TABLE OF CONTENTS */}
      <h4 className="text-lg md:text-xl lg:text-2xl font-black">
        TABLE OF CONTENTS
      </h4>
      <ul className="space-y-1">
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
          <li key={i} className="flex items-center gap-1 font-semibold text-brand">
            <p>{i + 1}.</p>
            <Link
              href={`#${item.id}`}
              className="text-sm md:text-base block underline underline-offset-4 scroll-smooth hover:opacity-80"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="h-0.5 w-full bg-brand" />

      {/* 1. INFORMATION WE COLLECT */}
      <Section
        id="information-we-collect"
        title="1. INFORMATION WE COLLECT"
        items={[
          {
            subtitle: "Information You Provide Directly",
            paragraphs: [
              "Depending on how you interact with HYP3, we may collect:",
            ],
            bullets: [
              "Identifiers & Contact Details: Your name, email address, phone number, and shipping address.",
              "Account Information: Username, password, profile image, and other details you use to create or access your account.",
              "Purchase & Transaction Data: Order history, items purchased, and usage activity within our Services.",
              "Messages & Submissions: Any content you send us, including chat messages, customer support requests, photos, videos, or feedback.",
              "Audio & Call Data: If you call our support team, your conversation may be recorded for training or security purposes.",
              "Preferences: Game or collection preferences, wishlist items, and communication settings.",
              "Surveys & Reviews: Information you share in online forms, surveys, or public reviews.",
            ],
          },
          {
            subtitle: "Information Collected Automatically",
            paragraphs: [
              "When you visit our site or use our Services, we may automatically collect:",
            ],
            bullets: [
              "Device & Technical Data: IP address, browser type, operating system, device model, and unique identifiers.",
              "Usage Data: Pages viewed, time on site, clicks, referring URLs, and other browsing patterns. This data is gathered using cookies, analytics tools, and similar technologies (see “Cookies & Tracking” below).",
            ],
          },
          {
            subtitle: "Information from Other Sources",
            paragraphs: ["We may receive personal information about you from:"],
            bullets: [
              "Our affiliates or business partners",
              "Payment processors and service providers",
              "Marketing and analytics vendors",
              "Public sources, such as social media profiles or government records",
            ],
          },
        ]}
      />

      <Divider />

      {/* 2. HOW WE USE INFORMATION */}
      <Section
        id="how-we-use-information"
        title="2. HOW WE USE INFORMATION"
        paragraphs={[
          "We use the information we collect for purposes such as:",
        ]}
        bullets={[
          "Operating Our Business: Managing, maintaining, and improving our Services.",
          "Order Fulfillment: Processing payments, shipments, and customer requests.",
          "Customer Support: Responding to your inquiries and providing technical or product assistance.",
          "Product Improvement: Analyzing how users engage with our Services to enhance features and usability.",
          "Marketing & Promotions: Sending updates, offers, and personalized recommendations you might find interesting.",
          "Fraud Prevention & Security: Detecting, preventing, and addressing potential security or fraudulent activity.",
          "Legal & Compliance: Meeting legal obligations, enforcing policies, and responding to lawful requests.",
          "Research & Analytics: Understanding trends and preferences to improve HYP3’s offerings.",
          "Other Uses: Any purpose you authorize or that we disclose at the time of collection.",
        ]}
      />

      <Divider />

      {/* 3. HOW WE SHARE INFORMATION */}
      <Section
        id="how-we-share-information"
        title="3. HOW WE SHARE INFORMATION"
        paragraphs={[
          "We may share personal information as follows:",
        ]}
        bullets={[
          "Service Providers: With vendors who help us operate HYP3 (hosting, payments, analytics, customer support).",
          "Marketing Partners: With advertising or promotional partners to deliver relevant campaigns or offers.",
          "Business Transfers: If we’re involved in a merger, sale, or restructuring, your data may be transferred as part of that transaction.",
          "Legal Compliance: When required by law, subpoena, or court order, or to protect the rights and safety of HYP3, our users, or others.",
          "Security & Fraud Prevention: To detect or prevent illegal or unauthorized activity.",
          "Aggregated or De-identified Data: We may share non-identifiable data for analytics, research, or marketing purposes.",
          "With Your Consent: When you direct us to share information or give explicit permission.",
        ]}
      />

      <Divider />

      {/* 4. COOKIES */}
      <Section
        id="cookies-tracking-technologies"
        title="4. COOKIES & TRACKING TECHNOLOGIES"
        paragraphs={[
          "We and our partners use cookies, pixels, tags, and similar tools to gather data on how users interact with HYP3.gg. These technologies help us:",
        ]}
        bullets={[
          "Analyze performance and traffic patterns",
          "Personalize your experience",
          "Deliver relevant ads and promotions",
          "Improve functionality and security",
        ]}
        extra={
          <>
            <p className="font-semibold text-sm md:text-base">
              Analytics Tools: We use services such as Google Analytics,
              Mixpanel, and Meta Pixel to measure usage and performance. You can
              learn more about how Google uses your data at{" "}
              <Link
                href="https://www.google.com/policies/privacy/partners/"
                className="text-brand underline underline-offset-2"
              >
                https://www.google.com/policies/privacy/partners/
              </Link>
              .
            </p>
            <p className="font-semibold text-sm md:text-base">
              Payments: We process payments via Stripe, which may collect device
              and transaction data for fraud detection and service improvement.
              Read Stripe’s Privacy Policy at{" "}
              <Link
                href="https://stripe.com/privacy"
                className="text-brand underline underline-offset-2"
              >
                https://stripe.com/privacy
              </Link>
              .
            </p>
            <p className="font-semibold text-sm md:text-base">
              Do Not Track: Our site currently does not respond to browser-based
              “Do Not Track” signals.
            </p>
          </>
        }
      />

      <Divider />

      {/* 5–11. REMAINING SECTIONS */}
      <SimpleSection
        id="third-party-links"
        title="5. THIRD-PARTY LINKS"
        text="HYP3.gg may include links to other websites or services. We are not responsible for the privacy practices or content of these third parties. Please review their respective privacy policies."
      />

      <Divider />

      <SimpleSection
        id="user-generated-content"
        title="6. USER-GENERATED CONTENT"
        text="Our Services may allow you to post comments, photos, reviews, or other materials. Any information you share publicly can be viewed and shared by others. Please avoid posting personal or sensitive data."
      />

      <Divider />

      <SimpleSection
        id="your-choices-rights"
        title="7. YOUR CHOICES & RIGHTS"
        text="You have several ways to manage your privacy:"
        bullets={[
          "Cookies: Adjust your browser settings to block or delete cookies.",
          "Marketing Emails: Unsubscribe from promotional emails by clicking the “unsubscribe” link or replying “STOP” to text messages.",
          "Account Information: Access or update your account details anytime by logging in or contacting support.",
          <>
            Ad Preferences: In the U.S., opt out of targeted advertising via{" "}
            <Link
              className="text-brand underline underline-offset-2"
              href="https://www.aboutads.info/choices"
            >
              aboutads.info/choices
            </Link>
            .
          </>,
        ]}
      />

      <Divider />

      <SimpleSection
        id="childrens-privacy"
        title="8. CHILDREN’S PRIVACY"
        text="Our Services are intended for users 13 years or older. We do not knowingly collect personal data from children. If you believe a child has provided us their information, please contact us so we can delete it."
      />

      <Divider />

      <SimpleSection
        id="data-security"
        title="9. DATA SECURITY"
        text="We maintain safeguards to help protect your personal information. However, no online system is completely secure, and we cannot guarantee absolute protection against unauthorized access or misuse."
      />

      <Divider />

      <SimpleSection
        id="policy-updates"
        title="10. UPDATES TO POLICY"
        text="We may revise this Policy periodically. When we make updates, we will post the new version on this page and update the “Last Updated” date. We encourage you to check this page regularly for the latest version."
      />

      <Divider />

      <SimpleSection
        id="contact-information"
        title="11. CONTACT US"
        text={
          <>
            If you have questions or concerns about this Privacy Policy, please
            contact us at{" "}
            <Link
              className="text-brand underline underline-offset-2"
              href="mailto:support@hyp3.gg"
            >
              support@hyp3.gg
            </Link>
            .
          </>
        }
      />
    </div>
  )
}

/* ========== Reusable Subcomponents ========== */

function Divider() {
  return <div className="h-0.5 w-full bg-brand" />
}

function Section({
  id,
  title,
  paragraphs,
  bullets,
  items,
  extra,
}: {
  id: string
  title: string
  paragraphs?: string[]
  bullets?: (string | React.ReactNode)[]
  items?: {
    subtitle: string
    paragraphs: string[]
    bullets: string[]
  }[]
  extra?: React.ReactNode
}) {
  return (
    <section id={id} className="space-y-4">
      <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
        {title}
      </h4>

      {paragraphs &&
        paragraphs.map((text: string, i: number) => (
          <p key={i} className="font-semibold text-sm md:text-base">
            {text}
          </p>
        ))}

      {bullets && (
        <ul className="list-inside list-disc ml-4">
          {bullets.map((b: string | React.ReactNode, i: number) => (
            <li key={i} className="font-semibold text-sm md:text-base">
              {b}
            </li>
          ))}
        </ul>
      )}

      {items &&
        items.map(
          (
            item: {
              subtitle: string
              paragraphs: string[]
              bullets: string[]
            },
            i: number
          ) => (
            <div key={i}>
              <h5 className="text-base md:text-lg lg:text-xl font-extrabold">
                {item.subtitle}
              </h5>
              {item.paragraphs.map((p: string, j: number) => (
                <p key={j} className="font-semibold text-sm md:text-base">
                  {p}
                </p>
              ))}
              <ul className="list-inside list-disc ml-4">
                {item.bullets.map((b: string, k: number) => (
                  <li key={k} className="font-semibold text-sm md:text-base">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}

      {extra && extra}
    </section>
  )
}

function SimpleSection({
  id,
  title,
  text,
  bullets,
}: {
  id: string
  title: string
  text: string | React.ReactNode
  bullets?: (string | React.ReactNode)[]
}) {
  return (
    <section id={id} className="space-y-4">
      <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
        {title}
      </h4>
      {typeof text === "string" ? (
        <p className="font-semibold text-sm md:text-base">{text}</p>
      ) : (
        text
      )}
      {bullets && (
        <ul className="list-inside list-disc ml-4">
          {bullets.map((b: string | React.ReactNode, i: number) => (
            <li key={i} className="font-semibold text-sm md:text-base">
              {b}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
