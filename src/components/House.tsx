import { HouseAPI } from "@/types";
import Link from "next/link";
//div para dibujar
const HouseComponent = ({ data }: { data: HouseAPI }) => (
 <div> 
  <h1>{data.name}</h1>
  <p>{data.houseColours}</p>
  <p>{data.founder}</p>
  <p>{data.animal}</p>
  <p>{data.element}</p>
  <p>{data.ghost}</p>
  <p>{data.commonRoom}</p>
  <ul>{data.heads.map((head) => (
  <li key={head.id}> {head.firstName} {head.lastName}</li>
  ))}</ul>
  <ul>{data.traits.map((trait) => (
    <li key={trait.id}>{trait.name}</li>
  ))}</ul>
</div>
);

export default HouseComponent;