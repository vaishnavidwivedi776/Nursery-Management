import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main>
      <section className="bg-green-50 py-16 text-center px-6">
        <p className="text-green-700 font-semibold tracking-widest">
          CONTACT US
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Let's Grow Together
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Have a question about our plants or services? Get in touch with the
          GreenNest team.
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-green-700 font-semibold mb-2">
              SEND US A MESSAGE
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              We'd Love to Hear From You
            </h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-700"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-700"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-700 text-white px-7 py-3 rounded-full font-semibold hover:bg-green-800 transition"
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-green-700 font-medium">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>

          <div>
            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-5">
              <div className="bg-green-50 rounded-2xl p-6">
                <div className="text-3xl">📍</div>

                <h3 className="font-bold text-xl mt-3">Visit Us</h3>

                <p className="text-gray-600 mt-2">
                  GreenNest Nursery, Main Market, Indore, Madhya Pradesh
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <div className="text-3xl">📞</div>

                <h3 className="font-bold text-xl mt-3">Call Us</h3>

                <p className="text-gray-600 mt-2">+91 98765 43210</p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <div className="text-3xl">✉️</div>

                <h3 className="font-bold text-xl mt-3">Email Us</h3>

                <p className="text-gray-600 mt-2">hello@greennest.com</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden shadow-sm">
              <iframe
                title="GreenNest Nursery Location"
                src="https://www.google.com/maps?q=Indore%2C%20Madhya%20Pradesh&output=embed"
                className="w-full h-80 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
