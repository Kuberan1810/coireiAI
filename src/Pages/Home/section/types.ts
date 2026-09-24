export interface Competitor {
  id: number;
  displayIndex?: number;
  name: string;
  website: string;
  social: string;
  industry: string;
  industryColor: string;
  businessModel: string;
  similarityScore: number;
  hqLocation: string;
  productType: string;
  pricingStructure: string;
  employeeCount: string;
  logoUrl?: string;
  faviconBg?: string;
  faviconText?: string;
  overview?: string;
  industryDetail?: string;
  companySize?: string;
  location?: string;
  founded?: string;
  offerings?: string[];
}
