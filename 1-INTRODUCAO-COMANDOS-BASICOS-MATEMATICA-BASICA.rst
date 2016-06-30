
INTRODUÇÃO JULIA                 
================
Histórico
---------

Julia é uma linguagem de programação dinâmica de alto nível projetado para atender os requisitos da
computação de alto  desempenho numérico e científica , sendo também eficaz para a programação de
propósito geral. Julia é escrito em C,  C++, e Scheme, usando a estrutura do compilador LLVM , enquanto
a maior parte da biblioteca padrão de Julia é   implementado na própria Julia. O desenvolvimento de Julia
começou em 2009 e uma versão de código aberto foi divulgado   em fevereiro de 2012\. Alguns aspectos incomuns
do projeto Julia incluem ter um sistema sofisticado, com tipos paramétricos dependentes de uma linguagem de
programação totalmente dinâmico e adotando expedição múltipla como seu  paradigma de programação do núcleo.
Cada um desses recursos tem aparecido em dialetos Lisp , como Common Lisp e Dylan,  mas a combinação dos dois
em um único idioma é único (ver recursos de linguagem). O aspecto mais notável da   implementação da Julia é o
seu desempenho, que muitas vezes é o dobro do código C, totalmente otimizado, colocando-o  no reino de linguagens
compiladas de alto desempenho. Julia se inspira significativamente em Matlab e vários dialetos  de Lisp, incluindo
Scheme e Common Lisp , e compartilha muitas características com Dylan - uma outra linguagem dinâmica  múltipla
orientada a expedição com a sintaxe - e Fortress (linguagem de programação), outra linguagem de programação
numérica com expedição múltipla e um sofisticado sistema de tipo paramétrico . Enquanto CLOS acrescenta
expedição  múltipla para Common Lisp , a adição é opt-in : funções só definidos pelo usuário explicitamente
declarados genérico pode ser estendida. Em Julia , Dylan e Fortress, por outro lado, essa extensibilidade é o
padrão e funções internas  do sistema são todos genéricos e extensíveis.

Características da Linguagem de Programação
-------------------------------------------

* Julia é extensível a partir da utilização de módulos carregáveis.
* O interpretador do Julia trabalha em conjunto com os softwares gnuplot e Grace para plotar gráficos, grafos e para salva-los.

Aplicações
----------

Julia é projetado para resolver problemas matemáticos numericamente, que consiste em calcular os valores na
memória do computador. Isso significa que nem sempre ele não poderá dar uma solução analítica para um problema,
e não deve ser confundido com programas como o Mathematica ou Maple, que trablham com soluções simbólicas, fazendo
a manipulação algébrica. Isso não significa que seja melhor ou pior - ele é utilizado para diferentes tarefas.
A maioria dos problemas matemáticos reais (particularmente em engenharia) não têm soluções simbólicas puras.

O QUE JULIA É CAPAZ DE FAZER
============================

+-------------+----------+------+-------+--------+-------+--------+------------+--------------+------+----------------+---------+
|             |Fortran   |Julia |Python |R       |Matlab |Octave  |Mathematica |JavaScript    |Go    |LuaJIT          |Java     |
+=============+==========+======+=======+========+=======+========+============+==============+======+================+=========+
|             |gcc 5.1.1 |0.4.0 |3.4.3  |3.2.2   |R2015b |4.0.0   |10.2.0      |V8 3.28.71.19 |go1.5 |gsl-shell 2.3.1 |1.8.0_45 |
+-------------+----------+------+-------+--------+-------+--------+------------+--------------+------+----------------+---------+
|fib          |0.70      |2.11  |77.76  |533.52  |26.89  |9324.35 |118.53      |3.36          |1.86  |1.71            |1.21     |
+-------------+----------+------+-------+--------+-------+--------+------------+--------------+------+----------------+---------+
|parse_int    |5.05      |1.45  |17.02  |45.73   |802.52 |9581.44 |15.02       |6.06          |1.20  |5.77            |3.35     | 
+-------------+----------+------+-------+--------+-------+--------+------------+--------------+------+----------------+---------+
|quicksort    |1.31      |1.15  |32.89  |264.54  |4.92   |1866.01 |43.23       |2.70          |1.29  |2.03            |2.60     |
+-------------+----------+------+-------+--------+-------+--------+------------+--------------+------+----------------+---------+
|mandel       |0.81      |0.79  |15.32  |53.16   |7.58   |451.81  |5.13        |0.66          |1.11  |0.67            |1.35     | 
+-------------+----------+------+-------+--------+-------+--------+------------+--------------+------+----------------+---------+
|pi_sum       |1.00      |1.00  |21.99  |9.56    |1.00   |299.31  |1.69        |1.01          |1.00  |1.00            |1.00     | 
+-------------+----------+------+-------+--------+-------+--------+------------+--------------+------+----------------+---------+
|rand_mat_stat|1.45      |1.66  |17.93  |14.56   |14.52  |30.93   |5.95        |2.30          |2.96  |3.27            |3.92     | 
+-------------+----------+------+-------+--------+-------+--------+------------+--------------+------+----------------+---------+
|rand_mat_mul |3.48      |1.02  |1.14   |1.57    |1.12   |1.12    |1.30        |15.07         |1.42  |1.16            |2.36     | 
+-------------+----------+------+-------+--------+-------+--------+------------+--------------+------+----------------+---------+

**tabela**: benchmark tempo em segundos de processamento relative to C (smaller is better, C performance = 1.0).

COMPARAÇÃO COM OUTROS SOFTWARES DE COMPUTAÇÃO CIENTÍFICA
========================================================
JULIA X MATLAB
--------------

Julia possui uma sintaxe muito próxima do MATLAB de tal forma que os nomes da maioria das funções em Julia
correspondem aos nomes do MATLAB/Octave. Quanto ao processamento, os parâmetros de referência mostram que
Julia é mais rápida, dependendo do tipo de operação. Julia fornece uma interface para a linguagem MATLAB
com o pacote MATLAB.jl (https://github.com/lindahua/MATLAB.jl). 

Sintaxe
"""""""

+--------------------------+--------------------------+
|julia                     |matlab                    |
+==========================+==========================+
|.. code:: julia           |.. code:: matlab          |
|                          |                          |
|  if condição             |  if condição             |
|      instruções          |      instruções          |
|  elseif outra_condição   |  elseif outra_condição   |
|      instruções          |      instruções          |
|  else                    |  else                    |
|      outro_bloco_ainda   |      outro_bloco_ainda   |
|  end                     |  end                     |
+--------------------------+--------------------------+
|.. code:: julia           |.. code:: matlab          |
|                          |                          |
|  for variável = vetor    |  for variável = vetor    |
|      instruções          |      instruções          |
|  end                     |  end                     |
+--------------------------+--------------------------+
|.. code:: julia           |.. code:: matlab          |
|                          |                          |
|  while condição          |  while condição          |
|      instruções          |      instruções          |
|  end                     |  end                     |
+--------------------------+--------------------------+

Modelo de Execução
""""""""""""""""""

+--------------------------+--------------------------+
|julia                     |matlab                    |
+==========================+==========================+
|compilada (JIT)           |interpretada              |
+--------------------------+--------------------------+

Paradigma Principal
"""""""""""""""""""

+----------------------------+----------------------------+
|julia                       |matlab                      |
+============================+============================+
|Multi-paradigma:            |Multi-paradigma:            |
|  OO, funcional, procedural |  OO, funcional, procedural |
+----------------------------+----------------------------+

Modelo de tipos de dados
""""""""""""""""""""""""

+----------------------------+----------------------------+
|julia                       |matlab                      |
+============================+============================+
|Dinâmico                    |Dinâmico                    |
+----------------------------+----------------------------+

Desempenho
""""""""""

+----------------------------+----------------------------+
|julia                       |matlab                      |
+============================+============================+
|Ooga ooga                   |Booga booga                 |
+----------------------------+----------------------------+

JULIA X PYTHON
--------------

Julia tem uma vantagem significativa de desempenhoem relação ao Python. Julia 
fornece uma interface para a linguagem ao Python com o pacote PyCall.
(https://github.com/stevengj/PyCall.jl)


Sintaxe
"""""""

+--------------------------+--------------------------+
|julia                     |matlab                    |
+==========================+==========================+
|.. code:: julia           |.. code:: python          |
|                          |                          |
|  if condição             |  if condição:            |
|      instruções          |      instruções          |
|  elseif outra_condição   |  elif outra_condição:    |
|      instruções          |      instruções          |
|  else                    |  else:                   |
|      outro_bloco_ainda   |      outro_bloco_ainda   |
|  end                     |                          |
+--------------------------+--------------------------+
|.. code:: julia           |.. code:: python          |
|                          |                          |
|  for variável = vetor    |  for variável in vetor:  |
|      instruções          |      instruções          |
|  end                     |                          |
+--------------------------+--------------------------+
|.. code:: julia           |.. code:: python          |
|                          |                          |
|  while condição          |  while condição:         |
|      instruções          |      instruções          |
|  end                     |                          |
+--------------------------+--------------------------+

Modelo de Execução
""""""""""""""""""

+--------------------------+--------------------------+
|julia                     |python                    |
+==========================+==========================+
|compilada (JIT)           |interpretada              |
+--------------------------+--------------------------+

Paradigma Principal
"""""""""""""""""""

+----------------------------+----------------------------+
|julia                       |python                      |
+============================+============================+
|Multi-paradigma:            |Multi-paradigma:            |
|  OO, funcional, procedural |  OO, funcional, procedural |
+----------------------------+----------------------------+

Modelo de tipos de dados
""""""""""""""""""""""""

+----------------------------+----------------------------+
|julia                       |python                      |
+============================+============================+
|Dinâmico                    |Dinâmico                    |
+----------------------------+----------------------------+

Desempenho
""""""""""

+----------------------------+----------------------------+
|julia                       |python                      |
+============================+============================+
|Ooga ooga                   |Booga booga                 |
+----------------------------+----------------------------+

JULIA X R
--------------

R é uma das linguagem de desenvolvimento preferido para a maioria dos estatísticos.
Julia revela-se bem superior em desempenho e tem um conjunto de tipo muito mais rico
os tipos baseados em vetores de R. Julia fornece uma interface para a linguagem R com
o pacote de Rif.jl (https://github.com/lgautier/Rif.jl).



Sintaxe
"""""""

+--------------------------+-----------------------------+
|julia                     |r                            |
+==========================+=============================+
|.. code:: julia           |.. code:: r                  |
|                          |                             |
|  if condição             |  if (condição) {            |
|      instruções          |      instruções             |
|  elseif outra_condição   |  } else if outra_condição { |
|      instruções          |      instruções             |
|  else                    |  } else {                   |
|      outro_bloco_ainda   |      outro_bloco_ainda      |
|  end                     |  }                          |
+--------------------------+-----------------------------+
|.. code:: julia           |.. code:: r                  |
|                          |                             |
|  for variável = vetor    |  for (variável in vetor) {  |
|      instruções          |      instruções             |
|  end                     |  }                          |
+--------------------------+-----------------------------+
|.. code:: julia           |.. code:: r                  |
|                          |                             |
|  while condição          |  while (condição) {         |
|      instruções          |      instruções             |
|  end                     |  }                          |
+--------------------------+-----------------------------+

Modelo de Execução
""""""""""""""""""

+--------------------------+--------------------------+
|julia                     |r                         |
+==========================+==========================+
|compilada (JIT)           |interpretada              |
+--------------------------+--------------------------+

Paradigma Principal
"""""""""""""""""""

+----------------------------+----------------------------+
|julia                       |r                           |
+============================+============================+
|Multi-paradigma:            |Multi-paradigma:            |
|  OO, funcional, procedural |  OO, funcional, procedural |
+----------------------------+----------------------------+

Modelo de tipos de dados
""""""""""""""""""""""""

+----------------------------+----------------------------+
|julia                       |r                           |
+============================+============================+
|Dinâmico                    |Dinâmico                    |
+----------------------------+----------------------------+

Desempenho
""""""""""

+----------------------------+----------------------------+
|julia                       |r                           |
+============================+============================+
|Ooga ooga                   |Booga booga                 |
+----------------------------+----------------------------+

JULIA X FORTRAN
---------------

Sintaxe
"""""""

+--------------------------+-----------------------------+
|julia                     |fortran                      |
+==========================+=============================+
|.. code:: julia           |.. code:: fortran            |
|                          |                             |
|  if condição             |  IF (condição) THEN         |
|      instruções          |      instruções             |
|  elseif outra_condição   |  ELSE IF (outra_condição)   |
|      instruções          |      instruções             |
|  else                    |  ELSE                       |
|      outro_bloco_ainda   |      outro_bloco_ainda      |
|  end                     |  END                        |
+--------------------------+-----------------------------+
|.. code:: julia           |.. code:: fortran            |
|                          |                             |
|  for variável = vetor    |  DO i=1, tamanho_vetor      |
|      instruções          |      instruções             |
|  end                     |  END DO                     |
+--------------------------+-----------------------------+
|.. code:: julia           |.. code:: fortran            |
|                          |                             |
|  while condição          |  DO WHILE (condição)        |
|      instruções          |      instruções             |
|  end                     |  END DO                     |
+--------------------------+-----------------------------+

Modelo de Execução
""""""""""""""""""

+--------------------------+--------------------------+
|julia                     |fortran                   |
+==========================+==========================+
|compilada (JIT)           |compilada                 |
+--------------------------+--------------------------+

Paradigma Principal
"""""""""""""""""""

+----------------------------+----------------------------+
|julia                       |fortran                     |
+============================+============================+
|Multi-paradigma:            |procedural                  |
|  OO, funcional, procedural |                            |
+----------------------------+----------------------------+

Modelo de tipos de dados
""""""""""""""""""""""""

+----------------------------+----------------------------+
|julia                       |fortran                     |
+============================+============================+
|Dinâmico                    |Estático                    |
+----------------------------+----------------------------+

Desempenho
""""""""""

+----------------------------+----------------------------+
|julia                       |fortran                     |
+============================+============================+
|Ooga ooga                   |Ooga ooga                   |
+----------------------------+----------------------------+

JULIA X C
---------

Sintaxe
"""""""

+--------------------------+----------------------------------------+
|julia                     |c                                       |
+==========================+========================================+
|.. code:: julia           |.. code:: c                             |
|                          |                                        |
|  if condição             |  if (condição) {                       |
|      instruções          |      instruções;                       |
|  elseif outra_condição   |  } else if (outra_condição) {          |
|      instruções          |      instruções;                       |
|  else                    |  } else {                              |
|      outro_bloco_ainda   |      outro_bloco_ainda;                |
|  end                     |  }                                     |
+--------------------------+----------------------------------------+
|.. code:: julia           |.. code:: c                             |
|                          |                                        |
|  for variável = vetor    |  for (int i=1; i<tamanho_vetor; i++) { |
|      instruções          |      instruções;                       |
|  end                     |  }                                     |
+--------------------------+----------------------------------------+
|.. code:: julia           |.. code:: c                             |
|                          |                                        |
|  while condição          |  while (condição) {                    |
|      instruções          |      instruções;                       |
|  end                     |  }                                     |
+--------------------------+----------------------------------------+

Modelo de Execução
""""""""""""""""""

+--------------------------+--------------------------+
|julia                     |c                         |
+==========================+==========================+
|compilada (JIT)           |compilada                 |
+--------------------------+--------------------------+

Paradigma Principal
"""""""""""""""""""

+----------------------------+----------------------------+
|julia                       |c                           |
+============================+============================+
|Multi-paradigma:            |procedural                  |
|  OO, funcional, procedural |                            |
+----------------------------+----------------------------+

Modelo de tipos de dados
""""""""""""""""""""""""

+----------------------------+----------------------------+
|julia                       |c                           |
+============================+============================+
|Dinâmico                    |Estático                    |
+----------------------------+----------------------------+

Desempenho
""""""""""

+----------------------------+----------------------------+
|julia                       |c                           |
+============================+============================+
|Ooga ooga                   |Ooga ooga                   |
+----------------------------+----------------------------+

`<http://blog.tiagopassos.com/wp-content/uploads/2011/06/as_diferencas_entre_as_linguagens_de_programacao_.jpg>`_



COMANDOS BÁSICOS E MATEMÁTICA BÁSICA
====================================

.. code:: python

    versioninfo()


.. parsed-literal::

    Julia Version 0.4.5
    Commit 2ac304d (2016-03-18 00:58 UTC)
    Platform Info:
      System: Linux (x86_64-linux-gnu)
      CPU: Intel(R) Core(TM) i7-4510U CPU @ 2.00GHz
      WORD_SIZE: 64
      BLAS: libopenblas (NO_LAPACKE DYNAMIC_ARCH NO_AFFINITY Haswell)
      LAPACK: liblapack.so.3
      LIBM: libopenlibm
      LLVM: libLLVM-3.3


.. code:: python

    2+5




.. parsed-literal::

    7



.. code:: python

    10e-2




.. parsed-literal::

    0.1



.. code:: python

    # e^3
    
    exp(3)




.. parsed-literal::

    20.085536923187668



.. code:: python

    2^6




.. parsed-literal::

    64



.. code:: python

    (2+5)^2/(3+1)^3




.. parsed-literal::

    0.765625



.. code:: python

    sin(pi/2)




.. parsed-literal::

    1.0



.. code:: python

    # número aleatório entre 0 e 1
    
    rand()




.. parsed-literal::

    0.14980614207722853



.. code:: python

    # 6 numeros aleatorios de 0 a 10
    
    rand(0:10, 6)




.. parsed-literal::

    6-element Array{Int64,1}:
     8
     1
     1
     3
     5
     1



.. code:: python

    # jogos da mega sena. Claro que não é lá essas coisas né
    
    rand(1:60,6), rand(1:60,6),rand(1:60,6)




.. parsed-literal::

    ([53,59,15,35,3,48],[18,21,23,27,6,14],[32,26,19,39,54,59])



.. code:: python

    # MDC
    
    gcd(7,14)




.. parsed-literal::

    7



.. code:: python

    # MMC
    
    lcm(7,14)




.. parsed-literal::

    14



Multiplos calculos
------------------

O uso a vírgula " , " permite efetuar mais de uma expressão

.. code:: python

    sqrt(2) , 2.0*3.0^-2




.. parsed-literal::

    (1.4142135623730951,0.2222222222222222)



.. code:: python

    # se usado o ponto e virgula, só será impresso a ultimo cálculo
    
    sqrt(2) ; 2.0*3.0^-2




.. parsed-literal::

    0.2222222222222222



Cálculo trigonometrico/Hiperbólico
----------------------------------

sin(x)    cos(x)    tan(x)    cot(x)    sec(x)    csc(x)  sinh(x)   cosh(x)   tanh(x)   coth(x)   sech(x)   csch(x)


asin(x)   acos(x)   atan(x)   acot(x)   asec(x)   acsc(x)  acoth(x)  asech(x)  acsch(x)  sinc(x)   cosc(x)   atan2(x)

.. code:: python

    # radiandos
    
    sin(pi/4) , cos(pi) , tan(pi/4)




.. parsed-literal::

    (0.7071067811865475,-1.0,0.9999999999999999)



.. code:: python

    coth(pi/4), csc(pi/4) , sec(pi/4)




.. parsed-literal::

    (1.5248686188220641,1.4142135623730951,1.414213562373095)



.. code:: python

    # Para o angulo em grau (º), acrescenta-se o "d"
    
    sind(90), cosd(90)




.. parsed-literal::

    (1.0,0.0)



Cálculo Angular
---------------

.. code:: python

    # Converte x de graus to radianos
    
    deg2rad(60)




.. parsed-literal::

    1.0471975511965976



.. code:: python

    # Converte x de radianos para graus
    
    rad2deg(1.0471975511965976)




.. parsed-literal::

    59.99999999999999



Cálculo Exponenial/Logaritmo
----------------------------

.. code:: python

    # Função exponencial natural em x
    
    exp(2)




.. parsed-literal::

    7.38905609893065



.. code:: python

    #accurate exp (x) -1 para x próximo de zero
    
    expm1(5)




.. parsed-literal::

    147.4131591025766



.. code:: python

    #logaritmo natural de x
    
    log(100)




.. parsed-literal::

    4.605170185988092



.. code:: python

    #base b logaritmo de x
    
    log(10,100)




.. parsed-literal::

    2.0



.. code:: python

    #logaritmo de base 2 x
    
    log2(100)




.. parsed-literal::

    6.643856189774724



.. code:: python

    #logaritmo de base 10 x
    
    log10(1000)




.. parsed-literal::

    3.0



.. code:: python

    #log preciso (1 + x) para x próximo de zero
    
    log1p(100)




.. parsed-literal::

    4.61512051684126



Binario/Octal/Hexadecimal
-------------------------

.. code:: python

    bin(128) ,  oct(128) , hex(128)




.. parsed-literal::

    ("10000000","200","80")



Resumo Principais Comandos
--------------------------

+---------------------------------------------------------------------------------------------------------------+
|``round(x)`` - arrendonda para o número inteiro mais próximo.                                                  |
+---------------------------------------------------------------------------------------------------------------+
|``iround(x)`` - arrendonda para o número inteiro mais próximo, dando um resultado digítado-inteiro             |
+---------------------------------------------------------------------------------------------------------------+
|``floor(x)`` - arrendonda na direção -Inf                                                                      |
+---------------------------------------------------------------------------------------------------------------+
|``ifloor(x)`` - arrendonda na direção -Inf, dando um resultado digítado-inteiro                                |
+---------------------------------------------------------------------------------------------------------------+
|``ceil(x)`` - arrendonda na direção +Inf                                                                       |
+---------------------------------------------------------------------------------------------------------------+
|``iceil(x)`` - arrendonda na direção +Inf, dando um resultado digítado-inteiro                                 |
+---------------------------------------------------------------------------------------------------------------+
|``trunc(x)`` - arrendonda na direção de 0                                                                      |
+---------------------------------------------------------------------------------------------------------------+
|``itrunc(x)`` - arrendonda na direção de 0, dando um resultado digítado-inteiro                                |
+---------------------------------------------------------------------------------------------------------------+
|``div(x,y)`` - divisão inteira entre x e y ("trunca" o resultado de x/y)                                       |
+---------------------------------------------------------------------------------------------------------------+
|``fld(x,y)`` - arrendonda o resultado de x/y na direção -Inf                                                   |
+---------------------------------------------------------------------------------------------------------------+
|``rem(x,y)`` - resto; satisfaz ``x == div(x,y) + y⋅rem(x,y)``, o que implica correspondencia com o sinal de x  |
+---------------------------------------------------------------------------------------------------------------+
|``mod(x,y)`` - módulo; satisfaz ``x == fld(x,y) + y⋅mod(x,y)``, o que implica correspondencia com o sinal de y |
+---------------------------------------------------------------------------------------------------------------+
|``gcd(x,y,...)`` - máximo divisor comum de x,y,... com correspondencia ao sinal de x                           |
+---------------------------------------------------------------------------------------------------------------+
|``lcm(x,y,...)`` - minimo multiplo comum de x,y,... com correspondencia ao sinal de x                          |
+---------------------------------------------------------------------------------------------------------------+
|``abs(x)`` - valor positivo com a magnitude de x                                                               |
+---------------------------------------------------------------------------------------------------------------+
|``abs2(x)`` - a magnitude quadrada de x                                                                        |
+---------------------------------------------------------------------------------------------------------------+
|``sign(x)`` - indica o sinal de x, retornando -1, 0 ou 1                                                       |
+---------------------------------------------------------------------------------------------------------------+
|``signbit(x)`` - indica se o bit de sinal de x está ligado (1) ou desligado (0)                                |
+---------------------------------------------------------------------------------------------------------------+
|``copysign(x,y)`` - um valor com magnitude de x com o sinal de y                                               |
+---------------------------------------------------------------------------------------------------------------+
|``flipsign(x,y)`` - um valor com magnitude de x com o sinal de x⋅y                                             |
+---------------------------------------------------------------------------------------------------------------+
|``sqrt(x)`` - raiz quadrada de x                                                                               |
+---------------------------------------------------------------------------------------------------------------+
|``cbrt(x)`` - raiz cubica de x                                                                                 |
+---------------------------------------------------------------------------------------------------------------+
|``hypot(x,y)`` - ``sqrt(x^2⋅y^2)`` para qualquer valor de x e y                                                |
+---------------------------------------------------------------------------------------------------------------+
|``exp(x)`` - A função exponencial natural em x                                                                 |
+---------------------------------------------------------------------------------------------------------------+
|``expm1(x)`` - exp(x)-1                                                                                        |
+---------------------------------------------------------------------------------------------------------------+
|``ldexp(x,n)`` - x⋅2^n calculado de forma eficiente para valores inteiros de n                                 |
+---------------------------------------------------------------------------------------------------------------+
|``log(x)`` - logaritmo natural de x                                                                            |
+---------------------------------------------------------------------------------------------------------------+
|``log(b,x)`` - logaritmo de base b de x                                                                        |
+---------------------------------------------------------------------------------------------------------------+
|``log2(x)`` - logaritmo de base 2 de x                                                                         |
+---------------------------------------------------------------------------------------------------------------+
|``log10(x)`` - logaritmo de base 10 de x                                                                       |
+---------------------------------------------------------------------------------------------------------------+
|``log1p(x)`` - logaritmo natural de ``x+1``                                                                    |
+---------------------------------------------------------------------------------------------------------------+
|``logb(x)`` - o expoente binario de x                                                                          |
+---------------------------------------------------------------------------------------------------------------+
|``erf(x)`` - a função de erro em x                                                                             |
+---------------------------------------------------------------------------------------------------------------+
|``erfc(x)`` - complemento da função de erro em x                                                               |
+---------------------------------------------------------------------------------------------------------------+
|``gamma(x)`` - a função gamma em x                                                                             |
+---------------------------------------------------------------------------------------------------------------+
|``lgamma(x)`` - log(gamma(x))                                                                                  |
+---------------------------------------------------------------------------------------------------------------+


MEMÓRIAS DE CÉLULAS
-------------------

.. code:: python

    4+log(125)/sqrt(5)




.. parsed-literal::

    6.159287546660801



.. code:: python

    # calculo anterior
    
    ans




.. parsed-literal::

    6.159287546660801



.. code:: python

    # Out[numero da celula que deseja recuperar a saída]
    
    Out[3] 




.. parsed-literal::

    0.1



.. code:: python

    # In[numero da celula que deseja recuperar a saída]
    
    In[2]




.. parsed-literal::

    "2+5"



Historico dos Comandos
""""""""""""""""""""""

.. code:: python

    # mostra todos os comandos de entrada
    
    In




.. parsed-literal::

    Dict{Int64,ByteString} with 32 entries:
      18 => "# Converte x de graus to radianos\n\ndeg2rad(60)"
      30 => "# Out[numero da celula que deseja recuperar a saída]\n\nOut[3] "
      32 => "# mostra todos os comandos de entrada\n\nIn"
      2  => "2+5"
      16 => "coth(pi/4), csc(pi/4) , sec(pi/4)"
      11 => "# MDC\n\ngcd(7,14)"
      21 => "#accurate exp (x) -1 para x próximo de zero\n\nexpm1(5)"
      7  => "sin(pi/2)"
      9  => "# 6 numeros aleatorios de 0 a 10\n\nrand(0:10, 6)"
      25 => "#logaritmo de base 10 x\n\nlog10(1000)"
      10 => "# jogos da mega sena. Claro que não é lá essas coisas né\n\nrand(1:60,…
      26 => "#log preciso (1 + x) para x próximo de zero\n\nlog1p(100)"
      29 => "# calculo anterior\n\nans"
      19 => "# Converte x de radianos para graus\n\nrad2deg(1.0471975511965976)"
      17 => "# Para o angulo em grau (º), acrescenta-se o \"d\"\n\nsind(90), cosd(9…
      8  => "# número aleatório entre 0 e 1\n\nrand()"
      22 => "#logaritmo natural de x\n\nlog(100)"
      6  => "(2+5)^2/(3+1)^3"
      24 => "#logaritmo de base 2 x\n\nlog2(100)"
      4  => "# e^3\n\nexp(3)"
      3  => "10e-2"
      28 => "4+log(125)/sqrt(5)"
      5  => "2^6"
      20 => "# Função exponencial natural em x\n\nexp(2)"
      23 => "#base b logaritmo de x\n\nlog(10,100)"
      ⋮  => ⋮



.. code:: python

    # mostra todos os comandos de saída
    
    Out




.. parsed-literal::

    Dict{Int64,Any} with 31 entries:
      30 => 0.1
      32 => Dict{Int64,ByteString}(18=>"# Converte x de graus to radianos\n\ndeg2ra…
      2  => 7
      16 => (1.5248686188220641,1.4142135623730951,1.414213562373095)
      11 => 7
      21 => 147.4131591025766
      7  => 1.0
      9  => [8,1,1,3,5,1]
      25 => 3.0
      10 => ([53,59,15,35,3,48],[18,21,23,27,6,14],[32,26,19,39,54,59])
      26 => 4.61512051684126
      29 => 6.159287546660801
      19 => 59.99999999999999
      17 => (1.0,0.0)
      8  => 0.14980614207722853
      22 => 4.605170185988092
      6  => 0.765625
      24 => 6.643856189774724
      4  => 20.085536923187668
      3  => 0.1
      28 => 6.159287546660801
      5  => 64
      20 => 7.38905609893065
      23 => 2.0
      13 => (1.4142135623730951,0.2222222222222222)
      ⋮  => ⋮



CALCULAR O TEMPO E PROCESSAMENTO
--------------------------------

@time
"""""

Uma macro para executar uma expressão, imprimindo o tempo que levou para executar, o número de alocações, e o número total de bytes sua execução.

.. code:: python

    @time sqrt((2*pi + sqrt(log(2569854.5415263))/(sin(52)*cos(log(25948.1452))))^100)*exp(sin(0.8985424))


.. parsed-literal::

      0.008057 seconds (5.71 k allocations: 262.385 KB)




.. parsed-literal::

    4.543647706547242



@timev
""""""

Semelhante ao @time só que mais completa

.. code:: python

    @timev sqrt((2*pi + sqrt(log(2569854.5415263))/(sin(52)*cos(log(25948.1452))))^100)*exp(sin(0.8985424))


.. parsed-literal::

      0.000012 seconds (18 allocations: 384 bytes)
    elapsed time (ns): 12158
    bytes allocated:   384
    pool allocs:       18




.. parsed-literal::

    4.543647706547242



@elapsed
""""""""

A macro para avaliar o tempo de execuçã em segundos, descartando o valor resultante.

.. code:: python

    @elapsed sqrt((2*pi + sqrt(log(2569854.5415263))/(sin(52)*cos(log(25948.1452))))^100)*exp(sin(0.8985424))




.. parsed-literal::

    1.3308e-5



PRECISÃO DE NUMEROS SIGNIFICATIVOS
----------------------------------

.. code:: python

    # numero PI com oito numeros significativos
    
    round(pi,8)




.. parsed-literal::

    3.14159265



.. code:: python

    floor(3.14159265)




.. parsed-literal::

    3.0



.. code:: python

    ceil(3.14159265)




.. parsed-literal::

    4.0



.. code:: python

    trunc(3.14159265)




.. parsed-literal::

    3.0



COMANDOS DE IMPRESSÃO
---------------------

Comando print
"""""""""""""

Escreve (para o fluxo de saída padrão) uma representação de texto ou de um valor se houver. A representação usada pelo comando inclui formatação mínima.

.. code:: python

    print("olá mundo")


.. parsed-literal::

    olá mundo

Comando display
"""""""""""""""

Usa o nível superior de exibição aplicável na pilha de exibição, geralmente usando a mais rica produção multimedia com suporte para x

.. code:: python

    display("olá mundo")



.. parsed-literal::

    "olá mundo"


Comando show
""""""""""""

Semenhante ao display

.. code:: python

    show("olá mundo")


.. parsed-literal::

    "olá mundo"
