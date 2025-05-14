
import React from "react";
import { Instagram, Tiktok, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinkProps> = ({ className }) => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/yeon.live",
      icon: Instagram,
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/yeon.live",
      icon: Tiktok,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yeon.live",
      icon: Twitter,
    },
  ];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yeon-purple transition-colors"
          aria-label={link.name}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
