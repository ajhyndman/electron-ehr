declare module 'electron' {
  declare class ipcRenderer {
    on(channel: string, listener: Function): void;
    once(channel: string, listener: Function): void;
    removeListener(channel: string, listener: Function): void;
    removeAllListeners(channel: string[]): void;
    send(channel: string, ...args: any): void;
    sendSync(channel: string, ...args: any): void;
    sendToHost(channel: string, ...args: any): void;
  }

  declare var exports: {
    ipcRenderer: ipcRenderer;
  };
}
