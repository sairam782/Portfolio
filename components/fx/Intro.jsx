// Entrance animation for content at the top of a page. It runs in CSS, so the
// first screen appears as soon as the page paints and never waits for JavaScript.
// Content further down the page uses Reveal, which waits until it scrolls into view.

export function Intro({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  return (
    <Tag className={`intro ${className}`} style={{ "--d": `${delay}s` }} {...rest}>
      {children}
    </Tag>
  );
}

// A line of text that arrives one word at a time. Screen readers get the plain text.
export function IntroWords({ text, delay = 0, stagger = 0.06, className = "" }) {
  const words = text.split(" ");
  return (
    <span className={`words ${className}`}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span className="word" aria-hidden="true" key={`${word}-${i}`}>
          <span className="intro intro--word" style={{ "--d": `${delay + i * stagger}s` }}>
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

// A whole line that arrives as one piece. Used for gradient text, where the
// gradient has to span the full line rather than restart on each word.
export function IntroLine({ text, delay = 0, className = "" }) {
  return (
    <span className={`intro intro--word line ${className}`} style={{ "--d": `${delay}s` }}>
      {text}
    </span>
  );
}
