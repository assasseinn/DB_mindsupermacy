import "dotenv/config";
import path from "node:path";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import injectHTML from "vite-plugin-html-inject";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

const buildVariables = () => {
	const isProd = process.env.NODE_ENV === 'production';
	const apiUrl = isProd ? '/api' : 'http://localhost:8000';
	const wsApiUrl = isProd ? `wss://${process.env.VERCEL_URL}/api` : 'ws://localhost:8000';

	const defines: Record<string, string> = {
		__APP_ID__: JSON.stringify(process.env.VERCEL_PROJECT_ID || ''),
		__API_PATH__: JSON.stringify("/api"),
		__API_URL__: JSON.stringify(apiUrl),
		__WS_API_URL__: JSON.stringify(wsApiUrl),
		__APP_BASE_PATH__: JSON.stringify("/"),
		__APP_TITLE__: JSON.stringify("Mindsupremacy"),
		__APP_FAVICON_LIGHT__: JSON.stringify("/favicon-light.svg"),
		__APP_FAVICON_DARK__: JSON.stringify("/favicon-dark.svg"),
		__APP_DEPLOY_USERNAME__: JSON.stringify(""),
		__APP_DEPLOY_APPNAME__: JSON.stringify(""),
		__APP_DEPLOY_CUSTOM_DOMAIN__: JSON.stringify(""),
		__APP_VERSION__: JSON.stringify(process.env.npm_package_version),
	};

	return defines;
};

// https://vite.dev/config/
export default defineConfig({
	define: buildVariables(),
	plugins: [react(), splitVendorChunkPlugin(), tsConfigPaths(), injectHTML()],
	server: {
		proxy: {
			"/api": {
				target: "http://127.0.0.1:8000",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		outDir: 'dist',
		sourcemap: true,
		chunkSizeWarningLimit: 1000, // Increase from default 500kb to 1000kb
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom', 'react-router-dom'],
					ui: ['@radix-ui/react-separator', 'clsx', 'tailwind-merge'],
				},
			},
		},
	},
});
