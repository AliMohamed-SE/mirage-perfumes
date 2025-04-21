
// Newsletter section removed as requested – now only displays a simple join message

const Newsletter = () => {
  return (
    <section className="py-24 bg-mirage-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join the Mirage Community</h2>
          <p className="text-gray-600 mb-3">
            Get exclusive offers, early access to new releases, and insights into the art of fragrance by staying tuned with us.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. 
            <br />
            For more, please see our <a href="/privacy-policy" className="underline hover:text-mirage-bronze">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
