"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Award, Eye, Users, Video, Newspaper, Download, Share2 } from "lucide-react"

export function PressKitSection() {
  const stats = [
    { icon: Users, label: "Total Social Reach", value: "5M+" },
    { icon: Eye, label: "Viral Video Views", value: "1.4M+", platform: "TikTok" },
    { icon: Award, label: "Amazon Pet Influencers 2025", value: "#22" },
    { icon: Video, label: "Amazon Live Shows", value: "Weekly" },
  ]

  const mediaFeatures = [
    { outlet: "Newsweek", count: "4x in 2024", link: "#" },
    { outlet: "The Dodo", count: "Featured", link: "#" },
    { outlet: "Cats.com", count: "Featured", link: "#" },
    { outlet: "GeoBeats Animals", count: "Featured", link: "#" },
    { outlet: "Cuddle Buddies", count: "Featured", link: "#" },
  ]

  const platforms = [
    { name: "TikTok", handle: "@francesandfamily", followers: "500K+" },
    { name: "Instagram", handle: "@francesandfamily", followers: "250K+" },
    { name: "YouTube", handle: "Frances and Family", followers: "100K+" },
    { name: "Reddit", handle: "r/FrancesandFamily", followers: "50K+" },
    { name: "X (Twitter)", handle: "@francesandfamily", followers: "75K+" },
  ]

  const highlights = [
    "Ranked #22 Top Amazon Pet Influencers of 2025",
    "Featured in Newsweek 4 times in one year",
    "Viral TikTok video: 1.4M views",
    "First page of Reddit r/All multiple times",
    "Host of Amazon Live show 'Cool Cat Stuff'",
    "Founder of The GOOD Meow nonprofit initiative",
  ]

  return (
    <section id="press-kit" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-sm px-4 py-1">Media & Press Kit</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Making Waves Across the Internet</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              From viral moments to major media features, Frances and Family has captured hearts worldwide
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                Download Press Kit
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <Share2 className="w-4 h-4" />
                Share Our Story
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, i) => (
              <Card key={i} className="p-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  {stat.platform && (
                    <Badge variant="secondary" className="text-xs">
                      {stat.platform}
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Key Highlights */}
          <Card className="p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Key Highlights</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Media Features */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Newspaper className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Media Features</h3>
              </div>
              <div className="space-y-4">
                {mediaFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div>
                      <p className="font-semibold">{feature.outlet}</p>
                      <p className="text-sm text-muted-foreground">{feature.count}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Platforms */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Social Reach</h3>
              </div>
              <div className="space-y-4">
                {platforms.map((platform, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-semibold">{platform.name}</p>
                      <p className="text-sm text-muted-foreground">{platform.handle}</p>
                    </div>
                    <Badge variant="secondary">{platform.followers}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact for Press */}
          <Card className="p-8 mt-8 text-center bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Media Inquiries</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interested in featuring Frances and Family? We'd love to hear from you. Contact us for interviews,
              collaboration opportunities, or press materials.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <a href="mailto:francesandfamily@gmail.com">Contact for Press</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:info@francesandfamily.com">Brand Partnerships</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
