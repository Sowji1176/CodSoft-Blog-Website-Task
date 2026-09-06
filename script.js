document.addEventListener('DOMContentLoaded', () => {

/* ============================================================
   ARTICLE DATA
============================================================ */
const ARTICLES = [
{
  id: 'article1-ai-future',
  title: 'The Future of AI in Everyday Work',
  category: 'AI & Innovation',
  author: 'Nexora Editorial Team',
  date: 'September 6, 2026',
  readTime: '7 min read',
  image: 'assets/article1-ai-future.png',
  tags: ['Artificial Intelligence','Future of Work','Productivity','Automation','AI Tools','Innovation'],
  excerpt: 'AI is transforming everyday work by automating repetitive tasks, expanding individual capabilities, and changing how humans collaborate with technology.',
  content: `
    <p>A decade ago, "working with AI" mostly meant tolerating an occasionally-helpful autocomplete or a chatbot that could barely handle a return policy. Today, AI systems draft documents, summarize meetings, generate code, and answer complex questions in seconds. The shift hasn't been a single dramatic leap — it has been a steady accumulation of smaller changes that, together, are reshaping what a normal workday looks like.</p>

    <h2>What AI Is Changing in Everyday Work</h2>
    <p>The most visible change is speed. Tasks that once required searching through documentation, drafting from scratch, or manually cross-referencing spreadsheets can now be handled in a fraction of the time. But speed is only part of the story. AI is also changing the shape of tasks themselves — breaking large, ambiguous projects into smaller steps a person can review and adjust rather than execute entirely by hand.</p>
    <p>This matters most in roles built around information processing: writing, analysis, customer support, research, and early-stage design. In these fields, AI rarely replaces the entire job. It replaces the slowest, most repetitive fraction of it.</p>

    <h2>From Automation to Augmentation</h2>
    <p>It's worth separating two ideas that often get blurred together: automation and augmentation. Automation replaces a task entirely — a system runs without a human in the loop. Augmentation keeps a human in the loop but changes what they spend their time on.</p>
    <p>Most current AI adoption in knowledge work leans toward augmentation. A marketer still decides on the campaign strategy, but AI helps draft the first version of the copy. An analyst still decides which questions matter, but AI helps clean and summarize the underlying data faster. The judgment stays human; the execution gets a boost.</p>

    <h3>Why This Distinction Matters</h3>
    <p>Confusing automation with augmentation leads to two common mistakes: over-trusting AI output as if no human review is needed, or under-using AI out of fear that it's meant to replace a role entirely. Understanding which pattern applies to a given task helps set the right expectations — and the right level of oversight.</p>

    <h2>The Rise of the AI-Assisted Worker</h2>
    <p>A new professional pattern has emerged: workers who don't just use one AI tool, but weave several into a daily workflow — one for writing, one for research, one for scheduling or code assistance. The skill here isn't just prompting; it's knowing when AI output is reliable enough to use directly and when it needs heavier editing.</p>
    <p>This is a genuinely new skill, not a minor add-on to existing ones. Reviewing AI output critically — checking facts, tone, and logic — is different from writing from a blank page, and it takes deliberate practice to do well.</p>

    <h2>How AI Is Changing Different Professions</h2>
    <p>The effect of AI varies significantly by field:</p>
    <ul>
      <li><strong>Writing and communications:</strong> faster first drafts, more time spent on editing and strategy.</li>
      <li><strong>Software development:</strong> AI-assisted code completion and debugging support, with human developers focused on architecture and review.</li>
      <li><strong>Data and analytics:</strong> faster data cleaning and pattern discovery, with analysts spending more time interpreting results for stakeholders.</li>
      <li><strong>Customer support:</strong> AI handling routine queries, freeing human agents for complex or sensitive cases.</li>
      <li><strong>Design:</strong> AI-generated concept variations used as a starting point rather than a final product.</li>
    </ul>

    <h2>Human Skills That Become More Valuable</h2>
    <p>As AI absorbs more routine execution, certain human skills become more — not less — important. Judgment, communication, ethical reasoning, and the ability to ask the right question all grow in value, because these are exactly the areas where current AI systems remain limited.</p>
    <p>Critical thinking in particular becomes a core professional skill rather than a soft one. Someone who can quickly spot a flawed AI-generated argument, an outdated assumption, or a subtly wrong number is more valuable than someone who can only generate more output.</p>

    <h2>AI-Powered Workflows</h2>
    <p>Rather than a single "AI moment," most productive use of AI at work happens as a workflow: a task is broken into stages, AI accelerates specific stages, and a human reviews the transitions between them. For example, a report might move through research, drafting, editing, and formatting — with AI assisting at each stage but a person deciding when the report is actually ready to send.</p>

    <h2>Challenges and Risks</h2>
    <p>None of this is without friction. Several real challenges deserve honest attention rather than optimism alone:</p>
    <ul>
      <li><strong>Accuracy:</strong> AI systems can produce confident-sounding but incorrect information, which makes verification a non-negotiable step for anything factual.</li>
      <li><strong>Bias:</strong> AI systems trained on real-world data can reflect and sometimes amplify existing biases, which matters especially in hiring, lending, or evaluation contexts.</li>
      <li><strong>Privacy:</strong> feeding sensitive company or customer data into external AI tools carries real risk if handled carelessly.</li>
      <li><strong>Job disruption:</strong> some roles built entirely around repetitive tasks are genuinely at risk of shrinking, even if they aren't eliminated outright.</li>
    </ul>
    <p>Treating these as edge cases rather than core considerations is a mistake. Responsible use of AI at work means building verification and oversight into the process from the start, not adding it as an afterthought.</p>

    <h2>How Professionals Can Prepare</h2>
    <p>Preparing for an AI-integrated workplace doesn't require becoming a machine learning expert. It requires three practical habits: learning how to evaluate AI output rather than accept it blindly, staying current with tools relevant to your specific field, and continuing to invest in the human-centered skills — communication, leadership, ethical judgment — that remain outside AI's reach.</p>

    <blockquote>The professionals who benefit most from AI aren't the ones who use it the most — they're the ones who know exactly when not to.</blockquote>

    <h2>What the Future Workplace Could Look Like</h2>
    <p>It's unlikely that most jobs disappear wholesale. It's far more likely that job descriptions quietly shift — fewer hours spent on repetitive drafting or data wrangling, more hours spent on decisions, relationships, and judgment calls that AI cannot make on its own. Teams may also get smaller for certain execution-heavy tasks while growing in strategic or oversight-focused roles.</p>

    <h2>Practical Takeaways</h2>
    <ul>
      <li>Use AI to accelerate execution, not to replace judgment.</li>
      <li>Always verify anything factual before it leaves your desk.</li>
      <li>Build a small, reliable toolkit rather than chasing every new AI tool.</li>
      <li>Invest deliberately in communication and critical thinking skills.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>AI's role in everyday work is best understood not as a replacement for human effort, but as a shift in where that effort goes. The tasks change; the responsibility to think clearly, verify carefully, and communicate well does not. Workers and organizations that treat AI as a serious tool — with real capabilities and real limitations — will be the ones who benefit most as it continues to spread through daily work.</p>
  `
},
{
  id: 'article2-uiux',
  title: '7 UI/UX Principles Every Designer Should Know',
  category: 'Design',
  author: 'Nexora Editorial Team',
  date: 'September 5, 2026',
  readTime: '6 min read',
  image: 'assets/article2-uiux.png',
  tags: ['UI Design','UX Design','Figma','User Experience','Design Principles','Product Design'],
  excerpt: 'Good design is not decoration — it is a set of decisions that make a product easier to understand, trust, and use.',
  content: `
    <p>It's easy to mistake good UI/UX for good taste — clean fonts, tasteful color, a bit of white space. Taste helps, but it isn't the foundation. The foundation is a small set of principles that, applied consistently, make an interface easier to understand and trust. Here are seven that hold up across almost every kind of digital product.</p>

    <h2>Why Good UI/UX Is More Than Visual Appearance</h2>
    <p>A beautiful interface that confuses users has failed at its actual job. UI/UX exists to solve a problem: helping someone accomplish something with as little friction and confusion as possible. Visual polish supports that goal, but it isn't the goal itself.</p>

    <h2>1. Visual Hierarchy</h2>
    <p>Visual hierarchy is the practice of guiding the eye toward what matters most first. Size, weight, color, and position all communicate importance before a user reads a single word. A primary action button should look and feel more important than a secondary link, and a page's main heading should be unmistakably more prominent than a caption.</p>
    <p>When hierarchy breaks down — when everything competes for attention equally — users have to work harder to figure out what to do next, and that extra effort quietly pushes some of them away.</p>

    <h2>2. Consistency</h2>
    <p>Consistency means similar elements behave and look similarly throughout a product. If one button style means "primary action" on one screen, it should mean the same thing everywhere. Consistency reduces the mental effort required to learn an interface, because users can apply what they've already learned instead of relearning patterns on every screen.</p>
    <p>This is where design systems earn their value: a shared library of components keeps decisions consistent even as a product grows and multiple people work on it.</p>

    <h2>3. Simplicity</h2>
    <p>Simplicity isn't about removing features — it's about removing unnecessary friction from using the features that exist. A simple interface shows only what's relevant to the current task and hides complexity until it's actually needed. Progressive disclosure — revealing advanced options only when a user asks for them — is one practical way to keep an interface simple without cutting real capability.</p>

    <h2>4. Accessibility</h2>
    <p>Accessible design ensures a product works for people with a wide range of abilities: sufficient color contrast for readers with low vision, keyboard navigation for people who can't or don't use a mouse, and screen-reader-friendly markup for users who are blind or have low vision. Accessibility is not a separate "extra" feature — it directly overlaps with usability for everyone, since clear contrast and logical navigation benefit all users, not only those with disabilities.</p>

    <h2>5. Feedback and System Status</h2>
    <p>Every action a user takes should produce a visible response — a button press should show a pressed state, a form submission should show a loading indicator, and an error should be explained clearly rather than left silent. Without feedback, users are left guessing whether something worked, which quickly erodes trust in the interface.</p>

    <h2>6. User Control</h2>
    <p>People make mistakes, and good interfaces plan for it. Undo options, clear cancel buttons, and confirmation steps before destructive actions all give users a sense of control rather than anxiety. An interface that punishes small mistakes with irreversible consequences will always feel more stressful to use, regardless of how attractive it looks.</p>

    <h2>7. Responsive Design</h2>
    <p>A layout that only works at one screen size fails a large share of real users. Responsive design ensures that content reflows sensibly across desktop, tablet, and mobile — not just by shrinking elements, but by rethinking layout priorities for smaller screens where space and attention are more limited.</p>

    <h2>How These Principles Work Together</h2>
    <p>These principles rarely operate in isolation. A well-designed form, for example, uses hierarchy to highlight the primary action, consistency so its fields match the rest of the product, feedback to confirm submission, and accessibility so it works with a keyboard or screen reader. The strongest interfaces are the ones where these principles reinforce each other rather than compete.</p>

    <h2>Common UI/UX Mistakes</h2>
    <ul>
      <li>Overloading a single screen with too many equally-weighted actions.</li>
      <li>Using color alone to communicate status (which fails colorblind users).</li>
      <li>Hiding critical actions behind unclear icons with no labels.</li>
      <li>Designing only for the "happy path" and ignoring error states.</li>
      <li>Skipping usability testing because the design "feels" intuitive to its creator.</li>
    </ul>

    <h2>Practical Checklist for Designers</h2>
    <ul>
      <li>Does the most important action on this screen look the most important?</li>
      <li>Would a first-time user understand what happened after clicking this?</li>
      <li>Can this be used with a keyboard alone?</li>
      <li>Does this layout hold up at 375px wide?</li>
      <li>Has a real user — not just the design team — tried this flow?</li>
    </ul>

    <h2>Conclusion</h2>
    <p>None of these seven principles are exotic or new — that's precisely why they're reliable. Visual hierarchy, consistency, simplicity, accessibility, feedback, user control, and responsive design form a practical foundation that holds up regardless of visual trends. Designers who return to these fundamentals consistently produce interfaces that don't just look polished, but actually work for the people using them.</p>
  `
},
{
  id: 'article3-portfolio',
  title: 'How to Build a Strong Professional Portfolio',
  category: 'Career',
  author: 'Nexora Editorial Team',
  date: 'September 4, 2026',
  readTime: '6 min read',
  image: 'assets/article3-portfolio.png',
  tags: ['Portfolio','Career','Personal Branding','Projects','Job Search','Professional Growth'],
  excerpt: 'A portfolio should demonstrate not just what you made, but how you think — and that distinction changes everything about how it should be built.',
  content: `
    <p>Most portfolios fail for the same reason: they show finished work without showing the thinking behind it. A recruiter or hiring manager scanning dozens of portfolios isn't just asking "is this good?" — they're asking "would I trust this person to solve a problem I haven't defined yet?" A strong portfolio answers that second question.</p>

    <h2>What Makes a Portfolio Valuable</h2>
    <p>A portfolio's real job is to demonstrate judgment, not just output. Two designers can produce visually similar screens, but the one who can explain why they made specific decisions — and what alternatives they rejected — comes across as far more hireable. The work is evidence; the reasoning is the actual product being evaluated.</p>

    <h2>Choosing the Right Projects</h2>
    <p>More projects is not better. Three to five strong, well-explained projects outperform ten shallow ones almost every time. Choose projects that show range across different problem types — not five nearly-identical landing pages — and prioritize ones where you can speak in detail about your specific decisions and contributions.</p>

    <h2>Writing Strong Case Studies</h2>
    <p>A case study should read like a short story with a clear arc: what was the problem, what constraints existed, what approach was taken, and what happened as a result. Avoid case studies that jump straight to final screens with no context — readers should understand the "why" before they evaluate the "what."</p>

    <h3>A Useful Case Study Structure</h3>
    <ul>
      <li><strong>Context:</strong> what was the problem or goal, and for whom?</li>
      <li><strong>Constraints:</strong> what limitations shaped the solution — time, technology, budget, team size?</li>
      <li><strong>Process:</strong> what steps did you take, and why?</li>
      <li><strong>Solution:</strong> what did you actually build or design?</li>
      <li><strong>Outcome:</strong> what happened, and what would you do differently next time?</li>
    </ul>

    <h2>Showing Your Design/Development Process</h2>
    <p>Sketches, wireframes, early drafts, and even failed approaches are often more convincing than the polished final result alone. Process material shows that decisions were made deliberately rather than arrived at by accident, and it gives reviewers insight into how you actually work under real constraints.</p>

    <h2>Explaining Your Role and Contribution</h2>
    <p>Team projects are common, and that's fine — but vague credit ("we designed this") leaves reviewers unsure what you personally did. Be specific: "I led the user research and designed the onboarding flow" tells a very different story than an unattributed group achievement.</p>

    <h2>Demonstrating Results</h2>
    <p>Where possible, connect your work to outcomes: improved task completion, reduced support tickets, faster load times, or positive user feedback. When hard metrics aren't available, qualitative outcomes still matter — what changed for the user or the business because of your work?</p>

    <h2>Visual Consistency</h2>
    <p>A portfolio itself is a design artifact, and inconsistency in its own layout, typography, or spacing undermines the credibility of everything inside it. Treat your portfolio's design with the same care you'd apply to a client project — because, functionally, it is one.</p>

    <h2>Personal Branding</h2>
    <p>A short, clear introduction that explains who you are, what you focus on, and what kind of work excites you helps reviewers quickly understand your fit. This doesn't need to be elaborate — clarity beats cleverness here.</p>

    <h2>Portfolio Navigation and UX</h2>
    <p>Ironically, portfolios — especially design portfolios — sometimes have poor usability themselves: confusing navigation, unclear project titles, or slow-loading galleries. Apply the same UX principles you'd use elsewhere: clear hierarchy, obvious navigation, and fast load times.</p>

    <h2>Mobile Responsiveness</h2>
    <p>Many portfolios are viewed first on a phone — a shared link opened during a commute or between meetings. A portfolio that breaks or becomes unreadable on mobile risks losing a reviewer before they ever see the actual work.</p>

    <h2>Common Portfolio Mistakes</h2>
    <ul>
      <li>Showing only final screens with no explanation of process or reasoning.</li>
      <li>Including too many similar or low-effort projects.</li>
      <li>Using vague, unattributed team credit for collaborative work.</li>
      <li>Neglecting the portfolio's own usability and mobile experience.</li>
      <li>Leaving out contact information or making it hard to find.</li>
    </ul>

    <h2>Portfolio Checklist</h2>
    <ul>
      <li>Does each project explain the problem before showing the solution?</li>
      <li>Is your specific contribution clear in every team project?</li>
      <li>Does the portfolio work well on a phone?</li>
      <li>Is your contact information easy to find within seconds?</li>
      <li>Would a stranger understand what you're best at after a two-minute skim?</li>
    </ul>

    <h2>Conclusion</h2>
    <p>A portfolio isn't a gallery — it's an argument for why someone should trust you with their next hard problem. Projects that show context, process, and honest reflection consistently outperform polished-but-shallow showcases. Build fewer, deeper case studies, and let your thinking do as much work as your visuals.</p>
  `
},
{
  id: 'article4-ai-tools',
  title: 'AI Tools That Can Improve Productivity',
  category: 'Technology',
  author: 'Nexora Editorial Team',
  date: 'September 3, 2026',
  readTime: '7 min read',
  image: 'assets/article4-ai-tools.png',
  tags: ['AI Tools','Productivity','Automation','Technology','Workflows','Digital Skills'],
  excerpt: 'The value of AI tools comes less from which one you pick, and more from how deliberately you build them into an actual workflow.',
  content: `
    <p>The AI tools market has grown crowded enough that "which tool should I use?" is often the wrong first question. A more useful starting point is understanding the categories of AI assistance available and where each genuinely saves time — because a well-chosen tool used badly still wastes time, and a modest tool used well can meaningfully change a workday.</p>

    <h2>AI for Research</h2>
    <p>AI research assistants can summarize long documents, surface relevant sections quickly, and help synthesize information from multiple sources into a coherent starting point. They're most useful for cutting down the time spent skimming, not for replacing the judgment needed to evaluate whether a source is trustworthy or relevant.</p>

    <h2>AI for Writing</h2>
    <p>Writing assistants help with drafting, rephrasing, tightening language, and adjusting tone. They shine at getting past a blank page and handling repetitive writing tasks like status updates or routine emails. They're weakest when nuance, brand voice, or sensitive context is involved — areas that still need a human pass before anything goes out the door.</p>

    <h2>AI for Coding</h2>
    <p>Coding assistants can autocomplete functions, explain unfamiliar code, and suggest fixes for errors. Used well, they reduce time spent on boilerplate and repetitive patterns, freeing developers to focus on architecture, edge cases, and code review. Used carelessly, they can introduce subtle bugs that look plausible but don't actually work — which is why review remains non-negotiable.</p>

    <h2>AI for Design</h2>
    <p>Design-focused AI tools can generate quick visual concepts, remove backgrounds, or suggest layout variations. These are best treated as a fast way to explore options early in a project, not as a substitute for a designer's judgment about brand, usability, and audience.</p>

    <h2>AI for Data Analysis</h2>
    <p>AI can help identify patterns in a dataset, suggest which charts might communicate a finding clearly, and explain statistical concepts in plain language. This speeds up the exploratory phase of analysis, though understanding the underlying business question and validating results still requires human expertise.</p>

    <h2>AI for Meetings and Organization</h2>
    <p>Meeting-focused tools can transcribe conversations, extract action items, and summarize long discussions into a few key points. This is one of the clearest, lowest-risk productivity wins available, since the value — saving note-taking time — rarely depends on the AI being perfectly precise about every detail.</p>

    <h2>AI for Automation</h2>
    <p>Beyond conversational tools, AI increasingly powers rule-based and adaptive automation — routing support tickets, flagging anomalies in data, or triggering workflows based on patterns. This category tends to deliver the most durable time savings because it removes a task from a human's plate entirely, rather than just speeding up a manual step.</p>

    <h2>How to Choose the Right Tool</h2>
    <p>Instead of chasing the newest or most hyped tool, evaluate options against three questions: Does it fit into how you already work? Does it save meaningfully more time than it costs to learn? And does it handle your data in a way you're comfortable with? A tool that scores well on all three will get used; one that doesn't will be abandoned within a week.</p>

    <h2>Creating an AI-Assisted Workflow</h2>
    <p>The biggest productivity gains rarely come from one tool used in isolation — they come from chaining a few tools into a repeatable workflow. For example: a meeting is transcribed and summarized automatically, action items are drafted into a task list, and a writing assistant helps turn key decisions into a follow-up email. Each step saves a little time; together, they save a lot.</p>

    <h2>Verification and Human Oversight</h2>
    <p>AI tools can be confidently wrong, especially with numbers, citations, and specific factual claims. Building a habit of verifying anything that will be sent externally or used for a real decision isn't optional overhead — it's the difference between a productivity gain and a costly mistake.</p>

    <h2>Privacy and Responsible Usage</h2>
    <p>Not all AI tools handle data the same way, and sending sensitive company or customer information into a tool without understanding its data policies carries real risk. Before adopting a new AI tool for work, it's worth a few minutes to understand what happens to the information you put into it.</p>

    <h2>Practical Productivity Workflow</h2>
    <ul>
      <li>Use a meeting assistant to capture notes and action items automatically.</li>
      <li>Use a writing assistant for first drafts of routine communication.</li>
      <li>Use a research assistant to summarize background material before deep work.</li>
      <li>Reserve final review and judgment calls for yourself, every time.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>AI tools are genuinely useful, but their value depends entirely on deliberate, thoughtful use rather than simply adopting whatever is newest. Choosing tools that fit an existing workflow, verifying their output, and being mindful about data privacy turns "using AI" from a buzzword into an actual productivity advantage.</p>
  `
},
{
  id: 'article5-design',
  title: 'The Psychology Behind Good Interface Design',
  category: 'Design',
  author: 'Nexora Editorial Team',
  date: 'September 2, 2026',
  readTime: '6 min read',
  image: 'assets/article5-design.png',
  tags: ['UI Design','UX Psychology','Visual Design','User Behavior','Design Thinking','Interfaces'],
  excerpt: 'Every interface makes a series of small psychological bets about how people think, notice, and remember — the good ones just make better bets.',
  content: `
    <p>Interfaces aren't neutral containers for content — they're built on assumptions about how the human mind works. Good design gets those assumptions right often enough that using the product feels effortless. Understanding a few core psychological concepts helps explain why certain design choices consistently work, and others consistently don't.</p>

    <h2>Understanding Cognitive Load</h2>
    <p>Cognitive load is the mental effort required to process information and complete a task. Every unnecessary decision, unclear label, or cluttered screen adds to that load. Good interfaces reduce load by making the "obvious" choice actually obvious — through hierarchy, spacing, and clear labeling — so users spend their limited mental effort on the task itself, not on decoding the interface.</p>

    <h2>Recognition vs Recall</h2>
    <p>Recognition — seeing an option and identifying it as familiar — is far easier for the brain than recall — remembering something from memory with no visual cue. This is why menus, visible options, and autocomplete consistently outperform interfaces that expect users to remember a command or a specific term. Designing for recognition rather than recall lowers the effective difficulty of using a product.</p>

    <h2>Visual Hierarchy</h2>
    <p>The eye doesn't scan a page evenly — it's drawn first to size, contrast, and position. Designers can use this to direct attention deliberately: a large, high-contrast heading gets noticed first; a small gray caption gets noticed last, if at all. Hierarchy isn't decoration — it's a map for the eye.</p>

    <h2>Familiarity and Mental Models</h2>
    <p>Users bring expectations from other products into every new interface they touch. A shopping cart icon is expected to open a cart; a magnifying glass is expected to open search. Deviating from these established mental models without a strong reason forces users to relearn something they already knew, which adds friction without adding value.</p>

    <h2>Color and Emotional Response</h2>
    <p>Color carries emotional and functional weight — red often signals urgency or error, green often signals success or approval. These associations aren't universal across every culture, but within a given product's audience, consistent color use builds a reliable visual language that users learn to trust over time.</p>

    <h2>Typography and Readability</h2>
    <p>Typography affects far more than aesthetics — line length, line height, and font size all directly affect how easily text can be read and understood. Long, cramped paragraphs increase reading fatigue; well-spaced, appropriately-sized text keeps comprehension high, especially over longer reading sessions.</p>

    <h2>Spacing and Grouping</h2>
    <p>Elements placed close together are perceived as related, even without an explicit border or label — a principle rooted in Gestalt psychology. Good use of whitespace and grouping lets a layout communicate structure implicitly, without needing extra visual dividers to explain what belongs together.</p>

    <h2>Affordances and Signifiers</h2>
    <p>An affordance is what an object allows you to do; a signifier is the visual cue that communicates that possibility. A button that looks pressable — with subtle shadow or contrast — invites a click before a user consciously thinks about it. Flat, ambiguous elements that don't signal their interactivity often go unnoticed or untapped, even when they're fully functional.</p>

    <h2>Feedback</h2>
    <p>The brain expects a response to an action, and a lack of feedback creates uncertainty — did the click register? Is something loading, or is it broken? Clear, immediate feedback (a state change, a loading indicator, a confirmation message) closes that uncertainty loop and keeps users confident in the system.</p>

    <h2>Progressive Disclosure</h2>
    <p>Revealing complexity gradually — showing basic options first and advanced ones only on request — respects users' limited attention. It prevents overwhelming a first-time user while still giving power users access to deeper functionality when they need it.</p>

    <h2>Emotional Design</h2>
    <p>Beyond pure usability, small emotional details — a warm empty state message, a satisfying micro-interaction, a moment of delight in an otherwise functional flow — shape how people feel about a product, which in turn shapes loyalty and word-of-mouth. Usability gets someone through a task; emotional design makes them want to come back.</p>

    <h2>Accessibility and Inclusive Design</h2>
    <p>Psychological principles apply differently across different users. Color-only signals fail colorblind users; small touch targets fail users with motor impairments; unclear language fails users unfamiliar with jargon. Designing with a wider range of human variation in mind isn't a separate consideration — it's part of getting the psychology right for everyone, not just the average user.</p>

    <h2>Applying Psychology Without Manipulating Users</h2>
    <p>These same psychological principles can be misused — dark patterns exploit cognitive biases to trick users into unwanted purchases or subscriptions. Ethical application of design psychology means using these tools to reduce friction and confusion, not to exploit predictable human behavior against a user's own interest.</p>

    <h2>Practical Design Checklist</h2>
    <ul>
      <li>Is the most important element on this screen also the most visually prominent?</li>
      <li>Does this rely on recall when recognition would be easier?</li>
      <li>Do interactive elements look interactive?</li>
      <li>Is feedback immediate and clear for every user action?</li>
      <li>Does this design respect users with different abilities?</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Good interface design isn't just visual craft — it's applied psychology, whether or not the designer names it that way. Understanding cognitive load, recognition, hierarchy, and feedback gives designers a vocabulary for why certain choices work, and a framework for making better ones deliberately rather than by accident.</p>
  `
},
{
  id: 'article6-data',
  title: 'How to Learn Data Analytics in 2026',
  category: 'Career',
  author: 'Nexora Editorial Team',
  date: 'September 1, 2026',
  readTime: '7 min read',
  image: 'assets/article6-data.png',
  tags: ['Data Analytics','Excel','SQL','Power BI','Data Visualization','Career'],
  excerpt: 'Learning data analytics is less about mastering every tool and more about building a repeatable process from raw data to a clear recommendation.',
  content: `
    <p>Data analytics can feel like an intimidatingly wide field — Excel, SQL, statistics, Python, Power BI, Tableau, and more all show up on job postings simultaneously. The good news is that a clear, sequential roadmap exists, and most working analysts use a smaller, more focused toolkit day-to-day than beginners expect.</p>

    <h2>What Data Analytics Actually Involves</h2>
    <p>At its core, data analytics is the process of turning raw data into decisions. That means collecting or accessing data, cleaning it, exploring it for patterns, visualizing what matters, and communicating a clear recommendation to people who may not be technical themselves. Tools support each stage, but the underlying process is what actually defines the discipline.</p>

    <h2>The Core Skills</h2>
    <h3>Excel</h3>
    <p>Excel remains a foundational tool because it's universal, fast for smaller datasets, and widely used across nearly every industry. Learning formulas, pivot tables, and basic data cleaning in Excel builds intuition that transfers directly into more advanced tools later.</p>

    <h3>SQL</h3>
    <p>SQL is how most real-world data actually gets accessed — most business data lives in relational databases, not spreadsheets. Learning to filter, join, and aggregate data with SQL is one of the highest-leverage skills an aspiring analyst can build, because it unlocks direct access to a company's real data rather than pre-exported files.</p>

    <h3>Statistics</h3>
    <p>You don't need a statistics degree, but you do need working fluency in concepts like averages, distributions, correlation, and variability. Without this, it's easy to misinterpret patterns — mistaking correlation for causation, or drawing conclusions from a sample too small to be meaningful.</p>

    <h3>Data Cleaning</h3>
    <p>Real data is messy: missing values, duplicate entries, inconsistent formatting, and outright errors are the norm, not the exception. Learning to systematically identify and handle these issues before analysis is unglamorous but essential — bad inputs guarantee bad conclusions no matter how sophisticated the analysis afterward.</p>

    <h3>Exploratory Data Analysis</h3>
    <p>Exploratory Data Analysis, or EDA, is the process of getting to know a dataset before drawing conclusions from it — checking distributions, spotting anomalies, and forming early hypotheses. Skipping this step and jumping straight to a dashboard often means missing important context that changes the final interpretation.</p>

    <h3>Data Visualization</h3>
    <p>Good visualization communicates a finding clearly to someone who hasn't looked at the raw data at all. This means choosing the right chart for the message — not the most visually impressive one — and stripping away decoration that doesn't add clarity.</p>

    <h3>Power BI / Tableau</h3>
    <p>Business intelligence tools like Power BI and Tableau let analysts build interactive dashboards that stakeholders can explore themselves. Learning one of these tools well is generally more valuable early on than trying to learn both simultaneously — the underlying concepts transfer easily once you're fluent in one.</p>

    <h3>Data Modeling</h3>
    <p>Understanding how tables relate to each other — through keys, dimensions, and measures — is what separates someone who can build a single chart from someone who can build a genuinely useful, interconnected dashboard.</p>

    <h2>Business Understanding</h2>
    <p>Technical skill without business context produces technically correct but practically useless analysis. Understanding what a company or team is actually trying to achieve — reducing churn, increasing conversion, cutting cost — is what turns a chart into an actionable recommendation.</p>

    <h2>Communication and Storytelling</h2>
    <p>The final, often underrated skill is communication: explaining what the data shows, why it matters, and what should happen next, in language a non-technical stakeholder can act on. An analyst who can't communicate findings clearly limits the impact of even excellent technical work.</p>

    <h2>Portfolio Projects</h2>
    <p>Employers want to see applied skill, not just completed courses. A small number of well-documented portfolio projects — ideally using a real or realistic dataset, with a clear question, process, and conclusion — demonstrate capability far more convincingly than a list of certificates.</p>

    <h2>Beginner-to-Job-Ready Roadmap</h2>
    <ol>
      <li>Excel fundamentals — formulas, pivot tables, basic cleaning.</li>
      <li>SQL — SELECT, WHERE, JOIN, GROUP BY, aggregate functions.</li>
      <li>Statistics fundamentals — descriptive statistics, correlation.</li>
      <li>Data cleaning practice on messy, realistic datasets.</li>
      <li>Power BI or Tableau — build interactive dashboards.</li>
      <li>Data modeling — relationships, dimensions, and measures.</li>
      <li>Two to three portfolio projects with clear business questions.</li>
      <li>Practice explaining findings out loud, as if to a non-technical manager.</li>
    </ol>

    <h2>Common Learning Mistakes</h2>
    <ul>
      <li>Trying to learn every tool at once instead of building depth sequentially.</li>
      <li>Skipping data cleaning practice because it feels less exciting than visualization.</li>
      <li>Building portfolio projects with no clear business question behind them.</li>
      <li>Neglecting communication skills in favor of technical depth alone.</li>
    </ul>

    <h2>How to Practice</h2>
    <p>Practicing on real or realistic public datasets — rather than only following along with a tutorial — builds the troubleshooting instincts that tutorials can't teach. Messy data forces genuine problem-solving, which is closer to what the job actually requires.</p>

    <h2>How to Demonstrate Skills to Employers</h2>
    <p>A focused portfolio, a clear explanation of your process on each project, and confidence discussing trade-offs you made all matter more than a long list of tools you've "used." Employers are hiring judgment as much as technical ability.</p>

    <h2>Conclusion</h2>
    <p>Learning data analytics in 2026 doesn't require mastering every tool on the market — it requires building a repeatable process, from messy raw data to a clear, well-communicated recommendation, and demonstrating that process through real, well-documented projects.</p>
  `
},
{
  id: 'article7-productivity',
  title: 'Building Better Digital Habits',
  category: 'Productivity',
  author: 'Nexora Editorial Team',
  date: 'August 31, 2026',
  readTime: '5 min read',
  image: 'assets/article7-productivity.png',
  tags: ['Productivity','Digital Habits','Focus','Time Management','Work-Life Balance','Personal Growth'],
  excerpt: 'Most digital distraction isn\'t a willpower problem — it\'s a design problem, and it can be addressed with better systems rather than more discipline.',
  content: `
    <p>Digital distraction rarely feels like a single big decision — it's dozens of small ones, made automatically, throughout the day. Checking a notification. Opening a new tab "just for a second." Switching between three tasks because none of them feel finished. Building better digital habits means addressing the systems behind these small decisions, not just trying harder to resist them.</p>

    <h2>Why Digital Distraction Happens</h2>
    <p>Most digital products are explicitly designed to capture and hold attention — that's often how they generate revenue. Understanding this reframes the problem: it isn't a personal failure of discipline so much as a mismatch between human attention and systems built to interrupt it as often as possible.</p>

    <h2>Notifications</h2>
    <p>Every notification, regardless of urgency, creates a small pull on attention. Most notifications aren't actually urgent — they simply feel urgent because of how they're designed. Turning off non-essential notifications, and batching the rest into scheduled checks rather than a constant stream, meaningfully reduces the number of small interruptions across a day.</p>

    <h2>Context Switching</h2>
    <p>Every time attention shifts from one task to another, there's a cost in re-orientation before real focus returns. Frequent context switching — checking email mid-task, jumping between apps — adds up to significant lost time, even when each individual switch feels brief. Reducing the frequency of switching, not just the duration of any single distraction, is often the bigger lever.</p>

    <h2>Social Media and Attention</h2>
    <p>Social platforms are optimized for engagement, which often means optimized for unpredictable, intermittent rewards — a pattern known to be especially compelling to human attention. Recognizing this design intent, rather than treating repeated checking as a personal weakness, makes it easier to set deliberate boundaries: specific times, specific durations, and clear intentions for opening an app rather than opening it reflexively.</p>

    <h2>Designing a Focused Workspace</h2>
    <p>A workspace — digital or physical — that minimizes visible distractions makes focus the path of least resistance rather than something requiring constant effort. Closing unused tabs, silencing unrelated apps, and keeping only task-relevant tools open reduces the number of small temptations available at any moment.</p>

    <h2>Task Prioritization</h2>
    <p>Not all tasks deserve equal attention, but without a clear system, everything can start to feel equally urgent. Simple prioritization — identifying the one or two tasks that matter most each day — prevents busywork from crowding out meaningful progress.</p>

    <h2>Time Blocking</h2>
    <p>Time blocking means assigning specific blocks of time to specific tasks in advance, rather than reacting to whatever feels most pressing in the moment. This reduces decision fatigue throughout the day and creates protected space for deep, focused work that's otherwise easy to lose to smaller interruptions.</p>

    <h2>Digital Decluttering</h2>
    <p>Cluttered inboxes, disorganized files, and an overwhelming number of installed apps all add small amounts of friction and mental noise. Periodically clearing out what's no longer needed — unsubscribing from unused newsletters, archiving old files, removing unused apps — keeps digital environments calmer and easier to navigate.</p>

    <h2>Creating Sustainable Routines</h2>
    <p>Habits that depend entirely on motivation tend to collapse the first time motivation dips. Habits built into a consistent routine — a set time for email, a set time for deep work, a set time to disconnect — are far more resilient, because they don't require a fresh decision every single day.</p>

    <h2>Balancing Productivity and Wellbeing</h2>
    <p>Productivity systems that ignore rest eventually undermine themselves — sustained focus requires genuine recovery, not just more efficient scheduling. Treating breaks and downtime as part of a productive system, rather than a failure to optimize further, tends to produce better results over time than constant, uninterrupted output.</p>

    <h2>Building Habits That Actually Last</h2>
    <p>Small, consistent changes tend to outlast dramatic overhauls. Removing one major source of distraction and sticking with that change is generally more sustainable than attempting a complete digital detox that's difficult to maintain past the first week.</p>

    <h2>A Practical Daily System</h2>
    <ul>
      <li>Identify one or two priority tasks before checking email or notifications.</li>
      <li>Batch notification checks into two or three scheduled windows.</li>
      <li>Use time blocks for focused work, with unrelated tabs and apps closed.</li>
      <li>Build in real breaks, not just shorter distractions.</li>
      <li>Review at the end of the day what worked and adjust tomorrow's plan.</li>
    </ul>

    <h2>Progress Over Perfection</h2>
    <p>No system eliminates distraction completely, and expecting perfect focus every day sets an unrealistic bar. The goal is a gradual, sustainable improvement in how attention is spent — not flawless discipline, which very few people maintain indefinitely.</p>

    <h2>Conclusion</h2>
    <p>Better digital habits come less from willpower and more from designing an environment — notifications, workspace, routines — that makes focus the easier default. Small, consistent adjustments, applied patiently, tend to produce far more lasting change than an ambitious but short-lived overhaul.</p>
  `
},
{
  id: 'article8-generative-ai',
  title: 'What Generative AI Means for Creators',
  category: 'AI & Innovation',
  author: 'Nexora Editorial Team',
  date: 'August 30, 2026',
  readTime: '7 min read',
  image: 'assets/article8-generative-ai.png',
  tags: ['Generative AI','Creativity','AI','Design','Content Creation','Innovation'],
  excerpt: 'Generative AI hasn\'t replaced creative work — it has changed where creative effort is spent, shifting emphasis from production toward direction and judgment.',
  content: `
    <p>Generative AI has moved from a novelty to a genuine part of many creative workflows in a short span of time. For creators — writers, designers, musicians, filmmakers — the practical question isn't whether to engage with it, but how to do so in a way that strengthens rather than dilutes their work.</p>

    <h2>What Generative AI Actually Is</h2>
    <p>Generative AI refers to systems trained on large amounts of existing content — text, images, audio, video — that learn patterns well enough to generate new content in response to a prompt. It doesn't "understand" creativity the way a human does; it produces statistically plausible output based on patterns learned during training.</p>

    <h2>How Text Generation Works at a High Level</h2>
    <p>Text-generating models predict likely sequences of words based on patterns learned from vast amounts of text. This allows them to produce fluent, often useful writing, but it also means they can produce confident, well-structured sentences that are factually wrong — a limitation worth remembering for any creative or informational use.</p>

    <h2>Image Generation</h2>
    <p>Image-generation tools produce visuals from text prompts by learning associations between language and visual patterns during training. They're powerful for rapid concept exploration and mood boards, but they can struggle with precise detail, consistent characters across multiple images, and specific technical accuracy.</p>

    <h2>Video Generation</h2>
    <p>Video generation is a newer and more computationally demanding extension of the same underlying idea, and it remains less mature than text or image generation. It's increasingly useful for short-form content and concept previews, though consistency and fine control over longer sequences remain active challenges.</p>

    <h2>Audio and Creative Applications</h2>
    <p>Generative AI also extends to music composition, voice synthesis, and sound design, giving creators new starting points for audio work. As with other mediums, these tools work best as a component of a human-directed process rather than a fully autonomous replacement for it.</p>

    <h2>AI-Assisted Brainstorming</h2>
    <p>One of the most immediately useful applications is brainstorming — generating a wide range of variations or directions quickly, which a creator can then filter, combine, and refine. This can meaningfully shorten the time spent on the earliest, most open-ended stage of a creative project.</p>

    <h2>AI as a Creative Partner</h2>
    <p>Framing AI as a collaborator rather than an author reflects how most professional creators actually use it: as a tool for exploring options and handling repetitive production work, while creative direction, taste, and final decisions remain firmly in human hands.</p>

    <h2>Benefits for Creators</h2>
    <ul>
      <li>Faster exploration of early concepts and variations.</li>
      <li>Reduced time spent on repetitive production tasks.</li>
      <li>Lower barriers to experimenting with unfamiliar styles or mediums.</li>
      <li>More time available for refinement, direction, and storytelling.</li>
    </ul>

    <h2>Limitations and Quality Problems</h2>
    <p>Generative outputs can be inconsistent, generic, or subtly flawed — particularly with fine detail, logical consistency, or nuanced emotional tone. Treating AI output as a finished product rather than a draft tends to produce noticeably weaker final work than treating it as raw material for further human refinement.</p>

    <h2>Originality and Creative Direction</h2>
    <p>Because generative models are trained on existing content, their outputs can sometimes feel derivative or stylistically similar to well-represented patterns in their training data. Strong creative direction — a clear point of view, unusual combinations, deliberate editing — is what keeps AI-assisted work from feeling generic.</p>

    <h2>Copyright and Ownership Considerations</h2>
    <p>Questions about copyright, ownership, and the use of AI-generated content vary meaningfully by jurisdiction, platform terms of service, and the specific tool used, and this area continues to evolve. Rather than assuming a single universal rule, creators working professionally with generative AI should check the specific terms of the tools they use and stay aware that legal frameworks in this space are still developing.</p>

    <h2>Responsible AI Use</h2>
    <p>Responsible use includes being transparent about AI involvement where relevant, avoiding the generation of misleading content presented as authentic, and being mindful of how training data and generated outputs might affect other creators' work and livelihoods.</p>

    <h2>Human Creativity vs AI Generation</h2>
    <p>Human creativity draws on lived experience, intention, and context in ways current generative systems don't genuinely possess — they recombine patterns rather than experience the world. This distinction matters less for pure novelty and more for the emotional resonance and specific point of view that distinguish memorable creative work from merely competent output.</p>

    <h2>Building a Human + AI Workflow</h2>
    <p>A practical workflow often looks like: use AI for early-stage exploration and repetitive production tasks, apply human judgment for direction and refinement, and reserve final creative decisions — the choices that define a project's identity — entirely for the human creator.</p>

    <h2>What the Future Could Look Like</h2>
    <p>As tools mature, the line between "using AI" and "using software" will likely blur further, similar to how digital editing tools became unremarkable parts of creative work over time. The creators who benefit most will likely be those who treat these tools as an extension of their process rather than a replacement for their judgment.</p>

    <h2>Practical Takeaways</h2>
    <ul>
      <li>Use generative AI for exploration and drafts, not final, unreviewed output.</li>
      <li>Maintain a clear creative point of view that AI alone can't replicate.</li>
      <li>Stay informed about the specific copyright terms of tools you use.</li>
      <li>Be transparent about AI involvement where it's relevant to your audience.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Generative AI hasn't eliminated the need for human creativity — it has shifted where creative effort is best spent, from repetitive production toward direction, taste, and judgment. Creators who treat it as a capable but limited collaborator, rather than an autonomous replacement, are best positioned to benefit from it.</p>
  `
}
];

/* ============================================================
   STATE
============================================================ */
const CATEGORIES = ['All','AI & Innovation','Technology','Design','Career','Productivity'];
const PAGE_SIZE = 4;

let currentCategory = 'All';
let currentTag = null;
let currentSearch = '';
let visibleCount = PAGE_SIZE;
let currentArticleId = null;

/* ============================================================
   DOM REFS
============================================================ */
const homeView = document.getElementById('homeView');
const articleView = document.getElementById('articleView');
const featuredCard = document.getElementById('featuredCard');
const categoryRow = document.getElementById('categoryRow');
const articleGrid = document.getElementById('articleGrid');
const noResults = document.getElementById('noResults');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const allLoadedMsg = document.getElementById('allLoadedMsg');
const activeTagRow = document.getElementById('activeTagRow');
const searchInput = document.getElementById('searchInput');
const readingProgress = document.getElementById('readingProgress');

/* ============================================================
   UTILITIES
============================================================ */
function findArticle(id){ return ARTICLES.find(a => a.id === id); }
function slugTag(tag){ return tag; }

/* ============================================================
   HOMEPAGE RENDER
============================================================ */
function renderFeatured(){
  const a = ARTICLES[0];
  featuredCard.innerHTML = `
    <img src="${a.image}" alt="${a.title}" class="featured-img">
    <div class="featured-body">
      <span class="featured-category">${a.category}</span>
      <h3>${a.title}</h3>
      <p class="featured-excerpt">${a.excerpt}</p>
      <p class="featured-meta">${a.date} &middot; ${a.readTime}</p>
      <button class="btn-primary" data-open-article="${a.id}">Read Article</button>
    </div>
  `;
  featuredCard.querySelector('[data-open-article]').addEventListener('click', () => openArticle(a.id));
}

function renderCategoryRow(){
  categoryRow.innerHTML = CATEGORIES.map(cat =>
    `<button class="category-btn ${cat === currentCategory ? 'active' : ''}" data-category="${cat}">${cat}</button>`
  ).join('');
  categoryRow.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.category;
      currentTag = null;
      visibleCount = PAGE_SIZE;
      renderCategoryRow();
      renderActiveTagRow();
      renderArticles();
    });
  });
}

function renderActiveTagRow(){
  if (currentTag) {
    activeTagRow.classList.add('show');
    activeTagRow.innerHTML = `
      <span class="active-tag-pill">
        Tag: ${currentTag}
        <button id="clearTagBtn" aria-label="Clear tag filter">&times;</button>
      </span>
    `;
    document.getElementById('clearTagBtn').addEventListener('click', () => {
      currentTag = null;
      visibleCount = PAGE_SIZE;
      renderActiveTagRow();
      renderArticles();
    });
  } else {
    activeTagRow.classList.remove('show');
    activeTagRow.innerHTML = '';
  }
}

function getFilteredArticles(){
  const query = currentSearch.trim().toLowerCase();
  return ARTICLES.filter(a => {
    if (currentCategory !== 'All' && a.category !== currentCategory) return false;
    if (currentTag && !a.tags.includes(currentTag)) return false;
    if (!query) return true;
    const haystack = [a.title, a.category, a.excerpt, a.tags.join(' '), a.content].join(' ').toLowerCase();
    return haystack.includes(query);
  });
}

function renderArticles(){
  const filtered = getFilteredArticles();
  const toShow = filtered.slice(0, visibleCount);

  articleGrid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.classList.add('show');
    loadMoreBtn.style.display = 'none';
    allLoadedMsg.classList.remove('show');
    return;
  }
  noResults.classList.remove('show');

  toShow.forEach(a => {
    const card = document.createElement('article');
    card.className = 'article-card';
    card.innerHTML = `
      <div class="card-img-wrap"><img src="${a.image}" alt="${a.title}" class="card-img"></div>
      <div class="card-body">
        <span class="card-category">${a.category}</span>
        <h3 class="card-title">${a.title}</h3>
        <p class="card-excerpt">${a.excerpt}</p>
        <p class="card-meta">${a.date} &middot; ${a.readTime}</p>
        <div class="card-tags">${a.tags.slice(0,3).map(t => `<span class="card-tag" data-tag="${t}">${t}</span>`).join('')}</div>
        <button class="card-read-btn" data-open-article="${a.id}">Read Article</button>
      </div>
    `;
    card.querySelector('[data-open-article]').addEventListener('click', () => openArticle(a.id));
    card.querySelectorAll('.card-tag').forEach(tagEl => {
      tagEl.addEventListener('click', () => {
        currentTag = tagEl.dataset.tag;
        currentCategory = 'All';
        visibleCount = PAGE_SIZE;
        renderCategoryRow();
        renderActiveTagRow();
        renderArticles();
        document.getElementById('articles').scrollIntoView({ behavior:'smooth' });
      });
    });
    articleGrid.appendChild(card);
  });

  if (visibleCount >= filtered.length) {
    loadMoreBtn.style.display = 'none';
    allLoadedMsg.classList.add('show');
  } else {
    loadMoreBtn.style.display = 'inline-block';
    allLoadedMsg.classList.remove('show');
  }
}

loadMoreBtn.addEventListener('click', () => {
  visibleCount += PAGE_SIZE;
  renderArticles();
});

/* ============================================================
   SEARCH
============================================================ */
searchInput.addEventListener('input', () => {
  currentSearch = searchInput.value;
  visibleCount = PAGE_SIZE;
  renderArticles();
});

document.getElementById('searchClear').addEventListener('click', () => {
  searchInput.value = '';
  currentSearch = '';
  visibleCount = PAGE_SIZE;
  renderArticles();
});

const searchToggle = document.getElementById('searchToggle');
const searchPanel = document.getElementById('searchPanel');

searchToggle.addEventListener('click', () => {
  const isOpen = searchPanel.classList.toggle('open');
  searchToggle.setAttribute('aria-expanded', String(isOpen));
  if (isOpen) setTimeout(() => searchInput.focus(), 300);
});

/* ============================================================
   ARTICLE DETAIL VIEW
============================================================ */
function openArticle(id){
  const a = findArticle(id);
  if (!a) return;
  currentArticleId = id;

  document.getElementById('detailCategory').textContent = a.category;
  document.getElementById('detailTitle').textContent = a.title;
  document.getElementById('detailAuthor').textContent = a.author;
  document.getElementById('detailDate').textContent = a.date;
  document.getElementById('detailReadTime').textContent = a.readTime;
  document.getElementById('detailImage').src = a.image;
  document.getElementById('detailImage').alt = a.title;
  document.getElementById('detailContent').innerHTML = a.content;
  document.getElementById('detailTags').innerHTML = a.tags.map(t => `<span class="card-tag" data-tag="${t}">${t}</span>`).join('');

  document.getElementById('detailTags').querySelectorAll('.card-tag').forEach(tagEl => {
    tagEl.addEventListener('click', () => {
      currentTag = tagEl.dataset.tag;
      currentCategory = 'All';
      visibleCount = PAGE_SIZE;
      closeArticle();
      renderCategoryRow();
      renderActiveTagRow();
      renderArticles();
    });
  });

  renderRelated(a);
  renderComments(a.id);

  homeView.classList.add('hidden');
  articleView.classList.add('active');
  window.location.hash = `article/${a.id}`;
  window.scrollTo(0, 0);
  updateReadingProgress();
}

function closeArticle(){
  articleView.classList.remove('active');
  homeView.classList.remove('hidden');
  currentArticleId = null;
  window.location.hash = '';
}

document.getElementById('backToArticles').addEventListener('click', closeArticle);

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;

  if (hash.startsWith('#article/')) {
    const id = hash.replace('#article/', '');
    if (findArticle(id) && id !== currentArticleId) openArticle(id);
  } else if (!hash && currentArticleId) {
    closeArticle();
  }
});

/* ============================================================
   RELATED ARTICLES
   MODIFIED ONLY FOR FULL CARD CLICKABILITY
============================================================ */
function renderRelated(current){
  const related = ARTICLES
    .filter(a => a.id !== current.id)
    .map(a => {
      let score = 0;
      if (a.category === current.category) score += 2;
      score += a.tags.filter(t => current.tags.includes(t)).length;
      return { a, score };
    })
    .sort((x,y) => y.score - x.score)
    .slice(0, 3)
    .map(x => x.a);

  const grid = document.getElementById('relatedGrid');

  grid.innerHTML = related.map(a => `
    <article
      class="article-card related-card"
      data-related-id="${a.id}"
      tabindex="0"
      role="link"
      aria-label="Read article: ${a.title}"
    >
      <div class="card-img-wrap">
        <img src="${a.image}" alt="${a.title}" class="card-img">
      </div>

      <div class="card-body">
        <span class="card-category">${a.category}</span>
        <h3 class="card-title">${a.title}</h3>
        <p class="card-meta">${a.date} &middot; ${a.readTime}</p>
        <button class="card-read-btn" data-open-related="${a.id}">
          Read Article
        </button>
      </div>
    </article>
  `).join('');

  // Make the ENTIRE related article card clickable.
  // Image, category, title, metadata, card body and button
  // all open the same article.
  grid.querySelectorAll('.related-card').forEach(card => {
    card.addEventListener('click', () => {
      openArticle(card.dataset.relatedId);
    });

    // Keyboard accessibility: Enter or Space opens the article.
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openArticle(card.dataset.relatedId);
      }
    });
  });

  // Keep the existing Read Article button working.
  // stopPropagation prevents the card click handler from firing twice.
  grid.querySelectorAll('[data-open-related]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openArticle(btn.dataset.openRelated);
    });
  });
}

/* ============================================================
   READING PROGRESS + BACK TO TOP
============================================================ */
function updateReadingProgress(){
  if (!articleView.classList.contains('active')) {
    readingProgress.style.width = '0%';
    return;
  }

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  readingProgress.style.width = pct + '%';
}

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  updateReadingProgress();
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 20);
  backToTop.classList.toggle('show', window.scrollY > 500);
});

backToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

/* ============================================================
   SOCIAL SHARING
============================================================ */
document.getElementById('shareLinkedIn').addEventListener('click', () => {
  const url = getCurrentArticleUrl();
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'noopener');
});

document.getElementById('shareFacebook').addEventListener('click', () => {
  const url = getCurrentArticleUrl();
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener');
});

document.getElementById('shareX').addEventListener('click', () => {
  const a = findArticle(currentArticleId);
  const url = getCurrentArticleUrl();
  window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(a ? a.title : '')}`, '_blank', 'noopener');
});

document.getElementById('shareCopy').addEventListener('click', () => {
  const url = getCurrentArticleUrl();
  const confirmEl = document.getElementById('copyConfirm');

  const showConfirm = () => {
    confirmEl.classList.add('show');
    setTimeout(() => confirmEl.classList.remove('show'), 2200);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(showConfirm).catch(showConfirm);
  } else {
    showConfirm();
  }
});

function getCurrentArticleUrl(){
  return window.location.origin + window.location.pathname + '#article/' + currentArticleId;
}

/* ============================================================
   COMMENTS (Local Storage, keyed by article id)
============================================================ */
function getCommentsKey(articleId){
  return `nexora-comments-${articleId}`;
}

function loadCommentsFor(articleId){
  try {
    const raw = localStorage.getItem(getCommentsKey(articleId));
    return raw ? JSON.parse(raw) : [];
  } catch(e){
    return [];
  }
}

function saveCommentsFor(articleId, comments){
  localStorage.setItem(getCommentsKey(articleId), JSON.stringify(comments));
}

function renderComments(articleId){
  const comments = loadCommentsFor(articleId);
  const list = document.getElementById('commentsList');
  const noComments = document.getElementById('noComments');

  if (comments.length === 0) {
    list.innerHTML = '';
    noComments.classList.add('show');
    return;
  }

  noComments.classList.remove('show');

  list.innerHTML = comments.map(c => `
    <div class="comment-item">
      <p class="comment-author">${escapeHtml(c.name)}</p>
      <p class="comment-date">${c.date}</p>
      <p class="comment-text">${escapeHtml(c.text)}</p>
    </div>
  `).join('');
}

function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

document.getElementById('commentForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('commentName');
  const textInput = document.getElementById('commentText');
  const nameError = document.getElementById('commentNameError');
  const textError = document.getElementById('commentTextError');

  const name = nameInput.value.trim();
  const text = textInput.value.trim();

  let valid = true;

  if (!name) {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  if (!text || text.length < 3) {
    textError.textContent = 'Comment must be at least 3 characters.';
    valid = false;
  } else {
    textError.textContent = '';
  }

  if (!valid || !currentArticleId) return;

  const comments = loadCommentsFor(currentArticleId);

  comments.push({
    name,
    text,
    date: new Date().toLocaleDateString(undefined, {
      month:'short',
      day:'numeric',
      year:'numeric'
    })
  });

  saveCommentsFor(currentArticleId, comments);
  renderComments(currentArticleId);

  nameInput.value = '';
  textInput.value = '';
});

/* ============================================================
   THEME
============================================================ */
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme){
  document.body.classList.remove('dark','light');
  document.body.classList.add(theme);

  themeToggle.textContent = theme === 'dark' ? '\u2600' : '\u263D';
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
}

function loadTheme(){
  const saved = localStorage.getItem('nexora-theme');
  applyTheme(saved === 'light' ? 'light' : 'dark');
}

themeToggle.addEventListener('click', () => {
  const next = document.body.classList.contains('dark') ? 'light' : 'dark';

  applyTheme(next);
  localStorage.setItem('nexora-theme', next);
});

/* ============================================================
   NAVIGATION (nav links, mobile menu, footer links)
============================================================ */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

function openMobileMenu(){
  hamburger.classList.add('open');
  mobileMenu.classList.add('open');
  overlay.classList.add('show');
  hamburger.setAttribute('aria-expanded','true');
}

function closeMobileMenu(){
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  overlay.classList.remove('show');
  hamburger.setAttribute('aria-expanded','false');
}

hamburger.addEventListener('click', () => {
  mobileMenu.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
});

overlay.addEventListener('click', closeMobileMenu);

document.querySelectorAll('[data-nav]').forEach(link => {
  link.addEventListener('click', (e) => {
    if (articleView.classList.contains('active')) closeArticle();
    closeMobileMenu();
  });
});

document.querySelectorAll('[data-footer-category]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    if (articleView.classList.contains('active')) closeArticle();

    currentCategory = link.dataset.footerCategory;
    currentTag = null;
    visibleCount = PAGE_SIZE;

    renderCategoryRow();
    renderActiveTagRow();
    renderArticles();

    document.getElementById('articles').scrollIntoView({
      behavior:'smooth'
    });
  });
});

document.getElementById('ctaExplore').addEventListener('click', () => {
  document.getElementById('articles').scrollIntoView({
    behavior:'smooth'
  });
});

document.getElementById('ctaLatest').addEventListener('click', () => {
  document.getElementById('articles').scrollIntoView({
    behavior:'smooth'
  });
});

/* ============================================================
   CONTACT FORM
============================================================ */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const message = document.getElementById('cMessage').value.trim();

  const nameError = document.getElementById('cNameError');
  const emailError = document.getElementById('cEmailError');
  const messageError = document.getElementById('cMessageError');
  const success = document.getElementById('formSuccess');

  let valid = true;

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  success.classList.remove('show');

  if (!name) {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  }

  if (!message || message.length < 5) {
    messageError.textContent = 'Please enter a message.';
    valid = false;
  }

  if (!valid) return;

  success.classList.add('show');
  e.target.reset();
});

/* ============================================================
   SCROLL REVEAL
============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

/* ============================================================
   INITIALIZE
============================================================ */
function init(){
  loadTheme();
  renderFeatured();
  renderCategoryRow();
  renderActiveTagRow();
  renderArticles();

  const hash = window.location.hash;

  if (hash.startsWith('#article/')) {
    const id = hash.replace('#article/', '');

    if (findArticle(id)) {
      openArticle(id);
    }
  }
}

init();

});