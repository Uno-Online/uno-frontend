import { Card } from "../components/card/card"
import { CardColor, CardText } from "../constants";

export function Home() {
  return(
    <div>
      <Card color={CardColor.Red} text={CardText.Zero} />
      <Card color={CardColor.Blue} text={CardText.One} />
      <Card color={CardColor.Green} text={CardText.Two} />
      <Card color={CardColor.Red} text={CardText.Three} />
      <Card color={CardColor.Yellow} text={CardText.Four} />
      <Card color={CardColor.Red} text={CardText.Five} />
      <Card color={CardColor.Red} text={CardText.Six} />
      <Card color={CardColor.Red} text={CardText.Seven} />
      <Card color={CardColor.Red} text={CardText.Eight} />
      <Card color={CardColor.Red} text={CardText.Nine} />
      <Card color={CardColor.Black} text={CardText.PlusTwo}/>
      <Card color={CardColor.Black} text={CardText.PlusFour}/>
    </div>

  )
}
