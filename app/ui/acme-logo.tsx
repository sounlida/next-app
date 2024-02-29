import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { roboto } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${roboto.className} flex flex-row items-center leading-none`}
    >
      <GlobeAltIcon className="h-6 w-6 rotate-[15deg]" />
      <p className="text-[18px]">ebuykh</p>
    </div>
  );
}