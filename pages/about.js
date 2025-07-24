import Container from "components/container"
import Hero from "components/hero"
import PostBody from "components/post-body"
import Contact from "components/contact"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "components/two-column"
import Image from "next/image"
import eyecatch from "images/about.jpg"
import Meta from "components/meta"

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="アバウト！"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="About development activities" />
      <figure>
        <Image src={eyecatch} alt="" layout="responsive" sizes="(min-width:1152px)1152px,100vw" priority />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h1>タグに直接</h1>
            <p>
              タグに直接 className を付けると確実にスタイルを適用できる Container コンポーネントが section や article
              などに変えてもOK（意味論的に） もし Container の中で children
              にスタイルがうまく継承されないなら、CSS構成やレイアウト構造を少し見直す必要があるかも コードの構成か
              CSSファイルの内容をもう少し教えてくれれば、もっとピンポイントにアドバイスできるよ 😄
              pタグでボックスから文字がはみ出てしまう。
              文字がボックスからはみ出す原因は、長い単語や連続した文字列が改行されないことが多いです。特に英語や数字がスペースなしで続いていると、CSSが「どこで折り返せばいいか分からない」状態になります
            </p>
            <p>そして、</p>
            <h2>like</h2>
            <h2>linke</h2>
            <p>そして、</p>
            <p>
              タグに直接 className を付けると確実にスタイルを適用できる Container コンポーネントが section や article
              などに変えてもOK（意味論的に） もし Container の中で children
              にスタイルがうまく継承されないなら、CSS構成やレイアウト構造を少し見直す必要があるかも コードの構成か
              CSSファイルの内容をもう少し教えてくれれば、もっとピンポイントにアドバイスできるよ 😄
              pタグでボックスから文字がはみ出てしまう。
              文字がボックスからはみ出す原因は、長い単語や連続した文字列が改行されないことが多いです。特に英語や数字がスペースなしで続いていると、CSSが「どこで折り返せばいいか分からない」状態になります
            </p>
            <p>
              タグに直接 className を付けると確実にスタイルを適用できる Container コンポーネントが section や article
              などに変えてもOK（意味論的に） もし Container の中で children
              にスタイルがうまく継承されないなら、CSS構成やレイアウト構造を少し見直す必要があるかも コードの構成か
              CSSファイルの内容をもう少し教えてくれれば、もっとピンポイントにアドバイスできるよ 😄
              pタグでボックスから文字がはみ出てしまう。
              文字がボックスからはみ出す原因は、長い単語や連続した文字列が改行されないことが多いです。特に英語や数字がスペースなしで続いていると、CSSが「どこで折り返せばいいか分からない」状態になります
            </p>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}
