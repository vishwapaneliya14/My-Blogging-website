/* posts-data.js
   All blog content lives here in one place. index.html and post.html
   both read this array and render it with JavaScript, so adding a new
   post only means adding a new object below — no HTML editing needed. */

const POSTS = [
  {
    id: "morning-chai",
    category: "Mornings",
    icon: "sun",
    title: "6 AM Alarms, Cold Water, and the First Cup of Chai",
    date: "2026-08-14",
    readTime: "4 min read",
    excerpt:
      "The PPSU campus is nearly silent at six in the morning. By the time the first lecture bell rings, most of that silence is already gone.",
    body: [
      "My alarm is set for 6:00 AM, and it has failed exactly once this semester — the morning the Diwali break was announced, when almost nobody in the hostel woke up before nine. Every other day it goes off right on time, and I still resent it a little.",
      "Hostel Block C empties out in stages. First the joggers, then the people racing for a shower before the water heater runs out, then everyone else. I fall into the third group most days. By 6:45 I'm in the mess line for chai, standing next to at least three people revising for a quiz they forgot about until last night.",
      "The walk from the hostel to the main academic block at P P Savani University takes about ten minutes if you don't stop, and about twenty-five if you run into your batchmates near the fountain circle. I have never once made the ten-minute version.",
      "First lecture is at 8:30. Somewhere between the chai and the lecture hall, the campus properly wakes up — the shuttle starts running, the canteen shutters go up, and the quiet from six in the morning is completely gone. It's the same routine most days, and I still don't mind it."
    ]
  },
  {
    id: "labs-and-lectures",
    category: "Academics",
    icon: "book",
    title: "Between Lectures and Labs: A Day in the Engineering Block",
    date: "2026-08-06",
    readTime: "5 min read",
    excerpt:
      "Three lectures, one lab, and a group project meeting all squeezed into a lunch break that never happens at lunchtime.",
    body: [
      "Tuesdays are the heaviest day on my timetable — Data Structures at 8:30, Digital Electronics at 10:15, a two-hour lab right after, and a Communication Skills lecture that somehow always feels shorter than it is.",
      "The lab block is where the real conversations happen. Somewhere between compiling errors and waiting for a friend to free up a terminal, you end up talking about everything except the lab manual. Our lab assistant has given up trying to keep us quiet and now just walks around checking output instead.",
      "Lunch, officially, is 1:00 to 1:45. Practically, it's whatever fifteen minutes we can find between the lab ending late and the next class starting on time. Most of engineering runs on this kind of borrowed time.",
      "Evenings are for the group project nobody started early enough. We meet in the library's discussion room, split tasks that inevitably land back on two people, and leave having done less than planned but somehow feeling better about the deadline anyway."
    ]
  },
  {
    id: "canteen-chronicles",
    category: "Campus Life",
    icon: "cup",
    title: "Canteen Talk: Where Friendships (and Maggi) Get Made",
    date: "2026-07-29",
    readTime: "3 min read",
    excerpt:
      "No club meeting, fest decision, or bad-day recovery plan at PPSU happens without a plate of cheese Maggi somewhere nearby.",
    body: [
      "The canteen at P P Savani University runs on an unofficial seating chart nobody wrote down but everyone follows. The table near the window belongs to the photography club. The one by the counter belongs to whoever got there first — usually the cricket team, straight from morning practice.",
      "Cheese Maggi is the unofficial currency of every group decision here. Planning the fest stall, recovering from a bad quiz result, deciding who's driving home for the weekend — it all happens over a shared plate that's gone before the conversation is.",
      "The canteen aunty knows most of our orders by now, which is either impressive or a sign that we're far too predictable. Probably both.",
      "It's not a big space, and it's rarely quiet, but it's the one place on campus where the year, branch, or GPA someone has doesn't matter for the twenty minutes you're sitting there."
    ]
  },
  {
    id: "hostel-nights",
    category: "Hostel Life",
    icon: "moon",
    title: "Hostel Nights: Deadlines, Music, and Midnight Snacks",
    date: "2026-07-18",
    readTime: "4 min read",
    excerpt:
      "The hostel corridor gets loud around 11 PM for reasons that have nothing to do with sleep and everything to do with a 9 AM deadline.",
    body: [
      "There's a version of every hostel night that starts with good intentions — lights off by eleven, assignment finished well in advance. That version has happened to me maybe twice this semester.",
      "The more common version: someone remembers a submission at 9 AM, word spreads down the corridor, and within ten minutes four room doors are open and everyone is comparing how much of the assignment they've actually done. It's never much.",
      "Around midnight, someone always orders from the one food place still open near campus. The delivery guy knows our hostel gate better than some of us know our own timetable.",
      "By 1 AM the corridor is quiet again, most of the assignment is somehow done, and tomorrow's 8:30 lecture already feels like a mistake we all agreed to make together."
    ]
  },
  {
    id: "utsav-fest-season",
    category: "Events",
    icon: "drum",
    title: "Fest Season: Utsav and the Buzz of Campus Life",
    date: "2026-06-30",
    readTime: "4 min read",
    excerpt:
      "For one week every year, PPSU stops feeling like a place you attend and starts feeling like a place you actually belong to.",
    body: [
      "Fest week changes the entire rhythm of the university. Lecture halls empty out early, rehearsal noise takes over the amphitheatre, and every club suddenly has a stall to set up and a deadline of its own.",
      "I helped run the design team's stall this year, which mostly meant printing posters at 11 PM and pretending we'd planned the layout weeks in advance. We hadn't. Nobody's stall is ever fully ready, and somehow they all still look good on the day.",
      "The evening performances are what most people remember afterward — the open mic, the dance crews, the last-minute band that always plays louder than the sound system can handle. But it's the two weeks of preparation before it, full of shared stress and shared snacks, that actually build the friendships fest season gets credit for.",
      "By the time it's over, the campus is tired in a good way, and the WhatsApp group chats are full of photos nobody remembers taking."
    ]
  }
];
