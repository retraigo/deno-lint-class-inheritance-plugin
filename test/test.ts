import { assertEquals } from "jsr:@std/assert";
import plugin from "../plugin.ts";

Deno.test("Needs fixing", () => {
  const testFile = Deno.readTextFileSync("test/test_item_bad.ts")
  const diagnostics = Deno.lint.runPlugin(plugin, "main.ts", testFile);

  assertEquals(diagnostics.length, 1);
  const d = diagnostics[0];
  assertEquals(d.id, "class-inheritance-plugin/avoid-method-inheritance");
  assertEquals(d.message, "Method \"fly\" must not be inherited from the superclass.");
  assertEquals(d.hint, "Override the method \"fly\" with a custom implementation instead.");
});

Deno.test("Doesn't need fixing", () => {
  const testFile = Deno.readTextFileSync("test/test_item_good.ts")
  const diagnostics = Deno.lint.runPlugin(plugin, "main.ts", testFile);

  assertEquals(diagnostics.length, 0);
});