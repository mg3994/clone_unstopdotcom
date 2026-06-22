import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategoryGrid />

      {/* Popular Opportunities Section */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Opportunities</h2>
              <p className="text-gray-600">Handpicked opportunities just for you</p>
            </div>
            <button className="text-blue-600 font-semibold hover:underline">View All</button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition group">
                <div className="h-48 bg-gray-100 relative">
                   <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                     LIVE
                   </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Tech Challenge {i}</h4>
                      <p className="text-xs text-gray-500">Google • Global</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="text-sm font-medium text-blue-600">Free</div>
                    <div className="text-sm text-gray-500">10,000+ Registered</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
