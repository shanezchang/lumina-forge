import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <main>
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-gray-100">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              Welcome to<br />Lumina Forge
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-12 font-light">
              A minimal content platform for your ideas
            </p>
            <button className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
        </section>

        {/* Feature Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Simple', desc: 'Clean and intuitive interface' },
                { title: 'Fast', desc: 'Optimized for performance' },
                { title: 'Secure', desc: 'Your data is protected' }
              ].map((item, i) => (
                <div key={i} className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-black flex items-center justify-center text-white text-2xl font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Grid Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">
              Latest Content
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i}
                  className="group p-8 rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                >
                  <div className="aspect-square flex items-center justify-center text-gray-300 mb-4 bg-gray-50 rounded">
                    <span className="text-5xl font-thin">{i}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Content Title {i}</h3>
                  <p className="text-gray-600 text-sm font-light">
                    Brief description of the content goes here
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
              Ready to start?
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
              Join us and bring your ideas to life
            </p>
            <button className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 hover:scale-105">
              Sign Up Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-semibold">Lumina Forge</div>
            <div className="flex gap-8 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
            </div>
            <div className="text-sm text-gray-500">
              © 2026 Lumina Forge
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
