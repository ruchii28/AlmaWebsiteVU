const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-[#8B4513] text-white min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <h2 className="text-4xl font-bold mb-4">Gallery</h2>
      <p className="text-lg max-w-2xl mb-6">
        Browse the memories shared by our alumni.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Example Images (Replace with real images) */}
        <div className="bg-gray-300 w-full h-60 rounded-lg"></div>
        <div className="bg-gray-300 w-full h-60 rounded-lg"></div>
        <div className="bg-gray-300 w-full h-60 rounded-lg"></div>
        <div className="bg-gray-300 w-full h-60 rounded-lg"></div>
        <div className="bg-gray-300 w-full h-60 rounded-lg"></div>
        <div className="bg-gray-300 w-full h-60 rounded-lg"></div>
      </div>
    </section>
  );
};

export default Gallery;
