export interface ICPLead {
  id: number;
  name: string;
  avatarText: string;
  avatarBg: string;
  title: string;
  company: string;
  companyDomain: string;
  companyFaviconText: string;
  companyFaviconBg: string;
  linkedin: string;
  email: string;
  emailStatus: 'Verified' | 'Probable';
  icpScore: number;
  persona: string;
  personaColor: string;
  companySize: string;
  industry: string;
  industryColor: string;
  intentSignal: string;
  intentColor: string;
  location: string;
  bio: string;
  painPoints: string[];
  buyingTriggers: string[];
  recommendedOutreach: string;
}

export const icpData: ICPLead[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    avatarText: 'SJ',
    avatarBg: 'bg-[#F43F5E] text-white',
    title: 'VP of Revenue Operations',
    company: 'Clay',
    companyDomain: 'clay.com',
    companyFaviconText: 'c',
    companyFaviconBg: 'bg-gradient-to-tr from-[#EA580C] via-[#F43F5E] to-[#8B5CF6] text-white',
    linkedin: 'linkedin.com/in/sarah-jenkins-gtm',
    email: 'sarah.j@clay.com',
    emailStatus: 'Verified',
    icpScore: 98,
    persona: 'Tier 1 Economic Buyer',
    personaColor: 'bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]',
    companySize: '51-200',
    industry: 'MarTech / Sales AI',
    industryColor: 'bg-[#F4EBE2] text-[#8C5D3E]',
    intentSignal: 'High Intent · Hiring 5+ SDRs',
    intentColor: 'bg-[#DCFCE7] text-[#15803D]',
    location: 'New York, NY',
    bio: 'Oversees GTM infrastructure, outbound orchestration, data provider waterfalling, and pipeline conversion metrics at Clay.',
    painPoints: [
      'High cost and operational friction managing 10+ disjointed data provider APIs',
      'Need real-time account buying signals to trigger personalized outbound',
      'SDR ramp time on manual qualification is dragging conversion cycles',
    ],
    buyingTriggers: [
      'Active job postings for Revenue Operations and Outbound Leads',
      'Recent tech stack review and expansion into mid-market enterprise tiers',
    ],
    recommendedOutreach:
      'Highlight how Coirei autonomously unifies web scraping intelligence with automated buying signal triggers to reduce manual prospecting hours by 65%.',
  },
  {
    id: 2,
    name: 'Alex Rivera',
    avatarText: 'AR',
    avatarBg: 'bg-[#3B82F6] text-white',
    title: 'Head of Growth & Outbound',
    company: 'Ramp',
    companyDomain: 'ramp.com',
    companyFaviconText: 'r',
    companyFaviconBg: 'bg-[#D9F99D] text-[#1E293B]',
    linkedin: 'linkedin.com/in/alexrivera-growth',
    email: 'a.rivera@ramp.com',
    emailStatus: 'Verified',
    icpScore: 96,
    persona: 'Decision Maker',
    personaColor: 'bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]',
    companySize: '501-1,000',
    industry: 'FinTech',
    industryColor: 'bg-[#EFF6FF] text-[#2563EB]',
    intentSignal: 'Expanding Mid-Market Outbound',
    intentColor: 'bg-[#DCFCE7] text-[#15803D]',
    location: 'New York, NY',
    bio: 'Drives outbound acquisition pipeline and automated account prioritization across mid-market and emerging enterprise commercial segments.',
    painPoints: [
      'Stale contact data and outdated trigger events leading to high email bounce rates',
      'Lack of competitive displacement signals when prospects evaluate card programs',
    ],
    buyingTriggers: [
      'Scaling account executives team by 30% this quarter',
      'Publicly stated goal to penetrate Series A-C venture backed companies',
    ],
    recommendedOutreach:
      'Focus on real-time competitor displacement tracking and verified decision-maker routing with sub-second accuracy.',
  },
  {
    id: 3,
    name: 'David Chen',
    avatarText: 'DC',
    avatarBg: 'bg-[#18181B] text-white',
    title: 'Director of Sales Development',
    company: 'Cursor',
    companyDomain: 'cursor.com',
    companyFaviconText: 'C',
    companyFaviconBg: 'bg-[#18181B] text-white',
    linkedin: 'linkedin.com/in/davidchen-salesdev',
    email: 'david@cursor.com',
    emailStatus: 'Verified',
    icpScore: 94,
    persona: 'Champion & Evaluator',
    personaColor: 'bg-[#F3E8FF] text-[#7E22CE] border-[#E9D5FF]',
    companySize: '11-50',
    industry: 'Developer Tools',
    industryColor: 'bg-[#F5EFEA] text-[#8C5D3E]',
    intentSignal: 'Evaluating AI Prospecting Engines',
    intentColor: 'bg-[#FEF3C7] text-[#B45309]',
    location: 'San Francisco, CA',
    bio: 'Leads outbound motion for enterprise software engineering teams adopting AI pair-programming editors at scale.',
    painPoints: [
      'Developer leaders are notoriously hard to reach via traditional generic outbound templates',
      'Requires hyper-personalized technical context from company public repos and job openings',
    ],
    buyingTriggers: [
      'Recent Series A funding announcement',
      'Launched enterprise security compliance tier requiring top-down executive outreach',
    ],
    recommendedOutreach:
      'Demo autonomous deep-research agents that analyze prospect tech stacks before generating hyper-relevant outreach.',
  },
  {
    id: 4,
    name: 'Elena Rostova',
    avatarText: 'ER',
    avatarBg: 'bg-[#0F766E] text-white',
    title: 'Chief Revenue Officer',
    company: 'Plaid',
    companyDomain: 'plaid.com',
    companyFaviconText: 'p',
    companyFaviconBg: 'bg-[#09090B] text-white',
    linkedin: 'linkedin.com/in/elena-rostova-cro',
    email: 'e.rostova@plaid.com',
    emailStatus: 'Verified',
    icpScore: 92,
    persona: 'Executive Sponsor',
    personaColor: 'bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]',
    companySize: '1,001-5,000',
    industry: 'FinTech Infrastructure',
    industryColor: 'bg-[#EFF6FF] text-[#2563EB]',
    intentSignal: 'Restructuring Enterprise GTM',
    intentColor: 'bg-[#FEF3C7] text-[#B45309]',
    location: 'San Francisco, CA',
    bio: 'Responsible for global enterprise sales, strategic banking partnerships, customer success, and partner ecosystem monetization.',
    painPoints: [
      'Enterprise pipeline velocity slowed due to multi-stakeholder consensus roadblocks',
      'Disconnected marketing and sales intelligence causing duplicated account touches',
    ],
    buyingTriggers: [
      'New fiscal year revenue target increases of 40% YoY',
      'Expanding into non-traditional lending and credit verification verticals',
    ],
    recommendedOutreach:
      'Present executive dashboard showing pipeline acceleration and automated account-level buying consensus tracking.',
  },
  {
    id: 5,
    name: 'Marcus Vance',
    avatarText: 'MV',
    avatarBg: 'bg-[#D97706] text-white',
    title: 'VP of Global Demand Gen',
    company: 'Airtable',
    companyDomain: 'airtable.com',
    companyFaviconText: 'a',
    companyFaviconBg: 'bg-[#EF4444] text-white',
    linkedin: 'linkedin.com/in/marcusvance-rev',
    email: 'm.vance@airtable.com',
    emailStatus: 'Verified',
    icpScore: 90,
    persona: 'Decision Maker',
    personaColor: 'bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]',
    companySize: '501-1,000',
    industry: 'B2B SaaS',
    industryColor: 'bg-[#F5EEFB] text-[#8B44BC]',
    intentSignal: 'Outbound Stack Modernization',
    intentColor: 'bg-[#DCFCE7] text-[#15803D]',
    location: 'San Francisco, CA',
    bio: 'Drives pipeline generation across product-led and enterprise sales-assisted motions for collaborative database workflows.',
    painPoints: [
      'Bridge the gap between free self-serve usage and $50k+ enterprise contracts',
      'Need automated detection of accounts hitting usage thresholds and budget approval milestones',
    ],
    buyingTriggers: [
      'New product launches around AI app building and connected enterprise systems',
      'Auditing GTM SaaS spend to consolidate single-purpose enrichment tools',
    ],
    recommendedOutreach:
      'Showcase how Coirei identifies product-led expansion signals and matches them with verified executive champions.',
  },
  {
    id: 6,
    name: 'Jessica Wu',
    avatarText: 'JW',
    avatarBg: 'bg-[#6366F1] text-white',
    title: 'Head of Enterprise GTM',
    company: 'Warp',
    companyDomain: 'warp.dev',
    companyFaviconText: '>',
    companyFaviconBg: 'bg-[#09090B] text-white',
    linkedin: 'linkedin.com/in/jessicawu-gtm',
    email: 'jessica@warp.dev',
    emailStatus: 'Verified',
    icpScore: 89,
    persona: 'Champion',
    personaColor: 'bg-[#F3E8FF] text-[#7E22CE] border-[#E9D5FF]',
    companySize: '11-50',
    industry: 'Developer Tools',
    industryColor: 'bg-[#F5EFEA] text-[#8C5D3E]',
    intentSignal: 'Trialing AI Sales Workflows',
    intentColor: 'bg-[#DCFCE7] text-[#15803D]',
    location: 'New York, NY',
    bio: 'Builds early outbound playbook and sales team infrastructure for developer terminal collaboration at venture-backed scale.',
    painPoints: [
      'Early stage team with limited headcount needing autonomous outbound execution',
      'Need to verify contact email deliverability and avoid domain spam reputation issues',
    ],
    buyingTriggers: [
      'Expanding monetization from individual developers to team engineering licenses',
      'Hiring initial sales and customer success team members',
    ],
    recommendedOutreach:
      'Offer turnkey ICP account discovery and verified contact lists ready for multichannel outreach on day one.',
  },
  {
    id: 7,
    name: 'Daniel Miller',
    avatarText: 'DM',
    avatarBg: 'bg-[#475569] text-white',
    title: 'VP of Marketing & RevOps',
    company: 'Brex',
    companyDomain: 'brex.com',
    companyFaviconText: 'B',
    companyFaviconBg: 'bg-[#E11D48] text-white',
    linkedin: 'linkedin.com/in/danielmiller-brex',
    email: 'd.miller@brex.com',
    emailStatus: 'Verified',
    icpScore: 87,
    persona: 'Economic Buyer',
    personaColor: 'bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]',
    companySize: '1,001-5,000',
    industry: 'FinTech',
    industryColor: 'bg-[#EFF6FF] text-[#2563EB]',
    intentSignal: 'Scaling Account-Based Marketing',
    intentColor: 'bg-[#FEF3C7] text-[#B45309]',
    location: 'San Francisco, CA',
    bio: 'Leads marketing operations, account-based targeting, and revenue tech integration across corporate cards and expense management.',
    painPoints: [
      'Complex target market segmentation across venture-backed startups vs. established mid-market',
      'Need unified data governance and instant contact verification',
    ],
    buyingTriggers: [
      'Announced enterprise global spend management solution expansion',
      'Actively evaluating AI outbound automation solutions',
    ],
    recommendedOutreach:
      'Demonstrate how Coirei continuously verifies decision-maker data against live corporate filings and web changes.',
  },
  {
    id: 8,
    name: 'Amara Okafor',
    avatarText: 'AO',
    avatarBg: 'bg-[#0284C7] text-white',
    title: 'Director of Revenue Enablement',
    company: 'Amplitude',
    companyDomain: 'amplitude.com',
    companyFaviconText: 'A',
    companyFaviconBg: 'bg-[#0284C7] text-white',
    linkedin: 'linkedin.com/in/amara-okafor-rev',
    email: 'a.okafor@amplitude.com',
    emailStatus: 'Verified',
    icpScore: 85,
    persona: 'Technical Evaluator',
    personaColor: 'bg-[#F3E8FF] text-[#7E22CE] border-[#E9D5FF]',
    companySize: '501-1,000',
    industry: 'Product Analytics',
    industryColor: 'bg-[#F0F4F8] text-[#486581]',
    intentSignal: 'Evaluating Signal Tracking',
    intentColor: 'bg-[#FEF3C7] text-[#B45309]',
    location: 'San Francisco, CA',
    bio: 'Empowers global enterprise sales reps with battlecards, prospect research briefings, and competitive positioning intelligence.',
    painPoints: [
      'Reps spend 4+ hours per week manually researching accounts before sales calls',
      'Need automated 1-page account intelligence briefings before executive discovery meetings',
    ],
    buyingTriggers: [
      'New sales enablement program rollout across North American enterprise sales team',
      'Focus on increasing rep win-rates against point solution analytics vendors',
    ],
    recommendedOutreach:
      'Show how Coirei generates 1-click comprehensive ICP dossier battlecards directly into rep workflows.',
  },
];
