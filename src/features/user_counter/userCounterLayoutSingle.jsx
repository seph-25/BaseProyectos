import { useState } from "react";
import { USER_COUNTER_NUMBERS } from "./consts/consts.number";

export function UserCounterLayoutSingle() {
  const [students, setStudents] = useState([])
  const [name, setName ] = useState("")

  function handleSubmit (event) {
    event.preventDefault()
    setStudents([...students,name])
    setName("")
  }

  function handleChange (event) {
    setName(event.target.value)
  }
  function handleRemove (indexToRemove) {
    setStudents(students.filter((student, index) => index !== indexToRemove))
  }

  return (
    <>
      <section>
        <h2>Registre los estudiantes: </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="input-student-name">Nombre: </label>
          <input 
            type="text"
            id="input-student-name"
            value={name}
            onChange={handleChange}
            placeholder="Fulanito"
            required
          />
          <br />
          <button 
            type="submit"
            disabled={students.length >= 5}
          >
            Agregar
          </button>
        </form>
      </section>

      <section>
        <h2>Cupos disponibles:</h2>
        <p>{USER_COUNTER_NUMBERS.MAX_COUNT - students.length}</p>
      </section>

      <section>
        <h2>Mostrar estudiantes</h2>
        {students.map((value,index) => <button onClick={() => handleRemove(index)} key={index}>{value}</button>)} 
      </section>
      <br />
    </>
  );
}
