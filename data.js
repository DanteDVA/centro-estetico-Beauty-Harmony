var APP_DATA = {
  "scenes": [
    {
      "id": "0-esterno",
      "name": "esterno",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -3.139311521745954,
        "pitch": -0.10251163283759723,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": -2.81025602423078,
          "pitch": -0.001528235230468411,
          "rotation": 0,
          "target": "1-ingresso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ingresso",
      "name": "ingresso",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -3.0424630039613163,
        "pitch": 0.19411198866477442,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 2.6283272269192235,
          "pitch": 0.3136485537407214,
          "rotation": 0,
          "target": "2-reception"
        },
        {
          "yaw": 0.23057922949805487,
          "pitch": 0.2407066639305917,
          "rotation": 0,
          "target": "0-esterno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-reception",
      "name": "reception",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 3.1288288810188636,
        "pitch": 0.1594687951641589,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": -0.7284869727946912,
          "pitch": 0.16252533215218712,
          "rotation": 0,
          "target": "0-esterno"
        },
        {
          "yaw": -1.9641888592068888,
          "pitch": 0.1412293041775463,
          "rotation": 0,
          "target": "3-laboratorio-unghie"
        },
        {
          "yaw": -2.390818713642684,
          "pitch": 0.1137631811298423,
          "rotation": 0,
          "target": "4-laboratorio-massaggi"
        },
        {
          "yaw": -2.767157311370404,
          "pitch": 0.09350597956846762,
          "rotation": 0,
          "target": "5-antibagno"
        },
        {
          "yaw": 2.2540622150182923,
          "pitch": 0.07944851908954043,
          "rotation": 0,
          "target": "7-laboratorio-trattamenti-1"
        },
        {
          "yaw": 1.7532141397336876,
          "pitch": 0.08891895694086216,
          "rotation": 0,
          "target": "8-laboratorio-trattamenti-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-laboratorio-unghie",
      "name": "laboratorio unghie",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.864627363695348,
        "pitch": 0.719616199665218,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 0.9685864560943482,
          "pitch": 0.15730175832980464,
          "rotation": 0,
          "target": "2-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-laboratorio-massaggi",
      "name": "laboratorio massaggi",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.15906295232460543,
        "pitch": 0.21556877925467433,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 2.226788221786123,
          "pitch": 0.15897455623512435,
          "rotation": 0,
          "target": "2-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-antibagno",
      "name": "antibagno",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -3.1026369440396326,
        "pitch": 0.20716537873482288,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 1.6629709846004186,
          "pitch": 0.22273559436471402,
          "rotation": 0,
          "target": "2-reception"
        },
        {
          "yaw": -1.255382948346547,
          "pitch": 0.37052633776887944,
          "rotation": 0,
          "target": "6-bagno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bagno",
      "name": "bagno",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.8508993343111086,
        "pitch": 0.2195689221142345,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 1.5684247647053935,
          "pitch": 0.09618320411968284,
          "rotation": 0,
          "target": "2-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-laboratorio-trattamenti-1",
      "name": "laboratorio trattamenti 1",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.3554848639021166,
        "pitch": 0.45783700281871376,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 0.6516999536897643,
          "pitch": 0.1320061212994048,
          "rotation": 0,
          "target": "2-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-laboratorio-trattamenti-2",
      "name": "laboratorio trattamenti 2",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.933196274574799,
        "pitch": 0.49112500673366455,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 0.868873518056752,
          "pitch": 0.16036572648270742,
          "rotation": 0,
          "target": "2-reception"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Beauty & Harmony",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
