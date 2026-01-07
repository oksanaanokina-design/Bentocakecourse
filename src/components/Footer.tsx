import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-400">
            Сделано с <Heart className="w-4 h-4 text-pink-500" /> для кондитеров
          </p>
          <p className="mt-4 text-gray-500">
            © 2026 Бенто-торты от А до Я. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
