---
title: Networking (EE4C06)
author: Lectures by Piet Van Mieghem, Summary by Wouter Kayser
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

## Representation of Networks

Network is service and topology.
* Service is software or a process.
* Topology is hardware or structure.

A Graph is a set of N nodes (vertices) and L links (edges).

Graph Representations
* List of neighbors
* List of links
* Adjacency Matric A: each entry is the existence of a link
* Incidence matric B: column represents a link, each row a node, 1 = source, -1 = destination
* Laplacian Q  $Q = B B^T = Δ - A$ Δ = diag(degrees). $Qu = 0$ u is an eigenvector of Q belonging to eigenvalue μ = 0.
* Weighted Adjacency W

Classes of Graphs
* Tree $L=N-1$, also same time as star or path
* Ring $L=N$
* Complete graph: All links possible are made: $L=N(N-1)/2$
* Regular Graph: all nodes have the same degree
* Lattice in D dimensions
* Null Graph $A = 0$
* Complement G~c~ $A^c = J - I -A$ J is the all ones. 

## Graph Metrics

### Degree

Average = 2L/N $d_j = A^2_{jj}$. 
At least two nodes have the same degree. The number of odd degreees is even. Existence of degree N-1 rule out 0. q
Power Law $Pr[D=k] ~ K^{-τ}$

### Clustering

Measures local density $c_g (v) = \frac{2y}{d_v(d_v -1)}$ $C_g = \frac{1}{N} \sum^N_{v=1} c_g (V)$
y = number of links between neighbors. d_v is the degree of node v. 

### Hopcount

Amount of steps in a walk. $P^* i -> j$ is the shortest path. Diameter ρ of G: hopcount of longest shortest path.  Average Hopcount: E[H] is a measure for "Efficiency".

### Betweenness

Betweenness exists for both nodes & links. It is the number of shortest paths traversing it. $E[B_l] = \frac{1}{L} \binom{N}{2} E[H_g]$. 

### Degree Assortativety

Correlation of degrees on both sides of link. 
$ρ_D = \frac{E[D_{l+} D_{L-}]- E[D_{L+}] E[D_{l-}]}{\sqrt{Var[D_{l+}]Var[D_{L-}]}}$

### Connectivity

Minimum to remove to disconnect the graph. λ(G) for links, κ(G) for nodes. $κ(G) ≤ λ(G) ≤ D_{min}(G) ≤ 2L/N$. 

## Spectrum

$$Ax = λx$$ The eigenvaluies are the zeroes of the polynomial $det(A-λI) = 0$

Eigenvalues can be ordered $λ_Ν ≤ λ_{N-1} ≤ ... ≤ λ_2 ≤ λ_1$_

If symmetric $A = A^T = XΛX^T = \sum_{k=1}^N λ_k x_k x^T_k$
This also means that $A^m = \sum_{k=1}^N λ_k^m x_k x^T_k$

Eigenvectors are orthogonal. 

$λ_1 ≤ d_{max}$ 

Algebraic connecticity $a(G) = μ_{N-1}$. This quantifies the connectivity of the graph. If it is zero the graph is disconnected. 

The nmumber of thriangles $N_t = \frac{1}{6} \sum_{k=1}^{N} λ_k^3$

$d_max ≥ λ_1 ≥ \frac{2L}{N} = E[D]$ $λ_1 ≥ E[D] \sqrt{1 + \frac{Var[D]}{(E[D])^2}}$

centrality metrics for node i: $(x_j)^2_i ∈ [0,1]$ j = 1 gives the number of walks through node i.

### Graph partitioning

Indexvector y defining with a 1 and -1 if the node is is G1 or G2. The number of links between G1 and G2 is given by $R = \frac{1}{4} \sum_{l∈L} (y_{l+} = y_{l-})^2$ or also in the laplacian form $R=\frac{1}{4} y^T Q y$.

The Fielder eigenvector Z~N-1~ belongs to the secopnd smaales eigenvalue of the Laplacian Q.
Α subgraph G~1~ can be defined by the nodes j that obey (Z~n-1~)~j~ > γ.  γ=0 represents two subgraphs that are equivalent in connectivity. 

## Network models

### Edros-Renyi: Complete Graph

Probability P that a link exists $E[L] = N(N-1) P /2$. Critical connectivity $P_c ~ log(N)/N$.

$σ^2_λ = Var[λ] = E[D$. Skewness or lack of symmetry is given by: $S_λ = \frac{3(triangle_G)}{L\sqrt{E[D]}}$

Semi-circle law E[λ_1] = P(N-2) + 1

### Power Law: Barabasi-Albert

Degree distribution: $Pr[D=k] = ck^{-τ}$. 
Creation: attach new nodes to high degree nodes. 

1->2: no large power law. E[H] and E[D] diverge and E[D^2^] diverges. D_{max} grows faster than N. E[H] ~ constant.

2->3: scale free regimen: E[D] is finite:  E[D^2^] is infinite: $D_{max} = N^{1/(τ-1)}$: $E[H] ~ log(logN)$

3->4: Random regimen: E[D] and E[D^2^] are finite: $D_{max} = N^{1/(τ-1)}$: $E[H] ~ \frac{logN}{log(E[D])}$

## Electrical Networks

There are two types of transport: 

 * Flow -> Equations and physics
 * Packets -> Protocols and Rules

### Linear dynsmics

$X= Q \cdot V$ $By = X$ x = injected current. v = nodal potential vector. y = current vector. 
$y = diag(\frac{1}{r_{ij}})B^T v$  based on the laplacian:  $\tilde{Q} = \tilde{Δ}-Α$ for a single value: $\tilde{a}_{ij} = B diag(\frac{1}{r_{ij}})B^T$

### Pseudo inverse of Laplacian

$Q^† = \sum^{N-1}_{k=1} \frac{1}{μ_k} Z_k Z_k^T$  This can be used in the following way $V = Q^† x$.  The same as the degree vector is:$ζ = trace(Q^†)$

### Effective resistance matrix

Per node: $ω_{ab} = Q^†_{aa} + Q^†_{bb} - 2Q^T_{ab}$. 
Effective resistance matrix is: $Ω = uζ^T +ζu^T - 2Q^†$
Effective Graph Resistance is defined as $R_g = \frac{1}{2} u^T Ω u  = N trace(Q^†)$

The sum over all weighted links of the effective resistances ω~ij~ is: $\sum_{i~j} \frac{ω_{ij}}{r_{ij}}.$

Weighted star: $v_n = \frac{\sum^{n-1}_{k=1}\frac{v_k}{r_{kn}}}{\sum^{n-1}_{k=1}\frac{1}{r_{kn}}}$

### Power dissipation

$℘= \sum_{l=1}^L (\frac {v_{l+} - v_{l-}}  {\sqrt{r_l}})^2$

The best spreader has minimum $Q_{ii}^†$.

### Closeness 

$Cl_i = \frac{1} {\sum_{j∈G\\(i)} H(P^*_{i -> j})}$
Only shows one path. $Q_{ii}^†$ is easier analytical and combines multiple paths. $Q_{ii}^† ≤ \frac{1}{N} Cl_i^{-1}$

## Robustness

Power law distribution of cascades: $Pr[S=k] ~ k^{-α}$ α = avalanche exponent. 

R-Model $R = \sum^m s_k \cdot t_k = s^T t$ s=service and t=topology.

Issues:
* Linearity, dimensions can grow fast
* dependence of metrics
    - clustering of metrics
    - eigenvector components of graphmatrices as metrics
    - normalization, how to compare graphs
    - hard to find service vector
        + service decomposition

Connectivity is the most intuitive for the R-model. 

Robustness enveloppes shows the robustness under several different attack methodologies. 

## Traffic Management

Information Rate s(t) Average E[S] (λ) Burstiness = Max(S) / E[S] (b)
Peak Channel Rate = 1 / T~min~ = PCR. 
Sustainable Channel Rate = 1 / T~scr~

Statistical Multiplexing: combine streams to reduce bandwidth

Token bucket: output is constant rate λ, with a buffer is b. 

Quality of service: loss = CLR = Cell Loss Ratio: Delay (maximum and variance.)

CAC (Connection Admission Control): Acceptance rules for new request in order to assure QoS

Congestion could collapse systems. 

## Scheduling

* HoL (Head of Line): Always serve high priority packets in buffer first
    - Preemptive: interrupts low priority traffiv and places it in the back of the buffer
    - Non-Preemptive: waits till current packet is done
* PBS (Partial Buffer Sharing): above threshelod new low priority is not accepted in buffer
* POB (Push-Out Buffer): if the buffer is full a high priority can take the place of a low priority.
    - LIFO: last entered low priority is discarded
    - Random: random low priority is discarded
    - FIFO: First enetered low priority is discarded. 