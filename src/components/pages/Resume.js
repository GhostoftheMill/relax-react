import React from 'react';
const resume = "resume file";

export default function Resume() {
  return (
    <div>
        <h3>Works & Deeds of</h3>
        <h2>GhostoftheMill</h2>
        <button className="button">
        <a className="button" href={resume} download>Download Resume</a>
        </button>
    </div>
  );
}
