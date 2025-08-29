import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
darkMode: ["class"],
content: [
"./src/app/**/*.{ts,tsx}",
"./src/components/**/*.{ts,tsx}",
],
theme: {
	container: { center: true, padding: "1rem", screens: { "2xl": "1280px" } },
	extend: {
		colors: {
			brand: {
				DEFAULT: "#B22222", // rojo carne
				dark: "#7A1515",
				light: "#FBEAEA",
			},
		},
		boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.06)" },
		borderRadius: { xl: "1rem", "2xl": "1.25rem" },
	},
	},
	plugins: [forms, typography],
} satisfies Config;