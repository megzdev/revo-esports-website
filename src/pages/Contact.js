import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToDiscord = async (data) => {
    const webhookUrl = 'https://discord.com/api/webhooks/1395073403794362489/FpSBb81ndiqlu7ow1bMgoOrqvAf9Y8d5LPaijU1rhpPXEbT4My7FfX9V109NUSdM1R2p';
    
    const discordMessage = {
      embeds: [{
        title: "New Message from Website",
        color: 0x1e3a8a,
        fields: [
          {
            name: "Name",
            value: data.fullName,
            inline: true
          },
          {
            name: "Email",
            value: data.email,
            inline: true
          },
          {
            name: "Message",
            value: data.message,
            inline: false
          }
        ],
        timestamp: new Date().toISOString()
      }]
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage)
    });

    return response.ok;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const success = await sendToDiscord(formData);
      
      if (success) {
        setNotification({
          type: 'success',
          message: 'Your message has been sent successfully! Thank you for contacting us, we will get back to you soon.'
        });
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'An error occurred while sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">CONTACT US</h1>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="form-group">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`form-input ${errors.fullName ? 'error' : ''}`}
              placeholder="Full Name"
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Email Address"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Message Field */}
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`form-textarea ${errors.message ? 'error' : ''}`}
              placeholder="Your Message"
              rows="5"
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Notification */}
      {notification && (
        <div className={`notification ${notification.type} show`}>
          <div className="notification-content">
            <span className="notification-icon">
              {notification.type === 'success' ? '✅' : '❌'}
            </span>
            <span className="notification-message">{notification.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;