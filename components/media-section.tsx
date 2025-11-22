import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const mediaFeatures = [
  {
    outlet: "Newsweek",
    title: "Pregnant Stray Turns Up at Man's Garden, Now He's Dad to 8 Kittens",
    description: "Our viral story featured in Newsweek with over 1.4M views on TikTok",
    link: "https://www.newsweek.com/pregnant-stray-turns-mans-garden-now-hes-dad-8-kittens-1988165",
  },
  {
    outlet: "Cats.com",
    title: "Cat Dad Saved ONE Stray Cat And Ended Up With EIGHT!",
    description: "In-depth feature on our journey from one stray to a family of eight",
    link: "https://cats.com/news/cat-dad-saved-one-stray-cat-and-ended-up-with-eight",
  },
  {
    outlet: "The Dodo",
    title: "Instagram Feature",
    description: "Heartwarming reel showcasing our family on The Dodo's Instagram",
    link: "https://www.instagram.com/reel/CsPryFiAaT0/",
  },
  {
    outlet: "GeoBeats Animals",
    title: "Man Takes In Scared Stray Cat",
    description: "YouTube feature with our complete rescue story",
    link: "https://youtu.be/g22iS-zjN_c",
  },
  {
    outlet: "NIT Magazine (Portugal)",
    title: "Homem salva gata grávida",
    description: "International coverage of our story in Portuguese media",
    link: "https://pit.nit.pt/familia/homem-salva-gata-gravida-e-decide-adotar-filhotes-agora-e-pai-de-sete",
  },
  {
    outlet: "China Daily",
    title: "Pet Lovers Connect via RedNote",
    description: "Featured in coverage of international pet content creators",
    link: "https://www.chinadailyhk.com/hk/article/618147",
  },
]

export function MediaSection() {
  return (
    <section id="media" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Media Features & Press</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Our story has touched hearts around the world, featured in major publications and media outlets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaFeatures.map((feature, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.outlet}</CardTitle>
                  <CardDescription className="line-clamp-2">{feature.title}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                    <a href={feature.link} target="_blank" rel="noopener noreferrer">
                      Read Article
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
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-primary/5">
              <h3 className="text-2xl font-semibold mb-4">Ranked #22</h3>
              <p className="text-lg text-muted-foreground mb-6">Top 30 Amazon Pet Influencers in 2025</p>
              <Button variant="outline" asChild>
                <a
                  href="https://influencers.feedspot.com/amazon_pet_instagram_influencers/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Rankings
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
