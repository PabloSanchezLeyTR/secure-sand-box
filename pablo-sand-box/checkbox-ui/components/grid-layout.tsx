import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface GridLayoutProps {
  options: string[]
  selectedOptions: string[]
  onOptionChange: (option: string, checked: boolean) => void
}

export function GridLayout({ options, selectedOptions, onOptionChange }: GridLayoutProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {options.map((option, index) => (
        <div key={option} className="flex flex-col items-center space-y-1">
          <Checkbox
            id={`grid-${option}`}
            checked={selectedOptions.includes(option)}
            onCheckedChange={(checked) => onOptionChange(option, checked as boolean)}
            className="h-4 w-4"
          />
          <Label htmlFor={`grid-${option}`} className="text-xs text-center leading-tight cursor-pointer">
            {index + 1}
          </Label>
        </div>
      ))}
    </div>
  )
}
