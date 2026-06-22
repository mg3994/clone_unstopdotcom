import { Star, MessageSquare, Briefcase, Award } from 'lucide-react';

const mentors = [
  { name: "Anish Kumar", role: "SDE 3 @ Google", rating: "5.0", sessions: "150+", price: "Free" },
  { name: "Priya Singh", role: "Product Manager @ Amazon", rating: "4.9", sessions: "280+", price: "₹499" },
  { name: "Rahul Sharma", role: "Data Scientist @ Meta", rating: "5.0", sessions: "95+", price: "Free" },
  { name: "Sneha Patel", role: "UX Lead @ Microsoft", rating: "4.8", sessions: "120+", price: "₹299" },
];

export default function MentorPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Learn from the <span className="text-blue-600">Best</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book 1:1 mentorship sessions with top industry professionals to accelerate your career growth.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-2xl font-bold">Featured Mentors</h2>
          <div className="flex gap-4">
             <button className="px-6 py-2 border border-gray-200 rounded-full text-sm font-semibold hover:bg-gray-50 transition">Domain</button>
             <button className="px-6 py-2 border border-gray-200 rounded-full text-sm font-semibold hover:bg-gray-50 transition">Company</button>
             <button className="px-6 py-2 border border-gray-200 rounded-full text-sm font-semibold hover:bg-gray-50 transition">Sort By</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <div key={mentor.name} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition flex flex-col items-center p-8 text-center group">
              <div className="w-32 h-32 bg-gray-100 rounded-full mb-6 relative group-hover:scale-105 transition">
                 <div className="absolute bottom-0 right-2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-current" />
                 </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{mentor.role}</p>

              <div className="flex gap-6 mb-8 text-xs font-semibold text-gray-400">
                 <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" /> {mentor.sessions}
                 </div>
                 <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-orange-400" /> {mentor.rating}
                 </div>
              </div>

              <div className="mt-auto w-full">
                <div className="flex justify-between items-center mb-4">
                   <span className="text-lg font-bold text-blue-600">{mentor.price}</span>
                   <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Per Session</span>
                </div>
                <button className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-blue-600 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
