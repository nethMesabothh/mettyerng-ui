import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'km';

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'en',
      setLanguage: (language) => set({ language }),
      t: (key: string) => {
        const { language } = get();
        return getTranslation(key, language);
      },
    }),
    {
      name: 'language-store',
    }
  )
);

// Translation function
export const getTranslation = (key: string, language: Language): string => {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
};

// Translations object
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      structure: 'Structure',
      news: 'News & Events',
      videos: 'Videos',
      projects: 'Projects',
      gallery: 'Gallery',
      contact: 'Contact',
      joinUs: 'Join Us'
    },
    nav: {
      latestNews: 'Latest News',
      events: 'Events',
      allProjects: 'All Projects',
      community: 'Community',
      education: 'Education',
      culture: 'Culture',
      sports: 'Sports'
    },
    hero: {
      title: 'Community Builders',
      subtitle: 'Building Stronger Communities Together',
      description: 'We are a group of social enthusiasts focused on education, culture, and community development',
      learnMore: 'Learn More',
      watchVideo: 'Watch Video',
      projectTitle: 'Free Haircut Project',
      projectSubtitle: 'Community Service Initiative',
      projectDescription: 'Free haircuts for community members in need',
      viewProjects: 'View Projects',
      educationTitle: 'Education & Culture',
      educationSubtitle: 'Learning & Heritage',
      educationDescription: 'Promoting education and preserving Khmer culture',
      joinUs: 'Join Us'
    },
    home: {
      achievements: 'Our Achievements',
      achievementsDesc: 'Through the dedication of our volunteers, we have achieved success in various fields',
      mission: 'Our Mission',
      missionTitle: 'Our Mission',
      missionDesc: 'We are a group of social enthusiasts created to help communities through education, culture, and social development.',
      missionText: 'We believe that education is the most important foundation for development and building a bright future for Cambodian children and youth.',
      focusAreas: 'Our Focus Areas',
      focusAreasDesc: 'We focus on building communities through these key areas',
      joinCommunity: 'Join Our Community',
      joinDesc: 'Become part of positive change, participate in building a strong community',
      becomeVolunteer: 'Become a Volunteer',
      viewProjects: 'View Our Projects',
      education: 'Education',
      educationDesc: 'Providing quality education to children and youth in the community',
      culture: 'Culture',
      cultureDesc: 'Preserving and promoting traditional Khmer culture',
      social: 'Social',
      socialDesc: 'Helping people in difficult situations',
      activeMembers: 'Active members in the group',
      successfulProjects: 'Successfully implemented projects',
      educatedChildren: 'Children and youth who received education',
      helpedFamilies: 'Families who received help'
    },
    about: {
      title: 'About Mettyerng',
      subtitle: 'Learn about our structure and team',
      mission: 'Mission',
      vision: 'Vision',
      values: 'Our Values',
      valuesDesc: 'These important values guide our work in building communities',
      journey: 'Our Journey',
      journeyDesc: 'Some milestones of our growth and achievements since 2018',
      team: 'Our Team',
      teamDesc: 'Core members who have been dedicated to community building'
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'Discover our impactful projects and community initiatives',
      impact: 'Our Impact',
      impactDesc: 'Our achievements',
      allProjects: 'All Projects',
      showing: 'Showing',
      of: 'of',
      projects: 'projects',
      noResults: 'No projects found',
      clearFilters: 'Clear all filters',
      categories: {
        all: 'All Projects',
        community: 'Community',
        education: 'Education',
        culture: 'Culture',
        sports: 'Sports'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch for collaboration, participation, or any questions',
      info: 'Contact Information',
      sendMessage: 'Send us a Message',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      department: 'Department',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      workingHours: 'Working Hours',
      followUs: 'Follow Us on Social Media',
      quickActions: 'Quick Actions',
      volunteer: 'Become a Volunteer',
      donate: 'Donation',
      location: 'Our Location'
    },
    common: {
      readMore: 'Read More',
      viewMore: 'View More',
      learnMore: 'Learn More',
      viewDetails: 'View Details',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      close: 'Close',
      search: 'Search',
      filter: 'Filter',
      all: 'All',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success'
    },
    footer: {
      aboutUs: 'About Us',
      history: 'History',
      mission: 'Mission',
      vision: 'Vision',
      values: 'Values',
      activities: 'Activities',
      news: 'News',
      projects: 'Projects',
      videos: 'Videos',
      gallery: 'Gallery',
      contact: 'Contact',
      contactUs: 'Contact Us',
      joinUs: 'Join Us',
      volunteer: 'Volunteer',
      support: 'Support',
      newsletterDesc: 'Subscribe to receive our latest news and activities',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    stats: {
      members: 'Members',
      projects: 'Projects',
      beneficiaries: 'Beneficiaries',
      volunteers: 'Volunteers',
      years: 'Years',
      communities: 'Communities'
    }
  },
  km: {
    nav: {
      home: 'ទំព័រដើម',
      about: 'អំពីយើង',
      structure: 'រចនាសម្ព័ន្ធ',
      news: 'ព័ត៌មាន & ព្រឹត្តិការណ៍',
      videos: 'វីដេអូ',
      projects: 'គម្រោង',
      gallery: 'ជម្រុំរូបភាព',
      contact: 'ទំនាក់ទំនង',
      joinUs: 'ចូលរួម'
    },
    nav: {
      latestNews: 'ព័ត៌មានថ្មី',
      events: 'ព្រឹត្តិការណ៍',
      allProjects: 'គម្រោងទាំងអស់',
      community: 'សហគមន៍',
      education: 'ការអប់រំ',
      culture: 'វប្បធម៌',
      sports: 'កីឡា'
    },
    hero: {
      title: 'ក្រុមអ្នកស្រឡាញ់សង្គម',
      subtitle: 'ការកសាងសហគមន៍ដ៏រឹងមាំ',
      description: 'យើងជាក្រុមអ្នកស្រឡាញ់សង្គមដែលផ្តោតលើការអប់រំ វប្បធម៌ និងការអភិវឌ្ឍន៍សហគមន៍',
      learnMore: 'ស្វែងយល់បន្ថែម',
      watchVideo: 'មើលវីដេអូ',
      projectTitle: 'គម្រោងកាត់សក់សប្បុរស',
      projectSubtitle: 'គម្រោងបេរ័ត្នសង្គម',
      projectDescription: 'ការកាត់សក់ដោយឥតគិតថ្លៃសម្រាប់បងប្អូនដែលមានស្ថានភាពបញ្ហា',
      viewProjects: 'មើលគម្រោង',
      educationTitle: 'ការអប់រំ និងវប្បធម៌',
      educationSubtitle: 'ការសិក្សា និងបេតិកភណ្ឌ',
      educationDescription: 'ការលើកកម្ពស់ការអប់រំ និងការអភិរក្សវប្បធម៌ខ្មែរ',
      joinUs: 'ចូលរួម'
    },
    home: {
      achievements: 'ជោគជ័យរបស់យើង',
      achievementsDesc: 'តាមរយៈការខិតខំប្រឹងប្រែងរបស់អ្នកស្ម័គ្រចិត្ត យើងបានសម្រេចជោគជ័យនៅក្នុងវិស័យផ្សេងៗ',
      mission: 'បេសកកម្មរបស់យើង',
      missionTitle: 'បេសកកម្មរបស់យើង',
      missionDesc: 'យើងជាក្រុមអ្នកស្រឡាញ់សង្គមដែលបានបង្កើតឡើងក្នុងគោលបំណង ជួយដល់សហគមន៍តាមរយៈការអប់រំ វប្បធម៌ និងការអភិវឌ្ឍន៍សង្គម។',
      missionText: 'យើងជឿជាក់ថា ការអប់រំគឺជាមូលដ្ឋានសំខាន់បំផុតនៃការអភិវឌ្ឍន៍ និងការសាងសង់អនាគតដ៏ភ្លឺស្វាងសម្រាប់កុមារ និងយុវជនកម្ពុជា។',
      focusAreas: 'វិស័យសកម្មភាព',
      focusAreasDesc: 'យើងផ្តោតលើការកសាងសហគមន៍តាមរយៈវិស័យសំខាន់ៗទាំងនេះ',
      joinCommunity: 'ចូលរួមជាមួយយើង',
      joinDesc: 'ក្លាយជាផ្នែកមួយនៃការផ្លាស់ប្តូរវិជ្ជមាន ចូលរួមវិភាគទានក្នុងការកសាង់សហគមន៍ដ៏រឹងមាំ',
      becomeVolunteer: 'ក្លាយជាស្ម័គ្រចិត្ត',
      viewProjects: 'មើលគម្រោងរបស់យើង',
      education: 'ការអប់រំ',
      educationDesc: 'ការផ្តល់ការអប់រំគុណភាពដល់កុមារ និងយុវជនក្នុងសហគមន៍',
      culture: 'វប្បធម៌',
      cultureDesc: 'ការអភិរក្ស និងលើកកម្ពស់វប្បធម៌ប្រពៃណីខ្មែរ',
      social: 'សង្គម',
      socialDesc: 'ការជួយប្រជាជនដែលមានស្ថានភាពពិបាក',
      activeMembers: 'សមាជិកសកម្មក្នុងក្រុម',
      successfulProjects: 'គម្រោងបានអនុវត្តជោគជ័យ',
      educatedChildren: 'កុមារ និងយុវជនបានទទួលការអប់រំ',
      helpedFamilies: 'គ្រួសារបានទទួលការជួយ'
    },
    about: {
      title: 'អំពី Mettyerng',
      subtitle: 'ស្វែងយល់ពីរចនាសម្ព័ន្ធ និងក្រុមការងាររបស់យើង',
      mission: 'បេសកកម្ម',
      vision: 'ទស្សនវិស័យ',
      values: 'តម្លៃរបស់យើង',
      valuesDesc: 'តម្លៃដ៏សំខាន់ទាំងនេះនាំដំណើរការងាររបស់យើងក្នុងការកសាងសហគមន៍',
      journey: 'ដំណើរការរបស់យើង',
      journeyDesc: 'ស្នាមដានមួយចំនួននៃការលូតលាស់ និងសមិទ្ធផលរបស់យើងតាំងពីឆ្នាំ 2018',
      team: 'ក្រុមការងារ',
      teamDesc: 'សមាជិកស្នូលដែលបានក្តាប់ក្តែងមិននេះនៅក្នុងការកសាងសហគមន៍'
    },
    projects: {
      title: 'គម្រោងរបស់យើង',
      subtitle: 'ស្វែងយល់ពីគម្រោង និងសកម្មភាពសហគមន៍របស់យើង',
      impact: 'ផលប៉ះពាល់របស់យើង',
      impactDesc: 'សមិទ្ធផលរបស់យើង',
      allProjects: 'គម្រោងទាំងអស់',
      showing: 'បង្ហាញ',
      of: 'នៃ',
      projects: 'គម្រោង',
      noResults: 'រកមិនឃើញគម្រោង',
      clearFilters: 'លុបតម្រងទាំងអស់',
      categories: {
        all: 'គម្រោងទាំងអស់',
        community: 'សហគមន៍',
        education: 'ការអប់រំ',
        culture: 'វប្បធម៌',
        sports: 'កីឡា'
      }
    },
    contact: {
      title: 'ទំនាក់ទំនងជាមួយយើង',
      subtitle: 'ទាក់ទងមកយើងសម្រាប់ការសហការ ការចូលរួម ឬសំណួរផ្សេងៗ',
      info: 'ព័ត៌មានទំនាក់ទំនង',
      sendMessage: 'ផ្ញើសារមកយើង',
      name: 'ឈ្មោះ',
      email: 'អ៊ីមែល',
      phone: 'ទូរសព្ទ',
      department: 'ផ្នែក',
      subject: 'ប្រធានបទ',
      message: 'សារ',
      send: 'ផ្ញើសារ',
      sending: 'កំពុងផ្ញើ...',
      workingHours: 'ម៉ោងបើកធ្វើការ',
      followUs: 'តាមដានយើង',
      quickActions: 'សកម្មភាពលឿន',
      volunteer: 'ចូលរួមជាស្ម័គ្រចិត្ត',
      donate: 'ការឧបត្ថម្ភ',
      location: 'ទីតាំងរបស់យើង'
    },
    common: {
      readMore: 'អានបន្ត',
      viewMore: 'មើលបន្ថែម',
      learnMore: 'ស្វែងយល់បន្ថែម',
      viewDetails: 'មើលលម្អិត',
      back: 'ត្រលប់',
      next: 'បន្ទាប់',
      previous: 'មុន',
      close: 'បិទ',
      search: 'ស្វែងរក',
      filter: 'តម្រង',
      all: 'ទាំងអស់',
      loading: 'កំពុងផ្ទុក...',
      error: 'កំហុស',
      success: 'ជោគជ័យ'
    },
    footer: {
      aboutUs: 'អំពីយើង',
      history: 'ប្រវត្តិ',
      mission: 'បេសកកម្ម',
      vision: 'ទស្សនវិស័យ',
      values: 'តម្លៃ',
      activities: 'សកម្មភាព',
      news: 'ព័ត៌មាន',
      projects: 'គម្រោង',
      videos: 'វីដេអូ',
      gallery: 'រូបភាព',
      contact: 'ទំនាក់ទំនង',
      contactUs: 'ទំនាក់ទំនង',
      joinUs: 'ចូលរួម',
      volunteer: 'បេរ័ត្នស្ម័គ្រចិត្ត',
      support: 'ការឧបត្ថម្ភ',
      newsletterDesc: 'ចុះឈ្មោះទទួលព័ត៌មានថ្មីៗ និងសកម្មភាពរបស់យើង',
      emailPlaceholder: 'បញ្ចូលអ៊ីមែលរបស់អ្នក',
      subscribe: 'ចុះឈ្មោះ',
      privacy: 'គោលការណ៍ភាពឯកជន',
      terms: 'លក្ខខណ្ឌសេវាកម្ម'
    },
    stats: {
      members: 'សមាជិក',
      projects: 'គម្រោង',
      beneficiaries: 'អ្នកទទួលផល',
      volunteers: 'ស្ម័គ្រចិត្ត',
      years: 'ឆ្នាំ',
      communities: 'សហគមន៍'
    }
  }
};

// Hook for easy access to translations
export const useTranslation = () => {
  const { language, t } = useLanguageStore();
  return { language, t };
};