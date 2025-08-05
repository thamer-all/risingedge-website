import React from 'react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Empowering Youth Through Education",
      excerpt: "Discover how our education programs are making a difference in young lives and creating opportunities for a brighter future.",
      date: "January 15, 2024",
      author: "Sarah Johnson",
      category: "Education"
    },
    {
      id: 2,
      title: "Building Stronger Communities Together",
      excerpt: "Learn about our community outreach initiatives and how we're working to strengthen bonds within our neighborhoods.",
      date: "January 10, 2024",
      author: "Michael Chen",
      category: "Community"
    },
    {
      id: 3,
      title: "The Power of Mentorship",
      excerpt: "Explore the transformative impact of our mentorship programs and the success stories of our participants.",
      date: "January 5, 2024",
      author: "Emily Rodriguez",
      category: "Mentorship"
    },
    {
      id: 4,
      title: "Athletic Programs: More Than Just Sports",
      excerpt: "Discover how our athletic programs are building character, leadership skills, and lifelong friendships.",
      date: "December 28, 2023",
      author: "David Thompson",
      category: "Athletics"
    },
    {
      id: 5,
      title: "Volunteer Spotlight: Making a Difference",
      excerpt: "Meet some of our amazing volunteers and learn about the incredible impact they're making in our community.",
      date: "December 20, 2023",
      author: "Lisa Park",
      category: "Volunteers"
    },
    {
      id: 6,
      title: "Year in Review: 2023 Achievements",
      excerpt: "Take a look back at our accomplishments in 2023 and the milestones we've reached together.",
      date: "December 15, 2023",
      author: "Rising Edge Team",
      category: "Updates"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Blog</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
          Stay updated with the latest news, stories, and insights from Rising Edge Community. 
          Discover the impact we're making and the lives we're touching.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">By {post.author}</span>
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white transition-colors">
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-gradient-coral hover:scale-105 transition-transform duration-200 text-white font-semibold px-8 py-3">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

