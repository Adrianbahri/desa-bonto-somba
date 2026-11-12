---
name: Portal Resmi Desa Nusantara
colors:
  surface: '#e8fff0'
  surface-dim: '#b8e4cc'
  surface-bright: '#e8fff0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#d1fee5'
  surface-container: '#ccf8df'
  surface-container-high: '#c6f2da'
  surface-container-highest: '#c1ecd4'
  on-surface: '#002114'
  on-surface-variant: '#404943'
  inverse-surface: '#0e3727'
  inverse-on-surface: '#cffbe2'
  outline: '#707973'
  outline-variant: '#bfc9c1'
  surface-tint: '#2c694e'
  primary: '#0f5238'
  on-primary: '#ffffff'
  primary-container: '#2d6a4f'
  on-primary-container: '#a8e7c5'
  inverse-primary: '#95d4b3'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#7c2e19'
  on-tertiary: '#ffffff'
  tertiary-container: '#9b452e'
  on-tertiary-container: '#ffcfc3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1f0ce'
  primary-fixed-dim: '#95d4b3'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#0e5138'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#ffdbd2'
  tertiary-fixed-dim: '#ffb4a1'
  on-tertiary-fixed: '#3c0800'
  on-tertiary-fixed-variant: '#7c2e19'
  background: '#e8fff0'
  on-background: '#002114'
  surface-variant: '#c1ecd4'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 56px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 1.5rem
  gutter-mobile: 1rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system establishes a trustworthy, modern civic portal that reflects Indonesian rural heritage through a contemporary digital lens. It merges approachable public governance with warmth, communal harmony (*gotong royong*), and the lush vitality of Indonesian agriculture and nature. 

The visual style blends modern corporate clarity with warm, organic touchpoints. Clean, expansive whitespace and structured civic grids are balanced by friendly, approachable typography and natural foliage tones. The interface avoids bureaucratic stiffness, prioritizing radical accessibility, clear information architecture, and an inviting digital front door for citizens, visitors, and village administrators alike.

## Colors
The palette balances vibrant, natural greens with sunlit amber and terracotta accents to reflect civic diligence, lush terrain, and cultural warmth.

- **Primary (`#2D6A4F`)**: Forest green embodying agriculture, prosperity, and stability. Used for primary CTAs, active navigation states, primary badges, and key civic banners.
- **Secondary (`#D97706`)**: Warm amber gold representing tourism highlights, village enterprise (*BUMDes*), and alert statuses.
- **Tertiary (`#E07A5F`)**: Terracotta earth used selectively for cultural heritage tags, artisanal showcases, and warm interactive markers.
- **Neutral Dark (`#1B4332`)**: Deep pine tint serving as high-contrast body text, primary typography, and prominent structural footers.
- **Backgrounds & Surfaces**: Canvas defaults to clean off-whites (`#F8FAF8` and `#F1F5F2`) paired with pure white (`#FFFFFF`) card surfaces to maintain natural clarity and high contrast.

## Typography
The typography balances regional pride with utilitarian legibility:
- **Headlines (Plus Jakarta Sans)**: Conveys warmth, optimism, and contemporary civic energy. Rounded geometry adds friendliness without sacrificing authority.
- **Body & Labels (Inter)**: Delivers neutral clarity for reading village regulations, administrative announcements, forms, and service catalogs.
- Clear step-downs for mobile viewport sizes ensure readability across entry-level smartphones commonly used in rural communities.

## Layout & Spacing
A fluid 12-column grid provides structural alignment for desktop, transitioning to 8 columns on tablet and 4 columns on mobile. 

- **Desktop (1024px+)**: Max content container width of 1240px centered, 24px (`1.5rem`) gutters, and dynamic margins.
- **Tablet (768px - 1023px)**: 16px to 24px gutters, flexible cards folding into 2-column sets.
- **Mobile (<768px)**: 16px (`1rem`) page margins, gutters set to 16px, stacked layout with full-width cards and tap targets optimized for one-handed operation.

## Elevation & Depth
Depth is maintained through soft natural illumination rather than artificial drop shadows:
- **Level 0 (Flat)**: Background surfaces tinted with `#F8FAF8` or `#F1F5F2` for clean section separation.
- **Level 1 (Card & Containers)**: `#FFFFFF` surfaces paired with a crisp `#E2E8F0` border and a delicate ambient shadow (`0 2px 8px -2px rgba(27, 67, 50, 0.05)`).
- **Level 2 (Interactive Floating / Hover)**: Slightly raised state with `0 8px 20px -4px rgba(27, 67, 50, 0.10)`, indicating clickable administrative services or tourism packages.
- **Level 3 (Modals & Drawers)**: High-level overlays using `0 16px 32px -8px rgba(27, 67, 50, 0.16)` alongside a 40% opacity moss backdrop blur.

## Shapes
Roundedness level `2` ensures approachable, friendly components while retaining institutional credibility. Standard interactive components receive an 8px (`0.5rem`) border radius, while prominent cards, announcement banners, and service modules use `rounded-lg` (16px / `1rem`) and `rounded-xl` (24px / `1.5rem`) for an inviting container feel.

## Components

- **Buttons**:
  - *Primary*: Forest green (`#2D6A4F`) background, white text, 8px radius, with subtle hover brightening (`#3A8262`).
  - *Secondary / Accent*: Warm amber (`#D97706`) background, white text, for tourism and urgent village actions.
  - *Outline*: 1.5px solid border in `#2D6A4F` with transparent interior, transitioning to light green wash on hover.
  - *Sizing*: Generous vertical padding (`12px` to `14px`) to guarantee mobile touch target compliance (min 48px height).

- **Badges & Administrative Status**:
  - Compact, rounded-full pills for citizen transparency (*Disetujui*, *Dalam Proses*, *Pengumuman*).
  - High contrast muted fills: light emerald for approved/completed, amber tint for pending, and neutral slate for archived.

- **Cards (Civic & Tourism)**:
  - White surface, 16px radius, subtle 1px border (`#E2E8F0`).
  - *Tourism Cards*: 16:9 imagery preview, tertiary terracotta badge over image, strong headline, and prominent directional action.
  - *Civic Service Cards*: Prominent circular icon container with light emerald background, brief description, and direct link to public paperwork/services (*Layanan Surat Online*).

- **Form Fields & Inputs**:
  - Off-white interior, `#CBD5E1` border, 8px radius.
  - Focus state displays a sharp 2px emerald outline (`#2D6A4F`) with an accompanying soft glow.
  - Labels use `label-md` in `#1B4332` with explicit required indicators.

- **Lists & Announcements**:
  - Divided by low-contrast rules (`#E2E8F0`), featuring prominent publication dates in pill badges, news thumbnails, and concise excerpts.