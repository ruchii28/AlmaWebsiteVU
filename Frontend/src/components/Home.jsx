import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Home = () => {
  // Slider settings for automatic sliding without clicking
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,  // Transition speed
    slidesToShow: 3, // Number of images visible at a time
    slidesToScroll: 1,
    autoplay: true,  // Enables automatic sliding
    autoplaySpeed: 2500, // Changes slide every 2.5 seconds
    arrows: false, // Removes next/prev buttons
    pauseOnHover: false, // Keeps sliding even when hovered
  };

  return (
    <div className="pt-16 text-center px-4 py-8"> {/* Prevents overlap */}
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-12 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-3">Welcome to Vignan Alumni Network</h1>
        <p className="text-lg">Stay connected, share experiences, and grow together!</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-4 bg-white text-orange-600 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
          onClick={() => window.location.href = "/alumni"}
        >
          Explore Alumni
        </motion.button>
      </motion.div>

      {/* Notable Alumni (Auto-Sliding Section) */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Our Notable Alumni</h2>
        <div className="max-w-5xl mx-auto"> {/* Centered Slider */}
          <Slider {...sliderSettings}>
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src={`https://via.placeholder.com/150`}
                    alt={`Alumni ${index + 1}`}
                    className="mx-auto mb-3 rounded-full w-32 h-32 object-cover"
                  />
                  <h3 className="text-xl font-bold">Alumni {index + 1}</h3>
                  <p className="text-gray-600">Industry Leader | Tech Innovator</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">What Our Alumni Say</h2>
        <Slider {...sliderSettings} slidesToShow={1}>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="italic">"Vignan provided me with the foundation to achieve my dreams!"</p>
            <h4 className="mt-2 font-semibold">- Alumni Name</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="italic">"Great networking and career growth opportunities!"</p>
            <h4 className="mt-2 font-semibold">- Another Alumni</h4>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
