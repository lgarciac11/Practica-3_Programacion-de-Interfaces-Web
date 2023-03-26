import ElixirList from "@/components/ElixirList";
import { ElixirAPI } from "@/types";
import { GetServerSideProps } from "next";

export const getServerSideProps = async () => {
    const props: Array<{
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
        }>;
        inventors: Array<{
            id: string;
            firstName: string;
            lastName: string;
        }>;
        manufacturer: string;
    }> = [];

    try {
        const res = await fetch("https://wizard-world-api.herokuapp.com/Elixirs");
        const data: ElixirAPI[] = await res.json();
        console.log({data})
        props.push(
            ...data.map((elixir) => {
                const name = elixir.name;
                const effect = elixir.effect;
                const sideEffects = elixir.sideEffects;
                const characteristics = elixir.characteristics;
                const time = elixir.time;
                const difficulty = elixir.difficulty;
                const ingredients = elixir.ingredients;
                const inventors = elixir.inventors;
                const manufacturer = elixir.manufacturer;
                const id = elixir.id;
                return {name, effect, sideEffects, characteristics, time, difficulty, ingredients, inventors, manufacturer, id};
            })
        );

        } catch(error) {
        console.log(error);
    }
    return {
        props: {
            data: props,
        }
    }
};

type ElixirsProps = {data:Array<{
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
    }>;
    inventors: Array<{
        id: string;
        firstName: string;
        lastName: string;
    }>;
    manufacturer: string;
}>;
};

export default function Elixirs(props: ElixirsProps) {
    return <ElixirList data = {props.data}></ElixirList>
}