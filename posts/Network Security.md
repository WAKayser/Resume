---
title: Network Security (ET4397IN)
author: Lectures by Christian Doer, Summary by Wouter Kayser
date: April 2019
mainfont: FiraGO
monofont: Fira Code
geometry:
    - a4paper
    - margin=0.8in
fontsize: 12pt
linestretch: 1.1
output: 
    pdf_document:
        md_extenstions: +superscript+subscript
toc-depth: 3
toc: true
---

## Introduction
Large financial costs for defending. Large financial damage when an attack is succesfullHowever attacks are cheap to set up. 

Every connected system can be exploited remotely and incidents are common.

Large underground economy with big exploit marketplace. This marketplace reduces the barrier to entry for less skilled adversaries

Build your own virus tools provide polymorphism.  
Control centres check operating systems to provide specific exploits.  
DDOS is especially cheap to set up.  
Credit card information is also cheap on the internet.  

When CVE is announced the number of attacks skyrocket.  
However patches will take forever.  

Fake antivirus programs is also big business.  

CIA triad: Confidentiality, Integrity and Availability

Passive attack: Just reading out already availble information  
Active attack: manipulating the network to be able to get information

Attack tree to systematically discover vulnerabilities.

Risk management options: acceptance, removal, reducing likelyhood, reduce consequence, transferal

Different threat profiles require a different control. 
This depends on: vulnerabilies, system access and knowledge, skill, resources, goals

Attack progression: Reconnaissance, weaponization, deliver, exploitation, installation, command and control, actions
Defence in depth is important so that chances are smaller. 

## Physical
Physical defense is not only against intentional attacks, but also accidents. 
Step one is physical access control to prevent tampering with the media

Guided transmissions still give off small EM radiation
Differential twisted pair reduces the interference and leakage

Optical can be tapped by bending or splicing. However this is measurable
Other option  is to clamp the cable with a detector and mirror surface

Unguided: security through range limitation ?...
Different antenna have different directional gain.
Directional links still have a width in which te signal can be tapped (also sattelite)
This is especially true for sattelite

Hardware Security Module (HSM) to safely store or generate keys. 
Exists in many different forms: SIM / usb/ pci
Can contain tamper sensors or self destruct mechanisms. 

## Link Layer

Link = Ethernet / WiFi / GSM sort of

Addressing with MAC addresses instead of IP adress
ARP Spoofing to impersonate other users.

The CAM table contains the data on which port has which mac address. 
When this table is full the switch will act as a hub.
This is solved by port security which sets a maximum amount of connections to a port.
MAC-Basesport security whitelists a set of MAC adresses, however mac addresses could be spoofed

802.1Q brings Virtual LANs by Qtag
Each group / vlan has their own priviliges and routing rules. 
Traffic not really separated and ther might be edge cases when attacker could switch VLANs

WiFi hacks happen often
SSID are only way to identify WiFi networks

Client always asking for networks to connect to. This provides way for passive scanning
Internet has maps containing router information.

WiFi is easily jammed. 
WEP is easily cracked due to export restrictions. 
Also allows for bit level modifications without knowing keys. 

## Network Layer

Network design: Domain separation perspective and security and maintainabily perspective

DMZ Designs: Dual firewall with DMZ in between. Or three legged firewall with extra DMZ connection
In the DMZ an external Mail server could be placed to protect the internal mail server.
Load balancer / HA proxy can mitigate DDoS threats.

Whois and google can tell you a lot about the organization. Mostly location of servers.  Web presence, unlinked and archived web content, business partner and business relationships, social media profiles, dumpster diving, forums, mailing lists, public documetn, jobn offers, 
logs and password data can sometimes also be found on google.

Traceroute tells you all the connection and something about the core of the internet. 
zonetransfer allows you to copy the entire dns record. This can contain internal records. 

Port scanning can happen with many diffenrent tcp messages. However different types can cause alarms. 
This can better be distributed over many IP addresses. 

Fingerprinting of OS can be done by sending certain packets and recording meta data of result. 

DDoS is also possible because source can be sppfed. 
Protection by limiting resources makes it easier to use all of those. 
Increasing resources is very costly
Only Solution: TCP SYN cookies make it just as expensive for the adversary
Amplification attacks happen to push out other traffic. eg DNS or downloads
Other solution: server only serves to select zones. 
ISP can employ ingress filtering, however every ISP has to do this. 

Packet fragmentation can lead to many different weird edge cases. 
One of this is the ping of death, which rewrites out of bound memory

DNS can be intercepted and the information can be rewritten. 
The ISP DNS can also be poisoned by asking and giving the result of the question. 
Kaminsky attack provide more answers than the question was. 

Networks can have an internal DNS Resolver and an external DNS Advertiser. 

DNSsec can validate DNS records, however this is a very long process. 
Most dont do this as it takes many many requests. 

Multi - Firewall principles: hard to implement. The solution is funnel based firewall system, 
Firewalls can operate on mnay different layers. Some block certain ip addresses, some certain port numbers, and some scan the application part f ro prohibited actions.

Network diodes are there to stop information from traveling in one direction. 
However information can be hidden in many things, like interval, length, etc. 

Hole196: multicast uses the same key for all pairs and is symmetrical. 

## Transport Layser

TCP has many quirks which can lead to unpredictable behaviour. 

LAND (Local Area Network Denial Attack): sending a syn packet with source address same as the destination. TCP has many specification issues

### SSL / TLS

1990s SSL was created. This was then superseded by TLS in the 2000s. 
However TLS is a container protocol, which means that encryption can be swapped out for less strong versions. The encryption is the strongest one supported by both parties. However MITM can downgrade encryption.
There is even just straight pass through for key exchange, encryption and authentication. 

When encrypted with TLS there are multiple options for mac and encryption. The three types are:
Encrypt-then-mac: tampering can be spotted, no info is leaked on plain text. 
Mac-then-encrypt: no integrity of ciphertext as packet first has to be decoded. Will not leak info via MAC. 
Encrypt and mac: Will leak some info via mac. And provides vector to break encryption. 

IV chaining in SSL / TLS: manipulating how the IVs are generated. Good practice is to randomize this. 

Heartbleed was a vulnerability in a heartbeat application. This worked by asking a echo of a certain length of the sent message. However this length could be longer than the message. thus reading memory. 

### PKI

PKI (Public Key Infrastructure)  
Certificates work by the Chain of Trusts. However registrars get hacked every once in a while.
Other issues are incorrect assumptions of adminstrative email adresses. The third party reseller not doing the right validation before handing out certificates. Incorrect settings.

## Risk Control

Security requires changes in process, technology and the people involved.
Estimating risk is not just multiplying impact times likelihood. 
As in the extremities odd stuff can happen.

### Identifying the Crown Jewels

The ISO 31000 is a risk management cycle providing a common frame work to discuss risks. 

The first step is to establish the context. This has to be done by top level management. This contains:
* The objectives od the risk management process as well as the scope that needs to be considered.
* A list who will take part in the process and their roles. Example: RACI chart (Responsible, Accountable, Consulted, Informed)
* Requirements which methods may be used, which scales have to be used for assessment and how the process should be document. 
* A definition of what risk is deemed acceptable or the risk appetite of the organization.  

The next step is to find all the business processes and how they depend on each other. Then you can find out hwo the different IT assets are used for those processes. From the importance of the processes the protection requirement of the IT assets can be determined. This determines the security zone design. However this is still a trade off. 

Risk identification can be done in many ways: Checklists, Brainstorming, Fault tree, Event tree, Bow tie, HAZOP, Markov

Risk analysis can be doen in three ways.
1. Qualitative divide up in different categories
2. Semi-quantative uses categories but those will still assign values to categories
3. Quantative assessment uses numerical values. 

Analysis of likelihood: based on historical data and expert judgement
Analysis of impact: Primary loses consist of value of lost assets, time spent to replace and expenditure dure outage. Secondary losses are spill over into other systems, increased support volume, lost confidence/future business etc. 

Risk treatment is choosing between different treatment options to find the cheapest option to reduce the risk to acceptable values. 

Risk can be avoided, controled, transfered or accepted in that order. 

Cost of countermeasures can quickly add up as time spent in the acquisition and maintenance is also expensive. 

Return of investment is not particularly useful as there is no profit. For this the ROSI can be calculated, however this formula is bull shit. Next to that this requires good estimates of costs of incidents. 

Risk avoidance is also storing less data on your system: data minimization.