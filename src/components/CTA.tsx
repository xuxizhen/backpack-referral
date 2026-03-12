import { Language, t } from '@/lib/i18n';

interface CTAProps {
  lang: Language;
  text?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function CTA({ lang, text, variant = 'primary', className = '' }: CTAProps) {
  const buttonText = text || t('registerButton', lang);

  const baseClasses = 'inline-block font-bold rounded-full transition-all duration-200 text-center';
  const variantClasses = variant === 'primary'
    ? 'bg-black hover:bg-gray-800 text-white py-4 px-12 text-xl shadow-lg hover:shadow-xl transform hover:scale-105'
    : 'bg-white hover:bg-gray-100 text-purple-600 py-4 px-12 text-lg';

  return (
    <a
      href="https://backpack.exchange/join/meme"
      className={`${baseClasses} ${variantClasses} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonText}
    </a>
  );
}
