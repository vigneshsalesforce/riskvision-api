module.exports = {
    name: "brewerysiteinspection",
    label: "Brewery Site Inspection",
    description: "Brewery Site Inspection Form with 50 fields",
    screens: [
        {
            name: "General Information",
            sequence: 1,
            sections: [
                {
                    name: "Basic Details",
                    sequence: 1,
                    fields: [
                        {
                            name: "BrewerySiteInspectionName",
                            label: "Brewery Site Inspection Name",
                            type: "text",
                            sequence: 1,
                            required: true,
                        },
                        {
                            name: "Company",
                            label: "Company",
                            type: "lookup",
                            sequence: 2,
                            options:{
                                dynamic:{
                                    objectName:"account",
                                    displayField:"Name",
                                    valueField: "_id"
                                }
                            }
                        },
                        {
                           name : "Location",
                           label : "Location",
                           type : "lookup",
                           sequence : 3,
                           options : {
                               dynamic : {
                                   objectName : "location",
                                   displayField : "Name",
                                   valueField : "_id"
                               }
                           }  
                        },
                        {
                            name: "ConferredWith",
                            label: "Conferred With",
                            type: "textarea",
                            sequence: 4,
                        },
                        {
                            name: "DateofAssessment",
                            label: "Date of Assessment",
                            type: "date",
                            sequence: 5,
                        },
                         {
                            name: "DateofInspection",
                            label: "Date of Inspection",
                            type: "date",
                            sequence: 6,
                        },
                         {
                            name: "ReviewedbyName",
                            label: "Reviewed by Name",
                            type: "text",
                            sequence: 7,
                         },
                          {
                            name: "ReviewedBy",
                            label: "Reviewed By",
                            type: "lookup",
                            sequence: 8,
                             options:{
                                 dynamic:{
                                      objectName:"user",
                                     displayField:"Name",
                                      valueField: "_id"
                                 }
                             }
                        },
                        {
                            name: "FullAddress",
                            label: "Full Address",
                            type: "text",
                            sequence: 9,
                        },
                        {
                            name: "Location",
                            label: "Location",
                            type: "lookup",
                            sequence: 10,
                             options:{
                                 dynamic:{
                                     objectName:"location",
                                     displayField:"Name",
                                      valueField: "_id"
                                 }
                             }
                        },
                    ],
                },
            ],
        },
        {
            name: "Brewery Safety Checks",
            sequence: 2,
            sections: [

                 {
                   name: "Safety Checks 1",
                   sequence: 1,
                    fields: [
                        {
                            name: "AdequateLightingintheBrewery",
                            label: "Adequate lighting in the Brewery?",
                            type: "dropdown",
                            sequence: 11,
                             options: {
                                static: [
                                    "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                        {
                            name: "AdequateVentilationintheBrewery",
                            label: "Adequate ventilation in the Brewery?",
                            type: "dropdown",
                            sequence: 12,
                             options: {
                                static: [
                                   "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                        {
                           name: "Allfireextinguishermountedaccessibl",
                            label: "All fire extinguisher mounted, accessibl",
                            type: "dropdown",
                            sequence: 13,
                            options: {
                                static: [
                                    "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                        {
                           name: "Anymechanicalaidsavailabletoassist",
                            label: "Any mechanical aids available to assist",
                            type: "dropdown",
                            sequence: 14,
                             options: {
                                static: [
                                  "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                         {
                            name: "Appropriatebundinginplace",
                             label: "Appropriate bunding in-place to ensure t",
                            type: "dropdown",
                            sequence: 15,
                            options: {
                                static: [
                                 "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },

                    ],
                },
                {
                  name: "Safety Checks 2",
                  sequence: 2,
                    fields: [
                        {
                            name: "AreOxygentankssafelysecuredandstor",
                            label: "Are Oxygen tanks safely secured and stor",
                            type: "dropdown",
                            sequence: 16,
                            options: {
                                static: [
                                   "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                        {
                            name: "AreSafetyDataSheetsSDSsaccessible",
                            label: "Are Safety Data Sheets (SDSs) accessible",
                            type: "dropdown",
                            sequence: 17,
                               options: {
                                static: [
                                   "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                          {
                             name: "Areadrainscoveredtopreventpollution",
                            label: "Area drains covered to prevent pollution",
                            type: "dropdown",
                            sequence: 18,
                             options: {
                                static: [
                                   "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                          {
                            name: "Areallcannedgoodsandpalletssecured",
                             label: "Are all canned goods and pallets secured",
                            type: "dropdown",
                            sequence: 19,
                              options: {
                                static: [
                                  "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                        {
                            name: "Areallconfinedspacesidentifiedands",
                            label: "Are all confined spaces identified and s",
                            type: "dropdown",
                            sequence: 20,
                             options: {
                                static: [
                                    "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                    ],
                },
                {
                   name: "Safety Checks 3",
                    sequence: 3,
                     fields: [
                        {
                            name: "Areallconveyorbeltsonthebottlingc",
                            label: "Are all conveyor belts on the bottling/c",
                            type: "dropdown",
                            sequence: 21,
                             options: {
                                static: [
                                   "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                        {
                            name: "Areallguardsandsafetyfeaturesprese",
                            label: "Are all guards and safety features prese",
                            type: "dropdown",
                            sequence: 22,
                              options: {
                                static: [
                                   "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                        {
                             name: "Arechillersguardedwithappropriatesi",
                            label: "Are chillers guarded with appropriate si",
                            type: "dropdown",
                            sequence: 23,
                              options: {
                                static: [
                                    "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                          {
                            name: "Arechillersservicedappropriately",
                            label: "Are chillers serviced appropriately?",
                            type: "dropdown",
                            sequence: 24,
                            options: {
                                static: [
                                     "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                          {
                             name: "Areforkliftloadssecuredappropriately",
                            label: "Are forklift loads secured appropriately",
                            type: "dropdown",
                            sequence: 25,
                             options: {
                                static: [
                                    "Partially Adequate",
                                    "Adequate",
                                    "Inadequate",
                                    "N/A",
                                ]
                            },
                        },
                    ],
                },
                ],
        },
        {
            name: "Comments Section",
            sequence: 3,
            sections: [
               {
                    name:"Comments Section",
                   sequence: 1,
                    fields: [
                        {
                            name: "Commentsboiling",
                             label: "Comments Boiling",
                            type: "textarea",
                            sequence: 26,
                        },
                        {
                             name: "Commentsconfinedspaces",
                            label: "Comments Confined spaces",
                            type: "textarea",
                            sequence: 27,
                        },
                        {
                             name: "Commentscooling",
                            label: "Comments Cooling",
                            type: "textarea",
                            sequence: 28,
                        },
                         {
                             name: "Commentsdeliveryofmaterial",
                            label: "Comments Delivery of Material",
                            type: "textarea",
                            sequence: 29,
                        },
                        {
                           name: "Commentsemergency",
                            label: "Comments Emergency",
                             type: "textarea",
                            sequence: 30,
                        },
                         {
                           name: "Commentsfermentation",
                           label: "Comments Fermentation",
                             type: "textarea",
                            sequence: 31,
                        },
                        {
                           name: "Commentshazardous",
                             label: "Comments Hazardous",
                             type: "textarea",
                            sequence: 32,
                        },
                           {
                           name: "Commentsheat",
                           label: "Comments Heat",
                            type: "textarea",
                            sequence: 33,
                        },
                          {
                           name: "Commentshousekeeping",
                           label: "Comments House Keeping",
                             type: "textarea",
                            sequence: 34,
                        },
                          {
                            name: "Commentskegging",
                            label: "Comments Kegging",
                             type: "textarea",
                            sequence: 35,
                        },
                          {
                            name: "Commentsmachinery",
                             label: "Comments Machinery",
                             type: "textarea",
                            sequence: 36,
                        },
                          {
                            name: "Commentsmashing",
                             label: "Comments Mashing",
                             type: "textarea",
                            sequence: 37,
                        },
                          {
                            name: "Commentsmaturing",
                             label: "Comments Maturing",
                             type: "textarea",
                            sequence: 38,
                        },
                         {
                           name: "Commentsmilling",
                            label: "Comments Milling",
                            type: "textarea",
                            sequence: 39,
                        },
                         {
                           name: "Commentsrefrigerated",
                           label: "Comments Refrigerated",
                           type: "textarea",
                            sequence: 40,
                        },

                    ],
                },

            ],
        },
    ],
};
