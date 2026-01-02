import Navbar from '../components/Navbar';

export default function BlogPage() {
  const posts = [
    {
      title: 'Getting Started with Lumina Forge',
      excerpt: 'Learn how to make the most of our platform with this comprehensive guide for beginners.',
      date: '2026-01-01',
      author: 'Alex Chen',
      category: 'Tutorial',
      readTime: '5 min read'
    },
    {
      title: 'Announcing Our New Features',
      excerpt: 'We are excited to announce several new features that will enhance your creative workflow.',
      date: '2025-12-28',
      author: 'Sarah Miller',
      category: 'Product',
      readTime: '3 min read'
    },
    {
      title: 'Building a Content Strategy',
      excerpt: 'Tips and best practices for creating engaging content that resonates with your audience.',
      date: '2025-12-25',
      author: 'Mike Johnson',
      category: 'Guide',
      readTime: '8 min read'
    },
    {
      title: 'The Future of Content Creation',
      excerpt: 'Exploring emerging trends and technologies shaping the future of digital content.',
      date: '2025-12-20',
      author: 'Alex Chen',
      category: 'Insights',
      readTime: '6 min read'
    },
    {
      title: 'Team Collaboration Tips',
      excerpt: 'How to work effectively with your team using Lumina Forge collaboration features.',
      date: '2025-12-15',
      author: 'Sarah Miller',
      category: 'Tutorial',
      readTime: '4 min read'
    },
    {
      title: 'Security Best Practices',
      excerpt: 'Keep your content safe and secure with these essential security guidelines.',
      date: '2025-12-10',
      author: 'Mike Johnson',
      category: 'Security',
      readTime: '7 min read'
    }
  ];

  const categories = ['All', 'Tutorial', 'Product', 'Guide', 'Insights', 'Security'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Insights, tutorials, and updates from the Lumina Forge team
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get the latest posts and updates delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
