import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="pt-32 p-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-md">
          Contact Me
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-2 rounded bg-gray-700 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 px-4 py-2 rounded text-white hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;