import styles from "../styles/browserVisual.module.css";

export default function BrowserVisual(props) {
  let width;
  let height;
  let ratio = 16 / 9;
  // If width and height are provided, use them.
  if (props.width && props.height) {
    width = props.width;
    height = props.height;
  }
  //if only one dimension is provided, calculate the other based on the ratio.
  else {
    props.ratio ? (ratio = props.ratio) : ratio;
    props.width ? (width = props.width) : (width = props.height * ratio);
    props.height ? (height = props.height) : (height = width / ratio);
  }
  return (
    <div
      style={{ width: `${width}em`, height: `${height}em` }}
      className={styles.outerSquare}
    >
      <div
        style={{ width: `${width - 1.5}em`, height: `${height - 1.5}em` }}
        className={styles.innerSquare}
      >
        <div className=""></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
