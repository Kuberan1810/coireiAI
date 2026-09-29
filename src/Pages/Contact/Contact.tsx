import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

interface CustomSelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ id, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-[42px] px-[14px] pt-[11px] pb-[12px] rounded-[8px] border text-left bg-[#FFFFFF] text-[14px] text-[#0B0F19] flex items-center justify-between cursor-pointer transition-all ${
          isOpen
            ? 'border-neutral-900 ring-1 ring-neutral-900 shadow-xs'
            : 'border-[#E2E8F0] hover:border-neutral-400'
        }`}
      >
        <span className="truncate">{value}</span>
        <ChevronDown
          className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-neutral-800' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 p-1.5 bg-white border border-[#E2E8F0] rounded-[12px] shadow-[0_12px_28px_-4px_rgba(0,0,0,0.12),0_4px_10px_-2px_rgba(0,0,0,0.06)] animate-in fade-in-0 zoom-in-95 duration-150">
          <div className="max-h-[240px] overflow-y-auto space-y-0.5">
            {options.map((option) => {
              const isSelected = option === value;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-left rounded-[8px] text-[13.5px] transition-colors cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-neutral-100 text-[#0B0F19] font-medium'
                      : 'text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0B0F19]'
                  }`}
                >
                  <span>{option}</span>
                  {isSelected && (
                    <svg
                      className="w-3.5 h-3.5 text-neutral-800"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const COMPANY_SIZE_OPTIONS = [
  '1–10 employees',
  '11–50 employees',
  '51–200 employees',
  '201–1,000 employees',
  '1,000+ employees',
];

const INTERESTED_IN_OPTIONS = [
  'GTM Platform',
  'AI Agents',
  'Lead Generation',
  'Analytics & Insights',
  'Custom Enterprise Solution',
  'Partnership & Integration',
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    companySize: '1–10 employees',
    interestedIn: 'GTM Platform',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate lightweight API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const scrollToForm = () => {
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. HERO SECTION */}
      <section className="pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-3">
          Contact Coirei
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-[54px] font-semibold tracking-[-1.5px] leading-[1.12] text-[#0B0F19]">
          Let&apos;s build your growth
          <br />
          system.
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-[#64748B] max-w-[620px] mx-auto leading-relaxed font-normal">
          Talk to our team about GTM, SEO, AEO, AI-powered agents, or how Coirei GTM can fit into your
          existing growth workflow.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[10px] bg-[#0B0F19] hover:bg-neutral-800 text-white text-[13.5px] font-semibold transition-all duration-200 shadow-xs cursor-pointer active:scale-[0.99]"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="mailto:info@coirei.com"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] bg-white hover:bg-neutral-50 text-[#0B0F19] border border-[#E2E8F0] text-[13.5px] font-semibold transition-all duration-200 shadow-2xs cursor-pointer active:scale-[0.99]"
          >
            Talk to Sales
          </a>
        </div>
      </section>

      {/* 2. FORM SECTION (Exact Figma: #F8FAFC 50%, Border bottom 1px #F1F5F9, Padding 64px) */}
      <section
        id="contact-form-section"
        className="w-full bg-[#F8FAFC]/50 border-b border-[#F1F5F9] py-[64px]"
      >
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <h2 className="text-3xl sm:text-[34px] font-semibold text-[#0B0F19] tracking-tight leading-[1.2]">
                Tell us what you&apos;re working on
              </h2>
              <p className="mt-4 text-[14.5px] text-[#64748B] leading-relaxed">
                Share a little about your goals and our team will get back to you.
              </p>
              
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-white rounded-[16px] border border-[#E2E8F0] p-8 sm:p-10 text-center shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0B0F19]">Message sent successfully!</h3>
                  <p className="mt-2 text-[14px] text-neutral-500 max-w-md mx-auto">
                    Thanks for reaching out! Our growth team is reviewing your request and will get back
                    to you within 1 business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        company: '',
                        companySize: '1–10 employees',
                        interestedIn: 'GTM Platform',
                        message: '',
                      });
                    }}
                    className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-[8px] bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[13px] font-medium transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: First name & Last name (Figma: Hug 42px, Radius 8px, Border 1px #E2E8F0, Padding 11px 14px 12px 14px) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-[13px] font-semibold text-[#1E293B] mb-1.5"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full h-[42px] px-[14px] pt-[11px] pb-[12px] rounded-[8px] border border-[#E2E8F0] bg-[#FFFFFF] text-[14px] text-[#0B0F19] focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-[13px] font-semibold text-[#1E293B] mb-1.5"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full h-[42px] px-[14px] pt-[11px] pb-[12px] rounded-[8px] border border-[#E2E8F0] bg-[#FFFFFF] text-[14px] text-[#0B0F19] focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Work email & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[13px] font-semibold text-[#1E293B] mb-1.5"
                      >
                        Work email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-[42px] px-[14px] pt-[11px] pb-[12px] rounded-[8px] border border-[#E2E8F0] bg-[#FFFFFF] text-[14px] text-[#0B0F19] focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[13px] font-semibold text-[#1E293B] mb-1.5"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full h-[42px] px-[14px] pt-[11px] pb-[12px] rounded-[8px] border border-[#E2E8F0] bg-[#FFFFFF] text-[14px] text-[#0B0F19] focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Company size & What are you interested in? */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="companySize"
                        className="block text-[13px] font-semibold text-[#1E293B] mb-1.5"
                      >
                        Company size
                      </label>
                      <CustomSelect
                        id="companySize"
                        value={formData.companySize}
                        onChange={(val) => setFormData((prev) => ({ ...prev, companySize: val }))}
                        options={COMPANY_SIZE_OPTIONS}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="interestedIn"
                        className="block text-[13px] font-semibold text-[#1E293B] mb-1.5"
                      >
                        What are you interested in?
                      </label>
                      <CustomSelect
                        id="interestedIn"
                        value={formData.interestedIn}
                        onChange={(val) => setFormData((prev) => ({ ...prev, interestedIn: val }))}
                        options={INTERESTED_IN_OPTIONS}
                      />
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[13px] font-semibold text-[#1E293B] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-[14px] rounded-[8px] border border-[#E2E8F0] bg-[#FFFFFF] text-[14px] text-[#0B0F19] focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[8px] bg-[#0B0F19] hover:bg-neutral-800 disabled:opacity-70 text-white text-[13.5px] font-semibold transition-all duration-200 shadow-xs cursor-pointer active:scale-[0.99]"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIRECT CONTACT / CHANNELS SECTION */}
      <section className="py-16 sm:py-20 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[13px] font-medium text-[#8592A6] text-center mb-10 sm:mb-12">
          Prefer to talk directly?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0]">
          {/* Sales */}
          <div className="md:px-8 first:pl-0 flex flex-col justify-between pt-6 md:pt-0">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-2">
                Sales
              </p>
              <p className="text-[13.5px] text-[#64748B] mb-5 leading-normal">
                Plans, enterprise requirements, and implementation.
              </p>
            </div>
            <div>
              <a
                href="mailto:sales@coirei.com"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0B0F19] hover:text-blue-600 transition-colors cursor-pointer group"
              >
                <span>Talk to Sales</span>
                <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="md:px-8 flex flex-col justify-between pt-6 md:pt-0">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-2">
                Support
              </p>
              <p className="text-[13.5px] text-[#64748B] mb-5 leading-normal">
                Help with your workspace and existing setup.
              </p>
            </div>
            <div>
              <a
                href="mailto:support@coirei.com"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0B0F19] hover:text-blue-600 transition-colors cursor-pointer group"
              >
                <span>Contact Support</span>
                <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Partnerships */}
          <div className="md:px-8 last:pr-0 flex flex-col justify-between pt-6 md:pt-0">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-2">
                Partnerships
              </p>
              <p className="text-[13.5px] text-[#64748B] mb-5 leading-normal">
                Explore integrations, co-marketing, and partner programs.
              </p>
            </div>
            <div>
              <a
                href="mailto:partnerships@coirei.com"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0B0F19] hover:text-blue-600 transition-colors cursor-pointer group"
              >
                <span>Contact Partnerships</span>
                <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
