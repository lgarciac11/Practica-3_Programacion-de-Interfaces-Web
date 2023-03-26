import HouseList from "@/components/HouseList";
import { HouseAPI } from "@/types";
import { GetServerSideProps } from "next";

//Houses
export const getServerSideProps = async () => {
const props: Array<{
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: Array<{
      id: string;
      firstName: string;
      lastName: string;
  }>;
  traits: Array<
    {
      id: string;
      name: string;
    }>;
}> = [];
  try {
    const res = await fetch("https://wizard-world-api.herokuapp.com/Houses");
    const data: HouseAPI[] = await res.json();
    console.log({data})
    props.push(
      ...data.map((house) => {
        const name = house.name;
        const houseColours = house.houseColours;
        const founder = house.founder;
        const animal = house.animal;
        const element = house.element;
        const ghost = house.ghost;
        const commonRoom = house.commonRoom;
        const heads = house.heads;
        const traits = house.traits;
        const id = house.id;
        return { name, houseColours, founder, animal, element, ghost, commonRoom, heads, traits, id };
      })
    );
    } catch(error) {
      console.log(error);
    }
    return {
      props : {
        data: props,
      }
    }
};
type Housesprops = {data:Array<{
    id: string;
    name: string;
    houseColours: string;
    founder: string;
    animal: string;
    element: string;
    ghost: string;
    commonRoom: string;
    heads: Array<{
        id: string;
        firstName: string;
        lastName: string;
    }>;
    traits: Array<
      {
        id: string;
        name: string;
      }>;
}>;
};
export default function Houses(props: Housesprops) {
  return <HouseList data = {props.data}></HouseList>;
}

