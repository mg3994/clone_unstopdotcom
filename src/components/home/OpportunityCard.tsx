import React from 'react';

interface OpportunityCardProps {
  title: string;
  organization: string;
  location: string;
  logo: string;
  link: string;
  prizes?: string;
  type?: 'competition' | 'internship' | 'job';
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  title,
  organization,
  location,
  logo,
  link,
  prizes,
  type = 'competition'
}) => {
  return (
    <a
      href={link}
      className="block bg-white rounded-2xl border border-[#e5effa] hover:shadow-[0_10px_30px_rgba(0,10,50,0.08)] transition-all duration-300 overflow-hidden h-full flex flex-col group"
    >
      <div className="p-5 flex justify-between gap-4 items-start flex-1">
        <div className="flex flex-col gap-2">
          {prizes && (
            <div className="flex items-center gap-1.5 text-[#1a9a6c] font-bold text-[11px] mb-1">
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/69c2170090c00_win_prize_note_img.svg" className="w-3.5 h-3.5" alt="prize" />
              <span>Prizes worth {prizes}</span>
            </div>
          )}

          <div className="flex items-center gap-1.5 text-[#8692a4] text-[11px] font-medium">
            {location.toLowerCase().includes('online') ? (
              <span className="w-4 h-4 opacity-70" style={{
                maskImage: 'url("https://cdn.unstop.com/assets/icons/earth-public.svg")',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                backgroundColor: 'currentColor'
              }}></span>
            ) : (
              <span className="w-4 h-4 opacity-70" style={{
                maskImage: 'url("https://cdn.unstop.com/assets/icons/location_on.svg")',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                backgroundColor: 'currentColor'
              }}></span>
            )}
            <span>{location}</span>
          </div>
        </div>

        <div className="w-[66px] h-[66px] rounded-lg border border-[#f1f5f9] overflow-hidden flex-shrink-0 bg-white p-1">
          <img src={logo} alt={organization} className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="px-5 pb-6">
        <h3 className="text-[15px] font-bold text-[#1c4980] line-clamp-2 leading-tight group-hover:text-[#007aff] transition-colors">
          {title}
        </h3>
        <p className="text-[11px] text-[#8692a4] mt-2 font-medium truncate">
          {organization}
        </p>
      </div>
    </a>
  );
};

export default OpportunityCard;
