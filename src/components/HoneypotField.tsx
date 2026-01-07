import { useEffect, useState } from 'react';
import { HoneypotProtection } from '../utils/spamProtection';

interface HoneypotFieldProps {
  onBotDetected?: () => void;
}

/**
 * Невидимое поле-ловушка для ботов
 * Человек его не увидит и не заполнит, а бот заполнит автоматически
 */
export default function HoneypotField({ onBotDetected }: HoneypotFieldProps) {
  const [fieldName, setFieldName] = useState('');
  const honeypot = HoneypotProtection.getInstance();

  useEffect(() => {
    // Генерируем уникальное имя поля
    const name = honeypot.generateFieldName();
    setFieldName(name);
    honeypot.registerForm(name);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Если поле заполнено - это бот!
    if (e.target.value && onBotDetected) {
      onBotDetected();
    }
  };

  return (
    <>
      {/* Honeypot поле - невидимое для людей */}
      <input
        type="text"
        name={fieldName}
        id={fieldName}
        onChange={handleChange}
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          opacity: 0,
          pointerEvents: 'none',
        }}
      />
      
      {/* Альтернативный honeypot через CSS */}
      <div
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <label htmlFor={`${fieldName}_alt`}>
          Please leave this field empty
        </label>
        <input
          type="email"
          name={`${fieldName}_alt`}
          id={`${fieldName}_alt`}
          onChange={handleChange}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>
    </>
  );
}
