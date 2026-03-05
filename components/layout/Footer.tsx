import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-[#4f3c40] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <a
          href="mailto:mumsingeosciences@gmail.com"
          className="text-[#20c997] hover:underline"
        >
          mumsingeosciences@gmail.com
        </a>
        <Separator className="my-6 bg-white/20" />
        <p className="text-sm text-white/60">
          © 2025 Mums in Geosciences. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
