import { classNames } from'../../utils/index';

export default function Button({children, onClick, className, reverse, type = 'button'}) {
  return (
    <button
      className={classNames(
        "block py-2 px-5 rounded-md opacity-80 hover:opacity-100 transition-all bg-blue-600 text-white",
        reverse && "bg-transparent underline px-0 text-blue-600"
      )}
      type={type}
      onClick={onClick}>{children}
    </button>
  )
}
