import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/img/th-1/logo-light.png';

const LogoLight = () => {
  return (
    <Link href='/'>
      <Image src={logo} alt='AIMass' width='96' height='24' />
    </Link>
  );
};

export default LogoLight;
