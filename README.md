# CTTrains (Camp de Tarragona Trains)

# 1 Tema/motivació. 

## 🎯 Objectiu de la Web

L’objectiu principal d’aquesta web és **facilitar als usuaris del ferrocarril del Camp de Tarragona** l’accés a la informació clau sobre el servei ferroviari.  
Aquest projecte neix de la constatació que, en els darrers anys, **fer servir el tren s’ha convertit en una autèntica odissea**, degut a:

- 🚧 Obres constants  
- 💸 Manca d’inversió  
- 🗺️ Mala planificació  
- 🚦 Saturació del servei  
- ❌ Poca transparència i informació dispersa

Tot i que aquesta web **no pot solucionar directament aquests problemes estructurals**, sí que pretén:

> 🔎 **Centralitzar en un únic lloc tota la informació rellevant** sobre el ferrocarril al Camp de Tarragona, oferint una visió més completa i accessible al ciutadà.

### 📌 Punt fort: el Mapa Interactiu

El component més destacat de la web és el **mapa interactiu**, que permet:

- 📍 **Fer clic sobre una estació** per veure:
  - Serveis disponibles (taquilles, lavabos, aparcament, accessibilitat…)
  - Horaris de les línies que hi passen
- 🚉 **Explorar la xarxa ferroviària d’una manera intuïtiva i visual**

Aquest mapa vol ser una eina pràctica i clara per a qualsevol usuari, ja sigui habitual o esporàdic.


# 2 Dades/continguts. 

## 🗂️ Fonts i Suport Utilitzat

Per a l’elaboració d’aquesta web, s’han emprat diverses fonts d’informació i recursos per garantir-ne la **veracitat**, la **utilitat** i la **qualitat visual**.

### 📷 Imatges i informació tècnica

- **Renfe** i **Rodalies de Catalunya** han estat les fonts principals per a la recopilació de dades sobre línies, serveis i estacions.
- També s’han consultat **vlogs especialitzats en ferrocarril**, que han aportat informació de primera mà i perspectives útils sobre l’estat actual de la xarxa ferroviària.

### 🤖 Ús d’intel·ligència artificial

Per optimitzar i enriquir el contingut textual i estructural de la web, s’ha fet ús de la IA, concretament **ChatGPT**, que ha col·laborat en:

- Redacció i revisió de textos
- Generació d’idees per a la presentació de la informació
- Millora de l’estructura del contingut
- Propostes de millores d’accessibilitat i disseny

> Aquest suport ha permès perfeccionar l’experiència d’usuari i garantir una presentació clara i funcional de la informació.


# 3 Estructura de la Web. 

## 🧭 Estructura i Presentació de la Web

La web està dividida en diferents seccions amb una navegació clara i intuïtiva a través del menú principal. Cada secció respon a una necessitat informativa concreta de l’usuari del ferrocarril al Camp de Tarragona.

### 📂 Seccions principals

- **Inici**: Introducció i context general de la problemàtica ferroviària.
- **Informació**: Detalla les línies ferroviàries de la zona i ofereix imatges explicatives i recursos oficials.
- **Multimèdia**: Galeria amb models de trens que circulen per la zona, tant de rodalies com d’alta velocitat.
- **Mapa**: Punt clau del projecte. Mapa interactiu amb informació útil de cada estació.
- **Contacte**: Formulari senzill per permetre comentaris o suggeriments dels usuaris.

### 🧠 Decisions de disseny i presentació

Per garantir una bona experiència d’usuari s’han tingut en compte:

- ✅ **Organització clara de la informació**, amb encapçalaments, paràgrafs curts i estructures intuïtives.
- ✅ **Separació d’estils i contingut**: el codi HTML es manté net, mentre que els estils es centralitzen al fitxer `styles.css`.
- ✅ **Ús del botó “scroll to top”**.
- ✅ **Coherència visual** en colors, espais i tipografia.

### 📊 Representació visual de la informació

S’han fet servir diversos recursos visuals per millorar la claredat:

- 🗺️ **Mapa interactiu** per a la localització d’estacions i serveis.
- 🖼️ **Galeries d’imatges** per il·lustrar els models de trens disponibles.
- 📋 **Taules de serveis** i horaris (enllaçats o incrustats) per accedir a informació útil sense sobrecarregar el contingut.

> Tot plegat contribueix a una navegació còmoda i a una consulta ràpida de la informació més rellevant per a l’usuari.


# 4 Web responsive. 

## 📱 Adaptació a Dispositius i Optimització Visual

Un dels objectius tècnics del projecte ha estat aconseguir que la web s’adapti correctament a diferents tipus de dispositius: ordinadors, tauletes i telèfons mòbils.

### 🧩 Tècniques de disseny responsive aplicades

Per fer-ho possible, s’han implementat diverses tècniques:

- ✅ Ús de **media queries CSS** per adaptar el disseny a pantalles petites (menys de 768px).
- ✅ Creació d’un **menú hamburguesa**, que es desplega automàticament quan l’usuari accedeix des de dispositius mòbils.

### 🖼️ Optimització d’imatges i recursos visuals

També s’ha tingut cura en l’ús de les imatges per garantir una càrrega ràpida i una bona qualitat visual:

- 🖼️ S’han utilitzat imatges amb **resolucions adaptades** a web, evitant arxius massa pesats.
- 📏 Les imatges estan configurades amb `max-width: 100%` i `height: auto` per tal que **s’adaptin a l’amplada de qualsevol dispositiu**.

> Aquest conjunt de decisions permet que la web mantingui una aparença sòlida i funcional tant en grans pantalles com en mòbils.


# 5 Cartografia. 

Cóm s’han integrat i elaborat els mapes que apareixen a la web.


# 6 Dificultats/millores. 

## 💬 Reflexió Final i Possibles Millores

El desenvolupament d’aquesta web ha estat un procés d’aprenentatge continu i d’adaptació constant. Tot i que el producte final compleix l’objectiu de centralitzar la informació ferroviària del Camp de Tarragona, també ha posat de manifest algunes dificultats tècniques i conceptuals.

### ⚠️ Dificultats trobades

- 🔁 **Interdependència dels canvis**: una de les dificultats principals ha estat fer modificacions concretes (d’estil, estructura o funcionalitat) sense afectar negativament altres elements. Moltes vegades, millorava una secció però accidentalment es desquadrava una altra.
- 📱 **Responsivitat complexa**: fer que la web s’adaptés correctament a totes les resolucions (mòbil, tauleta, ordinador) ha requerit temps i proves, especialment pel que fa al menú, distribució de continguts i galeries d’imatges.
- 🎨 **Estètica limitada pel temps**: encara que la web és funcional i ordenada, el disseny podria ser més refinat i visualment atractiu. Amb més temps, s’haurien pogut incorporar transicions suaus, animacions, icones personalitzades o un sistema de temes de color.
- 🧩 **Manteniment del codi net i coherent**: separar clarament HTML, CSS i JavaScript ha estat una decisió encertada, però alhora exigent, ja que cal mantenir una estructura clara en cada fitxer per evitar duplicacions o conflictes.


### 🌱 Possibilitats de millora

- 🌐 **Afegir funcionalitats dinàmiques**, com consultar horaris en temps real o rebre alertes d’incidències.
- 👁️‍🗨️ **Ampliar l’accessibilitat** per a usuaris amb dificultats visuals (contrasts, so interactiu...).
- 🔎 **Millorar el SEO** (posicionament als cercadors) i l’estructura semàntica.

> En definitiva, el projecte ha estat una experiència enriquidora que ha permès posar en pràctica habilitats tècniques i creatives, però també ha deixat marge per a seguir millorant i aprenent.

