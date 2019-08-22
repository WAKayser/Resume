---
title: Cellular Networks - Architectures & Services (EE4630)
author: Lectures by Rogier Noldus, Summary by Wouter Kayser
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
toc: true
toc-depth: 2
---

# Circuit Switched

## Media Transfer

### PCM based media transfer. 
Voice --> Pre-processor --> AD converter --> G/711 encoder --> bit stream.  
Bit stream --> G.711 Decoder --> DA converter --> Voice signal shaper --> human voice.  
There are many different standards for different bitrates and clarities.  
A-law is used for the world and μ-law is used in north america.  
Transcoding can be done at media gateways.  
s
### Circuit Bearer
A circuit can be used to carry different types of media.  
End points need to exchange info on the usage of the circuit.  
Multiple 64kb/s bearers can be combined to get higher data rates. 

## Control Plane vs User Plane

Control plane: End to end negotation about media session characteristics  
User Plane: end-to-end media transfer  
Sessions are established through switches. 

Control plane operates on ISUP (ISDN (Integrated Services Digital Network) User Part) carried over SS7  
One tactic employed is seperating the two planes in separated switches. Then a single switch in the control plane can control many user plane switches.  
The circuit is established stepwise. So the circuit is slowly dragged to party B.  
Optimized gateway selection: media gateways are selected only after control plane is established.   

## Core network versus Access Network 

Terminal --> Access Network --> Core Network --> Interconnect Network

Access network: Radio Access network, copper plant, fibre to the home, cable, DECT: DSS1 for control, TDM for user replaced by SIP and RTP  
Core network: ISUP for control plane, TDM for user plane  
Between Access and Core: Access session border gateway to protect both networks  

## Common channel signaling

Transport Network: PDH, SDH, SONET, 

### En Links

A E1 link has 32 time slots. Slot 0 is for framing and slot 16 is for control. Each slot has 64kb/s. These time slots together are called one frame there are 500 in one second.

| E  	| Mb/s   	| Links 	| ITU      	|
|----	|--------	|-------	|----------	|
| E1 	| 2048   	| 32    	| G704/732 	|
| E2 	| 8192   	| 128   	| G742     	|
| E3 	| 32768  	| 512   	| G751     	|
| E4 	| 131072 	| 2048  	| G751     	|

North america and Japan uses T links instead of E links.  

### transport network

PDH (Plesiochronous Digital Hierarchy): transporting E1-E4 links, replaced by SDH and SONET  
SDH (Synchronous Digital Hierarchy): used outside North america  
SONET (Synchronous Optical Networking): American standard.  
SDH & SONET operate with unit blocks, referreed to as STM frame or STS frame respectively.  

## Signalling protocols

Loop Disconnect: Old rotary phone disconnected a current loop of 20mA between CO and phone. number of pulses is the digit.  

DTMF (Dual Tone Multi Frequency): Digits are created through superimposing two frequencies. This was used fot the signaling, but also for in call signaling. User plane is the same as the control plane. Used in analogue network.

DSS1 (Digital Subscriber System No. 1): signaling protocol used over the acces network for ISDN. Supported supplementary services. DSS1 messages are mapped to ISUP messages in the core network. In europe we use E-DSS1

ISUP signalling in the ISDN: ISUP is a "user part" on top of MTP (Message Transfer Part). Used in ISDN as well as cellular techniques.

### ISUP messages 
| Direction | Abreviation | Full name | 
|--|--|--|
| --> | IAM | Initial Address Message |
| --> | SAM | Subsequent Address Message |
| <-- | CPG | Call progress |
| <-- | ACM | Address Complete message |
| | |<= Circuit Established =>|
| <-- | ANM | Answer Message |
| | |<= Media transfer allowed =>|
| --> | REL | Release |
| <-- | REL | Release |

IAM Contains:
* Calling party number: public identity of calling party
* Called party number: identity of remote party
* Redirection number: forwarding party
* Calling party's category: type of phone
* Transmission requirements: circuit characteristics needed
* calling geodetic location: physical location

BICC (Bearer Independent Call Control) is the successor of ISUP and allows signaling for multimedia and advanced call routing. Alsow allows for out of band tone transfer. So DTMF gets safed from transcoding to RTP which filters out constant frequencies. 

DTAP (Direct Transfer Application Part) is the GSM / 3G version of DSS1. Works from MS (Mobile Station) / UE (User Equipment) towards the VMSC (Vistitor Mobile Switching Centre): allows voice, data, fax, video call, SMS (Short Message Service), USSD (Unstructured Supplementary Service Data), Supplementary Service Manamgement, In call service such as call hold, call transfer, tone sending. 

SIP-I: ISUP carried over SIP. SIP travels over TCP/IP or over UDP/IP. Allowing the interconnect network to switch to the next generation IP based solutions. 


## SS7 (Signaling System nr. 7)

Backbone for the circuit switched network.
STP (Signaling Transfer Points) act as routers and steer the SS7 trafic. 
SS7 is used for signaling between exchanges in the CS network. It uses the same E1 links. The signaling may take different paths than the media. 

|Party A | | STP | | Party B| 
|-|-|-|-|-|
|Application | In service| | | Application| 
|TCAP | TC Relation | | | TCAP |
| | | STP Application| | |
|SCCP | message transfer | SCCP | message transfer| SCCP |
|MTP | | MTP| | MTP |
| | routing based on GT || routing based on SPC / SSN | |

SCCP (Signaling Connection Transfer Part) establishing connections between SS7 end-points. TCAP (Transaction Capabilites Application Part) Supporting application dialogues for example mobile telephony control. Application layer for example CAP / MAP Enabling remote operations like IN (Intelligent Network) services. 

Idenitifiers in the SS7 network 

 * SPC (Signaling point code): Network node identifier, used within operators network
 * GT (Global Title): global address used between networks. Think roaming and international telephony. Identifies either nodes or applicaions. when a SCCP message is sent towards a GT, a STP derives a SPC and message is routed towards SPC.
 * SSN (Subsystem number) Identifies an application within a node. SSN values are standardized for standard functions. 

## OSI Model

Famously has 7 layers to separate concerns. 

|Numbers | Name | SS7 | ISUP signaling | 
|-|-|-|-|
|7 | Application | MAP |	ISUP
|6 | Presentation |	MAP | |
|5 | Session | TCAP | |
|4 | Transport |SCCP|ISUP|
|3 | Network | MTP 3|MTP 3|)
|2 | Data Link | MTP 2 |  MTP 2|
|1 | Physical |MTP 1|MTP 1|

Sigtran Models MTP 1, MTP 2, MTP 3 by going over IP. This is also called SS7 over IP. Layers 3 till 1 are emulated by 5: M3UA (MTP3 User Adaptation), 4: SCTP, 3: IP, 1&2: signaling link and signaling data link. layer four and upwards stay the same. 

## BCSM (Basic Call State Model)

Communication Session / "Call" establishment follows a State Model. Every call has their own instance if the model. Stimuli lead to state transition. 

Idle --> Line seizure --> Digit collection --> Number analysis --> Route selection --> routing --> Connection complete --> Alerting --> Answer --> Release --> Idle

Each exchange has their own state model instance for the call. So there at least five different state models in action. 

## Numbering plan

Routing in the ISN is based on the phone number. The number consists of Country information, sometimes operator informarion, sometimes geographical location and sometimes class of communication network. 

# 2G Cellular Mobile

## GSM architecture

GSM(Groupe Special Mobile / Global Standard for Mobile communication) was released in 1992 and in 1998 GPRS was added. After 1999 3GPP took over.

PLMN(Public Land Mobile Network ) is the network provided by an operator. Each country may have one or more PLMN's. 

The Subscription data is stored in the HLR (Home Location Register). This profile defines what the subscriber is entitled to use. Subscribers are not permanently associated to a single switch. The subscription data is provided when the subscriber attaches to a PLMN. 

### Architecture of a PLMN

MS (Mobile Station) --> BTS (Base Transceiver Station) --> BSC (Base Station Controller) --> MSC (Mobile services Switching Centre) --> HLR
When a connection is established the MS can send messages to the MSC using DTAP.

### Attachment to a PLMN
The network broadcasts a certain PLMN Id. This ID consists of a MCC (Mobile Country Code) and a MNC (Mobile Network Code). The MS knows which networks are preffered. 

When a mobile subscriber attaches to a PLMN, an MSC is selceted to host the subscriber profile. This is requested from the HLR. The HLR will determine if the MS may attach to the MSC. During this connection the location of the subscriber is also updated in the HLR. 

It used to be that there was a strict relation between MSCs and BSCs, however now MSCs are pooled and all BSCs of the same PLMN can connect to all MSCs. 

To store all the data near to the MSC a VLR (Visitor Location Register) is used. Most of the time this is directly integrated. 

A MSC acts as a registrar, holds subscriber data and provides telephony services. It is connected to the RAN (Radio Access Network). 

A GMSC (Gateway MSC) handles terminating call handling. It routes terminating call towards the MSC that the subscriber is attaced. The GMSC does not hold subscriber data and is not connected to the RAN. 

## MAP (Mobile Application Part)

The fabric of the 3GPP cellular mobile network operationg on layer 6 & 7 of the OSI stack. 

Map is used for mobility management: attachment to msc, detachment form MSC, moving to an other MSC. Authentication and transfer of subscriver data.  It is also used for terminating call handling. Routing call from GMSC to VMSC. Can also be used for Optimal routing of late call forwarding. Providing call handling back to the home PLMN. 

Map also has non call related use cases. SMS, USSD, supplementary service administrative control eg managing call diversion settings, obtaining a subscriber's location and current state also called ATI (Any Time Interrogation) 

### Terminating call handling with MAP

Call established to an MSISDN, this gets routed to a GMSC
GMSC contacts HLR to ask routing info (SRI), via a STP to the apporopiate HLR of the MSISDN.
HLR provides the current location information (PRN provide roaming number). Including the MSC where the subscriber is attached to. 
The MSC checks if the subscriber using the TMSI is attached then allocates a MSRN (Mobile Station Roaming Number) for internal routing. 
The MSC sends this MSRN to the HLR. The HLR forwards this MSRN to the GMSC in a map SRI-Result message. 
The GMSC used the MSRN to extend their connection the VMSC. 
The MSRN contains the address of the VMSC and a variable part for each PRN process started. 
When the VMSC gets this message the circuit is created. Then the MSRN is released and the call is offered to the called party. (paging)

Outside --> GMSC --> HLR --> VMSC --> MS

| From      | To    | Protocol  | Action                    |
|---------  |------ |---------- |------------------------   |
| outside   | GMSC  | ISUP      | IAM                       |
| GMSC      | HLR   | MAP       | Send Routing info         |
| HLR       | VMSC  | MAP       | Provide Roaming number    |
| VMSC      | HLR   | MAP       | Result Roaming number     |
| HLR       | GMSC  | MAP       | Result Routing info       |
| GMSC      | VMSC  | ISUP      | IAM                       |
| VMSC      | MS    | DTAP      | Setup                     |
| outside   | GMSC  | ISUP      | Dialogue started          |
| GMSC      | VMSC  | ISUP      | Dialogue started          |
| VMSC      | MS    | DTAP      | Connection established    |

## Mobility and Roaming

HPLMN (Home PLMN) The network that the user is a subscriber of. The subscription data is always in the HPLMN.
VPLMN (Visited PLMN) the network that user is attached to. This can be the same as the HPLMN.
IPLMN (Interrogating PLMN) The network from where the HLR intterogation for terminating calls takes place. Exluding BOR (Basic Optimal Routing), this is the same as the HPLMN. 

When roaming a MAP connection is made over the internation SS7 network between the VMSC and the HLR from the HPLMN. This connection goes via G-STP (Gateway STP) 

When roaming call establishment has no involvement from the HPLMN. 
When roaming call termination is handled by the GMSC of the HLR in th HPLMN by extending a roamin call forwarding leg to the VMSC. 

When the B party diverts the call to a C- Party this will extend the circuit to the next party. This makes the entire circuit long. However we want short circuits, as less resources have to be utilized. 

Early call forwarding happens in the GMSC and late call forwarding happens in the VMSC. 

ORLCF (Optimal Routing of Late Call Forwarding) The VMSC instructs the GMSC to do the forwarding. However is not widely supported. late call forwarding is completly solved in SIP and IMS, due to the packet system. 

## UICC, IMSI, MSISDN, Authenications

MSISDN (Mobile Station International Subscriber Directory Number): is a pubic number used to identify a subscriber.  
IMSI (Internation Mobile Subsciber Identity): identifier of a subscription to a network. permanently stored in the SIM card.  
IMSI contains MCC, MNC, MSIN (Mobile Subscriber Identification Number)
UICC (Universal Integrated Circuit Card): smart chip module containing several applications. for example the USIM. Technical name for SIM card.  
SIM (Subscriber Identity Module): contains info for accessing the mobile network. USIM (Universal SIM) is for 3G.  
IMEI (Internation Mobile Equipment Identifier): identifier of the device / terminal. 

MS is the combination of both the UICC and the MT (Mobile Terminal). 

### Authentication of the MS

SIM <-> MS <-> MSC <-> HLR / AuC

| From  | To        | Action                        |
|------ |---------- |------------------------------ |
| MS    | MSC       | Attach Request                |
| MSC   | HLR/ Auc  | Obtain Authentication Vector  |
| MSC   | MS        | Request Authentication        |
| MS    | SIM       | Request Response              |
|       |           | Calculate response            |
| SIM   | MS        | Provide Response              |
| MS    | MSC       | Provide Response              |
| MSC   |           | Compare response to vector    |
|       |           | Authenticated                 |

The AuC (Authentication Centre) contain info on all the USIMs of their subscribers. The AuC uses to generate challenges to see if the MS can connect. This can only be solved by the USIM. 

# Data & Packets

## Circuit Switched vs Packet Switched

When looking at the E1 connection, some services do not use the data slots. However they are completely handled within the control slot. Examples: SMS and USSD.

## GPRS, Packet Switched Network
~~~
             HLR
           /     \
GMSC --- MSC     SGSN --- GGSN
   \---    \     /
        \--  BSC
              |
             BTS
              |
            MS/UE
~~~

For packet switched data, GPRS (General Packet Radio Service) in the case of 2G. Another connection is made from the BSC. This time it goes towards the SGSN (Serving GPRS Support Node) which is mostly an analogue to the SGSN. The data will go towards the GGSN (Gatewy GPRS Support Node) which is a fixed point. The MSC and SGSN are connected to share paging and location information. 

A PDP context tunnel is created from the MS towards the GGSN. The PDPc is created towards the APN programmed into the MS. This tunnel no longer goes via the SGSN. 

The SGSN is in the visited PLMN, obtains the subscription information from the HLR, maintains connection with MSC, and set ups the PDPc.  
The GGSN proiveds connection to the PDN(Packet Data Network) / internet. The GGSN provieds the IP adress. It can be situated in the visited PLMN or the home PLMN. Multiple GGSN can be used. 

Home Routing: The GGSN of the home PLMN is used. This makes sure that the operator can run their own billing and their own additional services. However this costs additional resources and the latency is higher. Same IP is kept.
LBO (Local BreakOut): The GGSN of the visited PLMN is used. This reduces the amount of needed resources and the latency is lower. However the operator may not have nough control over the GGSN. 

## DTM (Dual Transfer Mode)

DTM meant running two radios to keep two connections. 

2G: CS service only.  
2.5G with GPRS: Cannot have CS service and PS service at the same time without DTM.  
3G: Solved the issue without DTM  
4G: Has no PS.  

## SMS

Store and forward system. Completely realized in the radio signalling channel. In the core network this was accomplished just through SS7. SMS is used for person P2P, P2M and M2P communication.

MO-SMS (Mobile Origination SMS) and MT-SMS (Mobile Terminating SMS)

Process: The A-party sends the SMS with DTAP to the MSC-A. This sends the SMS to the SMSC-A (Short Message Service Center) using MAP. Which forwards it to the MSC- B using MAP. The MSC-B will use DTAP to send the SMS to the B-Party.  
The SMSC that is used is that of the HPLMN of the A-Party. The SMSC requests the location from the HLR of the HPLMN of the B-Party. This will then be used to forward the message to the correct MSC. 

This is mostly optimized as the SMSC directly connects with the right MSC. When the delivery fails, the SMSC will periodically retry. 

Sometimes an SMS router is employed by the B-Party. This will intercept the SMS and will send it forward when the B-Party has the right location. 

For machine applications a different protocolk is used to send the SMS>. Then we are talking about SMPP (Short Message Peer to Peer) however this is disbanded. The other option is UCP (Universal Computer Protocol).

## USSD

USSD is a mechanism for application execution between the MS and a network application. This is accessed through designated dial strings. USSD is formed by MAP and runs on the SS7 network. 
The format is as follows \*service code\*service data \#. This request follows the following chain. The HLR contains all the action that the subscriber can do and forwards the requyest to the appropriate applications. 

MS -> MSC -> HLR -> USSD application. 

Typical use cases: Query prepaid balance, account top up, ussd callback, looking up own MSISDN, end of call balance notification. 

# Intelligent Nets

## History, presence and future of IN

### History

In the late 80s ITU started defining a standard for IN. ETSI has endorsed the core INAP CS1 as thier own. ETSI then started working on a 2G specific standard of IN in GSM Phase 2+. Similar things happened in North America. 
ETSI CS1 is widely used in the wireline network. Vendor specific IN is used in GSM and 3G. CAMEL (Customized Applications for Mobile network Enhanced Logic) is the global standard for the mobile network. However IN is intrinsically designed for CS networks. 4G and IMS will make use of VAS (Value Added Services)

### What does IN do for us. 

It lets us extend the service logic of ISDN based communication services. And with some adaptation can also be used in VoIP networks. IN defines functional enhancements in the BCSM. Switches can connect to an AS (Application Server) which can steer the BCSM. 

SCP (Service Control Point) is the central point that can now control the call handling process in the switches in the user plane. ('Uber Intelligence')

## Principle of IN

the call handling in the switch is now influenced by the AS. The AS interacts with the BCSM in the switch and can force transitions. 

## SSF, SCF, gsmSSF, gsmSCF

The BCSM of the switch is a complex diagram. The SSF (Service Switching Function) follows this BCSM in a simplified way. The PIC (Points In Call) are reflected in the IN BCSM in the SSF. Example states: collected info, analysed info, alerting, answer, busy, no answer, not reachable, disconnect and idle. 

TDP (Trigger Detection Point): The IN service is invoked here.  
EDP (Event Detection Point): The IN is notified when the point is armed earlier in the call. 

The SCF (Service Control Function) is the mirror that is used by the AS. This follows the same simplified BCSM. 

When gsm is prefixed this means that it is the standard for GSM and 3G.

## IN in the 3GPP network / CAMEL

Used for centralized control over communication sessions like calls, SMS, data and USSD, central number analysis, prepaid and VPN.

A separate protocol is used for call control and SMS called CAP (CAMEL Application Part)

IN is a subscribed service, which means that the service trigger data is stored in the HLR as part of the subscription data. The service trigger data is transferred to the applicable VMSC, GMSC or SGSN. 

The VMSC can conntact the Aplication Server at call set up to invoke a CAMEL service. This can be used for for example call charging.

For this all a TCAP dialogue is set up. This means that the SSF and SCF can freely communicate. 

## IN in the evolving communication network. 

VAS may be used to apply real-time control over IP sessions. This may be QoS (Quality of Service) control or establishing WebRTC sessions. 

## Other info

The generic name for the application part for IN is INAP (IN Application Part). This is now also called the CAP. 

TCAP commands:
* IDP: start the IN service
* RRB: arm one or more DP's
* ACH: start online charging
* CON: connect to a specific number
* ERB: informs IN about call answer
* CUE: notify the SCF
* ACR: inform about the duration of the call

pre-arranged end: No communication needed after call is ended. 

# 4G LTE
## Enhanced Packet Core

~~~
    HSS  / EIR          (OCS / PCRF / P - CSCF)
        |                           |
        |                           |
       MME    --    S -GW  --   PDN - GW
        |            /
        |       /
      E-Node B
        |
        |
        UE
~~~

The 4G network has no Circuit Switched capabilities.

HSS (Home Subscriber System) is the 4G version of the HLR  
MME (Mobility Management Entity) is the registrar and mobility server.  
S-Gw (Serving Gateway) is the proxy towards the PDN-Gw.  
PDN-Gw is the gateway towards the internet and IMS.
E-Node B is (Enhanced Node B) is the LTE radio access transceiver. 

Interestingly, there is no BSC/ RNS.
When roaming S8-HR (S8-Home Routing) is used to transfer the traffic from the S-Gw in the VPLMN to the PDN-Gw in th HPLMN. Or LBO can be used, but this is less common. 

The PCRF (Policy and Charging Enforcement Function) is set up to provide policy control. This sort of resembles how IN works in PS networks. The PCRF is connnected to the SPR (Subscription Profile Repository) which contains the subscription data. The PCRF is als connected to an AF (Application Function) to allow application driven bearer establishment. This is all part of the Diameter standard. 

## SMS


SMSoIP: SMS is encapsulated in an SIP message. The S-CSCF will then forward this to the IP-SM-Gw (IP-Short Message-Gateway)
SMSoSGs: The SMS is transferred to the LTE through signalling. The MMe uses the SGs reference point to transfer it to the MSC. The MSC then transfers it to the SMSC. 
These two both prevent CSFB. As this degrades service. 

## PDN (Packet Data Network) Connection

In the PDN connection there can be multiple EPS bearers. There is a default bearer for internet traffic. This PDN connection is established towards the APN. 

Different Bearer types will hace difernet QCI (QoS Class Identifiers) they will get different priorituies, delay budgets, and allow packet loss error rates. This is especially common when looking into IMS. For ims an connection is made with APN set to "ims". When looking into IMS a default bearer will be created for control within the IMS network.  

## CSFB (Circuit Switched FallBack)

As 4G does not support the CS network 4G uses VoLTE (Voice over LTE) and ViLTE(Video over LTE). However networks are not ready yet.

The solution is CSFB. Where the phone is also attached to the 3G network and as soon as a call is established the 3G network will be used. This is also for SMS, USSD, video telephony, data calls, fax calls. 

When the UE attaches itself to the 4g netowrk the device becomes registered in the MME. The MME then signals the MSC to also register the device. This will then get the appropriate data from the HLR. 
No UTRAN connection for this has to be created. 

During CSFB with PS-HO (Packet Switched HandOver) the PDPc, does not get created towards the SGSN but the S-Gw of the 4G network. 
This means that the same PDN-Gw will be used to access the internet. 

## Wifi access to 3GPP Packet Core

Allows the use of WiFi to access the EPC. Allowing communication services over WiFi and for seamless mobility between WiFi and LTE. The EU can still connect to the IMS over WiFi. Location information remains a dilemma. 

Authentication will be done with the AAA server, which receives authorization data from the HSSS. This then starts up a connection with the ePDG. Which will relay to the PDN -Gw using a GTP tunnel. 
This PDN-Gw is the same for the E-UTRAN access and thus the sessions can continue. Which is the method for untrusted IP access form outside the HPLMN. Trusted IP access can directly connect to the PDN -Gw. 

# IMS (IP Multimedia Subsystem)

## IMS Core Network Architeture

Philosophy: End users <- Access network -> Packet core network <-> Communications core network <-> interconnect.   
Everything can be connected to the IMS via IP.
Strict separation between functional domains: access network, packet core network and multimedia communications framework. This allows for multi device, multi identity, name calling, flexible user plane. 

Flat architecture with same protocols over the planes. For the control plane it is SIP. And for the user plane it is RTP (Real Time Protocol). This flat architecture allows seperating functional capabilities such as utilizing different RANs and multiple user planes

Up Multimedia communication becomes an intenet service: subscribers register with the packet core and with the IMS communication network. 

IMS has started in the wireline networks. IMS is in principle network independent, however works best with the EPC for VoLTE.

CSCF (Call stat control Function) looks a little bit like an MSC.  
S-CSCF (Serving CSCF) the registrar where the IP address of the device is registred. Originating and Terminating comm. sessions are handled by the S-CSCF. This is also in contact with the IMS-HSS.
P-CSCF (Proxy CSCF): signaling between UE and IMS core network.  
I-CSCF (Interrogating CSCF); Acts as the gate way from a different IMS domain. Is next to the SBG.  
SBG (Session Border Gateway): protects the network, adapts SIP messages: filtering, IPv6 vs IPv4, UDP vs TCP, user plane verification: Lawful intercept, media gating, media protection. Also known as the IMS Access Gateway. Is also under control by the P-CSCF.
IMS-HSS: The HSS with its own AuC providing authentication for the IMS. For this authentication keys need to be stored in the ISIM. However the AuC can also be shared. The HSS can also be integrated. 

## SIP (Session Initiation Protocol)

Originally designed for VoIP, in the general sense. By design SIP has no relation to type of access network. 3GPP has adopted SIP a control plane protocol for IMS and has a number of IMS-specific enhancements. 

Transaction based, text based: human readable and extensible, media path ofver the user plane is indepent of the path in the control plane, end to end negotiation of the user plane, ad hoc updates of user plane during a session, support for multiple devices, single control protocol for a variety of services. 

SIP uses SDP offers to determine the used codec for the session. This can also be done during the session. 

Non-Record Routing sip entities only communicate during the routing process, but do not do anything at ACK and onwards. 

Using multiple SIP-ASs is called IFC chaining. 

### SIP session establishment. 
First an "invite" message is sent. This is responded by a "ringing" message and an "ok" message. This is then both acknowledged. Then the session is ready for data transfer between the two UA (User Agents). One closes the session with "bye", the response is "ok".
UAs work by exchanging Requests and responses. The originiating party is called the UAC (UA Client) and the responder is called the UAS (UA Server).  
This transaction happens end to end.  

## Application Servers and IMS Communication Services

The S-CSCF routes the SIP session through one or more SIP-AS. This happens transparently. SIP-AS can manipulate the information traveling through it. The connections to the SIP-AS are determined in the IMS subscription information stored in the HSS. In this is also an IFC (Initial Filter Criteria), contain one or more SPT (Service Point Criteria) of the SIP-AS. Eacht SPT contains the type of SIP session, the address of the SIP-AS and the criteria definition like the value of SIP headers. This is not exactly VAS

## MMTel (Multimedia Telephony) and VoLTE

For MMTel an extra AS is connected to the S-CSCF called the MMTel-AS.  
P-CSCF also has bearer control towartds the EPC.  
SCC-AS (Service Centralization and Continuation AS) for access mobility: LTE, WiFi, CS.  

VoLTE: Access network is formed by the LTE and EPC; Two 

## IMS Centralized Services

VoLTE is not accesible everywhere. When it is not available CSFB is employed. This then is later on anchored back to the IMS network. 

# Advanced Architectures

## Split Control Plane and Payload for Data Bearer

The PDN connection cintains data that is both control plane related and user plane related. The S-Gw and the PDN-Gw both are dimensioned for both layers. 
CUPS (Control and User Plane Separation of EPC nodes): PDN connection control plane and user plane handled in separate and dedicated IP infrastructure. Allows for distributed and adaptive deployment of user plane part. 

Now instead of S- Gw and PDN-Gw we have new entities suffixed with C or U.  
A single set of S-Gw-c and PDN-Gw-c can control multiple sets of S-Gw-u and PDN-Gw-u. Which allows for dedicated user plane infrastructure for diffent classes of IP services. 

The next step is to remove the S-Gw-U and merge it with the PDN-Gw. As it may no longer be needed. Allowing the E node b to be directly connected to the PDN-Gw-U.

## MEC (Mobile Edge Computing)

MEC allows for application execution near the edge of the mobile network with low latency. This allows offloading of computations from the phone and can also be used for caching purposes. 

MECEE (MEC Execution Environment) can be placed between the PDN-Gw and the internet as an execution end-point for example to process video streams. 

It can also be placed behind the S-Gw as an alternative APN to connect to.  

It can also be placed right at the E Node B, where the latency is the lowest. There can be a connection form the PDN-Gw to the MEC for control. 

NFV (Network Function Virtualization) can be applied to MEC and CUPS and all others to creat flexible and adaptinve instantiation of the functions to meet demands. 

# 5G & Advanced Topics

## An Introduction to 5G

5G is not just about higher data rates. It is als about different categories of communication: IoT, Intelligent traffic, Intelligent realways, connected anything, M2M, Telemetry, Agriculture.

Multi-purpose, high speed, cellular mobile packet access network, efficient usage of spectrum, low transmission latency. 

5G is based on NR (New Radio) and NGC (Next Generation Core). The packet core can be sliced. 

Based on SDN (Software Defined Networking) principles: which allows for adaptive transmission networks. Functional components are deployed as VNF, ready for the cloud. Strict separation between core network and access network. 5G services shall be access network-independent. Strict separation of control plane and user plane, both in access and in core network. 

NextGen UE -- NR -- NGC -- Data network. 

Stand alone deployment is the holy grail without parts from, GSM, 3G, 4G. 
However non-stand alone is first employed which has hand over to LTE. This allows to employ NR but still utilize the EPC of 4G. 

AUSF (Authentication Server Function)  
AMF (Access and Mobility Management Function)  
NSSF (Network Slice Selection Function)  
PCF (Policy Control Function)   
SMF (Session Management Function)   
UDM (Unified Data Management)  
UDR (Unified Data Repository)  
UPF (User Plane Function)  
5G-EIR (5G-Equipment Identity Register)  
NRF (NF Repository Function)  
NEF (Network Exposure Function)  
UDSF (Unstructured Data Storage Function)

EPC and NGC can live together but the future is fully NGC.

1. Re-attach without keeping IP address: separate connection to the internet. 
2. from S-Gw and AMF (5g variant) connection to new entity that connects to internet
3. IRAT handover: AMF and S-Gw have a connection so that connections are not dropped. Leading to seamless voice calls. 

## Network Slicing

Slices are somewhat like VLANs. Certain traffic is separated and assigned different QoS. This happens at the RAN and the Core Network. 

## Device-to-Device communication

Intelligent RAN: EPC close to the RAN, breakout of data at local 5G eNodeB.
Relay UE: Can act as relay between ENodeB and UE. Can happen ad hoc and also only for specific devices. This can happen bidirectionally but also only in one direction. 