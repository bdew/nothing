const LETTERS = (
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  + "1234567890!@#$%^&*()-_=+[]{}|;:,.<>?/`~¡™£¢∞§¶•ªº–≠œ∑´®†¥¨ˆøπ“‘åß∂ƒ©˙∆˚¬Ω≈ç√∫˜µ≤≥÷"
  + "ᔑʖᓵ↸ᒷ⎓⊣⍑╎⋮ꖌꖎᒲ!¡ᑑ∷ᓭℸ ̣ ⚍⍊∴ ̇/||⨅"
  + "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん一二三四五六七八九十零"
  + "אבגדהוזחטיכלמנסעפצקרשת"
).split("");

const FONT_STEP_X = 20;
const FONT_STEP_Y = 22;
const FONT_SIZE = 32;
const FONT_COLOR = "#F08";

export function run_bg_canvas(): void {
  const canvas = document.querySelector<HTMLCanvasElement>("#bgcanvas");
  const ctx = canvas?.getContext("2d");

  if (!ctx || !canvas) {
    console.error("Failed to init canvas");
    return;
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const columns = canvas.width / FONT_STEP_X;

  const drops = new Array<number>();
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * 100;
  }

  function draw(): void {
    if (!ctx) return;
    ctx.font = `bold ${FONT_SIZE}px monospace`;
    ctx.fillStyle = "rgba(0, 0, 0, .05)";
    ctx.fillRect(0, 0, canvas!.width, canvas!.height);
    ctx.fillStyle = FONT_COLOR;
    for (let i = 0; i < drops.length; i++) {
      if (Math.random() > 0.5) continue;
      const text = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      ctx.fillText(text, i * FONT_STEP_X, drops[i] * FONT_STEP_Y);
      drops[i] += 1;
      if (drops[i] * FONT_STEP_Y > canvas!.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
    }
  }

  setInterval(draw, 33);
}
