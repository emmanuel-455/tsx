import { ReactElement } from "react";

type headingprops = {
  title: string,

}

function Heading({title}: headingprops): ReactElement {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Heading
