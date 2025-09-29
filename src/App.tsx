import {useState, type FormEvent } from "react";

const App = () => {

  const [username, setUsername] = useState("")
  const [color, setColor] = useState("")
  const [accept, setAccept] = useState(false)

  const [touched, setTouched] = useState({
    username: false,
    color: false,
    accept: false
  })

  // inicio forma manual
  // type Filed = "username" | "color" | "accept"  

  // const handelBlur = (field: Filed) => {

  // }
  // fin forma manual

  // inicio forma dinamica

  const handelBlur = (field: keyof typeof touched) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true
    }));
  };

  // fin forma dinaminca

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setTouched({
      username: true,
      color: true,
      accept: true
    })

    if(username.length >= 3 && color !== "" && accept){
      alert("envoiando validacion ")
    }
  };

  return (
    <div className="container mx-auto">
      <h1>App</h1>
      <form
        onSubmit={handleSubmit}
       
      >
        <div className="mb-3">
          <input
          type="text"
          placeholder="Your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className={`form-control ${
            touched.username && (
              username.length >= 3 ? "is-valid" : "is-invalid"
            )
          }`}
          onBlur={() => handelBlur("username")}
        />
        <div className="invalid-feedback">el texto es obligatorio</div>
        </div>

        <div className="mb-3">
          <select 
            value={color}
            onChange={e => setColor(e.target.value)}
            onBlur={() => handelBlur("color")}
            className={
              `form-control ${
              touched.color && (
              color !== "" ? "is-valid" : "is-invalid"
            )
          }`}
            >
            <option
              value=""
              disabled
            >
              Seleccione color
            </option>
            <option value="red">Rojo</option>
            <option value="blue">Azul</option>
            <option value="green">Verde</option>
          </select>
        <div className="invalid-feedback">el color es obligatorio</div>
        </div>


        <div className="form-check">
          
          <input
            type="checkbox"
            checked = {accept}
            onChange={e => setAccept(e.target.checked)}
            onBlur={() => handelBlur("accept")}
            className={
              `form-check-input ${
              touched.accept && (
              accept ? "is-valid" : "is-invalid"
            )
          }`}
            />
          <label className="form-check-label">
            Acepta los terminos
          </label>
        <div className="invalid-feedback">Tienes que aceptar los terminos</div>

        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};
export default App;