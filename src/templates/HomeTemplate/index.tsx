import React from 'react'
import Layout from '../../components/Layout';
import * as S from './styles';

const HomeTemplate = () => {
  return (
    <Layout>
        <S.Wrapper>
            <S.Container>
              <S.GridLayout>
                <div className="lastPost item">
                  <img src="./img/teste.png"></img>
                  <div className="item">
                    <h1>Nome</h1>
                    <h2>Descrição</h2>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit distinctio culpa ab cumque esse, temporibus quia numquam provident suscipit dolore totam doloribus consectetur vel illum deserunt possimus et eveniet atque.</p>
                  </div>
                </div>

                <div className="postsRecents item">

                  <div className="card">
                    <img src="./img/teste.png"></img>
                    <div className="item">
                      <h1>Nome</h1>
                      <h2>Descrição</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit distinctio culpa ab cumque esse, temporibus quia numquam provident suscipit dolore totam doloribus consectetur vel illum deserunt possimus et eveniet atque.</p>
                    </div>
                  </div>

                 <div className="card">
                    <img src="./img/teste.png"></img>
                    <div className="item">
                      <h1>Nome</h1>
                      <h2>Descrição</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit distinctio culpa ab cumque esse, temporibus quia numquam provident suscipit dolore totam doloribus consectetur vel illum deserunt possimus et eveniet atque.</p>
                    </div>
                  </div>

                  <div className="card">
                    <img src="./img/teste.png"></img>
                    <div className="item">
                      <h1>Nome</h1>
                      <h2>Descrição</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit distinctio culpa ab cumque esse, temporibus quia numquam provident suscipit dolore totam doloribus consectetur vel illum deserunt possimus et eveniet atque.</p>
                    </div>
                  </div>

                </div>
              </S.GridLayout>
            </S.Container>
        </S.Wrapper>
    </Layout>
  )
}

export default HomeTemplate