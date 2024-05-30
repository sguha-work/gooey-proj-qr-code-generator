
import { useLayoutEffect, useState } from "react";
import { SERVER_URL } from "../../constants/common.constant";
import QrPromptFormComponent from "./qr-prompt-form.component";
import "./drag.component.css";

import OutputComponent from "./output.component";
import { Subject_ReGenerate_QR$ } from "../../subjects/generate-qr.behavior-subject";
export default function Drag({ output }) {
  const [image, setImage] = useState("");
  useLayoutEffect(() => {
    output && output.output && output.output.output_images && output.output.output_images[0] && setImage(output.output.output_images[0]);
  }, [output])
  const regenarateImage = () => {
    Subject_ReGenerate_QR$.next(true);
  }
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" href="https://gooey.ai/build/_assets/index-DZ2N4QTU.css"></link>
      <link rel="stylesheet" href="https://gooey.ai/build/_assets/style.min-7XPQOGEF.css"></link>
      <link rel="stylesheet" href="https://gooey.ai/build/_assets/style.min-43SR3MHG.css"></link>
      <link rel="stylesheet" href="https://gooey.ai/build/_assets/style.min-IRAFQ6Z6.css"></link>
      <link rel="stylesheet" href="https://gooey.ai/build/_assets/style.min-XD6ADWGG.css"></link>
      <link rel="stylesheet" href="https://gooey.ai/build/_assets/custom-CADXOFAJ.css"></link>
      <link rel="stylesheet" href="https://gooey.ai/build/_assets/app-XK2ME3ZK.css"></link>

      <div className="max-w-[1070px] mx-auto text-center">
        <div className="max-w-[730px] mx-auto text-center">
          <h3 className="lg:text-[45px] text-3xl leading-tight font-semibold">
            AI QR code Generator:
            <br />

          </h3>
        </div>
        <br />
      </div>
      <div className="max-w-[1192px] mx-auto mt-10 relative">
        <img
          alt="Dots"
          className="absolute -top-5 -left-10 opacity-30"
          src="assets/images/dots.svg"
        />
        <div className="p-10 w-full rounded-3xl cursor-pointer bg-white shadow-[0px_100px_60px_-70px_rgba(19,15,48,0.1) relative">
          <div className="-mx-4 flex flex-wrap relative">
            <QrPromptFormComponent></QrPromptFormComponent>
            <OutputComponent image={image} regenarateImage={regenarateImage}></OutputComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
