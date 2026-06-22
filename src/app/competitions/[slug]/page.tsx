import { MapPin, Users, Calendar, Share2, Award, Briefcase, Info } from 'lucide-react';

export default async function CompetitionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-blue-600 h-64 w-full"></div>

      <div className="max-w-[1200px] mx-auto px-4 -mt-32">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex gap-6 mb-8">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0"></div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{slug.replace(/-/g, ' ').toUpperCase()}</h1>
                  <p className="text-blue-600 font-semibold mb-4">Organized by Google</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Online</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 15,234 Registered</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 border-b border-gray-100 pb-4 mb-8">
                <button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-4 -mb-[18px]">Description</button>
                <button className="text-gray-500 font-medium pb-4">Timeline</button>
                <button className="text-gray-500 font-medium pb-4">Prizes</button>
              </div>

              <div className="prose max-w-none text-gray-700">
                <h3 className="text-xl font-bold mb-4">About the Competition</h3>
                <p className="mb-4">
                  This is a high-fidelity clone of the Unstop competition page. The detail page features all the essential elements like registration counts, organizer info, and multi-tab content navigation.
                </p>
                <p>
                  Participants will be challenged to solve real-world problems using cutting-edge technology. This opportunity is open to all students across the globe.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" /> What's in it for you?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                 <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <p className="font-bold text-orange-700">INR 1,00,000</p>
                    <p className="text-xs text-orange-600">First Prize</p>
                 </div>
                 <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="font-bold text-blue-700">Certificates</p>
                    <p className="text-xs text-blue-600">To all participants</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <div className="mb-6">
                 <p className="text-xs text-gray-400 uppercase font-bold mb-1">Registration Fee</p>
                 <p className="text-2xl font-bold text-gray-900">Free</p>
              </div>

              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition mb-4 shadow-lg shadow-blue-100">
                Register Now
              </button>

              <div className="space-y-4 pt-6 border-t border-gray-100">
                 <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                       <p className="text-xs text-gray-500">Deadline</p>
                       <p className="text-sm font-bold">25 Dec 2024, 11:59 PM</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div>
                       <p className="text-xs text-gray-500">Team Size</p>
                       <p className="text-sm font-bold">1 - 3 Members</p>
                    </div>
                 </div>
              </div>

              <button className="w-full mt-8 flex items-center justify-center gap-2 text-gray-600 font-semibold text-sm hover:text-blue-600 transition">
                <Share2 className="w-4 h-4" /> Share with friends
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
