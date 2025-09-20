// questions.ts
interface Company {
  id: string;
  name: string;
  logo_url: string;
}

interface Question {
  id: string;
  company_id: string;
  question_text: string;
  time_limit: number;
  max_retries: number;
}

export const companies: Company[] = [
  {
    "id": "1",
    "name": "Market-based Questions",
    "logo_url": "https://example.com/market-based questions-logo.png"
  },
  {
    "id": "2",
    "name": "Team-related Questions",
    "logo_url": "https://example.com/team-related questions-logo.png"
  },
  {
    "id": "3",
    "name": "News/Market-related Questions",
    "logo_url": "https://example.com/news/market-related questions-logo.png"
  },
  {
    "id": "4",
    "name": "Why Firm-related Questions",
    "logo_url": "https://example.com/why firm-related questions-logo.png"
  },
  {
    "id": "5",
    "name": "Integrity-related Questions",
    "logo_url": "https://example.com/integrity-related questions-logo.png"
  },
  {
    "id": "6",
    "name": "Adversity-related Questions",
    "logo_url": "https://example.com/adversity-related questions-logo.png"
  },
  {
    "id": "7",
    "name": "Decision-related Questions",
    "logo_url": "https://example.com/decision-related questions-logo.png"
  },
  {
    "id": "8",
    "name": "ETC",
    "logo_url": "https://example.com/etc-logo.png"
  },
  {
    "id": "9",
    "name": "J.P. Morgan",
    "logo_url": "https://example.com/j.p. morgan-logo.png"
  },
  {
    "id": "10",
    "name": "UBS",
    "logo_url": "https://example.com/ubs-logo.png"
  },
  {
    "id": "11",
    "name": "Prudential",
    "logo_url": "https://example.com/prudential-logo.png"
  },
  {
    "id": "12",
    "name": "Morgan Stanley",
    "logo_url": "https://example.com/morgan stanley-logo.png"
  },
  {
    "id": "13",
    "name": "SMBC",
    "logo_url": "https://example.com/smbc-logo.png"
  },
  {
    "id": "14",
    "name": "Blackrock",
    "logo_url": "https://example.com/blackrock-logo.png"
  },
  {
    "id": "15",
    "name": "Goldman Sachs",
    "logo_url": "https://example.com/goldman sachs-logo.png"
  },
  {
    "id": "16",
    "name": "Blackstone",
    "logo_url": "https://example.com/blackstone-logo.png"
  },
  {
    "id": "17",
    "name": "Citizens",
    "logo_url": "https://example.com/citizens-logo.png"
  },
  {
    "id": "18",
    "name": "Bank of America",
    "logo_url": "https://example.com/bank of america-logo.png"
  },
  {
    "id": "19",
    "name": "Evercore",
    "logo_url": "https://example.com/evercore-logo.png"
  },
  {
    "id": "20",
    "name": "Wells Fargo",
    "logo_url": "https://example.com/wells fargo-logo.png"
  },
  {
    "id": "21",
    "name": "Citi",
    "logo_url": "https://example.com/citi-logo.png"
  },
  {
    "id": "22",
    "name": "Columbia Threadneedle Investments",
    "logo_url": "https://example.com/columbia threadneedle investments-logo.png"
  },
  {
    "id": "23",
    "name": "Parametric",
    "logo_url": "https://example.com/parametric-logo.png"
  },
  {
    "id": "24",
    "name": "Barclays",
    "logo_url": "https://example.com/barclays-logo.png"
  },
  {
    "id": "25",
    "name": "Principal",
    "logo_url": "https://example.com/principal-logo.png"
  },
  {
    "id": "26",
    "name": "Cantor Fitzgerald",
    "logo_url": "https://example.com/cantor fitzgerald-logo.png"
  },
  {
    "id": "27",
    "name": "Hamilton Lane",
    "logo_url": "https://example.com/hamilton lane-logo.png"
  },
  {
    "id": "28",
    "name": "Madison Energy Infrastructure",
    "logo_url": "https://example.com/madison energy infrastructure-logo.png"
  },
  {
    "id": "29",
    "name": "PNC",
    "logo_url": "https://example.com/pnc-logo.png"
  },
  {
    "id": "30",
    "name": "TP ICAP",
    "logo_url": "https://example.com/tp icap-logo.png"
  },
  {
    "id": "31",
    "name": "Ardian",
    "logo_url": "https://example.com/ardian-logo.png"
  },
  {
    "id": "32",
    "name": "General Atlantic",
    "logo_url": "https://example.com/general atlantic-logo.png"
  },
  {
    "id": "33",
    "name": "Apollo",
    "logo_url": "https://example.com/apollo-logo.png"
  },
  {
    "id": "34",
    "name": "Bain",
    "logo_url": "https://example.com/bain-logo.png"
  },
  {
    "id": "35",
    "name": "Carlyle",
    "logo_url": "https://example.com/carlyle-logo.png"
  },
  {
    "id": "36",
    "name": "Silver Lake",
    "logo_url": "https://example.com/silver lake-logo.png"
  },
  {
    "id": "37",
    "name": "KKR",
    "logo_url": "https://example.com/kkr-logo.png"
  },
  {
    "id": "38",
    "name": "TPG",
    "logo_url": "https://example.com/tpg-logo.png"
  },
  {
    "id": "39",
    "name": "Warburg Pincus",
    "logo_url": "https://example.com/warburg pincus-logo.png"
  },
  {
    "id": "40",
    "name": "Nomura",
    "logo_url": "https://example.com/nomura-logo.png"
  },
  {
    "id": "41",
    "name": "Deutsche Bank",
    "logo_url": "https://example.com/deutsche bank-logo.png"
  },
  {
    "id": "42",
    "name": "Bernstein",
    "logo_url": "https://example.com/bernstein-logo.png"
  },
  {
    "id": "43",
    "name": "DLP Capital",
    "logo_url": "https://example.com/dlp capital-logo.png"
  },
  {
    "id": "44",
    "name": "U.S. Bank",
    "logo_url": "https://example.com/u.s. bank-logo.png"
  },
  {
    "id": "45",
    "name": "Shell",
    "logo_url": "https://example.com/shell-logo.png"
  }
];

export const questions: Question[] = [
  {
    "id": "1",
    "company_id": "0",
    "question_text": "How do you handle working under pressure?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "2",
    "company_id": "1",
    "question_text": "What recent trends have been observed in equity markets?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "3",
    "company_id": "1",
    "question_text": "Can you name some of the main equity indices and provide their closing values from yesterday?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "4",
    "company_id": "1",
    "question_text": "Describe a few notable recent mergers and acquisitions.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "5",
    "company_id": "1",
    "question_text": "How would you assess the current state of the IPO market and what do you anticipate for its future trajectory?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "6",
    "company_id": "1",
    "question_text": "Explain the progression of the \"credit crunch\" - how did it originate and evolve over time?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "7",
    "company_id": "1",
    "question_text": "Compare current interest rates to those of the previous year and provide reasons for any changes",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "8",
    "company_id": "1",
    "question_text": "Is the current economic situation a global issue? Which economies have been most significantly affected?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "9",
    "company_id": "1",
    "question_text": "Define deflation discuss some of its causes and explain its impacts",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "10",
    "company_id": "1",
    "question_text": "Analyze the recent trends in oil and commodity prices over the past year.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "11",
    "company_id": "1",
    "question_text": "Identify the major currencies and highlight the significant currency themes observed in recent months.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "12",
    "company_id": "1",
    "question_text": "Discuss the impact of the economy on companies and equities.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "13",
    "company_id": "1",
    "question_text": "Assess the prospects of the equity markets going forward and speculate on future developments.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "14",
    "company_id": "1",
    "question_text": "Given the circumstances which sectors would you consider investing in presently or once the \"crisis\" subsides?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "15",
    "company_id": "1",
    "question_text": "Explore the origin and meaning of the term \"credit crunch\" in financial contexts.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "16",
    "company_id": "1",
    "question_text": "Provide definitions for the following terms: Bonds Futures Cable CDS CDO rates hiking hawkish bullish dovish bearish.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "17",
    "company_id": "1",
    "question_text": "How has the perception of risk-taking evolved in the past few months/years?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "18",
    "company_id": "1",
    "question_text": "What are the reasons behind central banks' decisions to cut interest rates? In your opinion should they consider further rate cuts?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "19",
    "company_id": "1",
    "question_text": "What is your outlook on inflation?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "20",
    "company_id": "1",
    "question_text": "What measures are the governments of the US EUR and UK implementing to address the current market crisis?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "21",
    "company_id": "1",
    "question_text": "If you had £100 to invest where would you allocate it?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "22",
    "company_id": "1",
    "question_text": "What are your predictions for the direction of the commodities rates and equities markets in 2012? What factors influence your outlook?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "23",
    "company_id": "1",
    "question_text": "Provide updates on the current positions of UST (US Treasury Bonds) Cable",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "24",
    "company_id": "1",
    "question_text": "(GBP/USD exchange rate) Euro and Dollars (USD).",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "25",
    "company_id": "1",
    "question_text": "Why are you interested in pursuing a career in an industry unrelated to your academic studies?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "26",
    "company_id": "1",
    "question_text": "What specific research have you conducted to familiarize yourself with the role you are applying for?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "27",
    "company_id": "1",
    "question_text": "How do interest rates impact property demand?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "28",
    "company_id": "2",
    "question_text": "Tell us about an occasion when you influenced others to think beyond the obvious or to be more creative. What was your role? What were your ideas? How did you communicate them? What was the reaction?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "29",
    "company_id": "2",
    "question_text": "Tell us about a time when your views have differed materially from those of one or more fellow team members. How did you handle the situation? What was the outcome?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "30",
    "company_id": "2",
    "question_text": "Tell me about a time you were able to successfully deal with another person even when that individual may not have personally liked you (or vice versa).",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "31",
    "company_id": "2",
    "question_text": "Tell me about a time when you delegated a project effectively.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "32",
    "company_id": "2",
    "question_text": "Can you describe a situation where you had to handle and submit multiple pieces of work simultaneously? Were they individual tasks or group projects? If they were individual tasks what challenges did you face in meeting all the deadlines? If they were group projects how did you collaborate with others to ensure timely completion? What did you learn from this experience?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "33",
    "company_id": "2",
    "question_text": "Tell me about a time when you motivated others.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "34",
    "company_id": "3",
    "question_text": "How do you stay updated on current events in the business world? What do you consider to be the major ongoing issues in the business world whether on a local (UK/Europe) or global scale? Is there a specific recent event that you find significant in the business world and what makes it significant to you?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "35",
    "company_id": "3",
    "question_text": "In the past six months how have the financial markets particularly in the UK performed? How does this compare to other major developed and developing economies? If there are differences what factors do you believe explain these disparities?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "36",
    "company_id": "3",
    "question_text": "Considering the current economic climate how have investment banks been impacted? How have they responded to these challenges? What opportunities do you see for investment banks to develop and grow their businesses in the short and medium term?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "37",
    "company_id": "3",
    "question_text": "Can you provide an example of a company that has faced significant struggles during the economic downturn? Why do you think they have encountered such difficulties and what steps could they take to improve their position?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "38",
    "company_id": "3",
    "question_text": "Tell us about a company that has experienced rapid growth in recent years either during or excluding the downturn. What factors do you believe contributed to their success? How well have they performed financially? What potential opportunities do you see for further business growth? For companies that grew before the downturn how have they managed in the last 12 – 18 months? For companies that grew during the downturn what do you anticipate their prospects to be like in the next 12 – 18 months?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "39",
    "company_id": "4",
    "question_text": "Why do you think the company (X) where you gained work experience has been successful? How do they differentiate themselves from their competitors? Based on your first-hand experience what areas do you believe they could improve upon in their business?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "40",
    "company_id": "4",
    "question_text": "What attracted you to apply for this role? How extensively have you researched the role and industry? Are there any specific concerns or considerations you have? Are you considering other options as well?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "41",
    "company_id": "4",
    "question_text": "In your view what tasks and responsibilities will you handle during your internship and within the first two years of this role?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "42",
    "company_id": "5",
    "question_text": "Give me an example of a time when you set a goal and were able to meet or achieve it.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "43",
    "company_id": "5",
    "question_text": "Give me a specific example of a time when you had to conform to a policy with which you did not agree.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "44",
    "company_id": "5",
    "question_text": "Tell me about a time when you had to go above and beyond the call of duty in order to get a job done.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "45",
    "company_id": "5",
    "question_text": "Tell me about a time when you used your fact-finding skills to solve a problem.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "46",
    "company_id": "5",
    "question_text": "Tell me about a time when you were forced to make an unpopular decision.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "47",
    "company_id": "5",
    "question_text": "Tell us about a time when you produced work that clearly exceeded expectations. How did you achieve this?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "48",
    "company_id": "6",
    "question_text": "Tell me about a time when you missed an obvious solution to a problem.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "49",
    "company_id": "6",
    "question_text": "Tell me about a time when you had to deal with a very upset customer or co-worker.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "50",
    "company_id": "6",
    "question_text": "Tell me about a time when you had too many things to do and you were required to prioritize your tasks.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "51",
    "company_id": "6",
    "question_text": "Give me an example of when you had to approach a task in a new rather than established way? What necessitated the change of approach? What were the benefits of the change? Would you have done anything differently in hindsight?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "52",
    "company_id": "6",
    "question_text": "Tell me about a time when your workload and involvement in other activities left you with insufficient time to complete everything. How did you handle the situation? How did you prioritize and organize your tasks?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "53",
    "company_id": "6",
    "question_text": "Tell us about a time when your work responsibilities encroached on your personal time. How did you resolve this conflict? How did it make you feel?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "54",
    "company_id": "6",
    "question_text": "Give me an example of a time when you had to make a split-second decision.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "55",
    "company_id": "6",
    "question_text": "Describe a time when your workload forced you to miss a deadline. What could you have done differently in hindsight to avoid missing it?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "56",
    "company_id": "6",
    "question_text": "Tell me about a time when you were faced with a stressful situation that demonstrated your coping skills.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "57",
    "company_id": "7",
    "question_text": "Give me a specific example of a time when you used good judgment and logic in solving a problem.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "58",
    "company_id": "7",
    "question_text": "Can you recall a time when you had to make a decision without having all the desired information? What was the decision and what doubts did you have?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "59",
    "company_id": "7",
    "question_text": "Describe a time when you anticipated potential problems and developed preventive measures.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "60",
    "company_id": "7",
    "question_text": "Describe a situation where you had to rapidly learn difficult concepts? What was the outcome and what did you learn from the experience?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "61",
    "company_id": "7",
    "question_text": "Give me an example of when you showed initiative and took the lead.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "62",
    "company_id": "7",
    "question_text": "Describe a time when you were required to make a compelling presentation.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "63",
    "company_id": "7",
    "question_text": "Can you describe a situation where you had to make a decision quickly under pressure? How did you evaluate the success of your decision afterward?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "64",
    "company_id": "9",
    "question_text": "Describe a situation in which you were able to use persuasion to successfully convince someone to see things your way.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "65",
    "company_id": "9",
    "question_text": "Describe a time when you were faced with a stressful situation that demonstrated your coping skills.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "66",
    "company_id": "9",
    "question_text": "Give me a specific example of a time when you used good judgment and logic in solving a problem.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "67",
    "company_id": "9",
    "question_text": "Give me an example of a time when you set a goal and were able to meet or achieve it.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "68",
    "company_id": "9",
    "question_text": "Tell me about a time when you had to use your presentation skills to influence someone's opinion",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "69",
    "company_id": "9",
    "question_text": "Give me a specific example of a time when you had to conform to a policy with which you did not agree.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "70",
    "company_id": "9",
    "question_text": "Please discuss an important written document you were required to complete.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "71",
    "company_id": "9",
    "question_text": "Tell me about a time when you had to go above and beyond the call of duty in order to get a job done.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "72",
    "company_id": "9",
    "question_text": "Tell me about a time when you had too many things to do and you were required to prioritize your tasks.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "73",
    "company_id": "9",
    "question_text": "Give me an example of a time when you had to make a split second decision.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "74",
    "company_id": "9",
    "question_text": "What is your typical way of dealing with conflict? Give me an example.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "75",
    "company_id": "9",
    "question_text": "Tell me about a time you were able to successfully deal with another person even when that individual may not have personally liked you (or vice versa).",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "76",
    "company_id": "9",
    "question_text": "Tell me about a difficult decision you've made in the last year.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "77",
    "company_id": "9",
    "question_text": "Give me an example of a time when something you tried to accomplish and failed.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "78",
    "company_id": "9",
    "question_text": "Give me an example of when you showed initiative and took the lead.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "79",
    "company_id": "9",
    "question_text": "Tell me about a recent situation in which you had to deal with a very upset customer or co-worker.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "80",
    "company_id": "9",
    "question_text": "Give me an example of a time when you motivated others.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "81",
    "company_id": "9",
    "question_text": "Tell me about a time when you delegated a project effectively.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "82",
    "company_id": "9",
    "question_text": "Give me an example of a time when you used your fact-finding skills to solve a problem.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "83",
    "company_id": "9",
    "question_text": "Tell me about a time when you missed an obvious solution to a problem.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "84",
    "company_id": "9",
    "question_text": "Describe a time when you anticipated potential problems and developed preventive measures.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "85",
    "company_id": "9",
    "question_text": "Tell me about a time when you were forced to make an unpopular decision.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "86",
    "company_id": "9",
    "question_text": "Describe a time when you set your sights too high (or too low).",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "87",
    "company_id": "9",
    "question_text": "What is one company you would lend to and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "88",
    "company_id": "10",
    "question_text": "What type of passions or interest do you have that would help you in being successful into this programme at UBS",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "89",
    "company_id": "10",
    "question_text": "How do you keep current on the financial industry? Can you summarize a particular topic you’ve been following?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "90",
    "company_id": "10",
    "question_text": "Tell us about a time where you were asked to do something you had never done before. How did you react? What did you learn?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "91",
    "company_id": "10",
    "question_text": "How do you react when you are facing a particular setback to achieve your goal?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "92",
    "company_id": "10",
    "question_text": "Can you tell us more about a recent development in the financial markets you’ve found interesting (let’s say a recent deal UBS has worked on)?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "93",
    "company_id": "10",
    "question_text": "Which two metrics would you choose to assess a company?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "94",
    "company_id": "10",
    "question_text": "What interests you about working for a bank and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "95",
    "company_id": "10",
    "question_text": "What excites you about working at UBS?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "96",
    "company_id": "10",
    "question_text": "How do you share your ideas in a group setting?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "97",
    "company_id": "10",
    "question_text": "Tell us about a time when you needed to work as a team to solve a problem.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "98",
    "company_id": "10",
    "question_text": "How do you keep current on the financial industry? Can you summarize a particular topic you’ve been following?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "99",
    "company_id": "10",
    "question_text": "What makes a great salesperson in your view",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "100",
    "company_id": "11",
    "question_text": "Many say the US economy is in great shape. Many say it is not. What is your view and what evidence can you point to in support of your view?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "101",
    "company_id": "11",
    "question_text": "Would you lend to a company that makes roofing supplies or a movie theater chain? Please explain the factors that influence your decision.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "102",
    "company_id": "11",
    "question_text": "As an investor in a corporation’s debt how might your interests be aligned with those of an investor in a corporation’s equity? How might your interests differ?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "103",
    "company_id": "11",
    "question_text": "Explain operating leverage and why it is important. As an investor would you prefer to own the debt of a company with high fixed costs or high variable costs?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "104",
    "company_id": "11",
    "question_text": "Please share examples of your school or work experience that showcase your skills and illustrate why you would be a good fit for our PGIM Fixed Income organization",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "105",
    "company_id": "11",
    "question_text": "Describe your understanding of how key sociopolitical events such as the upcoming US presidential election can affect fixed income markets",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "106",
    "company_id": "11",
    "question_text": "Describe your understanding of the US yield curve - what factors influence the curve what is its current shape and what does the shape signify",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "107",
    "company_id": "12",
    "question_text": "Provide a brief introduction about yourself highlighting key aspects of your background experiences and career aspirations that make you a strong candidate for Morgan Stanley.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "108",
    "company_id": "12",
    "question_text": "\"Do the right thing\" is one of Morgan Stanley's core values. Describe a situation where you faced an ethical dilemma or pressure to compromise your integrity. How did you ensure you upheld this principle and what was the outcome?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "109",
    "company_id": "12",
    "question_text": "Considering your academic experiences what unique skills knowledge or perspectives do you believe you can bring to Morgan Stanley that would add value to our team?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "110",
    "company_id": "12",
    "question_text": "Reflect on your career or academic journey so far. What do you consider to be your most significant achievement and why? How does this achievement demonstrate your potential for success at Morgan Stanley?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "111",
    "company_id": "12",
    "question_text": "Why have you chosen to apply to Morgan Stanley specifically? How do our firm's values culture and opportunities align with your career goals and personal aspirations?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "112",
    "company_id": "12",
    "question_text": "Why are you interested in Morgan Stanley?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "113",
    "company_id": "12",
    "question_text": "Tell me about yourself",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "114",
    "company_id": "12",
    "question_text": "Tell me about a challenge you faced in the past and how you’ve overcome it",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "115",
    "company_id": "12",
    "question_text": "Describe our ability to collaborate and work in a group setting",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "116",
    "company_id": "12",
    "question_text": "Walk me through your resume",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "117",
    "company_id": "12",
    "question_text": "What do you usually do in your free time",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "118",
    "company_id": "12",
    "question_text": "Define success and failure in your own words",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "119",
    "company_id": "12",
    "question_text": "What would you be able to bring to this role",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "120",
    "company_id": "12",
    "question_text": "Why should we hire you",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "121",
    "company_id": "12",
    "question_text": "What are some other uses for a coat rack?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "122",
    "company_id": "13",
    "question_text": "What’s the most interesting thing about you that we wouldn’t learn from your resume alone?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "123",
    "company_id": "13",
    "question_text": "Why are you the best candidate for the role you've applied to?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "124",
    "company_id": "13",
    "question_text": "If you had 30 days to dedicate yourself to learning something new what would it be and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "125",
    "company_id": "14",
    "question_text": "Describe a time when you had to make a data-driven decision",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "126",
    "company_id": "14",
    "question_text": "What recent news/article have you read that brought you to apply at Blackrock",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "127",
    "company_id": "14",
    "question_text": "What steps do you take to stay up to date with market trends and developments? How do you incorporate these actions into your daily routine",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "128",
    "company_id": "15",
    "question_text": "Walk me through your resume",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "129",
    "company_id": "15",
    "question_text": "Situation: You have just submitted a critical monthly report on behalf of the team to your manager. You realize there is a mistake on a part of the report that is rarely reviewed. What would you do and who would you talk to about it? What would be your thought process for determining waht to do? What factors would you consider? How do you think your action would be received",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "130",
    "company_id": "15",
    "question_text": "Describe a situation where you had to face an obstacle",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "131",
    "company_id": "15",
    "question_text": "Tell me about a time when you had to make a decision in an uncertain or changing situation. What factors did you consider?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "132",
    "company_id": "15",
    "question_text": "Tell me about a time when you were not the leader in a team or project. How did you collaborate put forward your ideas and ensure your opinion was valued?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "133",
    "company_id": "15",
    "question_text": "Global market division: Describe the main differences between the work of a salesperson and a trader",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "134",
    "company_id": "15",
    "question_text": "You are asked to lead a team of employees from multiple divisions in different countries. What steps can you take to encourage a positive working environment for everyone on the assignment?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "135",
    "company_id": "15",
    "question_text": "You discovered that your coworker has been falsifying information in their reports to make them look more productive. Would you report this even though it could hurt your relationship with them?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "136",
    "company_id": "15",
    "question_text": "Why do you want to work at Goldman Sachs?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "137",
    "company_id": "15",
    "question_text": "What happens to net debt if a bond is issued?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "138",
    "company_id": "15",
    "question_text": "What are the components of the net debt that are put in the bridge?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "139",
    "company_id": "15",
    "question_text": "If you look at a clock and the time is 9:45 what is the angle between the hour and the minute hands",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "140",
    "company_id": "16",
    "question_text": "What is your greatest strength and how will that lend itself to succeeding in a role at Blackstone?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "141",
    "company_id": "16",
    "question_text": "Describe contributions you have made to fostering inclusion (e.g.: at work on a team on campus in a club in your community etc.)",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "142",
    "company_id": "16",
    "question_text": "Describe a situation where you had to adapt to unexpected changes or challenges in your work or studies. How did you stay focused and maintain a positive attitude in such circumstances?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "143",
    "company_id": "16",
    "question_text": "Describe a recent Blackstone initiative or strategy you found interesting and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "144",
    "company_id": "17",
    "question_text": "Describe a time where you adapted to a substantial change while working on a project or assignment. Please describe the situation how you adapted to the change and the outcome",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "145",
    "company_id": "17",
    "question_text": "Tell us about a time you achieved a challenging personal or professional goal. Please describe the strategies steps processes and approaches you put in place to achieve this goal to ensure you were successful. Describe the situation your actions and the outcome",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "146",
    "company_id": "8",
    "question_text": "Tell me about a time that you had to cultivate a relationship online",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "147",
    "company_id": "8",
    "question_text": "Why are you a good fit for this position/company",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "148",
    "company_id": "8",
    "question_text": "Tell me about a time you’ve faced adversity and how you handled it",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "149",
    "company_id": "8",
    "question_text": "when asked about overcoming obstacles interviewers are looking for things relating to professional activities (how to deal with a group member not pulling their weight how to deal with a rude customer how to make a decision with imperfect information how to manage multiple competing priorities). This interview question is not just to learn how you overcome adversity but also shows how you are able to determine what is appropriate to discuss in a professional setting and what is not.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "150",
    "company_id": "8",
    "question_text": "What major recent event should clients be worried about and how does that affect their portfolios",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "151",
    "company_id": "8",
    "question_text": "Tell us about a time you took initiative to go above ad beyond what was originally expected on a project?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "152",
    "company_id": "8",
    "question_text": "Discuss a recent headline in the financial that caught your attention and why",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "153",
    "company_id": "8",
    "question_text": "Describe a situation in which you learned something significant from a mistake you made at work or in a school project",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "154",
    "company_id": "8",
    "question_text": "In what areas of the market are you most interested to work in and why",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "155",
    "company_id": "8",
    "question_text": "Tell us about at time when you recognized that there was a gap in your skills or knowledge. Describe the situation your actions and the outcome of the situation.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "156",
    "company_id": "8",
    "question_text": "Tell us about a time when you were managing several competing priorities while working on a team project. Describe the situation the actions you took and the outcome",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "157",
    "company_id": "8",
    "question_text": "How do you handle a difficult client?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "158",
    "company_id": "8",
    "question_text": "Tell me about a time when you had to analyze information from multiple sources in order to make a decision",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "159",
    "company_id": "8",
    "question_text": "Discuss an industry that you follow and describe why it interests you",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "160",
    "company_id": "8",
    "question_text": "Why this position",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "161",
    "company_id": "8",
    "question_text": "How would you do the valuation of a car washing business?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "162",
    "company_id": "8",
    "question_text": "Tell me something unique about you",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "163",
    "company_id": "8",
    "question_text": "Tell me about a moment you had to take leadership of a group and the effects it had",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "164",
    "company_id": "8",
    "question_text": "To which company would you lend money and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "165",
    "company_id": "18",
    "question_text": "Tell us about yourself and why Bank of America",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "166",
    "company_id": "18",
    "question_text": "Tell us about a major event and how it affects the markets",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "167",
    "company_id": "18",
    "question_text": "Tell us about a key accomplishment that illustrated your personal initiative and drive to push beyond what is required",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "168",
    "company_id": "18",
    "question_text": "Tell us about a difficult decision you made. Explain the situation your options and your decision",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "169",
    "company_id": "18",
    "question_text": "Tell us about a time you were the resident expert on a subject matter. How did you explain it and what was the situation.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "170",
    "company_id": "18",
    "question_text": "Tell us about a time you had to quickly learn a new process and apply it effectively",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "171",
    "company_id": "18",
    "question_text": "Tell me about a time when you had to learn something really quickly",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "172",
    "company_id": "18",
    "question_text": "Tell us about a time when you worked with others to achieve a common goal",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "173",
    "company_id": "18",
    "question_text": "Can you tell me about yourself and why you are interested in this program and/or business",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "174",
    "company_id": "18",
    "question_text": "The firm is focused on continually learning even when you are no longer in the classroom. Explain a time where you developed a skillset or subject outside the classroom that was not a requirement",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "175",
    "company_id": "18",
    "question_text": "What was the skillset or the subject",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "176",
    "company_id": "18",
    "question_text": "What resources did you leverage to develop further",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "177",
    "company_id": "18",
    "question_text": "How has this developed skill set/impacted you today",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "178",
    "company_id": "18",
    "question_text": "Your manager has tasked you with completing a critical and time-sensitive project for a stakeholder. You complete the report 30 minutes before the deadline but realize upon reviewing the data that some of the initial calculations may be inaccurate.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "179",
    "company_id": "18",
    "question_text": "What would you do",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "180",
    "company_id": "18",
    "question_text": "Walk us through the factors you would consider as you made your decision",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "181",
    "company_id": "18",
    "question_text": "Why do you think the action you would take is best in this situation",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "182",
    "company_id": "18",
    "question_text": "What is one major current event happening in the wold right now and how might it impact the markets and the role you have applied for?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "183",
    "company_id": "18",
    "question_text": "Why work for Bank of America?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "184",
    "company_id": "18",
    "question_text": "Tell me about a time you developed/cultivated a relationship with a team member manager or customer. What specific steps did you undertake",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "185",
    "company_id": "18",
    "question_text": "Tell me about a time you had to persuade others of your PoV or recommendation. how did you handle objections what was the final outcome?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "186",
    "company_id": "18",
    "question_text": "Time when you had to juggle between different high pressure tasks. What strategies did you employ to successfully complete all and what did you learn from this?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "187",
    "company_id": "18",
    "question_text": "Tell me about a time you had to present detailed or complicated information to a customer teammate professor or manager. In your response please share how you prepared for the meeting what made it detailed or complicated and how presented the information to ensure your message was effectively communicated.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "188",
    "company_id": "18",
    "question_text": "Tell me about a time where you had to do the extra-time.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "189",
    "company_id": "18",
    "question_text": "Describe a situation where you used research or data to solve a problem In your response tell me about the problem how you used the research and data to come to a solution and how did you communicate this division?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "190",
    "company_id": "18",
    "question_text": "Describe a situation in which you were required to make an important decision.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "191",
    "company_id": "18",
    "question_text": "Which one of your key accomplishments best illustrates your personal initiative and willingness to push beyond what is required",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "192",
    "company_id": "18",
    "question_text": "Describe a time when you were working on a project where you were the subject matter expert on a specific topic. What was the goal of the project and how did you use your subject matter expertise to make sure everyone was able to understand what you were conveying.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "193",
    "company_id": "18",
    "question_text": "Tell me about a time when you had to juggle multiple high pressure tasks. What strategies did you employe to successfully complete them all and what did you learn from this.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "194",
    "company_id": "18",
    "question_text": "Think about a recent situation that required you to make a difficult decision. Describe the situation the options you had and your decision",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "195",
    "company_id": "18",
    "question_text": "What is one major current event happening in the world right now and how might it impact the markets and the role you’ve applied for?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "196",
    "company_id": "18",
    "question_text": "Describe a situation in which you were required to quickly learn a new process in order to perform effectively",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "197",
    "company_id": "18",
    "question_text": "Describe a time when you had to react quickly or make an immediate decision to solve a difficult problem. What approach did you take in this situation",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "198",
    "company_id": "18",
    "question_text": "Describe a situation in which you were required to make an important decision based upon little information or data. What approach did you take in this situation? How did that approach help you achieve your goal",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "199",
    "company_id": "18",
    "question_text": "You are working on making a deal with a major client. If this deal succeeds you have been told it will be a significant win for the company. The client has recently made some request that you know violate the firm policy. What would you do in the situation and who would you talk to about it?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "200",
    "company_id": "18",
    "question_text": "Tell me about a time when you were working on a project with someone who was not completing his/her part of the project",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "201",
    "company_id": "18",
    "question_text": "Describe a time when you were successful in meeting a highly challenging goal that others thought you would not be able to accomplish",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "202",
    "company_id": "18",
    "question_text": "Tell me about a time when you have had to turn down a project or opportunity because you had a conflict or competing deadline",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "203",
    "company_id": "18",
    "question_text": "What area in Investment Banking are you the most interested in and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "204",
    "company_id": "18",
    "question_text": "What did you do to learn about this program",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "205",
    "company_id": "18",
    "question_text": "What did you do to prepare for this interview? (or for the position you’re applying for)",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "206",
    "company_id": "18",
    "question_text": "What in your view is the best metric to evaluate a company’s ability to repay debt?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "207",
    "company_id": "18",
    "question_text": "What options can a company pursue when it has excess cash and when would you recommend each strategy?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "208",
    "company_id": "18",
    "question_text": "Tell me why today’s rate environment might have an impact on companies that have a significant amount of debt (2min)",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "209",
    "company_id": "18",
    "question_text": "Which challenges the financial industry will face up the next 5 years?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "210",
    "company_id": "18",
    "question_text": "How would you analyze and compare Exxon Mobil and Tesla? What main differences between these financial profiles will impact their public valuation?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "211",
    "company_id": "18",
    "question_text": "Provide an example of a time when you analyzed a problem to understand its root cause. Describe the situation the actions you took and the outcome.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "212",
    "company_id": "18",
    "question_text": "How did you manage several sources of information to achieve a task?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "213",
    "company_id": "18",
    "question_text": "Tell us about a time when you worked with others to achieve a common objective. In your response please share the specific actions you took when working with others any challenges the tram faced how you addressed them and how your team ultimately performed against the objective. (2min)",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "214",
    "company_id": "18",
    "question_text": "Tell us about a time when you were tasked with managing several competing priorities while working on a team project. Describe the situation the actions you took and the outcome.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "215",
    "company_id": "18",
    "question_text": "Imagine that you had to present complex information to someone with limited knowledge of the subject. What steps would you take to help ensure your audience understood your presentation?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "216",
    "company_id": "18",
    "question_text": "Explain why your background and experience would be a good fit for this job. Can you tell me about yourself and why you are interested in working with us?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "217",
    "company_id": "18",
    "question_text": "Which key accomplishments best illustrate your initiative and willingness to push beyond what is required?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "218",
    "company_id": "18",
    "question_text": "What is one major current event happening in the world and how might it impact the markets and the role you have applied for?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "219",
    "company_id": "18",
    "question_text": "Describe a situation where you were required to learn a new process to perform effectively and quickly",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "220",
    "company_id": "18",
    "question_text": "Describe a time when you had to react quickly or immediately decide to solve a complex problem. What approach did you take in this situation?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "221",
    "company_id": "18",
    "question_text": "How does this role fit in with your career goals?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "222",
    "company_id": "18",
    "question_text": "How do you get from equity value to enterprise value?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "223",
    "company_id": "18",
    "question_text": "I currently run a coffee shop and I have 5 stores and it's running really well. I’m thinking of expansion to 20 new stores. What are the credit risks you would look out for?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "224",
    "company_id": "18",
    "question_text": "What do you do for fun in your free time?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "225",
    "company_id": "18",
    "question_text": "If you could have dinner with anyone dead or alive who would you want to have dinner with and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "226",
    "company_id": "19",
    "question_text": "Please give a little overview of your educational background and relevant work experiences",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "227",
    "company_id": "19",
    "question_text": "What motivates you to work in Investment banking",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "228",
    "company_id": "19",
    "question_text": "What sets Evercore apart from its competitors and why does this appeal to you",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "229",
    "company_id": "19",
    "question_text": "Which of evercores values resonate the most with you and have you displayed this before",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "230",
    "company_id": "19",
    "question_text": "Describe a time when you had to work with someone whos personality was very different from yours. How did you handle it?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "231",
    "company_id": "19",
    "question_text": "Discuss a time when you failed or experienced a setback and what you learned from the experience",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "232",
    "company_id": "20",
    "question_text": "Tell us about what interests you about this position",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "233",
    "company_id": "20",
    "question_text": "Give an example of a time when you had to gather information to solve a problem",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "234",
    "company_id": "20",
    "question_text": "Tell me about a time when you prioritized tasks and assignments for a project",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "235",
    "company_id": "20",
    "question_text": "We all make mistakes even in our field of expertise. Give me an example of a recent mistake you made in your area of expertise. What did you do and how did you learn from this?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "236",
    "company_id": "20",
    "question_text": "Tell us about what interests you about this position",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "237",
    "company_id": "20",
    "question_text": "Tell us about a time when you had to make a decision without having all of hte information you would have liked to feel fully informed",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "238",
    "company_id": "20",
    "question_text": "Give examples of behaviors you model for others that illustrate how you work with integrity",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "239",
    "company_id": "20",
    "question_text": "Tell me about a time when you were required to work with others in order to complete a project or task",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "240",
    "company_id": "21",
    "question_text": "What is the formula for Expected Value and Equity Value",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "241",
    "company_id": "21",
    "question_text": "What have you done in your university time?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "242",
    "company_id": "21",
    "question_text": "Why this department?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "243",
    "company_id": "21",
    "question_text": "Tell me about a time you were under pressure",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "244",
    "company_id": "21",
    "question_text": "What is citibank’s stock price",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "245",
    "company_id": "21",
    "question_text": "What are your greatest strengths and weaknesses",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "246",
    "company_id": "21",
    "question_text": "Why are you interested in this industry",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "247",
    "company_id": "21",
    "question_text": "What is a project you are really proud of",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "248",
    "company_id": "21",
    "question_text": "Tell me about a recent development in the markets that impacted our business",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "249",
    "company_id": "22",
    "question_text": "What’s your communication style",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "250",
    "company_id": "22",
    "question_text": "Tell me about a time you failed and got back up. What made you get back on track.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "251",
    "company_id": "22",
    "question_text": "Tell me how you keep up to date with the current markets",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "252",
    "company_id": "22",
    "question_text": "What is the end goal where do you want to be in your career",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "253",
    "company_id": "22",
    "question_text": "What was your biggest failure",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "254",
    "company_id": "23",
    "question_text": "Why do you think you are a good candidate for this role",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "255",
    "company_id": "23",
    "question_text": "Tell me about yourself",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "256",
    "company_id": "23",
    "question_text": "Please share why you are interested in working at Parametric",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "257",
    "company_id": "23",
    "question_text": "Give an example of a time when you delivered excellent customer service",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "258",
    "company_id": "23",
    "question_text": "Share an example of when you had short deadlines and multiple tasks. How did you stay balanced and organized?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "259",
    "company_id": "23",
    "question_text": "Describe a time where you persevered to accomplish a goal and what the result was",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "260",
    "company_id": "23",
    "question_text": "What accomplishments are you most proud of and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "261",
    "company_id": "23",
    "question_text": "Is there anything else you would like Parametric to know regarding your candidacy",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "262",
    "company_id": "24",
    "question_text": "What is a current threat to our industry",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "263",
    "company_id": "24",
    "question_text": "How would you analyze a company to give out a loan",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "264",
    "company_id": "24",
    "question_text": "What is the most important financial statement and specifically which element",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "265",
    "company_id": "24",
    "question_text": "Why Barclays",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "266",
    "company_id": "24",
    "question_text": "Why Risk",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "267",
    "company_id": "24",
    "question_text": "What skills do you think you have to succeed in this position?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "268",
    "company_id": "24",
    "question_text": "What is Basel III and can you explain its necessity",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "269",
    "company_id": "24",
    "question_text": "What would be the title of your autobiography",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "270",
    "company_id": "25",
    "question_text": "Please share a quick 60 second introduction of yourself!",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "271",
    "company_id": "25",
    "question_text": "Please explain your any previous internship/relevant work experience involvement on campus or in your community related to this internship",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "272",
    "company_id": "25",
    "question_text": "Please expand upon your technical skills with data visualization tools such as Tableau Power BI and any other software you have been exposed to.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "273",
    "company_id": "25",
    "question_text": "Tell me about a time you used data or analytical results to solve a specific problem/making a recommendation. What steps did you take? How did you collect your data? How did you present these results?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "274",
    "company_id": "25",
    "question_text": "Tell me about a time when you learned a new skill or sought more information on a topic than was originally required. How did you go about learning this new skill or learning this new information? How did it become useful in the future?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "275",
    "company_id": "26",
    "question_text": "Why do you think that yields in the long-end of the curve have risen after the Fed’s 50bps rate cut?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "276",
    "company_id": "26",
    "question_text": "Why do you think equities haven’t responded to the recent sell off in rates?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "277",
    "company_id": "26",
    "question_text": "Short EURUSD has been a popular trade in recent weeks. What’s driven it and will it continue?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "278",
    "company_id": "0",
    "question_text": "please provide examples of relevant academic",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "279",
    "company_id": "0",
    "question_text": "personal",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "280",
    "company_id": "0",
    "question_text": "or professional experiences that demonstrate your interest in this field",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "281",
    "company_id": "0",
    "question_text": "Describe a successful team project you were involved in. What was your role",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "282",
    "company_id": "0",
    "question_text": "What interests you about living and/or working in Portland Oregon",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "283",
    "company_id": "27",
    "question_text": "Why are you interseted in Hamilton Lane and this oportunity? In your repsonse please provide examples of relevant academic personal or professional experiences that demonstrate your interest in this field",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "284",
    "company_id": "27",
    "question_text": "What interests you about living and/or working in Portland Oregon",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "285",
    "company_id": "27",
    "question_text": "​​Describe a time when you pursued a personal project or research outside of your academic or professional responsibilities. What sparked your interest in that topic and what new knowledge or skills did you gain from the experience?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "286",
    "company_id": "27",
    "question_text": "Describe a successful team project you were involved in. What was your role and how did you contribute to the team's success? How did you overcome any conflicts or disagreements within the team?​",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "287",
    "company_id": "27",
    "question_text": "​​​​Describe a time when you had to manage a heavy workload with multiple priorities. How did you ensure everything was completed on time? How did you ensure the quality of your work was maintained?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "288",
    "company_id": "28",
    "question_text": "Tell us about yourself. Give us one relevant experience and a book recommendation.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "289",
    "company_id": "28",
    "question_text": "Why are you excited to work in the renewable energy space?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "290",
    "company_id": "28",
    "question_text": "Please describe one or more ways in which you think you could add value to the Madison Energy team this summer.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "291",
    "company_id": "28",
    "question_text": "What goals do you want to accomplish at the end of the summer?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "292",
    "company_id": "28",
    "question_text": "You are to be stranded on a deserted island but all your basic needs are taken care of. What two items would you bring with you?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "293",
    "company_id": "29",
    "question_text": "Tell us about yourself",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "294",
    "company_id": "29",
    "question_text": "At PNC we are a customer focused organization. Our customers both internal and external are at the center of everything we do.  In your opinion what are the components of a great customer experience?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "295",
    "company_id": "29",
    "question_text": "The Asset Management group Internship/Development Program offers two tracks. Which track are you most interested in: Institutional or Private Bank (Wealth Management)?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "296",
    "company_id": "29",
    "question_text": "What financial news source do you find value in? What is a recent story you found interesting?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "297",
    "company_id": "29",
    "question_text": "How do banks make money?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "298",
    "company_id": "30",
    "question_text": "Tell us about yourself what interests you most about a career in global broking and why you think you’re a good fit for this internship.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "299",
    "company_id": "30",
    "question_text": "What do you understand about the role of a broker in the global markets",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "300",
    "company_id": "30",
    "question_text": "How do you ensure clear communication when dealing with clients or team members?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "301",
    "company_id": "30",
    "question_text": "Pick any item around you—big or small—and sell it to us in 60 seconds or less. Convince us why we need it and why it’s worth having.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "302",
    "company_id": "31",
    "question_text": "Why do you want to work at Ardian?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "303",
    "company_id": "31",
    "question_text": "Describe a time you demonstrated strong attention to detail.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "304",
    "company_id": "31",
    "question_text": "What motivates you in your professional life?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "305",
    "company_id": "31",
    "question_text": "Describe a situation where you had to work with a culturally diverse team.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "306",
    "company_id": "31",
    "question_text": "Tell me a time you overcame a difficult financial challenge.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "307",
    "company_id": "31",
    "question_text": "Have you ever had to persuade others to adopt your point of view?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "308",
    "company_id": "31",
    "question_text": "How do you prioritize your time during high-pressure situations?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "309",
    "company_id": "31",
    "question_text": "How would you value a fund-of-funds investment?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "310",
    "company_id": "31",
    "question_text": "Walk me through a typical private equity deal process.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "311",
    "company_id": "31",
    "question_text": "What factors would you consider when building an LBO model for a mid-cap industrial company?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "312",
    "company_id": "31",
    "question_text": "How does Ardian's investment strategy differ from other private equity firms?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "313",
    "company_id": "32",
    "question_text": "Why do you want to work at General Atlantic?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "314",
    "company_id": "32",
    "question_text": "Tell me about a business trend you're excited about.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "315",
    "company_id": "32",
    "question_text": "Describe a time when you had to analyze a company or market quickly",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "316",
    "company_id": "32",
    "question_text": "What makes a good growth equity investment?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "317",
    "company_id": "32",
    "question_text": "Tell me about a time when you had to think like an investor.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "318",
    "company_id": "32",
    "question_text": "Describe a situation where you had to work cross-functionally.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "319",
    "company_id": "32",
    "question_text": "What's a company you admire and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "320",
    "company_id": "32",
    "question_text": "What valuation methods are most relevant for growth equity?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "321",
    "company_id": "32",
    "question_text": "What's the difference between venture capital and growth equity?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "322",
    "company_id": "33",
    "question_text": "Describe a time where you had to work in a team to solve a challenging problem.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "323",
    "company_id": "33",
    "question_text": "Can you describe a time when you had to demonstrate leadership?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "324",
    "company_id": "33",
    "question_text": "Why apollo and why this internship",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "325",
    "company_id": "33",
    "question_text": "Walk me through a DCF",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "326",
    "company_id": "33",
    "question_text": "How would you value a company that has negative earnings or is in its early growth stage?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "327",
    "company_id": "33",
    "question_text": "How would you analyze a company's capital structure?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "328",
    "company_id": "33",
    "question_text": "What is the difference between enterprise value and equity value?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "329",
    "company_id": "34",
    "question_text": "Walk me through a DCF",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "330",
    "company_id": "34",
    "question_text": "A company in the tech sector is growing rapidly but facing significant competition. You’re tasked with assessing whether it’s a good investment for Bain Capital. What factors would you consider?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "331",
    "company_id": "34",
    "question_text": "How would you value a company with negative earnings?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "332",
    "company_id": "34",
    "question_text": "You are looking at a mature manufacturing company in a low-growth industry. The company has stable cash flows but limited growth potential. How would you assess whether to invest?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "333",
    "company_id": "35",
    "question_text": "Why are you interested in working at Carlyle and what excites you about the Summer Associate Program?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "334",
    "company_id": "35",
    "question_text": "Tell us about a time when you demonstrated leadership in a challenging situation.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "335",
    "company_id": "35",
    "question_text": "Describe a time when you had to analyze a complex situation or solve a difficult problem. What steps did you take to solve it?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "336",
    "company_id": "35",
    "question_text": "Imagine you are assessing an investment opportunity in a growing software company. The company is profitable but has higher customer concentration risk with 60% of its revenue coming from one customer. What would be your approach to evaluating this risk and the company's long-term potential?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "337",
    "company_id": "35",
    "question_text": "Carlyle places significant value on diversity and inclusion. Can you describe a time when you worked with a team from diverse backgrounds and what you learned from that experience?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "338",
    "company_id": "36",
    "question_text": "You're working on a deal with a tight timeline and one of your colleagues misses a key deadline that delays part of the process. The delay could affect your team's ability to finalize the deal on time. How do you handle the situation?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "339",
    "company_id": "36",
    "question_text": "A portfolio company's management team has asked for additional funding to scale their business faster than originally planned but your financial model suggests the plan carries significant risk. How do you approach this situation?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "340",
    "company_id": "36",
    "question_text": "You are given responsibility for leading a group presentation for an internal meeting but you quickly realize that one of your team members is unprepared and lacks the necessary data to contribute. How do you handle the situation?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "341",
    "company_id": "36",
    "question_text": "During a client meeting the client expresses dissatisfaction with the direction the company is taking in terms of strategy. The are looking to you for advice on how to move forward. How do you respond?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "342",
    "company_id": "36",
    "question_text": "Your team is discussing an investment opportunity and you notice that one of your colleagues is overly optimistic about the potential return on investment. While they make a compelling argument you have reservations about the assumptions they're making. How do you approach this?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "343",
    "company_id": "37",
    "question_text": "Why do you want to join KKR and what attracts you to the Future Leaders Internship?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "344",
    "company_id": "37",
    "question_text": "Describe a time you took initiative or demonstrated leadership in a team setting.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "345",
    "company_id": "37",
    "question_text": "Tell us about a time you had to work with a diverse team. What did you learn from the experience?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "346",
    "company_id": "37",
    "question_text": "What qualities do you think are important to succeed in an investment role at KKR? How have you demonstrated them?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "347",
    "company_id": "37",
    "question_text": "Tell us about an industry or company you think is well-positioned for long-term growth.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "348",
    "company_id": "38",
    "question_text": "Why are you interested in working at TPG specifically in the Growth Equity Division?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "349",
    "company_id": "38",
    "question_text": "Describe a time when you worked as part of a team to solve a challenging problem. What was your role?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "350",
    "company_id": "38",
    "question_text": "Tell us about a time you had to analyze data to make a recommendation.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "351",
    "company_id": "38",
    "question_text": "What do you think makes a successful growth equity investor? How do you embody these traits?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "352",
    "company_id": "38",
    "question_text": "What’s a company or sector you find particularly exciting and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "353",
    "company_id": "39",
    "question_text": "Why are you interested in working at Warburg Pincus?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "354",
    "company_id": "39",
    "question_text": "Tell us about a time you worked in a team to achieve a goal. What was your role and how did you contribute?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "355",
    "company_id": "39",
    "question_text": "Describe a time when you had to analyze complex data or information. What approach did you take and what was the result?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "356",
    "company_id": "39",
    "question_text": "What qualities do you believe are important for someone working in private equity and how do you embody them?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "357",
    "company_id": "39",
    "question_text": "What is a company or industry you find interesting right now and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "358",
    "company_id": "40",
    "question_text": "Tell us about yourself and why you are interested in Finance.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "359",
    "company_id": "40",
    "question_text": "Why did you choose to apply to Nomura?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "360",
    "company_id": "40",
    "question_text": "Describe a time when you had to manage a project under tight deadlines. How did you handle it?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "361",
    "company_id": "40",
    "question_text": "How do you approach making decisions when faced with uncertainty or incomplete data?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "362",
    "company_id": "40",
    "question_text": "Share an example of a situation where you worked in a team to achieve a common goal. What was your role?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "363",
    "company_id": "40",
    "question_text": "How do you approach learning new concepts or tools in a fast-paced environment?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "364",
    "company_id": "40",
    "question_text": "Can you describe a time when you had to resolve a conflict within a team? How did you approach it?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "365",
    "company_id": "40",
    "question_text": "How do you handle criticism especially when it's related to your work performance?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "366",
    "company_id": "40",
    "question_text": "Tell us about a situation where you demonstrated creativity to solve a problem.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "367",
    "company_id": "40",
    "question_text": "What do you think is the most important quality for success in the finance industry and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "368",
    "company_id": "41",
    "question_text": "Tell me about your background and experiences.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "369",
    "company_id": "41",
    "question_text": "Why do you want to work at Deutsche Bank?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "370",
    "company_id": "41",
    "question_text": "Can you describe a challenging situation you faced and how you handled it?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "371",
    "company_id": "41",
    "question_text": "How do you approach managing competing deadlines or multiple projects?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "372",
    "company_id": "41",
    "question_text": "Share an example of when you took initiative or led a project.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "373",
    "company_id": "41",
    "question_text": "Hwo do you respond to constructive criticism?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "374",
    "company_id": "41",
    "question_text": "Tell me about a time when you had to collaborate with someone who was difficult to work with.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "375",
    "company_id": "41",
    "question_text": "What drives you to perform at your best in a professional environment?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "376",
    "company_id": "41",
    "question_text": "How do you ensure the quality and accuracy of your work?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "377",
    "company_id": "41",
    "question_text": "Tell me about a specific goal you set and how you achieved it.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "378",
    "company_id": "14",
    "question_text": "Tell me about yourself.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "379",
    "company_id": "14",
    "question_text": "Why do you want to work for Blackrock",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "380",
    "company_id": "14",
    "question_text": "Describe at time when you overcame a challenge.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "381",
    "company_id": "14",
    "question_text": "How do you prioritize tasks?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "382",
    "company_id": "14",
    "question_text": "Give an example of when you demonstrated leadership.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "383",
    "company_id": "14",
    "question_text": "How do you handle feedback?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "384",
    "company_id": "14",
    "question_text": "Describe a time you worked with a difficult team member.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "385",
    "company_id": "14",
    "question_text": "What motivates you in a professional setting?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "386",
    "company_id": "14",
    "question_text": "How do you ensure accuracy in your work?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "387",
    "company_id": "14",
    "question_text": "Give an example of a goal you set and achieved.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "388",
    "company_id": "24",
    "question_text": "Tell us about yourself.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "389",
    "company_id": "24",
    "question_text": "Why do you want to work for Barclays?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "390",
    "company_id": "24",
    "question_text": "Can you describe a time when you demonstrated leadership?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "391",
    "company_id": "24",
    "question_text": "Tell us about a time when you had to handle a difficult situation.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "392",
    "company_id": "24",
    "question_text": "How do you prioritize your work when you have multiple deadlines?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "393",
    "company_id": "24",
    "question_text": "How do you handle working with a team where there are differing opinions?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "394",
    "company_id": "24",
    "question_text": "Where do you see yourself in five years?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "395",
    "company_id": "24",
    "question_text": "Describe a time you worked in a high-pressure situation. How did you manage?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "396",
    "company_id": "24",
    "question_text": "How do you stay up to date with industry trends?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "397",
    "company_id": "24",
    "question_text": "How do you handle feedback",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "398",
    "company_id": "24",
    "question_text": "especially when it's critical?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "399",
    "company_id": "42",
    "question_text": "Why Bernstein?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "400",
    "company_id": "42",
    "question_text": "How do you keep up with the markets?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "401",
    "company_id": "42",
    "question_text": "What is important to you in terms of next steps in your career?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "402",
    "company_id": "42",
    "question_text": "What do you do for fun?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "403",
    "company_id": "42",
    "question_text": "What was your favorite class and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "404",
    "company_id": "42",
    "question_text": "What's a stock you've been following and why?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "405",
    "company_id": "37",
    "question_text": "Tell us about a recent market deal that caught your attention particularly in the real estate space. Why did it stand out to you?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "406",
    "company_id": "37",
    "question_text": "Why are you interested in K-Star?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "407",
    "company_id": "37",
    "question_text": "Describe a time when you received constructive feedback. How did you respond and what did you learn from the experience?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "408",
    "company_id": "43",
    "question_text": "What stood out to you about our program",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "409",
    "company_id": "43",
    "question_text": "Tell us a time you had to learn something difficult",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "410",
    "company_id": "43",
    "question_text": "How do you learn?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "411",
    "company_id": "44",
    "question_text": "Tell us about your favorite excel project and what functions you used?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "412",
    "company_id": "44",
    "question_text": "Tell us about a time that you worked in a group that wasn't inclusive",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "413",
    "company_id": "43",
    "question_text": "What's a great idea you had recently",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "414",
    "company_id": "44",
    "question_text": "Why U.S. Bank?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "415",
    "company_id": "45",
    "question_text": "Describe a time when you needed to ask for feedback or advice.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "416",
    "company_id": "45",
    "question_text": "Tell me about a time whe you had to work with a person who had a different opinion than you?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "417",
    "company_id": "45",
    "question_text": "Why are you interested in Shell?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "418",
    "company_id": "11",
    "question_text": "Tell us why you are interested in this opportunity. Describe how your skills and experiences may set you apart from other candidates",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "419",
    "company_id": "11",
    "question_text": "Tell me ten ways to use a pencil other than writing.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "420",
    "company_id": "11",
    "question_text": "Tell us about an industry or company that you think would represent an attractive investment opportunity if the investment time horizon is twenty year. What characteristics would you get comfortable over such a longer period of time?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "421",
    "company_id": "20",
    "question_text": "Give an example of a time when you had to gather information to solve a problem?",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "422",
    "company_id": "20",
    "question_text": "Tell me about a time when you prioritized tasks and assignments for a project.",
    "time_limit": 180,
    "max_retries": 3
  },
  {
    "id": "423",
    "company_id": "20",
    "question_text": "We all make mistakes even in our field of expertise. Give me an example of a recent mistake you made in your area of expertise/ What did you do and how did you learn from this?",
    "time_limit": 180,
    "max_retries": 3
  }
];
