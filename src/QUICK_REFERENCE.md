# 🎨 Быстрая шпаргалка по дизайн-системе

## Цвета (копируй и вставляй)

```tsx
/* ФОНЫ */
bg-[#1a1410]           // Основной тёмный
bg-[#2a1f18]           // Вторичный светлее

/* АКЦЕНТЫ */
text-[#D4B896]         // Золотой текст
border-[#D4B896]       // Золотая рамка
from-[#D4B896] to-[#C9A882]    // Градиент основной
hover:from-[#E5C9A7] hover:to-[#D4B896]  // Градиент hover
```

---

## Кнопки (готовые шаблоны)

### 🟡 Главная кнопка (золотая)
```tsx
<button className="group bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-8 py-4 rounded-xl hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all duration-300 shadow-lg shadow-[#D4B896]/20 hover:shadow-[#D4B896]/40 hover:scale-[1.05] active:scale-[0.98] inline-flex items-center gap-2">
  Текст
  <span className="group-hover:translate-x-1 transition-transform">→</span>
</button>
```

### ⚪ Вторичная кнопка (контур)
```tsx
<button className="group px-8 py-4 border-2 border-[#D4B896] text-[#D4B896] rounded-xl hover:bg-[#D4B896]/10 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] inline-flex items-center gap-2">
  Текст
  <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
</button>
```

### 🔘 Малая кнопка (навигация)
```tsx
<a className="group bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-5 py-2 rounded-lg hover:from-[#E5C9A7] hover:to-[#D4B896] transition-all duration-200 text-sm font-semibold hover:scale-[1.05] active:scale-[0.95] inline-flex items-center gap-2">
  Текст
  <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
</a>
```

---

## Карточки

### 📦 Обычная карточка (тёмная)
```tsx
<div className="bg-gradient-to-br from-[#2a1f18] to-[#3d2f22] rounded-2xl p-8 border border-[#D4B896]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4B896]/20">
  {/* контент */}
</div>
```

### ✨ Акцентная карточка (золотая)
```tsx
<div className="bg-gradient-to-br from-[#D4B896]/15 to-[#C9A882]/10 rounded-2xl p-8 border-2 border-[#D4B896]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4B896]/30">
  {/* контент */}
</div>
```

### 🎴 Интерактивная карточка
```tsx
<div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-2xl p-8 border border-[#D4B896]/20 hover:border-[#D4B896]/40 transition-all duration-300 group">
  {/* контент */}
</div>
```

---

## Стрелки

```tsx
→  стрелка вправо
<span className="group-hover:translate-x-1 transition-transform">→</span>

↓  стрелка вниз  
<span className="group-hover:translate-y-0.5 transition-transform">↓</span>
```

**Важно:** Родитель должен иметь `className="group"`

---

## Отступы

```tsx
gap-2   // 8px  - минимум
gap-3   // 12px - списки
gap-4   // 16px - стандарт
gap-6   // 24px - средние
gap-8   // 32px - большие
```

---

## Скругления

```tsx
rounded-lg    // 8px  - малые кнопки
rounded-xl    // 12px - большие кнопки
rounded-2xl   // 16px - карточки
rounded-3xl   // 24px - модальные окна
```

---

## Тени

```tsx
shadow-lg shadow-[#D4B896]/20              // обычное
hover:shadow-xl hover:shadow-[#D4B896]/40  // hover
hover:shadow-2xl hover:shadow-[#D4B896]/30 // левитация
```

---

## Анимации

```tsx
// Базовая
transition-all duration-300

// Быстрая (кнопки)
transition-all duration-200

// Только цвет
transition-colors duration-200

// Только движение
transition-transform

// Увеличение
hover:scale-[1.05]

// Клик
active:scale-[0.98]

// Левитация
hover:-translate-y-2
```

---

## Типичные комбинации

### Ссылка в навигации
```tsx
<a className="text-[#D4B896]/70 hover:text-[#D4B896] transition-colors duration-200">
  Текст
</a>
```

### Иконка с анимацией
```tsx
<div className="w-16 h-16 bg-gradient-to-br from-[#D4B896] to-[#C9A882] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
  ✨
</div>
```

### Бейдж "НОВОЕ"
```tsx
<div className="bg-gradient-to-r from-[#D4B896] to-[#C9A882] text-[#1a1410] px-4 py-1 rounded-full text-sm font-bold">
  НОВОЕ
</div>
```

---

## Модальное окно
```tsx
<div className="bg-gradient-to-br from-[#2a1f18] to-[#1a1410] rounded-3xl border border-[#D4B896]/20 p-10 shadow-2xl">
  {/* контент */}
</div>
```

---

## Grid layouts

```tsx
// 3 колонки на десктопе
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 2 колонки на десктопе  
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

// 4 колонки на десктопе
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
```

---

## Эмодзи для курсов

```
🎂 Торты, бенто
🍪 Печенье, пряники
🍰 Медовики
🎨 Роспись, декор
📱 Reels, видео
✨ Премиум
🎁 Бонус
⭐ Premium тариф
🟡 Standard тариф
```

---

*Быстрая шпаргалка v1.0*
