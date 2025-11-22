import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function AmazonLiveSection() {
  return (
    <section id="amazon-live" className="py-24 md:py-32">
      <div className="container px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Cool Cat Stuff on Amazon Live</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Join us live as we review and showcase the best cat products, all tested by our expert panel of 8 cats
              (and 1 tripod pup)!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <svg className="w-24 h-24 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="15" rx="2" strokeWidth={2} />
                    <polyline points="17 2 12 7 7 2" strokeWidth={2} />
                  </svg>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">Watch Live</h3>
                  <p className="text-muted-foreground">
                    Tune in to our live streams where we unbox, test, and review cat products in real-time with Frances
                    and the whole family.
                  </p>
                  <Button asChild className="w-full">
                    <a href="http://amazon.com/live/coolcatstuff" target="_blank" rel="noopener noreferrer">
                      Watch on Amazon Live {/* Inline SVG external link icon */}
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
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <svg className="w-24 h-24 text-secondary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">Shop Our Favorites</h3>
                  <p className="text-muted-foreground">
                    Browse our curated Amazon storefront featuring all the products we use and love for our cats.
                    Cat-tested, cat-approved!
                  </p>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <a href="http://amazon.com/shop/coolcatstuff" target="_blank" rel="noopener noreferrer">
                      Visit Our Storefront {/* Inline SVG external link icon */}
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
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Support Our Fam</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Check out our Amazon Wish List to see what items would help us care for our growing family and continue
              creating content!
            </p>
            <Button variant="secondary" asChild>
              <a
                href="https://www.amazon.com/hz/wishlist/ls/3G3WCAJQVNXE5?ref_=wl_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Wish List {/* Inline SVG external link icon */}
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
    </section>
  )
}
