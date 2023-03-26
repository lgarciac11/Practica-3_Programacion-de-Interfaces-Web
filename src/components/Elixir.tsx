import { ElixirAPI } from "@/types";

const ElixirComponent = ({ data }: { data: ElixirAPI }) => (
  <div>
    <h1>{data.name}</h1>
    <p>{data.effect}</p>
    <p>{data.sideEffects}</p>
    <p>{data.characteristics}</p>
    <p>{data.time}</p>
    <p>{data.difficulty}</p>
    <ul>{data.ingredients.map((ingrendient) => (
      <li key={ingrendient.id}>{ingrendient.name}</li>
    ))}</ul>
    <ul>{data.inventors.map((inventor) => (
      <li key={inventor.id}>{inventor.firstName} {inventor.lastName}</li>
    ))}</ul>
    <p>{data.manufacturer}</p>
  </div>
);

export default ElixirComponent;