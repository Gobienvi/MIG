export interface Testimony {
  slug: string;
  name: string;
  family: string;
  role: string;
  image?: string;
  excerpt: string;
  paragraphs: string[];
  advice?: string;
}

export const testimonies: Testimony[] = [
  {
    slug: 'constanza-jara',
    name: 'Constanza Jara',
    family: 'Mother of two (infant and preschooler)',
    role: 'Barrick Exploration Manager Dominican Republic and Jamaica',
    image: '/images/Constanza-Jara.jpeg',
    excerpt:
      'I wanted to become a geologist ever since I was in Primary School, for I loved the outdoors and did not want an office job. I found Earth Sciences fascinating …',
    paragraphs: [
      'I wanted to become a geologist ever since I was in Primary School, for I loved the outdoors and did not want an office job. I found Earth Sciences fascinating, so to be able to do fieldwork and work in Exploration is just my passion. I am fortunate enough that my husband also shares and understands this passion so when we decided to become parents we were both on board with the fact I wanted to keep going to the field and we were going to make it work together.',
      'When my first boy, Anibal, was born I was able to spend an important time with him due to COVID lockup, so at 18 months he was well breastfeed and I was eager to go back to the field. It was not easy, but I had the support of my colleagues, family and of course my husband\'s, I knew Anibal was well taken care of, so I went to the field confident that he was well and growing to be a happy kid. Did I felt guilty? Of course yes, even cried sometimes. But being able to do geology was also fulfilling and I always have fun in the field. It was definitely not easy, but I was determined to make it work and I felt it was worthwhile.',
      'That time was very important for it gave me the ability to manage a project of my own, apply what I learnt during my PhD so I was more confident of myself as a geologist, and also plan for a strategy to optimize time in the field so when I return home I was able to truly spend time with my family. After this, came the opportunity of a promotion to Exploration Manager, which I initially discarded for we were looking forward to have a brother for Anibal. To me, it is very important to BE in the field with my team, but the problem was that I was not going to be able to go to the field if I got pregnant (high altitude is risky for pregnancy). So in my mind it was impossible to become a manager and a mother again at the same time. However, I want to thank my boss, Javier Ortuzar, who kept encouraging me and presented alternatives on how that situation can be handled when the time came. I still remember his words: "I don\'t believe that in a company like this there can\'t be career paths for women leaders, I have a daughter and I would like her to have an opportunity too". So when I got pregnant with Lucas, we planned a calendar to have an Interim Manager while I was away and also had a return schedule so I am able to breastfeed my son properly.',
      'Right now, I\'m a mother of two and an Exploration Manager. I\'m living my dream of exploring in a fascinating, foreign country, where I live and enjoy with my family. I\'m continuously growing with all the challenges and teachings that Motherhood and Geology keep bringing me, both complementing each other with wonderful experiences and learnings that I even sometimes use in each other. I\'m definitely thankful first and above all to my husband, Gonzalo Henriquez, who has been super supportive of his crazy wife, and is a great father to Anibal and Lucas. Without him, this would not be able to be possible. I\'m also very thankful to the leadership in Barrick Exploration through the years, who have been fundamental in my career and never made me feel I was underestimated for being a woman.',
    ],
    advice:
      'Believe in yourselves, you CAN be a field geologist and a mother if you want to. Talk about it with your partner, if you have, or with your support circle, so you\'re all in the same page and work together. There\'s no shame on asking for help on anything. If you\'re confident, plan together with the company too, there\'s no bad in discussing this at work so you can all plan for your time off and when you return. Try to learn the skills on the way that will help you to find a balance, such as time-management. As a working mother anyway you\'ll have to prioritize. And if you don\'t want to do any of this and change your mind and be full time with your family, that\'s OK too! In the end, just be honest with yourself and with the people you care around you.',
  },
  {
    slug: 'emilie',
    name: 'Emilie',
    family: 'Mother of two (pre-teens)',
    role: 'Database Geologist',
    image: undefined,
    excerpt:
      'I changed from exploration geologist fifo in campaign style (2 weeks on site and 1 week at the office) to Database administrator 4 years after having kids. I got the right opportunity…',
    paragraphs: [
      'I changed from exploration geologist fifo in campaign style (2 weeks on site and 1 week at the office) to Database administrator 4 years after having kids. I got the right opportunity. I replaced a friend during her maternity leave and then she came back part time, same as me so we could job share. I had to have an au pair during 6months to help me when getting used to the new job and because of fifo husband on various types of rosters. The main challenges were to care for the kids (drop off and pick up at day care and kindy at some stage) and managing the kids when husband was away as well as learning a completely new job even if still related to geology in a way but requiring a lot of concentration which can be hard with lack of sleep due to young children…',
    ],
    advice:
      'Get an office based job before it happens and never trust mining companies when you tell them you are pregnant (save every email, communications and know your rights), some could still try to make you redundant instead of trying to accommodate if they can justify.',
  },
  {
    slug: 'sarah-gain',
    name: 'Sarah Gain',
    family: 'Mother of One (Infant)',
    role: 'Senior Mineralogist',
    image: '/images/Sarah Gain.jpeg',
    excerpt:
      'I chose geoscience because of my interest in rocks and the natural environment. I\'ve worked in universities, state government and now industry. It might be a little early to comment on if motherhood has…',
    paragraphs: [
      'I chose geoscience because of my interest in rocks and the natural environment. I\'ve worked in universities, state government and now industry. It might be a little early to comment on if motherhood has significantly affected my career but the company and role I am in, have a lot of allowances for working parents to encourage return to work and reduce career impact. I did find that my decision to start a family was delayed due to roles/workplaces where I felt like starting a family would negatively affect my career. I have friends around me that are working mothers which was a great source of information and reassurance that it is all possible, although not easy.',
    ],
  },
  {
    slug: 'laura',
    name: 'Laura',
    family: 'Mother of Two',
    role: 'Research Fellow',
    image: '/images/Laura.jpeg',
    excerpt:
      'I decided to study geology because I really enjoyed it in high school. Once at university, I had the opportunity to do my first internship on a gold exploration project, doing soil sampling in French Guiana…',
    paragraphs: [
      'I decided to study geology because I really enjoyed it in high school. Once at university, I had the opportunity to do my first internship on a gold exploration project, doing soil sampling in French Guiana, in the middle of the Amazonian Forest. I absolutely loved this experience. I knew I wanted to keep doing fieldwork. I loved the adventure, the travel, and working in remote places. After graduation, I worked with the geological exploration bureau of Québec in Canada, where I spent several entire summers doing large-scale geological mapping in the far North. We camped out for about three months at a time. It was one of the best experiences I\'ve had, and I have really fond memories of it. I then did a Master\'s by research in Montreal, studying a rare earth deposit. After finishing, I decided to move to Australia. I worked for a few junior exploration companies, doing campaign-style work across the Northern Territory and Western Australia. Again, I really enjoyed the adventure of working in remote parts of the country. I think the most exciting part of fieldwork in Australia was the creek crossings, sometimes through potentially crocodile-infested rivers. But at that point, I was starting to think about having kids, and I couldn\'t see a path forward in those roles. There wasn\'t much in terms of career progression in junior companies, and the lifestyle wasn\'t exactly compatible with family life. I was also starting to find exploration work less fulfilling. I wanted to understand more about ore-forming processes and wasn\'t as interested in the exploration side anymore. I was mainly enjoying the fieldwork. So I started a PhD in Perth, Australia studying gold deposit formation. After finishing, I moved into a postdoc position, also in Perth. It was mostly office-based and flexible, with only occasional field trips to mining sites. That\'s when I had my two kids, 14 months apart. Having children while working in academia came with its challenges, but I\'ve been lucky to continue doing work I love while staying flexible enough to care for my little ones. I was able to take maternity leave, work part-time when I needed to, and take carer\'s leave when they were sick (which happened a lot during their first year in childcare). If you don\'t have family support and your partner\'s job isn\'t flexible (like it is the case for me), continuing to work and stay productive can actually be very stressful in those early years. My kids are still young and often unwell, so it\'s hard to stay on top of everything in my field. I do worry about staying competitive enough to stick around in academia, but I really enjoy going to work and that\'s the most important thing!',
    ],
    advice: 'Anticipate by getting a job that is flexible.',
  },
];

export function getTestimony(slug: string): Testimony | undefined {
  return testimonies.find((t) => t.slug === slug);
}
