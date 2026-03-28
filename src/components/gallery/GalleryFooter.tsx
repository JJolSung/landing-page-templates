import { Github, Globe } from "lucide-react";

export default function GalleryFooter() {
  return (
    <footer className="border-t border-gallery-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gallery-muted">
          Built by{" "}
          <span className="text-gallery-text font-medium">MyeongSub Kim</span>{" "}
          /{" "}
          <a
            href="https://movatech.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gallery-text hover:underline"
          >
            MOVA Tech
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/JJolSung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gallery-muted hover:text-gallery-text transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://movatech.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gallery-muted hover:text-gallery-text transition-colors"
            aria-label="Website"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
