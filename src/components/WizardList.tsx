import Link from "next/link";

const WizardList = ({data}: {data: Array<{
  elixirs: Array<{
  id:string;
  name:string;
  }>;
  id:string;
  firstName: string;
  lastName: string;
}>}) => {
  return (
    <div>
      <h1>Wizards</h1>
      <ul>
        {data.map((wizard) => (
        <li key={wizard.id}><Link href={`/wizard/${wizard.id}`}>{wizard.firstName} {wizard.lastName}</Link></li>
        ))}
      </ul>
    </div>
  )}
  export default WizardList;