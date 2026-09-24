import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import image115 from '../../../assets/image115.svg';
import { ScrollReveal } from '../../../components/ui/ScrollReveal';

export const BusinessSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <section className="relative w-full bg-white overflow-hidden select-none">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top Header Eyebrow */}
        <div className="pt-16 sm:pt-24 pb-10 sm:pb-14">
          <ScrollReveal variant="fade-up" duration={700} distance={20}>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-bold text-[#0B0F19] tracking-tight leading-[1.12]">
              We work with business
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-bold text-[#9CA3AF] tracking-tight leading-[1.12] mt-1 sm:mt-1.5">
              Not for consumers
            </h3>
          </ScrollReveal>
        </div>

        {/* Main Two-Column Row */}
        <div className="pb-20 sm:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Heading, Subtitle & Interactive Business Email Form */}
            <div className="lg:col-span-6 flex flex-col justify-center max-w-[580px]">
              <ScrollReveal variant="fade-up" delay={100} duration={750} distance={24}>
                <h4 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0B0F19] tracking-tight leading-[1.16]">
                  Why switch between <br />
                  tools when one does it <br />
                  all?
                </h4>
              </ScrollReveal>

              {/* Functional Email Form matching Figma: 557px × 66px, 8px radius, #AEAEAE border */}
              <ScrollReveal variant="fade-up" delay={200} duration={750} distance={20} className="mt-8 sm:mt-10">
                <form onSubmit={handleSubmit} className="w-full max-w-[557px] flex flex-col gap-3.5">
                  <div className="relative w-full">
                    <input
                      type="email"
                      required
                      value={email}
                      disabled={status === 'success'}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your business email"
                      className="w-full h-[66px] bg-white border border-[#AEAEAE] rounded-[8px] px-5 text-[15px] sm:text-base text-[#0B0F19] placeholder-[#AEAEAE] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all disabled:bg-neutral-100 disabled:cursor-not-allowed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full h-[66px] bg-black hover:bg-neutral-900 active:scale-[0.99] text-white font-medium text-[15px] sm:text-base rounded-[8px] px-6 flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-sm disabled:opacity-85 disabled:cursor-default"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin text-white" />
                        <span>Connecting...</span>
                      </span>
                    ) : status === 'success' ? (
                      <span className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Welcome Aboard!</span>
                      </span>
                    ) : (
                      <>
                        <span>Start Exploring</span>
                        <ArrowRight className="w-4 h-4 ml-0.5" />
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
                      <span>✓ Invitation sent to {email}. Check your inbox!</span>
                    </div>
                  )}
                </form>
              </ScrollReveal>
            </div>

            {/* Right Column: Embedded image 115.svg with 609x628 proportions */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
              <ScrollReveal variant="fade-left" delay={150} duration={800} distance={30} className="w-full max-w-[609px]">
                <div className="w-full max-w-[609px] rounded-[24px] overflow-hidden border border-neutral-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] bg-[#F8FAFC]">
                  <img
                    src={image115}
                    alt="Why switch between tools when one does it all?"
                    className="w-full h-auto object-cover object-center block"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessSection;
