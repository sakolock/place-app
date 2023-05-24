import { classNames } from '../../utils/index';

export const INPUTS = {
  textarea: 'textarea',
  text: 'text',
  password: 'password',
  email: 'email',
}

export const Input = (props) => {
  const {
    label,
    type = 'text',
    reverse,
  } = props;
  const baseClasses = 'block bg-transparent p-2 my-5 border border-blue-300 rounded-md w-full';
  const reverseClasses = 'border-white placeholder:text-white text-white';

  if (type === INPUTS.textarea) {
    return (
      <textarea
        {...props}
        className={classNames(baseClasses, reverse && reverseClasses)}
        placeholder={label}
        aria-label={label}
      ></textarea>
    );
  }

  return (
    <input
      {...props}
      type={type}
      placeholder={label}
      className={classNames(baseClasses, reverse && reverseClasses)}
      aria-label={label}
    />
  );
};
