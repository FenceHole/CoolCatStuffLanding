"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useState } from "react"

export function StorySection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="story" className="relative">
      <div className="bg-background py-16 md:py-24">
        <div className="container px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">The Story of Frances</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A tale of unexpected love, mutual rescue, and finding family in the most unlikely places
              </p>
            </div>

            <div className="grid gap-8 md:gap-12">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/fence-art.jpg"
                      alt="The fence preserved as art on the wall"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-card">
                    <p className="text-sm font-medium text-center">The Historic Fence - Preserved Forever</p>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/family-couch.jpg"
                      alt="The whole family together"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-card">
                    <p className="text-sm font-medium text-center">The Whole Family Together</p>
                  </div>
                </Card>
              </div>

              {/* Story Timeline */}
              <Card className="p-8 md:p-10">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">The Beginning</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      It started with a small hole in my fence in Philadelphia. A scared, pregnant feral cat named
                      Frances found her way into my backyard, desperately seeking a safe place. She was terrified of
                      humans, but something told me she needed help.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">Building Trust</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Every day, I fed Frances. Slowly, patiently, I gained her trust. When she appeared one day with a
                      bloody ear, I knew I had to bring her inside. The very next day, in my basement, Frances gave
                      birth to her kittens.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">A Growing Family</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The plan was to find homes for the kittens once they were ready. But watching Frances with her
                      babies, seeing how bonded they all were, I couldn't separate them. Along with my orange cat
                      Oliver, I became a cat dad of eight. Later, I welcomed two more cats and Freya, a beautiful
                      three-legged dog.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">Mutual Rescue</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Here's the truth: Frances saved me as much as I saved her. During a difficult time after losing my
                      job, these cats gave me purpose, joy, and a reason to keep going. They remind me every day that
                      the best things in life often come through unexpected holes in our fences.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Family Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Frances", description: "Mama Cat" },
                  { name: "Oliver", description: "Original Cat" },
                  { name: "The Kittens", description: "6 Bundles of Joy" },
                  { name: "Freya", description: "Tripod Pup" },
                ].map((member, i) => (
                  <Card key={i} className="p-6 text-center space-y-2">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                      {i === 3 ? "🐕" : "🐱"}
                    </div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
