export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Frances & Family</h3>
              <p className="text-sm text-muted-foreground">
                From a hole in a fence to a family of 8. On a mission to make cat healthcare free.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="flex flex-col gap-2 text-sm">
                <a href="#story" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </a>
                <a href="#media" className="text-muted-foreground hover:text-primary transition-colors">
                  Media Features
                </a>
                <a href="#amazon-live" className="text-muted-foreground hover:text-primary transition-colors">
                  Amazon Live
                </a>
                <a href="#nonprofit" className="text-muted-foreground hover:text-primary transition-colors">
                  Nonprofit Mission
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="mailto:Chris@iGotCats.com" className="hover:text-primary transition-colors">
                  Chris@iGotCats.com
                </a>
                <a href="mailto:FrancesAndFam@gmail.com" className="hover:text-primary transition-colors">
                  FrancesAndFam@gmail.com
                </a>
                <p className="pt-2">Pittsburgh, PA</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              Made with {/* Inline SVG heart icon */}
              <svg className="w-4 h-4 text-primary fill-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>{" "}
              by Frances & Family © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
