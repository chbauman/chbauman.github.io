---
layout: ../layouts/Prose.astro
title: TypeScript Sudoku Web-App
description: My sudoku web-app written in TypeScript
---

This post documents my TypeScript sudoku app. It can be accessed and tried out at
<a href="https://chbauman.github.io/sudoku-ts/">https://chbauman.github.io/sudoku-ts/</a>.

![Screenshot of the sudoku app](/img/posts/screen_sudoku_broad.png)

### General Usage

To set a number in a cell, first click the cell and then the number
you want to set. The numbers that would directly lead to
an error in the sudoku cannot be set. The corresponding buttons
on the number pad below the sudoku are grayed out and cannot be clicked.

### Bottom Buttons

In this section, all the buttons at the bottom of the page are listed
and explained.

<div style="width: 100%;margin:10px;display:inline-block;">
<img src="/img/icons/reload.svg" alt="Restart Sudoku" 
style="float:left;width:50px;height:50px;background-color:white;margin:10px 10px 0px 0px">
This button restarts the sudoku that is currently being solved.
The current progress, including all possible hypotheses, will be lost.</div>

<div style="width: 100%;margin:10px;display:inline-block;">
<img src="/img/icons/code-working.svg" alt="Select Level Icon" 
style="float:left;width:50px;height:50px;background-color:white;margin:10px 10px 0px 0px">
If you want to start a new sudoku, try this button. It also lets you choose a difficulty (level)
for the next sudoku.</div>

<div style="width: 100%;margin:10px;display:inline-block;">
<img src="/img/icons/help-circle.svg" alt="Help Circle Icon" 
style="float:left;width:50px;height:50px;background-color:white;margin:10px 10px 0px 0px">
Using this button will set the pencil marks specifying all possible numbers for every empty cells. 
When other cells are set, the pencil marks that would show an invalid possibility are
automatically removed.</div>

<div style="width: 100%;margin:10px;display:inline-block;">
<img src="/img/icons/git-branch.svg" alt="Branch Icon" 
style="float:left;width:50px;height:50px;background-color:white;margin:10px 10px 0px 0px">
When activating this button, the next number that is set is assumed to be a guess
and marked green. All previously set numberw will be colored black and assumed to be 
true. This is basically a save point and with the next button one can revert
to the state before using this button when the guess (the hypothesis) turns out to be falsy. </div>

<div style="width: 100%;margin:10px;display:inline-block;">
<img src="/img/icons/close.svg" alt="Revert Icon" 
style="float:left;width:50px;height:50px;background-color:white;margin:10px 10px 0px 0px">
With this button, everything that was done since the last hypothesis will be 
reverted. Together with the button above, this allows the user to manually perform
a depth-first search for the solution of the sudoku. 
</div>

<div style="width: 100%;margin:10px;display:inline-block;">
<img src="/img/icons/document-outline.svg" alt="Input own Icon" 
style="float:left;width:50px;height:50px;background-color:white;margin:10px 10px 0px 0px">
When this button is clicked, an empty sudoku is shown. The user is then able
to freely set cells, e.g., to setup a custom sudoku he wants to solve. 
When clicked a second time, the currently set numbers are fixed and the sudoku can 
normally be solved. 
</div>

<div style="width: 100%;margin:10px;display:inline-block;">
<img src="/img/icons/information-circle.svg" alt="Information Circle Icon" 
style="float:left;width:50px;height:50px;background-color:white;margin:10px 10px 0px 0px">
This is the information button, it shows an overview
of the buttons from the bottom. It also offers two additional functionalities, solving the current sudoku
or checking it for errors. </div>

Note that _there is no undo button_. So if you are not careful, you will
lose all your progress.

