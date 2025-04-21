import Layout from "@/components/layout/Layout";

const TermsConditions = () => (
  <Layout>
    <div className="container mx-auto max-w-3xl px-4 py-16 pt-24 min-h-[60vh]">
      <h1 className="text-3xl font-serif mb-6">Terms and Conditions</h1>
      <p className="mb-6">
        These Terms &amp; Conditions govern your use of the Mirage website and
        services. By accessing or using our site, you agree to these terms.
      </p>
      <h2 className="text-lg font-semibold mt-8 mb-2">Use of the Site</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          Our products are for personal use only. Reproduction or resale is not
          permitted.
        </li>
        <li>
          You agree to provide accurate information during your purchase and
          account creation.
        </li>
      </ul>
      <h2 className="text-lg font-semibold mt-8 mb-2">Intellectual Property</h2>
      <p className="mb-6">
        All content on this site, including text, images, and branding, is
        property of Mirage and may not be used without permission.
      </p>
      <h2 className="text-lg font-semibold mt-8 mb-2">Contact</h2>
      <p>
        Questions? Please reach out to us via the{" "}
        <a href="/contact" className="underline hover:text-mirage-bronze">
          Contact
        </a>{" "}
        page.
      </p>
    </div>
  </Layout>
);

export default TermsConditions;
