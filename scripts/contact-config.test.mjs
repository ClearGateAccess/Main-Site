import assert from "node:assert/strict";
import test from "node:test";
import { isContactConfigured } from "./contact-config.mjs";

test("email remains available when delivery or anti-spam configuration is absent", () => {
  for (const [endpoint, key] of [
    [undefined, undefined], ["", "key"], ["not a URL", "key"],
    ["https://contact.example.com/contact", ""],
    ["https://contact.example.com/contact", "   "],
    ["http://contact.example.com/contact", "key"],
    ["https://user:password@contact.example.com/contact", "key"],
  ]) assert.equal(isContactConfigured(endpoint, key), false);
});

test("online form requires an explicit secure endpoint and anti-spam key", () => {
  assert.equal(isContactConfigured("https://contact.example.com/contact", "public-key"), true);
});
