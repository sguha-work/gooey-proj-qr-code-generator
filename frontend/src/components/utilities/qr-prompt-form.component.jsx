import React, { useRef, useState } from 'react'
import { Subject_Generate_QR$ } from '../../subjects/generate-qr.behavior-subject';
function QrPromptFormComponent() {
    const promptTextAreaDOM = useRef(null);
    const qrCodeDataDOM = useRef(null);
    const [type, setType] = useState(1);
    const submitPrompt = ()=>{
        const promptText = promptTextAreaDOM.current.value;
        const qrCodeData = qrCodeDataDOM.current.value;
        switch(type) {
            case 1:
                Subject_Generate_QR$.next({
                    "qr_code_data": qrCodeData,
                    "text_prompt": promptText
                });
                break;
        }
    }
    return (
        <div className="px-4 md:w-6/12 w-full">
            <div className="col-lg-7 col-12">
                <div className="gui-input gui-input-textarea">
                    <label>
                        <span className="gui-html-container gui-md-container">
                            <h4>👩‍💻 Prompt</h4>
                            <p>
                                Describe the subject/scene of the QR Code.
                                <br />
                                Choose clear prompts and distinguishable visuals to ensure optimal
                                readability.
                            </p>
                        </span>
                    </label>
                    <div>
                        <textarea
                            ref={promptTextAreaDOM}
                            name="text_prompt"
                            placeholder="Bright sunshine coming through the cracks of a wet, cave wall of big rocks"
                            style={{ maxHeight: "90vh" }}
                            rows={2}
                            defaultValue={
                                ""
                            }
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-theme btn-primary replicate-nav active"
                    value="yes"
                    name="tab-__qr_code_source-qr_code_data"
                >
                    <span className="gui-html-container gui-md-container">
                        <p>🔗 URL or Text</p>
                    </span>
                </button>
                <button
                    type="submit"
                    className="btn btn-theme btn-primary replicate-nav "
                    value="yes"
                    name="tab-__qr_code_source-qr_code_vcard"
                >
                    <span className="gui-html-container gui-md-container">
                        <p>📇 Contact Card</p>
                    </span>
                </button>
                <button
                    type="submit"
                    className="btn btn-theme btn-primary replicate-nav "
                    value="yes"
                    name="tab-__qr_code_source-qr_code_file"
                >
                    <span className="gui-html-container gui-md-container">
                        <p>📄 Upload File</p>
                    </span>
                </button>
                <button
                    type="submit"
                    className="btn btn-theme btn-primary replicate-nav "
                    value="yes"
                    name="tab-__qr_code_source-qr_code_input_image"
                >
                    <span className="gui-html-container gui-md-container">
                        <p>🏁 Existing QR Code</p>
                    </span>
                </button>
                <div className="gui-input gui-input-textarea">
                    <label>
                        <span className="gui-html-container gui-md-container">
                            <p>Enter your URL/Text below.</p>
                        </span>
                    </label>
                    <div>
                        <textarea
                            ref={qrCodeDataDOM}
                            name="qr_code_data"
                            placeholder="https://www.gooey.ai"
                            style={{ maxHeight: "90vh" }}
                            rows={2}
                            defaultValue={"https://gooey.ai/qr-code"}
                        />
                    </div>
                </div>
                <div className="gui-input gui-input-checkbox">
                    <input
                        type="checkbox"
                        id="input:use_url_shortener:undefined"
                        name="use_url_shortener"
                        defaultChecked=""
                    />
                    <label htmlFor="input:use_url_shortener:undefined">
                        <span className="gui-html-container gui-md-container">
                            <p>🔗 Shorten URL</p>
                        </span>
                    </label>
                </div>
                <span className="text-muted gui-html-container gui-md-container">
                    <p>
                        A shortened URL enables the QR code to be more beautiful and less
                        "QR-codey" with fewer blocky pixels.
                    </p>
                </span>
                <div className="gui-input">
                    <label>
                        <span className="gui-html-container gui-md-container">
                            <h4>
                                🏞️ Reference Image <em>[optional]</em>
                            </h4>
                            <p>This image will be used as inspiration to blend with the QR Code.</p>
                        </span>
                    </label>
                    <input hidden="" name="image_prompt" defaultValue='""' initdone="true" />
                    <div className="w-100 position-relative">
                        <div className="uppy-Container">
                            <div className="uppy-Root" dir="ltr">
                                <div
                                    className="uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-Dashboard--isInnerWrapVisible"
                                    data-uppy-theme="light"
                                    data-uppy-num-acquirers={2}
                                    data-uppy-drag-drop-supported="true"
                                    aria-hidden="false"
                                    aria-disabled="false"
                                    aria-label="Uppy Dashboard"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="uppy-Dashboard-overlay"
                                        tabIndex={-1}
                                    />
                                    <div
                                        className="uppy-Dashboard-inner"
                                        aria-modal="false"
                                        role="false"
                                        style={{ width: 576, height: 250 }}
                                    >
                                        <div className="uppy-Dashboard-innerWrap">
                                            <div className="uppy-Dashboard-dropFilesHereHint">
                                                Drop your files here
                                            </div>
                                            <div className="uppy-Dashboard-AddFiles">
                                                <input
                                                    className="uppy-Dashboard-input"
                                                    hidden=""
                                                    aria-hidden="true"
                                                    tabIndex={-1}
                                                    type="file"
                                                    name="files[]"
                                                    accept="image/*,url/undefined"
                                                />
                                                <input
                                                    className="uppy-Dashboard-input"
                                                    hidden=""
                                                    aria-hidden="true"
                                                    tabIndex={-1}
                                                    webkitdirectory=""
                                                    type="file"
                                                    name="files[]"
                                                    accept="image/*,url/undefined"
                                                />
                                                <div className="uppy-Dashboard-AddFiles-title">
                                                    Drop files here,{" "}
                                                    <button
                                                        type="button"
                                                        className="uppy-u-reset uppy-c-btn uppy-Dashboard-browse"
                                                        data-uppy-super-focusable="false"
                                                    >
                                                        browse files
                                                    </button>{" "}
                                                    or import from:
                                                </div>
                                                <div className="uppy-Dashboard-AddFiles-list" role="tablist">
                                                    <div
                                                        className="uppy-DashboardTab"
                                                        role="presentation"
                                                        data-uppy-acquirer-id="MyDevice"
                                                    >
                                                        <button
                                                            type="button"
                                                            className="uppy-u-reset uppy-c-btn uppy-DashboardTab-btn"
                                                            role="tab"
                                                            tabIndex={0}
                                                            data-uppy-super-focusable="true"
                                                        >
                                                            <div className="uppy-DashboardTab-inner">
                                                                <svg
                                                                    className="uppy-DashboardTab-iconMyDevice"
                                                                    aria-hidden="true"
                                                                    focusable="false"
                                                                    width={32}
                                                                    height={32}
                                                                    viewBox="0 0 32 32"
                                                                >
                                                                    <path
                                                                        d="M8.45 22.087l-1.305-6.674h17.678l-1.572 6.674H8.45zm4.975-12.412l1.083 1.765a.823.823 0 00.715.386h7.951V13.5H8.587V9.675h4.838zM26.043 13.5h-1.195v-2.598c0-.463-.336-.75-.798-.75h-8.356l-1.082-1.766A.823.823 0 0013.897 8H7.728c-.462 0-.815.256-.815.718V13.5h-.956a.97.97 0 00-.746.37.972.972 0 00-.19.81l1.724 8.565c.095.44.484.755.933.755H24c.44 0 .824-.3.929-.727l2.043-8.568a.972.972 0 00-.176-.825.967.967 0 00-.753-.38z"
                                                                        fill="currentcolor"
                                                                        fillRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div className="uppy-DashboardTab-name">My Device</div>
                                                        </button>
                                                    </div>
                                                    <span role="presentation" style={{ whiteSpace: "nowrap" }}>
                                                        <div
                                                            className="uppy-DashboardTab"
                                                            role="presentation"
                                                            data-uppy-acquirer-id="Url"
                                                        >
                                                            <button
                                                                type="button"
                                                                className="uppy-u-reset uppy-c-btn uppy-DashboardTab-btn"
                                                                role="tab"
                                                                tabIndex={0}
                                                                data-cy="Url"
                                                                aria-controls="uppy-DashboardContent-panel--Url"
                                                                aria-selected="false"
                                                                data-uppy-super-focusable="true"
                                                            >
                                                                <div className="uppy-DashboardTab-inner">
                                                                    <svg
                                                                        aria-hidden="true"
                                                                        focusable="false"
                                                                        width={32}
                                                                        height={32}
                                                                        viewBox="0 0 32 32"
                                                                    >
                                                                        <path
                                                                            d="M23.637 15.312l-2.474 2.464a3.582 3.582 0 01-.577.491c-.907.657-1.897.986-2.968.986a4.925 4.925 0 01-3.959-1.971c-.248-.329-.164-.902.165-1.149.33-.247.907-.164 1.155.164 1.072 1.478 3.133 1.724 4.618.656a.642.642 0 00.33-.328l2.473-2.463c1.238-1.313 1.238-3.366-.082-4.597a3.348 3.348 0 00-4.618 0l-1.402 1.395a.799.799 0 01-1.154 0 .79.79 0 010-1.15l1.402-1.394a4.843 4.843 0 016.843 0c2.062 1.805 2.144 5.007.248 6.896zm-8.081 5.664l-1.402 1.395a3.348 3.348 0 01-4.618 0c-1.319-1.23-1.319-3.365-.082-4.596l2.475-2.464.328-.328c.743-.492 1.567-.739 2.475-.657.906.165 1.648.574 2.143 1.314.248.329.825.411 1.155.165.33-.248.412-.822.165-1.15-.825-1.068-1.98-1.724-3.216-1.888-1.238-.247-2.556.082-3.628.902l-.495.493-2.474 2.464c-1.897 1.969-1.814 5.09.083 6.977.99.904 2.226 1.396 3.463 1.396s2.473-.492 3.463-1.395l1.402-1.396a.79.79 0 000-1.15c-.33-.328-.908-.41-1.237-.082z"
                                                                            fill="#FF753E"
                                                                            fillRule="nonzero"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <div className="uppy-DashboardTab-name">Link</div>
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="uppy-DashboardTab"
                                                            role="presentation"
                                                            data-uppy-acquirer-id="Webcam"
                                                        >
                                                            <button
                                                                type="button"
                                                                className="uppy-u-reset uppy-c-btn uppy-DashboardTab-btn"
                                                                role="tab"
                                                                tabIndex={0}
                                                                data-cy="Webcam"
                                                                aria-controls="uppy-DashboardContent-panel--Webcam"
                                                                aria-selected="false"
                                                                data-uppy-super-focusable="true"
                                                            >
                                                                <div className="uppy-DashboardTab-inner">
                                                                    <svg
                                                                        aria-hidden="true"
                                                                        focusable="false"
                                                                        width={32}
                                                                        height={32}
                                                                        viewBox="0 0 32 32"
                                                                    >
                                                                        <path
                                                                            d="M23.5 9.5c1.417 0 2.5 1.083 2.5 2.5v9.167c0 1.416-1.083 2.5-2.5 2.5h-15c-1.417 0-2.5-1.084-2.5-2.5V12c0-1.417 1.083-2.5 2.5-2.5h2.917l1.416-2.167C13 7.167 13.25 7 13.5 7h5c.25 0 .5.167.667.333L20.583 9.5H23.5zM16 11.417a4.706 4.706 0 00-4.75 4.75 4.704 4.704 0 004.75 4.75 4.703 4.703 0 004.75-4.75c0-2.663-2.09-4.75-4.75-4.75zm0 7.825c-1.744 0-3.076-1.332-3.076-3.074 0-1.745 1.333-3.077 3.076-3.077 1.744 0 3.074 1.333 3.074 3.076s-1.33 3.075-3.074 3.075z"
                                                                            fill="#02B383"
                                                                            fillrule="nonzero"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <div className="uppy-DashboardTab-name">Camera</div>
                                                            </button>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="uppy-Dashboard-AddFiles-info">
                                                    <a
                                                        tabIndex={-1}
                                                        href="https://uppy.io"
                                                        rel="noreferrer noopener"
                                                        target="_blank"
                                                        className="uppy-Dashboard-poweredBy"
                                                    >
                                                        Powered by{" "}
                                                        <span>
                                                            <svg
                                                                aria-hidden="true"
                                                                focusable="false"
                                                                className="uppy-c-icon uppy-Dashboard-poweredByIcon"
                                                                width={11}
                                                                height={11}
                                                                viewBox="0 0 11 11"
                                                            >
                                                                <path
                                                                    d="M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z"
                                                                    fillrule="evenodd"
                                                                />
                                                            </svg>
                                                            <span className="uppy-Dashboard-poweredByUppy">
                                                                Uppy
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="uppy-Dashboard-progressindicators">
                                                <div className="uppy-StatusBar is-waiting" aria-hidden="true">
                                                    <div
                                                        className="uppy-StatusBar-progress"
                                                        role="progressbar"
                                                        aria-label="0%"
                                                        aria-valuetext="0%"
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                        aria-valuenow={0}
                                                        style={{ width: "0%" }}
                                                    />
                                                    <div className="uppy-StatusBar-actions" />
                                                </div>
                                                <div className="uppy uppy-Informer">
                                                    <span />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gui-expander accordion">
                    <input hidden="" name="gui-expander-⚙️ Settings" />
                    <div className="gui-expander-header accordion-header accordion-button collapsed">
                        <span className="gui-html-container gui-md-container">
                            <p>⚙️ Settings</p>
                        </span>
                    </div>
                    <div className="gui-expander-body" style={{ display: "none" }}>
                        <span className=" gui-html-container gui-md-container">
                            <p>
                                Customize the QR Code output for your text prompt with these Settings.
                            </p>
                        </span>
                        <span className=" gui-html-container gui-md-container">
                            <h4>Image Generation Settings</h4>
                        </span>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="gui-input gui-input-select">
                                    <label htmlFor="selected_model">
                                        <span className="gui-html-container gui-md-container">
                                            <h4>🤖 Choose your preferred AI Model</h4>
                                        </span>
                                    </label>
                                    <input hidden="" name="selected_model" />
                                    <div className=" css-b62m3t-container">
                                        <span
                                            id="react-select-6035-live-region"
                                            className="css-7pg0cj-a11yText"
                                        />
                                        <span
                                            aria-live="polite"
                                            aria-atomic="false"
                                            aria-relevant="additions text"
                                            className="css-7pg0cj-a11yText"
                                        />
                                        <div className=" css-13cymwt-control">
                                            <div className=" css-hlgwow">
                                                <div className=" css-1dimb5e-singleValue">
                                                    <span className="container-margin-reset">
                                                        <p>DreamShaper (Lykon)</p>
                                                    </span>
                                                </div>
                                                <div className=" css-19bb58m" data-value="">
                                                    <input
                                                        type="text"
                                                        className=""
                                                        style={{
                                                            label: "input",
                                                            color: "inherit",
                                                            background: 0,
                                                            opacity: 1,
                                                            width: "100%",
                                                            gridArea: "1 / 2",
                                                            font: "inherit",
                                                            minWidth: 2,
                                                            border: 0,
                                                            margin: 0,
                                                            outline: 0,
                                                            padding: 0
                                                        }}
                                                        autoCapitalize="none"
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        id="react-select-6035-input"
                                                        spellCheck="false"
                                                        tabIndex={0}
                                                        defaultValue=""
                                                        aria-autocomplete="list"
                                                        aria-expanded="false"
                                                        aria-haspopup="true"
                                                        role="combobox"
                                                    />
                                                </div>
                                            </div>
                                            <div className=" css-1wy0on6">
                                                <span className=" css-1u9des2-indicatorSeparator" />
                                                <div
                                                    className=" css-1xc3v61-indicatorContainer"
                                                    aria-hidden="true"
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        className="css-8mmkcg"
                                                    >
                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-muted gui-html-container gui-md-container">
                                    <p>
                                        Search for our available models{" "}
                                        <a href="https://huggingface.co/models?pipeline_tag=text-to-image">
                                            here
                                        </a>{" "}
                                        to learn more about them.
                                        <br />
                                        Please use our default settings for optimal results if you're a
                                        beginner.
                                    </p>
                                </span>
                                <div className="gui-input gui-input-select">
                                    <label htmlFor="selected_controlnet_model">
                                        <span className="gui-html-container gui-md-container">
                                            <h3>🎛️ Control Net</h3>
                                            <p>
                                                <a href="https://huggingface.co/lllyasviel?search=controlnet">
                                                    Control Net models
                                                </a>{" "}
                                                provide a layer of refinement to the image generation process
                                                that blends with the QR code. Choose your preferred models:{" "}
                                            </p>
                                        </span>
                                    </label>
                                    <input hidden="" name="selected_controlnet_model" />
                                    <div className=" css-b62m3t-container">
                                        <span
                                            id="react-select-6036-live-region"
                                            className="css-7pg0cj-a11yText"
                                        />
                                        <span
                                            aria-live="polite"
                                            aria-atomic="false"
                                            aria-relevant="additions text"
                                            className="css-7pg0cj-a11yText"
                                        />
                                        <div className=" css-13cymwt-control">
                                            <div className=" css-1dyz3mf">
                                                <div className=" css-1p3m7a8-multiValue">
                                                    <div className=" css-9jq23d">Tiling</div>
                                                    <div
                                                        role="button"
                                                        className=" css-v7duua"
                                                        aria-label="Remove Tiling"
                                                    >
                                                        <svg
                                                            height={14}
                                                            width={14}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            className="css-8mmkcg"
                                                        >
                                                            <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className=" css-1p3m7a8-multiValue">
                                                    <div className=" css-9jq23d">Brightness</div>
                                                    <div
                                                        role="button"
                                                        className=" css-v7duua"
                                                        aria-label="Remove Brightness"
                                                    >
                                                        <svg
                                                            height={14}
                                                            width={14}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            className="css-8mmkcg"
                                                        >
                                                            <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className=" css-19bb58m" data-value="">
                                                    <input
                                                        type="text"
                                                        className=""
                                                        style={{
                                                            label: "input",
                                                            color: "inherit",
                                                            background: 0,
                                                            opacity: 1,
                                                            width: "100%",
                                                            gridArea: "1 / 2",
                                                            font: "inherit",
                                                            minWidth: 2,
                                                            border: 0,
                                                            margin: 0,
                                                            outline: 0,
                                                            padding: 0
                                                        }}
                                                        autoCapitalize="none"
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        id="react-select-6036-input"
                                                        spellCheck="false"
                                                        tabIndex={0}
                                                        defaultValue=""
                                                        aria-autocomplete="list"
                                                        aria-expanded="false"
                                                        aria-haspopup="true"
                                                        role="combobox"
                                                    />
                                                </div>
                                            </div>
                                            <div className=" css-1wy0on6">
                                                <div
                                                    className=" css-1xc3v61-indicatorContainer"
                                                    aria-hidden="true"
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        className="css-8mmkcg"
                                                    >
                                                        <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" />
                                                    </svg>
                                                </div>
                                                <span className=" css-1u9des2-indicatorSeparator" />
                                                <div
                                                    className=" css-1xc3v61-indicatorContainer"
                                                    aria-hidden="true"
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        className="css-8mmkcg"
                                                    >
                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <span className="gui-input gui-html-container gui-md-container">
                                    <h5>⚖️ Conditioning Scales</h5>
                                </span>
                                <span className="text-muted gui-html-container gui-md-container">
                                    <p>
                                        <code>
                                            At 0 the prompted visual will be intact and the QR code will be
                                            more artistic but less readable
                                        </code>
                                        .
                                    </p>
                                    <p>
                                        <code>
                                            At 2 the control settings that blend the QR code will be applied
                                            tightly, possibly overriding the image prompt, but the QR code
                                            will be more readable
                                        </code>
                                        .
                                    </p>
                                </span>
                                <div className="gui-input gui-input-range">
                                    <label htmlFor="input:controlnet_conditioning_scale_sd_controlnet_brightness:undefined">
                                        <span className="flex-grow-1">
                                            <p>
                                                Brightness: Dictates how light the background of the QR Code
                                                will be. Contrast is desirable for readability.
                                            </p>
                                        </span>
                                    </label>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <input
                                            type="number"
                                            min={0}
                                            max={2}
                                            step="0.05"
                                            defaultValue="0.45"
                                        />
                                        <input
                                            type="range"
                                            id="input:controlnet_conditioning_scale_sd_controlnet_brightness:undefined"
                                            name="controlnet_conditioning_scale_sd_controlnet_brightness"
                                            min={0}
                                            max={2}
                                            step="0.05"
                                            defaultValue="0.45"
                                        />
                                    </div>
                                </div>
                                <div className="gui-input gui-input-range">
                                    <label htmlFor="input:controlnet_conditioning_scale_sd_controlnet_tile:undefined">
                                        <span className="flex-grow-1">
                                            <p>
                                                Tiling: Preserves more details of the QR Code, makes it more
                                                readable.
                                            </p>
                                        </span>
                                    </label>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <input
                                            type="number"
                                            min={0}
                                            max={2}
                                            step="0.05"
                                            defaultValue="0.35"
                                        />
                                        <input
                                            type="range"
                                            id="input:controlnet_conditioning_scale_sd_controlnet_tile:undefined"
                                            name="controlnet_conditioning_scale_sd_controlnet_tile"
                                            min={0}
                                            max={2}
                                            step="0.05"
                                            defaultValue="0.35"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gui-input gui-input-textarea">
                            <label>
                                <span className="gui-html-container gui-md-container">
                                    <h5>🧽 Negative Prompt</h5>
                                    <p>
                                        This allows you to specify what you DON'T want to see in your
                                        output.
                                        <br />
                                        Useful negative prompts can be found{" "}
                                        <a href="https://www.youtube.com/watch?v=cWZsizoAwT4">here</a>.
                                    </p>
                                </span>
                            </label>
                            <div>
                                <textarea
                                    name="negative_prompt"
                                    placeholder="ugly, disfigured, low quality, blurry, nsfw"
                                    style={{ maxHeight: "90vh" }}
                                    rows={2}
                                    defaultValue={
                                        "ugly, disfigured, low quality, blurry, nsfw, text, words"
                                    }
                                />
                            </div>
                        </div>
                        <span className="text-muted gui-html-container gui-md-container">
                            <p>
                                Image generation engines can often generate disproportionate body
                                parts, extra limbs or fingers, strange textures etc. Use negative
                                prompting to avoid disfiguration or for creative outputs like avoiding
                                certain colour schemes, elements or styles.
                            </p>
                        </span>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="gui-input gui-input-range">
                                    <label htmlFor="input:num_outputs:undefined">
                                        <span className="flex-grow-1">
                                            <h5>Number of Outputs</h5>
                                            <p>Change the number of outputs for a single run here:</p>
                                        </span>
                                    </label>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <input type="number" min={1} max={4} step={1} defaultValue={1} />
                                        <input
                                            type="range"
                                            id="input:num_outputs:undefined"
                                            name="num_outputs"
                                            min={1}
                                            max={4}
                                            step={1}
                                            defaultValue={1}
                                        />
                                    </div>
                                </div>
                                <span className="text-muted gui-html-container gui-md-container">
                                    <p>By default, each run produces one output per Model.</p>
                                </span>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="gui-input gui-input-range">
                                    <label htmlFor="input:quality:undefined">
                                        <span className="flex-grow-1">
                                            <h5>Quality</h5>
                                            <p>How precise, or focused do you want your output to be? </p>
                                        </span>
                                    </label>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <input
                                            type="number"
                                            min={10}
                                            max={200}
                                            step={10}
                                            defaultValue={70}
                                        />
                                        <input
                                            type="range"
                                            id="input:quality:undefined"
                                            name="quality"
                                            min={10}
                                            max={200}
                                            step={10}
                                            defaultValue={70}
                                        />
                                    </div>
                                </div>
                                <span className="text-muted gui-html-container gui-md-container">
                                    <p>
                                        An increase in output quality is comparable to a gradual
                                        progression in any drawing process that begins with a draft
                                        version and ends with a finished product.
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="gui-input gui-input-range">
                                    <label htmlFor="input:guidance_scale:undefined">
                                        <span className="flex-grow-1">
                                            <h5>🎨️ Artistic Pressure</h5>
                                            <p>
                                                (
                                                <a href="https://getimg.ai/guides/interactive-guide-to-stable-diffusion-guidance-scale-parameter">
                                                    <em>Text Guidance Scale</em>
                                                </a>
                                                ) <br />
                                                How pressurized should the AI feel to produce what you want?
                                                <br />
                                                How much creative freedom do you want the AI to have when
                                                interpreting your prompt?
                                            </p>
                                        </span>
                                    </label>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <input
                                            type="number"
                                            min={0}
                                            max={25}
                                            step="0.5"
                                            defaultValue={9}
                                        />
                                        <input
                                            type="range"
                                            id="input:guidance_scale:undefined"
                                            name="guidance_scale"
                                            min={0}
                                            max={25}
                                            step="0.5"
                                            defaultValue={9}
                                        />
                                    </div>
                                </div>
                                <span className="text-muted gui-html-container gui-md-container">
                                    <p>
                                        At lower values the image will effectively be random. The standard
                                        value is between 6-8. Values that are too high can also distort
                                        the image.
                                    </p>
                                </span>
                            </div>
                            <div className="col-lg-6 col-12" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="gui-input gui-input-select">
                                    <label htmlFor="scheduler">
                                        <span className="gui-html-container gui-md-container">
                                            <h5>Scheduler</h5>
                                            <p>
                                                Schedulers or Samplers are algorithms that allow us to set an
                                                iterative process on your run. They are used across models to
                                                find the preferred balance between the generation speed and
                                                output quality.{" "}
                                            </p>
                                            <p>
                                                We recommend using our default settings. Learn more,{" "}
                                                <a href="https://huggingface.co/docs/diffusers/api/schedulers/overview">
                                                    here
                                                </a>
                                                .
                                            </p>
                                        </span>
                                    </label>
                                    <input hidden="" name="scheduler" />
                                    <div className=" css-b62m3t-container">
                                        <span
                                            id="react-select-6037-live-region"
                                            className="css-7pg0cj-a11yText"
                                        />
                                        <span
                                            aria-live="polite"
                                            aria-atomic="false"
                                            aria-relevant="additions text"
                                            className="css-7pg0cj-a11yText"
                                        />
                                        <div className=" css-13cymwt-control">
                                            <div className=" css-hlgwow">
                                                <div className=" css-1dimb5e-singleValue">
                                                    <span className="container-margin-reset">
                                                        <p>EulerAncestralDiscreteScheduler</p>
                                                    </span>
                                                </div>
                                                <div className=" css-19bb58m" data-value="">
                                                    <input
                                                        type="text"
                                                        className=""
                                                        style={{
                                                            label: "input",
                                                            color: "inherit",
                                                            background: 0,
                                                            opacity: 1,
                                                            width: "100%",
                                                            gridArea: "1 / 2",
                                                            font: "inherit",
                                                            minWidth: 2,
                                                            border: 0,
                                                            margin: 0,
                                                            outline: 0,
                                                            padding: 0
                                                        }}
                                                        autoCapitalize="none"
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        id="react-select-6037-input"
                                                        spellCheck="false"
                                                        tabIndex={0}
                                                        defaultValue=""
                                                        aria-autocomplete="list"
                                                        aria-expanded="false"
                                                        aria-haspopup="true"
                                                        role="combobox"
                                                    />
                                                </div>
                                            </div>
                                            <div className=" css-1wy0on6">
                                                <span className=" css-1u9des2-indicatorSeparator" />
                                                <div
                                                    className=" css-1xc3v61-indicatorContainer"
                                                    aria-hidden="true"
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        className="css-8mmkcg"
                                                    >
                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12" />
                        </div>
                        <span className=" gui-html-container gui-md-container">
                            <hr />
                        </span>
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="gui-input gui-input-select">
                                    <label htmlFor="__pixels">
                                        <span className="gui-html-container gui-md-container">
                                            <h5>Size</h5>
                                        </span>
                                    </label>
                                    <input hidden="" name="__pixels" />
                                    <div className=" css-b62m3t-container">
                                        <span
                                            id="react-select-6038-live-region"
                                            className="css-7pg0cj-a11yText"
                                        />
                                        <span
                                            aria-live="polite"
                                            aria-atomic="false"
                                            aria-relevant="additions text"
                                            className="css-7pg0cj-a11yText"
                                        />
                                        <div className=" css-13cymwt-control">
                                            <div className=" css-hlgwow">
                                                <div className=" css-1dimb5e-singleValue">
                                                    <span className="container-margin-reset">
                                                        <p>512p</p>
                                                    </span>
                                                </div>
                                                <div className=" css-19bb58m" data-value="">
                                                    <input
                                                        type="text"
                                                        className=""
                                                        style={{
                                                            label: "input",
                                                            color: "inherit",
                                                            background: 0,
                                                            opacity: 1,
                                                            width: "100%",
                                                            gridArea: "1 / 2",
                                                            font: "inherit",
                                                            minWidth: 2,
                                                            border: 0,
                                                            margin: 0,
                                                            outline: 0,
                                                            padding: 0
                                                        }}
                                                        autoCapitalize="none"
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        id="react-select-6038-input"
                                                        spellCheck="false"
                                                        tabIndex={0}
                                                        defaultValue=""
                                                        aria-autocomplete="list"
                                                        aria-expanded="false"
                                                        aria-haspopup="true"
                                                        role="combobox"
                                                    />
                                                </div>
                                            </div>
                                            <div className=" css-1wy0on6">
                                                <span className=" css-1u9des2-indicatorSeparator" />
                                                <div
                                                    className=" css-1xc3v61-indicatorContainer"
                                                    aria-hidden="true"
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        className="css-8mmkcg"
                                                    >
                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="gui-input gui-input-select">
                                    <label htmlFor="__res">
                                        <span className="gui-html-container gui-md-container">
                                            <h5>Resolution</h5>
                                        </span>
                                    </label>
                                    <input hidden="" name="__res" />
                                    <div className=" css-b62m3t-container">
                                        <span
                                            id="react-select-6039-live-region"
                                            className="css-7pg0cj-a11yText"
                                        />
                                        <span
                                            aria-live="polite"
                                            aria-atomic="false"
                                            aria-relevant="additions text"
                                            className="css-7pg0cj-a11yText"
                                        />
                                        <div className=" css-13cymwt-control">
                                            <div className=" css-hlgwow">
                                                <div className=" css-1dimb5e-singleValue">
                                                    <span className="container-margin-reset">
                                                        <p>512 x 512 (square)</p>
                                                    </span>
                                                </div>
                                                <div className=" css-19bb58m" data-value="">
                                                    <input
                                                        type="text"
                                                        className=""
                                                        style={{
                                                            label: "input",
                                                            color: "inherit",
                                                            background: 0,
                                                            opacity: 1,
                                                            width: "100%",
                                                            gridArea: "1 / 2",
                                                            font: "inherit",
                                                            minWidth: 2,
                                                            border: 0,
                                                            margin: 0,
                                                            outline: 0,
                                                            padding: 0
                                                        }}
                                                        autoCapitalize="none"
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        id="react-select-6039-input"
                                                        spellCheck="false"
                                                        tabIndex={0}
                                                        defaultValue=""
                                                        aria-autocomplete="list"
                                                        aria-expanded="false"
                                                        aria-haspopup="true"
                                                        role="combobox"
                                                    />
                                                </div>
                                            </div>
                                            <div className=" css-1wy0on6">
                                                <span className=" css-1u9des2-indicatorSeparator" />
                                                <div
                                                    className=" css-1xc3v61-indicatorContainer"
                                                    aria-hidden="true"
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        className="css-8mmkcg"
                                                    >
                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12" />
                        </div>
                        <span className="gui-input gui-html-container gui-md-container">
                            <h5>⌖ QR Positioning</h5>
                            <p>
                                Use this to control where the QR code is placed in the image, and how
                                big it should be.
                            </p>
                        </span>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="gui-input gui-input-range">
                                    <label htmlFor="input:obj_scale:undefined">
                                        <span className="flex-grow-1">
                                            <p>Scale</p>
                                        </span>
                                    </label>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <input
                                            type="number"
                                            min="0.1"
                                            max={1}
                                            step="0.05"
                                            defaultValue="0.65"
                                        />
                                        <input
                                            type="range"
                                            id="input:obj_scale:undefined"
                                            name="obj_scale"
                                            min="0.1"
                                            max={1}
                                            step="0.05"
                                            defaultValue="0.65"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-6">
                                <div className="gui-input gui-input-range">
                                    <label htmlFor="input:obj_pos_x:undefined">
                                        <span className="flex-grow-1">
                                            <p>Position X</p>
                                        </span>
                                    </label>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <input
                                            type="number"
                                            min={0}
                                            max={1}
                                            step="0.05"
                                            defaultValue="0.5"
                                        />
                                        <input
                                            type="range"
                                            id="input:obj_pos_x:undefined"
                                            name="obj_pos_x"
                                            min={0}
                                            max={1}
                                            step="0.05"
                                            defaultValue="0.5"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-6">
                                <div className="gui-input gui-input-range">
                                    <label htmlFor="input:obj_pos_y:undefined">
                                        <span className="flex-grow-1">
                                            <p>Position Y</p>
                                        </span>
                                    </label>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <input
                                            type="number"
                                            min={0}
                                            max={1}
                                            step="0.05"
                                            defaultValue="0.5"
                                        />
                                        <input
                                            type="range"
                                            id="input:obj_pos_y:undefined"
                                            name="obj_pos_y"
                                            min={0}
                                            max={1}
                                            step="0.05"
                                            defaultValue="0.5"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            className="gui-img"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAgAElEQVR4AcXBD3BTdYIH8O8vlbe3M97Nebe6/NTnA4yLnBXFP4BLhDWvBZfUUxJBUUD+NLxwa0qBtleddNGmippiabqzvJBQ7IqixcQ/pOzWkuc5ysiwK7i46x8eIN7qD5e92Vfw/fBPbd7N/GZ2RibSwYSZfD7kgw8++Jd/+ReUyf/93/9dcMEFFRUVKIcvvvjiq6+++td//VeUyddff02OHTs2evRolMmhQ4cURRk1ahTKYXBw0LbtSy+9FGVy6tQpwhijlKJMTNNUFEWSJJSDZVm2bcuyjDLhnBPGGKUUZWKapqIokiShHCzLsm1blmWUCeecMMYopSgT0zQVRZEkCeVgWZZt27Iso0w454QxRilFmZimqSiKJEkoB8uybNuWZRllwjknjDFKKcrENE1FUSRJQjlYlmXbtizLKBPOOWGMUUpRJqZpKooiSRLKwbIs27ZlWUaZcM4JY4xSijIxTVNRFEmSUA6WZdm2LcsyyoRzThhjlFKUiWmaiqJIkoRysCzLtm1ZllEmnHPCGKOUokxM01QURZIklINlWbZty7KMMuGcE8YYpRRlYpqmoiiSJKEcLMuybVuWZZQJ55wwxiilKBPTNBVFkSQJ5WBZlm3bsiyjTDjnhDFGKUWZmKapKIokSSgHy7Js25ZlGWXCOSeMMUopysQ0TUVRJElCOViWZdu2LMsoE845YYxRSlEmpmkqiiJJEsrBsizbtmVZRplwzgljjFKKMjFNU1EUSZJQDpZl2bYtyzLKhHNOGGOUUpSJaZqKokiShHKwLMu2bVmWUSacc8IYo5SiTEzTVBRFkiSUg2VZtm3Lsowy4ZwTxhilFGVimqaiKJIkoRwsy7JtW5ZllAnnnDDGKKUoE9M0FUWRJAnlYFmWbduyLKNMOOeEMUYpRZkcOXJk3LhxKBPO+cmTJymlKBPOOWGMUUpRAsuy9u/fj6L84Ac/+Prrrx3HwekuueSS8ePHQ/jkk08OHjyIAmPGjBk3bhyEI0eOHD16FAV+8pOfXHrppRA+/PDDTz/9FN9SUVHhcrmGhoZQrEmTJl1wwQUoFuecMMYopShBLperqqpCUaLR6JNPPmlZFk5XW1ubTCYhdHZ21tfXo8ADDzzw6KOPQnjwwQfXrVuHAhs2bFi5ciWEYDCYSqXwLVOnTp04ceKmTZtQrF27dqmqimJxzgljjFKKEhiGoaoqivLII490dnYeP34cp9M0Tdd1CF1dXXV1dSgQiUSi0SiElpaWtrY2FIjH4+FwGEIoFEokEvgWj8dTWVmp6zqKlcvlvF4visU5J4wxSilKYBiGqqooSmtr6/r160+cOIHTaZqm6zqEDRs2rFq1CgUikUg0GoXQ0tLS1taGAh0dHfX19RBCoVAikcC3TJ48eeLEialUCsXK5XJerxfF4pwTxhilFCUwDENVVQgXXXTR5MmTATiOg7MQCAQGBgZOnjzpcrk+/vjjAwcOQNA0Tdd1CDt27NB1nRDicrkOHTr0/vvvQ4hEItFoFEJLS0tbWxuECRMmuN3ufD7vOE4oFLrtttsghEKhRCIBYeLEiYqiuN3uSy65xDAMQgjOAiEEwN69e48fPw4hl8t5vV4Ui3NOGGOUUpTAMAxVVSHU1NTs2LEDZ+3QoUNjx46tqKgA0N3dvWzZMgiapum6jgLr169vaGiAEIlEotEohJaWlra2Ngjt7e1r1qxBgVAolEgkIGzevHnp0qUnTpywbfuSSy7B93Hbbbdls1kIuVzO6/WiWJxzwhijlKIEhmGoqgrB5/Nls1mcNdM0x4wZM2rUKACpVCoYDELQNE3XdRRob29vbGyEEIlEotEohJaWlra2NgixWKyhoQEFQqFQIpGAkEwma2trLcuybVuWZXwfNTU1fX19EHK5nNfrRbE454QxRilFCQzDUFUVgs/ny2azOGuHDx+WZVmSJACpVCoYDELQNE3XdRTo7Oysr6+HEIlEotEohJaWlra2NggbNmxYuXIlCoRCoUQiASGZTNbW1lqWZdu2LMv4Pmpqavr6+iDkcjmv14ticc4JY4xSihIYhqGqKgSfz5fNZiEwxt566y1CCM7AcRxK6eTJk8877zwAqVQqGAxC0DRN13UIhw8f3r9/v0t48cUXf/Ob30CIRCLRaBRCS0tLW1sbhEWLFs2ZMycvTJo06fLLL4cQCoUSiQSEZDJZW1trWdYXX3zx2WefHTlyxOVy4Qwcx7npppsuvvhiCDU1NX19fRByuZzX60WxOOeEMUYpRQkMw1BVFYLP58tmsxBeeOGFuXPnYkQbN24MhUIQUqlUMBiEoGmarusQOjs76+vrUSASiUSjUQgtLS1tbW0osGHDhpUrV0IIhUKJRAJCMpmsra0dHBwcGhpqbGzs6enBiLZv337nnXdCqKmp6evrg5DL5bxeL4rFOSeMMUopSmAYhqqqEHw+XzabhZDJZAKBAEak67qmaRBSqVQwGISgaZqu6xC6urrq6upQIBKJRKNRCC0tLW1tbSgQj8fD4TCEUCiUSCQgJJPJ2trawcHBoaGh5ubm7u5ujCidTvv9fgg1NTV9fX0Qcrmc1+tFsTjnhDFGKUUJDMNQVRWCz+fLZrMQMplMIBDAiHRd1zQNQiqVCgaDEDRN03UdQkdHx+rVq1EgEolEo1EIzc3Njz/+OArE4/FwOAwhFAolEgkIyWSytrZ2cHBwaGioubm5u7sbI0qn036/H0JNTU1fXx+EXC7n9XpRLM45YYxRSlECwzBUVYXg8/my2SyETCYTCAQwIl3XNU2DkEqlgsEgBE3TdF2H0N/fv2XLFiK8//7777zzDoRIJBKNRiH09vZmMhki7N+//4MPPoAQj8fD4TCEUCiUSCQgJJPJ2trawcHBoaGh5ubm7u5ujCidTvv9fgg1NTV9fX0Qcrmc1+tFsTjnhDFGKUUJDMNQVRWCz+fLZrMQMplMIBDAiHRd1zQNQiqVCgaDEDRN03UdBTZs2LBq1SoIkUgkGo2iQHNz8+OPPw4hHo+Hw2EIoVAokUhASCaTtbW1g4ODQ0NDzc3N3d3dGFE6nfb7/RBqamr6+vog5HI5r9eLYnHOCWOMUooSGIahqioEn8+XzWYhZDKZQCCAEem6rmkahFQqFQwGIWiapus6CrS3tzc2NkKIRCLRaBQFGhsb29vbIcTj8XA4DCEUCiUSCQjJZLK2tnZwcHBoaKi5ubm7uxsjSqfTfr8fQk1NTV9fH4RcLuf1elEszjlhjFFKUQLDMFRVheDz+bLZLIRMJhMIBDAiXdc1TYOQSqWCwSAETdN0XUeBWCzW1NQE4aGHHlq7di0KPPDAA4899hiEeDweDochhEKhRCIBIZlM1tbWDg4ODg0NNTc3d3d3Y0TpdNrv90Ooqanp6+uDkMvlvF4visU5J4wxSilKYBiGqqoQfD5fNpuFkMlkAoEARqTruqZpEFKpVDAYhKBpmq7rKBCLxZqamiDcfvvtc+fOdRwH30IIefbZZ3fu3AkhHo+Hw2EIoVAokUhASCaTtbW1g4ODQ0NDzc3N3d3dGFE6nfb7/RBqamr6+vog5HI5r9eLYnHOCWOMUooSGIahqioEn8+XzWYhZDKZQCCAEem6rmkahFQqFQwGIWiapus6CsRisaamJpy1eDweDochhEKhRCIBIZlM1tbWDg4ODg0NNTc3d3d3Y0TpdNrv90Ooqanp6+uDkMvlvF4visU5J4wxSilKYBiGqqoQfD5fNpuFkMlkAoEARqTruqZpEFKpVDAYhKBpmq7rKBCLxZqamnDW4vF4OByGEAqFEokEhGQyWVtbOzg4ODQ01Nzc3N3djRGl02m/3w+hpqamr68PQi6X83q9KBbnnDDGKKUogWEYqqpCmD17dl9fH4R0On3nnXdiRBs3bgyFQhBSqVQwGISwfPnyRCKBArFYrKmpCWctHo+Hw2EImqZt2rQJQjKZrK2tHRwcHBoaamxs7OnpwYheeOGFQCAAwefz7dy5E0Iul/N6vSgW55wcOHDgn/7pn1CC48ePv/766xAopR6PB8Lf/va3d999FyO64oorZFmG8NFHH/3hD3+AMG7cuOuvvx7Cl19+yTmH8Le//Y0xBuGLL744deoURjRp0iS32w3h7bffPnLkCIQbbrhh7NixQ0ND+Xz+o48+YoxhRFdfffWFF14I4c033zx27BiEGTNmXHTRRSjW8PAw+ctf/nLRRRehBLt377777rshqKr61FNPQagQMCLTNC+++OJRo0YB2LZtW1NTE4R77733scceg5BMJh988EEIdXV10WgUwoYNG9atW4cRtba2LlmyBEJzc/MzzzwD4Yknnpg/f/6JEyc454qiEEIwomEBwuLFi3O5HITnnntu2rRpKNapU6cIY4xSihIYhqGqKoSf//znO3fuxFkzTXPMmDGjRo0CkEwmly9fDmH58uWJRAJCPB5fuXIlhDVr1rS3t0OIRqO//OUvMaLOzs66ujoImqZt2rQJwqZNm4LBoGVZtm3LsozvY/bs2b/97W8h5HI5r9eLYp06dYowxiilKIFhGKqqQvjP//zPl19+GWftyJEj48aNg/Cb3/zmvvvug6Bpmq7rELq6uurq6iA0NDTEYjEIbW1tLS0tGFE8Hg+HwxBCoVAikYDQ09OzaNGiU6dOnTx5cvTo0fg+br/99ldeeQVCLpfzer0oFuecMMYopSiBYRiqqkKYOHFiXV2d4zg4O5dddtmxY8eGhoYIIW+88UZPTw8ETdN0XYfQ1dVVV1cHoaGhIRaLQWhra2tpaYFw/fXXX3fddY7jEEL27Nnz7rvvQojH4+FwGEIoFEokEhDuu+++m2+++Z//+Z9/+MMf/vWvf8VZI4TE4/EDBw5AyOVyXq8XxeKcE8YYpRQlMAxDVVUUpbW1df369SdOnMDpNE3TdR1CV1dXXV0dhIaGhlgsBqGtra2lpQXCunXrmpubITzwwAOPPfYYhHg8Hg6HIYRCoUQigW+ZPHnyxIkTU6kUipXL5bxeL4rFOSeMMUopSmAYhqqqKMojjzzS2dl5/PhxnE7TNF3XIXR1ddXV1UFoaGiIxWIQ2traWlpaIESj0UgkAqGxsbG9vR1CPB4Ph8MQQqFQIpHAt3g8nsrKSl3XUaxcLuf1elEszjlhjFFKUYKBgYGZM2eiKK2trbFY7PPPP8fplixZ0t3dDaGjo2P16tUQVq5cuWHDBghr165tbW2F8Mtf/vLhhx+G0NjY2N7eDiEej4fDYQhLly7dsmULvuXGG2+cOHHi5s2bUaxXX321uroaxeKcE8YYpRQl+PDDDzs6OlCUW265Ze/evZxzfIvjODNmzLjnnnsgvPbaa8899xwhxHGcmTNnBgIBCDt37nz55ZcJIY7j3H777bNnz4bQ2NjY3t4OIR6Ph8NhCM8+++zrr79OCME/yLJ84YUX7tu3D8VatWrV+PHjUSzOOWGMUUpRJkeOHBk3bhzOqcbGxvb2dgjxeDwcDuMMOOcnT56klKJMOOeEMUYpRZmYpqkoiiRJOHcaGxvb29shxOPxcDiMM7Asy7ZtWZZRJpxzwhijlKJMTNNUFEWSJJw79fX1nZ2dEJ588slVq1bhDE6dOnXy5MnRo0ejTDjnhDFGKUUJPvnkk0wmQwhxHGfs2LG33XYbhMOHD/f19RFCHMcZP378rFmzUMA0TUVRJEkC8Oc//zmXyxFC8C2O41x77bXTp0+HsG/fvjfffJMQ4jjO5MmTp06digIvvfTSwMBARUXF8PDwXXfdNX36dBQwDOPdd9/9t3/7tx/+8IdXXnllZWUlCvT393/44YeEEMdxfD7f5ZdfDmHHjh0fffQRIcRxHL/ff+mll6JYnHPCGKOUogS7du2qrq6GUF1d/eqrr0LYvn37vHnzIPj9/nQ6jQKmaSqKIkkSgEQiEQqFUCAUCm3cuBHCunXrHnzwQQj//d///dhjj6Eoixcv7unpmTx58hVXXDF16tT7778fBQKBQCaTgdDb2zt37lwIM2fOHBgYgDAwMFBVVYVicc4JY4xSihIYhqGqKgSfz5fNZiFkMplAIADh7rvv3rZtGwqYpqkoiiRJAFKpVDAYRIFwOByPxyHEYrGmpiYIkUgkGo2iKMFgMJVKeTwet9s9ZcqUUCiEAvPnz3/uuecgpNNpv98Poaampq+vD0Iul/N6vSgW55wwxiilKIFhGKqqQvD5fNlsFsL27dvnzZsHwe/3p9NpFDh06JDb7YbQ3d29bNkyFAiHw/F4HEJ7e3tjYyOEhx9++Je//CWKsmLFCl3XPR6P2+2eMmVKKBRCgQULFjzzzDMQduzYUVNTA+HWW2/t7++HMDAwUFVVhWJxzgljjFKKEhiGoaoqBJ/Pl81mIfzpT3966qmnCCH5fP6666679957UeDAgQO5XO6bb75xuVynTp06efIkAJfLtX///oGBAQjhcDgej0Nob29vbGyEoKrq7Nmz8/k8viWfz99yyy033ngjhFwu9/bbb7tcLnyLy+V6/vnn9+7d6/F43G73lClTQqEQhJ07d/7pT39yCU8//fQ777wDYdGiRddcc00+nwcwODj41VdfAXAcJxQKud1uFItzThhjlFKUwDAMVVUh+Hy+bDaLs/bWW2/97Gc/+/rrrwEsXbp08+bNELq7u5ctWwYhHA7H43EIsVisqakJI3r00UcfeOABCCtWrNB1HWfg8XjcbveUKVNCoRCEu+66q7e3FyP63e9+N2vWLJwLnHPCGKOUogSGYaiqCsHn82WzWZy1PXv2zJo16+TJkwBqa2uTySSERCIRCoUghMPheDwOIRaLNTU1YURPPPFEY2MjhLq6uq6uLpyBx+Nxu91TpkwJhUIQFi5cuHXrVowom836fD6cC5xzwhijlKIEu3btqq6uhjBr1qzf/e53OGt79+6trq4+efIkgFAotHHjRgjJZHL58uUQQqHQxo0bIcRisaamJoyoo6Ojvr4ewurVqzs6OnAGHo/H7XbffPPNS5cuhbB48eKenh6MaGBgoKqqCucC55wwxiilKMGRI0e6u7sJIQBcLteoUaNwunw+f/XVV8+ZMwfCu+++++KLL7pcLkLI5Zdf/otf/OLvf/87gOuvv97v9+fzeQDDw8PffPMNgOHh4WnTpvl8PgixWKypqQkjmjVr1owZM4aHhysqKl555ZU9e/ZAmD179g033JDP510u144dO/bv3+/xeK688srPPvvspz/96fDwsMvl6u3t/eMf/whhzpw5V199dT6fJ4Rs3779gw8+gLBgwYIJEybk83nHcRYuXDhmzBgUi3NOGGOUUpwj/f39t956Kwr4/f50Og2hp6dn8eLFEKLRaFdX1/Hjx3G6YDC4adMmFGhvb29sbERRNm/evHTpUggrVqzQdd3j8VRWVuq6ju+STqf9fj+EefPmbd++HQUGBgaqqqpQLM45YYxRSnGO9PX11dTUoMDdd9+9bds2CFu3bl24cCGERx55pLOz8/jx4zidpmm6rqNAe3t7Y2MjiqLruqZpEILBYCqV8ng8lZWVuq7ju2zbtu3uu++GEAgEMpkMCuRyOa/Xi2JxzgljjFKKc6Svr6+mpgYF7r333q1bt0LYtm3bPffcA6G1tbW9vf3kyZM4XTAY3LRpEwp0dnbW19ejKJs3b166dCmEFStW6Lru8XgqKyt1Xcd3SafTfr8fwrx587Zv344CAwMDVVVVKBbnnDDGKKU4R/r6+mpqalDgqquuCgQC+XweQEVFxXnnnQdh4sSJBw8e/PLLL3G64eHhb775BqdzuVy7d+/O5XIY0axZs2bMmDE8PFxRUfHKK6/s2bMHwuzZs2+44YZ8Pu9yuXbs2LF//36Px3PllVd+9tlnP/3pT4eHh10uV29v7x//+EcIc+bMufrqq/P5PCFk+/btH3zwAYQFCxZMmDAhn887jrNw4cIxY8agWJxzwhijlOIc6evrq6mpwYjmz5//7LPPQjhy5Mi4ceNQIJlMLl++HEXp6Oior6+HsHr16o6ODpyBx+Nxu90333zz0qVLISxevLinpwcjGhgYqKqqwrnAOSeMMUopzpG+vr6amhqMaMGCBU8//TQE0zQVRZEkCadLJBKhUAhFeeKJJxobGyHU1dV1dXXhDDwej9vtnjJlSigUgrBw4cKtW7diRNls1ufz4VzgnBPGGKUU58jAwMDMmTMxonnz5j3//PMQTNNUFEWSJJyuu7t72bJlKEpHR0d9fT2E1atXd3R04Aw8Ho/b7fZ4PMuWLYOwePHinp4ejOjVV1+trq7GucA5J4wxSilKcOjQIV3XCSEul+vQoUOZTAZCZWXl4sWLHcfBt+Tz+crKytmzZ0MwTVNRFEmSAOzdu/f55593Cfv37x8YGIAwbdo0v9+fz+dxBi6Xa+fOnblcDsKMGTOmTJmSz+ddLteuXbv27duHM/B4PFdeeeVHH310/fXX5/N5l8uVzWbfe+89jMjv97vd7nw+7zhOKBRyu90oFuecMMYopSjBrl27qqurUWDu3Lm9vb0YkWmaiqJIkgRA1/UVK1agwKpVq5588kmMqLW1de3atfiePB5PZWWlruso1sDAQFVVFYrFOSeMMUopSmAYhqqqKOD3+9PpNEZkmqaiKJIkAUilUsFgEAXC4XA8HseIWlpa2tra8D15PJ7Kykpd11GsXC7n9XpRLM45YYxRSlGCXbt2VVdXo0BNTc2OHTswItM0FUWRJAlAIpEIhUIocP/993d1dWFELS0tbW1t+J4mT548ceLEVCqFYg0MDFRVVaFYnHPCGKOUogSffPJJJpMhhOBbHMdxu92zZ8/GiEzTVBRFkiQAf/7zn3O5HCEE3+Jyuf7+978fP36cEDI8PFxdXX3HHXdA6O/vf+WVVyoqKvL5/IUXXvijH/0on8/jrDmOc8EFF5x//vl/+ctfCCH4/hzH8fv9l156KYrFOSeMMUopysQ0TUVRJEnCmf3qV78Kh8MQVq5cuWHDBghr165tbW2FEI1GI5EIvqdTp06dPHly9OjRKBPOOWGMUUpRJqZpKooiSRLOrKurq66uDkJDQ0MsFoPQ1tbW0tICIRqNRiIRfE+WZdm2LcsyyoRzThhjlFKUyZEjR8aNG4cRdXV11dXVQWhubl63bh2Etra2lpYWCGvXrn3ooYfwPVmWZdu2LMsoE845YYxRSlGCDz/8sKOjA0W55ZZb9u7dyznHtziOM2PGjHvuuQdCV1dXXV0dhGuuueamm25yHIcQ8uMf/3j06NGEkHw+P2XKlOuuuw4jevbZZ19//XVCiOM4ixYtmjZtmmVZtm3Lsozvsnnz5r179xJCAGiaNmnSJJxrnHPCGKOUogQDAwMzZ85EUVpbW2Ox2Oeff47TLVmypLu7G0JXV1ddXR0KRCKRaDSKs7Z06dItW7ZA2LhxYygUsizLtm1ZlvFdAoFAJpOB0NvbO3fuXJxrnHPCGKOUogSGYaiqiqI88sgjnZ2dx48fx+k0TdN1HUJXV1ddXR0KRCKRaDSKsxYKhRKJBIRkMllbW2tZlm3bsizju8yfP/+5556DkE6n/X4/zjXOOWGMUUpRAsMwVFVFUVpbW9evX3/ixAmcTtM0XdchdHR0rF69GgUikUg0GsVZW7ZsWXd3NwRd1zVNsyzLtm1ZlvFd7rzzznQ6DaG3t3fu3Lk41zjnhDFGKUUJDMNQVRXCxIkT6+rqHMfB2bnsssuOHTs2NDRECHnjjTd6enogaJqm6zqE9957b/fu3YQQnO7TTz/95JNPADiOM2fOHJ/PB2H79u39/f2EEMdx5s+fr6oqhN27d7/33nuEEMdxpk+fPn78+MHBwS+//LK/v/+NN94ghDiOU1tbO3XqVAivvfbaoUOHCCEAqqqqxowZAyEejx84cIAQ4jhOQ0PDlVdeiWJxzsmxY8dGjx6NEhiGoaoqhNmzZ/f19eGsffTRR2PHjoXw1FNPLVmyBEJtbW0ymcSIWltb165dCyESiUSjUQjhcPhXv/oVhPb29jVr1uAMTpw4MTQ0VFdXt23bNgjd3d1LlizBiG655Zb/+Z//gfDqq69WV1ejWKdOnSKHDx++4IILUIIDBw5EIhEIN954Y0tLC/6BEIIRMcYuvPDC8847D8DAwEBXVxeEW2+99b/+67/wXQghEJ5//vmtW7dCWLBgwbx58yBs2bLlxRdfhLB8+fKamhoIhBD8g+M4ADjnw8PDPT09AwMDEFavXv2zn/0MAiEE/+A4Dv4hGo3+/ve/h9DW1jZx4kQU66uvviLvvffe+eefjxJ8/PHHzzzzDAS32z1v3jwIFRUVo0aNwoj++te/nn/++RUVFQDeeeednTt3Qpg0adLPf/5zFDhPgJDL5fr7+yGoqjpjxgwI/f39u3fvhuDz+aZMmQJh1KhRFRUVEL4Rvvrqq3w+39/fv2/fPgiBQOCaa66BIEmSy+WCMDQ0NDw8DGHr1q0HDx6EsGTJkrFjx6JYQ0ND5NixY6NHj0YJDMNQVRXCzJkz+/v7Iezfv7+rq4sQgjO74447brvtNgibNm3SNA3CsmXLUqkUCvT39z///POEEAAXX3zxJZdcAsBxnKlTp06aNAnCnj179u/fTwhxHGf69OlXXXUVhKeffvq1114jhDiOs3TpUo/Hc+LEiVOnTh08ePC9994jhDiOU11d7Xa7IWzatGnPnj2EEMdxwuHwpEmTIPz2t789evQoIcRxnDvuuINSimJ98cUXhDFGKUUJDMNQVRWCz+fLZrMQtm/fPm/ePIzo17/+9YoVKyCkUqlgMAhB0zRd11Fg3bp1Dz74IIRIJBKNRnHWli5dumXLFggbN24MhUKWZdm2LcsyvksgEMhkMhB6e3vnzp2Lc41zThhjlFKUwDAMVVUh+Hy+bDYLIZPJBAIBjEjXdU3TIKRSqWAwCEHTNF3XUSAWizU1NUGIRCLRaBRnLRQKJRIJCMlksra21rIs27ZlWcZ3mci4GA0AAAoQSURBVD9//nPPPQchnU77/X6ca5xzwhijlKIEhmGoqgrB5/Nls1kImUwmEAhgRLqua5oGIZVKBYNBCJqm6bqOArFYrKmpCcJDDz20du1anLVf/OIXv/71ryE89dRT9913n23bn3/+OaUU32XBggXPPPMMhHQ67ff7ca5xzgljjFKKEhiGoaoqBJ/Pl81mIWQymUAggBHpuq5pGoRUKhUMBiFomqbrOgrEYrGmpiYIV1999bXXXus4Dr7FcZz58+f7fD4ITz/9dH9/PxH27NljmiaEqVOnut3uMWPG/Pu///vEiRO9Xi8EXdfffPNNIrzxxhtHjx6FkE6n/X4/zjXOOWGMUUpRAsMwVFWF4PP5stkshEwmEwgEMCJd1zVNg5BKpYLBIARN03RdR4FYLNbU1IQRPfroow888ACEFStW6LqOM5g8efIVV1wxderU+++/H8Jdd93V29uLAul02u/341zjnBPGGKUUJTAMQ1VVCD6fL5vNQshkMoFAACPSdV3TNAipVCoYDELQNE3XdRRob29vbGzEiGKxWENDA4S6urquri6cgcfjcbvdU6ZMCYVCEBYuXLh161YUSKfTfr8f5xrnnDDGKKUogWEYqqpC8Pl82WwWQiaTCQQCGJGu65qmQUilUsFgEIKmabquo0B7e3tjYyNG1NHRUV9fD2HVqlUbNmzAGXg8HrfbPW3atNraWgiLFy/u6elBgZdeeun222/HucY5J4wxSilKYBiGqqoQfD5fNpuFkMlkAoEARqTruqZpEFKpVDAYhKBpmq7rEPr7+7ds2UIIAeB2u6+66ioAhJBMJtPb24sC11577YQJExzHIYS8/fbbBw8ehLBs2bLq6mrHcQghiUTitdde83g8EyZM2Ldv309+8hPHcQghb7311tGjRyGEw+Fp06Y5jgPg97//PWMMBSKRyFVXXYVicc4JY4xSihIYhqGqKgSfz5fNZiFkMplAIIAR6bquaRqEVCoVDAYhaJqm6zqEjo6O1atXQ1izZk17ezuExx9/vLm5GWdt8+bNS5cuhbBixQpd1z0eT2Vlpa7r+C7pdNrv90O44447Xn75ZRQYGBioqqpCsTjnhDFGKUUJDMNQVRWCz+fLZrMQMplMIBDAiHRd1zQNQiqVCgaDEDRN03UdQldXV11dHYSGhoZYLAahra2tpaUFZ03XdU3TIASDwVQq5fF4KisrdV3Hd9m2bdvdd98NIRAIZDIZFMjlcl6vF8XinBPGGKUUJTAMQ1VVCD6fL5vNQnjhhRfmzp2LEW3cuDEUCkFIpVLBYBCCpmm6rkPo7Oysr6+H0NDQEIvFILS1tbW0tOCsJZPJ2tpaCJqmbdq0yePxVFZW6rqO79Lb2zt37lwIc+bMeemll1Bg165dqqqiWJxzwhijlKIEhmGoqgrB5/Nls1kIjLG33nqLEIIzcByHUjp58uTzzjsPQCqVCgaDEDRN03UdwuHDh/fv3+9yuQC8//77+/btg1BZWXnNNdcAcLlczzzzzAsvvABh0aJFc+bMyefzLpcrmUzu3LkTwqRJky6//PJ8Pu9yuf7whz8cPXrU4/GMHz+eEOLz+fL5vMvl2rBhw+uvvw5h8uTJl112WT6fBzB9+nRZlnE6x3GmT59+4YUXolicc8IYo5SiBIZhqKoKwefzZbNZnLXDhw/LsixJEoBUKhUMBiFomqbrOgqsX7++oaEBQiQSiUajEB5++OGHHnoIwoYNG1auXAlh9erVHR0dOAOPx+N2uz0ez7JlyyAsXry4p6cHBV566aXbb78d5xrnnDDGKKUogWEYqqpC8Pl82WwWZ800zTFjxowaNQpAKpUKBoMQNE3TdR0F2tvbGxsbIUQikWg0CqGlpaWtrQ1CLBZraGiAUFdX19XVhTPweDxut3vKlCmhUAjCwoULt27digLpdNrv9+Nc45wTxhilFCUwDENVVQg1NTU7duzAWTt06NDYsWMrKioAdHd3L1u2DIKmabquo0B7e3tjYyOESCQSjUYhrF27trW1FUJ7e/uaNWsgrFy5Mh6P4ww8Ho/b7b7pppuWL18OYdGiRU8//TQKvPjii3fccQfONc45YYxRSlECwzBUVYVw0UUXTZ48GYDjODgLgUBgYGDg5MmTLpfr448/PnDgAARN03Rdh7Bjxw5d1wkhAK699tqbbroJwttvv713714ALpfrgw8+ME0TwoQJE9xudz6fd7lc77777tGjR3EGHo/nP/7jP3bv3j1u3Lh8Pu9yufbt2/fpp5+iwPXXX3/xxRfn83l8i+M4jz766DXXXINicc4JY4xSihIYhqGqKorS2tq6fv36EydO4HSapum6DmHDhg2rVq2CsGbNmvb2dghtbW0tLS0ogcfjqays1HUdxRoYGKiqqkKxOOeEMUYpRQkMw1BVFUV55JFHOjs7jx8/jtNpmqbrOoSurq66ujoIDQ0NsVgMQltbW0tLC0rg8XgqKyt1XUexcrmc1+tFsTjnhDFGKUUJcrlcVVUVihKNRp988knLsnC62traZDIJobOzs76+HsKqVauefPJJCA8//PBDDz2EEkydOnXixImbNm1CsXbt2qWqKorFOSeMMUopSmBZ1v79+1GUH/zgB19//bXjODjdJZdcMn78eAiffPLJwYMHIVx22WVutxvC0aNHjxw5ghJUVFS4XK6hoSEUa9KkSRdccAGKxTknjDFKKcrkyJEj48aNQ5lwzk+ePEkpRZlwzgljjFKKMjFNU1EUSZJQDpZl2bYtyzLKhHNOGGOUUpSJaZqKokiShHKwLMu2bVmWUSacc8IYo5SiTEzTVBRFkiSUg2VZtm3Lsowy4ZwTxhilFGVimqaiKJIkoRwsy7JtW5ZllAnnnDDGKKUoE9M0FUWRJAnlYFmWbduyLKNMOOeEMUYpRZmYpqkoiiRJKAfLsmzblmUZZcI5J4wxSinKxDRNRVEkSUI5WJZl27YsyygTzjlhjFFKUSamaSqKIkkSysGyLNu2ZVlGmXDOCWOMUooyMU1TURRJklAOlmXZti3LMsqEc04YY5RSlIlpmoqiSJKEcrAsy7ZtWZZRJpxzwhijlKJMTNNUFEWSJJSDZVm2bcuyjDLhnBPGGKUUZWKapqIokiShHCzLsm1blmWUCeecMMYopSgT0zQVRZEkCeVgWZZt27Iso0w454QxRilFmZimqSiKJEkoB8uybNuWZRllwjknjDFKKcrENE1FUSRJQjlYlmXbtizLKBPOOWGMUUpRJqZpKooiSRLKwbIs27ZlWUaZcM4JY4xSijIxTVNRFEmSUA6WZdm2LcsyyoRzThhjlFKUiWmaiqJIkoRysCzLtm1ZllEmnHNy7Nix0aNHo0xM0xwzZsyoUaNQDoODg59//rksyyiTU6dOkaNHj/7oRz9Cmfzv//4vpXTUqFEoh88///zUqVM//vGPUSZffPHF/wPMskeHXT0bNAAAAABJRU5ErkJggg=="
                            style={{ maxWidth: 300, maxHeight: 300 }}
                        />
                    </div>
                </div>
                <div className="position-sticky bottom-0 bg-white" style={{ zIndex: 100 }}>
                    <span className=" gui-html-container gui-md-container">
                        <hr />
                    </span>
                    <div className="row">
                        <div className="col-lg-8 col-8 d-flex flex-column justify-content-center">
                            <span
                                style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 1,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    position: "relative"
                                }}
                            >
                                <span className="text-muted gui-html-container gui-md-container">
                                    <p>
                                        Run cost = <a href="/account/">5 credits</a>
                                    </p>
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4 col-4 d-flex justify-content-end align-items-center">
                            <button
                                type="submit"
                                className="btn btn-theme btn-primary "
                                value="yes"
                                name="--submit-1"
                                onClick={submitPrompt}
                            >
                                <span className="gui-html-container gui-md-container">
                                    <p>🏃 Submit</p>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "right" }}>
                    <span className="text-muted gui-html-container gui-md-container">
                        <p>
                            <em>
                                By submitting, you agree to Gooey.AI's{" "}
                                <a href="https://gooey.ai/terms">terms</a> &amp;{" "}
                                <a href="https://gooey.ai/privacy">privacy policy</a>.
                            </em>
                        </p>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default QrPromptFormComponent