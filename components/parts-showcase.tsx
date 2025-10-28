"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Part {
  id: string
  part_number: string
  name: string
  description: string
  price: number
  stock_quantity: number
  image_url: string
  compatibility: string
  manufacturer: string
  condition: string
  categories: {
    id: string
    name: string
  }
}

export function PartsShowcase() {
  const [parts, setParts] = useState<Part[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchParts() {
      try {
        const response = await fetch("/api/parts")
        const data = await response.json()
        setParts(data.slice(0, 6)) // Show first 6 parts
      } catch (error) {
        console.error("Failed to fetch parts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchParts()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Parts</h2>
            <p className="text-gray-600">Loading parts...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Parts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Browse our selection of premium BMW spare parts</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parts.map((part) => (
            <Card key={part.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-100">
                <Image src={part.image_url || "/placeholder.svg"} alt={part.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-blue-600 mb-2">{part.categories?.name}</div>
                <h3 className="text-xl font-bold mb-2">{part.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{part.description}</p>
                <div className="space-y-2 text-sm mb-4">
                  <p>
                    <span className="font-semibold">Part #:</span> {part.part_number}
                  </p>
                  <p>
                    <span className="font-semibold">Compatibility:</span> {part.compatibility}
                  </p>
                  <p>
                    <span className="font-semibold">Condition:</span> {part.condition}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">€{part.price.toFixed(2)}</span>
                  <Button>View Details</Button>
                </div>
                {part.stock_quantity > 0 ? (
                  <p className="text-green-600 text-sm mt-2">In Stock ({part.stock_quantity} available)</p>
                ) : (
                  <p className="text-red-600 text-sm mt-2">Out of Stock</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
