import {Unit, TaskOrg} from "../../components/taskorg/taskorg"
import {ENTITY_TYPE_MAP} from "../entitytypeservice/mock-entity-types"
import {StringMap} from "../../util/KeyedCollection"
import {Guid} from "../../util/Guid";

export const MOCK_TASKORG:TaskOrg = {
  "forceSides": [{
    "forceName": "Friendly Forces",
    "forceId": "d4352d17-648d-46c5-9ab3-406c6680067d",
    "affiliations": [{
      "affiliateHandle": "8c7c4de7-9629-4354-be61-78a17cbe37a6",
      "relationship": "HOSTILE"
    }, {"affiliateHandle": "1d1fde82-28d7-4056-b022-926929d272b3", "relationship": "NEUTRAL"}],
    "subordinateUnits": [{
      "unitName": "1st Squad",
      "unitId": "e9c2d1ab-495b-4d70-b8e1-584b318b7d2e",
      "milstd2525Symbol": "10231000121211000000",
      "subordinateEntities": [{
        "entityName": "Squad Leader",
        "entityId": "9e2edd41-ccdc-4275-8a79-d482403c2d2a",
        "entityType": {
          "typeId": "Soldier",
          "milstd2525Symbol": "10231500001101030000",
          "acquireStandardName": "ICFullyLoaded_entity"
        },
        "parentId": "e9c2d1ab-495b-4d70-b8e1-584b318b7d2e",
        "location": {"latitude": 41.37280320059165, "longitude": -73.98064160646055, "altitude": 0}
      }],
      "subordinateUnits": [{
        "unitName": "Fire Team 1",
        "unitId": "c1197a6d-1faa-45d1-a87f-570c7dffe39b",
        "milstd2525Symbol": "10231000111211000000",
        "parentId": "e9c2d1ab-495b-4d70-b8e1-584b318b7d2e",
        "subordinateUnits": [],
        "subordinateEntities": [{
          "entityName": "Fire Team Leader",
          "entityId": "acc11005-03f7-4fba-b83a-7f1b3b431a9a",
          "entityType": {
            "typeId": "Soldier",
            "milstd2525Symbol": "10231500001101030000",
            "acquireStandardName": "ICFullyLoaded_entity"
          },
          "parentId": "c1197a6d-1faa-45d1-a87f-570c7dffe39b",
          "location": {"latitude": 41.37260192063911, "longitude": -73.98118877709959, "altitude": 0}
        }, {
          "entityName": "Rifleman",
          "entityId": "3fc3f9a3-e933-4e4a-a3f6-710d0ceabdeb",
          "entityType": {
            "typeId": "Soldier",
            "milstd2525Symbol": "10231500001101030000",
            "acquireStandardName": "ICFullyLoaded_entity"
          },
          "parentId": "c1197a6d-1faa-45d1-a87f-570c7dffe39b",
          "location": {"latitude": 41.37252140848369, "longitude": -73.98114586175535, "altitude": 0}
        }, {
          "entityName": "Automatic Rifleman",
          "entityId": "b35771f5-112f-4a96-a53f-4ba7180aa3f7",
          "entityType": {
            "typeId": "Automatic Rifleman",
            "milstd2525Symbol": "10231500001101030000",
            "acquireStandardName": "ICFullyLoaded_entity"
          },
          "parentId": "c1197a6d-1faa-45d1-a87f-570c7dffe39b",
          "location": {"latitude": 41.373294321062104, "longitude": -73.9799656897888, "altitude": 0}
        }, {
          "entityName": "Grenadier",
          "entityId": "c0e68fef-3f10-4df7-a677-0f2124cef5db",
          "entityType": {
            "typeId": "Grenadier",
            "milstd2525Symbol": "10231500001102010000",
            "acquireStandardName": "ICFullyLoaded_entity"
          },
          "parentId": "c1197a6d-1faa-45d1-a87f-570c7dffe39b",
          "location": {"latitude": 41.372787098218325, "longitude": -73.981263878952, "altitude": 0}
        }]
      }, {
        "unitName": "Fire Team 2",
        "unitId": "071cb6ae-70d2-409e-8c6a-a8ffb5f2d793",
        "milstd2525Symbol": "10231000111211000000",
        "parentId": "e9c2d1ab-495b-4d70-b8e1-584b318b7d2e",
        "subordinateUnits": [],
        "subordinateEntities": [{
          "entityName": "Fire Team Leader",
          "entityId": "b6ebeec6-dc96-4b38-bae6-883cf7cb79d6",
          "entityType": {
            "typeId": "Soldier",
            "milstd2525Symbol": "10231500001101030000",
            "acquireStandardName": "ICFullyLoaded_entity"
          },
          "parentId": "071cb6ae-70d2-409e-8c6a-a8ffb5f2d793",
          "location": {"latitude": 41.372915917093046, "longitude": -73.9800729781494, "altitude": 0}
        }, {
          "entityName": "Rifleman",
          "entityId": "dfff895b-e28e-4eeb-9828-0b2be374e771",
          "entityType": {
            "typeId": "Soldier",
            "milstd2525Symbol": "10231500001101030000",
            "acquireStandardName": "ICFullyLoaded_entity"
          },
          "parentId": "071cb6ae-70d2-409e-8c6a-a8ffb5f2d793",
          "location": {"latitude": 41.37290786592084, "longitude": -73.97998714746092, "altitude": 0}
        }, {
          "entityName": "Automatic Rifleman",
          "entityId": "05e8f4bc-6d3e-47b9-921f-972df38ec5c7",
          "entityType": {
            "typeId": "Automatic Rifleman",
            "milstd2525Symbol": "10231500001101030000",
            "acquireStandardName": "ICFullyLoaded_entity"
          },
          "parentId": "071cb6ae-70d2-409e-8c6a-a8ffb5f2d793",
          "location": {"latitude": 41.37299642876013, "longitude": -73.98088836968992, "altitude": 0}
        }, {
          "entityName": "Grenadier",
          "entityId": "af2ee28c-6140-4334-b5b7-f418310561c7",
          "entityType": {
            "typeId": "Grenadier",
            "milstd2525Symbol": "10231500001102010000",
            "acquireStandardName": "ICFullyLoaded_entity"
          },
          "parentId": "071cb6ae-70d2-409e-8c6a-a8ffb5f2d793",
          "location": {"latitude": 41.373117196074, "longitude": -73.9802553683624, "altitude": 0}
        }]
      }]
    }]
  }, {
    "forceName": "Enemy Forces",
    "forceId": "8c7c4de7-9629-4354-be61-78a17cbe37a6",
    "affiliations": [{
      "affiliateHandle": "d4352d17-648d-46c5-9ab3-406c6680067d",
      "relationship": "HOSTILE"
    }, {"affiliateHandle": "1d1fde82-28d7-4056-b022-926929d272b3", "relationship": "NEUTRAL"}],
    "subordinateUnits": []
  }, {
    "forceName": "Neutral Forces",
    "forceId": "1d1fde82-28d7-4056-b022-926929d272b3",
    "affiliations": [{
      "affiliateHandle": "d4352d17-648d-46c5-9ab3-406c6680067d",
      "relationship": "NEUTRAL"
    }, {"affiliateHandle": "8c7c4de7-9629-4354-be61-78a17cbe37a6", "relationship": "NEUTRAL"}],
    "subordinateUnits": []
  }],
  graphics: [
    {
      "Affiliation": "FRIEND",
      "graphicType": "Line",
      "line": {
        "waypoints": [{
          "latitude": 41.37252569047802,
          "longitude": -73.98218844384769,
          "altitude": 0
        }, {
          "latitude": 41.370593201370355,
          "longitude": -73.9867803962403,
          "altitude": 0
        }, {
          "latitude": 41.37258984879672,
          "longitude": -73.99285292272953,
          "altitude": 0
        }, {
          "latitude": 41.37088292754658,
          "longitude": -73.99623250872799,
          "altitude": 0
        }, {
          "latitude": 41.36552043768075,
          "longitude": -74.00152719064323,
          "altitude": 0
        }, {
          "latitude": 41.36206599021389,
          "longitude": -74.00623446812432,
          "altitude": 0
        }, {
          "latitude": 41.357504075676765,
          "longitude": -74.00841644548791,
          "altitude": 0
        }, {
          "latitude": 41.35290358917541,
          "longitude": -73.9997227356834,
          "altitude": 0
        }, {
          "latitude": 41.34905685056122,
          "longitude": -74.0018990131054,
          "altitude": 0
        }, {
          "latitude": 41.34481369847199,
          "longitude": -74.00659204073236,
          "altitude": 0
        }, {
          "latitude": 41.34681600271864,
          "longitude": -74.0170066392626,
          "altitude": 0
        }, {
          "latitude": 41.3448530902358,
          "longitude": -74.02255726128169,
          "altitude": 0
        }, {
          "latitude": 41.34876872499585,
          "longitude": -74.02310097439084,
          "altitude": 0
        }, {
          "latitude": 41.349824409072596,
          "longitude": -74.02886599500789,
          "altitude": 0
        }, {
          "latitude": 41.353831464036546,
          "longitude": -74.03277847357816,
          "altitude": 0
        }, {
          "latitude": 41.35544834017919,
          "longitude": -74.03679464938676,
          "altitude": 0
        }, {
          "latitude": 41.35599905921697,
          "longitude": -74.04154931932226,
          "altitude": 0
        }, {
          "latitude": 41.35124900684966,
          "longitude": -74.04478496117474,
          "altitude": 0
        }, {
          "latitude": 41.34861611748559,
          "longitude": -74.05103763927877,
          "altitude": 0
        }, {
          "latitude": 41.34601092550851,
          "longitude": -74.057082221739,
          "altitude": 0
        }, {
          "latitude": 41.34380616205059,
          "longitude": -74.06491103152376,
          "altitude": 0
        }, {
          "latitude": 41.34218823605759,
          "longitude": -74.07140035707044,
          "altitude": 0
        }, {
          "latitude": 41.34131481736574,
          "longitude": -74.07885072357914,
          "altitude": 0
        }, {
          "latitude": 41.33991148017582,
          "longitude": -74.08111678512938,
          "altitude": 0
        }, {
          "latitude": 41.34114305362528,
          "longitude": -74.08722799583614,
          "altitude": 0
        }, {
          "latitude": 41.346333926067146,
          "longitude": -74.08556291332332,
          "altitude": 0
        }, {
          "latitude": 41.35034672027899,
          "longitude": -74.08378623449369,
          "altitude": 0
        }, {
          "latitude": 41.35834471370628,
          "longitude": -74.07955049822829,
          "altitude": 0
        }, {
          "latitude": 41.36330963233829,
          "longitude": -74.0771751380301,
          "altitude": 0
        }, {
          "latitude": 41.366436110690636,
          "longitude": -74.07324087589978,
          "altitude": 0
        }, {"latitude": 41.367952101545356, "longitude": -74.07231068786615, "altitude": 0}]
      },
      "ObjectHandle": "55fc0a17-d4af-4504-b232-c393a02979d4",
      "Owner": "Fire Team 1",
      "SymbolIdentifier": "G*C*OGC---*****",
      "graphicName": "Road March"
    }
  ]
}


