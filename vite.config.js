import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/JustType/",
    build: {
        outDir: "docs",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                typing: resolve(__dirname, "typing.html")
            }
        }
    }
});