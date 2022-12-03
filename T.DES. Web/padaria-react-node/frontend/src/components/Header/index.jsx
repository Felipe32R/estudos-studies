
import { useEffect } from "react"
import { Btn } from "../Btn"
import { Container } from "./styles"

const HomeItems = [
  {
    id: 2,
    title: 'Home',
  },
  {
    id: 1,
    title: 'Products',
  },
]

export  function Header({page, setPage}) {

  return (

    <Container>
      {HomeItems.map((item) => (
          <Btn
            key={item.id}
            onClick={() => setPage(item.title)}
          >
            {item.title}
          </Btn>
        ))}
    </Container>
  )
}
