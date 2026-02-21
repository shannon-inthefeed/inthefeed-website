# In the Feed - Landing Page Application

## Overview

In the Feed is a marketing landing page for a SaaS content marketing service. The application is built as a single-page application (SPA) with React, TypeScript, and Express, featuring multiple sections designed to convert visitors into customers through a carefully structured sales funnel.

The project focuses on mobile-first responsive design, SEO optimization following Google 2025 standards, and a comprehensive button design system using shadcn/ui components. The landing page includes hero sections, testimonials, pricing plans, FAQs, and multiple call-to-action (CTA) touchpoints.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state, React hooks for local state
- **Styling**: Tailwind CSS with custom design system
- **Component Library**: shadcn/ui (Radix UI primitives)

**Design System**:
- Custom color tokens defined in CSS variables (HSL format)
- Consistent spacing using Tailwind's spacing scale (4px increments)
- Button size variants: `sm`, `default`, `lg`, `icon`
- Typography system using Inter font family
- Mobile-first responsive breakpoints: 320px, 768px, 1024px

**Key Architectural Decisions**:
- Component-based architecture with reusable UI components in `/client/src/components/ui/`
- Landing page sections isolated in separate components for maintainability
- SEO component handles dynamic meta tag updates
- Design guidelines documented in markdown for consistency

### Backend Architecture

**Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling

**Server Structure**:
- `/server/index.ts`: Main application entry point with middleware setup
- `/server/routes.ts`: Route registration (currently minimal, prepared for API expansion)
- `/server/storage.ts`: Storage abstraction layer with in-memory implementation
- `/server/vite.ts`: Vite development server integration

**Key Architectural Decisions**:
- Middleware mode Vite integration for seamless development experience
- Request logging middleware for API monitoring
- Raw body capture for webhook integrations (prepared for future use)
- Storage interface pattern allows easy migration from in-memory to database

### Data Storage

**Current Implementation**: In-memory storage via `MemStorage` class
- Simple Map-based user storage
- Implements `IStorage` interface for easy swapping

**Database Preparation**: Drizzle ORM configured for PostgreSQL
- Schema defined in `/shared/schema.ts`
- User table with UUID primary keys
- Migration configuration ready in `drizzle.config.ts`
- **Note**: Database connection not yet active, but infrastructure is ready

**Key Architectural Decisions**:
- Storage abstraction allows switching from in-memory to PostgreSQL without code changes
- Drizzle ORM chosen for type-safe database operations
- Shared schema between client and server ensures type consistency
- Zod integration via drizzle-zod for runtime validation

### Build and Deployment

**Development**:
- Vite dev server with HMR
- TypeScript compilation in watch mode
- Replit-specific plugins for enhanced DX

**Production**:
- Vite builds client to `/dist/public/`
- esbuild bundles server to `/dist/index.js`
- Static file serving from built assets

**Key Architectural Decisions**:
- Separate build processes for client and server
- ESM modules throughout for modern JavaScript standards
- Single-command production start

### SEO Implementation

**Google 2025 Standards Compliance**:
- Mobile-first indexing with responsive viewport configuration
- Comprehensive meta tags (Open Graph, Twitter Cards, canonical URLs)
- JSON-LD structured data (Organization, Service, FAQPage schemas)
- robots.txt and sitemap preparation
- Dynamic SEO component for route-specific optimization

**Key Architectural Decisions**:
- SEO component updates document meta tags on route changes
- Structured data embedded in HTML for search engine discovery
- Image optimization with loading strategies
- Semantic HTML for accessibility and SEO

## External Dependencies

### UI Framework
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Unstyled, accessible components (accordion, dialog, dropdown, etc.)
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **Lucide React**: Icon library

### State and Data Management
- **TanStack React Query**: Server state management and caching
- **Wouter**: Lightweight routing library
- **Zod**: Schema validation

### Backend
- **Express**: Web application framework
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type-safe JavaScript
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler
- **PostCSS**: CSS processing with Tailwind

### Future Integration Points
- **Metricool**: Social media management (mentioned in pricing page)
- **Slack**: Customer support integration (mentioned in service tiers)
- **Email service**: Not yet configured (needed for newsletter and contact forms)
- **Payment processing**: Not yet configured (needed for subscription management)

### Assets
- Logo images stored in `/attached_assets/`
- Generated images for hero backgrounds, mockups, and testimonials
- Custom font loading from Google Fonts (Inter)