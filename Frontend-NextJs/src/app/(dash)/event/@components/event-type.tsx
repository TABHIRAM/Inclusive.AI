"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect } from "react"


const eventTypes = [
  { value: "birthday", label: "Birthday Party" },
  { value: "conference", label: "Conference" },
  { value: "networking", label: "Networking Event" },
  { value: "wedding", label: "Wedding" }, 
  { value: "meeting", label: "Meeting" },
  { value: "fundraiser", label: "Fundraiser" },
  { value: "workshop", label: "Workshop" },
  { value: "seminar", label: "Seminar" },
  { value: "concert", label: "Concert" },
  { value: "festival", label: "Festival" },
  { value: "exhibition", label: "Exhibition" },
  { value: "game_night", label: "Game Night" },
  { value: "holiday_party", label: "Holiday Party" },
  { value: "marriage", label: "Marriage" }, 
  { value: "graduation", label: "Graduation" },
  { value: "retirement", label: "Retirement Party" },
  { value: "baby_shower", label: "Baby Shower" },
  { value: "bridal_shower", label: "Bridal Shower" },
  { value: "product_launch", label: "Product Launch" },
  { value: "sporting_event", label: "Sporting Event" },
  { value: "religious_ceremony", label: "Religious Ceremony" },
  { value: "performance", label: "Performance" },
  { value: "competition", label: "Competition" },
  { value: "class", label: "Class" },
  { value: "charity_event", label: "Charity Event" },
  { value: "volunteer_event", label: "Volunteer Event" },
  { value: "social_gathering", label: "Social Gathering" },
  { value: "family_gathering", label: "Family Gathering" },
  { value: "other", label: "Other" }, // Allow for custom event types
];



export function EventType() {
  const [open, setOpen] = React.useState(false)
  // const [value, setValue] = React.useState("")

//   const [value, setValue] = React.useState(() => {
//     // Initialize eventName from localStorage if exists, otherwise empty string
//     return localStorage.getItem('eventType') || '';
// });
const [value, setValue] = React.useState(
  () => (typeof window !== 'undefined' ? localStorage.getItem('eventType') || '' : '')
  );


  useEffect(() => {
    localStorage.setItem('eventType', value);
}, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? eventTypes.find((event) => event.value === value)?.label
            : "Choose event type"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search event..." />
          <CommandEmpty>No event type found.</CommandEmpty>
          <CommandGroup>
            {eventTypes
            .map((event) => (
                <CommandList>
              <CommandItem
                key={event.value}
                value={event.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === event.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {event.label}
              </CommandItem>
              </CommandList>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
