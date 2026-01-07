export default function OfertaPage() {
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
          Договор оферты
        </h1>
        <p className="text-center text-[#D4B896]/70 mb-12">
          возмездного оказания услуг просветительской деятельности в форме мастер-классов
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">ПУБЛИЧНАЯ ОФЕРТА</h2>
            <p className="text-[#D4B896]/80 leading-relaxed">
              Просветительская деятельность в форме «Мастер-классов Оксаны Анокиной» в лице гражданки РФ, использующая специальный налоговый режим для самозанятых граждан, Анокина Оксана Владимировна, ИНН 542206170136, именуемая в дальнейшем "Исполнитель" адресует настоящий "Договор-оферту" любому лицу, выразившему готовность воспользоваться услугами Исполнителя (далее - "Заказчик").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ</h2>
            <div className="space-y-3 text-[#D4B896]/80">
              <p>
                <strong>Автор</strong> – Анокина Оксана Владимировна, автор «Мастер-классов Оксаны Анокиной».
              </p>
              <p>
                <strong>Исполнитель</strong> – гражданка РФ, использующая специальный налоговый режим для самозанятых, Анокина Оксана Владимировна, осуществляющая оказание услуг с помощью сети Интернет.
              </p>
              <p>
                <strong>Потребитель</strong> – физическое лицо, заключившее с Исполнителем Договор на условиях оферты.
              </p>
              <p>
                <strong>Услуги</strong> – просветительская деятельность в форме мастер-классов, оформленных в видео файлы, технические карты, инструкции и иные материалы.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. ПРЕДМЕТ ДОГОВОРА</h2>
            <p className="text-[#D4B896]/80 leading-relaxed mb-3">
              <strong>2.1.</strong> Исполнитель обязуется оказать возмездные услуги просветительской деятельности в форме мастер-классов дистанционным способом, а Потребитель обязуется оплатить оказанные ему услуги в сроки и в порядке, указанные в Договоре.
            </p>
            <p className="text-[#D4B896]/80 leading-relaxed">
              <strong>2.2.</strong> Просветительская деятельность в форме мастер-класса не является профессиональным обучением. Мастер-классом не предусмотрена итоговая аттестация или выдача документов об образовании.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. СТОИМОСТЬ УСЛУГ</h2>
            <p className="text-[#D4B896]/80 leading-relaxed mb-3">
              <strong>3.1.</strong> Полная стоимость услуг определяется выбранным Потребителем вариантом мастер-класса на дату заключения Договора.
            </p>
            <p className="text-[#D4B896]/80 leading-relaxed mb-3">
              <strong>3.2.</strong> Оплата осуществляется одним из следующих способов:
            </p>
            <ul className="space-y-2 text-[#D4B896]/80 list-disc list-inside ml-6">
              <li>Оформление заявки и проведение оплаты с использованием платежных сервисов</li>
              <li>Безналичный перевод на расчетный счет Исполнителя</li>
              <li>Иные способы по предварительному согласованию</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. ПРАВА И ОБЯЗАННОСТИ СТОРОН</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Исполнитель обязуется:</h3>
                <ul className="space-y-2 text-[#D4B896]/80 list-disc list-inside ml-6">
                  <li>Оказать услуги надлежащего качества</li>
                  <li>Осуществлять информационную поддержку с 10:00 до 20:00 МСК</li>
                  <li>Предоставить доступ к материалам мастер-класса</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Потребитель обязуется:</h3>
                <ul className="space-y-2 text-[#D4B896]/80 list-disc list-inside ml-6">
                  <li>Оплатить услуги на условиях, действующих на момент оплаты</li>
                  <li>Соблюдать исключительные и авторские права Исполнителя</li>
                  <li>Использовать материалы только для личных целей</li>
                  <li>Не допускать третьих лиц к использованию материалов</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. ДОСРОЧНОЕ РАСТОРЖЕНИЕ</h2>
            <p className="text-[#D4B896]/80 leading-relaxed mb-3">
              <strong>5.1.</strong> Потребитель вправе отказаться от исполнения Договора в любое время, направив заявление о возврате на email Исполнителя.
            </p>
            <p className="text-[#D4B896]/80 leading-relaxed">
              <strong>5.2.</strong> Возврат производится за вычетом стоимости фактически оказанных услуг и расходов Исполнителя, включая комиссии платежных систем.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. ПРАВА НА ИНТЕЛЛЕКТУАЛЬНУЮ СОБСТВЕННОСТЬ</h2>
            <p className="text-[#D4B896]/80 leading-relaxed mb-3">
              <strong>6.1.</strong> Все материалы являются результатом интеллектуальной деятельности и предоставляются только для личного использования.
            </p>
            <p className="text-[#D4B896]/80 leading-relaxed">
              <strong>6.2.</strong> Запрещается копирование, тиражирование, передача материалов третьим лицам или размещение в сети Интернет.
            </p>
          </section>

          <section className="bg-[#D4B896]/5 rounded-xl p-6 border border-[#D4B896]/10">
            <h3 className="text-xl font-bold text-white mb-3">Контактная информация</h3>
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
