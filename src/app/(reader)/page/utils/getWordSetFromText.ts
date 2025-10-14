export default function getWordSetFromText(text: string, minLength = 2) {
  const normalize = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .split(/\s+/)
      .filter((w) => w.length >= minLength);
  const sourceWords = new Set(normalize(text));
  return sourceWords;
}
