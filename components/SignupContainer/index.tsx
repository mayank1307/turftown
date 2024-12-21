"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

import IconButton from "../IconButton";
import ResentPopup from "../ResentPopup";
import { headText, descText } from "@/resources/data";

import "./style.css";

const SignupContainer = () => {
  const [currentState, setCurrentState] = useState(0);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [country, setCountry] = useState("+91");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [time, setTime] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  useEffect(() => {
    if (!time) return;
    let interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const onGoogleSignup = () => {
    console.log("google signup clicked");
  };

  const onPhoneSignup = () => {
    setPhone("");
    setOtp("");
    setCurrentState(1);
  };
  const handleOtpChange = (e: any) => {
    const selectedCode = e.target.value;
    if (error) setError("");
    setOtp(selectedCode);
  };

  const handlePhoneNumberChange = (e: any) => {
    setPhone(e.target.value);
  };

  const submitPhone = () => {
    setCurrentState(2);
  };

  const submitOtp = () => {
    if (otp == "1234") {
      window.location.reload();
    } else {
      setError("Incorrect Code!");
    }
  };

  const reload = () => {
    window.location.reload();
  };

  const resendCode = (e: any) => {
    e.preventDefault();
    setTime(70);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const HeadContainer = useCallback(() => {
    return (
      <div className="textContainer">
        <h1 className={`${loading ? "skeleton" : ""}`}>
          {headText[currentState]}
          {currentState ? null : (
            <span>
              <Image src={"/icons/cool.svg"} alt={""} height={30} width={30} />
            </span>
          )}
        </h1>
        <h3 className={`${loading ? "skeleton" : ""}`}>
          {descText[currentState]}
          {currentState == 2 ? `${country} ${phone}` : ""}
        </h3>
      </div>
    );
  }, [currentState, loading]);

  const ContentContainer = useCallback(() => {
    return (
      <div className="buttonList">
        <div className={`${loading ? "skeleton" : ""}`}>
          <IconButton
            icon={"/icons/google.svg"}
            width={22}
            height={22}
            onClick={onGoogleSignup}
            text={"Login with Google"}
          />
        </div>
        <div className={`seperator ${loading ? "skeleton" : ""}`}>
          <div />
          <span>OR</span>
          <div />
        </div>
        <div className={`bottomButtons ${loading ? "skeleton" : ""}`}>
          <IconButton
            icon={"/icons/phone.svg"}
            width={15}
            height={24}
            onClick={onPhoneSignup}
            text={"Login with Phone"}
          />
          <IconButton
            icon={"/icons/mail.svg"}
            width={21}
            height={17}
            onClick={onGoogleSignup}
            text={"Login with Email"}
          />
        </div>
      </div>
    );
  }, [currentState, loading]);

  return (
    <div className="container">
      <div onClick={reload} className={`logo ${loading ? "skeleton" : ""}`}>
        <Image
          src={"/images/logo.svg"}
          alt={"turf town"}
          height={64}
          width={114}
        />
      </div>
      <div className="content">
        <HeadContainer />
        {currentState == 0 ? (
          <ContentContainer />
        ) : currentState == 1 ? (
          <div className="mobileInput">
            <div className="flexrow">
              <div className="country">
                <h5 className={"countryFlag"}>{"🇮🇳"}</h5>
                <div className="vseperator" />
                <h5 className="countryCode">{country}</h5>
              </div>

              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={handlePhoneNumberChange}
                className="input"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={submitPhone}
              disabled={phone?.length != 10 || isNaN(phone)}
              className="continueBtn"
            >
              Continue
            </button>
          </div>
        ) : (
          <div className="mobileInput">
            <div className={error ? "error otp" : "otp"}>
              <input
                type="tel"
                placeholder="Enter the 4 digit code"
                value={otp}
                className="otpInput"
                onChange={handleOtpChange}
              />
              {error ? <span className="errorText">{error}</span> : null}
            </div>
            <button
              onClick={submitOtp}
              disabled={otp?.length != 4}
              className="continueBtn"
            >
              Continue
            </button>
            <h5 className="timer">
              Didn’t get it?
              {time ? (
                <span className="counter">
                  Resend in {parseInt((time / 60).toString())}:
                  {time % 60 < 10 ? `0${time % 60}` : time % 60}
                </span>
              ) : (
                <span className="resend" onClick={resendCode}>
                  Resend Code
                </span>
              )}
            </h5>
          </div>
        )}
      </div>
      <ResentPopup showPopup={showPopup} />
    </div>
  );
};

export default SignupContainer;
