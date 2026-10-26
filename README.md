# Green Ride — Mobilidade Elétrica

Site institucional da loja Green Ride: scooters, motos e triciclos elétricos.

HTML, CSS e JavaScript puros, sem build. Basta abrir o `index.html` ou servir a pasta:

```bash
python -m http.server 5500
```

## Recursos

- Hero com vídeo em loop infinito de 15s e efeito parallax
- Animações de entrada no scroll, contadores, marquee, botões magnéticos e tilt 3D nos cards
- Seção de modelos com filtro por categoria; ao clicar, abre um card com imagem, ficha técnica, cores e botão para o WhatsApp
- Banner com parallax, etapas de compra, depoimentos, FAQ e contato com mapa
- Responsivo e respeita `prefers-reduced-motion`

## Personalização

| O quê | Onde |
| --- | --- |
| Número do WhatsApp | `STORE.whatsapp` em [js/main.js](js/main.js) |
| Modelos, preços e fichas técnicas | `MODELS` em [js/main.js](js/main.js) |
| Endereço, telefone, e-mail e redes sociais | [index.html](index.html) (seção `#contato` e rodapé) |
| Fotos dos modelos | [assets/img/modelos/](assets/img/modelos/) (campo `img` e `focus` de cada modelo) |
| Vídeo da hero | [assets/video/](assets/video/) — `hero-1080.mp4` (desktop) e `hero-720.mp4` (mobile) |
| Cores e fontes | variáveis em `:root` no [css/style.css](css/style.css) |

Os dados de contato, redes sociais, nomes de modelos, preços e fichas técnicas são genéricos. As fotos são de banco de imagens: troque pelas fotos reais dos produtos da loja mantendo o mesmo nome de arquivo (ou ajuste o campo `img`).

## Créditos

Vídeo da hero e fotos dos modelos: [Pexels](https://www.pexels.com/) (Pexels License, uso gratuito).
- Vídeo: [A man riding a moped](https://www.pexels.com/video/a-man-riding-a-moped-8070855/)
- Fotos: Pexels IDs 32980295, 15675779, 32576306, 17524580, 7420572, 38451950, 14960027, 6316638
