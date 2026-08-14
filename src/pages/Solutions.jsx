import { useParams } from 'react-router-dom'
import PageStub from '../components/PageStub'
import SolutionRolePage from '../components/SolutionRolePage'
import { SOLUTIONS_ROLES } from '../config/solutions'
import { SOLUTION_PAGES } from '../config/solutionPages'

export default function Solutions() {
  const { role } = useParams()
  const content = SOLUTION_PAGES[role]

  if (content) {
    return <SolutionRolePage {...content} />
  }

  const match = SOLUTIONS_ROLES.find((r) => r.slug === role)
  const label = match?.label ?? role

  return (
    <PageStub
      eyebrow="Solutions"
      title={label}
      intro={`Purpose-built tools and views for ${label}s in your procurement operation.`}
      taskId="FTW-010"
    />
  )
}
