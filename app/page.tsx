import Image from 'next/image';

export const metadata = {
  title: 'OP Studentkonferens 2024',
  description: 'OP Studentkonferens 2024'
}

export default function Page() {
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const isMobile = windowWidth < 768;
  return (
    <Image
      alt='studentkonferensen'
      width={isMobile ? 350: 700}
      height={700}
      src='/images/Studentkonferensen_logo_svart.svg'
    />
  );
}
