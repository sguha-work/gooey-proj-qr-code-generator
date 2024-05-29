import Navbar from "../utilities/navbar.component";
import Drag from "../utilities/drag.component";
import Footer from "../utilities/footer.component";
import { useLayoutEffect } from "react";
import { Subject_Generate_QR$, Subject_Generate_QR_Success$ } from "../../subjects/generate-qr.behavior-subject";
import { generateQR } from "../../services/qr.service";
export default function Home() {
  useLayoutEffect(()=>{
    Subject_Generate_QR$.subscribe((data)=>{console.log("Data",data)
      data&&generateQR(data);
    });
    Subject_Generate_QR_Success$.subscribe((data)=>{
      console.log("success",data);
    });
  },[]);
  return (
    <>
      <Navbar />
      <Drag />
      {/* <ResultCard /> */}
      <Footer />
    </>
  );
}
