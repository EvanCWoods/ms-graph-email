"use client";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

interface IProps {
  redirectUrl: string;
}

/**
 * CheckAnimation component.
 *
 * @param redirectUrl - The URL to redirect to after animation completion.
 * @returns A React component that renders a Lottie animation and redirects to the specified URL after completion.
 */
const CheckAnimation: React.FC<IProps> = ({ redirectUrl }) => {
  return (
    <Player
      src={
        "https://lottie.host/26ba3674-a171-44dd-9150-1be76d0b4e19/I92iitK5mE.json"
      }
      autoplay
      speed={1}
      onEvent={(event: string) => {
        console.log(event);
        if (event == "complete") {
          // Redirect to the dashboard
          window.location.replace(redirectUrl);
        }
      }}
      style={{ height: 300, width: 300 }}
    />
  );
};

export default CheckAnimation;
