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
          "relative rounded-xl bg-muted/50 ring-1 ring-white/10",
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
          <p className="line-clamp-5 font-hedvig-serif font-light tracking-wider text-muted-foreground">
            {description}
          </p>
        </div>
      </article>
      <DialogContent>
        <div className="h-44 px-14 py-12">
          <Image
            src={companyLogo}
            alt={companyName}
            className="size-full object-contain"
          />
        </div>
        <DialogTitle>{companyName}</DialogTitle>
        <p className="mb-2 text-sm font-light">{title}</p>
        <p className="mb-2 text-sm">
          {startDateString}
          {" - "}
          {endDateString}
        </p>
        <DialogDescription className="font-hedvig-serif leading-6 tracking-wider">
          {description}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
