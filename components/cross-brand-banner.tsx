import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CrossBrandBanner() {
  return (
    <section className="py-16 md:py-20 bg-primary/5">
      <div className="container px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Explore Our Complete Ecosystem</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Frances and Family</h3>
              <p className="text-sm text-muted-foreground">
                Follow our journey, read our story, and connect with our community of cat lovers.
              </p>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <a href="https://francesandfamily.com">
                  Visit Site {/* Inline SVG external link icon */}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Cool Cat Stuff</h3>
              <p className="text-sm text-muted-foreground">
                Watch our Amazon Live show, shop our favorite cat products, and join our community.
              </p>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <a href="https://coolcatstuff.com" target="_blank" rel="noopener noreferrer">
                  Visit Site {/* Inline SVG external link icon */}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </Button>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">The GOOD Meow</h3>
              <p className="text-sm text-muted-foreground">
                Join our nonprofit mission to make cat health care free for everyone who needs it.
              </p>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <a href="https://thegoodmeow.com" target="_blank" rel="noopener noreferrer">
                  Visit Site {/* Inline SVG external link icon */}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
