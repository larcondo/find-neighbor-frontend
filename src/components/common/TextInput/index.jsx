import './index.css';
import { MdCheck } from 'react-icons/md';

const TextInput = ({
  label,
  name,
  value,
  onChange,
  errMessage = 'Error.',
  validMessage = 'Valid',
  placeholder,
}) => {
  return(
    <div className='text-input'>
      <label htmlFor={name}>{ label }</label>
      <input
        type='text'
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete='off'
      />
      { errMessage
        ? <span className='input-error message'>
          { errMessage }
        </span>
        : <span className='input-valid message'>
          <MdCheck className='check-icon' />{ validMessage }
        </span>
      }
    </div>
  );
};

export default TextInput;