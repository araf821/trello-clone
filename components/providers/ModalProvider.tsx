"use client";

import React, { useEffect, useState } from "react";
import CardModal from "../modals/CardModal";
import ProModal from "../modals/ProModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CardModal />
      <ProModal />
    </>
  );
};

export default ModalProvider;
