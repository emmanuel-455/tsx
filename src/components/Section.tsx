import { ReactNode } from "react"

type sectionProps = {
  title: string,
  children: ReactNode
}
export function Section({ children, title = "This is my heading"}: sectionProps) {
  return (
    <div><h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}