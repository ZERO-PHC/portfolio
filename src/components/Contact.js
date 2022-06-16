import { useState } from "react";
const Contact = () => {
  const [form, setForm] = useState({ email: "", name: "", phone: "", msg: "" });
  const [active, setActive] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { email, name, phone, msg } = form;
  const onSubmit = (e) => {
    e.preventDefault();
    if (email && name && phone && msg) {
      setSuccess(true);
      setTimeout(() => {
        setForm({ email: "", name: "", phone: "", msg: "" });
        setSuccess(false);
      }, 2000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="roww resumo_fn_contact">
          {/* Main Title */}
          
          {/* /Main Title */}
          {/* Contact Form */}
      
          {/* /Contact Form */}
          {/* Contact Info */}
          <div className="resumo_fn_contact_info">
            <p>Address</p>
            <h3>69 Queen St, London, United Kingdom</h3>
            <p>Contact</p>
            <h3>
              <a href="tel:+7068980751">(+706) 898-0751</a>
            </h3>
            <p>
              <a className="fn__link" href="mailto:trendycoder.com@gmail.com">
                trendycoder.com@gmail.com
              </a>
            </p>
          </div>
          {/* /Contact Info */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
