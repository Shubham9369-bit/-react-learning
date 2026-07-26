# React Conditional Rendering Practice

A small practice project where I learned and tried different ways of doing **conditional rendering** in React.

## What I Learned

There are 3 common ways to show UI based on a condition in React:

### 1. Early Return with `if`
```jsx
if (!isLoggedIn) {
  return (
    <LoginBtn />
  )
}
```
If the condition is true, the component returns right there, and the rest of the code (the JSX below it) never renders.

### 2. Logical AND (`&&`) Operator
```jsx
{isLoggedIn && <LoginBtn />}
```
Used when you only want to show something **if a condition is true** (and show nothing if it's false). If the left side is false, the right side doesn't render at all.

### 3. Ternary Operator (also tried, it's in the comments)
```jsx
{isLoggedIn ? <Logout /> : <LoginBtn />}
```
Used when you want to show **one of two options**. It's basically a short form of `if-else`.

### 4. Full `if-else` with separate returns (also tried)
```jsx
if (isLoggedIn) {
  return <Logout />
} else {
  return <LoginBtn />
}
```

## Component Structure

```
src/
├── App.jsx
├── App.css
└── components/
    ├── Logout.jsx
    └── LoginBtn.jsx
```

I used the `useState` hook to manage the `isLoggedIn` state, which decides whether to show the Login button or the Logout button.

## Tech Stack

- React
- Vite

## Getting Started

```bash
npm install
npm run dev
```

## Key Takeaway

The main thing I understood is that **there's no single "correct" way** to do conditional rendering — depending on the situation, you can use `if`, `&&`, a ternary, or an early return. For a simple true/false toggle, `&&` or a ternary usually looks the cleanest.
