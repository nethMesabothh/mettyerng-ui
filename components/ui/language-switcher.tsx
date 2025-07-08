"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguageStore, Language } from '@/lib/i18n';

const languages = [
  {
    code: 'en' as Language,
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'km' as Language,
    name: 'Khmer',
    nativeName: 'ខ្មែរ',
    flag: '🇰🇭'
  }
];

interface LanguageSwitcherProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export function LanguageSwitcher({ variant = 'default', className }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguageStore();
  
  const currentLanguage = languages.find(lang => lang.code === language);

  if (variant === 'compact') {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 p-0 ${className}`}
          >
            <span className="text-lg">{currentLanguage?.flag}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm">{lang.flag}</span>
                <span className="text-sm">{lang.nativeName}</span>
              </div>
              {language === lang.code && (
                <Check className="w-3 h-3 text-primary-900" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center space-x-2 text-white hover:text-accent-400 hover:bg-primary-800 ${className}`}
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentLanguage?.nativeName}</span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{lang.flag}</span>
              <div>
                <div className="text-sm font-medium">{lang.name}</div>
                <div className="text-xs text-gray-500">{lang.nativeName}</div>
              </div>
            </div>
            {language === lang.code && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Check className="w-4 h-4 text-primary-900" />
              </motion.div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}