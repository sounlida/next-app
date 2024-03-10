import clsx from 'clsx';
import LogoIcon from './icons/logo';
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <div
              className={clsx(
                'flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black',
                {
                  'h-[40px] w-[40px] rounded-xl': !size,
                  'h-[30px] w-[30px] rounded-lg': size === 'sm'
                }
              )}
            >
              <LogoIcon
                className={clsx({
                  'h-[16px] w-[16px]': !size,
                  'h-[10px] w-[10px]': size === 'sm'
                })}
              />
            </div>
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
    </div>
  );
}
