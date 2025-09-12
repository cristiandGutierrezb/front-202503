import ImageCarousel from "@/components/organisms/AmazonCarrouselImages"
import NewsCategories from "@/components/molecules/NewsCategories"

export default function page() {
  const arr = Array.from({ length: 3 })
  return (
    <>
      <ImageCarousel />
      <section className="flex gap-2 flex-wrap justify-around">
        {
          arr.map((_, i) => <NewsCategories key={i}/>)
        }
      </section>
    </>
  )
}
