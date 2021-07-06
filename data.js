var APP_DATA = {
  "scenes": [
    {
      "id": "0-unit02_hall",
      "name": "Unit02_Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.644252271540358,
        "pitch": 0.06264759787195473,
        "fov": 1.1055104001199807
      },
      "linkHotspots": [
        {
          "yaw": -0.021419944577417027,
          "pitch": 0.5188163160471895,
          "rotation": 0,
          "target": "1-unit02_kitchenliving"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-unit02_kitchenliving",
      "name": "Unit02_KitchenLiving",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.2282271675084644,
        "pitch": 0.11945860677814224,
        "fov": 1.1055104001199807
      },
      "linkHotspots": [
        {
          "yaw": -1.4275180698100023,
          "pitch": 0.2936368444522568,
          "rotation": 24.347343065320914,
          "target": "2-unit02_bedroom"
        },
        {
          "yaw": -0.39323992988795986,
          "pitch": 0.3561018836966259,
          "rotation": 1.5707963267948966,
          "target": "0-unit02_hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-unit02_bedroom",
      "name": "Unit02_Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.6413571574387698,
        "pitch": 0.021313235355117754,
        "fov": 1.1055104001199807
      },
      "linkHotspots": [
        {
          "yaw": 0.008550302649380725,
          "pitch": 0.28188759313725065,
          "rotation": 10.995574287564278,
          "target": "1-unit02_kitchenliving"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "DosGuindais_Unit02",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
