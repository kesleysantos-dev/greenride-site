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
| Vídeo da hero | [assets/video/hero.mp4](assets/video/hero.mp4) |
| Cores e fontes | variáveis em `:root` no [css/style.css](css/style.css) |

Os dados de contato e redes sociais são genéricos. As imagens dos modelos são ilustrações SVG que mudam de cor; para usar fotos reais, troque o SVG do card e do modal por um `<img>`.

## Créditos

Vídeo da hero: [Mixkit](https://mixkit.co/free-stock-video/man-rides-red-scooter-through-green-farm-fields-15807/) (Mixkit License, uso gratuito).
