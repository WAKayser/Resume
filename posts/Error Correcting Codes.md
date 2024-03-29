---
title: Error Correcting Codes (ET4030)
author: Lectures by Jos Weber, Summary by Wouter Kayser
date: June 2019
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

## Introduction

### Channels

Binary Symmetric Channel (BSC) Equal chances to have a bit flip. Binary Asymetric Channel (BAC), also called a Z channel where only one of the states ccan flip into the other. Binary Error-Erasure Channel (BEAC) which is similar to the BSC but also has a chance to reach a third erased state. 

### Error types

Random errors are nicely distributed throughout the entire sequence. Burst errors are groups of bit errors. Not many codes are designed for this, but interleaving can solve this. Burst errors can be described using the Gilbert model. Which is somewhat like a markov chain with a good and bad state. 

### Other Basics

The simplest form of coding is the repetition code. Where the desired bit is repeated. However this is not very efficient. 

ARQ can be used when an error is detected to request a good copy. 

## Mathematical Basics

### Group

A group is a set G with an operation *. The following things must hold:

 * $a, b * G; a * b ∈ G$.
 * $a, b, c ∈ G; a * (b * c) = (a * b)c$
 * $e ∈ G; a = a * e$
 * $a, a^{-1} ∈ G; a * a^{-1} = a^{-1} * a$

For an abelian group it also holds that $a * b = b * a$.

### Field

Set F with operation + and * such that

1. F, + is an abelian group with e=0
2. F \ {0}, X is an Abelian Group
3. a * (b + c) = a * b + a * c   distributive law.

### Finite Field

Field with a finite number of elements. Its number of elements is its order. The order is always a power of a prime number $q = p^m$. Field of order q => GF(q). $a^n = a^{q-1} = 1$. a can generate all elements using a^x^. When using GF(prime) then {0, 1, ..., p-1} with calculation mod p. 

When looking at the multiplication table that rows or columns that contain all possible results are indicative of the primitve elements which generate GF(prime). polynomials can also be defined over GF(q) where F~n~ * x^n^ is thne the biggest term. All operations are doen in GF(q). For example a division is a classic 'Staartdelen'. A polynomial is irreducible if f(x) can not be divided by a polynomial with degree larger than zero and smaller than the degree of f(x).

### Construction of GF(q)

q = p^m^with p prime. p(x) is a polynomial over GF(p) of degree M which is irreducible and a divisor of x^q-1^-1 but not for x^j^ - 1 for j < q-1. That last part would mean it is reducible?  Define α as a root of p(x); p(α) = 0.
Then α generates a field GF(q). Then the values a^x^ can be simplified used the formula p(a) = 0. The resulting exponentials can be expressed in an m-tuple. Multiplications in gf(q) are done using the power representation, while additions are done using the m-tuple representation.

### Minimal polynomial

the minimal polynomial Φ(x) is defined as the polynomial of GF(p) of smallest degree such that β is a root. β = α^j^.  β = β^E^ E = p^e^ then Φ(x) = (x - β)(x-β^p^)(x-β^pp^)...(x-β^E/p^).

### Vector space

Let V be a vector set with an addition operation; Let F be a field; V is a vector space F if:

1. V is an abelian group
2. $a ∈ F; v ∈ V  THEN  a \cdot v ∈ V$
3. $a,b ∈ F; u, v ∈ V THEN a( u + v ) = a \cdot u + a \cdot v; (a+b) \cdot v = a \cdot v + b \cdot v$
4. $a,b ∈ F; v ∈ V THEN (a\cdot b) v = a(b \cdot v)$
5. $1 \cdot v = v$

### Subspace

A subset S of V is a subspace of V if 

$∀ a, b ∈ F; u, v ∈:  a u+ b v ∈ S$

Each subspace is generated by a set of linear independent vectors; k is the dimension of S. 
There is also the dual space $S^⊥$ which is orthogonal to the subspace. The dimension is n-k. 

## Fundamentals of Block Codes

### Block code concept

Alphabet A {α~0~, α~1~,... ,α~q-1~} often just A ={0,1}
Vector space V~n~ ={{a~1~, a~2~,... ,a~n~}} with $a_i ∈ A$
Block code C is a subset V~n~ . |C| is the cardinality of the code = # codewords = # messages. 
n is the length of the code. 
R = (~q~log |C|)/n is called the code rate. 

if C is a subspace of V, n of dimension k, then C is called a linear (n, k) block code. $R = \frac{k}{n}$

### Hamming Distance

The hamming distance is defined as the number of positions in which two vectors differ. The distance between a vector __a__ and the all-zero vector __0__ is called the weight w(__a__) of the vector __a__. The hamming distance d of a code C is defined as the smallest distance between any to code words. In linear codes this is equal to the minimum weight. C van correct t errors d ≥ 2t + 1; C can detect s errors d ≥ s+1; linear block codes may also be denotes as (n, k, d) codes. 

### Code Description by Matrices

A linear code can also be generated by taking the linear combinations of the basis vectors. The k * n matrix which contains these basis vectors as rows is called the generator matrix G. codeword __x__ = information vector __u__ * G.
A systematic code shows the information vector in the first btis. Part k * k of G is the identity matrix. 

If the generator matrix G = (I~k~ | P) then the parity check matrix H = (-P^T^| I~n-k~)

### Hamming Codes

hamming codes are defined via the parity check matrix. The columns are all the possible columns except for the zero column. H = m * (2^m^ - 1). n = 2^m^, k = 2^m^ - 1 - m, d = 3. This means that hamming codes are single error correcting. 

This is what you use when you want a distance of three.

### Syndrome Decoding

The syndrome __s__ of a received vector __y__ is defined as __s__ = __y__ H ^T^. An error has occured if __s__ ≠ __0__. Error correction happens by looking for a vector of length n with syndrome __s__ and minimal weight among all vectors. 

A coset of a code C is the subset of V~n~ given by $C + a = {x + a | x ∈ C}$. The coset leader is the vector with minimum weight. 

The standard matrix has for each row an entire coset. The coset leader is customary in the first column. in correction mode the syndrome is calculated and from that the coset leader is derived. This is than used as the estimate of the error. 

The easier version is to find which column of the H matrix is equal to the syndrome. That bit needs to flipped in __y__.

### Shortening, Puncturing, Extension

Shortening: (n,k,d) code -> (n-a,k-a,d) code for any integer 1 ≤ a ≤ k-1. This shortens the code length and leaves the hamming distance the same. 

puncturing: (n,k,d) code -> (n-a,k,d-a) code for any integer 1 ≤ a ≤ d-1. This shortens the code by deleting a parity bit. This also reduces the hamming distance. 

Extension: aka reverse puncturing (n,k,d) code -> (n+1,k,d+1) for any odd d. This increases the hamming distance by one. This means that one error can be detected. 

### Interleaving

To combat burst errors the data can be interleaved. This increases the delay however due to the fact that additional buffering is needed. Interleaving is determined by the interleaving depth. This is often done by storing the codewords in a matrix with n columns (code length) and s rows (interleaving constant). then first all the first bits of each code are sent then all the second bits etc. 

## Cyclic Codes

### Code Description by Polynomials

When you have an (n, k, d) code over GF(q). 
The information polynomial is given by u(x) = u~0~+ u~1~ x + u~k-1~ x^k-1^ with $u_i ∈ GF(q)$. 
The generator polynomial is then similar: g(x) = g~0~+ g~1~ x + g~n-k~ x^n-k^ with $u_i ∈ GF(q), g_{n-k} = 1$. 
The code polynomial is the result of the multiplication. 

To obtain the systematic encoding an extra procedure is needed. 

1. Multiply u(x) by x^n-k^.
2. Divide u(x) * x^n-k^by g(x). r(x) is the remainder
3. c(x) = u(x) * x^n-k^ - r(x)

### The Cyclic Property

A code C is cyclic when g(x) is a divisor of x^n^ - 1. 
A generator polynomial can be created by taking product of a number of irreducible polynomials. 

The parity-check polynomial is given by $h(x) = \frac{x^n -1}{g(x)}$. 
A G and H matrix can than still be derived. This is then the toeplitz structure for G this is derived from the g(x) as a row vector from 0 to n-k and for H this is derived from the row vector from h~k~ to h~0~.

### Encoding and Decoding

Syndrome decoding:

1. Divide y(x) by g(x), the remainder is the syndrome s(x).
2. Look for the error polynomial e(x) with syndrome s(x) which has minimal weight. 
3. The estimate will then be y(x) - e(x)

Shift registers can be used to implement the division. 

### BCH Codes

BCH: Bose, Chaudhuri & Hocquenghem

Two parameters m and t are used to define the codes. m ≥ 2, 0 < t<^m-1^.
They are cyclic codes with g(x) equal to the least common multiple polynomial of minimal polynomials of α, α^2^, α^3^, ..., α^2t^. in GF(2^m^). 

length: n= 2^m^-1
dimension: k ≥ 2^m^ -1-mt
distance: d ≥ 2t + 1

### Reed-Solomon Codes

RS: Reed-Solomon codes operate over GF(2^m^).
Two parameters m and t are used to define the codes. m ≥ 2, 0 < t<^m-1^.
g(x) = (x + α)(x + α^2^ + α^3^...(x + α^2t^))

alphabet: GF(2^m^)
length: $n = 2^m - 1$
dimension: $k = 2^m - 1 - 2t$
distance $d = 2t + 1$

binary representation of the G matrix. 

The first step is to take for each row also itself multiplied with α, α^2^, ..., α^m-1^. Then these values can be expressed using their  m-tuple representation. Leading to an m*m binary representation for each symbol in the G matrix. 

Any binary burst error of length ≤ m(t-1) + 1 can be corrected. Busts of length m(t-1) + 2 is not guaranteed to be corrected. As it might span too many blocks of m.

## Block Codes: Co-operating codes

### Product Codes

Product codes are derived from a C~1~ and a C~2~. They are assumed to be systematic in the beginning. The length, dimension, distance are all products of the C1 and C2 codes length, dimension and distance. They both need to operate in the same alphabet. 

length | k~1~ | n~1~ - k~1~ 
----|------------------|----------------------------
k~2~ | Info / original code | Checks C1
n~2~ - k~2~ | Checks C2 | Checks on Checks

Decoding is done by either first solving the rows or columns and then secondly decoding the other way around. 
This results in having only short codes to solve for, which reduces complexity. It also protects against combinations of random and burst errors. 

The simple decoding scheme provided above does not have the ideal performance as suggested by the hamming distance. 

### Concatenated Codes

AKA using the symbols that come out of the inner code as the input for the outer code. 
The inner code has an aphpabet of GF(q) and the outer code has an alphabet of GF(q^k^).
The length, dimension, and distance are once again the products. 

Encoding happens as follows:

1. The input of the entire scheme is a sequence of kK q-ary information symbols. 
2. The sequence is first considered as a vector __a__ consisting of K q^k^-ary coordinates. 
3. This is then encoded into a codeword __c__ according to the outer code. 
4. Each of the N q^k^-ary coordinates of __c__ is considered as a q-ary k-tuple __u__. 
5. This can be encoded into a codeword __x__ with the inner code. 

The result is N q-ary vectors of length n. 

This can then be decoded by first applying the inner code and then the outer code. Which is basically the reverse of the encoding process. 

This process can be considered as a big q-ary block code. However in this construction the encoding and decoding operations operate on shorter codes.  

The inner code takes care of random errors and the outer code takes care of burst errors. This means that the two codes can be designed somewhat orthogonally. 

## Soft-Decision Decoding. 

### Introduction into Soft-Decision Decoding

Instead of making a hard decision and looking at the hamming distance between the codewords and the output of the demodulator. The decoder can also take a look at the channel output and calculate the euclidean distance between the binary code word and the received sample values. 

The trade off of this system is that the complexity is higher, while offering better performance. 

### Chase Decoding Algorithms. 

Reliability-based decoding technique for binary block codes. Turbo codes are based on a version for this for block codes. 

A chase decode is uses an iterative process in which in each trial the most unreliable received bits are inverted before decoding. Then from all of the trials the result with the lowest euclidean distance is then chosen as the final decoder output. 

Multiple algoritmes where proposed by Chase to generate all the test patterns. They are ordered in decreasing complexity and in decreasing performance. However all versions achieve an improvement in performance over the hard-decision decoder. 

1. all possible test patterns with weight ≥ d/2. 
2. all possible patterns but with the at least n - (d/2) most reliable positions fixed. 
3. invert (0, 2, 4, ..., d+1/2) least reliable bits for each trial. 

Chase 3 with d/4 still provides good performance. And more specific test sets can be defined in similar ways. However this is depenedent also on the channel. 

## Convolutional Codes

### Convolutional Codes Basics

Encoding of information stream rather than information blocks. It has a memory where the last M values also influence the next results. They are easy to implement with a shift register (k inputs, n outputs). Often a k of 1 is chosen. 

The code can easlily be described as a set of generator matrices. __C__ = __I__ * G. This generate a set of n-tuples for each column of the generator matrix. all generator polynomials for the inputs can be summed. 

A scalar matrix can be derived from a generator matrix by factoring it out into the m-tuples per power of X. from the set of m tuples a matrix can be defined where each row is offset to the right by one tuple. 

A state diagram can also be defined where each state symbolizes the state of the memory. Each input is then the trigger to go to a different state. Each state change also has a corresponding output tuple. 

A trellis diagram can also be used. This is also called the state diagram in time. Each column will represent a slice in time and has each possible memory state. Then from each state arrows are drawn to the next state in time. Those are then also labeled with their output.

Often when ending a convolutional codes some more zeros are appended to the the input so that also the memory gets reset and some more output containing information gets created. So time ends at t=L+M where t is the length of the input sequence. 

### Viterbi Decoding

one method to decode the sequence is by also implementing the trellis diagram at the receiver. Then for each state transition the supposed output is compared to the received sequence this hamming distance is then set as the weight of the link. Then the shortest path from the beginning to the end is calculated. This is then also represents the most likely original sequence. However this is an exponential algorithm since it has to test all the possible input sequences. 

A better solution is then to take this graph with all the link weights ant take an algorithm which acts more like dijkstra. Where the for each new slice in time the shortest path is calculated based on the knowledge of the last slice in time. 

Wherever the hamming distance is used, the analog weights can also be used to perform soft-decision decoding. 

### Sequential Decoding

For sequential decoding another representation is used. This is called the tree representation. The start of the tree is the all zero state. Then each branch is another input. Each link has their own output. usually afterwards only on branch leaves the tree where the zero words are sent to clear out the last bits of information. 

For the decoding a special metric is derived. This is also called the fano metric. 

$$ μ_F (x_i) = \sum_{j=1}^{n_i} (log_2 \frac{P(y_j | x_{ij})}{P(y_j)}-R) $$

This fano metric is a mapping from the hamming distance to a more punishing value for worse results. 

This fano metric is once again summed over the entire path in the tree. This method achieves a speed up due to only looking into the most promising paths. Once a complete path is achieved this will be the final result. It can be that this is not the optimal solution. Also time and space consumption is variable. 

## Iterative Decoding

### Iterative decoding example

When using a binary erasure model without errors an exhaustive search can be applied. The received vector will be compared to all codewords. Only the vectors that match in the non erased bits are part of the solution. The solution is only succesfull if only one matches. A code with distance d can correct at most d-1 erasures. This method is optimal, but too complex for large codes.

An iterative method can be derived from using the parity check equations. These can be derived from the parity check matrix, where each row should equal zero. In the iterative process the formulas are checked round robin style to see if they can correct an error. Each formula can solve one erasure. This solution is not optimal. 

### Turbo Codes

Turbo codes can be implemented with simple components (simple convolutional or block codes, interleaver, soft-decision decoder, etc.). It is using an iterative decoding process, using log-likelihood ratios. 

Turbo coding makes use of Recursive Systematic Convolutional Codes (RSC). The first output of the code is equal to the input of the memory. They are also recursive by adding the output of the last memory cell into the cells before. One thing that can be done is omiting the check bit half the time to obtain an 2/3 code rate. 

The output of a turbo encoder is created by mergin three bit streams:

1. Information bits generated by the data source. 
2. Checkbits generated by code C1 this is an systematic encder and either a block or convolution code. 
3. Checkbits generated by feeding an interleaver and then fed into an encode with code C2. 

C2 is often the same as C1, but does not have to be. This is called an asymmetric turbo code. 
The code rate can be calculated with $\frac{R~1~ \cdot R~2~}{R~1~ + R~2~ - R~1~ \cdot R~2~}$.

Puncturing techniques can be applied by merging C1 and C2 at a a slower rate than both one per information bit. 

Decoding is done using two decoders that are both SISO (Soft-Input/Soft-Output), which is eiterh a Maximum A Posteriori (MAP) or a Soft-Output Viterbi Algorithm (SOVA). Using Interleavers and De interleavers the output of the two decoders are fed back into the other one. After several iterations, the decoders have learned from each other and a hard output can be calculated. 

Log likelihood ratios is the log of the division of the likelihood that u is positive by the likelihood it is negative. $L (u~1~  ⊕ L~2~ ) ≈ sign(L(u_1)) \cdot sign(L(u_2)) \cdot min {|L(u_1)|, L(u_2)|}$

### LDPC (Low-Density Parity-Check) codes

LDPC code with iterative decoding based on belief propagation has been shown to achieve an error performance only a fraction of a decibel away from the Shannon limit. 

An LDPC is based on a larger Parity Check Matrix. Where a normal parity check matrix would be (n-k) * n. A LDPC code would use an H of size J * n, which n-k ≤ J ≤ 2^n-k^. This H matrix still has a rank of n-k.

Definition of Regular LDPC code

1. Each row of H consists of ρ 1's
2. Each column of H consists of λ 1's
3. The number of 1's in common between any two columns is no greater than 1
4. Both ρ and λ are small compared to the number of rows and columns in H. 

If 1 and 2 are not statisfied then it is an irregular LDPC code. 
The density of the matrix is given by: $r = \frac{ρ}{n} = \frac{λ}{J}$. for a J * n H matrix. 

Encoding is done by splitting up the parity check matrix in two parts. First only the n-k linear independent rows are taken. A is then defined as the square n-k * n-k matrix in the front while B will be the k * n-k matrix at the back. The check bits are then calculated as follows. __p__^T^ = A^-1^ * B __u__^T^. 
The final codeword will be (__p__,__u__). Where __u__ is the original information. This method may be too computationally intensive for large codes.  

A code can also be represented as a Tanner Graph. At the top are the variable nodes, one for each symbol in the code. The bottom has check sum nodes, one for each parity check equation. The connection between the nodes is dictated by the parity check equations. An important aspect is the girth of the graph. Which is the smallest amount of paths to traverse to end up at the beginneingen. This is also called an cycle. Cycles of length of 4 should be avoided. 

An option to construct parity-check matrices is to use finite geometries and combinatorial designs. 
Another way of constructing codes is using a semi-random method. This is done by first making H~1~ consisting of rows containing in the start a set of ones as lang as ρ and for the rest zeroes. Then in the next row the sequence is repeated but then shifted over ρ to the right. This is then done untill all posibilities are reached. The next step is to take λ permutations of the H~1~ and put them in a column. A totally random choice for the permutations should create an excellent code. 

Bit flipping decoding of LDPC Codes.
1. Compute parity check sums for the received bits. 
2. Compute the number of failed parity-check equations for each bit. 
3. Flip the bits which contribute most to the error. 
4. This can then be repeated until the syndrome is zero or the iteration limit is reached. 

Decoding based on belief propagation. A popular algorithm is called the SPA (Sum-Product Alogrithm), which is a symbol-by-symbol soft-in, soft-out iterative algorithm. 

An algorithm is proposed below. The message between the nodes are calculated using log-likelihood algebra. 

1. Messages are sent from the variable nodes v~i~ to the check nodes s~j~. The message from v~i~ to s~j~ is the sum of L~i~, which is the log likelihood value of the i^th^ bit merely based on the observation from the channel and the received values from the check nodes connected to v~i~, except the value originaing from the check node s~j~ under consideration. 
2. The message from v~i~ to s~j~ is calculated as follows using the log likelihood formula discussed earler. Consider all received values by s~j~, except the one from the variable v~i~ under consideration. The sign of the generated number is the product of the sign of these values, while its absolute value is the minimum among their absolute values. 
3. Variable node estimation. After each iteration, the n code bits c~i~ can be estimated by calculating for each v~i~ the sum of all its inputs. If the sum is positive the bit estimate is zero, otherwise it is one. The absolute value is an indicater for the confidence. 

## Applications

### Space and Satellite Communications

Almost exactly modeled as the memoryless AWGN channel. As there are no obstacles or other correlated noise. A lot of bandwidth is available. Powersavings is resulting in big financial savings. 

The Mariner Viking missions used a very low code rate of 6 / 32 Reed Muller code (32, 6, 16), a bit error probability of 10^-5^ was reaced at 3.2 dB. 
The Pioneer missions used a convolutional code of rate 1/2. However they used a vaery high constraint length of K=32. This meant that viterbi decoding was impossible, so sequential decoding was used instead. The same bit error rate could already be used at 2.7 dB.

NASA / ESA Planetary Standard code. Rate = 1/2 K = 7. Due to the low memory length optimal viterbi decoding can be used. It has been used for satellite communication and cellular telephony. It only was able to get the same decoding rate at 4.5 dB. However the implementation is much simpler. 

CCSDS Standard Concatenation Scheme: planetary standard as inner code, (255, 223, 33) Reed-Solomon code over GF(256) as outer code. Also has block interleaving between outer and inner code. The code rate is 0.44. A bit rate of 10^-5^ can be reached at 2.5 dB. The inner code can still be implemented using a viterbi optimal solution. 

Galileo Missions to Jupiter. Rate 1/4; K 15; uses the famous big viterbi decoder which could decode at 1 MB/s. A bit error probability oof 10^-5^ can be achieved at 1.7 dB. This can also be combined with the (255,223,33) Reed-Solomon outer code. Then with a rate of 0.22 the code can still be decoded at 0.9dB. This is achieved by sacrificing bandwidth, but this is plentiful in space. 

In the future turbo codes will probably used, as the hardware is easy to make and the perfomance is graat. At a half rate the bit error rate of 10^-5^ can also be reached at 0.7 dB. 

### Mobile Communications: GSM

Both block and convolutional codes are applied. The CRC code is of the block type and is used for error detection. Other codes of the block type, used for error correction are the BCH codes and Fire codes (for bust error correction).

The full rate speech encoder produces a block of 260 bits every 20 ms. These 260 bits are split into three sensitvity classes:
* class 2 contains 78 bits which are rather insensitive to errors and are unprotected
* class 1a contains the 50 most significant bits, which are protected by three CRC check bits. 
* class 1b contains the remaining 132 bits

The 50 +3 + 132 class 1 bits are encoded with a rate 1/2 convolution code with a memory of bits. This is will then be decoded with a viterbi decoder. When the class 1a contains an error the entire moment is concealed. 

### Audio Recording: CD

Error Control for the CD system is based on: Reed-Solomon Codes, Cross-Interleaving, Eight-to-Fourteen Modulation EFM, Synchronization Patterns, Error/Erasure Decoding Techniques, Interpolution.

A group of 8 bits is considered to be one symbol from GF(256). A frame consists of six sumples. A sample is 2 * 16 bits. A frame is 24 audio symbols. These are taken as symbols for the (28,24,5) Reed-Solomon code over GF(256). Then cross-interleaving is applied to depth 28, and the resulting 28 symbols in a column of the interleaving scheme are using a shortened (32, 28, 5) Reed-Solomon code, again over GF(256). One "Control & Display" symbol is added per frame. So there are 32+1 data symbols. 

Next, the eight bits from each symbol are mapped to a sequence of 14 bits accoring the EFM code. Three merging bits are inserted after each EFM codeword. Finally a synchronization pattern of 24 bits also with three merging buts is added to the frame. 

(d,k) constrained sequence: binary sequence with at least d and at most k zeros between two consecutive ones. A one is represented by a transition in the level on the disk. When there is no transition there is a zero. The number of zeros should not be too small (in order to avoid ISI) and also not too large (for synchronization). 

EFM is a (2, 10) constrained sequence of length 14. There are three merging bits added to maintain the (2,10) constraint over the entire sequence. 

Decoding: remove synchronization and merging bits, map 14 bit EFM words to GF(256), De interleave and decode 32 symbols accoring to the (32, 28, 5) RS code. if one error is detected: correct to nearest codeword. if more than one error is detected: mark as erasures. De-interleave again and user erasure decoding acording to the (28, 24, 5) RS code (correction up to 4 erasures). If the last step fails: interpolate between older and newer symbols. 

### Football Pools

Based on the covering radius of the code. Where ideal codes are used that for a certain hamming distance all possible words can be reached using a set that is as small as possible. 