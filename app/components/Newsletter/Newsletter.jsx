"use client";

import { useState } from "react";
import styles from "@/app/components/Newsletter/Newsletter.module.css";

const NewsletterSubscribe = ({ onSuccessMessage = "Thank you for subscribing!" }) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear any previous error when typing
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      // Simulate an API call for subscribing
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail(""); // Clear the input field
      } else {
        throw new Error("Subscription failed. Please try again later.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <div className={styles.newsletterContainer}>
      {!isSubscribed ? (
        <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
          <h2 className={styles.heading}>Subscribe to Our Newsletter</h2>
          <p className={styles.description}>Stay updated with our latest news and offers.</p>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleInputChange}
              className={styles.emailInput}
              required
            />
            <button type="submit" className={styles.subscribeButton}>
              Subscribe
            </button>
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
      ) : (
        <p className={styles.successMessage}>{onSuccessMessage}</p>
      )}
    </div>
  );
};

export default NewsletterSubscribe;
