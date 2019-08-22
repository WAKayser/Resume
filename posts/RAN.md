---
title: Cellular Networks - Radio Access Networks (ET4396)
author: Lectures by Remco Litjens, Summary by Wouter Kayser
date: June 2019
mainfont: FiraGO
monofont: Fira Code
toc: true
geometry:
    - a4paper
    - margin=0.8in
fontsize: 12pt
linestretch: 1.1
output: 
    pdf_document:
        md_extenstions: +superscript+subscript
toc-depth: 2
---

# Introduction

## Anecdote 1

Hedy Lamarr was the inventor of spread spectrum technology. Which is now used in all modern telecommunication systems. 
She was once called the most beautiful women in the world. Het husband talked about the jamming of radio controlled torpedos. She invented with her piano tutor, with the aid of piano rolls, changing freuquency sets.

## History and current situation

### Mobile Cellular Market

The fastest growing sector is the active mobile broadband subsciptions. Mobile subscriptions have already long surpassed the amount of fixed subscription. There are over 80 subscriptions per 100 inhabitants. 

By 2022, there will be 5.7 billion global mobile users and 12.3 billion mobile-connected devices. Which will be aproximately 1.5 per capita. However these number do differ on who you ask. 

Russia has the highest amount of subscriptions, while africa is lagging behind. However the americas have the highest amount of active mobile broadband subscriptions, with again africa lagging behind. 

China mobile is the biggest operator with over 850 million users. The second place goes to Vodafone with 470 million users. 

The market share for network vendors is divided as follows: Huawei 28% (RIP), Ericsson 27%, Nokia 23%, ZTE 13%.

Mobile data traffic grows glose to 79% year-on-year. Also video will represent 79 % of total mobile data traffic. 

Penetration of network technologies take time. 2019 is the year that 5G will be launched in many places in the world. 

### Mobile Cellular History

1831: Faraday demonstrates electromagnetic induction. ie. The production of a potential difference when a conductor is exposed to a varying magnetic field. 
1864: Maxwll postulated the possibility of generating waves that propagate at the speed of light. 
1886: Hertz demonstrates the wave character of EM transmission. "It's of no use whatsoever ... this is just an experiment that proves Maxwell was right - we just have these mysterious EM waves that we cannot see with the naked eye. But they are there."

1893: Tesla was the first to demonstrate wireless transmission. 
1895: Popov and Marconi independently demonstrated the electromagnetic transmission and reception of messages. 
1896: The first patent on wireless telegraphy using Hertzian waves was given to Marconi.

1900: Fessenden generated the first-ever intelligible speech successfully broadcast by radio waves. 
1907: Marconi initated transatlantic radio communications.
1935: Armstrong invented FM.
1943: The patent of marconi was overturned to Tesla by the US supreme court. 

1956: The first automated mobile phone system for cars was launched in Sweden. "Mobiltelefonisystem A"
197x: earliest ideas on MIMO technology by Kaye, George and Van Etten.
1979: The first cellular public wireless telephony network was deployed in Tokyo by NTT. 

1981: First cellular system reached Europe wiht Nordic Mobile Telephone (1G) in the 450 MHz band. 
198x: Several different systems were operational all over Europe.
1982: CEPT (Conferece Europeene des administrations des Postes et des Telecommunications) started Groupe Special Mobile to make a pan-European solution. 
1989: The task was transfered to European Telecommunications Standards Institute (ETSI).

1991: First GSM call from a Nokia car phone. Peak circuit-switched data was 9.6 kbits.
1993: First patents for spatial multiplexing using MIMO. 
1997: Dutch spectrum auction for HFL 1.8 billion. 
1998: MIMO/SM prototype by Bell Labs. 

1998: Start of UMTS by the 3rd-Generation Partnership Project (3GPP).
1999: HSCSD is an enhancement to GSM allowing multiple channels to be used in parallel.
2000: Launch of GPRS, which enables packet-switching. It allowed for flexible sharing of channels. Peak data rate of 171.2kbit/s

2000: Dutch UMTS spectrum auction 5.9 billion. 
2001: first UMTS launch. 
2002: more mobile than fixed-line subscribers and over 1 billion subscribers. 
2003: Edge boosted GPRS to a peak data rate of 473.6 kb/s
2006: HSDPA launched in The Netherlands first by T-Mobile. Allowing for faster data on 3G. 
2007: Apple iPhone Launch.
2009: Commercial launch of LTE
2010: 2600 MHz auction for 2.627 million. 
2012: 4G spectrum for 3.804 million. 
2014: national LTE coverage by KPN. 
2018: 5G first standard is ready. 

In the netherlands there is a new standard every 10 years!
OBLB (1980) -> NMT-450 (1985) -> NMT-900 (1990) -> GSM (1995) -> GPRS (2001) -> Edge (2005) -> UMTS (2004) -> HSPA (2006) -> LTE (2013) -> 5G (2020)

Trends in the cellular evolution:

* Analog -> Digital
* Speech only -> Integrated services. 
* Circuit -> Packet Switching
* Denser Frequency Reuse
* More spectrally efficient multiple access schemes. 
* Increased exploitation of diversity gains,
* Use of MIMO
* Cellular densification
* Self-management
* More performance
* Less OPEX / CAPEX

### Mobile versus fixed communications

* Mobility
    - Users can change their location
    - Device needs to find network
    - Network needs to find user
* Device
    - Limited transmit power affects transmission range
    - Limited battery capacity: energy management
* Spectrum regulations
    - Coverage requirements
    - Field strength limitations
* Wireless channel
    - Shared medium: interference
    - Vulnerable channel yields higher and variable loss rates
        + Requires significant error correction
        + may confuse TCP
    - Fluctuating channel requires fast link adaption
    - Low transmission rates
* Security issues

## Anecdote 2

In 1947 the concept for a cellular network was derived. Then the hexogonal layout was found to be ideal. Frequency reuse factors were already calculated. 

## Key Elements of a Cellular Network

### Overview

Communication is in principle always between a mobile and a base station. The mobile station is connected to the antenna via a wireless channel. These antennas are then connected to the rest of the mobile network. 

### Mobile Network

Antennas can be omnidirectional, sectorised or beamforming. 

Gains from having multiple antennas:

* Transmit diversity: split power ovver multiple antennas to ensure that at least one has a good channel to the device.
* Receive diversity: use rx antenna with the strongest signal or combine rx powers. 
* Beamforming: direct energy via the strongest channel to maximise SINR at the device. 
* Spatial multiplexing: explotit multiple disjoint propagation paths to generate multiple data streams. 

Best Server Area: of a given antenna is also known as a Cell

### Wireless Channel

2/3/4G networks use the UHF band (800/900/1800/2100/2600 MHz).
5G networks will use the UHF/SHF band(700/3500/26000 MHz).
Spectrum has licensed and unlicensed bands. The licensing is done by nation regulators. (Agentschap Telecom)

* Uplink
    - User device to base station
    - Lower spectrum (so there is less path loss)
    - Lower transmit power
    - More avanced receiver as there is more processing power available
    - Coverage bottleneck
* Downlink
    - Base station to user device
    - Higher spectrum
    - Higher transmit power
    - Less advanced receivers
    - Capacity bottleneck. 

Frequency planning: each base station is given a set of carriers. neighbours may or may not reause the same frequencies. 

Propagation Aspects:

* Distance based path loss  $P_r ~ P_t \cdot d^{-γ}$. With γ between 2 and 5. 
* Multipath fading: a signal can reflect of different objects and copies can strengthen or weaken one another. 
* Effects of mobility:
    - Large scale effects
        + distance changes: path loss
        + shadowing by objects
    - Small scale effects
        + set of signal copies changes: multipath fading
        + delays/phases of signals change: multipath fading

SINR: (Signal-to-Interference-plus-Noise Ratio)

### User device

In the past used to be very large with huge batteries. 
Then came the small phones, which have been replaced by big screens with batteries. 
But also more types of devices are being connected, such as cars, fridges, agricultural equipment and medical equipment. 

They all can have differing characteristics.

* Supported bandwidth
* MIMO capabilities
* Supported modulation schemes
* UL/DL peak rates
* Power class e.g. 21/24 dBm
* Number of Tx/Rx antennas: 1, 2, 4, ...

### Principles of Cellular Networking

#### Frequency reuse 

Frequency reuse between cells can increase inter-cell interference. However slicing up the spectrum results in less capacity per cell. reuse factor: $N = i^2 + i j + j^2$ , with reuse distance $D = R \sqrt{3N}$. This will result in an SINR of $\frac{1}{6} (3N)^{\frac{γ}{2}}$ at the cell edge.
TCH (Traffic Channel) an SINR of 9 dB is needed and for the BCCH (Broadcast Control Channel) 15 dB is needed. Ending up with an N of 2.3 and 4.6 respectively. A higher reuse factor is often used for BCCH carriers. In the real world a factor of 12 is not unheard of due to the complex environments. 
With MU-MIMO frequencies can be reused within the cell itself. 

#### Multiple access

FDMA: Frequency Division Multiple Access
TDMA: Time Division Multiple Access. Which is more reboust against frequency selective fading, but needs more synchronization. 
CDMA: Code-Division Multiple Access. Which result in a higher bandwidth efficciency but is more complex to generate. 

OFDMA: Combination of FDMA and TDMA with orthogonal carriers. 

#### Duplexing

Duplexing can happen in time domain or in frequency domain. 
Full duplexing without splitting resources is being worked on but is very very hard. 

#### Sectorisation

Use of directional antennas to split a single site into multiple cells. Often three sectors is used, but six can also be done. Due to directionallity, frequency reuse can be lowered as they only receive interference from antennas pointing in the right direction which will increase the SINR.  

#### Modulation

Higher order modulation needs higher SINR, but leads to higher bit rates. 

#### Error handling

Backwards Error Correction: ARQ(Automatic Repeat reQuest): retransmission of erroneously received blocks. 
Forwards Error Correction: Adding bit that can help in decoding blocks with errors. 
Hybrid ARQ: combination of retransmissions using soft combining in the receiver. 

#### Radio Resource Management

Suite of mechanisms to assign radio resources to users. 

* Cells: assignment, handover, CoMP, balancing, admission
* Transmit Power
* Interference Control: admission, AMC
* Codes: AMC
* Spectrum: Scheduling, Channel assignment
* Time: scheduling

Time frames:

* Milliseconds: power, AMC, scheduling
* seconds: power, AMC, cell assignment, admission, handover, load balancing, channel assignment
* Minutes: congestion control, radio resource reservation

Power control is very important and it tries to keep the transmitted power as low as possible. The needed power is derived from feedback from the UE. If the UE is fast moving the transmitted power will be even higher. 
AMC is derived from the CQI received by the cell. This then determines what MCS the UE should be able to decode about 10% of the time. 

Congestion control and load balancing is done but taking actions at specific cell loads. At first soft actions are taken, then hard actions are taken. For example handing over users. 

#### Mobility Management: Handover control

Active users maintain a link. Mobile users can undergo handovers when an other cell is closer. Non mobile users can also be handed over for load balancing, or other radio managament purposes. 

Mobile-assisted handover: Mobile measures and reports, network decides. 
Types of handover:

* HARD handover: Break before Make
* Softer handover / CoMP: Make before Break
* INTRA-RAT handover: within the same technology
* INTER-RAT handover: across different technologies
* INTRA-CELL handover: between carriers for load balancing. 

Handover performance: too early means a risk of pingponging. too late results in bad sinr. pingponging leads to signalling overhead and chance of dropped calls. Too many cells in the active set leads to too heavy resource costs. 

An idle user occasionally checks whether it is in the same LAC (location area code). If it is in a new LAC than this is reported to the network. When an idle user is paged, this is broadcast in the entire LAC. This has a trade off in signalling load of LAC changes versus load of the paging channel. 

#### Key tradeoff CCQ

Coverage Capacity Quality: This is the trade off that will be seen everywhere. 

* Quality: bit rate per user, targeted 10^th^ user throughput percentile
* Capacity: number of users per cell, traffic load per cell
* Coverage: Cell edge distance, coverage gap, cell edge user

Intitial network deployment: little traffic, so mostly coverage is the concern. uplink oriented. 
As traffic increases: providing sufficient capacity to deliver quality. which is mostly downlink oriented. 

Key thing that can be tuned: antenna downtilt, transmission power, cellular densification. 

#### Key Performance Indicators

* Call Success Rate: coverage, admitted, not dropped, qood quality\
* Accessibility / availiability: coverage probability, call admission probability, fraction of time that a cell is available
* Retainability: radio link failure probability, call dropping probability
* Integrity: Opinion on speech quality, delay during video streaming, user throughput, latency for data services. 
* Mobility: handover ping-pong ratio, successful hand over attempt fraction

For all: average, percentile, cell edge users can be evaluated. 

### Assessment Tools

#### Network dimensioning

Targets: number of sites for service area, dependence on frequency band, business case analyes. 
Uses link budget analysis, which is basically an excel sheet. To calculate how many sites are needed to provide the user the required quality. 

#### Network planning

Targets: site / frequency / neighbor planning, sectorisation: azimuth optimisation, tilt optimisation
Radio network planning tools: coverage oriented assessment, static analysis or monte carlo, expensive commercial tools. The erlang loss model or the processor sharing models also can be used for this. 

#### Technology assessment / opimization

Targets: Investment decisions, derivation of optimal parameter settings, design of technology features. 
System level simulator: detailed modelling of technology, network aspects, traffic characteristics, propagation environment. 
Link Level simulator. Detailed modelling of a single communication link of the technology. creates SINR vs BLER (BLock Error Rate) curves. 

# GSM / GPRS / EDGE

## Anecdote 3

TLA: Three-Lettered Acronym
GSM: Great Software Monster
WAP: Where Are the Phones
WCDMA: Will Cries Deliver Mobiles Again
UMTS: Unending Mystery of Terminal Shortage

## GSM

### Introduction

Global System for Mobile communications: 2G system, fully digital, FD/TDMA based. 

Basic services: speech telephony, SMS, circuit switched data (2.4, 4.8, 9.6, 14.4 kb/s), fax

Supplementary services: Call forwarding, call waiting, call hold, calling line ID, multiparty

### Architecture

See summary for Cellular Networks - Architectures and Services

### Duplexing, framing structure

GSM uses FDD for the uplink and the downlink. The uplink and the downlink block are separated into 200 khz wide carriers. 

A super frame takes 6.12 seconds and either represents a traffic channel or a control channel. A traffic channel superframe is split up in 51 multiframes of length 26 and a control channel is split up in 26 multiframes of length 51. So a multiframe has 26 or 51 frames and those frames have eight slots containing bursts. 

A normal burst is used for voice, data and dedicated control data. It is made up in the following way:
guard space | tail (3 bits) | user data (57 bits) | Stealing (1 bit) | Training (26 bits) | Stealing (1 bit) | user data (57 bits) | guard space.

tail: known sequence to find the beginning and end of each burst. 
user data is sent in 24 out of 26 frames in a 120 ms multiframe: resulting in a bit rate of 22.8 kbit/s. 
The stealing bit indeicates whether voice/data or control data is sent. 

A set of time slots over multiple time frame makes up a channel. So there are eight physical channels per 200kHz carrier. 

### Logical channels

Logical channels indicate how a physical channel is used and what type of information is sent. 

* Traffic channels: Used to transmit voice or data. 
* Control channels:
    - Broadcast CHannels (BCHs)
        + Broadcat Control CHannel (BCCH): cell and network identity, service availability and pilot signal
        + Frequency correction CHannel (FCH): provideas a frequency reference. 
        + Synchronisation CHannel (SCH): supplies MS the training sequence to synchronise during cell search. 
    - Common Control CHannels (CCCHs)
        + Paging CHannel (PCH): notifies a specific MS for a call or SMS message. 
        + Random Access CHannel (RACH): uplink: used to acknowledge PCH or to initiate connection setup. may collidde and will then reattempt with random backoff
        + Access Grant CHannel (AGCH): is usd to assign the MS a TCH or SDCCH and an inital timing advance. 
    - Dedicated Control CHannels (DCCHs)
        + Stand-alone Dedicated Control CHannel (SDCCH): bidirectional: is used for authentication messages but also SMS
        + Slow Associated Control CHannel (SACCH): bidirectional: for each TCH and SDCCH this is the default control channel to sent out-of-band signaling such as signal strench, power control and timing advances
        + Fast Associated Control CHannel (FACCH): is used if the SACCH cannot cope. 

A superframe structure can be assigned to either control or traffic. Then all the same time slots make up a physical channel. On this physical channel multiple logical channels can be time multiplexed. 

Typically when 4 carriers are used three out of 32 channels are used for signalling and the rest are used for traffic. 

### Call establishment

See summary for Cellular Networks - Architectures and Services

### Modulation & Coding

#### GMSK: Gaussian Minimum Shift Keying

Each info bit is duplicated at two subsequent times: which are then the even and odd bits. Based on the even and odd bit a high or low frequency is chosen and might be inverted. Resulting in minimum shifting and a somewhat smooth derivative. 

#### Channel Coding

A burst contains 114 bits resulting in a gross bit rate of 22.8 kbit/s. EFR (Enhance Full Rate) speech codec uses a 260 bit speech block every 20 ms. Which is 13kbit/s. The block is split up in 50 class 1a bits + 132 class 1b bits and 78 class 2 bits. The most important bits have a lower code rate to get to 22.8 kbit/s. Also see Error Correcting Code summary. 

For data transfer several codecs exist for 2.4, 4.8, 9.6 and 14.4 kbit/s bit rates. 

### Network planning

Segmentation into cells, which are irregular due to the propagation environment. Cell sizes vary between 100m and 35 km depending on geography, user intensity. Each cell has their own carriers assigned. 

#### Link budget tool

A link budget tool can calculate from a given scenario how many sites are needed to deliver a sufficient SINR with a high enough probability. This is mostly an uplink / coverage oriented analysis. 

#### Frequency planning. 

using the formula we found earlier we can derive the SINR with different reuse factors. If the amount of carriers per cell do not statisfy the capacity requirement a smaller cell is needed. 
Things are more complex when talking about a non uniform, non hexagonal environment. For this commercial tools available that do map coloring to generate a frequency plan that satisfies SINR requirements and sufficient channel capacity. 

#### Erlang loss model

A model for capacity planning. Poisson arrival process at rate λ (calls/s). General call duration distribution with mean A (s/cal). Traffic load ρ = λA (erlang; unitless). This is used to derive the blocking probability. When an exponential call durations are asumed a markov chain can be used to evaluate the model. C is then the capacity for number of calls at the same time the node is capable of handling. $$ π(C) = \frac{\frac{p^C}{C!}}{\frac{\sum_{n=0}^{C} ρn}{n!}}$$  This formula gives the call blocking probability. The values from this can also be found the Erlang B traffic tables. 

#### Trunking Gains

Increasing the resources per cell gives an above-proportional increase in traffic handlling. 

#### Reuse partioning

A cell can split itself out in an inner cell and an outer cell. In the inner cell the reuse factor can be lower as long as it does not interfere with the outer cells. This means that each site/km^2^ can use more channels. The challenges are that it is harder to assign a MS to an inter or outer cell. There have to be handover in between the cell itself. Less resources per partion allows for less traffic handling capacity per zone. Dynamic channel allocation can be done but is complex. 

### Radio Resource Management

* Transmit Power Control (TPC)
    - Downlink: slow power control is optional, mostly a fixed power is used. 
    - Uplink: slow power control at about 1-2 Hz: response to changes in path loss, shadowing: mostly for battery saving
* Timing Advance (TA)
    - The bursts in the uplink cannot overlap otherwise they cant be decoded anymore. 
    - there were 64 steps, each covering 550 meters for a total of 35.2 km
* Discontinuous Transmission (DTX), Voice Activity Detection (VAD)
    - In a conversation each party talks 40% of the time
    - Inactivity is detected( VAD) then the channel is silenced (DTX). 
    - Suitable 'comfort noise' is added based on earlier measurement. 
* Slow Frequency Hopping (SFH)
    - with SFH the channel hops at about 217 Hz, the algorithm is broadcast via the BCCH.
        + Cyclic hopping: identical sequences in co-channel cells
        + Randomised hopping: Pseudorandomly generated sequences
    - For avoiding long term suffering from fading dips / strong interferers

## Anecdote 4

The first message sent by SMS was "Merry Christmas". Most industry observers thought that SMS was worthless. However it currently generates 15% of the total revenue of GSM operators, while requiring a low amoun of resources. Currently it is being replaced by internet based services. 

## GPRS (General Packet Radio Service)

### Introduction

Adds packet-switching into GSM, which requires new hard/software. Based on the idea of channel sharing. Flexibiltiy to grant idle resources to others and to bundle resources for higher rates. The downside is variable delays and the additional signaling needed. 

A typical channel usage is a few for control. A few dedicated to GPRS and the other channels would have space for GSM calls. If the channels are idle then they can also be used by GPRS. 

### Architecture

See other summary on Architectures. 

### Framing structure

A Radio block is a set of four bursts in the same time slot. They are the unit for resource assignment. 

### Logical channels

Mostly the same channels were used, however there were some added or modified. 

* Traffic Channels
    - Packet Data Traffic CHannel (PDTCH): used to carry packet switched data. 
* Control Channels
    - BCCH now also indicates whether GPRS and EDGE are supported. 
    - PCH now also notfies for GPRS data
    - RACH now also functions to initiate a dataflow from the MS
    - AGCH now also assigns a PDTCH to the MS
    - PCCCHs can also be deployed if the previous three lack capacity: PPCH, PRACH, PAGCH P=packet
    - PACCH does the same as ACCH but then for packets
    - PTCCH does timing advances and coding setings. 

### Modulation & Coding

Still GMSK, but coding rates can be (1/2, 2/3, 3/4, 1) resulting in bit rates = (9.05, 13.4, 15.6, 21.4) kb/s/slot. Up to four physical channels can be combined. 

### Terminal Classes

* Class A: capable of GPRS and circuit-switched at the same time: requires two independent transcievers
* Class B: can operate GPRS and voice, but only one at a time. Most common implementation
* Class C: Can do either GPRS or circuit-switched services.  

There is also a numerical class which dictate how many receiving and sending slots it can use. Between transmitting and receiving there needs to be a switching slot. and 

### Network planning

#### Processor Sharing Model

To model 'threads' or channels that can be shared. Poisson arrrival rate λ (calls/s). General call size distribution of mean A. C channels. per-channel rate of ρ = λA/Cr. This can be used to derive the expected data transfer time and expected data througput. π denotes the chance that the system is in a certain state. The equilibirum is given by $π(n) = (1-ρ)ρ^n$. The expected number of calls going on $L = \frac{ρ}{1 - ρ}$. Little's Law then denotes the expected transfer time W as $W = \frac{L}{λ} = \frac{A}{Cr} * \frac{1}{1-ρ}$. An approximation of the throughput R is then $R = \frac{A}{W}$.

#### Integrated Erlang loss / Generalised Processor Sharing model 

Lots of math and it means that graphs can be created. 

### Radio Resource Management

* Adaptive codeing: adapt the CS according to channel as reported by the receiver.
* Packet Scheduling
    - Based on the QoS attributs of the active data flows
    - restricted by the amount of buffered data and the terminals multislot capabilities

## EDGE (Enhanced Data rates for Global Evolution)

### Introduction

Provides Additional Modulation and Coding Schemes, hybrid ARQ

### Modulation & Coding

GMSK or 8PSK. 8FPSK provides a truppling of the througput. Which is a nice bonus. 

### Hybrid ARQ

Chase Combining: adding the received value from the sent identical copies
Incremental redundancy: provide more coding bits to fix it with error correction

### Radio Resource Management

The scheduler now also has to do EDGE next to GPRS but can uses the same principle. 
With more MCS values the state of the channel can more closely be followed, providing some gain in throughput. 

# UMTS / HSDPA

## Anecdote 5

There were two 3GPP groups that were mostly similar. Basically Europe vs China. 
There was a big debate on the chip rate. 4.096 Mc/s vs 3.6864 Mc/s. Eventally the Ericsson proposed value of 3.84 Mc/s was decided upon. 

## UMTS (Universal Mobile Telecommunications System)

### Introduction

Targeted for 384 kb/s wide area coverade and up to 2 Mb/s indoor and low range coverage. 
Based on CDMA, as procesing power allowed it. 
Designed for high flexibility in assigning bit rates. 

### Architecture

See summary on Cellular Networks - Architectures & Services

### Duplexing, framing structure

5 MHz carrier spacing. 

A slot has 2460 chips and takes 667 μs. An uplink DPDCH slot is only used for data. An uplink DPCCH slot is used for the pilot, TFCI, FBI, TPC. 

A radio frame consitsts of 15 slots. Taking 38400 chips and 10 ms. 

On the downlink there is just a DPCH on whihc control and data is multiplexing. 

### Logical, transport and physical channels

Logical channels: correspond to different kinds of data flows over the radio interface. 
Transport channels: prepeared data frames(segments, encapsulated) received from the logic channels to transmit over the radio interface. 
Physical channels: offers the physical medium for radio interface transmission of transport blocks, includes coding. 

* Downlink Broadcast Control CHannel (BCCH) coneveys general system info (PLMN-id and LAC), mapped via the BCCH (Broadcast Channel) to the P-CCPCH (Primary Common Contol Physical Channel)
* Downlink Paging Control CHannel (PCCH) pages user via the PCH (Paging CHannel) to the S-CCPCH (Secondary Common Control Physical CHannel)
* Downlink Control Traffic Channel (CTCH) is used for cell broadcast information. Mapped via the FACH (Forward Access Channel) to the S-CCPCH.
* bidirectional Common Control CHannel (CCCH) is used by all users for connection establishment. Mapped in the downlink as the CTCH, and in the upllink cia the RACH (Random Access CHannel) to the PRACH (Physical Random Access CHannel)
* bidirectional Dedicated Control CHannel (DCCH) is associated with a single specific users and conveys for example handover-related messages: Typically mapped via the DCH (Dedicated CHannnel) to the DPDCH (Dedicated Physical Data CHannel) or the HS variants. The DPCCH carries physical layer control signaling such as power control messages. 
* bidirectional Dedicated Traffic CHannel (DTCH) is for a specific user and carries data. The mapping is the same as the DCCH. 
* Common Pilot CHannel (CPICH) is the cell pilot channel with a channel carrying only ones.  and has a spreading code of 256. There is one per carrrier. 
* downlink Primary Synchronisation Channel (P-SCH) is used to obtain slot synchronisation.
* downlink Secondary Synchronisation Channel (S-SCH) is used to obtain frame synchronisation and is also used to obtain the cell's scrambling code. 

### Spread Spectrum technology

Channel bit rate = system chip rate / spreading factor. 
Spreading factor ~ spreading gain ~ spreading code length. 
A pair of codes is mutually orthogonal iff there is no forefather relation.

$\frac{E_b}{N_0} = SF \cdot \frac{C}{I}$. C = is the power of the chip sequence. I is the power of the interference and noise. 

Processing Gain PG = 'coding gain' + spreading gain

### CDMA (Code Division Multiple Access)

Spreading code: spread narrowband signal to wideband and separates signals by the same transmitter. 
code packing might be utilized to make better use of all codes. so that there is less wasted space in the tree. 
Scrambling codes: keeps the same bandwidth. separates signals from different transmitters: downlink = 512 gold sequences: uplink = 33.6 million scrambling codes. 

### Modulation & Coding

QPSK modulation, convolutional coding. 

| Type  | bit rate  | SF  | code rate |
| ------|-----------|-----|---------- |
| Voice | 12.2 kb/s | 128 | 0.36 |
| Data  | 64 kb/s   | 32  | 0.30 |
| Data  | 128 kb/s  | 16  | 0.28 |
| Data  | 384 kb/s  | 8   | 0.41 |

### Signal processing chain

the uplink of a voice call: 
Analogue speech -> | Sampling and quantization| -> digital speech rate (64 kbit/s) -> | speech coding | -> 
(information (DTCH) 12 kbps + control (DCCH) 2.5 kbps + contol (DPCCH) 2.4 kbps) -> |channel coding| -> coded (49 + 11 + 15 kbps) -> |interleaving| -> channel (60 + 15 kbps) -> |spreading SF=64 and SF=256| -> chip rate (3.84 Mchps) -> scrambling -> dual-BPSK modulation

Receiver is the same but in the reverse order. 
For the downlink they spread separately for both bits of the QPSK symbol. 

### Network planning

#### Cell breathing

Contiguous frequency reuse, so care has to be takb on power control. 
Cell breathing: cell size increase with decreasing traffic load and vice versa. 

$d_max = G^{-1}(\frac{I+N}{P^{tx}_{max}} \cdot SINR^{*})$.

G is the path loss formula. (I+N)/N is also called the noise rise and is correlate to the cell load. 

α is here taken as the activity factor and M is the amount of active voice calls. 

$d_max = G^{-1} (\frac{N SINR^{* }}{P^{tx}_{max}~ (1-α(M-1)SINR^*))}$

$\frac{I+N}{N} = \frac{1+ αSINR^* }{1- α(M-a)SINR^*}$

#### Capacity calcualtions
Uplink capacity:

$M^{max} = \frac{PG}{E_b / N_0} + 1) <=> \frac{E_b}{N_0} = \frac{PG}{M} - 1$.

Downlink capacity: Now we can also look into adding other transmitters in the downlink. ω = the downlink orthogonality factor. i = the other-to-own cell interference ratio. 

$M^{max} =  \frac{PG}{(1 + ω + i)(E~b~ / N~0~)} + 1 <=> \frac{E_b}{N_0} = \frac{PG}{(1 - ω + i)(M - 1)}$.

#### Uplink budget analysis tool

For a given scenario, the tool calculates the Maximum Allowalble Path Loss (MAPL) towards a cell edge user. From this other metrics can be derived. 

MAPL = P^tx^~max~ + Recieve antenna gain - cable connector loss - fast fading margin + soft handover margin - lognormal fading margin (cell edge reliability (%), building penetration loss, lognormal fading (σ)) + Μacro diversity gain (cell edge reliability (%), lognormal fading (σ), inter-site correlation) - P^rx^~minimum~

Macro diversity gain: gain procided by being on the cell edge and being able to choose between two cells. 
From the MAPL the maximum ISD (Inter-Site Distance) can be calculated. from this the area of each cell can be calculated. This can then be used to calculate how many sites are necessary. 

### Radio Resource Management

transmit power control: minimize interference and maximise battery lifetime: overcoming near-far effect. Outer loop power control adjusts $\frac{E_b}{N_0}$ target to reach BLER target at 100 Hz. Inner loop power control adjusts tranmit power to reach $\frac{E_b}{N_0}$ target at 1500 Hz. Initial power is based on inital bearer specific targets. 

Soft handover: a user can be connected to multiple cells. This increases the quality of the coverage, while sacrificing spreading code usage in the downlink. 

Differences for Softer Handover: only one cell has to issue TPC commands. The uplink can now also do maximum gain combining. 

Channel switching: Using a higher spreading factor requires less resources but transfers takes longer. So there is a FSM to manage switching to higher rates if applicable and then shifting down if the buffers are empty. 

## Anecdote 6

Tesla patented radio communications in 1900. Then by strong financial backing marconi got the patent in 1904. However it was overturned in 1943, when marconi sued the US government. 

## HSDPA

### Introduction

Shifts radio resource management intelligence to the Node B.
Release 5: HSDPA release (≤ 14.4 Mb/s)

Release 6: EUL/HSUPA

Release 7: HSPA^+^: MIMO or 64QAM (≤ 28.8 Mb/s)

Release 8: HSPA^+^: (Dual Carrier or MIMO) and 64QAM (≤ 43.2 Mb/s)

Release 9: HSPA^+^: Dual Carrier and MIMO and 64QAM (≤ 86.4 Mb/s)

Increase in capacity, peak rates and throughputs. Latency was also increased from 200 to 120 ms.

### Logical, transport and physical channels

The high speed HS-DSCH can combine multiple channels of SF= 16;

### Terminal classes

Depending on the terminal class they support different:

* Number of SF 16 codes
* Modulation
* MIMO / dual carrier
* code rates. 

### UMTS versus HSDPA

HDPSA has a thick shared channel in which transmissions are scheduled. It has a single transport channel for multiple users such as GPRS / EDGE. Heartbeat of 2 ms. However has no soft handover. 
HSDPA is power-defined and rate controlled, while UMTS is reverse. 

### Modulation & Coding

There are more steps in the CQI table: 32. The available modulation steps are: QPSK, 16QAM, (64QAM)

### Evolved HSDPA features

64QAM increasd the peak rate by a factor 1.5. Requires software updates in both UE and NodeB. Also allowed some lower bit rates to be achieved more efficeintly. Also a benefit for users with a worse channel condition, as the better users were done quicker with the channel. 

MIMO was a 2x2 configuration. Could increase the peak rate by a factor of 2. The gain is better for radio environments with rich multipath dispersion and also users with higher SINR (or 'Geometry') values due to better channel estimation. 

Dual Carrier: combines tow adjacent 5 MHz downlink carriers. Useful for everyone. Also providees trunking gains. Also provides the scheduler with more freedom to exploit frequency /multi-user diversity gains. 

### Network planning

Currently most of NL is covered with HSDPA. Can handle a higher flow arrival rate, while also providing a boost in average throughput and 10^th^ percentile throughput. 

### Radio Resource Management

Fast Adaptive Modulation and coding: At 2ms heartbeat the MCS is derived from the CQI report, terminal class and the buffer contents. 
Scheduling happens in the NodeB, to adapt faster. trade off between fast and fair. Scheduling provides multi-user gain by intelligently serving the user based on their instantaneous radio link qualities. 

#### QoS differentiation

* Service based QoS differentiation: prioritise web-browsing over large downloads. 
* subscription based QoS differentiation: gold vs silver vs bronze, volume based / fair use policy. 

It used to be that only the MBR (Maximum Bit Rate) could be set. 
With QoS differentiation the cell capacity can be increased by reducing the needed capacity for some users. This then represents a delay in investment (CAPEX). 
Different weights can be given to the high priority flows to be scheduled earlier. Can be done with the proportional fair scheduler. 

# LTE/LTE-A

## Anecdote 8

October 29, 1969: First test to connect computers over long distances to each other. The first test crashed after three letters. The word LOGIN would be the first word. The second attempt was successfull. 

## LTE/LTE-A

### Introduction

OFDMA -> no intra-cell interferrence
Started with MIMO on day one. 
Reduced latency with a flatter architecture. 
Scaleble bandwidth with Carrier Aggregation (CA) and different sizes channels. 

Release 08: First LTE release, with 2x2 MIMO in UL/DL

Release 09: LTE femtocells, intdroduction of eMBMS, SON

Release 10: LTE-advanced: CA, 4x4 MIMO, relay nodes, eICIC for cell edge performance

Release 11: Enhancements to CA, MIMO (4x4 UL, 8x8 DL), relay nodes, eICIC. Introduction of CoMP, advanced receivers

Release 12: Enhancements to CA (2 * UL, 3 * DL, FDD/TDD), small cells, 256QAM, dual macro/small cell connectivity, eMBMS, MIMO (AAS/VS)

Release 13: License Assisted Access(LAA; allow for use of unlicensed spectrum in DL), MIMO enhancements (full dimension MIMO, supporting both elevation and azimuth beamforming to boost capacity and coverage) CA enhancements

Release 14: LTE support for V2x services, enhanced LAA (eLAA) also for UL, CA enhancements, MIMO enhancements (up to 64 antenna ports)

HetNets: (Heterogenous Networks) Having a network consisting of different size cells inside of each other. 
Relaying: a means to enhance high data rate coverage. A relay node is connected via a donor cell in or out of band. Can be done on L0/1 L2/3. with or without the demodulation/ decoding. Trade off between removing noise and latency.

### Architecture

Simplified architecture: LTE is packet-switched only, no BSC/RNC node in LTE. 
For specifics, see the summary on CN - Networks and services. 

### Terminal classes

Terminal classes are based on the MIMO capabilities, 64QAM capabilities and Carrier Aggregation. 

### OFDM

sub carrier spacing is the bit rate so tat the sinc(x) frequency response has zeros at the centre of the other carriers. This is wat makes it orthogonal. 

### Framing structure

T~symbol~ = T~cyclic prefix~ + T~U~.
T~u~ = 66.667 μs. T~cp~ == 4.762 μs. 
The cyclic prefix is the last part of the symbol itself. This is why it is also called an 'informative guard time'

Resource Elements (RE); 1 subcarrier = 15 kHz; 1 symbol = 71.429 μs. 
Physical Resource Block (PRB): 12 subcarriers = 180 kHz; 1 timeslot = 7 symbols = 0.5ms;
Scheduling Resource Block: two PRBs consequetively in the time domain. 

### Logical, transport and physical channels

* downlink Reference Signal (DL-RS) is the LTE pilot
* downlink Broadcast CHannel (BCCH/BCH/PBCH) conveys master/system information blocks. also informs where the PCFICH is. 
* downlink Physical Control Format Indicator Channel (PCFICH) indicates over how many symbols the PDCCH is transmitted. 
* The multicast control/ traffic channel (MCCH/MTCH/MCH/PMCH) are MBMS (Multimedia Broadcast Multicast Service) channels

Each SRB starts off with two symbols for PHICH, PCFICH, PDCCH. Every once in a while there is an S-SS or P-SS.  WHich are for synchronization an dboth tak a single symbol. When the reference signal is sent it is quiet in other cells. 

### Modulation

QPSK, 16QAM, 64QAM, (256QAM)

### MIMO

* Transmit diversit: single data stream transmitted, enhances coverage through diversity
* Spatial multiplexing: two data streams transmitted, enhances throughput ideally by the minimum of the number of antennas. However if the channels are not orthogonal enough the streams cannot be separated. Works better with a high SINR.

* SU-MIMO: only used for a single UE: increases coverage or user throughput
* MU-MIMO: users can use the same resources: only for DL: cell capacity booster. 

Massive MIMO is what is coming. and can reach very impressive speeds. 

### Radio Resource Management

Adaptive Modulation and coding: based on modulation and coding. The DL transmission is based on the CQI feedback. 
Adaptive MIMO: Rank indicator: whether one or more data streams should be transmitted. Precoding matrix indicator: indicator used for beamforming. 

Bitrate = (bits/symbol) * 14 (symbols /subframe) * 12 (subcarriers/subframe) * carriers * MIMO * coding rate / 0.001.

Packet scheduling is pased on CQI, Buffer, QoS and SRB can be scheduled. 

Carrier aggregation. Can be either contiguous or non-contiguous. MCS is selected per carrier. carriers can also be split over different cells. 

Inter-Cell Interference Coordination (ICIC): management of power/frequency to reduce interference. 

* Plain time reuse: cells can broadcast after each other.  reduces resource availability. 
* Fractional Frequency reuse. Only apply a higher reuse to the cell edge users. 
* Soft frequncy reuse: cell edge spectrum can be reused in neighbor cells for center users. 

however there is no really clear benefit of doing it. 

eICIC: macro cells transmit some frames at lower power so that picocels can experience less interference. 
CoMP (Coordinated MultiPoint): dynamic coordingation among cells to enhance cell edge performance. Joint Processing: joint transmission to increase SINR. Coordinated scheduling/beamforming: the cell that can beamform the best will serve. The other will cell can take the beamformer into account when designing its own beamforming. 

### Self-management

Also called SON (Self-Organising Networks). To minimise human involvement, automatically finding best values, self healing. cheaper then man power reducing OPEX and CAPEX. 
Things that can be improved:

* LTE/Wi-Fi Traffic Steering
* Handover parameters
* Cell Outage Management

# 5G
  
## 5G

### Introduction

Targeted for deployment in 2020.
However might take longer in the netherlands. 
There are already devices available such as mobile routers. 

Release 15 NSA: 5G NR NSA (New Radio) (Non Stand Alone) which works with the EPC of 4G. 

Release 15  SA: 5G NR SA Designed to work with the 5GCN. 

Release 16: Focus on eMBB, mMTC, URLLC use cases. 

### Trends & requirements

Vertical sectors: looking into solutoins for different industries. 
Services are becoming more diverse: small packet services versus richer content services. 
Traffic is becoming more variable in time, space, volume, application type, device type, requirements. 
Different data rates and latencies are needed for different yse cases. 

There are there high-level use case categories defined:

* massive Machine-Type Communications (mMTC) / Massive IoT: Massive connectivity

* Ultra-Reliable and Low-Latency Communications (URLLC)/ low latency: Low latency

* enhanced Mobile Broadband: Capacity Enhancement

### Architectural aspects

Centralised RAN. Some RAN functions are more centralised towards the core of the nework to allow for more cooperation and for trunking gains. 
Edge Computing: putting computers close to the RAN to calculate stuff or do caching/pre-fetching. 

Network slicing: allow different industries to have their own functional part unencumbered by the rest. Sort of like a VPN. QoS can be applied within the slice or external to the slice. 

### Technological pillars

#### Transmission Scheme

OFDM, OFDMA, with also FDD, but can slo do TDD. subcarrier spacing can be flexible.
Modulation is QPSK, 16QAM, 64QAM, 256QAM
Channel is coded using LDPC and uses HARQ

#### Support for higher spectrum

Extra spectrum at 3.5GHz band. 
There is also a very wide band available in higgher frequency bands over 24 GHz (mmWave). 
mmWave: allows for high data rates and very good beamforming. However path loss is higher. 
mmWave can be either used for smaller cells or backhaul. 
It can also be used to imporve the performance for users with a good channel. 

#### Ultra-lean design

Reduce control signaling overhad
Enhance energy performance, reduce interference. 

#### Low Latency

Shorter TTIs: by reducing the symbol time. Fractional minislot transmissions. 
Shorter HARQ round trip time.  
Grant-free uplink data transmission: at collision back off
Edge computing
D2D communincations like V2x without the need of a GnodeB. 

#### Beam-centric design

Inherent design for a large number of steerable antenna elements. 
Release 15 supports up to 64 antennas. 

#### Beamforming

Half a wave length is often used in between antennas. 
MRT: maximizes gain for a given user. 
In the vertical axis there has to be less resolution so they can be bundled. this is dependent on the angle that cell needs to serve. 
Zero Forcing: makes sure that no energy goes towards other users. while also maximizing the gain towards the user. 

This provides additional challenges for the scheduler. 