import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const socialLinks = [
  {
    platform: "TikTok",
    handle: "@francesandfam",
    url: "https://tiktok.com/@francesandfam",
    color: "hover:bg-[#000000]",
  },
  {
    platform: "Instagram",
    handle: "@FrancesAndFamily",
    url: "https://instagram.com/FrancesAndFamily",
    color: "hover:bg-[#E4405F]",
  },
  {
    platform: "YouTube",
    handle: "Frances and Family",
    url: "http://youtube.com/@francesandfamily",
    color: "hover:bg-[#FF0000]",
  },
  {
    platform: "Discord",
    handle: "Join Our Community",
    url: "https://discord.gg/uMwRvtj2gV",
    color: "hover:bg-[#5865F2]",
  },
  {
    platform: "Reddit",
    handle: "u/SingTheDamnSong",
    url: "http://reddit.com/u/SingTheDamnSong",
    color: "hover:bg-[#FF4500]",
  },
  {
    platform: "X (Twitter)",
    handle: "@FrancesAndFam",
    url: "http://Twitter.com/FrancesAndFam",
    color: "hover:bg-[#000000]",
  },
  {
    platform: "Facebook",
    handle: "Frances and Family",
    url: "https://www.facebook.com/share/1H63rDRt7P/",
    color: "hover:bg-[#1877F2]",
  },
  {
    platform: "Snapchat",
    handle: "Frances and Family",
    url: "https://snapchat.com/t/CBXk2bYM",
    color: "hover:bg-[#FFFC00]",
  },
  {
    platform: "Red Note",
    handle: "Frances and Family",
    url: "https://www.xiaohongshu.com/user/profile/6784aedf000000000803ef6b",
    color: "hover:bg-[#FF2442]",
  },
  {
    platform: "WhatsApp",
    handle: "Chat With Us",
    url: "https://api.whatsapp.com/send?phone=12128140768",
    color: "hover:bg-[#25D366]",
  },
]

export function SocialLinksSection() {
  return (
    <section id="connect" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Connect With Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Follow our journey across all platforms and join our community of cat lovers!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialLinks.map((link, i) => (
              <Button
                key={i}
                variant="outline"
                size="lg"
                asChild
                className={`h-auto py-6 flex-col items-start gap-2 transition-all ${link.color} hover:text-white`}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <span className="font-bold text-lg">{link.platform}</span>
                  <span className="text-sm opacity-80">{link.handle}</span>
                </a>
              </Button>
            ))}
          </div>

          <Card className="mt-12 p-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Other Projects</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <a href="http://coolcatstuff.com" target="_blank" rel="noopener noreferrer">
                  CoolCatStuff.com
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="http://thegoodmeow.com" target="_blank" rel="noopener noreferrer">
                  TheGoodMeow.com
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
