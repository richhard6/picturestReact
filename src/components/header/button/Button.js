const Button = (name, onClick) => {
  //name home y onclick={() => history.push("/")}
  return (
    <div className="custom_button" onClick={onClick}>
      <p>{name}</p>
    </div>
  );
};

export default Button;
