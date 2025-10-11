import Link from "next/link";
import React from "react";

export default function ShippingPage() {
  return (
    <div className="py-10 px-4 md:px-10 space-y-4">
      {/* ===== Page Header ===== */}
      <h2 className="font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand">
        SHIPPING POLICY
      </h2>
      <p className="font-semibold text-sm md:text-base">
        Last Updated: October 10, 2025
      </p>
      <div className="h-0.5 w-full bg-brand" />

      {/* ===== Current Shipping Times ===== */}
      <section className="space-y-4" id="current-shipping-times">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          CURRENT SHIPPING TIMES
        </h4>

        <p className="font-semibold text-sm md:text-base">
          We're excited to share our updated fulfillment windows:
        </p>

        <ul className="list-inside list-disc ml-4">
          {[
            "Marketplace orders: 3–10 business days from the date of withdrawal",
            "Single Cards: 2–4 weeks from the date of withdrawal",
          ].map((item, i) => (
            <li key={i} className="font-semibold text-sm md:text-base">
              {item}
            </li>
          ))}
        </ul>

        <p className="font-semibold text-sm md:text-base">
          We're actively working to shorten these timelines even further.
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* ===== Fulfillment & Delivery ===== */}
      <section className="space-y-4" id="fulfillment-and-delivery">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          FULFILLMENT & DELIVERY
        </h4>

        <p className="font-semibold text-sm md:text-base">
          Shipping typically takes 2–4 weeks from withdrawal, and we're
          continuously optimizing our logistics to deliver faster and more
          efficiently.
        </p>

        <p className="font-semibold text-sm md:text-base">
          Each order is handled with industry-leading care — every card is
          sleeved and packed securely in a bubble mailer. With hundreds of
          thousands of cards shipped to collectors worldwide, ensuring safe and
          timely delivery remains our top priority.
        </p>

        <p className="font-semibold text-sm md:text-base">
          We currently ship to the U.S. and Canada.
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* ===== Shipping & Refund Policy ===== */}
      <section className="space-y-4" id="shipping-and-refund-policy">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          SHIPPING & REFUND POLICY
        </h4>

        <p className="font-semibold text-sm md:text-base">
          Any duties, taxes, customs fees, or other charges related to delivery
          are the recipient's responsibility. Please review your local import
          and tax rules before ordering.
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* ===== Order Acceptance & Confirmation ===== */}
      <section className="space-y-4" id="order-acceptance">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          ORDER ACCEPTANCE & CONFIRMATION
        </h4>

        <p className="font-semibold text-sm md:text-base">
          Once your order is accepted, you'll receive a confirmation email.
        </p>

        <ul className="list-inside list-disc ml-4">
          <li className="font-semibold text-sm md:text-base">
            If you don't receive confirmation within two (2) business days of
            placing the order, contact us at{" "}
            <Link
              className="text-brand underline underline-offset-2"
              href="mailto:support@hyp3.gg"
            >
              support@hyp3.gg
            </Link>
            .
          </li>

          <li className="font-semibold text-sm md:text-base">
            Your order is considered accepted only after you receive the
            confirmation email.
          </li>
        </ul>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* ===== Delivery Windows & Delays ===== */}
      <section className="space-y-4" id="delivery-windows-and-delays">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          DELIVERY WINDOWS & DELAYS
        </h4>

        <p className="font-semibold text-sm md:text-base">
          We'll use reasonable efforts to deliver your items quickly and within
          a reasonable time. However:
        </p>

        <ul className="list-inside list-disc ml-4">
          <li className="font-semibold text-sm md:text-base">
            Displayed delivery windows are non-binding estimates based on our
            current operations and experience.
          </li>
          <li className="font-semibold text-sm md:text-base">
            HYP3 is not liable for delays outside our control, early/late
            delivery, non-delivery, or reliance on estimated dates.
          </li>
        </ul>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* ===== Transfer of Risk ===== */}
      <section className="space-y-4" id="transfer-of-risk">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          TRANSFER OF RISK
        </h4>

        <p className="font-semibold text-sm md:text-base">
          Risk of loss or damage transfers to you upon delivery or attempted
          delivery consistent with your shipping instructions.
        </p>

        <ul className="list-inside list-disc ml-4">
          <li className="font-semibold text-sm md:text-base">
            If your package does not arrive, notify us immediately, but no later
            than two (2) months from the order date.
          </li>
          <li className="font-semibold text-sm md:text-base">
            If an item arrives damaged or defective, contact us within five (5)
            days of receipt and include photos showing the issue.
          </li>
        </ul>

        <p className="font-semibold text-sm md:text-base">
          If, at our sole discretion, we determine the damage wasn't caused by
          you, we will (subject to availability) send a replacement or return
          the item to your HYP3 inventory. If the damage resulted from your
          actions, we are not responsible and will not return the card to your
          inventory. All damage claims are handled case by case.
        </p>
      </section>

      <div className="h-0.5 w-full bg-brand" />

      {/* ===== Contact Section ===== */}
      <section className="space-y-4" id="contact">
        <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand">
          CONTACT
        </h4>

        <p className="font-semibold text-sm md:text-base">
          Questions or issues?{" "}
          <Link
            className="text-brand underline underline-offset-2"
            href="mailto:support@hyp3.gg"
          >
            support@hyp3.gg
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
