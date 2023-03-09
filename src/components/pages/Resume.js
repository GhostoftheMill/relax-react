import React from 'react';
const resume = "../public/Resume.pdf";

export default function Resume() {
  return (
    <div className="container text-center m-5-auto">
        <h3>Obituary of</h3>
        <h2>GhostoftheMill</h2>
        <button className="button">
        <a className="button" href={resume} download>Download Resume</a>
        </button>
    </div>
  );
}
