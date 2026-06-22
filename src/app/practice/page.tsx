import { Code, Terminal, Brain, CheckCircle } from 'lucide-react';

const tracks = [
  { title: "100 Days of Code", icon: Code, color: "text-blue-500", bg: "bg-blue-50" },
  { title: "Data Structures", icon: Brain, color: "text-purple-500", bg: "bg-purple-50" },
  { title: "Algorithm Masters", icon: Terminal, color: "text-green-500", bg: "bg-green-50" },
  { title: "SQL Practice", icon: CheckCircle, color: "text-orange-500", bg: "bg-orange-50" },
];

export default function PracticePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Master Your Skills</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Practice with thousands of coding problems and assessment tests to ace your next interview.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid md:grid-cols-4 gap-6">
          {tracks.map((track) => (
            <div key={track.title} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition cursor-pointer group">
              <div className={`w-14 h-14 ${track.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                <track.icon className={`w-7 h-7 ${track.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{track.title}</h3>
              <p className="text-sm text-gray-500 mb-4">500+ Questions</p>
              <button className="text-blue-600 text-sm font-bold flex items-center gap-2 group-hover:underline">
                Practice Now →
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <h2 className="text-3xl font-bold mb-12">Popular Tracks</h2>
         <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition">
                <div className="w-full md:w-48 bg-gray-100 aspect-video md:aspect-square"></div>
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold">Preparation Kit {i}</h4>
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Beginner</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">Comprehensive track covering all the fundamentals needed for top tech companies.</p>
                  <div className="flex items-center gap-6 text-xs text-gray-400">
                    <span>12 Topics</span>
                    <span>120+ Questions</span>
                    <span>15 Mock Tests</span>
                  </div>
                </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
