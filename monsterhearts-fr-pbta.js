Hooks.on("renderSettings", (app, html) => {
  let lotdSection = $("<h2>Monsterhearts Liens</h2>");
  html.find("#settings-game").after(lotdSection);
  let lotdDiv = $(`<div></div>`);
  lotdSection.after(lotdDiv);
  let helpButton = $(
    `<button><i class="fa-solid fa-cart-shopping"></i> Lapin Marteau <sup><i class="fa-light fa-up-right-from-square"></i></sup></button>`
  );
  lotdDiv.append(helpButton);
  helpButton.on("click", (ev) => {
    ev.preventDefault();
    window.open("https://www.gameontabletop.com/cf1941/monsterhearts.html", "_blank");
  });

  let dicordButton = $(
    `<button><i class="fab fa-github"></i> Dépôt du module <sup><i class="fa-light fa-up-right-from-square"></i></sup></button>`
  );
  lotdDiv.append(dicordButton);
  dicordButton.on("click", (ev) => {
    ev.preventDefault();
    window.open("https://github.com/YanKlInnomme/FoundryVTT-monsterhearts-fr-pbta", "_blank");
  });

  let patreonButton = $(
    `<button><i class="fa-solid fa-mug-hot fa-bounce"></i> Offrez-moi un café <sup><i class="fa-light fa-up-right-from-square"></i></sup></button>`
  );
  lotdDiv.append(patreonButton);
  patreonButton.on("click", (ev) => {
    ev.preventDefault();
    window.open("https://www.buymeacoffee.com/yank", "_blank");
  });
});

Hooks.once('pbtaSheetConfig', () => {
  // Désactive le formulaire de configuration de la feuille.
  game.settings.set('pbta', 'sheetConfigOverride', true);
  // Définit des balises personnalisées.
  game.pbta.tagConfigOverride = {
    // Balises disponibles pour tout acteur et objet
    general: '[{"value":"fire"}]',
    actor: {
      // Balises disponibles pour tous les acteurs
      all: '[{"value":"person"}]',
      // Balises disponibles pour un type d'acteur spécifique configuré sur game.pbta.sheetConfig.actorTypes (par exemple, "personnage", "pnj")
      character: '[{"value":"mook"}]'
    },
    item: {
      // Balises disponibles pour tous les acteurs
      all: '[{"value":"consumable"}]',
      // Balises disponibles pour un type d'objet spécifique (par exemple, "équipement", "mouvement")
      move: '[{"value":"sword"}]'
    }
  }
  // Remplace game.pbta.sheetConfig par votre propre version.
  game.pbta.sheetConfig = {
    "rollFormula": "2d6",
    "rollResults": {
      "failure": {
        "start": null,
        "end": 6,
        "label": "Échec. Marquer 1XP"
      },
      "partial": {
        "start": 7,
        "end": 9,
        "label": "Succès partiel"
      },
      "success": {
        "start": 10,
        "end": 12,
        "label": "Succès !"
      }
    },
    "actorTypes": {
      "character": {
        "stats": {
          "hot": {
            "label": "Sexy",
            "value": 0
          },
          "cold": {
            "label": "Glacial",
            "value": 0
          },
          "volatile": {
            "label": "Impulsif",
            "value": 0
          },
          "dark": {
            "label": "Ténébreux",
            "value": 0
          }
        },
        "attrTop": {
          "Sexmove": {
            "label": "Action sexuelle",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          },
          "DarkestSelf": {
            "label": "Démon intérieur",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          }
        },
        "attrLeft": {
          "Harm": {
            "label": "Dégâts",
            "description" : "Lorsque vous atteignez 4 points de dégâts, vous pouvez choisir de 'Tromper la Mort' ou de commencer un nouveau personnage.",
            "customLabel": false,
            "userLabel": false,
            "type": "Clock",
            "value": 0,
            "max": 4,
            "steps": [
              false,
              false,
              false,
              false
            ]
          },
          "look": {
            "label": "Apparence",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "Text",
            "value": ""
          },
          "eyes": {
            "label": "Regard",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "Text",
            "value": ""
          },
          "origin": {
            "label": "Origine",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "Text",
            "value": ""
          },
          "xp": {
            "label": "Expérience",
            "description": "Lorsque vous échouez à un jet ou lorsqu'un mouvement vous l'impose, marquez 1XP. Lorsque vous atteignez 5XP, vous pouvez choisir l'une de vos options de progression.",
            "customLabel": false,
            "userLabel": false,
            "type": "Xp",
            "value": 0,
            "max": 5,
            "steps": [
              false,
              false,
              false,
              false,
              false
            ]
          },
          "Advancement1": {
            "label": "1ère progression",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "Text",
            "value": ""
          },
          "Advancement2": {
            "label": "2nd progression",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "Text",
            "value": ""
          },
          "Advancement3": {
            "label": "3ème progression",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "Text",
            "value": ""
          },
          "Advancement4": {
            "label": "4ème progression",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "Text",
            "value": ""
          },
          "Advancement5": {
            "label": "5ème progression",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "Text",
            "value": ""
          }
        },
        "moveTypes": {
          "Moves": {
            "label": "Actions",
            "moves": []
          },
          "PlaybookMoves": {
            "label": "Actions de mue",
            "moves": []
          },
          "Bargains": {
            "label": "Pactes",
            "moves": []
          },
          "Hexes": {
            "label": "Malédictions",
            "moves": []
          }
        },
        "equipmentTypes": {
          "Strings": {
            "label": "Ascendants",
            "moves": []
          },
          "SympatheticTokens": {
            "label": "Fétiches",
            "moves": []
          }
        }
      },
      "npc": {
        "attrTop": {
          "Harm": {
            "label": "Dégâts",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "Resource",
            "value": 0
          },
          "armour": {
            "label": "Armure",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "Number",
            "value": 0
          },
          "Type": {
            "label": "Type de PNJ",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "ListMany",
            "condition": false,
            "options": {
              "0": { 
                "label": "Monstre",
                "value": false
             },
              "1": { 
                "label": "Larbin",
                "value": false
             },
              "2": { 
                "label": "Témoin",
                "value": false
             },
              "3": { 
                "label": "Lieu",
                "value": false
             }
            }
          }
        },
        "attrLeft": {
          "Powers": {
            "label": "Compétences",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          },
          "Attacks": {
            "label": "Attaques",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          },
          "Weakness": {
            "label": "Faiblesses",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          },
          "Description": {
            "label": "Description",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          },
          "Motivation": {
            "label": "Motivation",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          }
        },
        "moveTypes": {
          "mc": {
            "label": "Actions MJ",
            "moves": []
          }
        }
      }
    }
  };
});
