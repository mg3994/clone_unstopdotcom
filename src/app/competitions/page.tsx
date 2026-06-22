import OpportunityCard, { FilterSidebar } from "@/components/shared/ListingComponents";

const competitions = [
  { title: "National Level Case Study Challenge", company: "Amazon", location: "Online", type: "Hackathon", registrations: "25,000" },
  { title: "Innovation for Good 2024", company: "Google", location: "Global", type: "Quiz", registrations: "18,400" },
  { title: "Data Science Masters", company: "Microsoft", location: "Online", type: "Coding", registrations: "12,100" },
  { title: "Product Management Cup", company: "Meta", location: "Hybrid", type: "Case Study", registrations: "9,800" },
  { title: "UI/UX Designathon", company: "Adobe", location: "Online", type: "Hackathon", registrations: "15,600" },
];

export default function CompetitionsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Competitions</h1>
          <p className="text-gray-600 max-w-2xl">
            Explore and participate in various competitions, hackathons, and quizzes hosted by top brands and universities.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex">
          <FilterSidebar />
          <main className="flex-grow lg:pl-10">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-500 font-medium">{competitions.length} Opportunities Found</p>
              <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-blue-500">
                <option>Most Recent</option>
                <option>Popular</option>
                <option>Ending Soon</option>
              </select>
            </div>

            <div className="space-y-4">
              {competitions.map((comp, index) => (
                <OpportunityCard key={index} {...comp} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
