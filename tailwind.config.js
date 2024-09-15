/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(

    {
      layout: {}, // common layout options
      themes: {
        light: {
          layout: {}, // light theme layout options
          // ...
        },
        dark: {
          layout: {}, // dark theme layout options
          // ...
        },
        // ... custom themes
      },
    }
  )
  ],
}

