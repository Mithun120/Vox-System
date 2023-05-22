// import React, { useState } from "react";
// import axios from "axios";

// const EmailSender = () => {
//   const [formData, setFormData] = useState({
//     fname:"",
//     lname:"",
//     from: "",
//     phone:"",
//     subject: "",
//     text: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log(formData);
//       const res = await axios.post(
//         "http://localhost:4000/api/email/",
//         formData
//       );
//       console.log(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ backgroundColor: "#f8f8f8", padding: "20px" }}>
//       <div style={{ marginBottom: "10px" }}>
//         <label htmlFor="fname">FirstName:</label>
//         <input
//           type="text"
//           name="fname"
//           id="fname"
//           value={formData.fname}
//           onChange={handleChange}
//           required
//           style={{ marginLeft: "10px", padding: "5px", borderRadius: "5px", border: "none" }}
//         />
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <label htmlFor="lname">LastName:</label>
//         <input
//           type="text"
//           name="lname"
//           id="lname"
//           value={formData.lname}
//           onChange={handleChange}
//           required
//           style={{ marginLeft: "10px", padding: "5px", borderRadius: "5px", border: "none" }}
//         />
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <label htmlFor="from">From:</label>
//         <input
//           type="email"
//           name="from"
//           id="from"
//           value={formData.from}
//           onChange={handleChange}
//           required
//           style={{ marginLeft: "34px", padding: "5px", borderRadius: "5px", border: "none" }}
//         />
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <label htmlFor="phone">phone:</label>
//         <input
//           type="text"
//           name="phone"
//           id="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           style={{ marginLeft: "10px", padding: "5px", borderRadius: "5px", border: "none" }}
//         />
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <label htmlFor="text">Message:</label>
//         <textarea
//           name="text"
//           id="text"
//           value={formData.text}
//           onChange={handleChange}
//           required
//           style={{ marginLeft: "15px", padding: "5px", borderRadius: "5px", border: "none" }}
//         />
//       </div>
//       <button type="submit" style={{ marginLeft: "15px", padding: "5px 10px", borderRadius: "5px", border: "none", backgroundColor: "#4CAF50", color: "white" }}>Send</button>
//     </form>
//   );
// };

// export default EmailSender;
import React, { useState } from "react";
import axios from "axios";

const EmailSender = () => {
  const [formData, setFormData] = useState({
    fname:"",
    lname:"",
    from: "",
    phone:"",
    subject: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const res = await axios.post(
        "http://localhost:4000/api/email/",
        formData
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: "#f8f8f8", padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "14px" }}>
      <h4>Send Email</h4>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fname" style={{ display: "block", marginBottom: "5px" }}>First Name:</label>
        <input
          type="text"
          name="fname"
          id="fname"
          value={formData.fname}
          onChange={handleChange}
          required
          style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="lname" style={{ display: "block", marginBottom: "5px" }}>Last Name:</label>
        <input
          type="text"
          name="lname"
          id="lname"
          value={formData.lname}
          onChange={handleChange}
          required
          style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="from" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
        <input
          type="email"
          name="from"
          id="from"
          value={formData.from}
          onChange={handleChange}
          required
          style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="phone" style={{ display: "block",marginBottom: "5px" }}>Phone Number:</label>
<input
type="tel"
name="phone"
id="phone"
value={formData.phone}
onChange={handleChange}
required
style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }}
/>
</div>
<div style={{ marginBottom: "10px" }}>
<label htmlFor="subject" style={{ display: "block", marginBottom: "5px" }}>Subject:</label>
<input
type="text"
name="subject"
id="subject"
value={formData.subject}
onChange={handleChange}
required
style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }}
/>
</div>
<div style={{ marginBottom: "20px" }}>
<label htmlFor="text" style={{ display: "block", marginBottom: "5px" }}>Message:</label>
<textarea
name="text"
id="text"
value={formData.text}
onChange={handleChange}
required
style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", width: "100%", minHeight: "150px" }}
></textarea>
</div>
<div style={{ textAlign: "center" }}>
<button type="submit" style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "#008CBA", color: "white", border: "none", cursor: "pointer" }}>Send Email</button>
</div>
</form>
);
};

export default EmailSender;
