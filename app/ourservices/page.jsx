import { redirect } from 'next/navigation';

export default function OurServicesRedirect() {
  redirect('/services');
  return null;
}
