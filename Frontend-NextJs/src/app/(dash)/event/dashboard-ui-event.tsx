import Link from "next/link"
import {
  Activity,
  CircleUser,
  CreditCard,
  CirclePlus,
  DollarSign,
  Menu,
  Sparkles,
  Search,
  Users,
} from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import StepperClickableSteps from "./@components/stepper-clickable-steps"
import { auth } from "@/auth";
import { doLogout } from "@/app/actions"
import Image from "next/image"

// export default function DashboardUIEvent() { 
  const DashboardUIEvent = async () => {
    const session = await auth();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Sparkles className="h-6 w-6" />
            {/* <span className="sr-only">Inclusive.AI</span> */}
            <span className="">Inclusive.AI</span>
          </Link>
          <Link
            href="./dashboard"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            New&nbsp;Event
          </Link>
          {/* </Link> */}
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Gemini
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Feature&nbsp;Requests

          </Link>
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Return&nbsp;to&nbsp;Main&nbsp;Page
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Sparkles className="h-6 w-6" />
                <span className="">Inclusive.AI</span>
                {/* <span className="sr-only">Inclusive.AI</span> */}
              </Link>
              <Link href="#" className="hover:text-foreground">
                Dashboard
              </Link>
                <Button asChild size="sm" className=" gap-1">
                  <Link href="#">
                  <CirclePlus className="h-4 w-4" />
                    New Event
                  </Link>
                </Button>
              {/* </Link> */}
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Gemini
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Feature&nbsp;Requests
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Return&nbsp;to&nbsp;Main&nbsp;Page
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
            Welcome, {session?.user?.name}
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                {/* <CircleUser className="h-5 w-5" /> */}
                <Image
            src={session?.user?.image || '/default-profile.png'} // Fallback image in case user image is not available
            alt={session?.user?.name || 'User Profile'}
            width={32} // Adjust width to fit your design
            height={32} // Adjust height to fit your design
            className="rounded-full"
          />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem>Settings</DropdownMenuItem> */}
              <DropdownMenuItem>
              <a href="https://myaccount.google.com/" target="_blank" rel="noopener noreferrer">Settings</a>
              </DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem>Logout</DropdownMenuItem> */}
              <DropdownMenuItem>
              <form action={doLogout}>
        <button className="" type="submit">Logout</button>
    </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      
      <main className=" ">
         
        <div className="">
        <h2 className="text-2xl self-center ">&nbsp;&nbsp;&nbsp;</h2>
        <div className="mx-12">
        <StepperClickableSteps/>
        </div>
        </div>
      </main>
    </div>
  )
}
export default DashboardUIEvent;