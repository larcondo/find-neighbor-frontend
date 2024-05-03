import './index.css';

const Button = ({ children, onClick, ...props }) => {
  return(
    <button onClick={onClick} className='button' {...props}>
      { children }
    </button>
  );
};

export default Button;