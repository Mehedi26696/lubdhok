import { ArrowUpRight } from 'lucide-react'

export default function CardArrow() {
  return (
    <span className="card-arrow" aria-hidden="true">
      <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
    </span>
  )
}
