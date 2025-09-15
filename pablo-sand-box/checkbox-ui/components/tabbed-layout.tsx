"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TabbedLayoutProps {
  options: string[]
  selectedOptions: string[]
  onOptionChange: (option: string, checked: boolean) => void
}

export function TabbedLayout({ options, selectedOptions, onOptionChange }: TabbedLayoutProps) {
  const tabs = [
    { id: "tab1", label: "A", items: options.slice(0, 5) },
    { id: "tab2", label: "B", items: options.slice(5, 10) },
    { id: "tab3", label: "C", items: options.slice(10, 15) },
    { id: "tab4", label: "D", items: options.slice(15, 20) },
  ]

  return (
    <Tabs defaultValue="tab1" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        {tabs.map((tab) => {
          const selectedCount = tab.items.filter((item) => selectedOptions.includes(item)).length
          return (
            <TabsTrigger key={tab.id} value={tab.id} className="text-xs">
              {tab.label} {selectedCount > 0 && `(${selectedCount})`}
            </TabsTrigger>
          )
        })}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="mt-4">
          <div className="space-y-3">
            {tab.items.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={`tabbed-${option}`}
                  checked={selectedOptions.includes(option)}
                  onCheckedChange={(checked) => onOptionChange(option, checked as boolean)}
                  className="h-4 w-4"
                />
                <Label htmlFor={`tabbed-${option}`} className="text-sm cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
