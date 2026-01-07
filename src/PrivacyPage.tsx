export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#1a1410] text-[#D4B896] py-12 px-4">
      <div className="max-w-4xl mx-auto bg-[#2a1f18] rounded-2xl p-8 sm:p-12 border border-[#D4B896]/20">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-[#D4B896] hover:text-white transition-colors mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Вернуться на главную
        </a>
        
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Политика конфиденциальности
        </h1>
        <p className="text-center text-[#D4B896]/70 mb-12">
          Обработка персональных данных
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Общие положения</h2>
            <div className="space-y-3 text-[#D4B896]/80">
              <p>
                <strong>1.1.</strong> Настоящая Политика конфиденциальности персональных данных (далее – Политика) действует в отношении всех персональных данных (далее – ПДн), которые Оператор может получить от Пользователя во время использования им сайта, программ и продуктов Оператора.
              </p>
              <p>
                <strong>1.2.</strong> Использование сервисов Оператора означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации; в случае несогласия с этими условиями Пользователь должен воздержаться от использования сервисов.
              </p>
              <p>
                <strong>1.3.</strong> Настоящая Политика конфиденциальности применяется только к сайту Онлайн-школы Оксаны Анокиной и Telegram-каналу OksanaAnokinaCake. Оператор не контролирует и не несет ответственность за сайты третьих лиц, на которые Пользователь может перейти по ссылкам, доступным на сайте Оператора.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Основные понятия</h2>
            <div className="space-y-3 text-[#D4B896]/80">
              <p>
                <strong>Оператор</strong> – Анокина Оксана Владимировна, ИНН 542206170136, самозанятая.
              </p>
              <p>
                <strong>Персональные данные (ПДн)</strong> – любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу.
              </p>
              <p>
                <strong>Пользователь</strong> – любое физическое лицо, использующее сайт Оператора или осуществляющее покупку услуг Оператора.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Цели обработки персональных данных</h2>
            <ul className="space-y-2 text-[#D4B896]/80 list-disc list-inside">
              <li>Заключение, исполнение и прекращение договоров оказания услуг</li>
              <li>Предоставление доступа к сервисам и материалам в Telegram-канале</li>
              <li>Направление уведомлений и информации об услугах</li>
              <li>Улучшение качества услуг и разработка новых сервисов</li>
              <li>Проведение статистических исследований</li>
              <li>Информирование о проводимых акциях и мероприятиях</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Состав персональных данных</h2>
            <ul className="space-y-2 text-[#D4B896]/80 list-disc list-inside">
              <li>Фамилия, имя, отчество</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Адрес доставки (при необходимости)</li>
              <li>Паспортные данные (при возврате средств)</li>
              <li>Банковские реквизиты (при возврате средств)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Права Пользователя</h2>
            <ul className="space-y-2 text-[#D4B896]/80 list-disc list-inside">
              <li>Получение информации об обработке персональных данных</li>
              <li>Требование уточнения или удаления данных</li>
              <li>Отзыв согласия на обработку данных</li>
              <li>Защита своих прав в судебном порядке</li>
            </ul>
          </section>

          <section className="bg-[#D4B896]/5 rounded-xl p-6 border border-[#D4B896]/10">
            <h3 className="text-xl font-bold text-white mb-3">Контактная информация Оператора</h3>
            <div className="space-y-2 text-[#D4B896]/90">
              <p><strong>Анокина Оксана Владимировна</strong></p>
              <p><strong>ИНН:</strong> 542206170136</p>
              <p><strong>Адрес:</strong> Новосибирская область, р.п. Кольцово, Никольский проспект 10-10</p>
              <p><strong>Email:</strong> <a href="mailto:oksana_0107@mail.ru" className="text-[#D4B896] hover:text-white underline">oksana_0107@mail.ru</a></p>
              <p><strong>Телефон:</strong> +37061442027</p>
            </div>
          </section>

          <p className="text-center text-[#D4B896]/60 text-sm mt-8">
            <em>Дата последнего обновления: 04 января 2026 г.</em>
          </p>
        </div>

        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-[#D4B896] hover:text-white transition-colors mt-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Вернуться на главную
        </a>
      </div>
    </div>
  );
}
