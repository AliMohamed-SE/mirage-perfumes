import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <div className="container mx-auto max-w-3xl px-4 py-16 pt-24 min-h-[60vh]">
      <h1 className="text-3xl font-serif mb-6">Privacy Policy</h1>
      <p className="mb-6">
        Mirage values your privacy. This Privacy Policy describes how we
        collect, use, and safeguard your information when you use our website.
      </p>
      <h2 className="text-lg font-semibold mt-8 mb-2">
        Information We Collect
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          Personal information you provide (such as name, email, address, etc.).
        </li>
        <li>Basic analytics and website usage data.</li>
      </ul>
      <h2 className="text-lg font-semibold mt-8 mb-2">
        How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>To fulfill and manage your orders.</li>
        <li>To provide customer service and support.</li>
        <li>To send updates or marketing communications, if you consent.</li>
      </ul>
      <h2 className="text-lg font-semibold mt-8 mb-2">Contact Us</h2>
      <p>
        If you have any questions or concerns regarding this Privacy Policy,
        please contact us via the{" "}
        <a href="/contact" className="underline hover:text-mirage-bronze">
          Contact
        </a>{" "}
        page.
      </p>
    </div>
  </Layout>
);

export default PrivacyPolicy;
