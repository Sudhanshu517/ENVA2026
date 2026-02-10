import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
            Get in Touch
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#d4af37]">
            Contact Us
          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-[#d4af37] mb-3">
              Address
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Maharaja Surajmal Institute of Technology<br />
              C-4 Market, Janakpuri<br />
              New Delhi – 110058
            </p>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-lg font-semibold text-[#d4af37] mb-3">
              Phone
            </h3>
            <p className="text-gray-300">
              Arnav:{" "}
              <a href="tel:+918920372787" className="hover:text-[#d4af37]">
                +91 93153 18792
              </a>
            </p>
            <p className="text-gray-300">
              Jeevansh:{" "}
              <a href="tel:+919582371097" className="hover:text-[#d4af37]">
                +91 80764 22504
              </a>
            </p>
            <p className="text-gray-300">
              Nipun:{" "}
              <a href="tel:+917291945251" className="hover:text-[#d4af37]">
                +91 72919 45251
              </a>
            </p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold text-[#d4af37] mb-3">
              Email
            </h3>
            <a
              href="mailto:prakriti@msit.in"
              className="text-gray-300 hover:text-[#d4af37]"
            >
              prakriti@msit.in
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden border border-gray-800">
          <iframe
            title="MSIT Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.306659542025!2d77.07144267529609!3d28.631577780964915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c97d5b5cf5%3A0x916e94e381d6faaf!2sMaharaja%20Surajmal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1674456145634!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;
