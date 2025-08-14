"use client";
import React, { useState } from "react";
import GitHubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import LeetCodeIcon from "../../public/leetcode-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSONdata
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div
        className="rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(ellipse at center, rgb(30 58 138) 0%, transparent 100%)"
        }}
      ></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I am currently looking for new opportunities, my inbox is always open. Whether you have questions or just want to say hi, I'll try
          my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"github.com/AndreP04"}>
            <Image src={GitHubIcon} alt="Github Icon" className="w" width={50} height={50} />
          </Link>
          <Link href={"github.com/AndreP04"}>
            <Image src={LinkedInIcon} alt="LinkedIn Icon" width={50} height={50} />
          </Link>
          <Link href={"github.com/AndreP04"}>
            <Image src={LeetCodeIcon} alt="LeetCode Icon" width={50} height={50} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your email address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="email@google.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Lets talk about..."
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send the message
          </button>
          {emailSubmitted && <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
