"use client";

export default function Input({
  id,
  disabled,
  type,
  formatPrice,
  errors,
  label,
  outline,
  register,
  required
}) {
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
          id={id}
          disabled={disabled}
          // {register(id, { required })}
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
      </div>
    </>
  );
}
