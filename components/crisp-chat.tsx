"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("33cd9c28-4ae4-4444-ae00-83d99c7a50a5");
  }, []);

  return null;
};
