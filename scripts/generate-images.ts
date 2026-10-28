/**
 * Generates the 6 brand images for the Greenics website.
 * Saves as .webp (converted via sharp) into /public/images.
 *
 * Run: bun run scripts/generate-images.ts
 */
import ZAI from "z-ai-web-dev-sdk";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

type Job = {
  name: string;
  prompt: string;
  size: "1344x768" | "1024x1024";
};

const OUT_DIR = path.join(process.cwd(), "public", "images");

const jobs: Job[] = [
  {
    name: "hero-city",
    size: "1344x768",
    prompt:
      "Cinematic wide aerial photograph of a modern industrial city skyline at blue hour dusk, deep navy blue and midnight tones, illuminated highways with streaks of truck headlights, distant port cranes and shipping containers, subtle green accent lighting on a modern corporate tower in the foreground, atmospheric haze, premium corporate industrial mood, high detail, photorealistic, no text, no logos",
  },
  {
    name: "waste-management",
    size: "1344x768",
    prompt:
      "Photorealistic modern sustainable waste management and recycling facility at dusk, clean industrial building with green eco-tech accents, sorted recycling conveyor, workers in safety gear, deep navy blue sky, subtle green LED lighting, Swachh Bharat clean city aesthetic, professional corporate photography, no text, no logos",
  },
  {
    name: "logistics",
    size: "1344x768",
    prompt:
      "Cinematic photograph of a long line of modern logistics trucks on an empty highway at dusk, deep navy blue sky, motion blur headlights, distant warehouse distribution center with illuminated loading bays, subtle green accent lights, premium industrial corporate mood, photorealistic, high detail, no text, no logos",
  },
  {
    name: "trading",
    size: "1344x768",
    prompt:
      "Aerial night photograph of a massive international container shipping port, stacked colorful containers, gantry cranes, large container ship being unloaded, deep navy blue water and sky, subtle green dock lighting, cinematic corporate industrial mood, photorealistic, high detail, no text, no logos",
  },
  {
    name: "cybersecurity",
    size: "1344x768",
    prompt:
      "Abstract digital cybersecurity concept, a glowing translucent shield made of network nodes and data streams over a dark navy grid, subtle green and cyan data lines, server silhouettes in the deep background, futuristic premium corporate technology mood, dark background, photorealistic 3D render, high detail, no text, no logos",
  },
  {
    name: "about",
    size: "1344x768",
    prompt:
      "Cinematic architectural photograph of a modern corporate industrial headquarters building at dusk, glass and steel facade with subtle green accent lighting, deep navy blue sky, reflective entrance plaza, professional corporate premium mood, photorealistic, high detail, no text, no logos",
  },
];

async function ensureDir(dir: string) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function generateOne(zai: Awaited<ReturnType<typeof ZAI.create>>, job: Job) {
  const outWebp = path.join(OUT_DIR, `${job.name}.webp`);
  // Skip if already generated.
  if (fs.existsSync(outWebp)) {
    console.log(`[skip] ${job.name}.webp already exists`);
    return;
  }

  console.log(`[gen ] ${job.name} (${job.size})`);
  const t0 = Date.now();
  const response = await zai.images.generations.create({
    prompt: job.prompt,
    size: job.size,
  });

  const base64 = response.data?.[0]?.base64;
  if (!base64) throw new Error(`No image returned for ${job.name}`);

  const buffer = Buffer.from(base64, "base64");
  await sharp(buffer).webp({ quality: 82 }).toFile(outWebp);
  console.log(`[done] ${job.name}.webp in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
}

async function main() {
  await ensureDir(OUT_DIR);
  const zai = await ZAI.create();
  for (const job of jobs) {
    try {
      await generateOne(zai, job);
    } catch (err) {
      console.error(`[fail] ${job.name}:`, (err as Error).message);
    }
  }
  console.log("All image jobs complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
