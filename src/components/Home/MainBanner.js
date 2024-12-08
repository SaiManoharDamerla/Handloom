import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLocation } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Loader from '../Shared/Loader'; // Import Loader

const MainBanner = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const location = useLocation();

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            style={{ backgroundColor: '#fff3e3' }}
            className="flex items-center justify-between px-10 py-20"
          >
            <div>
              <h1
                className="text-5xl font-bold text-yellow-700 mb-4"
                style={{ fontFamily: 'Comfortaa, sans-serif' }}
              >
                Quality you can trust, loved by all.
              </h1>
              <p
                className="text-lg text-yellow-600"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                A promise to make exceptional sarees.
              </p>

              <div className="mt-6 flex space-x-4">
                {/* Social Media Links */}
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram className="text-4xl text-pink-400" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebook className="text-4xl text-blue-500" />
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                  <FaWhatsapp className="text-4xl text-green-500" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <FaYoutube className="text-4xl text-red-500" />
                </a>
              </div>
            </div>
            <img
              src="https://th.bing.com/th/id/OIG3._U108oHthZFV1G06ZwUh?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn"
              alt="Saree"
              className="w-96 rounded-lg shadow-lg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainBanner;
