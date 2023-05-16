"use client";

import { MdArrowRight, MdArrowDropDown } from "react-icons/md";
import useLoginInput from "../../hooks/useLoginInput";
import useRegisterInput from "../../hooks/useRegisterInput";
import useLocationModal from "../../hooks/useLocationModal";

export default function Input({
  id,
  disabled,
  type,
  formatPrice,
  label,
  outline,
  location,
}) {
  const locationModal = useLocationModal();
  const loginInput = useLoginInput();
  const registerInput = useRegisterInput();
  const handleChangeInput = (e) => {
    switch (id) {
      case "registerEmail":
        registerInput.setEmail(e.target.value);
        break;
      case "registerNickname":
        registerInput.setNickname(e.target.value);
        break;
      case "registerPassword":
        registerInput.setPassword(e.target.value);
        break;
      case "locationId":
        registerInput.setLocationId(e.target.value);
        break;
      case "registerConfirmPassword":
        registerInput.setConfirmPassword(e.target.value);
        break;
      case "loginEmail":
        loginInput.setEmail(e.target.value);
        break;
      case "loginPassword":
        loginInput.setPassword(e.target.value);
        break;
    }
  };

  return (
    <>
      <div className="w-[400px] relative">
        {formatPrice && (
          <BiDollar
            size={24}
            className="text-neutral-700 absolute top-5 left-2"
          />
        )}
        <input
          onChange={handleChangeInput}
          id={id}
          disabled={disabled}
          placeholder=" "
          type={type}
          className={`peer w-full p-4 pt-6 font-light bt-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
          ${formatPrice ? "pl-9" : "pl-4"}
          ${outline && "border-black"}
          ${outline && "border-2"}
        `}
        />
        <label
          className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] 
          ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
      `}
        >
          {label}
        </label>
        {id === "locationId" && location && !locationModal.isOpen && (
          <>
            <div
              onClick={() => locationModal.onOpen()}
              className="absolute right-4 top-5"
            >
              <MdArrowRight size={28} />
            </div>
          </>
        )}
        {id === "locationId" && location && locationModal.isOpen && (
          <>
            <div
              onClick={() => locationModal.onClose()}
              className="absolute right-4 top-5"
            >
              <MdArrowDropDown size={28} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
