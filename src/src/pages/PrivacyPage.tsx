import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[--color-cream] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[--color-coffee-medium] hover:text-[--color-gold] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Вернуться на главную
        </Link>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h1 className="mb-8 text-[--color-coffee-dark]">Политика конфиденциальности</h1>
          
          <div className="space-y-6 text-[--color-coffee-medium]">
            <section>
              <h3 className="mb-4 text-[--color-coffee-dark]">1. Общие положения</h3>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
                пользователей онлайн-школы Оксаны Анокиной (далее — «Школа»).
              </p>
            </section>

            <section>
              <h3 className="mb-4 text-[--color-coffee-dark]">2. Собираемая информация</h3>
              <p>При регистрации на курс мы собираем следующую информацию:</p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Имя и фамилия</li>
                <li>Адрес электронной почты</li>
                <li>Номер телефона</li>
                <li>Username в Telegram</li>
                <li>Ссылка на аккаунт в социальных сетях (для тарифа Premium)</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-4 text-[--color-coffee-dark]">3. Цели обработки данных</h3>
              <p>Ваши персональные данные используются для:</p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Предоставления доступа к обучающим материалам</li>
                <li>Коммуникации в рамках курса</li>
                <li>Добавления в закрытый Telegram-канал</li>
                <li>Проведения консультаций (для тарифа Premium)</li>
                <li>Информирования о новых курсах и предложениях</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-4 text-[--color-coffee-dark]">4. Защита данных</h3>
              <p>
                Мы применяем современные технические и организационные меры для защиты ваших данных 
                от несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
            </section>

            <section>
              <h3 className="mb-4 text-[--color-coffee-dark]">5. Передача данных третьим лицам</h3>
              <p>
                Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, 
                предусмотренных законодательством РФ.
              </p>
            </section>

            <section>
              <h3 className="mb-4 text-[--color-coffee-dark]">6. Ваши права</h3>
              <p>Вы имеете право:</p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Получить информацию о ваших персональных данных</li>
                <li>Требовать исправления неточных данных</li>
                <li>Требовать удаления ваших данных</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-4 text-[--color-coffee-dark]">7. Контакты</h3>
              <p>
                По вопросам обработки персональных данных вы можете связаться с нами через 
                Instagram <a href="https://www.instagram.com/oksana_anokina" target="_blank" rel="noopener noreferrer" className="text-[--color-gold] hover:underline">@oksana_anokina</a>
              </p>
            </section>

            <section>
              <p className="text-sm opacity-70 mt-8">
                Дата последнего обновления: 4 января 2026 г.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}