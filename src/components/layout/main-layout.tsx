// src/components/layout/main-layout.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Lightbulb, FileText, LayoutDashboard, Library, MessageSquare, Route, User, BookOpen, Briefcase } from 'lucide-react';
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/courses', label: 'Courses', icon: BookOpen },
  { href: '/resume-refiner', label: 'Resume Refiner', icon: FileText },
  { href: '/career-path-navigator', label: 'Career Path Navigator', icon: Route },
  { href: '/interview-prep', label: 'Interview Prep Tool', icon: MessageSquare },
  { href: '/job-matcher', label: 'Job Matcher', icon: Briefcase },
  { href: '/profile', label: 'Profile', icon: User },
  { href: '/resources', label: 'Resource Hub', icon: Library },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentNavItem = navItems.slice().reverse().find((item) => pathname.startsWith(item.href));

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary hover:bg-primary/20">
              <Lightbulb className="h-5 w-5" />
            </Button>
            <div className="flex flex-col">
              <h2 className="font-headline text-base font-semibold">Career Guide AI</h2>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/')}
                 className="justify-start">
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
          <SidebarTrigger className="md:hidden" />
          <h1 className="text-lg font-semibold md:text-xl font-headline">
            {currentNavItem?.label || 'Career Guide AI'}
          </h1>
        </header>
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
