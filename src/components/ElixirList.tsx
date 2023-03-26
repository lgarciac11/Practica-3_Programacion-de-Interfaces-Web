const ElixirList = ({data}: {data: Array<{
    id: string;
    name: string;
    effect: string;
    sideEffects: string;
    characteristics: string;
    time: string;
    difficulty: string;
    ingredients: Array<{
      id:string;
      name: string;
    }>
    inventors: Array<{
      id: string;
      firstName: string;
      lastName: string;
    }>;
    manufacturer: string;
}>}) => {
  return(
    <div>
      <ul>
        {data.map((elixir) => (
          <li key = {elixir.id}>
            <h1>{elixir.name}</h1>
            <p>{elixir.effect}</p>
            <p>{elixir.sideEffects}</p>
            <p>{elixir.characteristics}</p>
            <p>{elixir.time}</p>
            <p>{elixir.difficulty}</p>
            <ul>{elixir.ingredients.map((ingrendient) => (
              <li key={ingrendient.id}>{ingrendient.name}</li>
            ))}</ul>
            <ul>{elixir.inventors.map((inventor) => (
              <li key={inventor.id}>{inventor.firstName} {inventor.lastName}</li>
            ))}</ul>
            <p>{elixir.manufacturer}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ElixirList;