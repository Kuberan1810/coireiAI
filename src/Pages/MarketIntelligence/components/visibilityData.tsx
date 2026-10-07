import React from 'react';

export const GoogleGIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.41 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.59 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

export const ChatGPTIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4997 4.4997 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.5045 4.5045 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4947 4.4947 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.402-.6815zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4997 4.4997 0 0 1 6.1802 2.1812zm-9.2882 4.2541l2.7582-1.5878 2.7582 1.5878v3.1756l-2.7582 1.5878-2.7582-1.5878z" />
  </svg>
);

export const PerplexityIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.2 2v7.2L19.5 4l1.2 1.2-5.9 6.8H22v1.7h-7.2l5.9 6.8-1.2 1.2-6.3-5.2V22h-2.4v-7.2L4.5 20l-1.2-1.2 5.9-6.8H2v-1.7h7.2L3.3 3.5l1.2-1.2 6.3 5.2V2h2.4z" />
  </svg>
);

export const GeminiIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
  </svg>
);

export const ClaudeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a1 1 0 0 1 1 1v7.2l5.1-5.1a1 1 0 1 1 1.4 1.4L14.4 11.6l7.2.4a1 1 0 1 1 0 2l-7.2-.4 5.1 5.1a1 1 0 1 1-1.4 1.4L13 14.8V22a1 1 0 1 1-2 0v-7.2l-5.1 5.1a1 1 0 1 1-1.4-1.4l5.1-5.1-7.2-.4a1 1 0 1 1 0-2l7.2.4-5.1-5.1a1 1 0 1 1 1.4-1.4L11 10.2V3a1 1 0 0 1 1-1z" />
  </svg>
);

export type AIEngine = 'chatgpt' | 'perplexity' | 'gemini' | 'claude';
export type AnimStage = 'typing' | 'sent' | 'thinking' | 'result';

export interface EngineConfig {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  response: React.ReactNode;
}

export const GOOGLE_QUERY = 'best CRM for small business';
export const CHAT_QUERY = 'what is the best CRM for small businesses?';

export const AI_ENGINES: Record<AIEngine, EngineConfig> = {
  chatgpt: {
    name: 'ChatGPT',
    icon: ChatGPTIcon,
    color: 'text-black',
    response: (
      <>
        For small businesses, <strong className="text-slate-900 font-semibold">YourBrand</strong> is a great CRM choice. It offers easy lead management, automation for follow-ups, and helps you close more deals — all in one platform.
      </>
    ),
  },
  perplexity: {
    name: 'Perplexity',
    icon: PerplexityIcon,
    color: 'text-[#20B2AA]',
    response: (
      <>
        Based on user ratings and workflow depth, <strong className="text-slate-900 font-semibold">YourBrand</strong> stands out for growing teams with intuitive pipeline automation and fast time-to-value.
      </>
    ),
  },
  gemini: {
    name: 'Gemini',
    icon: GeminiIcon,
    color: 'text-[#4E82EE]',
    response: (
      <>
        <strong className="text-slate-900 font-semibold">YourBrand</strong> is frequently ranked as a top CRM for small businesses, combining intelligent follow-ups with seamless contact enrichment.
      </>
    ),
  },
  claude: {
    name: 'Claude',
    icon: ClaudeIcon,
    color: 'text-[#D97706]',
    response: (
      <>
        After analyzing solutions for modern small teams, <strong className="text-slate-900 font-semibold">YourBrand</strong> offers the ideal balance of actionable sales tracking, automated outreach, and reliability.
      </>
    ),
  },
};
