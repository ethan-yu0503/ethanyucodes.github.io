---
layout: post
title:  "Magical Nightscene – Generative Animation Project"
date:   2020-04-23 00:58:31 -0700
categories: animation scripting vfx motioncapture generative
---
> A short animation clip of a semi-magical night scene. 

In the foreground, I aimed to capture and illustrate a relaxing scene on a grassy hill with fireflies slowly roaming around. For the background, I added elements that made the scene more magical and extraordinary, such as buildings that slowly move up and down, a constellation of a humanoid dancing and skipping around, and fireworks. Every element in the scene is created in Maya.

{% include responsive-embed url="https://player.vimeo.com/video/287707369" width="640" height="360" %}

## Summary of Techniques 
### Foreground –
**Fireflies** I used legacy particles along with radial and turbulence fields to control the random fluttering movements of the particles. I added scripting for runtime before dynamics to control the opacity of the fireflies to mimic the flickering effect on fireflies and the color of the fireflies (shades of orange and yellow). I also keyed the translation of the fields so that the fireflies move towards different centers in space throughout the animation. 

**Grass** I used one of the grass brushes on PaintFX and painted over a NURB terrain that I modeled with soft selection.  

### Background –
**Moving Buildings** I wrote a MEL script that randomly picks from a given set of buildings, creates a city scene with multiple circles of buildings with different radii from the center, and animates each building in a sinusoidal motion starting from a random height. The script randomly generates an offset for the position of buildings within the circle and places each building based on trigonometry functions. It also translates and keys each building based on the rate of change for a sine function. 

**Dancing Constellation ** I used the motion capture data that I recorded of myself at the studio and used that as a goal for nParticles. I manipulated attributes of the particles, such as the range of colors for the stars (different shades of yellow to white), the weights of the goal per particle (lowering the number of particles attached to the goal), and cached the simulation of the particles so this asset can easily be imported and transformed in the scene.

### Post-Production –
**Rendering**  Maya Hardware, Software

**Compositing**  Adobe AfterEffects

### Motion Capture
I had an opportunity to wear a motion capture bodysuit in the motion capture studio in the (USC Robert Zemeckis Center)[https://cinema.usc.edu/facilities/stages.cfm]. I acted out a bunch of different movements so that my classmates and I can use the motion capture data for their projects. T-Posing for each movement segment actually turned out to be more tiring than I thought – or I was just unfit.
![Motion Capture]({{ 'images/motion_capture_pic.jpg'|absolute_url}}) 
