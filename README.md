# Pokédex Application

A modern, responsive Pokédex web application built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Browse and explore detailed information about Pokémon with a beautiful, user-friendly interface.

## Features

### 🎯 Core Features
- **Dual View Modes**: Switch between pagination and infinite scroll views
- **Pokémon Grid**: Browse all Pokémon with responsive grid layouts
- **Detailed Pokémon Pages**: View comprehensive information including:
  - High-quality official artwork
  - Type badges with color coding
  - Height and weight measurements
  - Base stats with visual progress bars
  - Abilities (regular and hidden)
  - Base experience points
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Image Fallbacks**: Graceful handling of missing Pokémon images
- **Loading States**: Skeleton loaders for smooth user experience
- **Error Handling**: Comprehensive error boundaries and empty states

### ⚡ Performance
- Static Site Generation (SSG) for Pokémon detail pages
- Image optimization with Next.js Image component
- Efficient data fetching with React Query
- Revalidation strategy for fresh data

## Tech Stack

- **Framework**: [Next.js 16.1.6](https://nextjs.org/) with App Router
- **UI Library**: [React 19.2.3](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Data Fetching**: [TanStack Query (React Query) 5.90.21](https://tanstack.com/query)
- **Icons**: [Lucide React 0.577.0](https://lucide.dev/)
- **API**: [PokéAPI](https://pokeapi.co/)

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pokedex
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
pokedex/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── pokemon/[id]/      # Dynamic Pokémon detail pages
│   │   │   ├── page.tsx       # Detail page component
│   │   │   ├── loading.tsx    # Loading skeleton
│   │   │   ├── error.tsx      # Error boundary
│   │   │   └── not-found.tsx  # 404 page
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── error.tsx          # Global error boundary
│   │   └── not-found.tsx      # Global 404 page
│   ├── components/            # React components
│   │   ├── pokemon-card.tsx           # Pokémon grid card
│   │   ├── pokemon-detail.tsx         # Pokémon detail card
│   │   ├── pokemon-image.tsx          # Image with fallback
│   │   ├── pokemon-card-skeleton.tsx  # Loading skeleton
│   │   ├── pagination-grid.tsx        # Pagination view
│   │   ├── infinite-scroll-view.tsx   # Infinite scroll view
│   │   ├── pagination.tsx             # Pagination controls
│   │   ├── view-toggle.tsx            # View mode switcher
│   │   └── error-content.tsx          # Error display
│   ├── hooks/                 # Custom React hooks
│   │   └── use-pokemon-infinite.ts    # Infinite scroll hook
│   ├── lib/                   # Utility functions
│   │   └── api.ts             # API functions
│   ├── types/                 # TypeScript types
│   │   └── pokemon.ts         # Pokémon type definitions
│   └── constants/             # App constants
│       └── config.ts          # Configuration values
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Key Components

### PokemonCard
Displays a Pokémon card in the grid view with image, name, and ID.

### PokemonDetailCard
Shows comprehensive Pokémon information including stats, abilities, and measurements.

### PaginationGrid
Server component that fetches and displays paginated Pokémon data.

### InfiniteScrollView
Client component with infinite scroll functionality using Intersection Observer.

## API Integration

The application uses [PokéAPI](https://pokeapi.co/) for all Pokémon data:
- **Base URL**: `https://pokeapi.co/api/v2`
- **Endpoints**:
  - `/pokemon?limit={limit}&offset={offset}` - List Pokémon
  - `/pokemon/{id}` - Get Pokémon details
- **Images**: Official artwork from GitHub sprites repository

## Configuration

### Revalidation
- Pokémon data revalidates every 24 hours (86400 seconds)
- Configured in `src/constants/config.ts`

### Static Generation
- First 151 Pokémon are pre-rendered at build time
- Additional Pokémon are generated on-demand

### Image Optimization
- Quality: 90 for detail pages, 75 for grid cards
- Responsive sizes for different breakpoints
- Automatic WebP conversion

## Responsive Breakpoints

- **Mobile**: < 640px (2 columns)
- **Tablet**: 640px - 768px (3 columns)
- **Desktop**: ≥ 768px (4 columns)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## License

This project is open source and available under the [MIT License](LICENSE).