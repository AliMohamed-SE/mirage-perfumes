
const InstagramGallery = () => {
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      instagramLink: "https://instagram.com"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1595425793268-7d6d10483970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      instagramLink: "https://instagram.com"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1605651531144-51381895e23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      instagramLink: "https://instagram.com"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1563170352-33176b9d37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
      instagramLink: "https://instagram.com"
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl">Follow Our Journey</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            @mirageperfume
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image) => (
            <a 
              key={image.id}
              href={image.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden"
            >
              <img 
                src={image.url} 
                alt="Instagram post" 
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-mirage-charcoal bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View on Instagram
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
