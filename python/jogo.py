numero_herois = int(input('Quantos heróis deseja classificar: '))

for i in range(1, numero_herois + 1):

  jogador = input(f'Nome do personagem {i}: ')
  xp = int(input(f'XP atual {i}: '))

  if (xp < 1000):
      nivel = "Ferro"

  elif 1001 <= xp <= 2000:
      nivel = "Bronze"

  elif 2001 <= xp <= 5000:
      nivel = "Prata"

  elif 6001 <= xp <= 7000:
      nivel = "Ouro"

  elif 7001 <= xp <= 8000:
      nivel = "Platina"

  elif 8001 <= xp <= 9000:
      nivel = "Ascendente"

  elif 9001 <= xp <= 10000:
      nivel = "Imortal"

  else:
      nivel = "Radiante"

  print(f"O Herói de nome {jogador} está no nível de {nivel}")
