export default function StageButton({ name, className = "", ...props }) {
  let cssClasses = `stage-button ${className}`;
  return (
    <button className={cssClasses} {...props}>
      {name}
    </button>
  );
}
