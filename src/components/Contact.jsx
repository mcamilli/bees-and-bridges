
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

function Contact() {
  // Replace YOUR_FORM_ID with your Formspree form ID
  const [state, handleSubmit, reset] = useForm("xwlldpaj");

  return (
    <section
      id="contact"
      className="section contact contact-section"
    >
      <div className="contact-layout">

        {/* Left side: introduction */}
        <div className="contact-intro">
          <span className="contact-label">
            05 / GET IN TOUCH
          </span>

          <h2>Let's work together.</h2>

          <p>
            Whether you're a business looking to connect
            with nature, a school interested in science,
            or a community hoping to experience the
            world of bees, we'd love to hear from you.
          </p>

          <div className="contact-details">
            <span>BASED IN</span>
            <strong>Windsor-Essex, Ontario</strong>

            <span>OUR WEBSITE</span>
            <a href="https://beesandbridges.ca">
              beesandbridges.ca
            </a>
          </div>
        </div>

        {/* Right side: form */}
        <div className="contact-form-panel">
          {state.succeeded ? (
            <div className="contact-success" role="status">
              <span className="success-icon">✓</span>
              <h3>Thank you for reaching out!</h3>
              <p>
                Your message has been submitted
                successfully. We'll be in touch.
              </p>
              <button type="button" onClick={reset}>
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <h3>Tell us about your idea.</h3>

              <div className="contact-field-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                  <ValidationError
                    field="name"
                    prefix="Name"
                    errors={state.errors}
                    className="contact-error"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                  <ValidationError
                    field="email"
                    prefix="Email"
                    errors={state.errors}
                    className="contact-error"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-organization">
                  Organization (optional)
                </label>
                <input
                  id="contact-organization"
                  type="text"
                  name="organization"
                  placeholder="Company, school or community"
                  autoComplete="organization"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-service">
                  I'm interested in *
                </label>
                <select
                  id="contact-service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Business Services">
                    Business Services
                  </option>
                  <option value="Education">
                    Education
                  </option>
                  <option value="Rent a Hive">
                    Rent a Hive
                  </option>
                  <option value="Bees for a Cause">
                    Bees for a Cause
                  </option>
                  <option value="Other Inquiry">
                    Other Inquiry
                  </option>
                </select>
                <ValidationError
                  field="service"
                  prefix="Service"
                  errors={state.errors}
                  className="contact-error"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell us a little about your project or idea..."
                  required
                />
                <ValidationError
                  field="message"
                  prefix="Message"
                  errors={state.errors}
                  className="contact-error"
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={state.submitting}
              >
                {state.submitting
                  ? "Sending..."
                  : "Send Message →"}
              </button>

              <ValidationError
                errors={state.errors}
                className="contact-error"
              />

              <p className="contact-privacy">
                We'll use your details to respond
                to your inquiry.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

export default Contact;
