import { useParams } from 'react-router-dom'
import PageStub from '../components/PageStub'

const titles = {
  privacy: 'Privacy Notice',
  terms: 'Terms of Service',
  refunds: 'Refund & Cancellation Policy',
  grievance: 'Grievance Officer',
}

export default function Legal() {
  const { page } = useParams()
  return (
    <PageStub
      taskId="MKT-FR-8"
      eyebrow="Legal — outline only, not final legal text"
      title={titles[page] ?? 'Privacy Notice'}
    />
  )
}
