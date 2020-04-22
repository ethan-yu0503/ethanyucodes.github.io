---
layout: post
title:  "Robonaldo – Soccer Robot"
date:   2020-04-17 13:58:31 -0700
categories: robotics software hardware
---
For the 2019-2020 school year, I teamed up with Alex Collelo to recruit from [USC Makers](http://viterbimakers.usc.edu/) and lead a team of ten to create an autonomous robot that plays soccer with a person. Our goal is to create a robot from scratch and develop the software for high-level decision making and low-level control. 

Our hardware stack includes an NVIDIA Jetson TX2 (for decision-making and planning), an Arduino MEGA (for low-level control), a ZED stereo camera, encoders, motor controllers and motors, and batteries.

Our software stack uses ROS as the backbone, along with Gazebo (simulation), the ZED API (vision processing), and Arduino code. 

Here's our slide deck for our progress in the first semester (Fall 2019). It covers the hardware and software components of the project, the hardware architecture (which components are connected), the software architecture (ROS graph), and the CAD design for our chassis. 
{% include responsive-embed url="https://docs.google.com/presentation/d/e/2PACX-1vSK0Kgivyee6CStSd4B9x2JmG8r_31wzW2dFZ7pmQcBy3vyNwbRhhgmldM_xcOJudt0QC3yGgYcB2NB/embed?start=false&loop=false&delayms=3000" ratio="16:9" %}

Click [here](https://github.com/uscmakers/Robonaldo) to check out the Github for our project!