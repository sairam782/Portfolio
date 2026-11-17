// Each route fades and rises in. A template re-mounts on navigation, so this runs per page.
// The animation is plain CSS, so the first screen never waits for JavaScript.
export default function Template({ children }) {
  return <div className="page-in">{children}</div>;
}
