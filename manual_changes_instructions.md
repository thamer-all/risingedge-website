# Manual Changes Instructions for RisingEdge Website

## 1. Fix Spacing Between Navbar and Hero Sections

### File: `src/App.jsx`
Add padding-top to the main element to create space between the navbar and content:

```jsx
// Find this line:
<main>

// Replace with:
<main className="pt-20">
```

## 2. Fix Hero Section Backgrounds for About Subpages

### File: `src/components/Mission.jsx`
Update the hero section with consistent gradient background:

```jsx
// Find the hero section (usually starts with <section>)
// Replace with:
<section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20 lg:py-32 overflow-hidden">
  <div className="absolute inset-0 bg-black/20"></div>
  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content remains the same */}
  </div>
</section>
```

### File: `src/components/Team.jsx`
Update the hero section with consistent gradient background:

```jsx
// Find the hero section (usually starts with <section>)
// Replace with:
<section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20 lg:py-32 overflow-hidden">
  <div className="absolute inset-0 bg-black/20"></div>
  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content remains the same */}
  </div>
</section>
```

### File: `src/components/History.jsx`
Update the hero section with consistent gradient background:

```jsx
// Find the hero section (usually starts with <section>)
// Replace with:
<section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20 lg:py-32 overflow-hidden">
  <div className="absolute inset-0 bg-black/20"></div>
  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content remains the same */}
  </div>
</section>
```

## 3. Fix Invisible Testimonial Text

### File: `src/components/TestimonialsSection.jsx`
Update the testimonial text colors:

```jsx
// Find the main testimonial blockquote
// Replace with:
<blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8 italic">
  "{testimonials[currentTestimonial].quote}"
</blockquote>

// Find the author name div
// Replace with:
<div className="font-bold text-gray-900 text-lg">
  {testimonials[currentTestimonial].author}
</div>

// Find the role div
// Replace with:
<div className="text-primary font-medium">
  {testimonials[currentTestimonial].role}
</div>
```

## 4. Add Animations to Hero Component

### File: `src/components/Hero.jsx`
Add Framer Motion animations:

```jsx
// Import at the top if not already present
import { motion } from 'framer-motion';

// Find the hero content container
// Replace with:
<motion.div
  className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  {/* Content remains the same */}
</motion.div>

// Add floating elements at the end of the section:
<motion.div
  className="absolute top-20 left-10 w-4 h-4 bg-yellow-300 rounded-full opacity-60"
  animate={{
    y: [0, -20, 0],
    opacity: [0.6, 1, 0.6]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
<motion.div
  className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full opacity-40"
  animate={{
    y: [0, 15, 0],
    x: [0, 10, 0],
    opacity: [0.4, 0.8, 0.4]
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 1
  }}
/>
```

## 5. Add Animations to Testimonials

### File: `src/components/TestimonialsSection.jsx`
Add Framer Motion animations:

```jsx
// Import at the top if not already present
import { motion } from 'framer-motion';

// Find the testimonial container
// Replace with:
<motion.div 
  className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
  initial={{ opacity: 0, y: 40 }}
  animate={isVisible ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {/* Content remains the same */}
</motion.div>
```

## 6. Standardize Layout and Spacing

### All Hero Sections
Ensure consistent padding and container structure:

```jsx
// For all hero sections, use:
<section className="... py-20 lg:py-32 ...">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### All Content Sections
Ensure consistent padding and container structure:

```jsx
// For all content sections, use:
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

