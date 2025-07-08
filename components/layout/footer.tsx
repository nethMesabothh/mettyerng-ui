"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/lib/i18n';

const footerLinks = [
  {
    titleKey: 'footer.aboutUs',
    links: [
      { nameKey: 'footer.history', href: '/about' },
      { nameKey: 'footer.mission', href: '/about#mission' },
      { nameKey: 'footer.vision', href: '/about#vision' },
      { nameKey: 'footer.values', href: '/about#values' },
    ],
  },
  {
    titleKey: 'footer.activities',
    links: [
      { nameKey: 'footer.news', href: '/news' },
      { nameKey: 'footer.projects', href: '/projects' },
      { nameKey: 'footer.videos', href: '/videos' },
      { nameKey: 'footer.gallery', href: '/gallery' },
    ],
  },
  {
    titleKey: 'footer.contact',
    links: [
      { nameKey: 'footer.contactUs', href: '/contact' },
      { nameKey: 'footer.joinUs', href: '/contact#join' },
      { nameKey: 'footer.volunteer', href: '/contact#volunteer' },
      { nameKey: 'footer.support', href: '/contact#support' },
    ],
  },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-400' },
  { name: 'Youtube', icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-400' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-400' },
];

const contactInfo = [
  { icon: Phone, text: '+855 12 345 678', href: 'tel:+85512345678' },
  { icon: Mail, text: 'info@mettyerng.org', href: 'mailto:info@mettyerng.org' },
  { icon: MapPin, text: 'Phnom Penh, Cambodia', href: '#' },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Mettyerng</h2>
                  <p className="text-sm text-gray-300">ក្រុមអ្នកស្រឡាញ់សង្គម</p>
                </div>
              </Link>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                យើងជាក្រុមអ្នកស្រឡាញ់សង្គមដែលបានបង្កើតឡើងក្នុងគោលបំណង ជួយដល់សហគមន៍តាមរយៈការអប់រំ វប្បធម៌ និងការអភិវឌ្ឍន៍សង្គម។
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className={`text-gray-300 ${social.color} hover:bg-primary-800 transition-all duration-300`}
                  >
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white">{t(section.titleKey)}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                    >
                      {t(link.nameKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="my-12 bg-primary-700" />

        {/* Contact Info & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">ទំនាក់ទំនង Contact Info</h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent-400 transition-colors duration-200 group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm">{item.text}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-4">ព័ត៌មានថ្មី Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              {t('footer.newsletterDesc')}
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 px-4 py-2 bg-primary-800 border border-primary-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
              />
              <Button className="bg-primary-900 text-white hover:bg-primary-950 border border-accent-400">
                {t('footer.subscribe')}
              </Button>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-primary-700" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Mettyerng. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-300 hover:text-accent-400 transition-colors duration-200">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-accent-400 transition-colors duration-200">
              {t('footer.terms')}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}