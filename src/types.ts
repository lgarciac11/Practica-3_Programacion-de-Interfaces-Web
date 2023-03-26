export type HouseAPI = {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: WizardAPI[];
  traits: [
    {
      id: string;
      name: string;
    }
  ]
};
  
export type WizardAPI = {
  elixirs: ElixirAPI[]
  id: string;
  firstName: string;
  lastName: string;
};

export type ElixirAPI = {
  id: string;
  name: string;
  effect: string;
  sideEffects: string;
  characteristics: string;
  time: string;
  difficulty: string;
  ingredients: [
    {
      id:string;
      name: string;
    }
  ];
  inventors: WizardAPI[];
  manufacturer: string;
};