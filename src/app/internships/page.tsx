import OpportunityCard, { FilterSidebar } from "@/components/shared/ListingComponents";

const jobs = [
  { title: "Software Development Engineer", company: "Uber", location: "Bangalore", type: "Full Time", registrations: "45,000" },
  { title: "Product Marketing Manager", company: "Zomato", location: "Gurgaon", type: "Full Time", registrations: "12,400" },
  { title: "Data Analyst", company: "Flipkart", location: "Remote", type: "Full Time", registrations: "32,100" },
  { title: "UX Researcher", company: "Cred", location: "Bangalore", type: "Full Time", registrations: "8,800" },
];

export default function InternshipsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Internships</h1>
          <p className="text-gray-600 max-w-2xl">
            Discover internships across various industries. Gain experience and jumpstart your career.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex">
          <FilterSidebar />
          <main className="flex-grow lg:pl-10">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-500 font-medium">4 Internships Found</p>
            </div>

            <div className="space-y-4">
              {[
                { title: "Software Engineering Intern", company: "Google", location: "Bangalore", type: "Internship", registrations: "100,000" },
                { title: "Product Management Intern", company: "Meta", location: "Remote", type: "Internship", registrations: "55,000" },
                { title: "Data Science Intern", company: "Netflix", location: "Mumbai", type: "Internship", registrations: "22,000" },
                { title: "Design Intern", company: "Adobe", location: "Noida", type: "Internship", registrations: "12,000" },
              ].map((internship, index) => (
                <OpportunityCard key={index} {...internship} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
