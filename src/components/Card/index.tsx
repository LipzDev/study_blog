import React from 'react'
import * as S from './styles'

type CardProps = {
  large?: boolean;
}

const Card = ({large}: CardProps) => {
  return (
    large ? (
      <S.LargeCard>
          <img src="./img/teste.png"></img>
          <h1>Nome</h1>
          <h2>Descrição</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit distinctio culpa ab cumque esse, temporibus quia numquam provident suscipit dolore totam doloribus consectetur vel illum deserunt possimus et eveniet atque. 1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit distinctio culpa ab cumque esse, temporibus quia numquam provident suscipit dolore totam doloribus consectetur vel illum deserunt possimus et eveniet atque. 1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit distinctio culpa ab cumque esse, temporibus quia numquam provident suscipit dolore totam doloribus consectetur vel illum deserunt possimus et eveniet atque. 1</p>
      </S.LargeCard>   
  ) : (
    <S.SmallCard>
        <img src="./img/teste.png"></img>
        <h1>Nome</h1>
        <h2>Descrição</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 2</p>
    </S.SmallCard>
    )
  )
}

export default Card
