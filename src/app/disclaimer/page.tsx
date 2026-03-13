import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import LastReviewed from "@/components/LastReviewed";

export const metadata = generatePageMetadata(
  "Medical Disclaimer",
  "Medical disclaimer: this website provides educational information only and does not constitute medical advice. No doctor-patient relationship is established through this site.",
  "/disclaimer"
);

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Medical Disclaimer", href: "/disclaimer" }]} />
      <LastReviewed date="2026-03-01" />

      <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
        Medical Disclaimer
      </h1>

      <div className="content-section">
        <h2>Educational Purpose Only</h2>
        <p>
          The content provided on this website, including all text, graphics,
          and other materials, is for informational and educational purposes
          only. It is designed to help readers better understand topics related
          to obstetrics, gynecology, and women&apos;s health. The information
          presented should not be used as a basis for making medical decisions.
        </p>

        <h2>Not a Substitute for Professional Medical Care</h2>
        <p>
          Nothing on this website is intended to replace professional medical
          advice, diagnosis, or treatment. Always seek the advice of your
          physician, OB/GYN, or other qualified healthcare provider with any
          questions you may have regarding a medical condition. Never disregard
          professional medical advice or delay in seeking it because of
          something you have read on this website.
        </p>
        <p>
          If you think you may have a medical emergency, call your doctor, go
          to the emergency department, or call emergency services immediately.
        </p>

        <h2>No Doctor-Patient Relationship</h2>
        <p>
          Use of this website does not create a doctor-patient relationship
          between you and Dr. Sabina Razdolsky. The information provided is
          general in nature and may not apply to your individual circumstances.
          Medical care should be personalized and provided by a healthcare
          professional who knows your full medical history.
        </p>

        <h2>Emergency Guidance</h2>
        <div className="rounded-xl border-l-4 border-[#F97066] bg-red-50/50 p-5 my-6">
          <p className="text-sm font-semibold text-red-800">
            If you are experiencing a medical emergency, do not use this
            website. Call your local emergency number or go to the nearest
            emergency room immediately.
          </p>
          <p className="mt-2 text-sm text-red-700">
            This website is not designed or intended to provide emergency
            medical guidance. It cannot diagnose conditions or provide real-time
            medical advice.
          </p>
        </div>

        <h2>Content Accuracy Commitment</h2>
        <p>
          While we make every effort to ensure the accuracy and currency of the
          information on this website, medicine is a constantly evolving field.
          We cannot guarantee that all information is complete, current, or
          error-free at all times. Information may change as new research
          becomes available or clinical guidelines are updated.
        </p>
        <p>
          We do not endorse or recommend any specific tests, physicians,
          products, procedures, opinions, or other information that may be
          mentioned on the site. Reliance on any information provided by this
          website is solely at your own risk.
        </p>

        <h2>External Links</h2>
        <p>
          This website may contain links to external websites for reference or
          convenience. We are not responsible for the content, accuracy, or
          privacy practices of those third-party sites. The inclusion of a link
          does not imply endorsement of the linked site or its content.
        </p>

        <h2>Last Updated</h2>
        <p>
          This medical disclaimer was last updated on March 1, 2026. We may
          update this page from time to time. Any changes will be posted on
          this page with an updated revision date.
        </p>
      </div>

      {/* Related links */}
      <section className="mt-10 mb-4">
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
          <p className="text-sm text-gray-600">
            For information about how our content is created and reviewed,
            please read our{" "}
            <Link href="/editorial-policy" className="text-[#0F766E] underline hover:text-teal-800">
              Editorial Policy
            </Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
