import ClientComponent from "@/components/ClientComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, CloudSun, HandPlatter, MapPin, Users, Wallet } from "lucide-react";

export default function DashboardFive() {
    return(
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-5">
  
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Budget
            </CardTitle>
            {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <ClientComponent storageKey="Budget" />
              </div>
            <p className="text-xs text-muted-foreground">
            As per the user's input
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Guests
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <ClientComponent storageKey="guestCount" />
              </div>
            <p className="text-xs text-muted-foreground">
            Approximate Guest Count
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Planned Dates</CardTitle>
            {/* <Activity className="h-4 w-4 text-muted-foreground" /> */}
            <CalendarCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <ClientComponent storageKey="dateRange" />
              </div>
             <span className="text-xs text-muted-foreground capitalize"><ClientComponent storageKey="eventType" /></span>
          </CardContent>
        </Card>


        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Food</CardTitle>
            <HandPlatter className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
            <ClientComponent storageKey="vegetarianSwitch" />
                </div>
            <p className="text-xs text-muted-foreground">
            Based on Food Preference
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Location</CardTitle>
            {/* <CreditCard className="h-4 w-4 text-muted-foreground" /> */}
            {/* <PartyPopper className="h-4 w-4 text-muted-foreground" /> */}
            <MapPin className="h-4 w-4 text-muted-foreground"/>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
            <ClientComponent storageKey="LocationPreference" />
            </div>
            <p className="text-xs text-muted-foreground">
            Based on Location Preference
            </p>
          </CardContent>
        </Card>
        
        
      </div>
    )
    
}