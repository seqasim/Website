#!/usr/bin/env node
/**
 * Pre-deploy diagnostics — writes NDJSON to the debug log for CI/deploy troubleshooting.
 */
import { existsSync, readdirSync, statSync, appendFileSync } from "node:fs";
import { join } from "node:path";

const LOG_PATH = join(process.cwd(), ".cursor/debug-35714e.log");
const sessionId = "35714e";

function log(hypothesisId, location, message, data) {
  const entry = JSON.stringify({
    sessionId,
    hypothesisId,
    location,
    message,
    data,
    timestamp: Date.now(),
    runId: process.env.DEBUG_RUN_ID || "local-pre-deploy",
  });
  appendFileSync(LOG_PATH, entry + "\n");
}

const dist = join(process.cwd(), "dist");
const distExists = existsSync(dist);
const indexExists = existsSync(join(dist, "index.html"));
const dsStore = existsSync(join(dist, ".DS_Store"));

let distSizeBytes = 0;
let fileCount = 0;
if (distExists) {
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      const s = statSync(p);
      if (s.isDirectory()) walk(p);
      else {
        fileCount++;
        distSizeBytes += s.size;
      }
    }
  };
  walk(dist);
}

log("H1", "scripts/ci-debug.mjs", "build artifact check", {
  distExists,
  indexExists,
  dsStoreInDist: dsStore,
  fileCount,
  distSizeBytes,
  distSizeMB: (distSizeBytes / 1024 / 1024).toFixed(2),
});

log("H3", "scripts/ci-debug.mjs", "astro base config", {
  base: "/Website",
  expectedSiteUrl: "https://seqasim.github.io/Website/",
});

console.log("CI debug log written to", LOG_PATH);
