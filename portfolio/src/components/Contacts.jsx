import { useState } from "react";
import axios from "axios";

function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("STEP 1: Form submit triggered");

    try {
      console.log("STEP 2: Sending request...");
      const res=await axios.post("http://localhost:5000/send-sms", form);

     console.log("STEP 3: Response received", res.data);
      alert("Message sent successfully!");


      // ✅ CLEAR FORM (THIS LINE IS IMPORTANT)
    setForm({
      name: "",
      email: "",
      message: ""
    });
    } 
      catch (error) {
        console.error("FULL ERROR:", error);
        alert("Error sending message");
      }
  };

  return (
    <section id="contact">
      <div className="container contact-wrapper">

        {/* LEFT: FORM */}
        <div className="contact-form-box">
          <h2>Contact Me</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* RIGHT: SOCIAL LINKS */}
        <div className="contact-links-box">
          <h3>Let's Connect</h3>

          <a href="mailto:malihafatima918@gmail.com" className="contact-link-card">
            📧 Email
          </a>

          <a
            href="https://www.linkedin.com/in/maliha-dev/"
            target="_blank"
            className="contact-link-card"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://github.com/Malihafatima1"
            target="_blank"
            className="contact-link-card"
          >
            🐙 GitHub
          </a>

          <a href="tel:+916360488710" className="contact-link-card">
            📱 Phone
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contacts;