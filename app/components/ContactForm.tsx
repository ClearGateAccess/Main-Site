import OnlineContactForm from "./OnlineContactForm";
import { isContactConfigured } from "../../scripts/contact-config.mjs";

export default function ContactForm() {
  // Publishing an unconfigured form creates a dead end. Email remains available
  // until both the delivery endpoint and public anti-spam key are configured.
  if (isContactConfigured(process.env.NEXT_PUBLIC_CONTACT_API_URL, process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY)) {
    return <OnlineContactForm />;
  }

  return (
    <div className="contact-form email-contact">
      <h3>Request a product walkthrough</h3>
      <p>Email the ClearGate team with a short introduction to your organization and the program or workflow you have in mind.</p>
      <ul>
        <li>Your organization and role</li>
        <li>Your product or program stage</li>
        <li>What you would like to explore</li>
      </ul>
      <a className="button button-green" href="mailto:contact@cleargateaccess.com?subject=ClearGate%20program%20inquiry">Email ClearGate</a>
      <p className="contact-address"><a href="mailto:contact@cleargateaccess.com">contact@cleargateaccess.com</a></p>
      <p className="contact-email-help">The button opens your email app. You can also copy the address into your preferred email service.</p>
      <p className="contact-data-note">For business inquiries only. Do not include patient information, adverse-event reports, or confidential clinical data.</p>
    </div>
  );
}
