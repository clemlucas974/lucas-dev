/// <reference types="vite/client" />

declare module '*.scss';
declare module '*.css';

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}
