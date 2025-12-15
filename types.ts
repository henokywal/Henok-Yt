import { LucideIcon } from 'lucide-react';

export interface BilingualText {
  en: string;
  am: string;
}

export interface FeatureItem {
  id: string;
  title: BilingualText;
  description: BilingualText;
  icon: LucideIcon;
}

export interface ProductItem {
  id: string;
  title: BilingualText;
  description: BilingualText;
  imageUrl: string;
  category: 'Geometric' | 'Wave' | 'Classic';
}

export interface ChartDataPoint {
  name: string;
  value: number;
  comparison: number;
}