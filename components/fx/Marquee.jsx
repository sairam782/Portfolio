// An endless row. Pure CSS: the list is rendered twice and slides by half its width.
// renderItem receives (item, hidden) so the duplicate copy can be kept out of the tab order.
export default function Marquee({ items, renderItem = (item) => item, reverse = false, speed = 48, className = "" }) {
  const row = (hidden) => (
    <ul aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={i}>{renderItem(item, hidden)}</li>
      ))}
    </ul>
  );
  return (
    <div className={`marquee ${reverse ? "marquee--reverse" : ""} ${className}`} style={{ "--speed": `${speed}s` }}>
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
