// A pipeline shown as ordered stages. A pulse of light travels down the stages in order.
export default function Flow({ stages, label }) {
  return (
    <ol className="flow" aria-label={label} style={{ "--n": stages.length }}>
      {stages.map((stage, i) => (
        <li key={stage} style={{ "--i": i }}>
          <span className="flow-num tnum" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="flow-name">{stage}</span>
        </li>
      ))}
    </ol>
  );
}
