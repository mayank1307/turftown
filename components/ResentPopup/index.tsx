import React from "react";

const ResentPopup = ({ showPopup }: any) => {
  return (
    <div>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#222222",
            padding: "12px 24px",
            borderRadius: "30px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            animation: "slide-up 0.5s ease",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              marginRight: "14px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            <img
              src="/icons/resent.svg"
              width={28}
              height={28}
              style={{ backgroundColor: "#0000" }}
            />
          </div>
          Code resent
        </div>
      )}
      <style>
        {`
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ResentPopup;
