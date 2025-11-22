import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function IntroSection() {
  return (
    <section id="intro" className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-background">
      <div className="container px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 text-center space-y-6 bg-white/80 backdrop-blur-sm shadow-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Frances and Family
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto">
              A pregnant stray found a hole in my fence. And now, I'm a cat dad of 8 (and a tripod pup), host of Cool
              Cat Stuff, on a mission to make cat health care free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
              <Button size="lg" asChild className="text-base px-8">
                <a href="#story">Read Our Story</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 bg-transparent">
                <a href="http://amazon.com/live/coolcatstuff" target="_blank" rel="noopener noreferrer">
                  Watch Our Amazon Live
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
