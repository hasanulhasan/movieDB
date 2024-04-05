"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import Image from "next/image";
import CrossMark from "../assets/xmark.svg";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="relative shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-4 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
    >
      <span
        onClick={onHide}
        className=" absolute top-0 left-0 bg-white rounded-lg cursor-pointer"
      >
        <Image src={CrossMark} alt="close" width={30} height={30} />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
