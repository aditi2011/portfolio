import React from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import "./HeroParallax.css"

export function HeroParallax({ products }) {
  const ref = React.useRef(null)
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, mass: 1 }

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig)
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig)
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig)

  return (
    <div ref={ref} className="hero-parallax">
      <Header />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }} className="hero-stage">
        <motion.div className="row row-reverse">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>

        <motion.div className="row">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>

        {/* <motion.div className="row row-reverse">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div> */}
      </motion.div>
    </div>
  )
}

function Header() {
  return (
    <div className="hero-header">
      <h1 className="hero-title">
        The Ultimate <br /> development studio
      </h1>
      <p className="hero-subtitle">
        We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers
        and designers that love to build amazing products.
      </p>
    </div>
  )
}

function ProductCard({ product, translate }) {
  return (
    <motion.div style={{ x: translate }} whileHover={{ y: -20 }} className="product-card">
      <a href={product.link} className="product-link" target="_blank" rel="noreferrer">
        <img
          src={product.thumbnail || "/placeholder.svg"}
          alt={product.title}
          className="product-image"
          width={600}
          height={600}
        />
      </a>
      <div className="product-overlay" aria-hidden="true" />
      <h2 className="product-title">{product.title}</h2>
    </motion.div>
  )
}
