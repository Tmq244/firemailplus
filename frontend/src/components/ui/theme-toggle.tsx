'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        aria-label={`切换为${isDark ? '白天' : '黑夜'}模式`}
        className="relative h-10 w-10 rounded-full border border-gray-200 bg-white/80 shadow-md backdrop-blur transition hover:scale-105 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900/80"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      >
        <Sun
          className={cn(
            'h-5 w-5 rotate-0 scale-100 transition-all text-amber-500',
            isDark && 'rotate-90 scale-0'
          )}
        />
        <Moon
          className={cn(
            'absolute h-5 w-5 rotate-90 scale-0 transition-all text-blue-300',
            isDark && 'rotate-0 scale-100'
          )}
        />
      </Button>
    </div>
  );
}
