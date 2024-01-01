import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function BackLink({ href = '/' }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center font-light text-lg underline mb-12">
      <ChevronLeft strokeWidth={1.5} /> All Courses
    </Link>
  );
}
