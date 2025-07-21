# RisingEdge Website Installation Guide

This guide will walk you through setting up the RisingEdge website on your local machine.

## Prerequisites

- Node.js (v16 or higher)
- npm or pnpm (pnpm is recommended for faster installation)

## Step 1: Extract the ZIP File

Extract the `risingedge-website-complete.zip` file to your desired location.

## Step 2: Install Dependencies

Open a terminal or command prompt and navigate to the extracted folder:

```bash
cd path/to/risingedge-website
```

Install the dependencies:

```bash
# Using npm
npm install

# Using pnpm (recommended)
pnpm install
```

This may take a few minutes as it installs all the necessary packages.

## Step 3: Start the Development Server

Once the installation is complete, start the development server:

```bash
# Using npm
npm run dev

# Using pnpm
pnpm dev
```

## Step 4: Access the Website

Open your web browser and navigate to:

```
http://localhost:5173
```

You should now see the RisingEdge website running locally on your machine.

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try to use the next available port (usually 5174). Check your terminal for the correct URL.

### Dependencies Installation Issues

If you encounter issues during dependency installation, try:

```bash
# Clear npm cache
npm cache clean --force

# Or for pnpm
pnpm store prune

# Then reinstall
npm install
# Or
pnpm install
```

### Node Version Issues

If you get errors related to Node.js version, make sure you're using Node.js v16 or higher. You can check your version with:

```bash
node --version
```

## Building for Production

To create a production build:

```bash
# Using npm
npm run build

# Using pnpm
pnpm build
```

The built files will be in the `dist` directory and can be deployed to any static hosting service.

