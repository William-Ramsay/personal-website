"use client";
import styles from "../styles/browserVisual.module.css";
import Shape from "./shape";
import moveObject from "../custom_modules/moveObject";

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

  let orbSize = Math.sqrt(width) / 7;
  let border = Math.sqrt(width) / 5;

  return (
    <div
      style={{ width: `${width}rem`, height: `${height}rem` }}
      className={styles.outerSquare}
    >
      <div
        style={{
          width: `${width - border}rem`,
          height: `${height - border}rem`,
        }}
        className={styles.innerSquare}
      >
        {props.text ? (
          <h1 className="col-start-2 self-center justify-self-center absolute">
            {props.text}
          </h1>
        ) : null}
        <div className="flex absolute justify-self-end space-x-2 sm-max:space-x-1">
          <Shape width={orbSize} height={orbSize} shape={"circle"}></Shape>
          <Shape
            width={orbSize}
            height={orbSize}
            bg={"black"}
            shape={"circle"}
          ></Shape>
          <Shape
            width={orbSize}
            height={orbSize}
            bg={"purple"}
            shape={"circle"}
          ></Shape>
        </div>
      </div>
    </div>
  );
}
