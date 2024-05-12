/**
 * @file Proxy.ts
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2024 - ResearchIt All Rights Reserved.
 */

interface IServer {
  request(url: string): string;
}

class Server implements IServer {
  request(url: string): string {
    return `Server response for url: ${url}`;
  }
}

class NetworkProxy implements IServer {
  private server: Server;

  private bannedUrls: string[];

  constructor(server: Server) {
    this.server = server;
    this.bannedUrls = ["<http://banned-website.com>"];
  }

  request(url: string): string {
    if (this.isUrlBanned(url)) {
      return `Access to ${url} is banned`;
    }
    return this.server.request(url);
  }

  private isUrlBanned(url: string): boolean {
    return this.bannedUrls.includes(url);
  }
}

function clientCode(server: IServer) {
  console.log(server.request("<http://banned-website.com>"));
  console.log(server.request("<http://allowed-website.com>"));
}

console.log("Client: Executing the client code with a real server:");
const realServer = new Server();
clientCode(realServer);

console.log("");

console.log("Client: Executing the same client code with a proxy:");
const proxy = new NetworkProxy(realServer);
clientCode(proxy);
