# Design Brief: Zalta B2B Product Showcase

## Direction & Tone
Professional, editorial, refined. Modern corporate aesthetic inspired by SaaS leaders (Stripe, Linear). Conveys trustworthiness and product-centricity for facility managers and procurement officers evaluating hospitality suppliers.

## Palette (OKLCH)
| Token | Role | Light | Dark |
| --- | --- | --- | --- |
| **Primary** | Brand, headers, CTAs | `0.32 0.05 264` (slate) | `0.72 0.08 43` (stone-warm) |
| **Accent** | Secondary highlights, hover states | `0.68 0.13 43` (warm stone) | `0.72 0.12 43` (lighter stone) |
| **Secondary** | Muted text, secondary fills | `0.88 0.06 43` (light stone) | `0.22 0.04 43` (dark stone) |
| **Background** | Page background | `0.98 0` (near-white) | `0.12 0.01 264` (near-black slate) |
| **Card** | Card surfaces, elevation | `1.0 0` (white) | `0.16 0.02 264` (slate) |
| **Foreground** | Body text | `0.16 0.02 256` (slate) | `0.94 0.02 0` (off-white) |
| **Muted** | Disabled, subtle text | `0.94 0.01 0` (light grey) | `0.24 0.02 264` (dark grey) |
| **Border** | Cards, inputs, dividers | `0.92 0.01 0` (subtle line) | `0.24 0.02 264` (slate line) |

## Typography
| Role | Font | Scale | Weight | Use |
| --- | --- | --- | --- | --- |
| Display | Fraunces serif | 32–48px | 700 | Page titles, section headers, hero |
| Body | DM Sans sans-serif | 14–18px | 400–600 | Copy, labels, navigation |
| Mono | JetBrains Mono | 12–14px | 400 | Code blocks, technical specs |

Hierarchy via size + weight; generous line-height (1.6) for readability on product specs.

## Structural Zones
| Zone | Background | Border | Purpose |
| --- | --- | --- | --- |
| Header | `bg-card border-b` | `border-border` | Fixed nav with logo, category menu |
| Hero | `bg-gradient-subtle` | None | Large banner with company tagline |
| Category Cards | `bg-card shadow-card` | `border-border` | Product range selection, grid layout |
| Product Grid | `bg-background` | None | Product listings per category |
| Footer | `bg-muted/10 border-t` | `border-border` | Company info, contact, links |

## Shape & Spacing
- **Border Radius**: `0.5rem` (minimal, professional; used on cards, buttons)
- **Spacing Scale**: 8px base (4, 8, 12, 16, 24, 32, 48px)
- **Density**: Moderate; ample whitespace around products, tight typography within cards

## Component Patterns
- **Category Card**: Elevated, hover shadow lift, minimal border, product count badge
- **Product Grid**: 3-column on desktop, 1-column mobile, consistent card height
- **Button**: Primary (slate bg), secondary (stone border), ghost (text-only)
- **Navigation**: Horizontal menu on desktop, mobile hamburger menu

## Motion & Interaction
- Card hover: `shadow-card → shadow-elevated` (0.3s smooth)
- Button press: Opacity shift (0.3s cubic-bezier)
- Page transitions: Fade in (0.3s)

## Differentiation
Category cards feature subtle depth progression on hover; professional photography-ready spacing ensures product images display at their best. Clean grid layouts and minimal decoration keep focus on product information and buyer decision-making.

## Constraints
- No playful animations (corporate context)
- No generic AI gradients or neon effects
- Minimal color variation; primary palette (slate + stone) only
- Card shadows follow professional standards (subtle, not glowing)
- Light mode is primary; dark mode supports accessibility only

## Design Files
- `src/frontend/src/index.css` — OKLCH tokens, @font-face declarations, utility classes
- `src/frontend/tailwind.config.js` — Custom shadows, animations (accordion default only)
- Fonts: `/src/frontend/public/assets/fonts/DMSans.woff2`, `/Fraunces.woff2`

