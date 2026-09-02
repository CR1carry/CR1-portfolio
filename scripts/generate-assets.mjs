import { execFile } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import ffmpegPath from "ffmpeg-static";
import sharp from "sharp";

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");

async function writeSvg(filename, svg) {
  const output = path.join(publicDir, filename);
  await sharp(Buffer.from(svg)).png().toFile(output);
  console.log(`created ${filename}`);
  return output;
}

const heroPosterSvg = `
<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="72%" cy="26%" r="105%">
      <stop offset="0" stop-color="#2b2018"/>
      <stop offset="0.42" stop-color="#1a1512"/>
      <stop offset="1" stop-color="#0d0b09"/>
    </radialGradient>
    <linearGradient id="amber" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#d9803f"/>
      <stop offset="0.5" stop-color="#e9a75f"/>
      <stop offset="1" stop-color="#7c4a2b"/>
    </linearGradient>
    <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e9a75f" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#e9a75f" stop-opacity="0.42"/>
      <stop offset="1" stop-color="#e9a75f" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="sage" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#8fa397" stop-opacity="0"/>
      <stop offset="1" stop-color="#8fa397" stop-opacity="0.35"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#bg)"/>
  <g opacity="0.22" stroke="#3b2d22" stroke-width="1">
    <path d="M0 170 H1920"/>
    <path d="M0 340 H1920"/>
    <path d="M0 510 H1920"/>
    <path d="M0 680 H1920"/>
    <path d="M0 850 H1920"/>
    <path d="M240 0 V1080"/>
    <path d="M480 0 V1080"/>
    <path d="M720 0 V1080"/>
    <path d="M960 0 V1080"/>
    <path d="M1200 0 V1080"/>
    <path d="M1440 0 V1080"/>
    <path d="M1680 0 V1080"/>
  </g>
  <path d="M0 780 C480 660 850 880 1920 560" fill="none" stroke="url(#sage)" stroke-width="1.4" opacity="0.8"/>
  <path d="M0 850 C520 780 940 940 1920 690" fill="none" stroke="url(#amber)" stroke-width="1.2" opacity="0.85"/>
  <path d="M0 920 C500 870 1020 1010 1920 780" fill="none" stroke="#5b3b28" stroke-width="1" opacity="0.8"/>
  <rect x="1180" y="0" width="1" height="1080" fill="url(#beam)"/>
  <path d="M1180 170 L1290 170 M1180 340 L1270 340 M1180 510 L1310 510 M1180 680 L1260 680 M1180 850 L1290 850" stroke="#e9a75f" stroke-width="2" opacity="0.75"/>
  <g fill="#e9a75f">
    <circle cx="1180" cy="170" r="3"/>
    <circle cx="1180" cy="340" r="3"/>
    <circle cx="1180" cy="510" r="3"/>
    <circle cx="1180" cy="680" r="3"/>
    <circle cx="1180" cy="850" r="3"/>
  </g>
  <rect x="0" y="0" width="1920" height="1080" fill="#0d0b09" opacity="0.08"/>
</svg>`;

const avatarSvg = `
<svg width="960" height="1200" viewBox="0 0 960 1200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2a211a"/>
      <stop offset="1" stop-color="#0d0b09"/>
    </linearGradient>
    <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#e9a75f"/>
      <stop offset="1" stop-color="#8fa397"/>
    </linearGradient>
    <radialGradient id="warm" cx="50%" cy="40%" r="70%">
      <stop offset="0" stop-color="#3a2a1e"/>
      <stop offset="1" stop-color="#1c1612"/>
    </radialGradient>
  </defs>
  <rect width="960" height="1200" fill="url(#bg)"/>
  <g opacity="0.18" stroke="#3b2d22" stroke-width="1">
    <path d="M0 200 H960 M0 400 H960 M0 600 H960 M0 800 H960 M0 1000 H960"/>
    <path d="M160 0 V1200 M320 0 V1200 M480 0 V1200 M640 0 V1200 M800 0 V1200"/>
  </g>
  <ellipse cx="480" cy="430" rx="218" ry="252" fill="url(#warm)"/>
  <path d="M96 1200 C108 866 272 758 480 758 C688 758 852 866 864 1200 Z" fill="#1b1511"/>
  <path d="M480 178 C357 178 262 288 262 430 C262 566 349 676 462 684 C443 655 433 621 433 585 C433 561 455 544 480 544 C505 544 527 561 527 585 C527 621 517 655 498 684 C611 676 698 566 698 430 C698 288 603 178 480 178 Z" fill="#e9a75f" opacity="0.12"/>
  <ellipse cx="480" cy="430" rx="218" ry="252" fill="none" stroke="url(#rim)" stroke-width="1.5" opacity="0.65"/>
  <path d="M262 430 C262 310 356 210 480 210" fill="none" stroke="#e9a75f" stroke-width="6" opacity="0.7"/>
  <circle cx="480" cy="430" r="292" fill="none" stroke="#3b2d22" stroke-width="1"/>
  <circle cx="480" cy="430" r="316" fill="none" stroke="#8fa397" stroke-width="1" opacity="0.32"/>
  <path d="M188 884 H772" stroke="#3b2d22" stroke-width="1"/>
  <rect x="0" y="0" width="960" height="1200" fill="#0d0b09" opacity="0.08"/>
</svg>`;

function projectSvg({ background, secondary, accent, type }) {
  const lines =
    type === "campus"
      ? `<g stroke="${secondary}" stroke-width="1" opacity="0.25">
          <path d="M0 240 H1600 M0 400 H1600 M0 560 H1600 M0 720 H1600 M0 880 H1600"/>
          <path d="M200 0 V1000 M420 0 V1000 M640 0 V1000 M860 0 V1000 M1080 0 V1000 M1300 0 V1000 M1520 0 V1000"/>
        </g>
        <g fill="none" stroke="${accent}" stroke-width="2" opacity="0.8">
          <path d="M280 820 V520 H760 V330"/>
          <path d="M760 330 H1080 V560"/>
        </g>
        <rect x="280" y="700" width="480" height="120" fill="${accent}" opacity="0.14"/>`
      : type === "chaoyang"
        ? `<g fill="none" stroke="${secondary}" stroke-width="1.5" opacity="0.3">
            <path d="M80 480 C280 220 560 680 760 400 C940 150 1180 560 1520 420"/>
            <path d="M80 620 C300 360 580 820 800 540 C980 310 1220 700 1520 560"/>
            <path d="M80 760 C320 520 620 960 860 680 C1040 470 1260 820 1520 700"/>
          </g>
          <circle cx="760" cy="400" r="104" fill="none" stroke="${accent}" stroke-width="2" opacity="0.8"/>
          <circle cx="760" cy="400" r="56" fill="${accent}" opacity="0.12"/>
          <path d="M760 0 V1000" stroke="${accent}" stroke-width="1" opacity="0.35"/>`
        : `<g fill="none" stroke="${secondary}" stroke-width="1" opacity="0.25">
            <path d="M0 160 H1600 M0 320 H1600 M0 480 H1600 M0 640 H1600 M0 800 H1600"/>
            <path d="M160 0 V1000 M320 0 V1000 M480 0 V1000 M640 0 V1000 M800 0 V1000 M960 0 V1000 M1120 0 V1000 M1280 0 V1000 M1440 0 V1000"/>
          </g>
          <path d="M0 500 C180 260 320 700 520 500 C720 300 860 700 1080 500 C1300 300 1420 680 1600 500" fill="none" stroke="${accent}" stroke-width="2" opacity="0.82"/>
          <path d="M0 560 C180 330 320 740 520 560 C720 380 860 740 1080 560 C1300 380 1420 720 1600 560" fill="none" stroke="${accent}" stroke-width="1" opacity="0.42"/>`;

  return `
  <svg width="1600" height="1000" viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${background}"/>
        <stop offset="1" stop-color="#0e0c0a"/>
      </linearGradient>
      <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${accent}" stop-opacity="0.22"/>
        <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="1600" height="1000" fill="url(#bg)"/>
    <rect x="920" y="0" width="680" height="1000" fill="url(#glow)"/>
    ${lines}
    <rect x="0" y="0" width="1600" height="1000" fill="#0d0b09" opacity="0.06"/>
  </svg>`;
}

const poster = await writeSvg("hero-poster.png", heroPosterSvg);
await writeSvg("avatar.png", avatarSvg);
await writeSvg(
  "project-campus.png",
  projectSvg({
    background: "#2a211a",
    secondary: "#3b2d22",
    accent: "#e9a75f",
    type: "campus",
  }),
);
await writeSvg(
  "project-chaoyang.png",
  projectSvg({
    background: "#1f2621",
    secondary: "#8fa397",
    accent: "#d9803f",
    type: "chaoyang",
  }),
);
await writeSvg(
  "project-music.png",
  projectSvg({
    background: "#262019",
    secondary: "#3b2d22",
    accent: "#d9803f",
    type: "music",
  }),
);

const videoOutput = path.join(publicDir, "hero.mp4");
const zoomFilter =
  "scale=2880:1620,zoompan=z='min(zoom+0.0009,1.18)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=240:s=1920x1080:fps=30,format=yuv420p";

try {
  await execFileAsync(ffmpegPath, [
    "-y",
    "-loop",
    "1",
    "-i",
    poster,
    "-vf",
    zoomFilter,
    "-t",
    "8",
    "-an",
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    "22",
    "-movflags",
    "+faststart",
    videoOutput,
  ]);
  console.log("created hero.mp4");
} catch (error) {
  console.error("Failed to create hero.mp4", error);
  process.exitCode = 1;
}
