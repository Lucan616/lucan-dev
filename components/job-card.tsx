import Image from "next/image";
import type { Job } from "@/lib/definitions";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "./ui/badge";

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
};

type JobCardProps = Job & React.HTMLAttributes<HTMLElement>;

export default function JobCard({
  companyLogo,
  companyName,
  title,
  startDate,
  endDate,
  description,
  className,
  ...props
}: JobCardProps) {
  const startDateString = startDate.toLocaleDateString(undefined, dateOptions);
  const endDateString = endDate
    ? endDate.toLocaleDateString(undefined, dateOptions)
    : "Present";

  return (
    <Dialog>
      <article
        className={cn(
          "bg-muted/50 relative rounded-xl ring-1 ring-white/10",
          className,
        )}
        {...props}
      >
        <DialogTrigger className="absolute inset-0">
          <span className="sr-only">{companyName}</span>
        </DialogTrigger>
        <div className="h-44 px-14 py-12">
          <Image
            src={companyLogo}
            alt={companyName}
            className="size-full object-contain"
          />
        </div>
        <div className="p-5 pt-0">
          <h3 className="text-lg font-bold">{companyName}</h3>
          <p className="mb-3 text-sm font-light">{title}</p>
          <p className="mb-3 text-sm">
            {startDateString}
            {" - "}
            {endDateString}
          </p>
          <p className="line-clamp-5 leading-normal font-light tracking-wide text-gray-400">
            {description}
          </p>
        </div>
      </article>
      <DialogContent className="gap-2 p-6 md:max-w-lg">
        <div className="h-44 px-14 py-12">
          <Image
            src={companyLogo}
            alt={companyName}
            className="size-full object-contain"
          />
        </div>
        <div className="flex items-center gap-3">
          <DialogTitle className="text-2xl">{companyName} </DialogTitle>
          <Badge className="dark:bg-blue-950 dark:text-blue-300">
            {startDateString}
            {" - "}
            {endDateString}
          </Badge>
        </div>
        <h3 className="mb-2 text-lg font-extralight">{title}</h3>
        <div className="no-scrollbar max-h-[40vh] overflow-y-auto">
          <p className="leading-normal font-light tracking-wide text-gray-300">
            {description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
