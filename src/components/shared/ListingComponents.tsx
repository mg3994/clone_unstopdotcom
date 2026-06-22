import { MapPin, Users, Calendar, Filter } from 'lucide-react';

export default function OpportunityCard({ title, company, location, type, registrations }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition cursor-pointer flex gap-5">
      <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0"></div>
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition">{title}</h3>
          <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase">{type}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{company}</p>

        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {location}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {registrations} Registered
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            2 days left
          </div>
        </div>
      </div>
    </div>
  );
}

export function FilterSidebar() {
  const filters = [
    { name: 'Status', options: ['Live', 'Ended', 'Upcoming'] },
    { name: 'Categories', options: ['Hackathons', 'Quizzes', 'Case Study', 'Coding'] },
    { name: 'Eligibility', options: ['Students', 'Professionals'] }
  ];

  return (
    <aside className="w-72 hidden lg:block pr-8 border-r border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Filter className="w-5 h-5" /> Filters
        </h2>
        <button className="text-blue-600 text-sm font-semibold">Clear All</button>
      </div>

      <div className="space-y-8">
        {filters.map((filter) => (
          <div key={filter.name}>
            <h3 className="font-bold text-sm mb-4 text-gray-900">{filter.name}</h3>
            <div className="space-y-3">
              {filter.options.map((opt) => (
                <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
