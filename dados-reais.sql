-- LIMPAR TODAS AS TABELAS
DELETE FROM respostas;
DELETE FROM desabafos;

-- DESABAFOS COMPLETOS (50) COM DATAS VARIADAS
INSERT INTO desabafos (id, texto, quer_resposta, data_criacao, codigo) VALUES
(gen_random_uuid(), 'Tenho 28 anos e me sinto sobrecarregado no trabalho. Parece que nunca vou ser reconhecido pelo meu esforço.', true, NOW() - INTERVAL '30 days', 'ABC12345'),
(gen_random_uuid(), 'Estou com 17 anos e o vestibular está me deixando muito ansioso. Tenho medo de decepcionar meus pais.', true, NOW() - INTERVAL '29 days', 'DEF67890'),
(gen_random_uuid(), 'Terminei um relacionamento de 8 anos e me sinto completamente perdido. Tenho 34 anos e não sei como recomeçar.', true, NOW() - INTERVAL '28 days', 'GHI11111'),
(gen_random_uuid(), 'Sou mãe solo de dois filhos pequenos. Às vezes sinto que não vou dar conta de tudo. Tenho 39 anos.', true, NOW() - INTERVAL '27 days', 'JKL22222'),
(gen_random_uuid(), 'Tenho 22 anos e nunca namorei. Me sinto estranho perto dos amigos que já têm relacionamentos.', true, NOW() - INTERVAL '26 days', 'MNO33333'),
(gen_random_uuid(), 'Estou cansado de fingir que está tudo bem. Tenho 45 anos e sinto um vazio enorme por dentro.', true, NOW() - INTERVAL '25 days', 'PQR44444'),
(gen_random_uuid(), 'Meu filho de 10 anos está sofrendo bullying na escola e não sei como ajudá-lo.', true, NOW() - INTERVAL '24 days', 'STU55555'),
(gen_random_uuid(), 'Tenho 19 anos e não sei que carreira seguir. Sinto que estou decepcionando meus pais.', true, NOW() - INTERVAL '23 days', 'VWX66666'),
(gen_random_uuid(), 'Perdi meu cachorro de estimação há uma semana e ainda choro todos os dias. Tenho 27 anos.', true, NOW() - INTERVAL '22 days', 'YZA77777'),
(gen_random_uuid(), 'Estou há meses tentando emagrecer e não consigo. Tenho 31 anos e minha autoestima está no chão.', true, NOW() - INTERVAL '21 days', 'BCD88888'),
(gen_random_uuid(), 'Tenho 15 anos e sinto que não tenho amigos de verdade. Me sinto muito sozinho na escola.', true, NOW() - INTERVAL '20 days', 'EFG99999'),
(gen_random_uuid(), 'Meu casamento de 12 anos está em crise. Não sei se devo insistir ou seguir em frente. Tenho 41 anos.', true, NOW() - INTERVAL '19 days', 'HIJ00000'),
(gen_random_uuid(), 'Estou desempregado há 6 meses e não sei mais o que fazer. Tenho 36 anos.', true, NOW() - INTERVAL '18 days', 'KLM11111'),
(gen_random_uuid(), 'Tenho 24 anos e me sinto pressionado a ser bem-sucedido como meus colegas. Isso me deixa ansioso.', true, NOW() - INTERVAL '17 days', 'NOP22222'),
(gen_random_uuid(), 'Minha mãe está doente e tenho medo de perdê-la. Tenho 29 anos.', true, NOW() - INTERVAL '16 days', 'QRS33333'),
(gen_random_uuid(), 'Tenho 18 anos e não me sinto confortável com meu corpo. Evito sair com os amigos por vergonha.', true, NOW() - INTERVAL '15 days', 'TUV44444'),
(gen_random_uuid(), 'Meu pai nunca demonstra carinho. Tenho 32 anos e isso ainda me machuca.', true, NOW() - INTERVAL '14 days', 'WXY55555'),
(gen_random_uuid(), 'Estou grávida e com muito medo do futuro. Tenho 21 anos e não tenho apoio do pai da criança.', true, NOW() - INTERVAL '13 days', 'ZAB66666'),
(gen_random_uuid(), 'Tenho 50 anos e sinto que não realizei metade dos meus sonhos.', true, NOW() - INTERVAL '12 days', 'CDE77777'),
(gen_random_uuid(), 'Meu filho saiu de casa para estudar fora e estou sentindo um vazio enorme. Tenho 47 anos.', true, NOW() - INTERVAL '11 days', 'FGH88888'),
(gen_random_uuid(), 'Tenho 20 anos e não sei se escolhi o curso certo na faculdade.', true, NOW() - INTERVAL '10 days', 'IJK99999'),
(gen_random_uuid(), 'Estou apaixonada por um amigo, mas tenho medo de estragar a amizade. Tenho 26 anos.', true, NOW() - INTERVAL '9 days', 'LMN00000'),
(gen_random_uuid(), 'Tenho 38 anos e sinto que minha vida está parada. Não tenho motivação para nada.', true, NOW() - INTERVAL '8 days', 'OPQ11111'),
(gen_random_uuid(), 'Meu irmão mais novo está se envolvendo com más companhias. Tenho 23 anos e não sei como ajudar.', true, NOW() - INTERVAL '7 days', 'RST22222'),
(gen_random_uuid(), 'Tenho 16 anos e sofro com a separação dos meus pais. Me sinto culpado.', true, NOW() - INTERVAL '6 days', 'UVW33333'),
(gen_random_uuid(), 'Tenho 30 anos e sinto que não fiz nada de importante na vida. Vejo meus amigos avançando e fico para trás.', true, NOW() - INTERVAL '5 days', 'XYZ44444'),
(gen_random_uuid(), 'Meu namorado terminou comigo por mensagem. Tenho 19 anos e nunca me senti tão rejeitada.', true, NOW() - INTERVAL '5 days', 'AAA55555'),
(gen_random_uuid(), 'Estou com 25 anos e ainda moro com meus pais. Sinto vergonha disso.', true, NOW() - INTERVAL '4 days', 'BBB66666'),
(gen_random_uuid(), 'Tenho 44 anos e fui demitido. Não sei como contar para minha família.', true, NOW() - INTERVAL '4 days', 'CCC77777'),
(gen_random_uuid(), 'Minha filha de 7 anos está muito triste desde que mudamos de cidade. Tenho 35 anos.', true, NOW() - INTERVAL '3 days', 'DDD88888'),
(gen_random_uuid(), 'Tenho 21 anos e não consigo parar de pensar no meu ex. Sinto falta até das brigas.', true, NOW() - INTERVAL '3 days', 'EEE99999'),
(gen_random_uuid(), 'Estou com 60 anos e sinto que minha família não me escuta mais.', true, NOW() - INTERVAL '2 days', 'FFF00000'),
(gen_random_uuid(), 'Tenho 14 anos e sofro bullying por ser tímido. Não quero mais ir à escola.', true, NOW() - INTERVAL '2 days', 'GGG11111'),
(gen_random_uuid(), 'Meu marido trabalha demais e quase não temos tempo juntos. Tenho 37 anos.', true, NOW() - INTERVAL '1 days', 'HHH22222'),
(gen_random_uuid(), 'Tenho 23 anos e não consigo me encaixar em nenhum grupo. Me sinto deslocado em todo lugar.', true, NOW() - INTERVAL '1 days', 'III33333'),
(gen_random_uuid(), 'Minha mãe faleceu há 2 meses e ainda não consigo aceitar. Tenho 29 anos.', true, NOW() - INTERVAL '1 days', 'JJJ44444'),
(gen_random_uuid(), 'Tenho 18 anos e não sei se gosto de meninos ou meninas. Isso me confunde muito.', true, NOW() - INTERVAL '12 hours', 'KKK55555'),
(gen_random_uuid(), 'Estou com 40 anos e nunca consegui manter um relacionamento duradouro.', true, NOW() - INTERVAL '10 hours', 'LLL66666'),
(gen_random_uuid(), 'Tenho 27 anos e estou endividado. Não sei como sair dessa situação.', true, NOW() - INTERVAL '8 hours', 'MMM77777'),
(gen_random_uuid(), 'Meu filho de 5 anos está com dificuldades na escola e me sinto culpada. Tenho 33 anos.', true, NOW() - INTERVAL '6 hours', 'NNN88888'),
(gen_random_uuid(), 'Tenho 16 anos e meus pais brigam muito. Não aguento mais viver nesse ambiente.', true, NOW() - INTERVAL '4 hours', 'OOO99999'),
(gen_random_uuid(), 'Estou com 50 anos e me sinto invisível para as pessoas ao meu redor.', true, NOW() - INTERVAL '3 hours', 'PPP00000'),
(gen_random_uuid(), 'Tenho 24 anos e não consigo superar o término do meu namoro.', true, NOW() - INTERVAL '2 hours', 'QQQ11111'),
(gen_random_uuid(), 'Meu pai está doente e não sei como lidar com isso. Tenho 31 anos.', true, NOW() - INTERVAL '1 hours', 'RRR22222'),
(gen_random_uuid(), 'Tenho 20 anos e não gosto do meu corpo. Evito espelhos.', true, NOW() - INTERVAL '45 minutes', 'SSS33333'),
(gen_random_uuid(), 'Estou com 35 anos e sinto que não tenho amigos de verdade.', true, NOW() - INTERVAL '30 minutes', 'TTT44444'),
(gen_random_uuid(), 'Tenho 13 anos e meus colegas me excluem das brincadeiras.', true, NOW() - INTERVAL '20 minutes', 'UUU55555'),
(gen_random_uuid(), 'Minha esposa está distante e não sei mais como me aproximar. Tenho 42 anos.', true, NOW() - INTERVAL '15 minutes', 'VVV66666'),
(gen_random_uuid(), 'Tenho 26 anos e não consigo emprego na minha área. Estou desanimado.', true, NOW() - INTERVAL '10 minutes', 'WWW77777'),
(gen_random_uuid(), 'Estou com 55 anos e sinto falta dos meus filhos em casa.', true, NOW() - INTERVAL '5 minutes', 'XXX88888');

-- RESPOSTAS COM DATAS VARIADAS (1-3 respostas por desabafo)
INSERT INTO respostas (id, desabafo_id, texto, data_criacao) VALUES
-- Respostas para desabafos antigos (múltiplas respostas)
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'ABC12345'), 'Você é mais forte do que imagina. O reconhecimento pode demorar, mas não desista.', NOW() - INTERVAL '29 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'ABC12345'), 'Já passei por isso. Tente conversar com seu chefe sobre seus sentimentos.', NOW() - INTERVAL '28 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'ABC12345'), 'O importante é não desistir. Seu esforço será reconhecido.', NOW() - INTERVAL '27 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'DEF67890'), 'Seus pais te amam independente do resultado. Cuide de você também.', NOW() - INTERVAL '28 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'DEF67890'), 'A pressão é normal, mas não deixe que te consuma. Faça o seu melhor.', NOW() - INTERVAL '27 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'GHI11111'), 'Recomeçar é difícil, mas também é uma chance de se redescobrir. Força!', NOW() - INTERVAL '27 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'GHI11111'), 'O tempo vai ajudar a curar. Foque em você primeiro.', NOW() - INTERVAL '26 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'JKL22222'), 'Você é uma guerreira! Não tenha medo de pedir ajuda quando precisar.', NOW() - INTERVAL '26 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'JKL22222'), 'Mães solo são verdadeiras heroínas. Você está fazendo um trabalho incrível.', NOW() - INTERVAL '25 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'MNO33333'), 'Cada pessoa tem seu tempo. O importante é se sentir bem consigo mesmo.', NOW() - INTERVAL '25 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'MNO33333'), 'Não se compare com os outros. Seu momento vai chegar.', NOW() - INTERVAL '24 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'PQR44444'), 'Procure conversar com alguém de confiança. Você não está sozinho.', NOW() - INTERVAL '24 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'PQR44444'), 'Às vezes precisamos de ajuda profissional. Não há vergonha nisso.', NOW() - INTERVAL '23 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'STU55555'), 'Converse com a escola e mostre ao seu filho que ele pode contar com você.', NOW() - INTERVAL '23 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'STU55555'), 'Bullying é sério. Procure orientação de um psicólogo infantil.', NOW() - INTERVAL '22 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'VWX66666'), 'É normal ter dúvidas nessa fase. Experimente coisas novas e vá descobrindo aos poucos.', NOW() - INTERVAL '22 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'VWX66666'), 'Seus pais querem o seu bem, mas a escolha é sua. Não tenha pressa.', NOW() - INTERVAL '21 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'YZA77777'), 'Animais são parte da família. Permita-se sentir saudade e lembre dos bons momentos.', NOW() - INTERVAL '21 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'YZA77777'), 'O luto pelos pets é real. Dê tempo para você processar.', NOW() - INTERVAL '20 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'BCD88888'), 'Não desista! Procure um profissional para te ajudar nesse processo.', NOW() - INTERVAL '20 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'BCD88888'), 'Aceite-se como você é. A saúde é mais importante que a aparência.', NOW() - INTERVAL '19 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'EFG99999'), 'Você vai encontrar pessoas que te entendam. Não desista de tentar.', NOW() - INTERVAL '19 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'EFG99999'), 'Amizades verdadeiras levam tempo para se formar. Seja paciente.', NOW() - INTERVAL '18 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'HIJ00000'), 'Conversem com sinceridade. Às vezes, uma pausa pode ser necessária.', NOW() - INTERVAL '18 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'HIJ00000'), 'Procure ajuda de um terapeuta de casal. Pode fazer toda diferença.', NOW() - INTERVAL '17 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'KLM11111'), 'Continue tentando, oportunidades aparecem quando menos esperamos.', NOW() - INTERVAL '17 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'KLM11111'), 'Use esse tempo para se qualificar. O mercado vai melhorar.', NOW() - INTERVAL '16 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'NOP22222'), 'Não se compare, cada um tem seu tempo. Foque no seu caminho.', NOW() - INTERVAL '16 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'NOP22222'), 'Sucesso é relativo. Defina seus próprios objetivos.', NOW() - INTERVAL '15 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'QRS33333'), 'Aproveite cada momento com sua mãe. Demonstre seu amor sempre.', NOW() - INTERVAL '15 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'QRS33333'), 'O medo é natural, mas não deixe que te paralise.', NOW() - INTERVAL '14 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'TUV44444'), 'Você é lindo do seu jeito. Não se esconda do mundo.', NOW() - INTERVAL '14 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'TUV44444'), 'Procure ajuda profissional se isso estiver te afetando muito.', NOW() - INTERVAL '13 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'WXY55555'), 'Às vezes, pais têm dificuldade de demonstrar sentimentos. Tente conversar.', NOW() - INTERVAL '13 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'WXY55555'), 'O amor deles pode estar presente de outras formas.', NOW() - INTERVAL '12 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'ZAB66666'), 'Procure apoio em amigos e familiares. Você não está sozinha.', NOW() - INTERVAL '12 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'ZAB66666'), 'Existem grupos de apoio para mães solo. Procure na sua cidade.', NOW() - INTERVAL '11 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'CDE77777'), 'Nunca é tarde para correr atrás dos seus sonhos.', NOW() - INTERVAL '11 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'CDE77777'), 'Você ainda tem muito tempo pela frente. Não desista.', NOW() - INTERVAL '10 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'FGH88888'), 'O ninho vazio dói, mas é sinal de que você criou alguém independente.', NOW() - INTERVAL '10 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'FGH88888'), 'Use esse tempo para se redescobrir e fazer coisas que sempre quis.', NOW() - INTERVAL '9 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'IJK99999'), 'Se permita mudar de curso se não estiver feliz.', NOW() - INTERVAL '9 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'IJK99999'), 'É melhor mudar agora do que se arrepender depois.', NOW() - INTERVAL '8 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'LMN00000'), 'Às vezes vale a pena arriscar. Seja sincera com seus sentimentos.', NOW() - INTERVAL '8 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'LMN00000'), 'Amizades verdadeiras sobrevivem a mudanças.', NOW() - INTERVAL '7 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'OPQ11111'), 'Busque pequenas motivações diárias. Um passo de cada vez.', NOW() - INTERVAL '7 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'OPQ11111'), 'Às vezes precisamos de ajuda profissional para encontrar motivação.', NOW() - INTERVAL '6 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'RST22222'), 'Converse com seu irmão, mostre que se importa.', NOW() - INTERVAL '6 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'RST22222'), 'Às vezes eles precisam de orientação, não de julgamento.', NOW() - INTERVAL '5 days'),

(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'UVW33333'), 'Converse com alguém de confiança sobre como se sente. Você não é culpado.', NOW() - INTERVAL '5 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'UVW33333'), 'A separação dos pais nunca é culpa dos filhos.', NOW() - INTERVAL '4 days'),

-- Respostas para desabafos mais recentes (uma resposta cada)
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'XYZ44444'), 'Você ainda tem muito tempo para realizar coisas incríveis. Não se compare com os outros.', NOW() - INTERVAL '4 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'AAA55555'), 'Terminar por mensagem dói mesmo. Você merece alguém que te valorize de verdade.', NOW() - INTERVAL '4 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'BBB66666'), 'Cada um tem seu tempo. Não sinta vergonha, use esse tempo para se preparar para o futuro.', NOW() - INTERVAL '3 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'CCC77777'), 'Converse com sua família, juntos vocês vão superar esse momento.', NOW() - INTERVAL '3 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'DDD88888'), 'Mudanças são difíceis para crianças. Dê tempo e carinho para sua filha se adaptar.', NOW() - INTERVAL '2 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'EEE99999'), 'O tempo ajuda a curar. Tente focar em você e em novas experiências.', NOW() - INTERVAL '2 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'FFF00000'), 'Converse com sua família sobre como se sente. Você merece ser ouvido.', NOW() - INTERVAL '1 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'GGG11111'), 'Procure ajuda de um adulto de confiança. Você não está sozinho.', NOW() - INTERVAL '1 days'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'HHH22222'), 'Tente reservar um tempo só para vocês dois, mesmo que seja pouco.', NOW() - INTERVAL '23 hours'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'III33333'), 'Às vezes, a gente só precisa encontrar as pessoas certas. Não desista.', NOW() - INTERVAL '22 hours'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'JJJ44444'), 'O luto é um processo. Permita-se sentir e procure apoio se precisar.', NOW() - INTERVAL '21 hours'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'KKK55555'), 'Não tenha pressa em se rotular. Viva e descubra no seu tempo.', NOW() - INTERVAL '11 hours'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'LLL66666'), 'Relacionamentos são complicados, mas não desista de tentar.', NOW() - INTERVAL '9 hours'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'MMM77777'), 'Procure orientação financeira, você vai conseguir sair dessa.', NOW() - INTERVAL '7 hours'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'NNN88888'), 'Você está fazendo o seu melhor. Procure ajuda na escola se necessário.', NOW() - INTERVAL '5 hours'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'OOO99999'), 'Converse com alguém de confiança sobre como se sente. Você não é culpado.', NOW() - INTERVAL '3 hours'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'PPP00000'), 'Você é importante e merece ser visto. Procure atividades que te façam bem.', NOW() - INTERVAL '2 hours'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'QQQ11111'), 'O tempo vai ajudar. Foque em você e em coisas que te fazem feliz.', NOW() - INTERVAL '1 hours'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'RRR22222'), 'Procure apoio em familiares e amigos. Não carregue esse peso sozinho.', NOW() - INTERVAL '45 minutes'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'SSS33333'), 'Ame-se do jeito que você é. Se precisar, procure ajuda profissional.', NOW() - INTERVAL '30 minutes'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'TTT44444'), 'Amizades verdadeiras são raras, mas existem. Não desista de procurar.', NOW() - INTERVAL '20 minutes'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'UUU55555'), 'Converse com seus colegas, às vezes eles nem percebem que estão te excluindo.', NOW() - INTERVAL '15 minutes'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'VVV66666'), 'Tente relembrar bons momentos juntos e compartilhe seus sentimentos.', NOW() - INTERVAL '10 minutes'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'WWW77777'), 'Continue tentando, oportunidades aparecem quando menos esperamos.', NOW() - INTERVAL '5 minutes'),
(gen_random_uuid(), (SELECT id FROM desabafos WHERE codigo = 'XXX88888'), 'Filhos crescem, mas o amor permanece. Aproveite os momentos juntos quando puder.', NOW() - INTERVAL '2 minutes'); 