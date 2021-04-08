import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from '../components/SocialLinks'

import GlobalStyles from '../styles/global'

const AboutPage = () => (
  <Layout>
    <SEO title="Sobre mim" description="Saiba um pouco mais sobre mim"/>
    <GlobalStyles>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Víctor Donola Ferreira, nasci em Carangola/MG e sou desenvolvedor FrontEnd. Sou apaixonado por qualquer assunto que envolva ciência e tecnologia. 
      </p>
      <p>
        Este é o meu novo blog, onde pretendo postar sobre tudo o que estiver na minha mente, bem como coisas nas quais estou trabalhando. No meu tempo livre, gosto de conversar com meus amigos sobre alguma coisa que aprendi, acho que por isso nasceu esse blog. 
      </p>
      <p>
        Se você não é da área, você também é muito bem vindo. Tudo aqui é descomplicada e acessível.
      </p>
      <h2>Contato</h2>
      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas redes sociais.
      </p>
    </GlobalStyles>
    <SocialLinks hideStyle />
  </Layout>
)

export default AboutPage
