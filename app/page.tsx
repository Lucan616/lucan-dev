// import Link from "next/link";
import JobCard from "@/components/job-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EMAIL, JOBS, TECH_SKILLS, YEARS_EXPERIENCE } from "@/lib/constants";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-5">
      {/* HERO SECTION */}
      <section className="mb-48 mt-40 flex flex-col items-center">
        <h1 className="mb-5 font-hedvig-serif text-[clamp(3.5rem,_15vw,_10rem)] leading-none">
          <span className="text-xl tracking-widest sm:text-2xl md:text-3xl">
            Hi, I&apos;m
          </span>
          <br />
          <span
            /**
             * @note `tracking-*` or `letter-spacing` styling adds spacing after the last character, `dir="rtl"` and `-indent-*` fixes this.
             * */
            dir="rtl"
            className="inline-block -indent-[1.5rem] uppercase tracking-[1.5rem] sm:-indent-[2rem] sm:tracking-[2rem]"
          >
            Lucan
          </span>
        </h1>
        <p className="text-center text-base tracking-widest md:text-lg">
          A front-end developer with {YEARS_EXPERIENCE} years experience.
        </p>
        <div className="mt-12 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row md:gap-5">
          <Button size="lg" asChild>
            <a href="/Lucan's CV - 2024.pdf" download>
              Download my CV
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={`mailto:${EMAIL}`}>Send me an email</a>
          </Button>
        </div>
      </section>

      {/* TECH SECTION */}
      <section className="my-32">
        <h2 className="mb-16 text-center text-3xl font-semibold tracking-wide md:text-4xl">
          Tech I&apos;ve Worked With
        </h2>
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {TECH_SKILLS.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </section>

      {/* JOBS SECTION */}
      <section className="my-32">
        <h2 className="mb-16 text-center text-3xl font-semibold tracking-wide md:text-4xl">
          My Work Experience
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {JOBS.map((job) => (
            <JobCard
              key={job.companyName}
              {...job}
              className="first:col-span-full md:first:col-span-1"
            />
          ))}
        </div>
      </section>

      {/* CERTIFICATES LINK SECTION */}
      {/* <section className="my-32">
        <p className="mb-16 mt-20 text-center">
          If you want, you can check out{" "}
          <Link
            href="/certificates"
            className="font-hedvig-serif text-green-500 underline"
          >
            my certificates
          </Link>
          .
        </p>
      </section> */}
    </main>
  );
}
