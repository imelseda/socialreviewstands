import LegalLayout from "@/components/landing/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms of Service" updated="September 12, 2026" testid="terms-page">
      <h2>1. The agreement</h2>
      <p>
        These terms govern your use of tapfivereview.com and any purchase of the NFC 215 Google review stand
        (the "Product") from TapFive Review ("we", "us", "our"). By using the site or placing an order, you agree
        to these terms.
      </p>

      <h2>2. The product</h2>
      <p>
        The Product is a programmable NFC + QR countertop display (Model 215) that opens a web link you choose —
        typically your public Google review page — when a customer taps or scans it. The Product does not create,
        submit, or guarantee reviews. Customers independently decide whether to leave a review and what to write.
        You are responsible for complying with Google's policies and applicable laws regarding review solicitation
        in your business.
      </p>

      <h2>3. Orders &amp; payment</h2>
      <ul>
        <li>Orders are confirmed by email. Prices are shown at checkout and charged in full at purchase.</li>
        <li>We may refuse or cancel an order (with a full refund) in cases of pricing errors, stock issues, or suspected fraud.</li>
        <li>Enquiry-form reservations are not binding purchases until payment is completed.</li>
      </ul>

      <h2>4. Shipping &amp; delivery</h2>
      <p>
        Stands ship as 1 piece per pack. Recent buyers report delivery in 7–9 days; times vary by destination and
        carrier and are estimates, not guarantees. Risk of loss passes to you upon delivery to the address you provided.
      </p>

      <h2>5. 90-day money-back guarantee</h2>
      <p>
        If you're not satisfied within 90 days of delivery, contact us at
        <a href="mailto:support@tapfivereview.com"> support@tapfivereview.com</a> to arrange a return for a full
        refund of the purchase price. The Product must be returned in reasonable condition. Refunds are issued to
        the original payment method.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Product to deceive customers, post fake reviews, or violate any platform's terms.</li>
        <li>Program the Product to link to malicious, illegal, or misleading content.</li>
        <li>Interfere with the website or attempt to access data that isn't yours.</li>
      </ul>

      <h2>7. Intellectual property</h2>
      <p>
        The website's content, design, and branding belong to TapFive Review. "Google" and the Google logo are
        trademarks of Google LLC; TapFive Review is not affiliated with, endorsed by, or sponsored by Google LLC.
      </p>

      <h2>8. Disclaimers &amp; liability</h2>
      <p>
        The website and Product are provided "as is" without warranties beyond those required by law. To the
        maximum extent permitted, we are not liable for indirect or consequential losses (including lost profits
        or lost reviews), and our total liability for any claim is limited to the amount you paid for the Product.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update these terms from time to time; the version posted here applies to orders placed after its
        "last updated" date.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these terms? Email <a href="mailto:support@tapfivereview.com">support@tapfivereview.com</a>.
      </p>
    </LegalLayout>
  );
}
