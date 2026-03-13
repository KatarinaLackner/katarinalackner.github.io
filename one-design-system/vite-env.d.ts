/// <reference types="vite/client" />

// Extend Vite's module declarations to support ?url suffix for CSS files
declare module '*?url' {
  const url: string;
  export default url;
}

declare module '*.css?url' {
  const url: string;
  export default url;
}
