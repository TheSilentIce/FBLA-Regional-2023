import { useState } from "react"
import InfoCarousel from "../components/InfoCarousel"
import GalaPromotion from "../components/GalaPromotion"
import RedCrossBanner from "../components/RedCrossBanner"
export function Home() {
	return (
	  <>
	  	<RedCrossBanner></RedCrossBanner>
		  <h2>
			About Us
		  </h2>
  <InfoCarousel interval={10000} />
		<main>
		  <>
		  <GalaPromotion></GalaPromotion>
		  </>
		</main>
	  </>
	)
  }
  