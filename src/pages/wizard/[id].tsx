import { GetServerSideProps, NextPage } from 'next'
import { WizardAPI } from '@/types'

//no funciona
type Props = {
  wizard: WizardAPI
}

const WizardDetail: NextPage<Props> = ({ wizard }) => {
  return (
    <div>
      <h1>{wizard.firstName} {wizard.lastName}</h1>
      <ul>
        {wizard.elixirs.map((elixir) => (
          <li key={elixir.id}>{elixir.name}</li>
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const id = params?.id as string
  const res = await fetch(`http://localhost:3000/api/wizard/${id}`)
  const wizard = await res.json()

  return {
    props: {
      wizard
    }
  }
}

export default WizardDetail
