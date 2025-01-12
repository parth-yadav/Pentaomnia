import RulesContent from './rules-content'

export const metadata = {
  title: 'Hackathon Rules | YourHackathonName',
  description: 'Official rules and guidelines for participating in our hackathon.',
}

export default function RulesPage() {
  return (
    <main className="min-h-screen bg-black">
      <RulesContent />
    </main>
  )
}

