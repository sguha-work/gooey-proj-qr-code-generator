import Navbar from "../utilities/navbar.component";
import Drag from "../utilities/drag.component";
import Footer from "../utilities/footer.component";
import { useLayoutEffect, useState } from "react";
import { Subject_Generate_QR$, Subject_Generate_QR_Success$ } from "../../subjects/generate-qr.behavior-subject";
import { generateQR } from "../../services/qr.service";
import { createContext } from "react";
export default function Home() {
  const OutputContext = createContext();
  const [output, setOutput] = useState("");
  useLayoutEffect(() => {
    Subject_Generate_QR$.subscribe((data) => {
      data && generateQR(data);
    });
    Subject_Generate_QR_Success$.subscribe((data) => {
      
      if (data && data.data) {
        console.log("success", data.data);
        setOutput(data.data);
      }
    });
  }, []);
  return (
    <>

      <Navbar />
      <Drag output={output} />
      {/* <ResultCard /> */}
      <Footer />

    </>
  );
}
