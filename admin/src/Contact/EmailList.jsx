
import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/email/"
        );
        setEmails(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEmails();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/email/${id}`);
      console.log(res.data.message);
      setEmails(emails.filter((email) => email._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Check New Emails ...</h3>
      <Wrapper>
      <h3>Email List</h3>
      <EmailContainer>
      {emails.map((email) => (
        <EmailItem key={email._id} className="email-item">
        <p>First Name: {email.fname}</p>
        <p>Last Name: {email.lname}</p>
        <p>From: {email.from}</p>
        <p>phone number: {email.phone}</p>
        <p>Message: {email.text}</p>
        <DeleteButton onClick={() => handleDelete(email._id)}>Delete</DeleteButton>
      </EmailItem>
      
      ))}
        
      </EmailContainer>
    </Wrapper>
    </div>
  );
};

export default EmailList;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const EmailItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  width: 300px;
`;


const DeleteButton = styled.button`
  background-color: #dc3545;
  border-color: #dc3545;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
    border-color: #bd2130;
  }
`;
