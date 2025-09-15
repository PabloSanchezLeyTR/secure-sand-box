import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface AccordionLayoutProps {
  options: string[]
  selectedOptions: string[]
  onOptionChange: (option: string, checked: boolean) => void
}

export function AccordionLayout({ options, selectedOptions, onOptionChange }: AccordionLayoutProps) {
  const groups = [
    { title: "Group A", items: options.slice(0, 5) },
    { title: "Group B", items: options.slice(5, 10) },
    { title: "Group C", items: options.slice(10, 15) },
    { title: "Group D", items: options.slice(15, 20) },
  ]

  return (
    <Accordion type="multiple" className="w-full">
      {groups.map((group, groupIndex) => (
        <AccordionItem key={group.title} value={`item-${groupIndex}`}>
          <AccordionTrigger className="text-sm py-2">
            {group.title} ({group.items.filter((item) => selectedOptions.includes(item)).length}/{group.items.length})
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {group.items.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`accordion-${option}`}
                    checked={selectedOptions.includes(option)}
                    onCheckedChange={(checked) => onOptionChange(option, checked as boolean)}
                    className="h-4 w-4"
                  />
                  <Label htmlFor={`accordion-${option}`} className="text-sm cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
