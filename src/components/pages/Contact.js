import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// function Contact() {
//   const [email, setEmail] = useState("");
//   const [userName, setUserName] = useState("");
//   const [message, setMessage] = useState("");

//   const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;
//     if (inputType === "email") {
//       setEmail(inputValue);
//     } else if (inputType === "userName") {
//       setUserName(inputValue);
//     } else {
//       setMessage(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     setUserName("");
//     setMessage("");
//     setEmail("");
//   };

//   return (
//     <div id="invoke" className="contact">
//       <div className="flex-row">
//         <h2 className="section-title secondary-border">Invoke the Spirits</h2>
//       </div>
//         <div className="contact-form">
//           <h3>Contact GhostoftheMill</h3>
//           <form className="form">
//             <label for="contact-name">Name</label>
//             <input
//               value={userName}
//               name="userName"
//               onChange={handleInputChange}
//               type="text"
//               id="contact-name"
//               placeholder="Enter Name"
//             />
//             <label for="contact-email">Email</label>
//             <input
//               value={email}
//               name="email"
//               onChange={handleInputChange}
//               type="email"
//               id="contact-email"
//               placeholder="Enter Email"
//             />
//             <label for="contact-message">Message</label>
//             <textarea
//               value={message}
//               name="message"
//               onChange={handleInputChange}
//               type="message"
//               id="contact-message"
//               placeholder="Enter Message"
//             />
//             <button type="button" onClick={handleFormSubmit}>
//               Submit
//             </button>
//           </form>
//     </div>
//   );
// }

// export default Contact;
export default function Contact() {
return (
  <div className="container text-center m-5-auto">
  <div id="contact-form" className='Contact'>
    <h2>Invoke the Spirit</h2>
    {/* <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} style={inputText}/>
    <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} style={inputText}/>
    <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)} style={inputText}></textarea>
    <button onClick={submit} style={inputSubmit}>Send Message</button> */}
    <div className='space'>
    <Form>
      <Form.Group className="mb-3" controlId="sendName">
        <Form.Control type="name" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="sendEmail">
        <Form.Control type="email" placeholder="Enter your email address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Control type="textarea" placeholder="Enter your message" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
    </div>
  </div>
  </div>
);
};