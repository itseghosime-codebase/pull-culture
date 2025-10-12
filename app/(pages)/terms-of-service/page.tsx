import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Terms of Service - Pull Culture",
  description: "description",
};

export default function TermsPage() {
  
  return (
    <div className="py-10 px-4 md:px-10 space-y-4">
      {/* HEADER */}
      <h2 className="font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand">
        TERMS OF SERVICE
      </h2>
      <p className="font-semibold text-sm md:text-base">
        Last Updated: October 10, 2025
      </p>

      {/* OVERVIEW */}
      <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
        OVERVIEW
      </h4>
      <p className="font-semibold text-sm md:text-base">
        These Terms of Service (the “Terms”) are a contract between HYP3 LABS,
        LLC. dba HYP3.gg and its affiliates (“HYP3,” “Company,” “we,” “us”) and
        you (“you,” “your,” or “User”). They explain how you may use our
        websites and apps, our related online properties, and any software we
        provide (collectively, the “Site”), as well as all content, data,
        analytics, software, graphics, and other materials made available
        through the Site, plus any services we offer (together, the “Service”).{" "}
      </p>
      <p className="font-semibold text-sm md:text-base">
        <strong>IMPORTANT — PLEASE READ.</strong> By agreeing to these Terms—or
        by accessing the Site, creating an account, making a purchase,
        downloading or using our apps, submitting information, or otherwise
        using any part of the Service—you confirm you’ve read and accept these
        Terms. If you don’t agree, do not use the Service.
      </p>
      <p className="font-semibold text-sm md:text-base">
        These Terms include a dispute resolution and arbitration provision (see
        Section 18) and a class action waiver, to the extent permitted by your
        jurisdiction.
      </p>

      <div className="h-0.5 w-full bg-brand" />

      {/* TABLE OF CONTENTS */}
      <h4 className="text-lg md:text-xl lg:text-2xl font-black">
        TABLE OF CONTENTS
      </h4>
      <ul className="space-y-1">
        {[
          {
            title: "Modifications and Additional Terms",
            id: "modifications-and-additional-terms",
          },
          { title: "Privacy", id: "privacy" },
          { title: "Contractual Relationship", id: "contractual-relationship" },
          {
            title: "The Service and Your License to Use It",
            id: "the-service-and-your-license-to-use-it",
          },
          {
            title: "Registration and Accounts",
            id: "registration-and-accounts",
          },
          {
            title: "Subscriptions & Cancellation",
            id: "subscriptions-and-cancellation",
          },
          { title: "Payments", id: "payments" },
          {
            title:
              "Purchases, Referral Programs, Giveaways, and the Marketplace",
            id: "purchases-referral-programs-giveaways-marketplace",
          },
          {
            title: "Third-Party Accounts & Sites",
            id: "third-party-accounts-and-sites",
          },
          {
            title: "Our Intellectual Property Rights",
            id: "our-intellectual-property-rights",
          },
          { title: "Acceptable Use Policy", id: "acceptable-use-policy" },
          {
            title: "User Submissions & Interactions",
            id: "user-submissions-and-interactions",
          },
          {
            title: "Intellectual Property Infringement",
            id: "intellectual-property-infringement",
          },
          { title: "Term & Termination", id: "term-and-termination" },
          { title: "Disclaimer of Warranties", id: "disclaimer-of-warranties" },
          { title: "Limitation of Liability", id: "limitation-of-liability" },
          { title: "Indemnity", id: "indemnity" },
          {
            title: "Dispute Resolution & Arbitration; Class Action Waiver",
            id: "dispute-resolution-arbitration-class-action-waiver",
          },
          {
            title: "Electronic Communications; AI Chatbot",
            id: "electronic-communications-ai-chatbot",
          },
          {
            title: "Consumer Notice (California)",
            id: "consumer-notice-california",
          },
          { title: "General", id: "general" },
          { title: "Contact Us", id: "contact-us" },
        ].map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-1 font-semibold text-brand"
          >
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

      {/* 1. MODIFICATIONS AND ADDITIONAL TERMS */}
      <section className="space-y-4" id="modifications-and-additional-terms">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          1. MODIFICATIONS AND ADDITIONAL TERMS
        </h4>

        <p className="font-semibold text-sm md:text-base">
          (a) Updates to these Terms. <br />
          We may change these Terms at any time by posting the revised version
          on the Site and, where required, providing notice or requesting your
          explicit consent. If you don’t agree to the updated Terms, you must
          stop using the Service. Your continued use after posting means you
          accept the changes. Unless the law requires otherwise, updates are
          effective upon posting.
        </p>

        <p className="font-semibold text-sm md:text-base">
          (b) Changes to the Service. <br />
          We may add to, modify, or remove features of the Service at any time
          without notice. If you object to changes, your sole remedy is to stop
          using the Service. We may also discontinue the Service or any part of
          it without liability to you.
        </p>

        <p className="font-semibold text-sm md:text-base">
          (c) Paid subscriptions. <br />
          If you’re on a paid plan and we change pricing, these Terms, or the
          relevant features, we’ll notify you as described in 1(a). Changes take
          effect after your current term ends or at your next renewal. If you
          don’t agree, you can cancel before renewal (see Section 6(e)).
        </p>

        <p className="font-semibold text-sm md:text-base">
          (d) Additional Terms. <br />
          Some features may come with their own terms (“Additional Terms”). By
          using those features, you agree to the Additional Terms, which control
          in the event of a conflict with these Terms.{" "}
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* 2. PRIVACY */}
      <section className="space-y-4" id="privacy">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          2. PRIVACY
        </h4>
        <p className="font-semibold text-sm md:text-base">
          Please review our Privacy Policy at{" "}
          <Link
            className="text-brand underline hover:opacity-80 underline-offset-2"
            href={"https://hyp3.gg/privacy"}
          >
            https://hyp3.gg/privacy
          </Link>{" "}
          for details on how we collect, use, and share information. The Privacy
          Policy is incorporated into these Terms.
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* 3. CONTRACTUAL RELATIONSHIP */}
      <section className="space-y-4" id="contractual-relationship">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          3. CONTRACTUAL RELATIONSHIP
        </h4>
        <p className="font-semibold text-sm md:text-base">
          By using the Service, you represent that you’re at least 18 years old
          (or of legal age to form a contract where you live). If you’re under
          that age, you must have consent from a parent or legal guardian.
          Parental control tools are commercially available to limit access to
          content that may be harmful to minors.
        </p>
        <p className="font-semibold text-sm md:text-base">
          If you accept these Terms on behalf of a company or organization, you
          warrant that you have legal authority to bind that entity. If you
          aren’t authorized, you agree to be personally responsible.
        </p>
        <p className="font-semibold text-sm md:text-base">
          Your right to use the Service depends on your ongoing compliance with
          these Terms and applicable law. If you breach these Terms, your access
          may end immediately, in addition to any other remedies we have.
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* 4. THE SERVICE AND YOUR LICENSE TO USE IT */}
      <section
        className="space-y-4"
        id="the-service-and-your-license-to-use-it"
      >
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          4. THE SERVICE AND YOUR LICENSE TO USE IT
        </h4>
        <p className="font-semibold text-sm md:text-base">
          The Service is a cloud-based platform that lets you purchase and
          manage digital collectibles and/or other intangible assets (see
          Section 8) and, where applicable, move them to third-party accounts
          (see Section 9). These Terms apply to all visitors and registered
          users. The Service is licensed—not sold—to you.
        </p>

        <p className="font-semibold text-sm md:text-base">
          Subject to your compliance with these Terms, HYP3 grants you a
          personal, revocable, non-exclusive, non-transferable,
          non-sublicensable license to use the Service only for your own
          individual, non-commercial purposes. All other rights are reserved by
          HYP3 and its licensors. If you are prohibited by law from using the
          Service, you may not do so. Your use does not create any agency,
          partnership, joint venture, employment, franchise, or other
          relationship with HYP3.
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* 5. REGISTRATION AND ACCOUNTS */}
      <section className="space-y-4" id="registration-and-accounts">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          5. REGISTRATION AND ACCOUNTS
        </h4>
        <p className="font-semibold text-sm md:text-base">
          (a) Visitors and Registered Users. <br />
          You can browse some areas of the Site without an account. To access
          additional features, you must register an account (“Registered User”).
        </p>
        <p className="font-semibold text-sm md:text-base">
          (b) Registration Data. <br /> You agree to provide true, accurate,
          current, and complete information during sign-up and to keep it
          updated. If we believe your information is inaccurate or incomplete,
          we may suspend or terminate your account. You’re responsible for all
          activity under your account. Do not share your password. Report any
          unauthorized use to support@hyp3.gg immediately. You remain
          responsible for activity performed with your credentials.
        </p>
        <p className="font-semibold text-sm md:text-base">
          (c) Account Management. <br /> Don’t create an account using false
          information or more than one account. We may require a username change
          or reclaim a username or affiliate code at any time (e.g., due to a
          third-party rights claim). Don’t register on behalf of another person
          or entity unless you’re authorized to bind them to these Terms. If
          you’ve been removed or banned, you may not re-register.
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* 6. SUBSCRIPTIONS & CANCELLATION */}
      <section className="space-y-4" id="subscriptions-and-cancellation">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          6. SUBSCRIPTIONS AND CANCELLATIONS
        </h4>
        <p className="font-semibold text-sm md:text-base">
          (a) Free accounts. <br />
          Creating a basic account is free. The rights associated with your
          account are personal and non-transferable. You can cancel at any time
          via settings or by emailing{" "}
          <Link
            className="text-brand underline hover:opacity-80 underline-offset-2"
            href={"support@hyp3.gg"}
          >
            support@hyp3.gg
          </Link>
          .
        </p>

        <p className="font-semibold text-sm md:text-base">
          (b) Paid subscriptions.
          <br /> We may offer paid plans with premium features (“Subscription”).
          Your plan and initial term appear at checkout. If a free trial is
          offered, billing begins when the trial ends unless you cancel.
          Subscriptions automatically renew unless canceled (see Section 6(d)
          and 6(e)). For termination, see Section 14 of your broader terms set.
        </p>

        <p className="font-semibold text-sm md:text-base">
          (c) Pricing. <br />
          We may change plans and prices. New pricing applies after your current
          term ends. Check the Site for the latest offerings.
          Upgrades/downgrades may change your fees.
        </p>

        <p className="font-semibold text-sm md:text-base">
          (d) Automatic renewal. <br />
          To keep your access uninterrupted, Subscriptions renew automatically
          for successive terms equal to your initial term. We’ll charge your
          saved payment method for the then-current fee and taxes unless you
          cancel before renewal. If we announce a price change and you don’t
          cancel within the notice window, your plan renews at the new price.
        </p>

        <p className="font-semibold text-sm md:text-base">
          (e) Cancellations. <br /> You can cancel anytime, effective when your
          current term ends. Subscription fees are non-refundable (unless
          required by law). If you need help, contact{" "}
          <Link
            className="text-brand underline hover:opacity-80 underline-offset-2"
            href={"support@hyp3.gg"}
          >
            support@hyp3.gg
          </Link>
          .
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* 7. PAYMENTS */}
      <section className="space-y-4" id="payments">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          7. PAYMENTS
        </h4>
        <p className="font-semibold text-sm md:text-base">
          (a) Fees and payment. <br />
          If you buy anything through the Service (single purchase or
          subscription), you agree to pay all applicable fees and taxes and
          authorize us to use third-party processors for billing. We may invoice
          in advance. Non-payment may result in suspension or termination. We
          may charge any overdue amounts to your payment method or invoice you.
        </p>
        <p className="font-semibold text-sm md:text-base">
          (b) Automatic billing and usage limits. <br />
          Subscriptions bill automatically until you cancel. Some offerings
          include usage limits; if you exceed them, we may charge for overages
          or request you upgrade.
        </p>
        <p className="font-semibold text-sm md:text-base">
          (c) Payment method authorization. <br />
          You authorize recurring charges to your selected payment method per
          your Subscription. Payment processors may impose additional terms. If
          you fail to pay, amounts may accrue interest at the maximum rate
          allowed by law.
        </p>
        <p className="font-semibold text-sm md:text-base">
          (d) Taxes and additional fees. <br />
          You’re responsible for all taxes and any bank/transfer fees. If we
          receive less than the full amount, we may invoice the difference. You
          agree to pay reasonable collection and legal costs on past-due
          amounts.
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* 8. PURCHASES, REFERRAL PROGRAMS, GIVEAWAYS, AND THE MARKETPLACE */}
      <section
        className="space-y-4"
        id="purchases-referral-programs-giveaways-marketplace"
      >
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          8. PURCHASES, REFERRAL PROGRAMS, GIVEAWAYS, AND THE MARKETPLACE
        </h4>
        <p className="font-semibold text-sm md:text-base">
          (a) Intangible assets and credits. <br />
          You can buy intangible assets and credits. By purchasing, you
          authorize us to charge your payment method for fees and taxes.
        </p>
        <p className="font-semibold text-sm md:text-base">
          (b) Referral program and rewards. <br />
          We may offer credits or rewards (“Rewards”).
        </p>
        <p className="font-semibold text-sm md:text-base">
          (c) The Marketplace. <br />
          Our Marketplace enables acquisition and exchange of eligible items
          (including tangible and digital collectibles) using items already in
          your account inventory, fiat or crypto currency. Tangible cards
          acquired via the Marketplace are shipped under our Shipping & Return
          Policy at https://hyp3.gg/shipping. We don’t control user-to-user
          conduct; interactions and exchanges are solely between the users
          involved.
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* 9. THIRD-PARTY ACCOUNTS & SITES */}
      <section className="space-y-4" id="third-party-accounts-and-sites">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          8. THIRD-PARTY ACCOUNTS AND SITES
        </h4>
        <p className="font-semibold text-sm md:text-base">
          You may link certain third-party accounts (e.g., gaming or social
          platforms). Data shared from those accounts is governed by your
          settings and the third party’s policies. Your relationship with third
          parties is governed solely by your agreements with them. We’re not
          responsible for their practices.
        </p>
        <p className="font-semibold text-sm md:text-base">
          The Service may link to third-party websites. Those sites have their
          own terms and privacy policies. We don’t endorse or control them and
          aren’t liable for your use of those properties.
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* 10. OUR INTELLECTUAL PROPERTY RIGHTS */}
      <section className="space-y-4" id="our-intellectual-property-rights">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          10. OUR INTELLECTUAL PROPERTY RIGHTS
        </h4>
        <p className="font-semibold text-sm md:text-base">
          The Service—including all features, functions, text, graphics,
          software, imagery, audio/video, data, design, and overall look and
          feel—is owned by HYP3 or our licensors and protected by intellectual
          property laws. Other than the limited license in Section 4, no rights
          are granted. Unauthorized use may violate these Terms and the law.
        </p>
        <p className="font-semibold text-sm md:text-base">
          We do not claim ownership of any intangible assets you acquire through
          the Service. If you provide ideas, suggestions, or other feedback
          (“Feedback”), you agree it’s non-confidential. You assign (or where
          assignment isn’t possible, license) to us all rights needed to use
          your Feedback worldwide, without payment or attribution.
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* 11. ACCEPTABLE USE POLICY */}
      <section className="space-y-4" id="acceptable-use-policy">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          11. ACCEPTABLE USE POLICY
        </h4>
        <p className="font-semibold text-sm md:text-base">
          You agree not to use the Service to:
        </p>

        <ul className="list-inside list-disc ml-4">
          {[
            "Break any law or regulation;",
            "Harass, threaten, stalk, or harm anyone;",
            "Impersonate another person or misrepresent your identity;",
            "Copy, distribute, or exploit Service content or materials without authorization;",
            "Bypass or interfere with security or access controls;",
            "Remove or avoid copyright, trademark, or other protection measures;",
            "Use robots, crawlers, scrapers, or other automated tools that place (in our discretion) an unreasonable load on our systems;",
            "Upload malware or otherwise disrupt the Service;",
            "Mirror, frame, deep-link, or scrape content without permission;",
            "Collect personal information or solicit commercially without consent;",
            "Reverse engineer, decompile, or create derivative works from the Service;",
            "Post unlawful, offensive, or harmful content;",
            "Infringe another’s intellectual property or other rights;",
            "Promote illegal activity, scams, spam, unauthorized promotions, unlawful contests, lotteries, gambling, or pyramid schemes;",
            "Create multiple or duplicate accounts to evade limits or abuse referral programs;",
            "Harm or exploit minors;",
            "Engage in any other conduct we deem objectionable or that exposes HYP3 or users to risk.",
          ].map((item, i) => (
            <li key={i} className="font-semibold text-sm md:text-base">
              {item}
            </li>
          ))}
        </ul>
      </section>
      <div className="h-0.5 w-full bg-brand" />
      {/* 12. USER SUBMISSIONS & INTERACTIONS */}
      <section className="space-y-4" id="user-submissions-and-interactions">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          12. USER SUBMISSIONS & INTERACTIONS
        </h4>
        <p className="font-semibold text-sm md:text-base">
          (a) User Submissions <br />
          If user-generated content is enabled, you may submit reviews,
          comments, images, or other materials (“User Submissions”). You must
          own your content or have permission to post it, and it must not
          violate any law or rights of others.
        </p>
        <p className="font-semibold text-sm md:text-base">
          You retain ownership, but by posting you grant HYP3 and our designees
          a worldwide, royalty-free, transferable, sublicensable license to use,
          reproduce, host, store, modify, adapt, publish, translate, distribute,
          publicly perform/display, and create derivative works from your User
          Submissions for any lawful purpose, without notice or compensation. To
          the extent permitted by law, you waive moral rights.
        </p>
        <p className="font-semibold text-sm md:text-base">
          We may (but need not) monitor, edit, or remove User Submissions at our
          discretion. User Submissions don’t reflect our views; you are solely
          responsible for what you post. We are not liable for User Submissions
          or any consequences arising from them, and we may delete User
          Submissions after the Service ends. You may encounter content you find
          offensive or inappropriate; we are not responsible for your exposure
          to such content. Do not share sensitive personal information publicly.
        </p>
        <p className="font-semibold text-sm md:text-base">
          (b) User Interactions <br />
          You’re solely responsible for your interactions with other users and
          assume all related risks. We are not liable for disputes between users
          and may limit connections, restrict access, or intervene at our
          discretion. You agree to cooperate with investigations of suspected
          misconduct.
        </p>
        <p className="font-semibold text-sm md:text-base">
          If you have a dispute with another user, you release HYP3 from claims
          or damages arising from that dispute. California residents: You waive
          California Civil Code § 1542, which states:
        </p>
        <p className="font-semibold text-sm md:text-base">
          “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES
          NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF
          EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE
          MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR.”
        </p>
      </section>
      <div className="h-0.5 w-full bg-brand" />
      {/* 13. INTELLECTUAL PROPERTY INFRINGEMENT */}
      <section className="space-y-4" id="intellectual-property-infringement">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          13. INTELLECTUAL PROPERTY INFRINGEMENT
        </h4>
        <p className="font-semibold text-sm md:text-base">
          We respect IP rights and expect you to do the same. Our policy is to
          remove infringing content, suspend access to the Service (or portions
          of it) for users who infringe, and terminate repeat infringers where
          appropriate.
        </p>

        <p className="font-semibold text-sm md:text-base">
          DMCA Notices. In accordance with 17 U.S.C. § 512, send written notices
          of alleged copyright infringement to our agent:DMCA Agent —{" "}
          <Link
            href={"mailto:legal@hyp3.gg"}
            className="text-brand underline hover:opacity-80 underline-offset-2"
          >
            legal@hyp3.gg
          </Link>
        </p>
        <p className="font-semibold text-sm md:text-base">
          Your notice must include:
        </p>
        <ol className="list-inside list-decimal ml-4">
          {[
            "Your physical or electronic signature;",
            "Identification of the copyrighted work (or representative list) claimed to be infringed;",
            "Identification of the material claimed to be infringing and information reasonably sufficient to locate it;",
            "Your contact information (postal address, phone, and email);",
            "A statement that you have a good-faith belief the use is not authorized by the owner, its agent, or the law;",
            "A statement that the information in the notice is accurate; and",
            "A statement, under penalty of perjury, that you’re authorized to act on behalf of the owner.",
          ].map((item, i) => (
            <li key={i} className="font-semibold text-sm md:text-base">
              {item}
            </li>
          ))}
        </ol>

        <p className="font-semibold text-sm md:text-base">
          Counter-Notification. If your material was removed pursuant to a valid
          DMCA notice, you may submit a counter-notice to the same agent
          including:
        </p>

        <ol className="list-inside list-decimal ml-4">
          {[
            "Your physical or electronic signature;",
            "Identification of the material removed or disabled and where it appeared before removal;",
            "A statement, under penalty of perjury, that you have a good-faith belief the material was removed or disabled due to mistake or misidentification;",
            "Your name, physical address, phone number, and a statement consenting to the jurisdiction of (i) the federal court for your district, or (ii) if outside the U.S., any judicial district where HYP3 may be found, and that you’ll accept service of process from the original complainant or their agent.",
          ].map((item, i) => (
            <li key={i} className="font-semibold text-sm md:text-base">
              {item}
            </li>
          ))}
        </ol>

        <p className="font-semibold text-sm md:text-base">
          Repeat Infringers. We may terminate accounts or access for users
          subject to repeated DMCA or other valid IP complaints.
        </p>
      </section>
      <div className="h-0.5 w-full bg-brand" />
      {/* 14. TERM & TERMINATION */}
      <section className="space-y-4" id="term-and-termination">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          14. TERM & TERMINATION
        </h4>
        <p className="font-semibold text-sm md:text-base">
          These Terms begin when you first use the Service and continue until
          you or we terminate. You may terminate anytime by closing your account
          (via settings) or emailing{" "}
          <Link
            className="text-brand underline hover:opacity-80 underline-offset-2"
            href={"mailto:support@hyp3.gg"}
          >
            support@hyp3.gg
          </Link>
          .
        </p>
        <p className="font-semibold text-sm md:text-base">
          We may suspend or terminate your account or access at any time and for
          any reason, including violations of these Terms. Upon termination, all
          licenses end; we may delete your account and related content
          (including User Submissions); and you must destroy any downloaded
          materials. We are not liable for losses from suspension or
          termination. Provisions that by their nature should survive (e.g.,
          ownership, disclaimers, limitations of liability, indemnities) will
          survive.
        </p>
        <p className="font-semibold text-sm md:text-base">
          If your account includes intangible assets, termination isn’t
          effective until you dispose of them as outlined in our Purchase Terms.
          For subscription cancellations, see Section 6.
        </p>
      </section>
      <div className="h-0.5 w-full bg-brand" />
      {/* 15. DISCLAIMER OF WARRANTIES */}
      <section className="space-y-4" id="disclaimer-of-warranties">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          15. DISCLAIMER OF WARRANTIES
        </h4>

        <p className="font-semibold text-sm md:text-base">
          You use the Service at your own risk. The Service is provided “as is”
          and “as available,” without warranties of any kind, express or
          implied, including merchantability, fitness for a particular purpose,
          title, non-infringement, satisfactory quality, or arising from course
          of dealing/usage. We do not warrant that the Service will be
          uninterrupted, secure, or error-free; that defects will be corrected;
          or that the Service is free of viruses or harmful components. We make
          no guarantees about the accuracy, completeness, usefulness, or results
          of the Service or Materials. We may remove content at any time without
          notice.
        </p>
        <p className="font-semibold text-sm md:text-base">
          We’ll try to process requests related to intangible assets promptly,
          but we do not guarantee timelines, especially where third-party
          systems (marketplaces, payment processors, external services) are
          involved.
        </p>
      </section>
      <div className="h-0.5 w-full bg-brand" />
      {/* 16. LIMITATION OF LIABILITY */}
      <section className="space-y-4" id="limitation-of-liability">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          16. LIMITATION OF LIABILITY
        </h4>

        <p className="font-semibold text-sm md:text-base">
          To the maximum extent permitted by law, HYP3 is not liable for any
          indirect, incidental, consequential, special, punitive, or similar
          damages (including lost profits, lost data, business interruption, or
          other intangible losses) arising out of or relating to these Terms or
          the Service, whether based in contract, tort, or any other theory, and
          even if advised of the possibility of such damages.
        </p>
        <p className="font-semibold text-sm md:text-base">
          In all cases, our total liability to you for claims arising out of or
          related to these Terms or the Service will not exceed the greater of:
          (A) the amounts you paid to HYP3 in the three (3) months before the
          event giving rise to the claim; or (B) USD $100.
        </p>
        <p className="font-semibold text-sm md:text-base">
          If applicable law limits our ability to disclaim warranties or limit
          liability, our obligations will be the minimum required by law.
        </p>
      </section>
      <div className="h-0.5 w-full bg-brand" />
      {/* 17. INDEMNITY */}
      <section className="space-y-4" id="indemnity">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          17. INDEMNITY
        </h4>

        <p className="font-semibold text-sm md:text-base">
          You agree to indemnify and hold harmless HYP3 and our affiliates,
          officers, employees, agents, partners, and licensors from any losses,
          damages, liabilities, and expenses (including reasonable attorneys’
          fees) arising out of or related to: (a) your User Submissions; (b)
          your use or inability to use the Service; (c) your breach of these
          Terms; (d) your violation of others’ rights; or (e) your violation of
          law. We may assume exclusive defense and control of any matter
          otherwise subject to indemnification; you agree to cooperate. These
          obligations survive termination.
        </p>
      </section>
      <div className="h-0.5 w-full bg-brand" />
      {/* 18. DISPUTE RESOLUTION & ARBITRATION; CLASS ACTION WAIVER */}
      <section
        className="space-y-4"
        id="dispute-resolution-arbitration-class-action-waiver"
      >
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          18. DISPUTE RESOLUTION & ARBITRATION; CLASS ACTION WAIVER
        </h4>

        <p className="font-semibold text-sm md:text-base">
          (a) Governing Law & Venue. <br />
          These Terms are governed by the laws of the State of Washington,
          excluding conflict-of-laws rules. Except as prohibited by law or
          otherwise agreed, claims must be brought in state or federal courts
          located in Washington, and you consent to their personal
          jurisdiction—subject to the arbitration terms below.
        </p>
        <p className="font-semibold text-sm md:text-base">
          (b) Pre-Arbitration Notice. <br />
          Before seeking arbitration, the initiating party must send a written
          Notice of Dispute describing the claim and requested relief. If not
          resolved within 30 days after receipt, either party may commence
          arbitration.
        </p>
        <p className="font-semibold text-sm md:text-base">
          (c) Arbitration. <br />
          To the extent permitted by law, HYP3 may elect binding arbitration
          (including non-appearance-based). You may pursue qualifying claims in
          small-claims court. You may opt out of arbitration within 30 days of
          first consenting to these Terms by mailing written notice to: HYP3
          Labs, LLC. If HYP3 elects arbitration, it will be administered by the
          AAA or another reputable ADR provider selected by HYP3, under these
          rules: (i) conducted by phone, online, and/or written submissions
          (initiating party chooses); (ii) no in-person appearance unless both
          parties agree (if so, venue is King County, Washington); and (iii) any
          award may be entered in a court of competent jurisdiction. Arbitration
          excludes claims for injunctive or equitable relief. The U.S. Federal
          Arbitration Act applies.
        </p>
        <p className="font-semibold text-sm md:text-base">
          (d) Jury Trial Waiver. <br />
          Except where prohibited, you waive the right to a jury trial in any
          litigation related to these Terms (including actions to enforce/vacate
          an award).
        </p>
        <p className="font-semibold text-sm md:text-base">
          (e) Class Action Waiver. <br />
          Except where prohibited, claims must be brought individually—not as a
          class member or representative. Consolidated, class, or representative
          actions are not permitted.
        </p>
      </section>
      <div className="h-0.5 w-full bg-brand" />
      {/* 19. ELECTRONIC COMMUNICATIONS; AI CHATBOT */}
      <section className="space-y-4" id="electronic-communications-ai-chatbot">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          19. ELECTRONIC COMMUNICATIONS; AI CHATBOT
        </h4>

        <p className="font-semibold text-sm md:text-base">
          By using the Service, you consent to receive electronic communications
          from HYP3 (emails, in-app notices, Site postings). Such communications
          satisfy legal requirements for written notices. You must provide a
          current, valid email address. We are not responsible for emails
          blocked by filters or settings.
        </p>
        <p className="font-semibold text-sm md:text-base">
          We may offer AI-powered chat to answer questions. Chat outputs are not
          legal, financial, or official statements and may not reflect our
          latest policies. For binding information, rely on official
          documentation or contact us directly. By using the chatbot, you
          acknowledge we’re not responsible for actions taken based on chatbot
          responses.
        </p>
      </section>
      <div className="h-0.5 w-full bg-brand" />

      {/* 20. CONSUMER NOTICE (CALIFORNIA) */}
      <section className="space-y-4" id="consumer-notice-california">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          20. CONSUMER NOTICE (CALIFORNIA)
        </h4>

        <p className="font-semibold text-sm md:text-base">
          Under California Civil Code § 1789.3, California users may contact us
          with questions or complaints at{" "}
          <Link
            href={"mailto:support@hyp3.gg"}
            className="text-brand underline hover:opacity-80 underline-offset-2"
          >
            support@hyp3.gg
          </Link>{" "}
          (Attn: Customer Service). You may also contact the Complaint
          Assistance Unit of the Division of Consumer Services, Department of
          Consumer Affairs, 1625 North Market Blvd., Sacramento, CA 95834; (916)
          445-1254 or (800) 952-5210; TDD (800) 326-2297 or TDD (916) 322-1700.
        </p>
      </section>
      <div className="h-0.5 w-full bg-brand" />

      {/* 21. GENERAL */}
      <section className="space-y-4" id="general">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          21. GENERAL
        </h4>

        <p className="font-semibold text-sm md:text-base">
          These Terms, the Privacy Policy, and any applicable Additional Terms
          are the entire agreement between you and HYP3 regarding the Service,
          superseding prior agreements. Our failure to enforce any provision
          isn’t a waiver. If any provision is found unenforceable, the remainder
          remains in effect. You may not assign these Terms; any attempted
          assignment is void. We may assign without restriction.
        </p>
      </section>
      <div className="h-0.5 w-full bg-brand" />
      {/* 22. CONTACT US */}
      <section className="space-y-4" id="contact-us">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          22. CONTACT US
        </h4>

        <p className="font-semibold text-sm md:text-base">
          Questions about these Terms? Contact{" "}
          <Link
            className="text-brand underline hover:opacity-80 underline-offset-2"
            href={"mailto:support@hyp3.gg"}
          >
            support@hyp3.gg
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
