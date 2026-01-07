# 🔍 Анализ соблюдения принципа DRY (Don't Repeat Yourself)

## Краткое резюме

**Общая оценка:** 6/10

**Найдено дублирований:**
- 🔴 **Критичные:** 5 категорий
- 🟡 **Низко висящие фрукты:** 8 категорий

---

## 🔴 КРИТИЧНЫЕ ПРОБЛЕМЫ

### 1. Повторяющиеся классы кнопок (14+ раз)

**Проблема:** Градиентные кнопки повторяются по всему проекту с одинаковыми стилями.

**Найдено в:**
- `/App.tsx` - 6 раз
- `/index.tsx` - 4 раза
- `/privacy.tsx` - 2 раза
- `/components/PaymentModal.tsx` - 2 раза

**Пример дублирования:**

```tsx
// App.tsx:75
className="group bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-5 py-2 rounded-lg hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all text-sm font-semibold hover:scale-[1.05] active:scale-[0.95] hover:shadow-lg hover:shadow-[#D4B896]/30 inline-flex items-center gap-2"

// App.tsx:119
className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-8 py-4 rounded-xl hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all shadow-lg shadow-[#D4B896]/20 hover:shadow-[#D4B896]/40 hover:scale-[1.05] active:scale-[0.98] font-semibold"

// index.tsx:26
className="bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-5 py-2 rounded-lg hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all text-sm hover:scale-[1.05] active:scale-[0.98]"

// index.tsx:83
className="group bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-10 py-4 rounded-lg hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all shadow-lg shadow-[#D4B896]/20 text-lg font-semibold hover:scale-[1.05] active:scale-[0.98] inline-flex items-center justify-center gap-2"

// privacy.tsx:14
className="bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-5 py-2 rounded-lg hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all text-sm font-semibold"

// PaymentModal.tsx:211
className="bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] shadow-lg shadow-[#D4B896]/30"
```

**Решение:**
```tsx
// Создать /components/ui/Button.tsx
export const GoldButton = ({ children, size = 'md', ...props }) => {
  const sizeClasses = {
    sm: 'px-5 py-2 text-sm rounded-lg',
    md: 'px-8 py-4 rounded-xl',
    lg: 'px-10 py-4 rounded-lg text-lg',
  };
  
  return (
    <button 
      className={`group bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] ${sizeClasses[size]} hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all shadow-lg shadow-[#D4B896]/20 hover:shadow-[#D4B896]/40 hover:scale-[1.05] active:scale-[0.98] font-semibold inline-flex items-center justify-center gap-2`}
      {...props}
    >
      {children}
    </button>
  );
};
```

**Экономия:** ~1200 символов кода, улучшение maintainability

---

### 2. Повторяющиеся Badge компоненты (6+ раз)

**Проблема:** Бейджи "НОВОЕ", "ХИТ 🔥", "ОТКРЫТ 🎉" имеют одинаковую структуру.

**Найдено в:**
- `/App.tsx:180` - "НОВОЕ"
- `/App.tsx:814` - "🔥 СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ"
- `/App.tsx:1026` - "ХИТ 🔥"
- `/index.tsx:201` - "ОТКРЫТ 🎉"
- `/index.tsx:235` - "ХИТ 🔥"

**Пример дублирования:**

```tsx
// App.tsx:180
<div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-4 py-1 rounded-full text-sm font-bold">
  НОВОЕ
</div>

// App.tsx:814
<div className="inline-block bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-6 py-2 rounded-full mb-6 font-bold">
  🔥 СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ
</div>

// index.tsx:201
<div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-3 py-1 rounded-full text-xs font-bold">
  ОТКРЫТ 🎉
</div>
```

**Решение:**
```tsx
// /components/ui/Badge.tsx
export const GoldBadge = ({ children, position = 'inline', size = 'md' }) => {
  const positionClasses = position === 'corner' 
    ? 'absolute top-4 right-4' 
    : 'inline-block';
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1 text-sm',
    lg: 'px-6 py-2 text-base',
  };
  
  return (
    <div className={`${positionClasses} bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] ${sizeClasses[size]} rounded-full font-bold`}>
      {children}
    </div>
  );
};
```

**Экономия:** ~600 символов кода

---

### 3. Повторяющаяся структура карточек курсов (10+ раз)

**Проблема:** Карточки курсов в index.tsx имеют идентичную структуру.

**Найдено в:**
- `/index.tsx` - минимум 6 карточек курсов
- `/App.tsx` - карточки в секции кросс-продаж

**Пример дублирования:**

```tsx
// Повторяется 6+ раз в index.tsx
<div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all group relative overflow-hidden">
  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-3 py-1 rounded-full text-xs font-bold">
    ОТКРЫТ 🎉
  </div>
  <div className="w-16 h-16 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
    🎂
  </div>
  <h3 className="text-2xl font-bold text-white mb-3">Название курса</h3>
  <p className="text-[#D4B896]/70 mb-6">Описание</p>
  <div className="flex flex-wrap gap-2">
    {/* теги */}
  </div>
</div>
```

**Решение:**
```tsx
// /components/CourseCard.tsx
export const CourseCard = ({ 
  icon, 
  title, 
  description, 
  badge, 
  tags, 
  href, 
  status = 'coming' 
}) => {
  return (
    <a 
      href={href}
      className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all group relative overflow-hidden"
    >
      {badge && (
        <GoldBadge position="corner" size="sm">{badge}</GoldBadge>
      )}
      
      <div className="w-16 h-16 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-[#D4B896]/70 mb-6">{description}</p>
      
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs text-[#D4B896]/60 bg-[#D4B896]/10 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
};
```

**Экономия:** ~2000 символов кода

---

### 4. Дублирование данных отзывов (15 раз)

**Проблема:** Массив с 15 отзывами имеет повторяющуюся структуру.

**Найдено в:**
- `/App.tsx:680-780` - 15 объектов с одинаковой структурой

**Пример дублирования:**

```tsx
// App.tsx - повторяется 15 раз
{
  initial: 'И',
  name: 'Ирина',
  handle: '(romani1601)',
  text: 'Текст отзыва...',
  subtitle: 'Ученица курса'
}
```

**Решение:**
```tsx
// /data/testimonials.ts
export const TESTIMONIALS = [
  {
    initial: 'И',
    name: 'Ирина',
    handle: '(romani1601)',
    text: 'Задание урока #1. Кропотливая работа!...',
    subtitle: 'Ученица курса'
  },
  // ... остальные
];

// В App.tsx
import { TESTIMONIALS } from './data/testimonials';

{TESTIMONIALS.map((testimonial, idx) => (
  <TestimonialCard key={idx} {...testimonial} />
))}
```

**Решение 2: Компонент TestimonialCard**
```tsx
// /components/TestimonialCard.tsx
export const TestimonialCard = ({ initial, name, handle, text, subtitle }) => (
  <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-full flex items-center justify-center">
        <span className="text-[#1a1410] font-bold text-lg">{initial}</span>
      </div>
      <div>
        <p className="text-white font-semibold">{name}</p>
        <p className="text-[#D4B896]/60 text-sm">{handle}</p>
      </div>
    </div>
    <p className="text-[#D4B896]/80 leading-relaxed mb-4">{text}</p>
    <p className="text-[#D4B896]/50 text-sm">{subtitle}</p>
  </div>
);
```

**Экономия:** ~1500 символов кода, лучшая организация данных

---

### 5. Повторяющееся название "Онлайн-школа Оксаны Анокиной" (13 раз)

**Проблема:** Название школы жёстко закодировано в 13 местах.

**Найдено в:**
- `/App.tsx` - 2 раза
- `/index.tsx` - 3 раза
- `/privacy.tsx` - 2 раза
- `/components/PrivacyModal.tsx` - 1 раз
- `/src/` - несколько раз

**Пример дублирования:**

```tsx
// App.tsx:61
<span className="text-xl text-[#D4B896]">Онлайн-школа Оксаны Анокиной</span>

// App.tsx:1186
© 2026 Онлайн-школа Оксаны Анокиной. Все права защищены.

// index.tsx:13
<span className="text-xl text-[#D4B896]">Онлайн-школа Оксаны Анокиной</span>

// privacy.tsx:9
<span className="text-xl text-[#D4B896]">Онлайн-школа Оксаны Анокиной</span>
```

**Решение:**
```tsx
// /constants/branding.ts
export const BRANDING = {
  SCHOOL_NAME: 'Онлайн-школа Оксаны Анокиной',
  AUTHOR_NAME: 'Оксана Анокина',
  INSTAGRAM_HANDLE: '@oksana_anokina',
  INSTAGRAM_URL: 'https://www.instagram.com/oksana_anokina/',
  TELEGRAM_CHANNEL: 'OksanaAnokinaCake',
  COPYRIGHT_YEAR: 2026,
  FOLLOWERS_COUNT: 63000,
};

// Использование
import { BRANDING } from './constants/branding';

<span className="text-xl text-[#D4B896]">{BRANDING.SCHOOL_NAME}</span>
<p>© {BRANDING.COPYRIGHT_YEAR} {BRANDING.SCHOOL_NAME}. Все права защищены.</p>
```

**Экономия:** Легче поменять название в будущем

---

## 🟡 НИЗКО ВИСЯЩИЕ ФРУКТЫ

### 6. Повторяющиеся классы для карточек достижений

**Проблема:** 3 карточки в секции "Почему работает" имеют идентичные стили.

**Найдено в:**
- `/App.tsx:231-260` - 3 карточки

**Пример:**
```tsx
// Повторяется 3 раза
<div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all group">
  <div className="w-16 h-16 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
    <span className="text-3xl">✨</span>
  </div>
  {/* ... */}
</div>
```

**Решение:**
```tsx
// /components/FeatureCard.tsx
export const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all group">
    <div className="w-16 h-16 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <span className="text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-[#D4B896]/70 leading-relaxed">{description}</p>
  </div>
);
```

---

### 7. Повторяющиеся массивы данных галереи

**Проблема:** Массив с фотографиями галереи встроен в JSX.

**Найдено в:**
- `/App.tsx:607-616`

**Пример:**
```tsx
{[
  { img: bearPhoto, title: 'Мишка' },
  { img: catPhoto, title: 'Котик' },
  { img: stencilPhoto, title: 'С трафаретом' },
  // ... 8 элементов
].map((item, idx) => (...))}
```

**Решение:**
```tsx
// /data/gallery.ts
import bearPhoto from "figma:asset/...";
// ... остальные импорты

export const GALLERY_ITEMS = [
  { img: bearPhoto, title: 'Мишка' },
  { img: catPhoto, title: 'Котик' },
  { img: stencilPhoto, title: 'С трафаретом' },
  // ...
];

// В App.tsx
import { GALLERY_ITEMS } from './data/gallery';

{GALLERY_ITEMS.map((item, idx) => (...))}
```

---

### 8. Повторяющиеся списки в тарифах

**Проблема:** Списки фич в тарифах Standard и Premium дублируют код.

**Найдено в:**
- `/App.tsx:886-903` - Standard
- `/App.tsx:940-965` - Premium (предположительно)

**Пример:**
```tsx
// Повторяется дважды
{[
  'Доступ к урокам: 6 месяцев',
  '9 основных уроков по объёмному декору',
  // ...
].map((feature, idx) => (
  <li key={idx} className="flex items-start gap-3">
    <span className="text-[#D4B896] flex-shrink-0 mt-1">✓</span>
    <span className="text-[#D4B896]/70">{feature}</span>
  </li>
))}
```

**Решение:**
```tsx
// /components/FeatureList.tsx
export const FeatureList = ({ features }) => (
  <ul className="space-y-4">
    {features.map((feature, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <span className="text-[#D4B896] flex-shrink-0 mt-1">✓</span>
        <span className="text-[#D4B896]/70">{feature}</span>
      </li>
    ))}
  </ul>
);

// /data/pricing.ts
export const TARIFFS = {
  standard: {
    name: 'Standard',
    price: '10 500 ₽',
    priceEur: '110 €',
    features: [
      'Доступ к урокам: 6 месяцев',
      '9 основных уроков по объёмному декору',
      // ...
    ]
  },
  premium: {
    // ...
  }
};
```

---

### 9. Повторяющиеся социальные ссылки

**Проблема:** Instagram, TikTok ссылки дублируются в футере.

**Найдено в:**
- `/App.tsx:1102-1150` - футер
- Возможно в других местах

**Решение:**
```tsx
// /constants/social.ts
export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/oksana_anokina/',
    icon: Instagram,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@oksana_anokina',
    iconSvg: '<path d="M19.59 6.69a4.83..." />',
  },
  // ...
];
```

---

### 10. Повторяющиеся стили для секций

**Проблема:** Каждая секция начинается с похожих классов.

**Пример:**
```tsx
<section className="py-24 bg-gradient-to-b from-[#1a1410] to-[#2a1f18] border-t border-[#D4B896]/10">
<section className="py-24 bg-[#1a1410] border-t border-[#D4B896]/10">
<section className="py-24 bg-gradient-to-b from-[#2a1f18] to-[#1a1410] border-t border-[#D4B896]/10">
```

**Решение:**
```tsx
// /components/Section.tsx
export const Section = ({ 
  children, 
  id, 
  variant = 'default',
  className = '' 
}) => {
  const variants = {
    default: 'bg-[#1a1410]',
    gradient: 'bg-gradient-to-b from-[#1a1410] to-[#2a1f18]',
    gradientReverse: 'bg-gradient-to-b from-[#2a1f18] to-[#1a1410]',
  };
  
  return (
    <section 
      id={id}
      className={`py-24 ${variants[variant]} border-t border-[#D4B896]/10 ${className}`}
    >
      {children}
    </section>
  );
};
```

---

### 11. Повторяющиеся заголовки секций

**Проблема:** Заголовки секций имеют одинаковую структуру.

**Пример:**
```tsx
// Повторяется ~10 раз
<div className="text-center mb-16">
  <span className="text-[#D4B896] tracking-widest text-sm uppercase">Тег</span>
  <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
    Заголовок
  </h2>
  <p className="text-xl text-[#D4B896]/80 mt-4">
    Подзаголовок
  </p>
</div>
```

**Решение:**
```tsx
// /components/SectionHeader.tsx
export const SectionHeader = ({ tag, title, subtitle }) => (
  <div className="text-center mb-16">
    {tag && (
      <span className="text-[#D4B896] tracking-widest text-sm uppercase">
        {tag}
      </span>
    )}
    <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-xl text-[#D4B896]/80 mt-4">
        {subtitle}
      </p>
    )}
  </div>
);
```

---

### 12. Дублирование урлов оплаты

**Проблема:** URL Продамус жёстко закодирован.

**Найдено в:**
- `/App.tsx:906` - Standard
- `/App.tsx` - Premium (предположительно)

**Решение:**
```tsx
// /constants/payment.ts
export const PAYMENT_URLS = {
  standard: 'https://payform.ru/5oagZxP/',
  premium: 'https://payform.ru/PREMIUM_URL/',
};

// Использование
import { PAYMENT_URLS } from './constants/payment';

onClick={() => openPaymentModal('Standard', '10 500 ₽', PAYMENT_URLS.standard)}
```

---

### 13. Повторяющиеся стили hover для карточек

**Проблема:** `hover:border-[#D4B896]/40 transition-all` повторяется десятки раз.

**Решение:**
```css
/* В globals.css или создать утилиты */
@layer components {
  .card-hover {
    @apply hover:border-[#D4B896]/40 transition-all duration-300;
  }
  
  .card-base {
    @apply bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20;
  }
}
```

**Использование:**
```tsx
<div className="card-base card-hover">
  {/* контент */}
</div>
```

---

## 📊 Сводная таблица

| # | Проблема | Файлы | Повторений | Приоритет | Экономия кода |
|---|----------|-------|------------|-----------|---------------|
| 1 | Классы кнопок | 4 | 14+ | 🔴 Высокий | ~1200 символов |
| 2 | Badge компоненты | 2 | 6+ | 🔴 Высокий | ~600 символов |
| 3 | Карточки курсов | 2 | 10+ | 🔴 Высокий | ~2000 символов |
| 4 | Данные отзывов | 1 | 15 | 🔴 Высокий | ~1500 символов |
| 5 | Название школы | 7 | 13 | 🔴 Средний | Maintainability |
| 6 | Карточки достижений | 1 | 3 | 🟡 Средний | ~400 символов |
| 7 | Данные галереи | 1 | 8 | 🟡 Низкий | ~200 символов |
| 8 | Списки фич | 1 | 2 | 🟡 Низкий | ~300 символов |
| 9 | Социальные ссылки | 1 | 5+ | 🟡 Низкий | ~200 символов |
| 10 | Стили секций | 2 | 10+ | 🟡 Низкий | ~500 символов |
| 11 | Заголовки секций | 2 | 10+ | 🟡 Средний | ~600 символов |
| 12 | URL оплаты | 1 | 2 | 🟡 Низкий | Maintainability |
| 13 | Стили hover | 2 | 30+ | 🟡 Средний | ~1000 символов |

**Итого потенциальная экономия:** ~8500 символов кода + улучшение maintainability

---

## 🎯 Рекомендуемый план действий

### Фаза 1: Критичные (приоритет)
1. ✅ Создать компонент `GoldButton`
2. ✅ Создать компонент `GoldBadge`
3. ✅ Создать компонент `CourseCard`
4. ✅ Вынести данные отзывов в `/data/testimonials.ts`
5. ✅ Создать константы брендинга в `/constants/branding.ts`

### Фаза 2: Низко висящие фрукты
6. ✅ Создать компонент `FeatureCard`
7. ✅ Создать компонент `SectionHeader`
8. ✅ Вынести данные в отдельные файлы
9. ✅ Создать CSS утилиты для повторяющихся стилей

### Фаза 3: Полировка
10. ✅ Создать компонент `Section`
11. ✅ Оптимизировать импорты
12. ✅ Добавить TypeScript типы для всех данных

---

## 📁 Предлагаемая структура проекта

```
/
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # GoldButton, SecondaryButton
│   │   ├── Badge.tsx           # GoldBadge
│   │   ├── Card.tsx            # базовые карточки
│   │   └── Section.tsx         # обёртка секций
│   ├── CourseCard.tsx
│   ├── FeatureCard.tsx
│   ├── TestimonialCard.tsx
│   ├── SectionHeader.tsx
│   └── FeatureList.tsx
├── data/
│   ├── testimonials.ts
│   ├── gallery.ts
│   ├── courses.ts
│   └── pricing.ts
├── constants/
│   ├── branding.ts
│   ├── social.ts
│   └── payment.ts
└── types/
    ├── testimonial.ts
    ├── course.ts
    └── pricing.ts
```

---

## ✅ Преимущества после рефакторинга

1. **Меньше кода** - экономия ~8500 символов
2. **Легче поддерживать** - изменения в одном месте
3. **Меньше ошибок** - единая точка правды
4. **Быстрее разработка** - переиспользование компонентов
5. **Лучше типизация** - TypeScript типы для данных
6. **Проще тестирование** - изолированные компоненты
7. **Легче менять дизайн** - изменения в одном компоненте

---

*Анализ проведён: Январь 2026*
