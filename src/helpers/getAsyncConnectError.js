export default function (mounted, key) {
  const entry = mounted.loadState[key];

  return entry && entry.error || null;
}
