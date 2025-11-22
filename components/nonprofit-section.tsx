import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function NonprofitSection() {
  return (
    <section id="nonprofit" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Mission: Free Cat Healthcare</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Through The Good Meow initiative, we're working to make quality veterinary care accessible to all cats,
              regardless of their humans' financial situation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Compassionate Care</h3>
              <p className="text-muted-foreground">
                Every cat deserves access to medical care, preventive treatment, and emergency services
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Veterinary Partnerships</h3>
              <p className="text-muted-foreground">
                Building networks with veterinarians and clinics to provide subsidized care
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Community Support</h3>
              <p className="text-muted-foreground">
                Creating a community of cat lovers who support each other and the cats in need
              </p>
            </Card>
          </div>

          <Card className="p-10 text-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Frances showed me what's possible when someone extends compassion. Now we're paying it forward to help
              cats everywhere get the care they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://www.paypal.com/paypalme/francesandfam" target="_blank" rel="noopener noreferrer">
                  Support Our Mission
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:Chris@iGotCats.com">Partner With Us</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
