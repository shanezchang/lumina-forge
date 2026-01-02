export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold">Lumina Forge</div>
            <nav className="flex gap-6">
              <a href="#" className="hover:opacity-70 transition-opacity">Home</a>
              <a href="#" className="hover:opacity-70 transition-opacity">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Welcome</h1>
          <p className="text-lg opacity-60">Content coming soon...</p>
        </div>
      </main>
    </div>
  );
}
