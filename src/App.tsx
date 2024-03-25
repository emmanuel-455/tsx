import Counter from "./components/Counter"
import Heading from "./components/Heading"
import { Section } from "./components/Section"
import { useState } from "react"

function App() {
  const [count, Setcount] = useState(0)
  return (
    <>
      <Heading title="Emmanuel" />
      <Section title={"diffrent title"}>8</Section>
      <Counter
        Setcount={Setcount}
      >This is {count}</Counter>
    </>
  )
}

export default App
