import React from 'react'
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import * as S from './styles';

const HomeTemplate = () => {
  return (
    <Layout>
        <S.Wrapper>
            <S.Container>
              <S.GridLayout>

                <S.FeaturedPost>
                  <Card large={true}/>
                  <Card large={true}/>
                </S.FeaturedPost>

                <S.RecentPosts>
                  <Card />
                  <Card />
                  <Card />
                </S.RecentPosts>

              </S.GridLayout>
            </S.Container>
        </S.Wrapper>
    </Layout>
  )
}

export default HomeTemplate