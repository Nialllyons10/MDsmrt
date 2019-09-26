# MDsmrt Blog

**Niall Lyons**

## Contents
- [Introduction](#introduction)
- [8th October 2018 – Finding a Project Supervisor](#8th-october-2018–finding-a-project-supervisor)
- [11th October 2018 – Securing a Project Supervisor](#11th-october-2018–securing-a-project-supervisor)
- [24th October - Project Proposal Meeting](#24th-october-project-proposal-meeting)
- [2nd November - Blockchain Environment Setup](#2nd-november-blockchain-environment-setup)
- [6th November - Functional Spec Complete](#6th-november-functional-spec-complete)
- [8th November - Web Application Development](#8th-november-web-application-development)
- [12th November - Usage Of ADAPT Cluster](#12th-november-usage-of-adapt-cluster)
- [16th November - Rinekby Test Net + CNN On ADAPT Cluster](#16th-november-rinekby-test-net-+-cnn-on-adapt-cluster)
- [27th November - Infura Usage](#27th-november-infura-usage)
- [30th November - Functional Spec Submission Day](#30th-november-functional-spec-submission-day)
- [2nd December - Ethereum Is Expensive](#2nd-december-ethereum-is-expensive)
- [9th December - Overall Application Updates](#9th-december-overall-application-updates)
- [23rd January - Exams Over](#23rd-january-exams-over)
- [10th February - Decentralised Login + Patient Side Development](#10th-february-decentralised-login-+-patient-side-development)
- [19th February - CNN Update](#19th-february-cnn-update)
- [22nd February - Initial User Testing](#22nd-february-initial-user-testing)
- [1st March - IPFS Files Interacting with Model](#1st-march-ipfs-files-interacting-with-model)
- [16st March - User Roles](#16st-march-user-roles)
- [20th March - Testing](#20th-march-testing)


## Introduction
This is a blog which will document the development of my project MDsmrt. MDsmrt covers the portability of patients scan images through the blockchain creating a
decentralised platform and analysing them through a convolutional neural network.

The idea of this project came from a combination of internships at MasterCard and Optum. Both
very different areas of software engineering as Mastercard is a worldwide payment processor,
whereas Optum powers modern health care to create a healthier world. Two of the main problems
in the health care system is the loss of data, such as MRI and CT scans, and the accurate reading
of these scans by doctors. Scan images are given to patients on a CD which are unreadable, and
can be lost very easily, meaning if you go to a new hospital or doctor your previous scan results
are unknown. My idea stemmed from here, if a doctor can see previous scan results of a patient
and accurately read them quickly, it will benefit both parties resulting in the saving of valuable time.

I will be using Agile methodologies for this project, and using this [trello board](https://trello.com/b/23TR7Z5V/mdsmrt) to track my tasks.

## 8th October 2018 – Finding a Project Supervisor

I looked at a lot of different topics in the areas which I wanted to work on in this project. I took the opportunity to email a few lecturers to get their opinions on a few things before I made a final decision on what I wanted to do. I drafted up a project proposal for two separate projects in order 
to get feedback on what I should do next. I hope to meet with Prof Andy Way tomorrow to try and finalise the main idea which I have.

## 11th October 2018 – Securing a Project Supervisor

### What has been done 

After meeting with prof Andy way and discussing the concept of the project through emails he has agreed to be my project supervisor. I worked with Andy during my 3rd year project so I am very happy to have his expertise this time around too. I will also be working with Jinhua Du of ADAPT. I have been researching different blockchain technologies including Ethereum and Hyperledger and I have decided that I am going to take the route of Ethereum blockchain as I have a good understanding of the supporting documentation, as it is very in depth. At this stage of I have sent my project proposal to both Andy and Jinhua to see what their thoughts are on it.

### What will be done 

I am going to be preparing for the project proposal meeting which will either be next week or the week after. In the mean time I am focusing on doing more research into blockchain and its architectural structures along with looking over some convolutional neural network work I have done in the past to refresh my brain.

## 24th October - Project Proposal Meeting 

### What has been done

Today I presented my project proposal to Andrew Mc Carren and one other lecturer. It went well and there was no major issues. Both lecturers liked my idea, however they said that it was ambitious, 
but liked the idea of brining blockchain and medical applications together in a decentralised environment. 

### What will be done

What I plan to do next is to begin to develop the first draft of my functional spec and send it to Andy to see what he thinks of it. I will also be working on getting access to the ADAPT GPU cluster 
that Andy has given me permission to use for training my CNN. 

## 2nd November - Blockchain Environment Setup 

### What has been 

I am still in the process of developing the functional spec, and in the mean time I have set up my environment to incorporate IPFS with the blockchain. 

### What will be done 

After getting my environment ready, I will begin to play around with how IPFS interacts with the blockchain and get an understanding of the truffle framework React box. 

## 6th November - Functional Spec Complete

### What has been done

I have finished writing my [functional specification](https://gitlab.computing.dcu.ie/lyonsn4/2019-ca400-lyonsn4/blob/master/docs/functional-spec/MDsmrt-Functional-Specification.pdf).
I have spoken with Andy on the layout and I seem happy with what I have done so far. ANdy will go over it again and I will try and think about maybe going more in depth on how IPFS works, and how I am going to use it
I have also began downloading the 69GB of data that I will be using to train my CNN on. I have took a small chunk of it and began to play with it and get familiar with the data and what I can do with it. 

### What will be done 

I will be adding more to my functional spec and also taking back any feedback that Andy has given me. I will continue to add to my ever growing dataset and getting more familiar with the data.
 
## 8th November - Web Application Development

### What has been done

I have created a react truffle box, where my development will be taking place. Here I will be able to interact with Ganache, the Ethereum blockchain client I will be interacting with, along with the chrome plugin metamask.
I have been looking at developing very simple UI renders within my react truffle box and getting a feel for how react redux works.

### What will be done 

The creation of a login system, and developing the first smart contract to interact with Ganache in order to upload images to the blockchain. 
Also the adding of some basic interaction tests cases with truffle.

## 12th November - Usage Of ADAPT Cluster

### What has been done

I now have access to the ADAPT cluster where I will be able to train my 3D CNN. I attended a training day in ADAPT Trinity where I was introduced to slurm, and also how poerful the cluster is and the different ways it can be used. 

### What will be done 

The transferring of training data to the cluster along with files that I will need to train the model. 

## 16th November - Rinekby Test Net + CNN On ADAPT Cluster

### What has been done

I have deployed my smart contracts to Ganache, but I am also deploying them to the Rineby testnet. In order to do this I acquired ether through Twitter, this way I was able to deploy my smart contracts in order to see if my smart contracts were working properly. I plan in later weeks to write about this is my final documentations. 
I have also ran a very small CNN on the cluster which has been successful, meaning I can now build on that, which is exciting. 

### What will be done 
 
I will continue to add to the CNN and build on top of what I have. 

## 27th November - Infura Usage

### What has been done

I have now changed the infrastructure of my blockchain as the way I was communicating with IPFS was not the most efficient. Meaning now I have secure, reliable, and scalable access to Ethereum and IPFS instead of running
a local daemon which was causing some problems. 

### What will be done

I will be now tweaking my functional spec as the due date is on Friday, while also going through it again with Andy. 

## 30th November - Functional Spec Submission Day

### What has been done

I have read over my functional spec, Andy and I are happy with what we have and think we have covered all angles. 

### What will be done

I will now focus on developing a more user friendly UI for uploading images to the blockchian while also developing some tests in order to make sure the smart contracts interact with the blockchain as they should. 

## 2nd December - Ethereum Is Expensive

### What has been done

Over the course of the last few weeks I have been storing the whole image on the blockchain but also storing it on IPFS, which is not in any way efficient. I have now transfeered all images to the IPFS network, and I am not storing their cryptographic hash keys on the ethereum network, meaning now it is only a specific string. 
This has taken away a lot of large transactions that were unnecessary and made the overall application much faster.

### What will be done

I plan to spend my time researching different methods of CNN architecture and what will best fit what I am trying to do. 

## 9th December - Overall Application Updates

### What has been done

I have added the addition of continuous integration to my project in the form of Circle CI. This way I will now be able to increase my code coverage while being able to build and deploy as quick as possible. Here I am now confident that any code I push to gitlab is not broken meaning a smother , less stressful project in the long term. 
I have been focusing on assignments so on the development side of things, its been a bit slow. I have researched some different CNN architectures while also looking into scrapping my current login system and developing a more secure and reliable system in the form of Uport.me, which seems to be a lot beter with what I currently have. 

### What will be done 

I plan on studying for exams for the next while, however keeping up with research and also developing some UI concepts which will make the app more user friendly.

## 23rd January - Exams Over

### What has been done

All Christmas exams have now ended meaning I can now fully focus on the project. I have been looking into Uport alot and feel that it would fit well into my app. Uport is an open identity system for the decentralised web. 
I have began integrating it into the app and it has been going well. I have also adding some layers to my CNN and have completely finished the preprocessing of the data stage. Meaning I can fully focus on training. 

### What will be done  

I will be now developing a python script to split the data I have into training, validation and test sets. I will do this by a percentage of the data instead of a specific number, meaning as I get more data it can be easily added to the model. Tensorflow has made this easy with being able to restore each sessio. 
Uploading of images to IPFS is now complete meaning I will be spending some time on showing off what is in IPFS by fetching the data and showing it on the UI. 

## 10th February - Decentralised Login + Patient Side Development
 
### What has been done

I have successfully finished integrating a decentralised login system, for both doctor and patient. This way all data is secure and tamper-proof. I have developed a UI for patients to be able to look at their specific files that the doctor has uploaded and I have tied up any loose ends with the results of testing the uploading of files through IPFS. 
I have wired up the backend system to pull only file related to the patient and show them on a nice UI. However, the patient can only see these files, they will not be able to analyse them 

### What will be done

I will begin to integrate the CNN into the application using tensorflow.js. This way the model can be hosted on IPFS and not a cloud based service, keeping the application fully decentralised. 

## 19th February - CNN Update

### What has been done

I have grown my CNN with more data and now have an overall accuracy of 64%, however I feel with some tweaks and more training over time I can reach over 70% accuracy. 

### What will be done

I will be tweaking the CNN by adding in some more layers and running for a minimum of 50 epochs. Here I will then be able to see how it is performing over time. 

## 22nd February - Initial User Testing

### What has been done

I have got some friends to use the application in order to get some feedback on what is missing and what could be added. I also went through this with Andy and he pointed out some things which I will take on board. One of the main lines of feedback was that there was to much clicking you needed to do for a simple task. It was great to do this initially because I now can work
on making these elements of the app better and I will work on the changes in the coming few days. 

### What will be done

Continue working on the CNN and adding in features from the feedback I got. 

## 1st March - IPFS Files Interacting with Model

### What has been done

I am in the process of finishing wiring up functions for ipfs specific files to be passed through the model. I am also now creating a space on the UI where the results will be shown to the doctor. I have also began to add more data to my CNN and with the addition of some tweaking and remodelling of the architecture I have now gotten an overall accuracy of 69%. 

### What will be done

Finalising the flow of the application while also meeting Andy to go through previous feedback and look at the new features put in place in relation to the feedback.

## 16st March - User Roles

### What has been done

With the core functionality of the app being 95% complete, I am now working on developing a user authentication wrappers for the roles of both doctor and patient.
These wrappers work in conjuction with Uport meaning that I can easily implement them. 

### What will be done

Wrap up the UI elements of the application and change the colour scheme. I also want to create a new logo for MDsmrt, which I should get done in the next few days. I am continuing to train my model, as it is now easier to keep training it and then passing it to my application as there is still some great time to get a higher accuracy. 

## 20th March - Testing

### What has been done

I have started writing tests on truffle to test against the Rinekby testnet. I am then able to get more accurate deployments, while also saving on gas for Etereum transactions.

### What will be done

I will be making a google form to send out, in order to gain more insight into the user testing, to see what feedback I get. It will be interesting to see if the same problems are still there from the last time or if I have cleaned them up properly. 

