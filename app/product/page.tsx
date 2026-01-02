import Navbar from '../components/Navbar';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Our Product
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Discover the powerful features that make Lumina Forge the perfect platform for your creative workflow
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Content Management',
                description: 'Easily create, organize, and manage your content with our intuitive interface',
                icon: '📝'
              },
              {
                title: 'Collaboration',
                description: 'Work together with your team in real-time with seamless collaboration tools',
                icon: '👥'
              },
              {
                title: 'Analytics',
                description: 'Track performance and gain insights with comprehensive analytics dashboard',
                icon: '📊'
              },
              {
                title: 'Customization',
                description: 'Tailor the platform to your needs with extensive customization options',
                icon: '🎨'
              },
              {
                title: 'Security',
                description: 'Enterprise-grade security to keep your data safe and protected',
                icon: '🔒'
              },
              {
                title: 'Integration',
                description: 'Connect with your favorite tools through our robust API and integrations',
                icon: '🔗'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of users already using Lumina Forge
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors font-medium">
            Start Free Trial
          </button>
        </section>
      </main>
    </div>
  );
}
