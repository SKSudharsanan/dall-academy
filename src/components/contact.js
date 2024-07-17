import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    interest: 'events',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@dall.academy?subject=Contact%20Form%20Submission&body=${encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nInterested in: ${formData.interest}\nMessage: ${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id='Contact'>
    <div className="bg-black py-10 px-8 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Map and Location */}
        <div className="md:w-1/2 mb-6 md:mb-0 flex-shrink-0">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.539876224033!2d80.20236531480134!3d13.012690190830223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52672b83aa1201%3A0xc1f1a1d2d142d828!2sAmbedkar%20Nagar%2C%20Adambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600088%2C%20India!5e0!3m2!1sen!2sus!4v1598518376259!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          <div className="mt-4 text-white">
            <p>Ambedkar Nagar, 2nd Street,</p>
            <p>Adambakkam, Chennai</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-grey p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-6 text-white text-3xl text-center">Contact Us</div>
            <div className="mb-4">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <select
                id="interest"
                name="interest"
                placeholder="interested in"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              >
                <option value="events">Events</option>
                <option value="bootcamp">Bootcamp</option>
                <option value="cohort">Cohort</option>
              </select>
            </div>

            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Tell Us About Yourself and Your Need"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
