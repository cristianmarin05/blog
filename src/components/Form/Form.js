import React, { useState } from "react";
import "./Form.scss";

export default function Form(props) {
  const {dark} = props;
  const [sub, setSub] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    textarea: "",
  });

  const [fullForm, setFullForm] = useState("");
  const [submit, setSubmit] = useState(false);
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if(data.name && data.email  && data.textarea ){
      setFullForm("¡Gracias por contactarme!")
      setSub(true)
      const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("https://blogservercm.herokuapp.com/mail", params);
      const dataform = await response.json();
      setSub(false)
      reset();
    }else{
      setFullForm("¡Todos los campos son obligatorios!")

    }
    setSubmit(true);
    setTimeout(()=>{
      setSubmit(false)
    },2000)
  };

  const reset = () => {
    setData({
      name: "",
      email: "",
      textarea: "",
    });

  };

  return (
    <div className={`form ${dark}`}>
      <div className={`form__p ${dark}`}>
        <p>¡Trabajemos juntos!</p>
            {submit ? (fullForm == "¡Todos los campos son obligatorios!" ? <p className={`form__p-danger ${dark}`}>{fullForm}</p> : <p>{fullForm}</p>) : null}
          {sub && <p className={`form__p ${dark}`}>Enviando...</p>}
      </div>
      <div className="form__contact">
        <form onChange={onChange} onSubmit={onSubmit}>
          <div className="form__labels">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={data.name} />
          </div>
          <div className="form__labels">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={data.email} />
          </div>
          <div className="form__labels">
            <label htmlFor="textarea">Comentarios:</label>

            <textarea id="textarea" name="textarea" value={data.textarea} />
          </div>
          <div className="form__button">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
