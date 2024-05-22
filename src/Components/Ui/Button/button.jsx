import "./button.css"

const Button = ({clickHandler, innerText}) => {   


  return (
    <div className="button">
      <button onClick={clickHandler}>{innerText}</button>
    </div>
  );
}

export default Button;
