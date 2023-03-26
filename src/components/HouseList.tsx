//data = array con casas
const HouseList = ({data}: {data: Array<{
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
}>}) => {
return (
<div>
    <ul>
{data.map((house) => (
    <li key= {house.id}>
        <h1>{house.name}</h1>
        <p>House Colours: {house.houseColours}</p>
        <p>Founder: {house.founder}</p>
        <p>Animal: {house.animal}</p>
        <p>Elements: {house.element}</p>
        <p>Ghost: {house.ghost}</p>
        <p>Common Room: {house.commonRoom}</p>
        <ul>Heads: {house.heads.map((head) => (
            <li key = {head.id}>{head.firstName} {head.lastName}</li>
        ))}</ul>
        <ul>Traits: {house.traits.map((trait) => (
            <li key = {trait.id}>{trait.name}</li>
        ))}</ul>
    </li>
))}
</ul>
</div>
)
}
export default HouseList;