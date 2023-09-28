import React, { useEffect, useState } from "react";
import { sticky } from "../components/Navbar";
import Typewriter from "typewriter-effect";
import contactus from "../assets/contactus.png";
import { FaTwitterSquare, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactUs = () => {
  const [iconstate, setIconstate] = useState(0);
  useEffect(() => {
    sticky();
  }, []);

  return (
    <div className="contactus_whole">
      <div className="contactus_terminal">
        <div className="typing_container">
          <div className="typing_header">
            <div className="icon_sec_terminal">
              <div className="terminal_ic terminal_icon1"></div>
              <div className="terminal_ic terminal_icon2"></div>
              <div className="terminal_ic terminal_icon3"></div>
            </div>
            <div className="zsh_sec">
              <p>zsh-100x24</p>
            </div>
          </div>
          <div className="the_typing_effect">
            <Typewriter
              options={{ cursor: "|", delay: 1 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "<b style='color:rgb(101,68,237);'> BytecodeLearners ~ %</b>&nbsp;ls</br>"
                  )
                  .typeString("home events gallery social_media contact<br/>")
                  .typeString(
                    "<b style='color:rgb(101,68,237);'> BytecodeLearners ~ %</b>&nbsp; cd contact</br>"
                  )
                  .typeString(
                    "<b style='color:rgb(101,68,237);'> BytecodeLearners ~ /contact %</b>&nbsp;ls</br>"
                  )
                  .typeString(
                    "email.sh facebook.sh instagram.sh twitter.sh<br/>"
                  )
                  .typeString(
                    "<b style='color:rgb(101,68,237);'> BytecodeLearners ~ /contact %</b>&nbsp; click icon"
                  )
                  .start();
              }}
            />
            {iconstate === 1 && (
              <Typewriter
                options={{ cursor: "_", delay: 60 }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "<b style='color:rgb(101,68,237);'> BytecodeLearners ~ /contact %</b>&nbsp; ./email.sh</br>"
                    )
                    .typeString(
                      "<a style='color:rgb(97,107,84); text-decoration: none;' href='mailto:divyanshuvermaji@gmail.com'>bytecodelearners@gmail.com</a>"
                    )
                    .start();
                }}
              />
            )}
            {iconstate === 2 && (
              <Typewriter
                options={{ cursor: "|", delay: 1 }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "<b style='color:rgb(101,68,237);'> BytecodeLearners ~ /contact %</b>&nbsp; ./facebook.sh</br>"
                    )
                    .typeString(
                      "<a style='color:rgb(97,107,84); text-decoration: none;' href='https://www.facebook.com/profile.php?id=100064008286770' target='_blank'>https://www.facebook.com/profile.php?id=100064008286770</a>"
                    )
                    .start();
                }}
              />
            )}
            {iconstate === 3 && (
              <Typewriter
                options={{ cursor: "_", delay: 1 }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "<b style='color:rgb(101,68,237);'> BytecodeLearners ~ /contact %</b>&nbsp; ./instagram.sh</br>"
                    )
                    .typeString(
                      "<a style='color:rgb(97,107,84); text-decoration: none;' href='https://instagram.com/bytecode_learners?igshid=NzZhOTFlYzFmZQ==' target='_blank'>https://instagram.com/bytecode_learners?igshid=NzZhOTFlYzFmZQ==</a>"
                    )
                    .start();
                }}
              />
            )}
            {iconstate === 4 && (
              <Typewriter
                options={{ cursor: "_", delay: 1 }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "<b style='color:rgb(101,68,237);'> BytecodeLearners ~ /contact %</b>&nbsp; ./twitter.sh</br>"
                    )
                    .typeString(
                      "<a style='color:rgb(97,107,84); text-decoration: none;' href='https://x.com/ByteCodeLearner?t=XS8sb3W463IW6U9UDXFaHA&s=08' target='_blank'>https://x.com/ByteCodeLearner?t=XS8sb3W463IW6U9UDXFaHA&s=08</a>"
                    )
                    .start();
                }}
              />
            )}

            {iconstate === 5 && (
              <Typewriter
                options={{ cursor: "_", delay: 1 }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "<b style='color:rgb(101,68,237);'> BytecodeLearners ~ /contact %</b>&nbsp; ./email.sh</br>"
                    )
                    .typeString(
                      "<a style='color:rgb(97,107,84); text-decoration: none;' href='mailto:divyanshuvermaji@gmail.com'>bytecodelearners@gmail.com</a>"
                    )
                    .start();
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="contactus_image_side">
        <img src={contactus} alt="contact" />
        <div className="contact_image_icon_side">
          <SiGmail
            className="icon"
            color="#e74c3c"
            onClick={() => {
              setIconstate(1);
            }}
          />

          <FaFacebookSquare
            className="icon"
            color="#395591"
            onClick={() => {
              setIconstate(2);
            }}
          />
          <FaInstagram
            className="icon"
            color="#8a3ab9"
            onClick={() => {
              setIconstate(3);
            }}
          />
          <FaTwitterSquare
            className="icon"
            color="#55adee"
            onClick={() => {
              setIconstate(4);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
