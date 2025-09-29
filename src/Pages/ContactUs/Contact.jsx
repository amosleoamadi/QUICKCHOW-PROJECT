import React, { useState } from "react";
import styles from "./ContactStyle";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, message });
    // Na here you go call the API
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Contact our support
      </h1>
      <p style={styles.subtitle}>
        Got questions or concerns about our service? Send a message and we'll get back to you soonest.
      </p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label>
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your email address"
          value={email}
          required
          style={styles.input}
        />
        <label>
          Message
        </label>
        <textarea
          id="message"
          placeholder="Drop your message here"
          rows={15}
          value={message}
          required
          style={styles.textarea}
        />
        <button
          type="submit"
          style={styles.button}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
