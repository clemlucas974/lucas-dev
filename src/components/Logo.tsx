import { type FC } from 'react';

interface LogoProps {
  className?: string;
}

/** Brand wordmark — "lucas.dev" (lucas in ink, .dev in emerald). */
export const Logo: FC<LogoProps> = ({ className }) => (
  <span className={`font-sans font-bold tracking-tight ${className ?? ''}`}>
    <span className='text-ink'>lucas</span>
    <span className='text-emerald-700'>.dev</span>
  </span>
);

export default Logo;
