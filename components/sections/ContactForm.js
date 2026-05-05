'use client';

import { useState } from 'react';
import Button from '../ui/Button';
import FormField from '../ui/FormField';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for now (until webhook is decided)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      e.target.reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        backgroundColor: 'var(--bg-elevated)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        padding: '32px',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
        <div className="md-grid-contact-form" style={{ display: 'grid', gap: '20px' }}>
          <FormField 
            label="First Name" 
            id="firstName" 
            name="firstName" 
            required 
            placeholder="John" 
          />
          <FormField 
            label="Last Name" 
            id="lastName" 
            name="lastName" 
            required 
            placeholder="Doe" 
          />
        </div>
        
        <FormField 
          label="Email Address" 
          id="email" 
          type="email" 
          name="email" 
          required 
          placeholder="john@example.com" 
        />
        
        <FormField 
          label="Company / Organisation" 
          id="company" 
          name="company" 
          placeholder="Your Company Ltd." 
        />
        
        <FormField 
          label="What service are you interested in?" 
          id="service" 
          name="service" 
          type="select"
          options={[
            { value: '', label: 'Select a service...' },
            { value: 'web-dev', label: 'Web Development' },
            { value: 'tech-consulting', label: 'Technology Consulting' },
            { value: 'marketing', label: 'Digital Marketing' },
            { value: 'automation', label: 'Automation' },
            { value: 'ui-ux', label: 'UI/UX Design' },
            { value: 'other', label: 'Other / Not Sure' }
          ]}
        />
        
        <FormField 
          label="Project Details" 
          id="message" 
          name="message" 
          type="textarea" 
          required 
          placeholder="Tell us about your goals, timeline, and any specific requirements..." 
        />
        
        <div style={{ marginTop: '12px' }}>
          <Button 
            type="submit" 
            variant="primary" 
            fullWidth 
            disabled={isSubmitting}
            style={{ opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
        
        {submitStatus === 'success' && (
          <div style={{ 
            marginTop: '16px', 
            padding: '12px', 
            backgroundColor: 'rgba(34, 197, 94, 0.1)', 
            border: '1px solid rgba(34, 197, 94, 0.2)',
            borderRadius: 'var(--radius-sm)',
            color: '#4ade80',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            Thank you! Your message has been sent successfully. We'll be in touch shortly.
          </div>
        )}
      </div>

    </form>
  );
}
