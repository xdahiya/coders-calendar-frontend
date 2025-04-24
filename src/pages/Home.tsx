import { AppSidebar } from "@/components/app-sidebar";
// import { ChartAreaInteractive } from "@/components/chart-area-interactive";
// import { DataTable } from "@/components/data-table";
// import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { EventsDataTable } from "@/components/events-table";

import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "@/http";
import { Loader2 } from "lucide-react";

export default function Page({ user }: { user: any }) {
  const { data: events, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });

  console.log(events);

  return (
    <SidebarProvider>
      <AppSidebar user={user} variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* <SectionCards /> */}
              {/* <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div> */}
              {isLoading ? (
                <>
                  <Loader2 />
                </>
              ) : (
                <EventsDataTable data={events} />
              )}
              {/* */}
              {/* <DataTable data={data} /> */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
