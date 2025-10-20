import Image from "next/image"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  avatar: string
}

export function Testimonial({ quote, author, role, avatar }: TestimonialProps) {
  return (
    <div className="space-y-4">
      <p className="text-lg text-[#1F2937] italic text-pretty leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image src={avatar || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <div className="font-semibold text-[#1F2937]">{author}</div>
          <div className="text-sm text-[#1F2937]/60">{role}</div>
        </div>
      </div>
    </div>
  )
}
