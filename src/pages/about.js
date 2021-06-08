import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from '../components/SocialLinks'

import GlobalStyles from '../styles/global'
// import * as S from "../components/Post/styled"
import { MainContent } from "../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <SEO title="Sobre mim" description="Saiba um pouco mais sobre mim"/>
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Víctor Donola Ferreira, tenho 23 anos e sou morador de Angra dos Reis, RJ. 
      </p>
      <p>
        Iniciei meus estudos como Desenvolvedor Front End em 2017. Desde então venho me dedicando bastante aos estudos. Sinto e sei que estou no caminho certo, pois vejo os resultados que as horas, dias, semanas e meses de esforço me proporcionaram.
      </p>
      <p>
      	Atualmente moro com meus pais, mas em busca da minha independência. No momento, estou estudando em home office, realizando cursos ligados a área de desenvolvimento e design. Também tenho estudado além destes tópicos em busca de sempre aprender coisas novas e estar atualizado.
      </p>
      <p>
      	Meu objetivo é trabalhar na área de desenvolvimento, buscando, no momento, minha primeira experiência na área. Este é um dos meus sonhos, desde quando tive acesso à tecnologia tive essa vontade de ver e entender como funciona as coisas por trás. Para concretizar este objetivo e sonho, pretendo continuar com os estudos e sempre aprendendo coisas novas para me aperfeiçoar e ficar preparado para o mercado de trabalho.
      </p>
      <h2>Contato</h2>
      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas redes sociais.
      </p>
    </MainContent>
    <SocialLinks hideStyle />
  </Layout>
)

export default AboutPage
