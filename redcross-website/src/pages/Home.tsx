import { useState } from "react"
import InfoCarousel from "../components/InfoCarousel"

export function Home() {
	const [count, setCount] = useState(0)
  
	return (
	  <>
		  <h2>
			About Us
		  </h2>
  <InfoCarousel interval={10000} />
		<main>
		  
		</main>
	  </>
	)
  }
  