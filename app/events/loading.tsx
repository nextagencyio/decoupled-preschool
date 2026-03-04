export default function Loading() {
  return (
    <div className="min-h-screen bg-amber-50 animate-pulse">
      <div className="bg-white border-b-4 border-primary-400 h-16" />
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 h-64" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-3xl border-2 border-primary-100 shadow-lg overflow-hidden">
              <div className="h-48 bg-primary-100" />
              <div className="p-6 space-y-3">
                <div className="h-5 bg-accent-100 rounded-full w-1/3" />
                <div className="h-6 bg-primary-50 rounded-full w-3/4" />
                <div className="h-4 bg-gray-100 rounded-full w-full" />
                <div className="h-4 bg-gray-100 rounded-full w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
