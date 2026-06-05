# 🎒 Backpack Exchange Referral Website

A modern, multi-language referral website for Backpack cryptocurrency exchange, designed to attract and convert users from diverse global communities.

## 🌐 Live Website

**Production**: [https://www.backpackref.com/](https://www.backpackref.com/)  
**Vercel**: [https://backpack-referral.vercel.app/](https://backpack-referral.vercel.app/)

## 🎯 Referral Entry

This website now uses one primary referral link across all community cards:

- **Main Referral Link** → [backpack.exchange/join/meme](https://backpack.exchange/join/meme)
- **X Contact** → [@mikexuusa](https://x.com/mikexuusa) for Backpack Securities beta invite information

## ✨ Key Features

### 🌍 Multi-Language Support (9 Languages)
- **Automatic detection** based on browser locale
- **Languages**: English, 简体中文, 繁體中文, Français, Português, Italiano, Deutsch, 日本語, 한국어
- **Elegant dropdown** with flag emojis for easy switching

### 🔥 Official Updates & Campaigns
- **BP Staking Benefits** - Trading fee tiers, wire perks, Equity Exchange access, and product access subject to official terms
- **Backpack Securities** - Stocks and ETFs beta access through regulated securities infrastructure
- **Path to Liftoff** - Official SpaceX shares campaign running June 4-10, 2026 UTC
- **BP Token** - BP/USD spot trading, Solana token details, staking, and tokenomics
- **Wallet & Trading Tools** - Zero-fee wallet swaps/bridges and Grid Bot V2 automated trading updates

### 📊 Advanced Analytics
- **Google Analytics 4** integration with custom event tracking
- **User interaction monitoring** (button clicks, language changes, community selection)
- **Conversion funnel analysis** for referral optimization

### 🎨 Modern Design
- **Responsive layout** optimized for mobile, tablet, and desktop
- **Consistent max-width containers** for visual harmony
- **Gradient backgrounds** and smooth hover animations
- **Professional color scheme** matching Backpack branding

### ⚡ Performance & SEO
- **Next.js 16** with App Router for optimal performance
- **Dynamic meta tags** and structured data
- **Sitemap & robots.txt** for search engine optimization
- **Custom domain** with SSL certificate
- **Sub-millisecond loading** times

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework | 16.0+ |
| **TypeScript** | Type safety | Latest |
| **Tailwind CSS** | Styling | Latest |
| **Google Analytics** | User tracking | GA4 |
| **Vercel** | Hosting & deployment | - |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/xuxizhen/backpack-referral.git
cd backpack-referral

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

### Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

## 📁 Project Structure

```
backpack-referral/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with GA4
│   │   ├── page.tsx        # Main landing page
│   │   └── globals.css     # Global styles
├── public/
│   ├── sitemap.xml         # SEO sitemap
│   ├── robots.txt          # Crawler directives
│   └── favicon.ico         # Backpack favicon
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # Tailwind CSS / PostCSS config
└── package.json            # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000) - Backpack brand color
- **Secondary**: Gray gradients for depth
- **Accents**: Purple, blue, green gradients for CTAs
- **Community Colors**: Unique gradients per community section

### Typography
- **Headers**: Bold, large sizes for impact
- **Body**: Clean, readable text with proper contrast
- **CTAs**: Prominent button styling with hover effects

### Layout Principles
- **Consistent spacing** using Tailwind's spacing scale
- **Max-width containers** (max-w-6xl) for content alignment
- **Grid layouts** for responsive design
- **Card-based UI** for feature sections

## 📈 Analytics & Tracking

### Google Analytics Events
- `language_change` - User switches language
- `register_button_click` - CTA button interactions
- `community_selection` - Which referral link clicked
- `page_scroll` - User engagement depth

### Conversion Tracking
- **Referral click tracking** by community
- **Language preference analysis** for localization insights
- **User journey mapping** from landing to registration

## 🌏 SEO Optimization

### Technical SEO
- **Structured data** (JSON-LD) for rich snippets
- **Meta tags** dynamically updated per language
- **Open Graph** tags for social media sharing
- **Canonical URLs** to prevent duplicate content

### Content SEO
- **Keyword optimization** for crypto trading terms
- **Multi-language content** for global reach
- **Fresh content updates** with latest Backpack activities
- **Internal linking** strategy for user retention

## 🔄 Deployment

### Automatic Deployment (Recommended)
1. **Connect to Vercel**: Link your GitHub repository
2. **Configure custom domain**: Point DNS to Vercel
3. **Environment variables**: Add any required secrets
4. **Deploy**: Push to main branch triggers deployment

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm start

```

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes with proper testing
4. Commit with descriptive messages
5. Push to your branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Code Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Follow configured rules
- **Prettier**: Consistent code formatting
- **Responsive design**: Mobile-first approach

## 📜 Legal & Compliance

### Disclaimer
- All website content is AI-generated for promotional purposes
- Backpack promotions mentioned may not reflect actual offers
- Not financial or investment advice
- Users should conduct their own research before trading

### Privacy
- **Google Analytics**: Anonymized user tracking
- **No personal data**: Collection beyond standard analytics
- **GDPR compliant**: Cookie consent and data processing transparency

## 📞 Support & Resources

### Official Backpack Links
- **Main Exchange**: [backpack.exchange](https://backpack.exchange)
- **Documentation**: [learn.backpack.exchange](https://learn.backpack.exchange)
- **Support**: [support.backpack.exchange](https://support.backpack.exchange)

### Development Resources
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Vercel Deployment**: [vercel.com/docs](https://vercel.com/docs)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**⚡ Built with [Claude Code](https://claude.ai/code) - AI-powered development assistance**
