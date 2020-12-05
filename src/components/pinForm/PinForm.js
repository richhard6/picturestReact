import { useState } from "react";

const PinForm = () => {
  const [select, setSelect] = useState();

  // Ya hace el POST de lo qe tu le mandes.
  return (
    <form>
      <select onChange={(e) => setSelect(e.target.value)}>
        <option value="sdd"></option>
        <option value="e"></option>
        <option value="3"></option>
        <option value="1"></option>
      </select>
      <button type="submit">Enviar pin!</button>
    </form>
  );
};

export default PinForm;
