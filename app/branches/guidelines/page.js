"use client";

import Link from "next/link";
import "./guidilines.css"; 

export default function MedicalImmigrationPage() {
  const steps = [
    {
      stepNum: "01",
      title: "Initial Visit & Evaluation",
      description: "The immigration exam includes going over your medical histories and performing a full physical and mental evaluation. Our staff will assess the need for further immunizations, which may be administered at the time of the initial visit or during a follow-up exam. This initial session typically takes 1 to 1 ½ hours.",
      bgSymbol: "📋",
      alignRight: false
    },
    {
      stepNum: "02",
      title: "Comprehensive Testing & Screening",
      description: "After the comprehensive physical, we will administer a TB test, and run a blood panel to check for communicable diseases such as TB, syphilis, and Gonorrhea. For our patients who have a positive TB test, we will also have to perform a chest X-ray in order to make a further determination for health risk and following course of action.",
      bgSymbol: "🩺",
      alignRight: true
    },
    {
      stepNum: "03",
      title: "Consultation & Clinical Review",
      description: "As a designated Civil Surgeon site, our clinical staff can provide patients with consultations in the event of positive blood work, and can make recommendations on the evaluation based on the current physical examination and on the patient's medical records. Although the USCIS will make the final decision as to a patient's legal ability to remain in the US, our caring staff can help with many of the concerns that could be a point of contention.",
      bgSymbol: "💬",
      alignRight: false
    },
    {
      stepNum: "04",
      title: "Finalizing Forms & Sealed Documentation",
      description: "Once this initial exam has been completed, we will ask patients to return to Briggs Chaney Walk-In Clinic, so that we may go over the results and any necessary recommendations. If the vaccinations are up to date and the results of the testing are negative, then we will complete all forms. Once this is done, we will also provide the necessary signatures and the sealed envelope in which all documentation may be safely put so that patients can take these to the USCIS or attending attorney.",
      bgSymbol: "✉️",
      alignRight: true
    }
  ];

  // return (
  //   <div className="immigrationLayoutContainer">
  //     {/* --- PAGE HEADER --- */}
  //     <header className="infoMainHeaderSection">
  //       <h1 className="headerMainTitle">What is the process for a Medical Immigration Exam?</h1>
  //       <p className="headerBriefSummary">
  //         At Briggs Chaney Walk-In Clinic, it is our aim to provide patient centered care that also keeps to the standards of upholding public health. We strive to put all of our visitors at ease, so that we may go over the medical records, physical examinations, and test results with thoroughness and concern, in order to present the most accurate evaluation to the USCIS and to our clients.
  //       </p>
  //     </header>

  //     {/* --- Z-SHAPE ZIGZAG STEPS GRID --- */}
  //     <main className="zigzagFlowContainer">
  //       <h2 className="flowSectionSubTitle">How to get an immigration exam</h2>
        
  //       <div className="zigzagListStack">
  //         {steps.map((item, index) => (
  //           <section 
  //             key={index} 
  //             className={`zigzagStepRow ${item.alignRight ? "reverseRowLayout" : ""}`}
  //           >
  //             {/* Content Column */}
  //             <div className="stepDetailsTextPane">
  //               <div className="numberBadgeIndicator">{item.stepNum}</div>
  //               <h3 className="stepTitleHeading">{item.title}</h3>
  //               <p className="stepNarrativeParagraph">{item.description}</p>
  //             </div>

  //             {/* Graphic/Visual Box Column */}
  //             <div className="stepVisualContainerCard">
  //               <div className="visualGraphicBackgroundBox">
  //                 <span className="graphicCentralSymbol">{item.bgSymbol}</span>
  //               </div>
  //             </div>
  //           </section>
  //         ))}
  //       </div>
  //     </main>

  //     {/* --- EMERGENCY SAFETY NOTICE FOOTER --- */}
  //     <footer className="medicalUrgencyFooterNotice">
  //       <div className="alertIconAnchor">⚠️</div>
  //       <p className="urgencyNoticeBodyText">
  //         Although we are equipped to treat minor injuries, if you are experiencing life threatening conditions such as chest pains, difficulty breathing, stroke, head trauma, severe bleeding, or loss of consciousness, immediately contact emergency services or go directly to the ER.
  //       </p>
  //     </footer>
  //   </div>
  // );
}
