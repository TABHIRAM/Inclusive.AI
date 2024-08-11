import Link from "next/link"
import {
  Activity,
  CircleUser,
  CreditCard,
  CirclePlus,
  DollarSign,
  Menu,
  Package2,Sparkles,
  Search,
  Users,
  IndianRupee,
  Wallet,
  CalendarRange,
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
import { auth } from "@/auth";
import { doLogout } from "@/app/actions"
import Image from "next/image"


const DashboardUI = async () => {
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
            <span className="">Inclusive.AI</span>
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href="./event">
              <CirclePlus className="h-4 w-4" />
              New Event
            </Link>
          </Button>
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
                {/* <span className="sr-only">Inclusive.AI</span> */}
                <span className="">Inclusive.AI</span>
              </Link>
              <Link href="#" className="hover:text-foreground">
                Dashboard
              </Link>
              {/* <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              > */}
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
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Budget
              </CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹14,23,189</div>
              <p className="text-xs text-muted-foreground">
              Currently, this is test data. We plan to integrate this feature with Firebase in future development.
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Guests
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2345</div>
              <p className="text-xs text-muted-foreground">
              Currently, this is test data. We plan to integrate this feature with Firebase in future development.
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Events</CardTitle>
              <CalendarRange className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12</div>
              <p className="text-xs text-muted-foreground">
              Currently, this is test data. We plan to integrate this feature with Firebase in future development.
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Events</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2</div>
              <p className="text-xs text-muted-foreground">
              Currently, this is test data. We plan to integrate this feature with Firebase in future development.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
 
<span className="flex justify-center py-36">We plan create a dashboard and integrate this feature with Firebase in future development.</span>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>01</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Birthday
                  </p>
                  <p className="text-sm text-muted-foreground">
                  This is test data. We plan to integrate this feature with Firebase in future development.
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>02</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Wedding
                  </p>
                  <p className="text-sm text-muted-foreground">
                  This is test data. We plan to integrate this feature with Firebase in future development.
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>TE</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                  Test Event
                  </p>
                  <p className="text-sm text-muted-foreground">
                  This is test data. We plan to integrate this feature with Firebase in future development.
                  </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
export default DashboardUI;