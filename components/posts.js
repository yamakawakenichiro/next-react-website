import styles from "styles/posts.module.css"
import Link from "next/link"
import Image from "next/image"
import { eyecatchLocal } from "lib/constants"

export default function Posts({ posts }) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                src={eyecatch.url}
                alt=""
                fill
                style={{
                  objectFit: "cover",
                }}
                sizes="(min-width:1152px)576px,50VW"
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}
