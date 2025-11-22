import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Camera, Globe, Mail, Package, Star, TrendingUp, Users, Video } from "lucide-react"

const stats = [
  { label: "Amazon Pet Influencer Ranking", value: "#22" },
  { label: "Social Media Reach", value: "500K+" },
  { label: "TikTok Views", value: "1.4M+" },
  { label: "Platform Presence", value: "10+" },
]

const services = [
  {
    icon: Video,
    title: "Product Reviews",
    description: "Authentic testing and reviews on Amazon Live with our 8-cat panel",
  },
  {
    icon: Camera,
    title: "UGC Content Creation",
    description: "High-quality user-generated content for your social media and marketing",
  },
  {
    icon: Package,
    title: "Unboxing & Demos",
    description: "Engaging unboxing videos and product demonstrations with real cats",
  },
  {
    icon: Globe,
    title: "Multi-Platform Promotion",
    description: "Cross-promotion across TikTok, Instagram, YouTube, Reddit, and more",
  },
]

const platforms = [
  "TikTok (@francesandfam)",
  "Instagram (@FrancesAndFamily)",
  "YouTube (Frances and Family)",
  "Amazon Live (Cool Cat Stuff)",
  "Reddit (u/SingTheDamnSong)",
  "Facebook",
  "X (Twitter)",
  "Red Note",
  "Snapchat",
  "Discord Community",
]

export function BrandPartnershipsSection() {
  return (
    <section id="brand-partnerships" className="py-24 md:py-32">
      <div className="container px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Work With Frances & Family</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Partner with a top-ranked pet influencer family for authentic, engaging content that resonates with cat
              lovers worldwide
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">What We Offer</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <Card key={i} className="p-6">
                  <CardHeader className="p-0 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Partner With Us */}
          <Card className="p-10 mb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
            <h3 className="text-3xl font-bold mb-6 text-center">Why Partner With Us?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Authentic Voice</h4>
                <p className="text-muted-foreground">
                  Our story is genuine, and our recommendations come from real experience with our 8 cats
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Proven Results</h4>
                <p className="text-muted-foreground">
                  Ranked #22 among Amazon Pet Influencers with millions of engaged followers
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Engaged Community</h4>
                <p className="text-muted-foreground">
                  A loyal, passionate audience across 10+ platforms who trust our recommendations
                </p>
              </div>
            </div>
          </Card>

          {/* Platforms */}
          <Card className="p-10 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Platform Reach</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {platforms.map((platform, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{platform}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Portfolio Links */}
          <Card className="p-10 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">View Our Portfolio</h3>
            <p className="text-muted-foreground mb-6">
              See examples of our content creation and past brand collaborations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="https://ig.me/u/francesandfamily/cp/_0Ou1FwvS/" target="_blank" rel="noopener noreferrer">
                  <BarChart3 className="mr-2 w-4 h-4" />
                  Media Portfolio
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://frances-fam.gitlab.io/wiki/" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 w-4 h-4" />
                  Frances & Family Wiki
                </a>
              </Button>
            </div>
          </Card>

          {/* CTA */}
          <Card className="p-10 text-center bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">Let's Create Something Amazing</h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're looking for product reviews, UGC content, or a long-term brand partnership, we'd love to
              hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:Chris@iGotCats.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Chris@iGotCats.com
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:FrancesAndFam@gmail.com">
                  <Mail className="mr-2 w-5 h-5" />
                  FrancesAndFam@gmail.com
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
