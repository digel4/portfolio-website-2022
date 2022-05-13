import { Document, Page, pdfjs  } from 'react-pdf';
import React, { useState } from 'react';
import resume from '../resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



const Resume = (props) => {

    const { swapBurgerMenuIcon } = props;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    const hideResume = () => {
        const resume = document.querySelector("#resume");

        resume.classList.toggle("resume-hide");
    }
    return (
        <div id="resume" className="resume-hide">
            <div id="resume-container">
                
                <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page width="20px" height="20px" pageNumber={pageNumber} />
                </Document>
                <label onClick={ () => {hideResume(); } }htmlFor="Document">&#88;</label>
            </div>
        </div>
    )
}

export default Resume;