import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { TextLoopBasic } from "./tesxt-loop-roll";

const heroImage = "/app-dash.png";
const navLinks = [
  { name: "Get Started", to: "#link" },
  { name: "Watch Video", to: "#link" },
];

export default function HeroSection() {
  return (
    <>
      <main className="text-center lg:text-start overflow-hidden">
        <section className="bg-linear-to-b to-muted from-background">
          <div className="relative py-36 flex max-w-6xl mx-auto min-h-screen">
            <div className="lg:w-1/2 flex flex-col justify-between md:max-h-[calc(90vh-502px)] md:mt-15">
              <div className="items-center lg:items-start">
                <h1 className=" text-balance text-5xl font-bold md:text-5xl tracking-wide leading-[1.2]">
                  Web<span className="text-[#fa0707]">3</span>Bridge CXIII DAO
                </h1>
                <p className="text-muted-foreground my-8 text-balance text-xl">
                  <TextLoopBasic />
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Button asChild size="lg" className="pr-4.5">
                    <Link to={navLinks[0].to}>
                      <span className="text-nowrap md:px-3">
                        join The Team
                      </span>
                      <ChevronRight className="opacity-50" />
                    </Link>
                  </Button>
                  {/* <Button
                      key={2}
                      asChild
                      size="lg"
                      variant="outline"
                      className="pl-5">
                      <Link to={navLinks[1].to}>
                        <CirclePlay className="fill-primary/25 stroke-primary" />
                        <span className="text-nowrap">Watch video</span>
                      </Link>
                    </Button> */}
                </div>
              </div>

              <div className="mt-20 md:mt-10">
                <p className="text-muted-foreground text-start">
                  Used by teams at :
                </p>
                <div className="flex justify-center items-center mt-6 max-w-sm gap-10">
                  <div className="flex">
                    <img
                      className="h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      alt="GitHub Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                </div>
              </div>
            </div>


            <div className="w-1/2">
              <img
                src={heroImage}
                alt="app screen"
                width=""
                height=""
                className="rounded-2xl"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
