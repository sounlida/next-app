import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none`}
    >
      <GlobeAltIcon className="h-6 w-6 rotate-[15deg]" />
      <p className="text-[18px]">ebuykh</p>
    </div>
  );
}