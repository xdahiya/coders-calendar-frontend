import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DateTimePickerForm } from "./add-event-form";
import { SidebarMenuButton } from "./ui/sidebar";
import { IconCirclePlusFilled } from "@tabler/icons-react";

export function FormDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <SidebarMenuButton
          tooltip="Quick Create"
          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
        >
          <IconCirclePlusFilled />
          <span>Quick Create</span>
        </SidebarMenuButton>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Add Event</DrawerTitle>
            <DrawerDescription>add a event to your google calendar</DrawerDescription>
          </DrawerHeader>
          <DateTimePickerForm/>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
