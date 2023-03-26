import { WizardAPI } from "@/types";
import Link from "next/link";

const WizardComponent = ({ data }: { data: WizardAPI }) => (
  <div>
    <Link href="/">Back</Link>
    <ul>{data.elixirs.map((elixir) => (
  <li key={elixir.id}> {elixir.name}</li>
  ))}</ul>
  <h1>{data.firstName}</h1>
  <p>{data.lastName}</p>
</div>
);

export default WizardComponent;