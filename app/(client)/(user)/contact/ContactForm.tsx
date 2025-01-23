'use client';

import React, { useState, FormEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Submission error', error);
      alert('Error sending message');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-golddark">Contact Us</h1>
      <p className="mb-6 text-golddark/50">
        We&apos;d love to hear from you. Please fill out the form below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 text-golddark">
        <div className="space-y-0.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-golddark rounded-md"
            required
          />
        </div>
        <div className="space-y-0.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-golddark rounded-md"
            required
          />
        </div>
        <div className="space-y-0.5">
          <Label htmlFor="message">Message</Label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-3 py-2 border border-golddark rounded-md resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#111111] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#111111]/50 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}