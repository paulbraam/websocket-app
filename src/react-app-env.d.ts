declare var process: {
  env: {
    REACT_APP_WEBSOCKET_URL: string;
  };
};

declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}
