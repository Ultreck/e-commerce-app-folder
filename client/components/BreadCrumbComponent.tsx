import Link from "next/link"
 
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href: string;
  }
  
  interface CustomBreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
  }

const BreadCrumbComponent = ({ items, className }: CustomBreadcrumbProps) => {
  return (
    <Breadcrumb className={cn("", className)}>
    <BreadcrumbList className={cn("px-16 py-3", className)}>
      {items.map((item, index) => (
        <>
          <BreadcrumbItem key={item.href}>
            <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
          </BreadcrumbItem>
          {index < items.length - 1 && <BreadcrumbSeparator />}
        </>
      ))}
    </BreadcrumbList>
  </Breadcrumb>
  )
}

export default BreadCrumbComponent