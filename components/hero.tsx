import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative bg-primary text-primary-foreground py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/bmw-car-engine-parts-close-up.jpg')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Premium BMW Spare Parts for Peak Performance
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Genuine and OEM quality parts for all BMW models. Fast shipping, expert support, and unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Search className="w-5 h-5 mr-2" />
              Search Parts
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
