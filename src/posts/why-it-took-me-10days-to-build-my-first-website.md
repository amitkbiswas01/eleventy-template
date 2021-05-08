---
title: Why it took me 10 days to build my first website?
desc: Why it took me 10 days to build my first website? Is it because I'm a beginner? Or the ample amount of choices that easily confuses a newbie?
date: 2005-05-05
tags:
    - dev-life
    - beginner
    - advices
    - experience
layout: post.layout.njk
---

<style>
  p>img {
    margin: auto;
  }
</style>

11 days if you consider contemplating _**Should I do it at all?**_ as a part of the development process. You might be thinking already, _"wow, that must be one heck of a site!"_ .Let me save you the suspense, it's a Frankenstein's Monster; an average 4-page static portfolio website with minimum backend interaction, and somewhat underwhelming visuals. But I do not regret making it at all. Here's what my first adventure as a _**"web dev"**_ has taught me!

<!-- excerpt -->

> _This might sound a bit opinionated and amateurish as it's coming from a learner's perspective. feel free to let me know your opinion about this._

### **What they don't say in the tutorials**

![freecodecamp](https://camo.githubusercontent.com/60c67cf9ac2db30d478d21755289c423e1f985c6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f66726565636f646563616d702f776964652d736f6369616c2d62616e6e65722e706e67)

First of all, [freeCodeCamp](https://www.freecodecamp.org/learn) is a great resource ❤️ I started learning web development there about a month ago and kinda blazed through the first two courses on responsive web design and basic javascript. They cover almost everything and is highly recommended if you're just starting out. Really appreciated the fact that they made a platform where beginners like me don't have to worry about setting anything up and just start coding. But it's a bit different out there in the real world! It might be easy following tutorials with resources and examples side by side; but when I tried to set up the development environment myself for the first time, it didn't go as planned. Basic things like hot-reloading or setting full height divs across all devices took me a while to do correctly. Remembering the syntaxes, setting up a file structure for the project, linking and naming those files properly, and a thousand other small things required research and googling. Of course, I could have definitely left out the / in my self-closing tags and name the "assets" folder "middle earth", and things will run correctly anyway, but some(not all) are _**best practices**_, right? 🤔

### **"That's Best Practice, Bro!"**

https://youtu.be/gc8mDZwUlfo

Ben Awad's video explains this issue nicely. So when you're just starting, it's normal that you won't know how a professional would do the same task. As I went down the rabbit hole of best practices, I soon found myself deep in frustration instead of the wonderland! I guess, things like how to name functions in JS or it's better not to use ids when styling elements in CSS are industry standards but there are tons of practices that vary from developer to developer. Accepting the fact that I won't do everything correctly right off the bat and some _**convenient**_ practices will come to me in time; has saved me a lot of time after I wasted the first few days panicking over it. 😬

### **The Dilemma in Disguise**

![confusion-again](https://dev-to-uploads.s3.amazonaws.com/i/7kq1ffevinre8fea4rk1.jpg)

Free internet is the best resource to learn. Period. Thousands of tutorials by great teachers and mentors are made free every day and there is a library for everything you'll ever need. But that blessing too came to me disguised as a curse! I felt very lost about what I had to do and how would I accomplish that. See, [freeCodeCamp](https://www.freecodecamp.org/learn) only taught me about vanilla HTML, CSS, and js in the first two courses. So I had two options if I decided to just publish a portfolio now before learning any front-end framework. Either I had to learn a CSS framework like _Bootstrap_ or _Tailwind_ (btw check out [tailwindCSS](https://tailwindcss.com/) if you're a fan of doing things custom) or write everything from the ground up as that'll help me learn the basics better. I choose the latter, but the process of choosing ended up 2 days long and now I know the names of every CSS framework out there. I even looked into small static site generators like [11ty](https://www.11ty.dev/)(I still think its a very easy starting point for beginners in SSG compared to huge ones like Gatsby) for adding a blog option for the site when I didn't even know JS properly! 😒

### **The Return of the Dilemma**

![confused](https://dev-to-uploads.s3.amazonaws.com/i/c9lbyw6hhiiy46b5c0r4.jpg)

After I decided that I'd do everything by hand and not use a framework, the new sith lord of confusion and knowledge came into existence. Initially, I didn't want to add anything other than normal CSS transitions, translates, or hover effects for animating elements. _**Use minimum JS and more Illustrations**_ is what I told myself. But as I kept scrolling through myriads of dev portfolios, I started adding animations and effects that I would preferably want on my site and ended up with 15+ complex animations in a list! There was no way I could do any of those animations manually thus the search for libraries began. [GSAP](https://greensock.com/gsap/) Skywalker seemed like a viable solution for most of those animations such as scroll triggers, SVG path creation, chaining transitions, etc. So I started reading their documentation. After around 2 days, I found out who was his father and although those are quite easy to implement in basic forms, getting the result for what I want in my site will have a learning curve! Other libraries like Swup or Barba gave off the same vibe and ultimately I reduced the list to a bare minimum. But I lost another 2 days in the process! 😣

### **Chad the Perfectionist**

![Chad and the virgin](https://dev-to-uploads.s3.amazonaws.com/i/prbq5l4g6c4x2gpyjx9v.jpg)

That's me, the guy in green pants. I have started to believe I have a bit of OCD after thinking how much I was obsessing over small details on the site! Little tweaks in padding and margin to place the element exactly where I wanted, scrolling through pages of color combinations and palettes, checking out google fonts page 10 times a day to get that correct look, searching page after page for illustrations; what was I even thinking ?! If you're wondering whether I know tons about graphics and visualization now, the answer is **NO**. These didn't make me a UX master overnight, other than just stressing the life out! I even deleted the firebase project twice because I didn't like the name(!) which delayed the release a whole day when I could just deploy the new version in the first project! 😩

### **The End**

WOW, I didn't notice the post has become this long. If you read to this point, thanks for listening to my story. Though I kinda wasted a lot of time on the site but learned plenty of things and felt so happy when the site finally went live. I guess I'll just keep learning in search of that feeling again and again! If you're just a beginner like me, I hope you'll find these situations somewhat relatable. If you're stuck like this, my suggestion would be,

![gif](https://media.giphy.com/media/GcSqyYa2aF8dy/giphy.gif)

Photos are from [here](https://unsplash.com/@kylejglenn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) and [here](https://unsplash.com/@bdchu614?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
