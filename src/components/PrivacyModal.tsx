import { useEffect } from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>
      
      {/* Modal */}
      <div 
        className="relative bg-[#1a1410] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#D4B896]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#2a1f18] border-b border-[#D4B896]/20 px-8 py-6 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-white">Политика конфиденциальности</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#D4B896]/10 hover:bg-[#D4B896]/20 transition-all group"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5 text-[#D4B896] group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-88px)] p-8">
          <p className="text-center text-[#D4B896]/70 mb-8">
            Обработка персональных данных
          </p>

          <div className="space-y-8 text-[#D4B896]/80">
            <section>
              <h3 className="text-xl font-bold text-white mb-4">1. Общие положения</h3>
              <div className="space-y-3">
                <p>
                  <strong>1.1.</strong> Настоящая Политика конфиденциальности персональных данных (далее – Политика) действует в отношении всех персональных данных (далее – ПДн), которые Оператор может получить от Пользователя во время использования им сайта, программ и продуктов Оператора.
                </p>
                <p>
                  <strong>1.2.</strong> Использование сервисов Оператора означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации.
                </p>
                <p>
                  <strong>1.3.</strong> Настоящая Политика конфиденциальности применяется только к сайту Онлайн-школы Оксаны Анокиной и Telegram-каналу OksanaAnokinaCake.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">2. Основные понятия</h3>
              <div className="space-y-3">
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
              <h3 className="text-xl font-bold text-white mb-4">3. Цели обработки персональных данных</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Заключение, исполнение и прекращение договоров оказания услуг</li>
                <li>Предоставление доступа к сервисам и материалам в Telegram-канале</li>
                <li>Направление уведомлений и информации об услугах</li>
                <li>Улучшение качества услуг и разработка новых сервисов</li>
                <li>Проведение статистических исследований</li>
                <li>Информирование о проводимых акциях и мероприятиях</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">4. Состав персональных данных</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Фамилия, имя, отчество</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Адрес доставки (при необходимости)</li>
                <li>Паспортные данные (при возврате средств)</li>
                <li>Банковские реквизиты (при возврате средств)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">5. Права Пользователя</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Получение информации об обработке персональных данных</li>
                <li>Требование уточнения или удаления данных</li>
                <li>Отзыв согласия на обработку данных</li>
                <li>Защита своих прав в судебном порядке</li>
              </ul>
            </section>

            <section className="bg-[#2a1f18] rounded-xl p-6 border border-[#D4B896]/10">
              <h3 className="text-xl font-bold text-white mb-3">Контактная информация Оператора</h3>
              <div className="space-y-2">
                <p><strong className="text-white">Анокина Оксана Владимировна</strong></p>
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
        </div>
      </div>
    </div>
  );
}
