# InputField Demo

A React component demo showcasing customizable input fields with various variants, sizes, and interactive states — including disabled, invalid, and loading modes. The project also supports light/dark themes with dynamic styling, and features a live preview and interactive mode.

---

## Features

- **Multiple input variants:** `filled`, `outlined`, and `ghost`
- **Responsive sizes:** small (`sm`), medium (`md`), large (`lg`)
- **Input states:** disabled, invalid (with error message), and loading (with spinner)
- **Light and dark theme support** with toggle button
- **Interactive mode:** input validation with submit button
- **Context-based styling:** share variant, size, and theme settings via React Context
- **Live preview:** display all input variants and states side-by-side
- **Accessible and responsive UI**

---

## Tech Stack

- React 18+
- Tailwind CSS (for styling and utility classes)
- DaisyUI
- Aceternity UI
- Context API (for global state management)
- Optional: clsx for conditional className merging

---

Usage

- Use the dropdowns to change input variant (filled, outlined, ghost) and size (sm, md, lg).
- Toggle between Preview Mode and Interactive Mode.
- In Interactive Mode, enter an email and submit — invalid emails (without "@") show error.
- Switch between light and dark themes using the toggle button in the navbar.

src/
├── components/
│   ├── InputField.jsx         # InputField component with dynamic styling
│   ├── PreviewMode.jsx        # Displays disabled, invalid, and loading input examples
│   ├── InteractiveMode.jsx    # Input with submit button and validation
│   ├── Navbar.jsx             # Theme toggle navbar
│   └── ...                   
├── context/
│   └── InputFieldContext.js   # React context for variant, size, theme
├── App.jsx                   # Main app entry
└── index.js                  # ReactDOM render

Customization

- Modify Tailwind config to adjust colors and theme options.
- Extend InputField component to support additional input types or validations.
- Add more interactive features or animations as needed.

Contributing

Feel free to open issues or pull requests if you'd like to improve the project!
