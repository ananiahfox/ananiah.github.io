/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024px",
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-content": "var(--primary-content)",
        secondary: "var(--color-secondary)",
        "secondary-content": "var(--color-secondary-content)",
        accent: "var(--color-accent)",
        "accent-content": "var(--color-accent-content)",
        neutral: "var(--color-neutral)",
        "neutral-content": "var(--color-neutral-content)",
        "base-100": "var(--color-base-100)",
        "base-200": "var(--color-base-200)",
        "base-300": "var(--color-base-300)",
        "base-content": "var(--color-base-content)",
        info: "var(--color-info)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
      },
    },
  },
  plugins: [],
};
