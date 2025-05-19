
import React from "react";
import { cn } from "@/lib/utils";
import Icon from "./Icon";

interface SocialLinkProps {
  className?: string;
}

type SocialLinkItem = {
  name: string;
  url: string;
  icon: string;
};

const SocialLinks: React.FC<SocialLinkProps> = ({ className }) => {
  const socialLinks: SocialLinkItem[] = [
    {
      name: "Instagram",
      url: "https://instagram.com/yeon.live",
      icon: "IconBrandInstagram",
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/yeon.live",
      icon: "IconBrandTiktok",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yeon.live",
      icon: "IconBrandTwitter",
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
          <Icon name={link.icon as any} className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
