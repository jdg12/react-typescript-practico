import { type ComponentType, type CSSProperties } from "react";

export function withBorder<P extends object>(Wrapped: ComponentType<P>) {
  return function WithBorder(props: P) {
    const style: CSSProperties = {
      border: "2px solid red",
      padding: "4px",
      width: "max-content",
      display: "inline-block",
    };

    return (
      <div style={style}>
        <Wrapped {...props} />
      </div>
    );
  };
}
