# 📁 Организация Медиа Файлов

## 🎯 Текущее Состояние

Я вижу, что в корне проекта уже есть медиа файлы:
- ✅ `song.m4a` (фоновая музыка)
- ✅ `uk.png` (фото актера)
- ✅ `stick.png` до `stick11.png` (11 стикеров)
- ✅ `congratulations.mp4` (видео - переименовано!)
- ✅ `logo.png` (логотип)
- ✅ `text.txt` (текст поздравления)

---

## ⚠️ ВАЖНО: Исправить Опечатку

Видеофайл называется **`congratulations.mp4`** ✅

### Нужно либо:

**Вариант 1: Переименовать файл**
```bash
# На Windows (PowerShell):
Rename-Item "congrulations.mp4" "congratulations.mp4"

# На Mac/Linux:
mv congrulations.mp4 congratulations.mp4
```

**Вариант 2: Исправить код в VideoSection.jsx**
Если не можешь переименовать, открой файл и измени:
```javascript
// вместо:
<source src="/public/congratulations.mp4" type="video/mp4" />

// напиши:
<source src="/public/congrulations.mp4" type="video/mp4" />
```

---

## 📂 Рекомендуемая Структура

```
ux-ui/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.module.css
│   └── components/
│       ├── StartScreen.jsx
│       ├── Hero.jsx
│       ├── MessageSection.jsx
│       ├── Sticker.jsx
│       ├── VideoSection.jsx
│       ├── Footer.jsx
│       └── [CSS modules for each]
└── public/
    ├── song.m4a
    ├── uk.png
    ├── stick.png
    ├── stick1.png
    ├── ... (до stick11.png)
    ├── congratulations.mp4
    ├── logo.png
    └── text.txt
```

---

## 🎯 Варианты Размещения

### Вариант A: Медиа в /public/ (РЕКОМЕНДУЕМО)

1. Создай папку `/public/` если её нет
2. Переместь туда ВСЕ медиа файлы
3. В коде ссылки будут: `/public/song.m4a` или просто `/song.m4a`

**Преимущества:**
- ✅ Стандарт Vite
- ✅ Файлы доступны по прямым URL
- ✅ Автоматическая оптимизация при build

### Вариант B: Медиа в корне проекта (ТЕКУЩЕЕ)

Если медиа остаются в корне, обнови пути в компонентах:

```javascript
// Вместо:
<img src="/public/uk.png" />

// Напиши:
<img src="./uk.png" />
```

**Минусы:**
- ⚠️ Не соответствует стандартам Vite
- ⚠️ Может быть проблема при production build

---

## 🚀 Как Переместить Файлы в /public/

### Windows (PowerShell):
```powershell
# Создать папку
New-Item -ItemType Directory -Path "public"

# Переместить файлы
Move-Item "song.m4a" "public/song.m4a"
Move-Item "uk.png" "public/uk.png"
Move-Item "congrulations.mp4" "public/congratulations.mp4"  # с исправлением опечатки!
Move-Item "logo.png" "public/logo.png"
Move-Item "text.txt" "public/text.txt"

# Переместить все стикеры
Get-ChildItem stick*.png | Move-Item -Destination "public/"
```

### Mac/Linux (Bash):
```bash
# Создать папку
mkdir -p public

# Переместить файлы
mv song.m4a public/
mv uk.png public/
mv congrulations.mp4 public/congratulations.mp4  # с исправлением!
mv logo.png public/
mv text.txt public/
mv stick*.png public/
```

---

## ✅ Финальная Проверка

После перемещения проверь:

1. **Папка `/public/` содержит:**
   - ✅ song.m4a
   - ✅ uk.png
   - ✅ congratulations.mp4 (исправленная опечатка)
   - ✅ logo.png
   - ✅ text.txt
   - ✅ stick.png до stick11.png (11 файлов)

2. **Запусти проект:**
   ```bash
   npm install
   npm run dev
   ```

3. **Проверь в браузере:**
   - Откроется StartScreen
   - Клик на "Открыть" включит музыку
   - Загрузится фото актера
   - Текст подгрузится из text.txt
   - Видео загрузится в VideoSection

---

## 🎵 Оптимизация Медиа

### Аудио (song.m4a):
- **Формат**: MP4 Audio (AAC)
- **Битрейт**: 128 kbps
- **Рекомендуемый размер**: 3-5 MB
- **Как оптимизировать**: Используй ffmpeg
  ```bash
  ffmpeg -i original.m4a -b:a 128k song.m4a
  ```

### Видео (congratulations.mp4):
- **Формат**: MP4 (H.264 codec)
- **Разрешение**: 1080x1080px (для мобильных)
- **Битрейт**: 2-3 Mbps
- **Рекомендуемый размер**: 10-30 MB
- **Как оптимизировать**: Используй ffmpeg
  ```bash
  ffmpeg -i original.mp4 -s 1080x1080 -b:v 2500k congratulations.mp4
  ```

### Изображения (PNG):
- **Формат**: PNG с прозрачностью
- **Размеры**:
  - `uk.png`: 400x500px (основное фото)
  - `logo.png`: 200x200px
  - `stick*.png`: 100-200px каждый
- **Оптимизация**: Используй tools вроде TinyPNG

---

## 🔍 Проверка Путей в Коде

### StartScreen.jsx:
```javascript
<audio src="/public/song.m4a" />  // ← путь к музыке
```

### Hero.jsx:
```javascript
<img src="/public/uk.png" />  // ← путь к фото
```

### MessageSection.jsx:
```javascript
src={`/public/stick${i}.png`}  // ← пути к стикерам
fetch('/text.txt')  // ← загрузка текста
```

### VideoSection.jsx:
```javascript
<source src="/public/congratulations.mp4" />  // ← путь к видео
```

### Footer.jsx:
```javascript
<img src="/public/logo.png" />  // ← путь к логотипу
```

---

## 🎯 Итоговый Чек-лист

- [ ] Все медиа файлы перемещены в `/public/`
- [ ] Опечатка "congrulations" исправлена на "congratulations"
- [ ] Все пути в компонентах обновлены на `/public/файл`
- [ ] `npm install` прошёл успешно
- [ ] `npm run dev` запустился без ошибок
- [ ] StartScreen загружается
- [ ] При клике на кнопку музыка играет
- [ ] Фото актера загружается
- [ ] Текст подгружается из text.txt
- [ ] Видео загружается в VideoSection
- [ ] Логотип видит в Footer

---

**Когда всё готово - запусти `npm run dev` и наслаждайся результатом! 🎉✨**
