import { useState, type ComponentType, type CSSProperties } from "react";

export function withHover<P extends object>(Wrapped: ComponentType<P>) {
  return function WithHover(props: P) {
    const [hover, setHover] = useState(false);

    const wrapperStyle: CSSProperties = {
      opacity: hover ? 0.5 : 1,
      transform: hover ? "scale(1.05)" : "scale(1)",
      width: "max-content",
      display: "inline-block",
    };

    return (
      <div
        style={wrapperStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Wrapped {...props} />
      </div>
    );
  };
}
