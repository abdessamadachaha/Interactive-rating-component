# Frontend Mentor - Interactive Rating Component (React + Vite)

![Design preview for the Interactive rating component coding challenge](./preview.jpg)

## Welcome! 👋

This is my solution to the [Frontend Mentor Interactive Rating Component challenge](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).  

I built this project using **React** and **Vite**, with **lifting state up** to manage the selected rating and the submit action. The app dynamically switches content to show a "Thank you" screen after the user submits their rating.

**Live Demo:** [Click here to view](https://abdessamadachaha.github.io/Interactive-rating-component/)

---

## Features

- Select a rating from 1 to 5
- Submit button updates the content using React state
- Uses **lifting state up** to share the selected rating between components
- Displays a "Thank you" screen with the chosen rating and an image
- Smooth hover and interaction effects for buttons

---

## Technologies Used

- **React** – For building interactive UI
- **Vite** – For fast development and build
- **JavaScript / JSX** – Logic and component rendering
- **CSS** – Styling and responsive design

---

## How It Works

1. User selects a rating (1–5)  
2. Selected rating is stored in a **parent state** (lifting state up)  
3. Clicking **Submit** updates the content to the "Thank you" screen  
4. Original rating options are hidden, showing only the result

This approach allows multiple components (buttons and result display) to share the same state efficiently.

---

## Getting Started

To run this project locally:

```bash
# Clone the repo
git clone https://github.com/abdessamadachaha/Interactive-rating-component.git

# Navigate to the project folder
cd Interactive-rating-component

# Install dependencies
npm install

# Run development server
npm run dev
