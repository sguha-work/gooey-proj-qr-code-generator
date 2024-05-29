
import { useLayoutEffect } from "react";
import { SERVER_URL } from "../../constants/common.constant";
import QrPromptFormComponent from "./qr-prompt-form.component";
import { Subject_Generate_QR$ } from "../../subjects/generate-qr.behavior-subject";
export default function Drag() {
  useLayoutEffect(()=>{
    
  },[])
  return (
    <div>
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
        {/* <p className="text-lg text-gray-700">
          Fix dark, blurry, and oversaturated photos with our free online image
          enhancer. Instantly improve image quality using AI for easy download
          or sharing on social media apps.
        </p> */}
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

            <div className="px-4 md:w-6/12 w-full">
              <div className="border border-slate-300 rounded-lg">
                <div className="py-3 px-5 rounded-t-lg bg-slate-100">
                  {/* {selectedFile && (
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Uploaded Image"
                      className="w-18px h-18px"
                    />
                  )} */}
                  {/* <img src={leftAndRightImageURL.image2} alt="result" /> */}
                  <h3 className="mb-1 text-lg font-semibold leading-none">
                    User
                  </h3>
                  <p className="leading-none">
                    What makes your company special?
                  </p>
                </div>
                <div className="p-5">
                  <p>
                    <strong>Assistant</strong>
                  </p>
                  <p>
                    IoTReady specializes in providing paperless warehouse
                    management solutions that help reduce wastage, optimize
                    operations, and add 2-3% to a company's bottom line. Our
                    solutions are designed to be integrated hardware+software
                    systems that focus on reliability and ease of integration,
                    allowing our customers to focus on ensuring the quality of
                    their products and services at scale. Our team has a track
                    record of delivering scalable solutions that become industry
                    standards. Our customers include fast-growing startups,
                    carefully-nurtured owner-run SMEs, and publicly traded
                    behemoths. We offer solutions for procurement, centralized
                    label management, fulfilment audits, inventory audits, and
                    crate loss prevention. Our customers can reach out to us
                    over email on hello@iotready.co or call us on +91 80503
                    73299.
                  </p>

                  <div className="py-4">
                    <hr />
                  </div>

                  <div className="flex items-center mb-4">
                    <input
                      id="output"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                    />
                    <label
                      htmlFor="output"
                      className="ms-2 text-sm font-medium text-gray-900"
                    >
                      Show Raw Output
                    </label>
                  </div>
                </div>

                <div className="p-5 rounded-b-lg bg-slate-100">
                  <div className="flex rounded-lg gap-2">
                    <span className="px-4 inline-flex items-center min-w-fit rounded-md border border-slate-300 bg-gray-50 text-sm text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-slate-500"
                      >
                        <path d="M13 19v-4h3l-4-5-4 5h3v4z"></path>
                        <path d="M7 19h2v-2H7c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.756 2.673-3.015l.581-.102.192-.558C8.149 8.274 9.895 7 12 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-3v2h3c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5z"></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      className="py-3 px-4 pe-11 block w-full border border-slate-300 rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                      placeholder="Send a message"
                    />
                    <button
                      type="button"
                      className="px-4 inline-flex items-center min-w-fit rounded-md border border-slate-300 bg-gray-50 text-sm text-gray-500"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
