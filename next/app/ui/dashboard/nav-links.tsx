"use client"

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ChatBubbleBottomCenterIcon,
  ServerIcon,
  TagIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  BuildingLibraryIcon,
  FilmIcon
} from '@heroicons/react/24/outline';
import { MdSupportAgent } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Case Studies',
    href: '/dashboard/casestudies/list',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Insights',
    href: '/dashboard/insights/list',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Enquiries',
    href: '/dashboard/enquiries/list',
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: 'Services',
    href: '/dashboard/services/list',
    icon: ServerIcon,
  },
  {
    name: 'Testimonials',
    href: '/dashboard/testimonials/list',
    icon: ChartBarIcon,
  },
  {
    name: 'Subscribers',
    href: '/dashboard/subscribers/list',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Tags',
    href: '/dashboard/tags/list',
    icon: TagIcon,
  },
  {
    name: 'Banner Slides',
    href: '/dashboard/bannerslides/list',
    icon: FilmIcon,
  },
];

export default function NavLinks() {

  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
