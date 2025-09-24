"use client"

import { useState } from "react"
import { GridLayout } from "@/components/grid-layout"
import { AccordionLayout } from "@/components/accordion-layout"
import { TabbedLayout } from "@/components/tabbed-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const checkboxOptions = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
  "Option 7",
  "Option 8",
  "Option 9",
  "Option 10",
  "Option 11",
  "Option 12",
  "Option 13",
  "Option 14",
  "Option 15",
  "Option 16",
  "Option 17",
  "Option 18",
  "Option 19",
  "Option 20",
]

export default function CheckboxDemo() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleOptionChange = (option: string, checked: boolean) => {
    if (checked) {
      setSelectedOptions((prev) => [...prev, option])
    } else {
      setSelectedOptions((prev) => prev.filter((item) => item !== option))
    }
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Responsive Checkbox UI Patterns</h1>
          <p className="text-muted-foreground">
            Three different approaches for displaying 20 checkboxes in 320px width
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Grid Layout */}
          <Card className="w-full max-w-[320px] mx-auto">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Grid Layout</CardTitle>
              <p className="text-sm text-muted-foreground">4×5 grid with compact spacing</p>
            </CardHeader>
            <CardContent>
              <GridLayout
                options={checkboxOptions}
                selectedOptions={selectedOptions}
                onOptionChange={handleOptionChange}
              />
            </CardContent>
          </Card>

          {/* Accordion Layout */}
          <Card className="w-full max-w-[320px] mx-auto">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Accordion Layout</CardTitle>
              <p className="text-sm text-muted-foreground">Grouped sections to reduce clutter</p>
            </CardHeader>
            <CardContent>
              <AccordionLayout
                options={checkboxOptions}
                selectedOptions={selectedOptions}
                onOptionChange={handleOptionChange}
              />
            </CardContent>
          </Card>

          {/* Tabbed Layout */}
          <Card className="w-full max-w-[320px] mx-auto">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Tabbed Layout</CardTitle>
              <p className="text-sm text-muted-foreground">4 tabs with 5 options each</p>
            </CardHeader>
            <CardContent>
              <TabbedLayout
                options={checkboxOptions}
                selectedOptions={selectedOptions}
                onOptionChange={handleOptionChange}
              />
            </CardContent>
          </Card>
        </div>

        {/* Selected Options Display */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Selected Options</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option) => (
                <span key={option} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {option}
                </span>
              ))
            ) : (
              <span className="text-muted-foreground">No options selected</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
