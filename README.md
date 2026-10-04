````markdown
# ⏱️ JavaScript Stopwatch

<div align="center">

### A Modern & Responsive Stopwatch Built with Vanilla JavaScript

<p>
  <a href="https://sarfraz94.github.io/javascript-stopwatch/">
    <strong>🚀 Live Demo</strong>
  </a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://github.com/Sarfraz94/javascript-stopwatch">
    <strong>📂 View Repository</strong>
  </a>
</p>

</div>

---

## 📌 About The Project

**JavaScript Stopwatch** is a clean and responsive stopwatch web application built using **HTML5, CSS3, and Vanilla JavaScript**.

The project was created as a practical JavaScript exercise to strengthen my understanding of **DOM manipulation, event handling, timer functions, arrays, loops, and dynamic UI updates**.

The interface features a modern dark glass-style design with an easy-to-use control system.

---

## ✨ Features

- ▶️ Start the stopwatch
- ⏹️ Stop the stopwatch
- 🔖 Store current time
- 🗑️ Clear the stopwatch
- 📋 Store up to 5 time records
- ⏱️ Hours, minutes, and seconds display
- 🎨 Modern dark UI
- 💎 Glassmorphism-inspired design
- 📱 Responsive layout
- ⚡ Smooth button interactions
- 🎯 Font Awesome icons
- 🧩 Dynamic DOM updates

---

## 🖥️ Live Preview

### 🚀 Try It Yourself

👉 **[Open JavaScript Stopwatch](https://sarfraz94.github.io/javascript-stopwatch/)**

---

## 🛠️ Built With

<div align="center">

| Technology | Usage |
|---|---|
| 🟧 **HTML5** | Structure & layout |
| 🎨 **CSS3** | Styling & responsive design |
| 🟨 **JavaScript** | Stopwatch functionality |
| ⚡ **DOM** | Dynamic UI manipulation |
| 🔤 **Font Awesome** | Icons |

</div>

---

## 🧠 JavaScript Concepts Practiced

This project helped me practice several important JavaScript concepts:

```text
DOM Manipulation
│
├── getElementById()
├── innerText
├── innerHTML
└── disabled

Events
│
└── addEventListener()

Timing
│
├── setInterval()
└── clearInterval()

Arrays
│
├── push()
└── for...of

Functions
│
└── updateTime()

Math & Formatting
│
├── Math.floor()
├── %
├── toString()
└── padStart()
````

---

## ⚙️ How The Stopwatch Works

### ▶️ Start

The stopwatch uses `setInterval()` to execute the timer logic every second.

```javascript
timer = setInterval(() => {
    updateTime();
}, 1000);
```

### ⏹️ Stop

`clearInterval()` stops the running timer.

```javascript
clearInterval(timer);
```

### 🔖 Store

The current time is stored inside an array:

```javascript
array.push(display.innerText);
```

The stored values are then dynamically displayed inside the `<ul>` element.

### 🔄 Clear

The Clear button resets the stopwatch:

```text
00:00:00
```

and stops the active interval.

---

## 📂 Project Structure

```text
javascript-stopwatch/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

---

## 🎨 UI Highlights

The interface was designed with a focus on:

* Clean visual hierarchy
* Modern dark theme
* Glass-style card
* Large digital timer
* Clear action buttons
* Responsive layout
* Font Awesome icons
* Simple and intuitive user experience

---

## 📱 Responsive Design

The stopwatch is designed to work across different screen sizes:

**Desktop** 🖥️
**Laptop** 💻
**Tablet** 📱
**Mobile** 📲

---

## 🚀 Getting Started

Want to run this project locally?

### 1. Clone the repository

```bash
git clone https://github.com/Sarfraz94/javascript-stopwatch.git
```

### 2. Open the project

```text
Open the project folder in VS Code
```

### 3. Run

Open `index.html` in your browser.

That's it! 🎉

---

## 🔮 Future Improvements

Some features I may add in future versions:

* [ ] Milliseconds
* [ ] Lap functionality
* [ ] Pause / Resume
* [ ] Individual record deletion
* [ ] LocalStorage support
* [ ] Dark / Light theme
* [ ] Keyboard controls
* [ ] Better time history management

---

## 👨‍💻 Author

### Sarfraz Ali

**Computer Science Graduate | Aspiring MERN Stack Developer**

I'm currently strengthening my JavaScript and frontend development skills by building practical projects and gradually progressing toward the **MERN Stack**.

### 🔗 Connect & Explore

**GitHub:**
👉 https://github.com/Sarfraz94

**Project Repository:**
👉 https://github.com/Sarfraz94/javascript-stopwatch

**Live Project:**
👉 https://sarfraz94.github.io/javascript-stopwatch/

---

## ⭐ Show Your Support

If you like this project, consider giving the repository a ⭐.

It motivates me to keep learning, building, and sharing more projects.

---

<div align="center">

### 🚀 Built with HTML, CSS & JavaScript

**Learning • Building • Improving**

</div>
```
