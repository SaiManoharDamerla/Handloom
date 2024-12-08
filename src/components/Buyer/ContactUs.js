import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = { name, email, subject, message };
    console.log(contactData);
    setSubmitted(true);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (

      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          
          {/* Left Card - Address */}
          <div className="flip-card w-full lg:w-1/3 -mt-40"> {/* Add negative margin */}
  <div className="flip-card-inner">
    <div className="flip-card-front bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center shadow-lg rounded-xl p-8">
      <h3 className="text-xl font-bold mb-4">Our Address</h3>
      <p className="text-black">1234 Handloom St,</p>
      <p className="text-black">Vijayawada, India</p>
    </div>
    <div className="flip-card-back bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center shadow-lg rounded-xl p-8">
      <h3 className="text-xl font-bold mb-4">Visit Us</h3>
      <p className="text-black">Opening Hours:</p>
      <p className="text-black">Mon - Sat: 10am - 6pm</p>
    </div>
  </div>
</div>

          
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-8 w-full lg:w-1/3 ">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">Contact Us</h2>
            {submitted && (
              <div className="text-green-600 mb-4 text-center font-semibold">
                Thank you for getting in touch!
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                  placeholder="Enter subject"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                  rows="5"
                  placeholder="Write your message here..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-purple-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Card - Contact Info */}
          <div className="flip-card w-full lg:w-1/3 -mt-40">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center shadow-lg rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="text-black">Email: info@handloomfashion.com</p>
                <p className="text-black">Phone: +91 9876543210</p>
              </div>
              <div className="flip-card-back bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center shadow-lg rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <p className="text-black">We are here to assist you 24/7!</p>
                <p className="text-black">Feel free to contact us for any queries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </section>
  );
};

export default ContactUs;
