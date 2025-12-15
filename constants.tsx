import { Droplets, Volume2, Palette, ShieldCheck, Flame, Zap } from 'lucide-react';
import { FeatureItem, ProductItem, ChartDataPoint } from './types';

export const COMPANY_INFO = {
  name: "High 3D Wall Panels",
  phone: "+251 969462956", // Placeholder
  address: "Addis Ababa", // Placeholder
  social: {
    telegram: "#",
    tiktok: "#",
    instagram: "#"
  }
};

export const FEATURES: FeatureItem[] = [
  {
    id: 'waterproof',
    title: { en: "Waterproof & Durable", am: "ውሃ እና እሳት አይበግረውም" },
    description: { en: "Safe for any environment, moisture resistant.", am: "አስተማማኝ እና ጠንካራ። ለረጅም ጊዜ የሚቆይ።" },
    icon: Droplets
  },
  {
    id: 'soundproof',
    title: { en: "Sound Insulation", am: "ድምፅ ይቀንሳል" },
    description: { en: "Reduces noise and echo significantly.", am: "ለቢሮ እና ለመኖሪያ ቤት ፀጥታን ይፈጥራል።" },
    icon: Volume2
  },
  {
    id: 'paintable',
    title: { en: "Paintable Surface", am: "ቀለም ይቀበላል" },
    description: { en: "Customize with any color you like.", am: "ከቤትዎ ቀለም ጋር እንዲሄድ አድርገው ማስቀባት ይችላሉ።" },
    icon: Palette
  },
  {
    id: 'fire-resistant',
    title: { en: "Fire Resistant", am: "እሳት መከላከያ" },
    description: { en: "Added safety for your peace of mind.", am: "ለደህንነት አስተማማኝ የሆነ።" },
    icon: Flame
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'p1',
    title: { en: "Geometric Modern", am: "ጂኦሜትሪክ ዲዛይን" },
    description: { en: "Sharp lines for modern offices.", am: "ለዘመናዊ ቢሮዎች እና ለሳሎን የሚሆኑ ቅርጾች።" },
    imageUrl: "https://i.imgur.com/g5h377H.png",
    category: "Geometric"
  },
  {
    id: 'p2',
    title: { en: "Ocean Wave", am: "የሞገድ ቅርፅ" },
    description: { en: "Calming fluid patterns.", am: "እንደ ውሃ ሞገድ ረጋ ያለ ስሜት የሚፈጥሩ።" },
    imageUrl: "https://i.imgur.com/N1TgqNj.png",
    category: "Wave"
  },
  {
    id: 'p3',
    title: { en: "Classic Luxury", am: "ክላሲክ ዲዛይን" },
    description: { en: "Timeless elegance.", am: "የድሮውን እና የዘመናዊውን ያዋሃዱ ምርጥ ዲዛይኖች።" },
    imageUrl: "https://i.imgur.com/G53Gkun.png",
    category: "Classic"
  },
  {
    id: 'p4',
    title: { en: "Hexagon Hive", am: "የንብ ቀፎ ቅርፅ" },
    description: { en: "Interlocking beauty.", am: "እርስ በርስ የተሳሰረ ውብ ንድፍ።" },
    imageUrl: "https://i.imgur.com/fD2Ez1I.png",
    category: "Geometric"
  },
  {
    id: 'p5',
    title: { en: "Dune Texture", am: "አሸዋማ መልክ" },
    description: { en: "Soft shadows and depth.", am: "ጥልቀት ያለው እና ለስላሳ እይታ።" },
    imageUrl: "https://i.imgur.com/uk8eiJi.png",
    category: "Wave"
  },
  {
    id: 'p6',
    title: { en: "Royal Brick", am: "ሮያል ጡብ" },
    description: { en: "Industrial yet premium.", am: "ለየት ያለ የቅንጦት ስሜት።" },
    imageUrl: "https://i.imgur.com/Av9MYHy.png",
    category: "Classic"
  }
];

export const PERFORMANCE_DATA: ChartDataPoint[] = [
  { name: 'Aesthetics', value: 98, comparison: 70 },
  { name: 'Sound Proofing', value: 85, comparison: 40 },
  { name: 'Durability', value: 95, comparison: 60 },
  { name: 'Value', value: 90, comparison: 75 },
];