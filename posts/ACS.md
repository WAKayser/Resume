---
title: Advanced Computing Systems (EE4C07)
author: Lectures by Zaid Al-Ars, Summary by Wouter Kayser
date: October 2018
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
toc-depth: 2
toc: true
---

## Current Trends

### Microprocessor Trend

1. Single Thread: Many active transistors, higher frequency
2. Multi-Core: More active transistors
3. Hybrid: More transistors
4. Special Purpose: ---

### Multicore Processor

* 2+ general purpose processors
* single component
* sharing memory by component

### Multiprocessing

* Cluster
    - Network of servers
    - Suitable for independent tasks
    - high availability, scalable, affordable
    - Administration cost, low interconnect bandwidth
* Grid
    - Alternative name for cluster
    - However networked over the internet

### Power wall

Dynamic power consumption: $P_{dy} ~ C \times f \times \times V^2$.
Static power consumption: $P_{st} ~ I_{leak}$

Power comsumption: $P = ACV^2 f + VI_{leak}$
Maximum frequency: $f_{max} ∝ \frac{(V - V_{th})^(1<a<2)}{V}$
Current leakage: $I_{leak} ∝ exp(-\frac{qV_{th}}{kT})$

Solution to the power wall is to reduce the frequency and duplicate processors. 

### ILP WALL

* 80's Superscalar expansion: 50% per year improvement by pipelining: 10 CPI to 1 CPI
* 90's Era of diminishing returns: 2-way to 6-way issue, out of order issueing, branch prediction: 1 CPI to 0.5 CPI
* 00's multicore era: need for explicit parallelism

Effort needed to extract more parallelism is proportionally too high. 

### Memory Wall

Memory performance only increases about 9% per year, while processor perfomance grows 50% per year. 

### Scaling

Amdahl's law / Strong scaling $T_{new} = \frac{T_{parallelizable}}{N_{cores}} + T_{sequential}$ $Speed up = \frac{1}{(1-F_{parallelizable}) + F_{parallelizable}/ N_{cores}}$

Gustafson's law / weak scaling: Increase the problem size with the bigger processors. 

## Cores

### Types of multicore

* Homogenous: Multiple identical cores
* Heterogenous: Cores with differnet types of ISA
    - Difficult to design and program

### Core sizes

* Large cores: bulldozers
* Medium cores: chainsaws
* Small cores: termites

### Parallelism

* Multiple nodes: MPI
* Multiple cores: openMP
* Multiple functional units: SIMD

### Multithreading

* Fine grained: switch threads after each cycle, interleaving instructions, when one stalls another is executed
* Course grained: only switch on long stalls: easy hardware: high performance penalty
* Simultaneous: schedule instructions from multiple threads, instructions exevute ehen possible. 

### Trends
Simpler micro architectures, multiple simple cores might share resources better. 

### Amdahl's Law

N = basecore Equivalent, R = Core size

Homogenous $speedup = \frac{1}{\frac{1-F}{\sqrt{R}} + \sqrt{F \cdot R}{N \sqrt{R}}}$
Heterogenous $speedup = \frac{1}{\frac{1-F}{\sqrt{R}} + \sqrt{F}{\sqrt{R} + N - R}}$
Dynamic $speedup = \frac{1}{\frac{1-f}{\sqrt{R}} + \frac{f}{N}}$

## GPU

### Connection to CPU

* Classical: via controller connected ot pci bus to northbridge
* Modern: via direct pcie link to northbridge

### Graphics Processing pipeline

The sharders can be programmable.

1. Input assmebler
2. Vertex Shader (x)
3. Geometry Shader (x) 
4. Set-up & Rasterizer
5. Pixel Shader (x)
6. Output Merger

The programabble part became a unified processor array. 

### Programming GPU's

Can be seen as a grid of blocks, within a block, multiple threads exist. A warp is a set of threads that execute the same instructions. So no branch diverging in the same warp.

### GPU Memory

* Local memory: per thread
* Shared memory: per block
* Global memory: per application
* texture memory: 2d special read only
* constant memory: thread local read only

## Memory

### Access

* Uniform memory access: processors have equal access time: CC-UMA has hardware for cache coherency
* Non-Uniform memory access: processors connect to scalable network. Different access times for local and remote

### Technology

* SRAM: registers and cache
* DRAM: main memory and cahces: sometimes off chip L4 eDRAM
* TSV (Through Silicon Vias) on top of die memory, high bandwidth, low power

### Coherence

* Update based protocol with snooping: broadcast address and value
* Invalidation based protocl with snooping: broadcast address to invalidate

### Roofline model

Plot wiht Y axis equals performance (flop/s), X axis Arithmetic intensity (AI Flop/Byte). Line also shows bandwidth. 

## Interconnect

### Link Level

Messages -> Packages -> Flits -> Phits
Asynchronous depends on handshake, while synchronous needs a clock. 

### Switch Level

Buffer control of router
Circuit switching: long set-up time
Store & Forward: Data is advanced one router if possible
Virtual Cutthru: Do not wait for entire packet before sending to next
Wormhole: small buffer virtual cut threu whole of line blocked.

### Input mechanism

Polling: Periodically check status register: timing predictablie, cheap hardware, higher latency
Interrupt: Controller interrupts CPU, unpredictable behaviour can occur. 

### I/O Data Transfer

Polling and interrupt driven I/O
Direct Memory Access

### Disk Access Performance

Seek Time / 4 + 1/2 / RPM / 60 + Sector size / transfer rate + controller delay = average read time. 

## Power

### Reduction Techniques

* Fabrication desing: tile based power reduction, interconnect based power reduction. 
* Runtime: local power management: voltage scaling, global power management: per core; processor; processor cluster

### Voltage Scaling

$EPO = Power * TPO$ Sweeet spot at medium Vdd. 
Reducing V~th~ increases static power. 
$f_{max} = b (V - V_{th})^a / V$ 1 < a < 2
Power comsumption: $P = CV^2 f + k V^2

### Other Techiques

* Pipeline gating: stop fetching instructions if a hazard is expected
* Slack scheduling: execuiute instructions when data is ready
* Clock Gating: turn of components when not in use
* Bus SegmentationL Split bus to reduce fan out
* Low Swing bus: reduce voltage in bus
* Adiabatic bus: reduce driving by shortening to half

### Amdahl's Law

k = fraction of power in idle state

Big cores $W = 1 + \frac{(n-1)k(1-f)}{(1-f)+\frac{f}{n}}$ $\frac{Werf}{w} = \frac{1}{1+(N-1)k(1-f)}$

s~c~ = fraction performance, w~c~ = fraction power, k~c~ = fraction static power

Small cores $W = \frac{w_c + (n-1)w_c k_c (1-f)}{(1-f) + \frac{f}{n}}$ $\frac{Perf}{W} = \frac{s_c}{w_c + (n-1)w_c k_c (1-f)}$

Heterogenous optimal perf/watt is dependent on parallizable point. 

### Dark Silicon  

Number of cores * Area per core must be smaller than the area budget. 
Number of cores * power per core mus be smaller than the power budger. 

Dark silicon = Number of cores over the number of cores that fit. 