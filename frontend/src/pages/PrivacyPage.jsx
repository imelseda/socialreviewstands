import LegalLayout from "@/components/landing/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="September 12, 2026" testid="privacy-page">
      <h2>1. Who we are</h2>
      <p>
        TapFive Review ("we", "us", "our") operates tapfivereview.com and sells the NFC 215 Google review stand.
        This policy explains what information we collect when you use our website or buy from us, and how we use it.
      </p>

      <h2>2. Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li><b>Order enquiries:</b> name, email address, business name, chosen stand style, quantity, and any message you send through our order form.</li>
        <li><b>Purchases:</b> when checkout is enabled, your billing and shipping details are collected and processed by our payment provider. We never see or store your full card number.</li>
        <li><b>Support:</b> anything you share when you contact us by email.</li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>Basic device and browser data (type, language, approximate region) and pages visited, used to keep the site fast and relevant.</li>
        <li>We do not run advertising trackers and we do not sell your data to anyone.</li>
      </ul>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To respond to your enquiry, confirm your order, and arrange delivery.</li>
        <li>To provide customer support and honor the 90-day money-back guarantee.</li>
        <li>To improve the website and our product.</li>
        <li>To meet legal, tax, and accounting obligations.</li>
      </ul>

      <h2>4. What we never do</h2>
      <p>
        We never sell, rent, or trade your personal information. We never collect or read the reviews your customers
        leave — the NFC stand simply opens your own public Google review page; the review itself is between your
        customer and Google.
      </p>

      <h2>5. Third-party services</h2>
      <ul>
        <li><b>Payment processor</b> — handles transactions securely under its own privacy policy.</li>
        <li><b>Shipping carriers</b> — receive your delivery address to ship your order.</li>
        <li><b>Website hosting &amp; analytics</b> — process technical data to serve the site.</li>
      </ul>

      <h2>6. Data retention &amp; security</h2>
      <p>
        We keep enquiry and order records only as long as needed for the purposes above and legal requirements,
        then delete or anonymize them. We use encryption in transit and limit access to your data to people who
        need it to serve you.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on where you live (including the EU/UK GDPR and US state privacy laws), you may have the right to
        access, correct, export, or delete your personal information, or object to how we use it. Email us and we
        will respond within 30 days.
      </p>

      <h2>8. Cookies</h2>
      <p>
        This site uses only essential cookies required for it to function. No advertising or cross-site tracking
        cookies are set.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        If we update this policy, the new version will be posted here with a fresh "last updated" date.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about this policy or your data? Email <a href="mailto:support@tapfivereview.com">support@tapfivereview.com</a>.
      </p>
    </LegalLayout>
  );
}
