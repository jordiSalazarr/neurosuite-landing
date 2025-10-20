interface StatProps {
  value: string
  label: string
  sublabel?: string
}

export function Stat({ value, label, sublabel }: StatProps) {
  return (
    <div className="text-center space-y-2">
      <div className="text-4xl md:text-5xl font-bold text-[#0FB5BA]">{value}</div>
      <div className="text-[#1F2937] font-medium">{label}</div>
      {sublabel && <div className="text-sm text-[#1F2937]/60">{sublabel}</div>}
    </div>
  )
}
