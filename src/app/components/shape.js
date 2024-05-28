export default function Shape(props) {
  const w = props.width;
  const h = props.height;
  const bg = props.bg;
  const shape = props.shape;

  return (
    <div
      style={{
        borderRadius: shape == "circle" ? "100%" : null,
        width: `${w}em`,
        height: `${h}em`,
        backgroundColor: `${bg}`,
      }}
    ></div>
  );
}
