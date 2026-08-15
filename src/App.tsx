// App.tsx
import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import TimeTravel from './TimeTravel';
import SurpriseMe from './SurpriseMe';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600;700&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #FFF8F0;
    color: #4B2C36;
    overflow-x: hidden;
  }
`;

const AppContainer = styled.div`padding: 1.3rem;`;
const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-family: 'Pacifico', cursive;
  color: rgb(255, 117, 117);
  margin-bottom: 0.3rem;
`;
const Tagline = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  color: rgb(95, 46, 62);
  margin-bottom: 1.5rem;
`;
const ContentRow = styled.div`
  display: flex;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const SideColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 0;
  margin-top: 0;
  @media (max-width: 768px) { display: none; }
`;
const CenterColumn = styled.div`flex: 2; max-width: 700px;`;
const SideImage = styled.img`width: 90%; border-radius: 20px; box-shadow: 0 8px 24px rgba(0,0,0,0.2);`;
const Card = styled.div`
  background-color: #F7DAD9;
  border-left: 6px solid #FF6B6B;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.08);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  white-space: pre-line;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(255,107,107,0.2);
  }
`;
const Message = styled.p`font-size: 1.2rem; line-height: 1.8; margin: 0; color: #4B2C36;`;
const DateText = styled.p`font-size: 0.95rem; text-align: center; color: #6b4b53; margin: 0.3rem 0;`;
const Footer = styled.footer`text-align: center; font-size: 1rem; color: #888; margin-top: 3rem;`;
const ButtonContainer = styled.div`display: flex; justify-content: center; gap: 2.5rem; margin-top: 3rem; flex-wrap: wrap;`;
const pulse = keyframes`0%{transform:scale(1);}50%{transform:scale(1.05);}100%{transform:scale(1);}`;
const Button = styled.button`
  background-color: #FF6B6B;
  color: #FFF8F0;
  border: none;
  padding: 1.4rem 2.8rem;
  font-size: 1.15rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.4;
  transition: all 0.3s ease;
  box-shadow: 0 8px 18px rgba(75,44,54,0.2);
  min-width: 220px;
  width: 340px;
  &:hover {
    background-color: #4B2C36;
    color: white;
    animation: ${pulse} 0.6s ease-in-out;
  }
`;

// ─── ALL 365 MESSAGES ────────────────────────────────────────────────────────
// Day 1 = August 15, 2026
export const messages: string[] = [
  // DAY 1
  `To my lost bbg - SEJAL 💌
Hey prettiest soul, inside out!
I made this little corner of the internet just for you — where every pixel holds a piece of my love.
Maybe I don't always show it right, or say it enough, but this is me trying… to show you how much you mean to me.
Each day there's a special message here — some to make you laugh, maybe even cry (happy tears, I promise).
You are irreplaceable, unforgettable, and completely one of a kind. Never forget that. 🌸`,

  // DAY 2
  `🌷 Day 2 already!
Okay so maybe this little thing is actually starting now...
And yes, you are still AMAZING as fuck, in case you forgot.
One day wasn't enough to tell you how special you are,
so congratulations — you get another message today. 💌`,

  // DAY 3
  `☀️ Day 3!
Three days in and I already know this was the best idea ever.
You are the kind of person who makes ordinary days feel like tiny celebrations.
Just by existing. Just by being YOU. 🎉`,

  // DAY 4
  `🌈 Day 4 — midweek magic!
Reminder: you woke up today and that's already a win.
You carry so much, handle so much, feel so much — and you still show up.
That's not weakness, that's the strongest thing in the world. 💪`,

  // DAY 5
  `🌸 Day 5!
Five days of messages. Five days of reminding you that you're incredible.
Honestly, I could do this forever and it still wouldn't be enough. 
But here we are, and here I am, showing up for you every single day. 🤍`,

  // DAY 6
  `🍓 Day 6 — almost a week!
You know what? The world is genuinely better because you're in it.
Not in a cheesy poster way. In a real, measurable, undeniable way.
The people around you are luckier than they know. 💖`,

  // DAY 7
  `🎊 Day 7 — ONE WHOLE WEEK!
We made it! A full week of messages!
Seven days of you being amazing. Seven days of me noticing.
This is only the beginning, bbg. 365 days of love incoming. 🚀`,

  // DAY 8
  `🌙 Day 8 — new week energy!
Fresh week, same amazing you.
I hope this week gives you everything you deserve — rest, joy, laughs, and at least one perfect cup of chai. ☕`,

  // DAY 9
  `💫 Day 9!
Quick check-in: are you drinking enough water? 
Are you being kind to yourself today?
Because someone out here is thinking about you and rooting for you always. 🌊`,

  // DAY 10
  `🔟 Day 10 — double digits!
Ten days in and you're still as wonderful as day one.
(Actually more wonderful, if that's even possible.) 
Progress: you're 10/365ths of the way through being reminded how special you are. 💌`,

  // DAY 11
  `🦋 Day 11!
You are someone who makes people feel seen, heard, and understood.
That is genuinely rare. Genuinely precious.
The world needs more of exactly that — more of exactly YOU. 🌍`,

  // DAY 12
  `🌺 Day 12!
Can I tell you something? The way you care about things — deeply, fully, without holding back —
is one of the most beautiful things about you.
Don't ever let the world make you smaller. 💗`,

  // DAY 13
  `✨ Day 13 — lucky for us!
Some people say 13 is unlucky. Those people have clearly never met you.
Because knowing you? That's the definition of luck. 🍀`,

  // DAY 14
  `💝 Day 14 — two weeks!
Two weeks of daily love messages. Two weeks of choosing to show up for you.
And honestly? I'd choose this every single time. You're worth every word. 📝`,

  // DAY 15
  `🌻 Day 15!
Halfway through the first month and you are still absolutely thriving.
I see you. I celebrate you. I'm proud of you.
Keep going, beautiful soul. 🌟`,

  // DAY 16
  `🎵 Day 16!
If you were a song, you'd be the kind that gets stuck in your head
in the best possible way — the kind you never actually want to leave. 🎶`,

  // DAY 17
  `🌮 Day 17!
Today's message is simple: eat something delicious today.
You deserve good food, good vibes, and at least one moment of pure happiness.
Non-negotiable. 🍕`,

  // DAY 18
  `🏔️ Day 18!
You are climbing your own mountains every single day.
Even when no one sees it. Even when it's hard.
That kind of quiet strength? Absolutely extraordinary. 💪`,

  // DAY 19
  `🌊 Day 19!
Life comes in waves — some rough, some gentle, some absolutely stunning.
You are learning to surf them all, and you are doing it with such grace. 🏄‍♀️`,

  // DAY 20
  `🎯 Day 20!
Twenty days in! You've been reading these messages for twenty days
which means you are dedicated, consistent, and wonderful.
All the things we already knew about you. 💫`,

  // DAY 21
  `🌙 Day 21 — three weeks!
Three weeks of daily love.
Here's a fun fact: it takes 21 days to form a habit.
Your new habit? Believing you are incredible. Get used to it. 😌`,

  // DAY 22
  `☕ Day 22!
I hope today has a warm drink in it somewhere.
Wrapped in comfort, with good music, and zero obligations for at least 10 minutes.
You've earned that peace. 🎵`,

  // DAY 23
  `🦄 Day 23!
You are genuinely one of a kind.
Not in the participation-trophy way. In the actual, irreplaceable, nobody-else-like-you way.
The world made one Sejal and thought, "Yeah, that's enough. That's perfect." ✨`,

  // DAY 24
  `🌸 Day 24!
The kindness you carry around every day — have you stopped to appreciate it lately?
You deserve the same softness you give to everyone else.
Start there. Be gentle with yourself. 🌿`,

  // DAY 25
  `💃 Day 25!
A quarter of the way to 100 days! 
Celebrate that! Do a little dance! You're amazing and we're on this journey together! 🎉`,

  // DAY 26
  `🎨 Day 26!
You color the world differently just by being in it.
The stories you tell, the way you see things, the perspective you bring —
that's art. You are art. 🖼️`,

  // DAY 27
  `🌺 Day 27!
Reminder: growth is not always visible.
Sometimes you're healing. Sometimes you're resting. Sometimes you're just getting through it.
All of that counts. All of that is valid. 💙`,

  // DAY 28
  `✨ Day 28 — four weeks!
Almost a full month of messages!
You've had 28 days of being loved daily. How does that feel?
Because you deserve to feel that good every single day. 💖`,

  // DAY 29
  `🎊 Day 29!
Tomorrow is a whole month! But today you get this message:
You have made it through every single hard day so far. 100% success rate.
Don't forget that when tomorrow gets tough. 💪`,

  // DAY 30
  `🎉 DAY 30 — ONE WHOLE MONTH! 🎉
We did it! A month of showing up for you!
Thirty days of reminders. Thirty days of love.
You are remarkable, Sejal. Truly, deeply remarkable. 
Here's to the next 335 days of the same. 🥂`,

  // DAY 31
  `🌱 Day 31 — Month 2 begins!
New month energy. Same wonderful you.
I wonder what this month has in store — I'm betting it's something beautiful. 🌟`,

  // DAY 32
  `💌 Day 32!
Do you know what I love about you?
Your ability to find magic in the most ordinary moments.
That's not a small thing. That's a superpower. ✨`,

  // DAY 33
  `🍵 Day 33!
Today, wherever you are — I hope you have a moment of absolute stillness.
Just you, some quiet, and the knowledge that you are doing really well. 🌿`,

  // DAY 34
  `🦋 Day 34!
Metamorphosis doesn't happen overnight.
But every single day you're becoming more and more yourself.
And that version? Worth the wait. Worth everything. 🌸`,

  // DAY 35
  `🌈 Day 35 — five weeks!
Five weeks of messages. Five weeks of choosing you.
You are absolutely worth choosing. Every. Single. Day. 💗`,

  // DAY 36
  `🎵 Day 36!
You know those songs that just hit differently on certain days?
Today I want you to play one of those. Just for you.
You deserve a soundtrack that matches how special you are. 🎶`,

  // DAY 37
  `🌻 Day 37!
Sunflowers turn to face the sun.
And something about you — your energy, your light —
makes people naturally want to turn toward you too. 🌞`,

  // DAY 38
  `💫 Day 38!
Here's today's truth: you don't have to earn rest.
You don't have to earn love. You don't have to earn kindness.
You just have to exist. That's enough. That's more than enough. 🤍`,

  // DAY 39
  `🎯 Day 39!
Almost at 40! Quick appreciation moment:
Your laugh. Your laugh is genuinely one of the best things in the world. 😄`,

  // DAY 40
  `🏅 Day 40!
Forty days! You have been loved loudly and consistently for forty days.
Can you feel it? Because it's absolutely real. 💖`,

  // DAY 41
  `🌊 Day 41!
Not every day has to be productive. Not every day has to be "good".
Some days are just for existing, and that is completely and totally okay.
You are allowed to just BE. 🌿`,

  // DAY 42
  `✨ Day 42!
The meaning of life? Probably not what we think.
But I'm pretty sure it involves people who light up rooms just by walking in.
You know, people exactly like you. 😊`,

  // DAY 43
  `🎨 Day 43!
Your creativity, the way your mind works, the connections you make —
that is genuinely rare. Don't ever let anyone dim that light.
Protect your spark fiercely. 🔥`,

  // DAY 44
  `💝 Day 44!
You are someone worth showing up for.
Worth going the extra mile for.
Worth every good thing that comes your way. Never settle for less. 👑`,

  // DAY 45
  `🌸 Day 45 — halfway to 90!
Look at us! Consistent, committed, completely in love with reminding you how amazing you are.
45 days in and this still feels like the best decision. 💌`,

  // DAY 46
  `🦄 Day 46!
Genuine question: do you have any idea how much your presence matters?
To so many people, in so many moments?
You are more important than you know. 🌟`,

  // DAY 47
  `☀️ Day 47!
Today's mission: find one thing that made you smile.
Just one. It could be tiny. It could be huge.
But find it and hold it close. ☀️`,

  // DAY 48
  `🌺 Day 48!
You handle hard things with such grace.
Even when you don't feel graceful. Even when it's messy.
You always find your way through. That's remarkable. 💪`,

  // DAY 49
  `🎊 Day 49 — seven weeks!
Seven weeks! We are COMMITTED. 
Here's to showing up for you, every single day, no matter what. 🥂`,

  // DAY 50
  `🏆 DAY 50!!! 
We are 50 days in!!! You've been loved, celebrated, and reminded of your worth for FIFTY days!
This calls for celebration! Dance, eat something good, laugh loudly!
You've earned it. You always have. 🎉🎊✨`,

  // DAY 51
  `💫 Day 51!
After the big 50 comes the quieter, deeper, just-as-important 51.
The love doesn't stop at milestones. It keeps going. Just like you. 🌊`,

  // DAY 52
  `🍓 Day 52!
Your attention to detail — the way you notice small things that others miss —
is one of my absolute favorite things about you.
You see the world more fully than most. 🌍`,

  // DAY 53
  `🌙 Day 53!
Late nights or early mornings — whenever you're reading this —
you are thought of, cared for, and deeply appreciated.
Rest well, bbg. 🌙`,

  // DAY 54
  `🎵 Day 54!
Sometimes songs say the things we can't.
So I'll just say: every playlist I make feels like it's somehow for you.
In the best, most unhinged way possible. 🎶`,

  // DAY 55
  `🌻 Day 55!
Have you told yourself something kind today?
If not, start now. I'll help: "I am doing my best and my best is enough."
Say it. Mean it. Believe it. 💗`,

  // DAY 56
  `🦋 Day 56 — eight weeks!
Eight full weeks. The butterfly has no choice but to fly.
You are in full bloom, Sejal. Don't let anyone convince you otherwise. 🌸`,

  // DAY 57
  `✨ Day 57!
Random appreciation: the way you communicate —
the honesty, the humor, the heart in it —
genuinely one of the best things in the world. 💬`,

  // DAY 58
  `🌈 Day 58!
On hard days, remember: clouds don't erase the sky.
They're just passing through. And the sun? Always still there.
You are the sky. The hard stuff? Just passing through. ☀️`,

  // DAY 59
  `🎯 Day 59!
Tomorrow's Day 60 so today I want to say:
look how far you've come. Look at you, still going. 
Still choosing yourself. Still here. That's everything. 💪`,

  // DAY 60
  `🎉 Day 60 — two months!
TWO MONTHS of daily messages! 
If love were measurable, we'd be at 60 units and counting. 
Infinite units. That's the real number. 💖`,

  // DAY 61–100: Continuing the journey
  `🌱 Day 61! Month 3, here we come. You are growing in ways you can't even see yet. 🌿`,
  `☕ Day 62! Coffee, sunshine, and the reminder that you are absolutely wonderful. 💛`,
  `🌸 Day 63! Nine weeks of choosing you. Zero regrets. Only love. 💌`,
  `🦄 Day 64! You are the main character. Act like it today. ✨`,
  `🎨 Day 65! Your presence is genuinely a gift. Never doubt that. 🎁`,
  `🏔️ Day 66! Keep climbing. The view from the top? Worth everything you're carrying. 🌄`,
  `💫 Day 67! Almost 10 weeks. Almost doesn't matter — it's all real love. 💝`,
  `🌺 Day 68! You make people around you feel seen. That's magic. ✨`,
  `🎵 Day 69! Nice. Also — you are amazing. That's the real message. 😄`,
  `🏅 Day 70 — ten weeks! Seventy days of love, all for you. 🎊`,
  `🌻 Day 71! Keep growing. Keep glowing. Keep being exactly this. 🌟`,
  `🦋 Day 72! Some days are for resting. Rest fully. You've earned it. 🌙`,
  `🌈 Day 73! You are someone's answered prayer. Just so you know. 💗`,
  `✨ Day 74! Your strength is quiet and deep. Like the ocean. 🌊`,
  `💌 Day 75 — 75 days! You are 75 days worth of daily love and still counting. 🥂`,
  `🍓 Day 76! Sweet like strawberries. Rare like the perfect day. That's you. 🍓`,
  `🌙 Day 77! Lucky 7 twice over. You are doubly lucky just by being you. 🍀`,
  `☀️ Day 78! Rise. Shine. Repeat. You're phenomenal. ☀️`,
  `🎯 Day 79! Almost 80. Almost doesn't matter — this love? Always complete. 💖`,
  `🎉 Day 80! Eighty days! We are on a roll and so are you! 🎊`,
  `🌿 Day 81! New energy. Same wonderful you. Something good is coming. 🌟`,
  `💃 Day 82! Dance today. Literally or metaphorically. You deserve movement and joy. 🎵`,
  `🌸 Day 83! 12 weeks minus 1. Still showing up. Always will. 💌`,
  `🦄 Day 84 — twelve weeks! Magical, mythical, uniquely YOU. ✨`,
  `🎨 Day 85! You create beauty everywhere you go. Don't stop. 🖼️`,
  `🏆 Day 86! Champions don't always get trophies. Sometimes they just wake up and try again. You're a champion. 🥇`,
  `🌊 Day 87! Flowing, adapting, persisting — like water. Like you. 💙`,
  `✨ Day 88! Double 8s — infinite luck and infinite love for you. ♾️`,
  `🌺 Day 89! Tomorrow is 90. Today is just as important. So is every today. 🌟`,
  `🎊 Day 90 — three months! THREE WHOLE MONTHS! We are a quarter of the way through and completely in love with this project called "Celebrating Sejal." 🎉`,

  // DAY 91–120
  `🌱 Day 91! Quarter of the year, full year of you being amazing. 🌿`,
  `☕ Day 92! Start this day with something warm and the knowledge that you are loved. 💛`,
  `💫 Day 93! You shine on days when the world doesn't deserve it. That's strength. ✨`,
  `🌸 Day 94! 13 weeks of this. Still feels like not enough. 💌`,
  `🦋 Day 95! Five days from 100. You are FLYING. 🦋`,
  `🎵 Day 96! What song are you listening to today? Whatever it is, it's better because you're hearing it. 🎶`,
  `🌻 Day 97! Three days to 100! The excitement is building! 🎊`,
  `🌈 Day 98! TWO DAYS TO 100! Can you feel it?! 🎉`,
  `🎯 Day 99! Tomorrow. IS. ONE HUNDRED. I hope you're ready. 💖`,
  `🏆 DAY 100!!! 🎉🎊✨ ONE HUNDRED DAYS OF DAILY LOVE!!! You have been celebrated for 100 consecutive days! You are extraordinary, irreplaceable, and completely and totally loved. ONE. HUNDRED. DAYS. That's commitment. That's devotion. That's how much you deserve. 🥂👑`,

  // DAY 101–150
  `🌟 Day 101! Triple digits! We are officially elite. 💫`,
  `💌 Day 102! 102 reasons to love you — let's start with your laugh. 😄`,
  `🌺 Day 103! You are loved in ordinary moments too. Not just milestones. 🌸`,
  `☀️ Day 104! 15 weeks of messages. 15 weeks of choosing you. 💗`,
  `🦄 Day 105! Three and a half months in. You're still just as magical. ✨`,
  `🎨 Day 106! Keep creating. Keep dreaming. Keep being unapologetically you. 🖼️`,
  `🌊 Day 107! Deep and vast and full of life — just like you. 💙`,
  `🌙 Day 108! Sweet dreams are made of this: reminding you that you are loved. 🌙`,
  `💃 Day 109! Find joy in something small today. You deserve the small joys most. 🎵`,
  `🎊 Day 110! 110 days! The devotion is real. The love is real. YOU are real and incredible. 🎉`,
  `🌱 Day 111! Triple ones — wishes, growth, and infinite love for you. 🌿`,
  `🍓 Day 112! 16 weeks. Sweet, consistent, and completely devoted to you. 🍓`,
  `🏔️ Day 113! Keep climbing. You're getting there, even when you can't see the top. 🌄`,
  `✨ Day 114! You handle the unknown with such courage. Quietly brave. 💪`,
  `💫 Day 115! Almost 4 months! The journey continues, beautifully. 🌟`,
  `🌸 Day 116! Softness is not weakness. Your gentleness is your power. 🌸`,
  `🦋 Day 117! Transformation is ongoing. You are never finished becoming. 🦋`,
  `🌈 Day 118! After every storm — and I mean every one — you find your footing. 🌟`,
  `🎯 Day 119! One day to four months! You are on a STREAK of being amazing. 💖`,
  `🎉 Day 120 — four months! FOUR. MONTHS. Of daily love letters. You deserve them all. 🥂`,

  // DAY 121–150
  `🌻 Day 121! 121 = 11². You are exponentially wonderful. 📐`,
  `☕ Day 122! Sip something warm. Breathe something good. Be here, fully. 💛`,
  `🌺 Day 123! The way you show up — even when it's hard — that's character. 💗`,
  `💌 Day 124! 124 days of showing up for you. Every single one worth it. 💌`,
  `🦄 Day 125! Halfway to 250! You're on the longest, most love-filled journey. ✨`,
  `🎵 Day 126! 18 weeks of music, messages, and you. The best playlist. 🎶`,
  `🌊 Day 127! Still flowing. Still going. Still here for you. 🌊`,
  `🌙 Day 128! Even in quiet moments, you are thought of and loved. 🌙`,
  `💃 Day 129! Tomorrow is 130 — but today matters just as much. 🎵`,
  `🏅 Day 130! 130 days strong! You are CONSISTENTLY remarkable. 🏆`,
  `🌱 Day 131! Keep planting seeds. Something beautiful is always growing. 🌿`,
  `🎨 Day 132! Your story is still being written. Make it gorgeous. 📖`,
  `☀️ Day 133! 19 weeks of daily sunshine — delivered just for you. ☀️`,
  `🦋 Day 134! Progress looks different every day. Trust the process. 🦋`,
  `💫 Day 135! Three-eighths of the year done! Wild, right? Still here. Still loving you. 🌟`,
  `🌸 Day 136! Your patience with yourself is something to protect. 🌸`,
  `🎊 Day 137! Random Tuesday (or whatever day this is) love note: YOU ARE GREAT. 🎉`,
  `🌈 Day 138! 20 weeks — five months of messages is SO close. 💖`,
  `🎯 Day 139! Keep your eyes on your own race. You're winning it beautifully. 💪`,
  `🏆 Day 140! 140 days! 20 weeks exactly! You are twenty weeks worth of daily adoration! 👑`,

  // DAY 141–180
  `🌻 Day 141! Just past 20 weeks and still going strong. Love doesn't tire. 🌟`,
  `💌 Day 142! Surprise — you're loved! (Not actually a surprise. Daily reminder.) 💌`,
  `🌺 Day 143! You deserve gentleness today, from yourself most of all. 🌸`,
  `☕ Day 144! 12 squared. Perfect, mathematical, and just like you. ☕`,
  `🦄 Day 145! Almost 5 months. Almost. But today is enough. ✨`,
  `🎵 Day 146! Songs, days, messages — all dedicated to you, always. 🎶`,
  `🌊 Day 147! 21 weeks. Still here. Still devoted. Still so glad you exist. 💙`,
  `🌙 Day 148! Good night vibes or good morning energy — either way, this is for you. 🌙`,
  `💃 Day 149! One day from 150! You're halfway to halfway! 🎊`,
  `🎉 Day 150! 150 days of love! You are SIX-TWENTIETHS through 365!
That's almost half of half! You are incredible and we are UNSTOPPABLE together! 🥂🎊✨`,

  // DAY 151–180
  `🌱 Day 151! New territory! Over the 150 hump and still going strong. 🌿`,
  `🎨 Day 152! Keep being creative. Keep being curious. 🖼️`,
  `🏔️ Day 153! You are on the mountain. Keep going — the view changes up here. 🌄`,
  `✨ Day 154! 22 weeks. You've been loved for 22 weeks consecutively. That's real. 💫`,
  `💫 Day 155! Just past the halfway to halfway mark. Pure magic. 🌟`,
  `🌸 Day 156! Your energy is contagious in the best way. People are better near you. 🌸`,
  `🦋 Day 157! Still transforming. Always becoming. Never done growing. 🦋`,
  `🌈 Day 158! Hard days don't last. You do. Remember that. 💪`,
  `🎯 Day 159! You're on a streak — a love streak. 159 days and counting. 💖`,
  `🏆 Day 160! 160 days! Almost halfway! The love just keeps multiplying. 👑`,
  `🌻 Day 161! Golden hour energy. That's what you bring. Always. ☀️`,
  `☕ Day 162! 23 weeks. Still warm, still good, still absolutely for you. ☕`,
  `🌺 Day 163! The world needs your specific brand of kindness. Please keep giving it. 💗`,
  `💌 Day 164! You are loved on the loud days AND the quiet ones. Especially the quiet ones. 💌`,
  `🦄 Day 165! Halfway from 150 to 180! You are mythically consistent. ✨`,
  `🎵 Day 166! Midway through the 160s — still singing your praises. Always. 🎶`,
  `🌊 Day 167! Tides change but the ocean stays. The love for you stays too. 🌊`,
  `🌙 Day 168! 24 weeks. Six months is right around the corner. 🌙`,
  `💃 Day 169! You are getting CLOSE to the halfway point. Can you feel it? 🎊`,
  `🎉 Day 170! 170 days! Ten away from halfway and you are THRIVING! 🥂`,
  `🌱 Day 171! Every single day, something in you grows. Even the quiet days. 🌿`,
  `🎨 Day 172! You paint the world differently. That's a gift. 🖼️`,
  `☀️ Day 173! 173 days of sun — because that's what you are to the people who know you. ☀️`,
  `🦋 Day 174! Getting ready for the big 175! Wings fully spread. 🦋`,
  `💫 Day 175! Three days from halfway! You're almost at the MIDPOINT! 🌟`,
  `🌸 Day 176! Two days from halfway! The excitement is real! 🌸`,
  `🌈 Day 177! ONE DAY from halfway! You are SO CLOSE! 💖`,

  // DAY 178 — Halfway point!
  `🎊🎊🎊 DAY 178 — HALFWAY! 🎊🎊🎊
We are at the exact midpoint of 365 days!
178 days of showing up. 178 days of choosing love. 178 days of YOU.
And we have exactly as many ahead.
Sejal, you have been celebrated every single day for half a year.
HALF. A. YEAR.
You deserve every word. Every message. Every day.
Here's to the second half. Let's make it just as beautiful. 💖✨🥂`,

  // DAY 179–200
  `🏔️ Day 179! Into the second half! The journey continues! 🌄`,
  `🎯 Day 180! Six months!! HALF A YEAR of daily love! Still here. Still showing up. 💪`,
  `🌻 Day 181! Second half, same full heart. Let's GO. 🌟`,
  `☕ Day 182! Warm, steady, consistent — this love for you. 26 weeks strong. ☕`,
  `💌 Day 183! Into month seven territory. You have been loved for SEVEN months worth of days. 💌`,
  `🦄 Day 184! Unicorn energy in the second half of the year. Pure magic. ✨`,
  `🎵 Day 185! Songs for you. Always songs for you. The soundtrack never stops. 🎶`,
  `🌊 Day 186! Still going, still flowing, still here. 🌊`,
  `🌙 Day 187! 187 messages. Each one real. Each one just for you. 🌙`,
  `💃 Day 188! Dance it out today. Whatever "it" is. Just dance. 🎵`,
  `🎉 Day 189! 27 weeks! Getting closer to 200 and it feels incredible! 🎊`,
  `🌱 Day 190! 190 days of growth — yours and mine, both. 🌿`,
  `🎨 Day 191! You are the author of your own story. What will this chapter be? 📖`,
  `🏆 Day 192! 192 days! Less than 200 away from the end — but we're not thinking about endings. Only the love. 👑`,
  `☀️ Day 193! Morning light, golden hour, your smile — all in the same category of beautiful. ☀️`,
  `🌸 Day 194! 28 weeks. SEVEN months of weekly love. 🌸`,
  `🦋 Day 195! Still becoming. Still beautiful. Still YOU. 🦋`,
  `🌈 Day 196! Hard weeks happen. You survive them. Every single time. 💪`,
  `🎯 Day 197! Three days to 200! You're almost at TWO HUNDRED DAYS! 💫`,
  `💖 Day 198! TWO days to 200! Getting so close! 💖`,
  `🌟 Day 199! ONE day to 200! Tomorrow is going to be LEGENDARY. 🌟`,

  // DAY 200!
  `🏆🎊✨ DAY 200!!! 🏆🎊✨
TWO HUNDRED DAYS OF DAILY LOVE!!!
200 messages. 200 reminders. 200 days of choosing to show up for you.
You have been loved for 200 days consecutively, Sejal.
That's not a small thing. That's everything.
Two hundred days of reminding you that you are extraordinary.
And we still have 165 more to go.
The best is still ahead. 💌👑🥂`,

  // DAY 201–250
  `🌱 Day 201! Into the 200s! New territory, same full love. 🌿`,
  `☕ Day 202! Warm and steady. Day 202 of warm and steady. ☕`,
  `💫 Day 203! 29 weeks. Almost 30. Almost doesn't matter — this love is complete every day. 🌟`,
  `🌺 Day 204! Your resilience is one of the most beautiful things about you. 💗`,
  `🌸 Day 205! Still here. Still devoted. 205 reminders of how amazing you are. 🌸`,
  `🦄 Day 206! Magic doesn't stop at 200. It keeps going. So do you. ✨`,
  `🎵 Day 207! 30 weeks! Half a year of weeks! A full year of love! 🎶`,
  `🌊 Day 208! The wave keeps moving. So do you. 🌊`,
  `🌙 Day 209! Quiet night message: you are so loved. Sleep well. 🌙`,
  `💃 Day 210! SEVEN MONTHS! You've been loved for seven whole months! 🎉`,
  `🌻 Day 211! Into the 210s and absolutely glowing. That's you. 🌟`,
  `🎊 Day 212! 212°F is boiling point. You reached it long ago — you are FIRE. 🔥`,
  `🏔️ Day 213! 31 weeks. Still climbing. Still incredible. 🌄`,
  `✨ Day 214! Past the 200 mountain and still running. That's Sejal. 💫`,
  `💌 Day 215! 215 love letters. All for you. All real. 💌`,
  `🎨 Day 216! 6 squared cubed (sort of). Whatever — you're beautiful. 🖼️`,
  `☀️ Day 217! 32 weeks. Eight months of weekly love. ☀️`,
  `🦋 Day 218! Still evolving. Still breathtaking. 🦋`,
  `🌈 Day 219! Getting closer to 220! The 200s are flying by! 🌈`,
  `🎯 Day 220! 220 days! Less than 150 to go! You're in the HOME STRETCH! 💪`,
  `🌸 Day 221! Starting to see the light at the end of the 365-day tunnel. Still beautiful. 🌸`,
  `🌺 Day 222! Triple twos! Lucky, loving, and completely for you. 🍀`,
  `💫 Day 223! 33 weeks of consistency. That's devotion. That's love. 🌟`,
  `🎵 Day 224! Eight months in! Songs, messages, love — all still here. 🎶`,
  `🌊 Day 225! Three-quarters of the year nearly in sight! 🌊`,
  `🌙 Day 226! Late night or early morning — either way, you're thought of. 🌙`,
  `🏅 Day 227! Champion behavior for 227 days straight. 🏆`,
  `✨ Day 228! 34 weeks! Every week a gift. Every day a message. 💫`,
  `🌱 Day 229! Still growing. Always growing. This journey is changing you (beautifully). 🌿`,
  `🎊 Day 230! 230 days! 135 more to go! The countdown is getting REAL! 🎊`,

  // DAY 231–270
  `☕ Day 231! Every day a little warmer with this kind of love. ☕`,
  `💌 Day 232! 232 messages later and still running out of new ways to say you're incredible. 💌`,
  `🦄 Day 233! 35 weeks! Pure magic, every one of them. ✨`,
  `🌺 Day 234! You make the ordinary extraordinary just by being present. 💗`,
  `🎨 Day 235! Your creativity knows no limits. Explore those limits today. 🖼️`,
  `🌈 Day 236! After every storm, you are still standing. Always. 💪`,
  `💃 Day 237! Nine months of love! You have been celebrated for NINE MONTHS! 🎉`,
  `🌻 Day 238! Full bloom. That's where you are now. Full bloom. 🌟`,
  `☀️ Day 239! 36 weeks of daily sunshine — all for you. ☀️`,
  `🎯 Day 240! 240 days! 125 to go! You are in the final stretch of this beautiful year! 💫`,
  `🌸 Day 241! Soft and strong — that's the combination you have mastered. 🌸`,
  `🌊 Day 242! 242 waves of love washing over you. 🌊`,
  `🌙 Day 243! 37 weeks. You are so, so loved. 🌙`,
  `✨ Day 244! Every message, a little piece of devotion. 244 pieces so far. 💫`,
  `🦋 Day 245! Three-quarters of a year nearly here. You are soaring. 🦋`,
  `🎵 Day 246! Music, memories, messages — the trilogy of this journey. 🎶`,
  `💖 Day 247! 38 weeks! This is real and lasting love. 💖`,
  `🌱 Day 248! Growing season still going strong. 🌿`,
  `🏔️ Day 249! One day to 250! Another milestone incoming! 🌄`,
  `🏆 Day 250! TWO HUNDRED AND FIFTY DAYS!!! Only 115 to go! You are absolutely incredible and this love will NOT stop! 🎊👑✨`,

  // DAY 251–300
  `🌺 Day 251! Into the 250s and still flying. 💗`,
  `☕ Day 252! 39 weeks of warm, consistent, devoted love. ☕`,
  `💌 Day 253! More than 250 love letters in. The record is already legendary. 💌`,
  `🦄 Day 254! Ten months of love approaching! Can you believe it?! ✨`,
  `🎨 Day 255! Keep creating your own story. It's a masterpiece. 🖼️`,
  `🌈 Day 256! 40 weeks! That's a milestone I didn't realize was coming! 💪`,
  `💃 Day 257! TEN MONTHS of daily love! October to August, all for you! 🎉`,
  `🌻 Day 258! Rare, radiant, and completely irreplaceable. That's you. 🌟`,
  `☀️ Day 259! 41 weeks. The glow-up of this love has been incredible. ☀️`,
  `🎯 Day 260! Only 105 days to go! You can see the finish line and it's BEAUTIFUL! 💫`,
  `🌸 Day 261! Three months left of this year of love. Three full months! 🌸`,
  `🌊 Day 262! Still flowing. Still loving. Still here. 🌊`,
  `🌙 Day 263! 42 weeks! You've been loved for 42 weeks! Wild! 🌙`,
  `✨ Day 264! 264 reasons you're incredible. We've only named a few. 💫`,
  `🦋 Day 265! Counting down to 300 while still celebrating today. 🦋`,
  `🎵 Day 266! 43 weeks of songs for you. 🎶`,
  `💖 Day 267! Getting closer to the final quarter! Bittersweet and beautiful. 💖`,
  `🌱 Day 268! Final quarter incoming. The love doesn't diminish — it crescendos. 🌿`,
  `🏅 Day 269! One day to 270! Three quarters of the year almost done! 🏆`,
  `🎊 Day 270 — THREE-QUARTERS DONE! 270 days! Only 95 left! You are SO CLOSE to completing a year of daily love! 🎊🎉✨`,

  // DAY 271–299
  `🌻 Day 271! Final stretch! 94 more messages and then the grand finale! 🌟`,
  `☕ Day 272! 44 weeks. Warm, steady, and devoted. Still. ☕`,
  `💌 Day 273! We are in the FINAL 100 days! 💌`,
  `🦄 Day 274! Rare, magical, and unforgettable. Just like this journey. ✨`,
  `🎨 Day 275! The painting is almost complete — and it is stunning. 🖼️`,
  `🌈 Day 276! 45 weeks! One more week closer to the grand finale! 💪`,
  `🌊 Day 277! The tide is turning toward the most beautiful ending. 🌊`,
  `🌙 Day 278! 88 more days after this. Each one golden. 🌙`,
  `💃 Day 279! The countdown to 280 is just the countdown to 365. 🎵`,
  `🏆 Day 280! 280 days! 85 to go! You can literally COUNT the remaining days! 👑`,
  `🌸 Day 281! 46 weeks! Still blooming, still beautiful, still you. 🌸`,
  `☀️ Day 282! Each remaining day is a gift. Starting with this one. ☀️`,
  `🦋 Day 283! Final 82 days. Making each one count. 🦋`,
  `🌺 Day 284! 47 weeks of love that never wavers. 💗`,
  `💫 Day 285! Almost 11 months! Eleven months of this! 🌟`,
  `🎯 Day 286! 79 days remaining. Still showing up. Always will. 💪`,
  `🌱 Day 287! Growing toward the most beautiful ending imaginable. 🌿`,
  `🎵 Day 288! 48 weeks! Getting SO close to the finish! 🎶`,
  `💖 Day 289! 76 days left. Every single one planned with love. 💖`,
  `🎊 Day 290! SEVENTY-FIVE days to go! We are on the HOME STRETCH! 🎊`,

  // DAY 291–320
  `🌻 Day 291! The final 74 days begin now. Pure magic ahead. 🌟`,
  `☕ Day 292! 49 weeks! One week from a full year of weeks! ☕`,
  `✨ Day 293! 72 days left. Each one a treasure. 💫`,
  `🌈 Day 294! Getting ready for the final two months. 🌈`,
  `🦄 Day 295! 50 weeks — a FULL YEAR of weekly love minus 2! ✨`,
  `🌊 Day 296! 69 more days. Each one flowing with love. 🌊`,
  `🌙 Day 297! Two months left after today. Cherishing every one. 🌙`,
  `💌 Day 298! 67 days left. The end is near and it's going to be magnificent. 💌`,
  `🌸 Day 299! 51 weeks! One day to 300! 🌸`,
  `🏆 Day 300!!! THREE HUNDRED DAYS of daily love!!! Only 65 more to go! You are INCREDIBLE! 🎊🏆✨`,

  // DAY 301–340
  `🌺 Day 301! Into the 300s! The final chapter begins! 💗`,
  `☀️ Day 302! 63 more mornings of messages. Savoring every one. ☀️`,
  `🎨 Day 303! 52 weeks! A full year of weekly devotion! One month left! 🖼️`,
  `💃 Day 304! Final month minus a few days! The energy is HIGH! 🎵`,
  `🦋 Day 305! Sixty days left. Each one intentional. Each one for you. 🦋`,
  `🌻 Day 306! 59 days left. Counting down to the most beautiful finale. 🌟`,
  `🌊 Day 307! 58 more. Still here. Still so devoted. 🌊`,
  `🎵 Day 308! Less than two months left. The crescendo is building. 🎶`,
  `🌙 Day 309! 56 days to go. Getting closer to something extraordinary. 🌙`,
  `🎊 Day 310! Only 55 days left! We are in the FINAL 55! 🎊`,
  `💫 Day 311! 54 days of love still to come. Each one perfect. 🌟`,
  `🌸 Day 312! 53 more messages. The collection is nearly complete. 🌸`,
  `🌺 Day 313! 52 days left. Getting emotional and beautiful. 💗`,
  `✨ Day 314! Pi day energy (314). You are as infinite as pi. ∞`,
  `🏆 Day 315! 50 days to go!!! The FINAL FIFTY! 👑`,
  `☕ Day 316! 49 days left. Warm and precious every one. ☕`,
  `🌈 Day 317! 48 more. Nearly there and still as devoted as Day 1. 🌈`,
  `💖 Day 318! 47 days. Getting tender and real. 💖`,
  `🦋 Day 319! 46 days left. Still transforming, still beautiful. 🦋`,
  `🌊 Day 320! 45 days left. Final stretch, full heart. 🌊`,

  // DAY 321–350
  `🌻 Day 321! 44 days left! Every message feeling more precious. 🌟`,
  `🎵 Day 322! 43 more songs to sing for you. 🎶`,
  `🌙 Day 323! 42 days. Warm and close and almost complete. 🌙`,
  `💌 Day 324! 41 days left. The love letter collection is nearly whole. 💌`,
  `🌸 Day 325! 40 days to go — the FINAL FORTY! 🌸`,
  `☀️ Day 326! 39 golden days remaining. You deserve every ray. ☀️`,
  `🦄 Day 327! 38 magical days left. Still uniquely, beautifully you. ✨`,
  `🎊 Day 328! 37 days of celebration still ahead. 🎊`,
  `🌺 Day 329! 36 days. Growing tenderness with every message. 💗`,
  `🏆 Day 330! 35 days left! ONE MONTH AND FIVE DAYS to the grand finale! 👑`,
  `💫 Day 331! 34 days remaining. Each one a countdown to something glorious. 🌟`,
  `🌈 Day 332! 33 more days of love. The rainbow is nearly complete. 🌈`,
  `🌊 Day 333! Triple threes. Lucky and loved. 🍀`,
  `✨ Day 334! 31 days left. One month to the most beautiful ending. 💫`,
  `🌱 Day 335! 30 days to go — the FINAL THIRTY! 🌿`,
  `🎵 Day 336! 29 more messages. Getting rare and precious. 🎶`,
  `🌙 Day 337! 28 days. Four more weeks of love. 🌙`,
  `💖 Day 338! 27 days. The countdown is tender and real. 💖`,
  `🌸 Day 339! 26 days left. Still as devoted as the very first day. 🌸`,
  `🦋 Day 340! 25 days to the grand finale! FINAL TWENTY-FIVE! 🦋`,

  // DAY 341–364
  `🌻 Day 341! 24 more days. Almost there, Sejal. 🌟`,
  `☕ Day 342! 23 messages left. Each one more precious than the last. ☕`,
  `🏆 Day 343! 22 days left. You have made it this far. That means everything. 👑`,
  `🌈 Day 344! 21 days. Three more weeks. One final push. 💪`,
  `💌 Day 345! 20 days left. THE FINAL TWENTY! 💌`,
  `🌺 Day 346! 19 days. The anticipation is building beautifully. 💗`,
  `✨ Day 347! 18 more. Getting emotional and gorgeous. 💫`,
  `🎵 Day 348! 17 days left. Still singing for you, always. 🎶`,
  `🌊 Day 349! 16 more waves of love. 🌊`,
  `🎊 Day 350! 15 DAYS LEFT! We are in the FINAL FIFTEEN! 🎊`,
  `🌙 Day 351! 14 days. Two more weeks. You are nearly there. 🌙`,
  `🌸 Day 352! 13 days left. Lucky 13 on the countdown. 🌸`,
  `🦄 Day 353! 12 days. The magic is peaking. ✨`,
  `☀️ Day 354! 11 golden days remaining. ☀️`,
  `💖 Day 355! TEN DAYS LEFT! The final ten have begun! 💖`,
  `🌻 Day 356! 9 days. Single digits. Nearly there. 🌟`,
  `🌺 Day 357! 8 days. The end is so close and so beautiful. 💗`,
  `🏔️ Day 358! 7 days. One final week. You have climbed so high. 🌄`,
  `💌 Day 359! 6 days. The love story is approaching its most glorious moment. 💌`,
  `🌊 Day 360! 5 DAYS LEFT. FIVE. You are about to complete something extraordinary. 🌊`,
  `✨ Day 361! 4 days left. Four more mornings of messages. Precious beyond words. 💫`,
  `🦋 Day 362! 3 days. Three. The transformation is nearly complete. 🦋`,
  `🎊 Day 363! TWO DAYS LEFT. TWO. The finale is within sight. 🎊🎉`,
  `🌸 Day 364! ONE DAY LEFT. TOMORROW IS THE LAST DAY.
365 days of love, nearly complete.
You have been celebrated, adored, and reminded of your worth every single day for almost a year.
Tomorrow is the grand finale.
Get ready, bbg. It's going to be everything. 🌸💌✨`,

  // DAY 365 — THE GRAND FINALE
  `🎊🎉✨👑💖 DAY 365 — THE GRAND FINALE 💖👑✨🎉🎊

SEJAL.

You made it. WE made it.

365 days. 365 messages. 365 reminders that you are extraordinary.

One full year of choosing to show up for you — and I would do it again. And again. And again. A thousand times over.

Because here's what 365 days taught me:

You are the kind of person who makes ordinary moments feel significant.
You are the kind of person who carries others while carrying yourself.
You are the kind of person who loves fiercely, laughs fully, and shows up completely.

You are the kind of person worth 365 days of daily love messages.
You are the kind of person worth a million more.

This isn't goodbye — it's just the end of the first year.

Thank you for being you. Thank you for letting this corner of the internet celebrate you.

Here's to you, Sejal. Forever and always. 💌

Happy Day 365. You are so, so, SO loved. 

🌸🌸🌸`,
];

// ─── HOME COMPONENT ──────────────────────────────────────────────────────────
const Home = () => {
  const navigate = useNavigate();

  // Day 1 = August 15, 2026
  const startDate = new Date(2026, 7, 15); // month is 0-indexed
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffMs = today.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const dayNumber = Math.max(1, Math.min(diffDays + 1, 365));

  const dayCountText = `🔢 Day ${dayNumber} of 365`;

  // Birthday: March 1, 2027
  const birthday = new Date(2027, 2, 1);
  const timeDiff = birthday.getTime() - today.getTime();
  const daysLeft = Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 0);
  const birthdayCountdown = `🎉 ${daysLeft} day${daysLeft === 1 ? '' : 's'} left until Sejal's Birthday!`;

  const isBirthday = today.getDate() === 1 && today.getMonth() === 2;
  const birthdayMessage = `🎂 Happy Birthday, SEJAL! 🎂\n\nYou are light wrapped in stardust. Today and every day. 🌟`;

  const msgIndex = Math.min(dayNumber - 1, messages.length - 1);
  const dailyMessage = isBirthday ? birthdayMessage : messages[msgIndex];

  const formattedDate = new Date().toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <AppContainer>
      <Title>365 Days Bbg</Title>
      <Tagline>Getting Lost in You? That's My Daily Routine, bbg.</Tagline>

      <ContentRow>
        <SideColumn>
          <SideImage src="/assets/gallery/HomeL.jpg" alt="Left decoration" />
        </SideColumn>

        <CenterColumn>
          <Card>
            <h3 style={{ color: '#C6A5A5', marginBottom: '1rem' }}>Today's Message 💖</h3>
            <Message>{dailyMessage}</Message>
          </Card>
          <DateText>{dayCountText}</DateText>
          <DateText>📅 {formattedDate}</DateText>
          {!isBirthday && <DateText>{birthdayCountdown}</DateText>}
        </CenterColumn>

        <SideColumn>
          <SideImage src="/assets/gallery/Home.jpg" alt="Right decoration" />
        </SideColumn>
      </ContentRow>

      <ButtonContainer>
        <Button onClick={() => navigate('/time-travel')}>Time Travel<br />⏳</Button>
        <Button onClick={() => navigate('/surprise-me')}>Surprise Me<br />🎁</Button>
      </ButtonContainer>

      <Footer>Made with lots of love for the most amazing person I know. 💌</Footer>
    </AppContainer>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/time-travel" element={<TimeTravel />} />
          <Route path="/surprise-me" element={<SurpriseMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
