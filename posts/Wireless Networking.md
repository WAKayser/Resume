---
title: Wireless Networking (ET4394)
author: Lectures by Przemysław Pawełczak, Summary by Wouter Kayser
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

## Lora WAN
LPWAN (Low Power Wide Area Network)

Lora optimizes battery life and range by trading in duty cycle and bitrate.

Lora is more sensitive than FSK  
Distance world record: 702 km away and 38.7 km high  
Record over ground = 212 km.  

### Features
Unlicensed spectrum  
Minimal infrastructure  
Cheap hardware  

### Sending
duty cycle = 1%.  
10 downlink messages per day 30 seconds air time per device. 
Chirp spread spectrum.  
Easy to implement.  
Encoding: Gray indexing, whitening, interleaving, Forward error correction  

## NB IOT

### Features
Cellular, M2M technology.   
Standarized to be secure scalable and robust  
Low power usage  
Can be deployed using current mobile network hardware.   
+20 db enhancement of coverage  

### Modules
Many vendors can provide the modules.  
due to the standard the modules have to be cheaper than 5 dollar
AT commands are mostly used to communicate 

### Network
Fits in the standard cellular netowrk and uses the CIoT Serving Gateway Node

Most often transmitted as In-Band signal or as Guard Band of the LTE block.
Stand alone is also an option, however is to expensive. 

Signal is sent with QPSK, CRC and Turbo Coding. The synchronization happens by the LTE signal. 

### Low Power operation
PSM: disable paging by the device, to reduce transmitted messages. However device will be unreachable. 

eDRX: Extendend Discontinous Receive. Add time inbetween paging operation Device will be in idle mode between. 

Most power is consumed during the receive state after a single transmit. 

Bad coverage impacts energy consumption greatly

### Connection set up
NPSS NSSS NPBCH sent by the Node B  
NPRACH procedure the create random numbers for encryption  
RRC is then used to set up connection with previous agreed encryption  
Connection completed.  

## Bluetooth LE

|              | Low Energy BLE        | Bluetooth BR/ EDR |
|---|---|--|
|Optimized for | short bursts          | Continuous |
|Frequency     | 2.4GHz                | 2.4Ghz |
|Channels      | 40 with 2 mhz spacing | 79 with 1 mhz spacing |
|usage         | FHSS                  | FHSS |
|Modulation    | GFSK                  | GFSK, DQPSK, 8DPSK |
|Consumption   | 0.01 to 0.5           | 1 |
|Data rate     | 2, 1, 0.5, 0.125 Mb/s | 3, 2, 1 Mb/s |
|Network       | P2P or broadcast      | P2P |

Advertising channels do not interfere with WiFi channels  
Uses frequency hopping spread spectrum. Bad channels can be avoided  

Devices can act without connections, acting as beacons.   
An advertisement has 0-31 bytes.   
UUID is 2 bytes and is unique for Bluetooth SIG members.   
using advertisements can reduce connection costs.  
Connections could be accepted sporadically  

GAP layer is responsible for connection.  
GATT is used to transder data.  

Bluetooth 5 allows longer events and data packets  
Bluetooth 5 allows AoA and AoD for localization.  

## Cognitive Radio

All spectrum is allocated but most of it is unused. 

### Basic operation:
Check if channel is unused based on energy detector.
Send your packets
Stop when channel gets used. 

### Other sensing method
Cooperative methods: Voting or fusion of measurement data. 
Feature detection of sent signal. 

Database approach: asking google, or other authorities  
Most used for TV white spaces. WiMax: 802.22 or WiFi: 802.11af  

## RFID

Energy supplied by reader. 

System overview: Antenna, IC, Memory chip, Energy harvester  
Modulation happens by backscatter  
Sensor can be added to RFID chip. Example WISP  

### EPC C1 Gen2
EPC C1 Gen2 describes the protocol for all tags.   
Goal is to identify all tags  
Uses slotted aloha to communicate.  
Data symbols uses Miller encoding.  
Binary tree search to avoid collisions  

### Commands
Query: start inventory round  
QueryRep indicates beginning of slot  
Queryadjust adjusts the number of slots  
Command: Read/ Write / BlockWrite ETC  

## WLAN

802.11 committee formed in 1990  
WECA (Wireless Ethernet Compatibility Alliance) Later named WiFi boosted development

| Standard      | Transfer method.    | Frequency band | Data rate Mbps |
|-|-|-|-|
| 802.11 legacy | FHSS DSSS IR        | 2.4 GHz IR     | 1, 2 |
| 802.11b       | DSSS, HR-DSSS       | 2.4 GHZ        | 1, 2, 5.5, 11 |
| 802.11+       | DSSS, HR-DSSS       | 2.4 GHZ        | 1, 2, 5.5, 11, 22, 33, 44 |
| 802.11a       | OFDM                | 5 GHz          | 6, 9, 12, 18, 24, 36, 48, 54 |
| 802.11g       | DSSS, HR-DSSS, OFDM | 2.4 GHz        | 1, 2, 5.5, 11; 6, 9,  |12, 18, 24, 36, 48, 54 |

Data rates are dependent of modulation and coding rate  
Modulation: BPSK, QPSK, 16QAM, 64QAM,  
Coding rate: 1/2 3/4 4/5  

Frame forwarding: IBSS allows devices to communicate directly to each other, saves bandwidth  
BSS is more popular and AP has relay function, which allows management and powersaving  

BSS addressing contain a to and from DS (Distribution System) field  
ESS Extended Service set is created by combiniing multiple AP with their own BSS  

SSID (Service Set IDentifier) is the name of the network and also identifier  

Wireless APs can communicate by setting to and from DS as both one  

Transmission relies on explicit ACKs.  

### Three ways of error:
 1. PHY error: receiver cannot synchronize or cannot read header
 2. CRC32 Error: Incorrectly received bits
 3. ACK: Transmitter does not receive ACK, while it was sent. 

Collision detection happens at the receiver. 