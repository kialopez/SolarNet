import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useGoogleLogin, googleLogout} from '@react-oauth/google';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { getInbox, fetchEmails, fetchEmails2, fetchEmails3 } from "../hooks";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";


const Receiver = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn');
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  const [messages, setMessages] = useState([]);
  const [messages2, setMessages2] = useState([]);
  const [messages3, setMessages3] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      const access_token = localStorage.getItem('access_token');
      const labelId = 'CATEGORY_PROMOTIONS';
      const labelId2 = 'CATEGORY_SOCIAL';
      const labelId3 = 'CATEGORY_FORUMS';
      fetchEmails(access_token, labelId)
        .then(data => setMessages(data))
        .catch(error => console.error(error));
      fetchEmails2(access_token, labelId2)
        .then(data => setMessages2(data))
        .catch(error => console.error(error));
      fetchEmails3(access_token, labelId3)
        .then(data => setMessages3(data))
        .catch(error => console.error(error));

    }
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const login = useGoogleLogin({
    include_granted_scopes: true,
    scope: 'https://mail.google.com/',
    onSuccess: (response) => {
      localStorage.setItem('access_token', response.access_token);
      const access_token = localStorage.getItem('access_token');
      setIsLoggedIn(true);
    },
    onFailure: (error) => console.log(error),
  });

  useEffect(() => {
    if (isLoggedIn) {
      refreshEmails();
    }
  }, [isLoggedIn]);

  const refreshEmails = () => {
    const access_token = localStorage.getItem('access_token');
    const labelId = 'CATEGORY_PROMOTIONS';
    const labelId2 = 'CATEGORY_SOCIAL';
    const labelId3 = 'CATEGORY_FORUMS';
    fetchEmails(access_token, labelId)
      .then(data => setMessages(data))
      .catch(error => console.error(error));
    fetchEmails2(access_token, labelId2)
      .then(data => setMessages2(data))
      .catch(error => console.error(error));
    fetchEmails3(access_token, labelId3)
      .then(data => setMessages3(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    if (isLoggedIn) {
      const fetchEmailsInterval = setInterval(refreshEmails, 15000); // Refresh every 15 seconds
  
      // Clear interval on component unmount
      return () => clearInterval(fetchEmailsInterval);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      refreshEmails();
    }
  }, [isLoggedIn]);


  return (
    <>
      <div
        className={`xl:mt-2 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "", 0.2, 1)}
          className='bg-BLACK p-8 rounded-2xl border-2 border-white'
        >
          {isLoggedIn ? (
            <div>
              <p className={styles.sectionSubText}>ADMIN</p>
              <h3 className={styles.sectionHeadText}>Received Messages</h3>

            </div>
          ) : (
            <div>
              <p className={styles.sectionSubText}>Dashboard</p>
              <h3 className={styles.sectionHeadText}>Login to Admin</h3>
            </div>
          )}
          <div className='mt-10'>
          {isLoggedIn ? (
            <div className='flex flex-row justify-between items-center mt-5 gap-2'>
              <button onClick={() => {googleLogout(); localStorage.removeItem('accessToken'); setIsLoggedIn(false); setMessages([]); setMessages2([]); setMessages3([]);}} className="w-5/6 text-xl rounded-2xl text-tertiary outline-none bg-white font-bold shadow-md shadow-primary py-5 mx-auto">
                Logout
              </button>
              <button onClick={refreshEmails} className="w-2/6 text-xl rounded-2xl text-tertiary outline-none bg-white font-bold shadow-md shadow-primary py-5">
              <FontAwesomeIcon icon={faArrowsRotate} className='mx-auto' />
              </button>
            </div>
          ) : (
            <button onClick={() => login()} className="w-full text-xl rounded-2xl text-tertiary outline-none bg-white font-bold shadow-md shadow-primary py-5 mx-auto">
              <FontAwesomeIcon icon={faGoogle} className='text-2xl mr-1' /> Sign in with Google
            </button>
          )}
          </div>
          <p className="mt-5 text-white text-[22px] leading-[30px] ">CONTACT ME HERE:</p>
          <p className="mt-5 text-white text-[20px] leading-[30px]">FACEBOOK : KURT IVAN LOPEZ</p>
          <p className="mt-2 text-white text-[20px] leading-[30px]">EMAIL : lopezkurt09@gmail.com</p>
          <p className="mt-2 text-white text-[20px] leading-[30px]">PHONE : 09295923239</p>
        </motion.div>
      </div>
      <div
        className={`mt-14 flex flex-row gap-2`}
      >
          <motion.div
            variants={slideIn("left", "", 0.2, 1)}
            className='w-1/3 bg-black p-8 rounded-2xl border-2 border-white items'
            >
              <h2 className={styles.sectionHeadText1}>Messenger</h2>
              {messages2.map((message, index) => (
                <div key={index}>
                <p className="mt-2 text-black bg-white text-[17px] leading-[30px] overflow-auto border-2 border-white rounded-2xl justify">{message.content}</p>
              </div>))}
          </motion.div>
          <motion.div
            variants={slideIn("left", "", 0.2, 1)}
            className='w-1/3 bg-black p-8 rounded-2xl border-2 border-white'
            >
              <h2 className={styles.sectionHeadText1}>Email</h2>
              {messages3.map((message, index) => (
                <div key={index}>
                <p className="mt-2 text-white text-[15px] leading-[20px]">From: {message.from}</p>
                <p className="mt-2 text-white text-[15px] leading-[20px]">Subject: {message.subject}</p>
                <p className="mt-5 text-black text-[20px] leading-[30px] overflow-auto border-2 border-white rounded-2xl bg-white ">Message: {message.content}</p>
              </div>))}
          </motion.div>
          <motion.div
            variants={slideIn("left", "", 0.2, 1)}
            className='w-1/3 bg-black p-8 rounded-2xl border-2 border-white'
            >
              <h2 className={styles.sectionHeadText1}>SMS</h2>
              {messages.map((message, index) => (
                <div key={index}>
                <p className="mt-2 text-black bg-white text-[15px] leading-[35px] overflow-auto border-2 border-white rounded-2xl">{message.content}</p>
              </div>))}
          </motion.div>
        </div>
    </>
  );
};

export default SectionWrapper(Receiver, 'receiver');
