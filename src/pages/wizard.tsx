import WizardList from "@/components/WizardList";
import { WizardAPI } from "@/types";
import { GetServerSideProps } from "next";

//Wizards
export const getServerSideProps = async () => {
const props: Array<{
  elixirs: Array<{
    id: string;
    name: string;
}>;
  id: string;
  firstName: string;
  lastName: string;
}> = [];
  try {
    const res = await fetch("https://wizard-world-api.herokuapp.com/Wizards");
    const data: WizardAPI[] = await res.json();
    console.log({data})
    props.push(
      ...data.map((wizard) => {
        const elixirs = wizard.elixirs;
        const id = wizard.id;
        const firstName = wizard.firstName;
        const lastName = wizard.lastName;
        return { elixirs, id, firstName, lastName};
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
type Wizardsprops = {data:Array<{
  elixirs: Array<{
    id: string;
    name: string;
}>;
  id: string;
  firstName: string;
  lastName: string;
}>;
};
export default function Houses(props: Wizardsprops) {
  return <WizardList data = {props.data}></WizardList>;
}

