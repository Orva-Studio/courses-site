import Link from 'next/link';

export default function BackLink({ href = '/' }: { href?: string }) {
  return (
    <Link href={href} className="font-light text-lg underline mb-12">
      👈 Go Back
    </Link>
  );
}
