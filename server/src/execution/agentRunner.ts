import { chromium } from "playwright";
import type { Browser, Page } from "playwright";

class AgentRunner {
  private browser!: Browser;

  async launch(): Promise<Browser> {
    this.browser = await chromium.launch({ headless: true });
    return this.browser;
    // Handle proxies/stealth/setup
  }
  async newPage(): Promise<Page> {
    return await this.browser.newPage();
  }
  async close() {
    await this.browser.close();
  }
}
export default AgentRunner;
