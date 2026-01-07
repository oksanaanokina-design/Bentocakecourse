import { FadeInOnScroll } from '../FadeInOnScroll';

interface AuthorSectionProps {
  authorPhoto: string;
}

export function AuthorSection({ authorPhoto }: AuthorSectionProps) {
  return (
    <section id="author" className="py-24 bg-gradient-to-b from-[#2a1f18] to-[#1a1410] border-t border-[#D4B896]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-[#D4B896] tracking-widest text-sm uppercase">Автор курса</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
              Оксана Анокина
            </h2>
            <p className="text-xl text-[#D4B896]/80 mt-4">
              Кондитер, основатель онлайн-школы, блогер
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeInOnScroll delay={100} direction="left">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D4B896] to-[#C9A882] rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-all duration-300" />
              <img
                src={authorPhoto}
                alt="Оксана Анокина"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border-2 border-[#D4B896]/20 group-hover:border-[#D4B896]/40 transition-all"
              />
            </div>
          </FadeInOnScroll>

          <div className="space-y-6">
            <FadeInOnScroll delay={200} direction="right">
              <div className="bg-gradient-to-br from-[#D4B896]/10 to-[#C9A882]/5 rounded-2xl p-6 border border-[#D4B896]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    🎂
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Практикующий кондитер с 17-летним опытом работы.
                    </h3>
                    <p className="text-[#D4B896]/80 text-lg">
                      Специализируюсь на бенто-тортах, авторских рисунках из крема и других премиальных десертах. Автор нескольких кондитерских курсов. Пеку на заказ.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={225} direction="right">
              <div className="bg-gradient-to-br from-[#D4B896]/10 to-[#C9A882]/5 rounded-2xl p-6 border border-[#D4B896]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Медиа-эксперт по продвижению кондитеров
                    </h3>
                    <p className="text-[#D4B896]/80 text-lg mb-4">
                      Куратор у <strong className="text-[#D4B896]">Артёма Сенаторова</strong> на большом курсе по Reels.
                    </p>
                    <ul className="space-y-2 text-[#D4B896]/80">
                      <li className="flex items-start gap-2">
                        <span className="text-lg">🔥</span>
                        <span>Мой первый ролик: <strong className="text-white">1,1 млн просмотров</strong> за неделю</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-lg">👥</span>
                        <span><strong className="text-white">+45 000 целевых подписчиков</strong> с одного Reels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-lg">📊</span>
                        <span>Ролики-миллионники в Instagram и TikTok</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-lg">🏆</span>
                        <span>Приз <strong className="text-[#D4B896]">MacBook</strong> за лучшие результаты на курсе</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={250} direction="right">
              <div className="bg-gradient-to-r from-[#2a1f18]/80 to-[#1a1410]/80 rounded-xl p-6 border border-[#D4B896]/20">
                <p className="text-[#D4B896]/90 text-lg leading-relaxed">
                  Именно поэтому в этом курсе я обучаю не только созданию бенто-тортов, но и тому, <strong className="text-white">как красиво показать результат и превратить его в продажи</strong>.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={300} direction="right">
              <div className="bg-[#2a1f18]/50 rounded-xl p-4 border border-[#D4B896]/20">
                <p className="text-sm text-[#D4B896]/70 text-center">
                  Следите за мной на всех платформах: <a href="https://www.instagram.com/oksana_anokina" target="_blank" rel="noopener noreferrer" className="text-[#D4B896] hover:text-[#E5C9A7] transition-colors">Instagram</a> • <a href="https://www.tiktok.com/@oksana_anokina" target="_blank" rel="noopener noreferrer" className="text-[#D4B896] hover:text-[#E5C9A7] transition-colors">TikTok</a> • <a href="https://www.youtube.com/@oksana_anokina" target="_blank" rel="noopener noreferrer" className="text-[#D4B896] hover:text-[#E5C9A7] transition-colors">YouTube</a> • <a href="https://www.threads.net/@oksana_anokina" target="_blank" rel="noopener noreferrer" className="text-[#D4B896] hover:text-[#E5C9A7] transition-colors">Threads</a> • <a href="https://www.facebook.com/share/1F7SpETANd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-[#D4B896] hover:text-[#E5C9A7] transition-colors">Facebook</a> • <a href="https://vk.com/id49625006" target="_blank" rel="noopener noreferrer" className="text-[#D4B896] hover:text-[#E5C9A7] transition-colors">ВКонтакте</a>
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}