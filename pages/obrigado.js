import Head from 'next/head'

import Header from '../components/header'
import FooterSection from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Obrigado! | Cuiabá Cebrac</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Primary Meta Tags */}
        <title>Cebrac Unidade de Cuiabá</title>
        <meta name="title" content="Cebrac Unidade de Cuiabá" />
        <meta name="description" content="Cursos Unidade Cuiabá. Prepare-se para o mercado de trabalho com os melhores cursos profissionalizantes do Brasil em 7 áreas de atuação!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://http://cuiabacebrac.com.br/" />
        <meta property="og:title" content="Cebrac Unidade de Cuiabá" />
        <meta property="og:description" content="Cursos Unidade Cuiabá. Prepare-se para o mercado de trabalho com os melhores cursos profissionalizantes do Brasil em 7 áreas de atuação!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/thiagosullivan/cuiaba-cebrac/main/assets/cebrac-img-metatag.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://http://cuiabacebrac.com.br/" />
        <meta property="twitter:title" content="Cebrac Unidade de Cuiabá" />
        <meta property="twitter:description" content="Cursos Unidade Cuiabá. Prepare-se para o mercado de trabalho com os melhores cursos profissionalizantes do Brasil em 7 áreas de atuação!" />
        <meta property="twitter:image" content="https://raw.githubusercontent.com/thiagosullivan/cuiaba-cebrac/main/assets/cebrac-img-metatag.jpg"></meta>
      </Head>

      <Header />
      <main>
        <h1>Obrigado!</h1>
      </main>

      <FooterSection />
    </div>
  )
}
