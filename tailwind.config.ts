import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeBomb: "var(--orange-bomb)",
        moonlightMist: "var(--moonlight-mist)",
        springMeadow: "var(--spring-meadow)",
        stormcloudSlate: "var(--stormcloud-slate)",
        cherryBomb: "var(--cherry-bomb)",
        midnightStone: "var(--midnight-stone)",
        levanderHaze: "var(--levander-haze)",
        slateSmoke: "var(--slate-smoke)",
      },
      maxWidth: {
        containerXs: "calc(100% - 32px)",
        containerSm: "calc(100% - 48px)",
        containerMd: "calc(100% - 64px)",
        container: "1180px",
      },
      screens: {
        sm: "484px",
      },
    },
  },
  plugins: [],
};
export default config;
