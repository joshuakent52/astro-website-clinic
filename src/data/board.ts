/**
 * Content for the "Meet the Board" page (/about/board).
 * Kept separate from the section components so copy, images, and the
 * roster can be updated without touching any markup.
 *
 * Each bio is written as separate paragraphs, separated by newlines
 * (same convention as the quote text in data/donate.ts). The final
 * "WHY:" paragraph is optional — not every board member has one.
 */

export interface BoardMember {
  name: string;
  title: string;
  /** Path under /images, e.g. "/images/bio1.png". */
  image: string;
  bio: string;
}

export const heading = "Bingham Family Clinic Board of Directors";

export const members: BoardMember[] = [
  {
    name: "Kirk Woodward",
    title: "CEO",
    image: "/images/kirk.png",
    bio: "Kirk Woodward M.D. brings a distinguished blend of clinical expertise, compassionate care, and decades of real-world experience to the Bingham Family Clinic. As a dedicated physician, he has served countless individuals and families with integrity, precision and heart.\nBeyond his clinical practice, Dr. Woodward is an advocate for education and community health. He has mentored future healthcare professionals, participated in service-driven medical initiatives, and consistently contributed to advancing healthcare delivery through thoughtful leadership and innovation.\nWHY: I believe at the center of every primary care provider is the desire to care for people. Having the opportunity to provide a free clinic where our friends and neighbors can access care is really at the heart of primary cares values.",
  },
  {
    name: "Sherilee Woodward",
    title: "Executive Director",
    image: "/images/sherilee.png",
    bio: "Sherilee is a dynamic leader, educator and entrepreneur whose life reflects a deep commitment to learning, service and community. With nearly forty years of experience spanning research, public relations, management and business ownership, Sherilee brings a wealth of practical knowledge and heartfelt insight to every endeavor.\nSherilee is not only a skilled communicator and strategic thinker but also a creative spirit. She is passionate about the arts, environmental stewardship and empowering others through education and mentorship. Her work, both professional and personal, is grounded in strong values, family connections and a desire to serve.\nWHY: I am passionate about people and volunteering. The Bingham Family Clinic provides me with the privilege of serving others in a way that connects with my soul. I believe strong families are the foundation of strong communities.",
  },
  {
    name: "Bonnie Jensen",
    title: "Secretary",
    image: "/images/bonnie.png",
    bio: "Bonnie Jensen joined The Bingham Family Clinic as Secretary, where she supports the board in its mission to provide free, compassionate healthcare to families in need. She has many years of experience in office management, HR, and executive support, and is known for her reliability, attention to detail, and commitment to service.\nProfessionally, Bonnie serves as Executive Assistant at Blue Diamond Capital, supporting the leadership team and overseeing office administration.\nWHY: I care deeply about ensuring that families in our community have access to healthcare when they need it most. I serve with The Bingham Family Clinic because I believe in its mission of providing free, compassionate medical care to those who might otherwise go without.",
  },
  {
    name: "Michael McKay",
    title: "Treasurer",
    image: "/images/mckay.png",
    bio: "Michael McKay serves as Treasurer of The Bingham Family Clinic where he oversees the clinic's financial stewardship to support its mission of providing free medical care to families in need. With a strong background in accounting, tax compliance, and financial reporting, he ensures the clinic's resources are managed responsibly and sustainably to maximize impact in the community.\nProfessionally, Mr. McKay is Chief Accounting Officer at Blue Diamond Capital, where he leads financial reporting, tax planning, and compliance. He holds a bachelor's degree in accounting from Brigham Young University and a master's degree in accounting from the University of Utah.\nWHY: I serve with The Bingham Family Clinic because it is dedicated to helping individuals and families in need of quality medical care. I can't think of a better way to support our community's health and wellbeing.",
  },
  {
    name: "Marc Bingham",
    title: "Founder",
    image: "/images/marc.png",
    bio: "Marc Bingham, along with his wife, Deborah Bingham, are the Founders of the Bingham Family Clinic. Marc brings with him a lifetime of entrepreneurial success, community investment, and dedication to improving the lives of families across Utah and beyond.\nMr. Bingham co-founded Blue Diamond Capital in 2007 after selling the majority interest in his previous company, Phone Directories Company (PDC). Blue Diamond Capital manages a diverse portfolio across the United States and Canada, with investments in public securities, private equity, and real estate—including hospitality, retail, residential construction, multifamily, and office projects. Blue Diamond has also had successful exits in storage and industrial real estate.\nBefore Blue Diamond, Marc founded Phone Directories Company in 1971 and guided its growth into a nationally recognized enterprise. Under his leadership, PDC expanded to more than 700 employees, $75 million in annual revenues, and operations in 18 states and throughout Canada.\nAs Founder of the Bingham Family Clinic, Marc continues his lifelong mission of service by helping create a place where families can access compassionate, high-quality care, guided by the same values of innovation, integrity, and community that have shaped his career and philanthropy.",
  },
  {
    name: "Deborah Bingham",
    title: "Founder",
    image: "/images/debbie.png",
    bio: "Deborah Bingham, along with her husband Marc Bingham, are the Founders of the Bingham Family Clinic. Deborah brings decades of leadership, service, and community engagement to advance compassionate healthcare.\nMrs. Bingham co-founded Blue Diamond Capital in 2007 and serves as President and Chair of the Marc C. and Deborah H. Bingham Foundation, a charitable organization funded through the past success of Phone Directories Company (PDC) and the current and future endeavors of Blue Diamond Capital.\nShe has served on the Board of Trustees at Utah Valley University and spent nine years on the Utah Valley University Foundation Board, including four years as Chair. During her tenure, she oversaw significant fundraising initiatives that doubled annual contributions, expanded donor engagement, and funded milestone projects.\nAt the Bingham Family Clinic, Deborah applies her lifelong dedication to service, leadership, and community building to ensure that families receive quality care and compassionate support.",
  },
  {
    name: "Michael Bingham",
    title: "Founder",
    image: "/images/gina.png",
    bio: "Michael is an active philanthropist with a desire to provide help focused on healthcare, education and animal rescue.\nMichael Bingham is co-founder and Chief Investment Officer of Blue Diamond Capital. Mr. Bingham is an Investment professional and CPA with over thirty years of investment management, M and A, financing, and operations management. As the CIO for Blue Diamond Capital, Mr. Bingham helped the company significantly grow its portfolio. In addition to his involvement at Blue Diamond Capital, Mr. Bingham serves on for profit and not for profit boards.\nHe enjoys spending time with family, traveling the world, boating at Lake Powell and serving in their community.\nWHY: I believe that we have been blessed in our life and in return we must be good stewards of what God has given us. I am grateful to be able to help others and believe that it is our responsibility to do so. One of the core elements of happiness in life is health. Health impacts the way a person lives, loves and serves. As stewards, we want to provide a path for those without means to receive care in a dignified manner so that they can enjoy the fruits of what life has to offer.",
  },
  {
    name: "Gina Bingham",
    title: "Founder",
    image: "/images/gina.png",
    bio: "Gina Bingham is an active philanthropist with a desire to provide help focused on healthcare, education and animal rescue.\nGina Bingham is active as a mother, in her church and as a kitten foster with the South Utah County shelter. Her love of animals began at a young age and continues through today. Her most successful foster was a farm boy from Box Elder county.\nShe enjoys spending time with family, traveling the world, boating and serving in her community.\nWHY: I believe that we have been blessed in our life and in return we must be good stewards of what God has given us. I am grateful to be able to help others and believe that it is our responsibility to do so. One of the core elements of happiness in life is health. Health impacts the way a person lives, loves and serves. As stewards, we want to provide a path for those without means to receive care in a dignified manner so that they can enjoy the fruits of what life has to offer.",
  },
];
