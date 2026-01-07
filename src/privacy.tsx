export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#1a1410]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1a1410]/95 backdrop-blur-sm border-b border-[#D4B896]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <span className="text-xl text-[#D4B896]">Онлайн-школа Оксаны Анокиной</span>
            </a>
            
            <a 
              href="/"
              className="bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-5 py-2 rounded-lg hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all text-sm font-semibold"
            >
              Назад
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Политика конфиденциальности
            </h1>
            <p className="text-[#D4B896]/70 text-lg">
              Последнее обновление: 4 января 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-[#D4B896]/80">
            {/* Section 1 */}
            <section className="bg-gradient-to-br from-[#2a1f18]/50 to-[#1a1410]/50 rounded-2xl p-8 border border-[#D4B896]/10">
              <h2 className="text-2xl font-bold text-white mb-4">1. Общие положения</h2>
              <p className="mb-4">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей онлайн-школы Оксаны Анокиной (далее — «Школа»).
              </p>
              <p>
                Используя наш сайт и приобретая курсы, вы соглашаетесь с условиями данной Политики конфиденциальности.
              </p>
            </section>

            {/* Section 2 */}
            <section className="bg-gradient-to-br from-[#2a1f18]/50 to-[#1a1410]/50 rounded-2xl p-8 border border-[#D4B896]/10">
              <h2 className="text-2xl font-bold text-white mb-4">2. Какие данные мы собираем</h2>
              <p className="mb-4">При покупке курса мы можем собирать следующую информацию:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">•</span>
                  <span><strong className="text-white">ФИО</strong> — для выдачи сертификата о прохождении курса</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">•</span>
                  <span><strong className="text-white">Email</strong> — для отправки доступа к курсу и важных уведомлений</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">•</span>
                  <span><strong className="text-white">Telegram</strong> — для доступа в закрытый канал курса</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">•</span>
                  <span><strong className="text-white">Данные оплаты</strong> — обрабатываются платёжной системой Продамус, мы не храним данные банковских карт</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="bg-gradient-to-br from-[#2a1f18]/50 to-[#1a1410]/50 rounded-2xl p-8 border border-[#D4B896]/10">
              <h2 className="text-2xl font-bold text-white mb-4">3. Как мы используем ваши данные</h2>
              <p className="mb-4">Ваши персональные данные используются исключительно для:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span>Предоставления доступа к курсу</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span>Коммуникации с вами по вопросам обучения</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span>Выдачи сертификата о прохождении курса</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span>Информирования о новых курсах (вы можете отписаться в любой момент)</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="bg-gradient-to-br from-[#2a1f18]/50 to-[#1a1410]/50 rounded-2xl p-8 border border-[#D4B896]/10">
              <h2 className="text-2xl font-bold text-white mb-4">4. Защита данных</h2>
              <p className="mb-4">
                Мы применяем технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
              <p>
                Все платёжные данные обрабатываются через защищённое соединение платёжной системы <strong className="text-white">Продамус</strong>, которая соответствует стандартам безопасности PCI DSS.
              </p>
            </section>

            {/* Section 5 */}
            <section className="bg-gradient-to-br from-[#2a1f18]/50 to-[#1a1410]/50 rounded-2xl p-8 border border-[#D4B896]/10">
              <h2 className="text-2xl font-bold text-white mb-4">5. Передача данных третьим лицам</h2>
              <p className="mb-4">
                Мы <strong className="text-white">не продаём и не передаём</strong> ваши персональные данные третьим лицам, за исключением следующих случаев:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">•</span>
                  <span>Платёжная система <strong className="text-white">Продамус</strong> — для обработки платежей</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">•</span>
                  <span>Email-сервис — для отправки уведомлений о курсе</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">•</span>
                  <span>По требованию закона или государственных органов</span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="bg-gradient-to-br from-[#2a1f18]/50 to-[#1a1410]/50 rounded-2xl p-8 border border-[#D4B896]/10">
              <h2 className="text-2xl font-bold text-white mb-4">6. Ваши права</h2>
              <p className="mb-4">Вы имеете право:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span>Получить информацию о хранящихся у нас данных</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span>Запросить исправление неточных данных</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span>Запросить удаление ваших данных</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896] mt-1">✓</span>
                  <span>Отозвать согласие на обработку данных</span>
                </li>
              </ul>
              <p className="mt-4">
                Для реализации своих прав свяжитесь с нами по email: <a href="mailto:support@example.com" className="text-[#D4B896] hover:text-[#E5C9A7] underline">support@example.com</a>
              </p>
            </section>

            {/* Section 7 */}
            <section className="bg-gradient-to-br from-[#2a1f18]/50 to-[#1a1410]/50 rounded-2xl p-8 border border-[#D4B896]/10">
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies и аналитика</h2>
              <p className="mb-4">
                Наш сайт может использовать cookies для улучшения пользовательского опыта. Мы можем использовать аналитические инструменты для понимания того, как посетители взаимодействуют с сайтом.
              </p>
              <p>
                Вы можете отключить cookies в настройках вашего браузера.
              </p>
            </section>

            {/* Section 8 */}
            <section className="bg-gradient-to-br from-[#2a1f18]/50 to-[#1a1410]/50 rounded-2xl p-8 border border-[#D4B896]/10">
              <h2 className="text-2xl font-bold text-white mb-4">8. Изменения в политике</h2>
              <p className="mb-4">
                Мы можем обновлять данную Политику конфиденциальности время от времени. Обо всех существенных изменениях мы сообщим вам по email или через уведомление на сайте.
              </p>
              <p>
                Дата последнего обновления указана в начале документа.
              </p>
            </section>

            {/* Section 9 */}
            <section className="bg-gradient-to-br from-[#2a1f18]/50 to-[#1a1410]/50 rounded-2xl p-8 border border-[#D4B896]/10">
              <h2 className="text-2xl font-bold text-white mb-4">9. Контакты</h2>
              <p className="mb-4">
                Если у вас есть вопросы по данной Политике конфиденциальности, свяжитесь с нами:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896]">📧</span>
                  <span>Email: <a href="mailto:support@example.com" className="text-[#D4B896] hover:text-[#E5C9A7] underline">support@example.com</a></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4B896]">📱</span>
                  <span>Instagram: <a href="https://www.instagram.com/oksana_anokina" target="_blank" rel="noopener noreferrer" className="text-[#D4B896] hover:text-[#E5C9A7] underline">@oksana_anokina</a></span>
                </li>
              </ul>
            </section>
          </div>

          {/* Footer Button */}
          <div className="mt-16 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-8 py-4 rounded-lg hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all shadow-lg shadow-[#D4B896]/20 font-semibold"
            >
              ← Вернуться на главную
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}