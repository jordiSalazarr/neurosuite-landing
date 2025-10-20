"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface PriceCardProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  featured?: boolean
  onCTAClick: () => void
}

export function PriceCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  featured = false,
  onCTAClick,
}: PriceCardProps) {
  return (
    <Card className={`relative ${featured ? "border-[#0FB5BA] border-2 shadow-lg" : "border-border"}`}>
      {featured && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0FB5BA] text-white">Más popular</Badge>
      )}
      <CardHeader>
        <CardTitle className="text-2xl text-[#1F2937]">{name}</CardTitle>
        <CardDescription className="text-pretty">{description}</CardDescription>
        <div className="pt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-[#1F2937]">{price}€</span>
            <span className="text-[#1F2937]/60">/{period}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#0FB5BA] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[#1F2937]/80 text-pretty">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          onClick={onCTAClick}
          className={`w-full ${
            featured ? "bg-[#0FB5BA] hover:bg-[#0FB5BA]/90 text-white" : "bg-[#1F2937] hover:bg-[#1F2937]/90 text-white"
          }`}
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  )
}
