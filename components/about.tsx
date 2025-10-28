import { CheckCircle } from "lucide-react"

const highlights = [
  "Over 15 years of BMW parts expertise",
  "Extensive inventory of 2,500+ parts",
  "Certified BMW technicians on staff",
  "Competitive pricing with price match guarantee",
  "Warranty on all genuine parts",
  "Same-day shipping on in-stock items",
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Your Trusted BMW Parts Specialist</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We specialize in providing high-quality spare parts for all BMW models. Our commitment to excellence and
              customer satisfaction has made us a leading supplier in the industry.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Whether you're a professional mechanic or a BMW enthusiast, we have the parts and expertise to keep your
              vehicle running at peak performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="/bmw-workshop-with-parts.jpg" alt="BMW Parts Workshop" className="rounded-lg shadow-xl w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
