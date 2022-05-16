// import { Document, Page, pdfjs  } from 'react-pdf';
// import React, { useState } from 'react';
// import resume from '../resume.pdf';
// import myResume from "../resume.pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// //import { Document, Page } from  'react-pdf/dist/entry.parcel';



// const Resume = (props) => {

//     const { swapBurgerMenuIcon } = props;

//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);
  
//     function onDocumentLoadSuccess({ numPages }) {
//       setNumPages(numPages);
//     }

//     const hideResume = () => {
//         const resume = document.querySelector("#resume");

//         resume.classList.toggle("resume-hide");
//     }
//     return (
//         <div id="resume" className="resume-hide">
//             <div id="resume-container">
               
//                 <Document  file={resume} onLoadSuccess={onDocumentLoadSuccess}>
//                     <Page className="document" pageNumber={pageNumber} />
//                 </Document>
//                 <label onClick={ () => {hideResume(); } }htmlFor="Document">&#88;</label>
//                 <div className="buttons">
//                     <a className="button" href={myResume} target="_blank" rel="noreferrer">See File</a>
//                     <div className="button" onClick={ () => {hideResume(); } }>Back</div>
//                 </div>


//                 {/* <PDFDownloadLink document={<ResumeDocument />} fileName="Olive-Fox-CV.pdf">
//                     {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
//                 </PDFDownloadLink> */}
//             </div>
//         </div>
//     )
// }

// export default Resume;