import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            About Lumina Forge
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Building the future of creative content platforms
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
              We believe that everyone has a story to tell and ideas worth sharing. 
              Lumina Forge was created to empower creators, writers, and thinkers with 
              the tools they need to bring their vision to life. Our mission is to make 
              content creation accessible, intuitive, and enjoyable for everyone.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Simplicity',
                description: 'We believe in keeping things simple and intuitive',
                icon: '✨'
              },
              {
                title: 'Innovation',
                description: 'Constantly pushing boundaries and exploring new possibilities',
                icon: '🚀'
              },
              {
                title: 'Community',
                description: 'Building together with our users and listening to feedback',
                icon: '🤝'
              },
              {
                title: 'Quality',
                description: 'Delivering excellence in every feature we build',
                icon: '⭐'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alex Chen', role: 'Founder & CEO', avatar: '👨‍💼' },
              { name: 'Sarah Miller', role: 'Head of Design', avatar: '👩‍🎨' },
              { name: 'Mike Johnson', role: 'Lead Engineer', avatar: '👨‍💻' }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center text-4xl">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Content Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
