---
title: First Post
date: 2019-11-02
summary: How this site was created.
---

This site is based on a template available on Github: [Link](https://github.com/sujaykundu777/devlopr-jekyll).
I just updated the information and removed a few details which I did not find necessary for
my personal use. I might add some more changes later. The site is hosted by 
[Github Pages](https://pages.github.com/). The avatar was created with the free online 
tool [https://getavataaars.com/](https://getavataaars.com/). The icons were generated with the icon generator: 
[https://www.favicon-generator.org/](https://www.favicon-generator.org/).
I also added a default image for post that do not specify an image, 
I used it for this post, it is shown below again:

![Default post image](/img/posts/default_post.png)

Just so that I can look up how to add an image to a post, 
since this post will also serve as an example how to write a post.
The actual post files are in the directory '_posts', the filename
has to include the date when it was posted, see the file of this post
as an example. The set of categories a post can have is fixed, if
you want a new one, you need to define a new category in the folder "categories",
just look at the existing ones to get an idea how to do that.

##### **Running locally:** - Setting up local server for testing.

Try running:

`$ bundle exec jekyll serve`

in the base repository folder. If you are running for the first time,
you'll probably need to run `bundle install`
to install all required dependencies. If these instructions 
are not sufficient, try googling.

Post need to be added to the folder <mark>_posts</mark> and named accordingly with
the date, see this post as an example. Skills can be edited in the file 
<mark>_includes/author_skills.html</mark>.

##### Post example structuring

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

**Note :**
Note this!

This is how you list things:
- **First item** blah blah
- **Second item** blah blah

Another way to show command line commands:
```
rm -rf /
```
Do not run this, it is just an example.

Edited on 21.12.2019.
Also edited on 25.03.2020.

