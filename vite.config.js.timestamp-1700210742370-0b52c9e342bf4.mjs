// vite.config.js
import { fileURLToPath, URL } from "url";
import { defineConfig } from "file:///C:/Users/yuano/Documents/5bhitm/medt_baum/september/PWA-emp-ilic%20(2)/PWA-emp-ilic/PWA%201%20-%20Vue%203%20employees%20START/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/yuano/Documents/5bhitm/medt_baum/september/PWA-emp-ilic%20(2)/PWA-emp-ilic/PWA%201%20-%20Vue%203%20employees%20START/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/yuano/Documents/5bhitm/medt_baum/september/PWA-emp-ilic%20(2)/PWA-emp-ilic/PWA%201%20-%20Vue%203%20employees%20START/node_modules/vite-plugin-pwa/dist/index.js";

// manifest.js
var manifest_default = {
  name: "Employees PWA Project",
  short_name: "employeesPWA",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  lang: "en",
  scope: "/",
  theme_color: "#ffffff",
  id: "/",
  icons: [
    { src: "/images/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "/images/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
  ]
};

// vite.config.js
var __vite_injected_original_import_meta_url = "file:///C:/Users/yuano/Documents/5bhitm/medt_baum/september/PWA-emp-ilic%20(2)/PWA-emp-ilic/PWA%201%20-%20Vue%203%20employees%20START/vite.config.js";
var vite_config_default = defineConfig({
  server: {
    port: 8080
  },
  preview: {
    port: 5555,
    proxy: {
      "/employees": {
        target: "http://localhost:3000",
        changeOrigin: true
      },
      "^/images/portraits/.*": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  },
  plugins: [
    vue(),
    VitePWA({
      manifest: manifest_default,
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,jpeg,ttf,woff2}"]
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAibWFuaWZlc3QuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5dWFub1xcXFxEb2N1bWVudHNcXFxcNWJoaXRtXFxcXG1lZHRfYmF1bVxcXFxzZXB0ZW1iZXJcXFxcUFdBLWVtcC1pbGljICgyKVxcXFxQV0EtZW1wLWlsaWNcXFxcUFdBIDEgLSBWdWUgMyBlbXBsb3llZXMgU1RBUlRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHl1YW5vXFxcXERvY3VtZW50c1xcXFw1YmhpdG1cXFxcbWVkdF9iYXVtXFxcXHNlcHRlbWJlclxcXFxQV0EtZW1wLWlsaWMgKDIpXFxcXFBXQS1lbXAtaWxpY1xcXFxQV0EgMSAtIFZ1ZSAzIGVtcGxveWVlcyBTVEFSVFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveXVhbm8vRG9jdW1lbnRzLzViaGl0bS9tZWR0X2JhdW0vc2VwdGVtYmVyL1BXQS1lbXAtaWxpYyUyMCgyKS9QV0EtZW1wLWlsaWMvUFdBJTIwMSUyMC0lMjBWdWUlMjAzJTIwZW1wbG95ZWVzJTIwU1RBUlQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICd1cmwnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xuaW1wb3J0IG1hbmlmZXN0IGZyb20gJy4vbWFuaWZlc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA4MDgwLFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogNTU1NSxcbiAgICBwcm94eToge1xuICAgICAgJy9lbXBsb3llZXMnOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAnXi9pbWFnZXMvcG9ydHJhaXRzLy4qJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIG1hbmlmZXN0LFxuICAgICAgd29ya2JveDoge1xuICAgICAgICBnbG9iUGF0dGVybnM6IFsnKiovKi57anMsY3NzLGh0bWwsaWNvLHBuZyxqcGcsanBlZyx0dGYsd29mZjJ9J10sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceXVhbm9cXFxcRG9jdW1lbnRzXFxcXDViaGl0bVxcXFxtZWR0X2JhdW1cXFxcc2VwdGVtYmVyXFxcXFBXQS1lbXAtaWxpYyAoMilcXFxcUFdBLWVtcC1pbGljXFxcXFBXQSAxIC0gVnVlIDMgZW1wbG95ZWVzIFNUQVJUXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5dWFub1xcXFxEb2N1bWVudHNcXFxcNWJoaXRtXFxcXG1lZHRfYmF1bVxcXFxzZXB0ZW1iZXJcXFxcUFdBLWVtcC1pbGljICgyKVxcXFxQV0EtZW1wLWlsaWNcXFxcUFdBIDEgLSBWdWUgMyBlbXBsb3llZXMgU1RBUlRcXFxcbWFuaWZlc3QuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3l1YW5vL0RvY3VtZW50cy81YmhpdG0vbWVkdF9iYXVtL3NlcHRlbWJlci9QV0EtZW1wLWlsaWMlMjAoMikvUFdBLWVtcC1pbGljL1BXQSUyMDElMjAtJTIwVnVlJTIwMyUyMGVtcGxveWVlcyUyMFNUQVJUL21hbmlmZXN0LmpzXCI7ZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdFbXBsb3llZXMgUFdBIFByb2plY3QnLFxyXG4gIHNob3J0X25hbWU6ICdlbXBsb3llZXNQV0EnLFxyXG4gIHN0YXJ0X3VybDogJy8nLFxyXG4gIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcclxuICBiYWNrZ3JvdW5kX2NvbG9yOiAnI2ZmZmZmZicsXHJcbiAgbGFuZzogJ2VuJyxcclxuICBzY29wZTogJy8nLFxyXG4gIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXHJcbiAgaWQ6ICcvJyxcclxuICBpY29uczogW1xyXG4gICAgeyBzcmM6ICcvaW1hZ2VzL2ljb25zL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nJywgc2l6ZXM6ICcxOTJ4MTkyJywgdHlwZTogJ2ltYWdlL3BuZycgfSxcclxuICAgIHsgc3JjOiAnL2ltYWdlcy9pY29ucy9hbmRyb2lkLWNocm9tZS01MTJ4NTEyLnBuZycsIHNpemVzOiAnNTEyeDUxMicsIHR5cGU6ICdpbWFnZS9wbmcnIH0sXHJcbiAgXSxcclxufTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpaUIsU0FBUyxlQUFlLFdBQVc7QUFFcGtCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7OztBQ0ptZ0IsSUFBTyxtQkFBUTtBQUFBLEVBQ3hpQixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsRUFDVCxrQkFBa0I7QUFBQSxFQUNsQixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixJQUFJO0FBQUEsRUFDSixPQUFPO0FBQUEsSUFDTCxFQUFFLEtBQUssNENBQTRDLE9BQU8sV0FBVyxNQUFNLFlBQVk7QUFBQSxJQUN2RixFQUFFLEtBQUssNENBQTRDLE9BQU8sV0FBVyxNQUFNLFlBQVk7QUFBQSxFQUN6RjtBQUNGOzs7QURkeVYsSUFBTSwyQ0FBMkM7QUFPMVksSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLGNBQWM7QUFBQSxRQUNaLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxNQUNoQjtBQUFBLE1BQ0EseUJBQXlCO0FBQUEsUUFDdkIsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFFBQVE7QUFBQSxNQUNOO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxjQUFjLENBQUMsK0NBQStDO0FBQUEsTUFDaEU7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
