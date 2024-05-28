"use client";
import BrowserVisual from "./components/browserVisual";

const bWidth = 32;

export default function Page() {
  return (
    <div className="flex gap-5 max-sm:flex-col lg:mt-20">
      <BrowserVisual width={bWidth} />
      <BrowserVisual
        width={bWidth}
        text={"William Ramsay - Personal Website"}
      />
      <BrowserVisual
        width={bWidth}
        text={"Computer Science + Business Administration"}
      />
    </div>
  );
}
