---
title: Fundamentals of Quantum Information (AP3421)
author: Lectures by Leonardo DiCarlo and David Elkouss, Summary by Wouter Kayser
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
header-includes: \usepackage[braket, qm]{qcircuit}
---
## One Qubit Universe

### Description of a Qubit
A Qubit can be expressed as a "ket".

$$\ket{ψ} = α_o\ket{0} + α_1 \ket{1}$$

$$ \ket{0} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} \qquad \ket{1} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$$

Or also as a vector in the Bloch sphere. 

$$\ket{ψ} = e^{iδ} (cos(θ/2)\ket{0} + e^{iφ} sin(θ/2) \ket{1})$$ 

### Gates

Gates are unitary and give some sort of rotation. Gates are Unitary and Hermitian. 

$$ I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \qquad 
   X = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \qquad
   Y = \begin{pmatrix} 0 & -i \\ -i & 0 \end{pmatrix} \qquad 
   Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} $$

$$ H = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \qquad
   T = \begin{pmatrix} 1 & 0 \\ 0 & e^{iπ/4} \end{pmatrix} $$

Arbitrary rotation can be achieved with:
$$ R_n(θ) = cos(θ/2)I - i sin(θ/2) \hat{n} \overrightarrow{σ} $$

### Measurement

Outcome is either $m = +1 with \ket{0} \quad or \quad m = -1 with \ket{1}$ \\ $average = cos^2(θ)$. When measuring on X. When measuring on a different basis $\hat{m}$ the following will apply: 
$$\bar{m} = \bra{ψ}\hat{m}\ket{ψ}$$

## Multi Qubit System

### Qudit
Multiple qubits can also be summarized in a single ket. To storea a qudit $2 \cdot 2^n - n$ values are needed. 

$$ \ket{0} = \begin{pmatrix} 1 \\ 0 \\ .. \\ .. \\ 0 \end{pmatrix} \qquad
\ket{1} = \begin{pmatrix} 0 \\ 1 \\ .. \\ .. \\ 0 \end{pmatrix} \qquad
\ket{D-1} = \begin{pmatrix} 0 \\ 0 \\ .. \\ .. \\ 1 \end{pmatrix} $$

The tensor product is defined by: 

$$ A \otimes B  = \begin{pmatrix} A_{00}B & A_{01}B \\ A_{10}B & A_{11}B \end{pmatrix}$$

### Entanglement
When a state of a qubit can not be described without the state of another. The concurrence can be measured with the following formula: $C = 2 |α_0 α_3 - α_1 α_2|$.

### Multi Qubit Gate

Cnot is a controlled X gate, Cphase is a controlled Z gate, however it has no target or control. 

$$ CNOT   = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{pmatrix} \qquad
   cphase = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & e^{iφ} \end{pmatrix} $$

Universal gates: can create all states. A set of this is for example: CNOT, H, T.

Slovay Kitaev Theorem: number of gates needed to reach a certain error treshold. $$Gates = O(4^N log^4(\frac{1}{ε}))$$

### Encoding a Function

For a function a reversible gate is used. For The Y input often $\ket{0}$ will be used. 

$$ \ket{x} \otimes \ket{Y} \rightarrow \ket{x} \otimes \ket{y \oplus f(x)} $$

### Quantum parallelism 
Parallelism can be achieved using maximal Superposition

$$ \ket{0} \otimes \ket{0} \rightarrow H \rightarrow \frac{1}{\sqrt{N}} \sum_{x=0}^{N-1} \ket{x} \otimes \ket(0) \\
    \rightarrow \frac{1}{\sqrt{N}} \sum_{x=0}^{N-1} \ket{x} \otimes \ket(f(x)) $$

## Quantum Games & Algorithms

### Deutsch's Problem

Is a function balanced? It uses quantum phase kickback. 

$$
    \Qcircuit @C=0.7em @R=0.3em @!R {
        \lstick{q_{0}: \ket{0}} & \gate{H} & \multigate{1}{U_f} & \gate{H} & \meter & \qw & \qw\\
        \lstick{q_{1}: \ket{1}} & \gate{H} & \ghost{U_f} & \qw & \qw & \qw & \qw\\
        \lstick{c_{0}: 0} & \cw & \cw & \cw & \cw \cwx[-2] & \cw & \cw\\
     }
$$

### Simple Quantum Algorithm Layout
The H gates bring all inputs into superposition. U~f~ is the encoding of a function. U~P~ is the clever part.

$$
    \Qcircuit @C=0.7em @R=0.3em @!R {
        \lstick{q_{0}: \ket{0}} & \gate{H} & \multigate{1}{U_f} & \multigate{1}{U_p} & \meter & \qw & \qw & \qw\\
        \lstick{q_{1}: \ket{1}} & \gate{H} & \ghost{U_f} & \ghost{U_p} & \qw & \meter & \qw & \qw\\
        \lstick{c_{0}: 0} & \cw & \cw & \cw & \cw \cwx[-2] & \cw & \cw & \cw\\
        \lstick{c_{1}: 0} & \cw & \cw & \cw & \cw & \cw \cwx[-2] & \cw & \cw\\
     }
$$

### Grovers Search

Single qubit value set to one by the function, the rest to zero. $\ket{y} =\ket{1}$ for quantum phase kickback. 
U~p~ will be inversion about mean. As shown below. 
$$ 
    \Qcircuit @C=0.7em @R=0.3em @!R {
        \lstick{} & \gate{H} & \ctrl{1} & \gate{H} & \qw & \qw\\
        \lstick{} & \gate{H} & \control\qw & \gate{H} & \qw & \qw\\
     }
$$

### QFT
There are not enough fourier transforms in the world. This can be done with $n(n+1)/2$ gates. 
The result will be: $\ket{ψ} = (\frac{1}{\sqrt{N}}  \sum_{l=0}^N \sum_{k=0}^N  e^{i2πlk/N} \ket{l}\bra{k})$

$$
    \Qcircuit @C=0.7em @R=0.3em @!R {
        \lstick{q_{0}} & \gate{H} & \ctrl{1} & \ctrl{2} & \qw & \ctrl{3} & \qw & \qw & \qw & \qw & \qw & \qswap & \qw & \qw\\
        \lstick{q_{1}} & \qw & \targ & \qw & \gate{H} & \qw & \ctrl{1} & \ctrl{2} & \qw & \qw & \qswap & \qw & \qw & \qw\\
        \lstick{q_{2}} & \qw & \qw & \targ & \qw & \qw & \targ & \qw & \gate{H} & \ctrl{1} & \qswap \qwx[-1] & \qw & \qw & \qw\\
        \lstick{q_{3}} & \qw & \qw & \qw & \qw & \targ & \qw & \targ & \qw & \targ & \qw & \qswap \qwx[-3] & \qw & \qw\\
     }
$$

## Breaking RSA

### Basics of RSA

To set up RSA two primes are uses $p, q$ and $N = p \cdot q$. A value e will be calculates as $coprime (p-1)(q-1)$. Calculating the value d is a bit harder. $(de)mod(p-1)(q-1) = 1$

Encrypting is then done in the following way: $P_i = ((M_i)^e)mod N$.
Decrypting is done with the value d instead of e: $M_i = ((P_i)^d) mod N$.

### RSA with Quantum Computing

$f(x) = a^x mod(N)$ will be the function used for U~f~. r = period recieved from the qft. $p = GCD(a^{r/2} + 1, N) \qquad q = GCD(a^{r/2} - 1, N)$

a = values that are coprime. The goal is to find corresponding r. 

$x_{final} / T ≈ S/ r$ The value S is random. Which makes it hard to find a good value for r. Using continued fractions this can be easier to find values. 

$$
    \Qcircuit @C=0.7em @R=0.3em @!R {
        \lstick{q_{0}: \ket{0}} & \gate{H} & \multigate{1}{U_f} & \gate{QFT} & \qw & \meter & \qw & \qw\\
        \lstick{q_{1}: \ket{0}} & \qw & \ghost{U_f} &  \qw & \meter & \qw & \qw & \qw\\
        \lstick{c_{0}: 0} & \cw & \cw & \cw & \cw & \cw \cwx[-2] & \cw & \cw\\
        \lstick{c_{1}: 0} & \cw & \cw & \cw & \cw\cwx[-2] & \cw & \cw & \cw\\
     }
$$

### Cheating at RSA

A small choice of a leads to small r -> leading to few necessary registers. For any N=pq there is alwasys an "a" so that r = 2.

## Quantum Error Correction

Based on storing a quantum state in not a single qubit but in the entanglement.

### Indirect Measurement
The basic lies in indirect measurement shown in the next circuit. 
$$
    \Qcircuit @C=0.7em @R=0.3em @!R {
        \lstick{q_{0}: \ket{ψ}} & \qw & \gate{Y} & \qw & \qw & \qw & \qw\\
        \lstick{q_{1}: \ket{0}} & \gate{H} & \ctrl{-1} & \gate{H} & \meter & \qw & \qw\\
        \lstick{c_{0}: 0} & \cw & \cw & \cw & \cw \cwx[-1] & \cw & \cw\\
     }
$$

To fully protect a quantum state at minimum 5 qubits are needed. However Steane proposed a version with 7 and Shor one with 9, which are easier to implement. 

When looking at a protection circuit such as shown before, the measurement triggers when an error occurs that anticummutes with the measurement. The measurements are fed into classical logic that can calculate the needed adjustments. 

### Not really happy with this summary, but oh well. 