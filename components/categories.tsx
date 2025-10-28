import { Card } from "@/components/ui/card"

const categories = [
  {
    name: "Engine Parts",
    image: "/bmw-engine-parts.jpg",
    count: "500+ Parts",
  },
  {
    name: "Brake Systems",
    image: "/bmw-brake-system.jpg",
    count: "300+ Parts",
  },
  {
    name: "Suspension",
    image: "/bmw-suspension-parts.jpg",
    count: "250+ Parts",
  },
  {
    name: "Electrical",
    image: "/bmw-electrical-components.jpg",
    count: "400+ Parts",
  },
  {
    name: "Body Parts",
    image: "/bmw-body-parts.jpg",
    count: "600+ Parts",
  },
  {
    name: "Interior",
    image: "/bmw-interior-parts.jpg",
    count: "350+ Parts",
  },
]

export function Categories() {
  return (
    <section id="parts" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Browse by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the exact part you need from our comprehensive catalog
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-white/90">{category.count}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
