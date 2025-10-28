import { Shield, Truck, Wrench, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Genuine Quality",
    description: "All parts are OEM or genuine BMW quality, ensuring perfect fit and performance",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Express delivery available with tracking on all orders nationwide",
  },
  {
    icon: Wrench,
    title: "Expert Support",
    description: "Our BMW specialists help you find the right part for your model",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Most orders ship within 24 hours from our extensive inventory",
  },
]

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted partner for BMW spare parts with over 15 years of experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
