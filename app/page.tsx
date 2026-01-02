export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b backdrop-blur-sm sticky top-0 z-10" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold tracking-tight">Lumina Forge</div>
            <nav className="flex gap-8">
              <a href="#" className="relative group transition-colors hover:text-gray-600">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="relative group transition-colors hover:text-gray-600">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center py-20 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Welcome to Lumina Forge</h1>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            A minimal content platform for your ideas
          </p>
        </div>

        {/* Content Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className="p-8 rounded-lg border transition-all hover:shadow-md hover:-translate-y-1"
              style={{ 
                borderColor: 'var(--border)',
                backgroundColor: 'var(--card-bg)'
              }}
            >
              <div className="h-32 flex items-center justify-center text-gray-400">
                <span className="text-4xl font-light">Content {i}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
