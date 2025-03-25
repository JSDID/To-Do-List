# 📌 Разработка REST API для управления списком задач (To-Do List)

Полноценное CRUD-приложение с фронтендом и бэкендом на современном стеке.

---

## 🛠️ Технологический стек

- ⚛️ **React + Vite + TypeScript** 
- 🌐 **Express.js + SQLite**
- 💄 **Material UI**
- ⚙️ **REST API с сохранением данных в базе**

---

## 📦 Установка и запуск проекта

> ⚠️ Убедитесь, что у вас установлен **Node.js ≥ 18** и **npm**

### 1. Клонируйте репозиторий:

```bash
git clone https://github.com/Alex3584/To-Do-List.git
cd To-Do-List
```

### 2. Установите зависимости:

``` bash
npm install
cd todo-backend && npm install
cd ../todo-frontend && npm install
```

``` bash
cd todo-frontend
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
npm install typeface-roboto
```

``` bash
cd todo-backend
npm install --save-dev typescript ts-node @types/node
npm install express cors sqlite3
npm install --save-dev @types/express @types/cors @types/sqlite3
```

### 3. Запустите проект:

Убедитесь что находитесь в корневой директории проекта **To-Do-List**.

```bash
# Запускает и фронтенд, и бэкенд
npm run dev
```

Откройте фронтенд: <http://localhost:5173>

Бэкенд работает по адресу: <http://localhost:3000>

---
