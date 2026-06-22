import OpportunityCard, { FilterSidebar } from "@/components/shared/ListingComponents";

const jobs = [
  { title: "Software Development Engineer", company: "Uber", location: "Bangalore", type: "Full Time", registrations: "45,000" },
  { title: "Product Marketing Manager", company: "Zomato", location: "Gurgaon", type: "Full Time", registrations: "12,400" },
  { title: "Data Analyst", company: "Flipkart", location: "Remote", type: "Full Time", registrations: "32,100" },
  { title: "UX Researcher", company: "Cred", location: "Bangalore", type: "Full Time", registrations: "8,800" },
];

export default function JobsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Jobs</h1>
          <p className="text-gray-600 max-w-2xl">
            Find the best job opportunities from top companies and startups. Apply now and build your career.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex">
          <FilterSidebar />
          <main className="flex-grow lg:pl-10">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-500 font-medium">{jobs.length} Jobs Found</p>
            </div>

            <div className="space-y-4">
              {jobs.map((job, index) => (
                <OpportunityCard key={index} {...job} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
