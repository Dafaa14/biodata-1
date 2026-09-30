import { chromium } from "playwright";
import { writeFileSync } from "node:fs";

const browser = await chromium.launch({
  executablePath:
    "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell",
  headless: true,
  args: ["--no-sandbox", "--disable-gpu"],
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.goto("file:///workspace/.grok/og-card.html", { waitUntil: "networkidle" });
await page.evaluate(async () => {
  if (document.fonts?.ready) await document.fonts.ready;
});
await page.waitForTimeout(400);
const fonts = await page.evaluate(() =>
  [...document.fonts].map((f) => `${f.family} ${f.status} ${f.weight}`),
);
console.log("fonts", fonts);
const buf = await page.screenshot({ type: "png", omitBackground: false });
writeFileSync("/workspace/.grok/card-raw.png", buf);
await browser.close();
console.log("wrote card-raw.png");
