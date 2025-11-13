import type { NextConfig } from "next";
import lingoCompiler from "lingo.dev/compiler";

const nextConfig: NextConfig = {
  /* config options here */
};

export default lingoCompiler.next({
  sourceLocale: "en",
  targetLocales: ["hi", "es", "ja", "fr", "ar"],
  models: {
    "*:*": "google:gemini-2.5-flash",
  },
})(nextConfig);
