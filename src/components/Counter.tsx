import { ReactNode } from "react"

type CounterProps = {
  Setcount: React.Dispatch<React.SetStateAction<number>>,
  children: ReactNode
}

const Counter = ({children, Setcount}:CounterProps) => {
  
  return (
    <div>
      {children}
      <button onClick={() => {
        Setcount(prev => prev + 1)
      }}>+</button>
      <button onClick={() => {
        Setcount(prev => prev - 1)
      }}>-</button>
    </div>
  )
}

export default Counter
